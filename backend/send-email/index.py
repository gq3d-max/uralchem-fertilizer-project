import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка email с данными из контактной формы"""
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }

    try:
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', '')
        email = body.get('email', '')
        company = body.get('company', '')
        message = body.get('message', '')

        if not name or not email:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Name and email are required'})
            }

        smtp_host = os.environ.get('SMTP_HOST')
        smtp_port = int(os.environ.get('SMTP_PORT', '465'))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')

        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Новая заявка с сайта от {name}'
        msg['From'] = smtp_user
        msg['To'] = 'alex@uralkhimpartnership.ru'

        html_body = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
              <h2 style="color: #2c5282; border-bottom: 2px solid #48bb78; padding-bottom: 10px;">
                Новая заявка на коммерческое предложение
              </h2>
              <div style="margin: 20px 0;">
                <p><strong style="color: #2c5282;">Имя:</strong> {name}</p>
                <p><strong style="color: #2c5282;">Email:</strong> {email}</p>
                <p><strong style="color: #2c5282;">Компания:</strong> {company if company else 'Не указана'}</p>
                <p><strong style="color: #2c5282;">Сообщение:</strong></p>
                <div style="background-color: #f7fafc; padding: 15px; border-left: 4px solid #48bb78; margin-top: 10px;">
                  {message if message else 'Не указано'}
                </div>
              </div>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
              <p style="font-size: 12px; color: #718096;">
                Это письмо отправлено автоматически с сайта ferti-global.com
              </p>
            </div>
          </body>
        </html>
        """

        html_part = MIMEText(html_body, 'html', 'utf-8')
        msg.attach(html_part)

        client_msg = MIMEMultipart('alternative')
        client_msg['Subject'] = 'Ваша заявка принята — FertiGlobal Emirates'
        client_msg['From'] = smtp_user
        client_msg['To'] = email

        client_html = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
              <div style="text-align: center; margin-bottom: 20px;">
                <div style="display: inline-block; width: 60px; height: 60px; background-color: #48bb78; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;">
                  <span style="color: white; font-size: 30px;">✓</span>
                </div>
                <h2 style="color: #2c5282; margin: 0;">Спасибо за ваш запрос!</h2>
              </div>
              
              <p style="font-size: 16px;">Здравствуйте, {name}!</p>
              
              <p style="font-size: 16px;">
                Мы получили ваш запрос на коммерческое предложение по поставке азотных удобрений UralNitro Pro 46.
              </p>
              
              <div style="background-color: #f7fafc; padding: 20px; border-left: 4px solid #48bb78; margin: 20px 0;">
                <p style="margin: 0; font-size: 15px;"><strong>Что дальше?</strong></p>
                <p style="margin: 10px 0 0 0; font-size: 14px;">
                  Наш менеджер свяжется с вами в течение <strong>24 часов</strong> для уточнения деталей и подготовки персонального коммерческого предложения.
                </p>
              </div>
              
              <div style="background-color: #edf2f7; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0 0 10px 0; font-size: 14px; color: #2c5282;"><strong>Контактная информация:</strong></p>
                <p style="margin: 5px 0; font-size: 14px;">📧 Email: alex@uralkhimpartnership.ru</p>
                <p style="margin: 5px 0; font-size: 14px;">📱 Телефон: +7 933 777 60 62</p>
                <p style="margin: 5px 0; font-size: 14px;">💬 WhatsApp: +7 933 777 60 62</p>
              </div>
              
              <p style="font-size: 14px; color: #4a5568;">
                Если у вас возникли срочные вопросы, вы можете связаться с нами напрямую по указанным контактам.
              </p>
              
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0 20px 0;">
              
              <div style="text-align: center;">
                <p style="font-size: 16px; color: #2c5282; font-weight: bold; margin: 0;">FertiGlobal Emirates</p>
                <p style="font-size: 13px; color: #718096; margin: 5px 0;">Официальный партнер УралХим</p>
                <p style="font-size: 12px; color: #a0aec0; margin: 15px 0 0 0;">
                  ferti-global.com
                </p>
              </div>
            </div>
          </body>
        </html>
        """

        client_html_part = MIMEText(client_html, 'html', 'utf-8')
        client_msg.attach(client_html_part)

        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
            server.send_message(client_msg)

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Email sent successfully'
            })
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': 'Failed to send email',
                'details': str(e)
            })
        }