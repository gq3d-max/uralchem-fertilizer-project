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
                Это письмо отправлено автоматически с сайта uralkhimpartner.ru
              </p>
            </div>
          </body>
        </html>
        """

        html_part = MIMEText(html_body, 'html', 'utf-8')
        msg.attach(html_part)

        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_user, smtp_password)
            server.send_message(msg)

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
