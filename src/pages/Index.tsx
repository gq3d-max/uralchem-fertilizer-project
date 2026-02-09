import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    volume: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Ошибка",
        description: "Заполните обязательные поля",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/a6995de7-61fa-414a-b154-b95ec6578f90', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: `Телефон: ${formData.phone}\nОбъем: ${formData.volume} тонн\n\n${formData.message}`
        })
      });

      if (response.ok) {
        toast({
          title: "Успешно!",
          description: "Ваш запрос отправлен. Мы свяжемся с вами в ближайшее время."
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          volume: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить запрос. Попробуйте позже.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded flex items-center justify-center">
              <Icon name="Leaf" className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-base md:text-xl font-bold text-white">FertiGlobal Emirates</h1>
              <p className="text-xs text-white/80 hidden sm:block">UralKhim Partner</p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-6">
            <div className="hidden md:flex gap-6">
              <a href="#home" className="text-white hover:text-accent transition-colors">Главная</a>
              <a href="#about" className="text-white hover:text-accent transition-colors">О компании</a>
              <a href="#product" className="text-white hover:text-accent transition-colors">Продукция</a>
              <a href="#delivery" className="text-white hover:text-accent transition-colors">Условия</a>
              <a href="#contact" className="text-white hover:text-accent transition-colors">Контакты</a>
            </div>
            <a href="tel:+79337776062" className="flex items-center gap-1 md:gap-2 text-white hover:text-accent transition-colors whitespace-nowrap">
              <Icon name="Phone" size={16} className="md:hidden flex-shrink-0" />
              <Icon name="Phone" size={18} className="hidden md:block flex-shrink-0" />
              <span className="font-semibold text-xs md:text-base">+7 933 777 60 62</span>
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-accent font-semibold">🇦🇪 Поставки из ОАЭ</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Азотные удобрения<br />
                <span className="text-accent">мирового класса</span>
              </h2>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Прямые поставки UralNitro Pro 46 от производителя УралХим через нашу компанию в Дубае
              </p>
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-2 md:p-4 rounded border border-white/20">
                  <div className="text-xl md:text-3xl font-bold text-accent">46%</div>
                  <div className="text-xs md:text-sm text-white/80">Азот N</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-2 md:p-4 rounded border border-white/20">
                  <div className="text-xl md:text-3xl font-bold text-accent">100K</div>
                  <div className="text-xs md:text-sm text-white/80">тонн/месяц</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-2 md:p-4 rounded border border-white/20">
                  <div className="text-xl md:text-3xl font-bold text-accent">20</div>
                  <div className="text-xs md:text-sm text-white/80">дней FOB</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in max-w-full">
              <img 
                src="https://cdn.poehali.dev/projects/e2337ca5-ae7d-430a-b963-b32567a9167d/files/6f7ef9f5-24fe-4f48-aee3-1d04c9e73d99.jpg" 
                alt="Industrial facility"
                className="rounded-lg shadow-2xl border-4 border-white/20 w-full h-auto"
              />
              <div className="absolute bottom-2 right-2 md:-bottom-6 md:-right-6 bg-accent p-3 md:p-6 rounded-lg shadow-xl">
                <div className="text-white text-lg md:text-2xl font-bold">От $450</div>
                <div className="text-white/90 text-xs md:text-sm">за тонну FOB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">О компании FertiGlobal Emirates</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Официальный дистрибьютор азотных удобрений производства УралХим
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-l-4 border-accent hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="Building2" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Партнерство с УралХим</h3>
                    <p className="text-muted-foreground">
                      Прямые контракты с крупнейшим российским производителем минеральных удобрений
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-primary hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="Globe" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Регистрация в ОАЭ</h3>
                    <p className="text-muted-foreground">
                      Компания зарегистрирована в Дубае с полным пакетом экспортных лицензий
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-secondary hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="Ship" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Логистика FOB</h3>
                    <p className="text-muted-foreground">
                      Отгрузка из порта Новороссийск с полным документальным сопровождением
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-accent hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Гарантии качества</h3>
                    <p className="text-muted-foreground">
                      Сертификаты соответствия и лабораторные анализы для каждой партии
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">UralNitro Pro 46</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">Гранулированная карбамидная мочевина высшего качества</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="relative group">
                <img 
                  src="https://cdn.poehali.dev/projects/e2337ca5-ae7d-430a-b963-b32567a9167d/files/e243085b-4828-428b-947c-85281843351c.jpg"
                  alt="Urea granules"
                  className="rounded-lg shadow-lg w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-lg flex items-end p-6">
                  <p className="text-white font-semibold text-lg">Гранулы белого цвета диаметром 2-4 мм</p>
                </div>
              </div>

              <Card className="p-8 border-2 border-accent">
                <h3 className="text-2xl font-bold text-primary mb-6">Технические характеристики</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-muted-foreground">Химическое название</span>
                    <span className="font-semibold text-primary">Карбамид CO(NH₂)₂</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-muted-foreground">Содержание азота</span>
                    <span className="font-bold text-2xl text-accent">46%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-muted-foreground">Форма выпуска</span>
                    <span className="font-semibold text-primary">Гранулы 2-4 мм</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-muted-foreground">pH раствора</span>
                    <span className="font-semibold text-primary">~7.0 (нейтральный)</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-muted-foreground">Растворимость</span>
                    <span className="font-semibold text-primary">Отличная</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-muted-foreground">Цвет</span>
                    <span className="font-semibold text-primary">Белый/сероватый</span>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary to-secondary text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Droplets" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Применение</h3>
                  <p className="text-white/80">Универсальное азотное удобрение</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded">
                  <Icon name="Sprout" className="mb-3" size={32} />
                  <h4 className="font-bold mb-2">Почвенное внесение</h4>
                  <p className="text-sm text-white/80">Основное и припосевное удобрение</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded">
                  <Icon name="Droplet" className="mb-3" size={32} />
                  <h4 className="font-bold mb-2">Капельный полив</h4>
                  <p className="text-sm text-white/80">Идеально растворяется для фертигации</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded">
                  <Icon name="CloudRain" className="mb-3" size={32} />
                  <h4 className="font-bold mb-2">Внекорневая подкормка</h4>
                  <p className="text-sm text-white/80">Быстрое усвоение через листья</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">Условия поставки</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">Прозрачные условия работы с фиксированными сроками</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center border-t-4 border-accent hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="DollarSign" className="text-accent" size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">$450</div>
                <div className="text-sm text-muted-foreground">за тонну FOB</div>
              </Card>

              <Card className="p-6 text-center border-t-4 border-primary hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" className="text-primary" size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20</div>
                <div className="text-sm text-muted-foreground">дней с момента оплаты</div>
              </Card>

              <Card className="p-6 text-center border-t-4 border-secondary hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Package" className="text-secondary" size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">предоплата</div>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center">
                    <Icon name="TrendingUp" className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">Объемы поставок</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-muted rounded">
                    <div className="text-2xl md:text-3xl font-bold text-accent">1</div>
                    <div>
                      <div className="font-semibold text-primary">Первый месяц</div>
                      <div className="text-muted-foreground">50 000 тонн</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted rounded">
                    <div className="text-2xl md:text-3xl font-bold text-primary">2+</div>
                    <div>
                      <div className="font-semibold text-primary">Последующие месяцы</div>
                      <div className="text-muted-foreground">100 000 тонн ежемесячно</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/e2337ca5-ae7d-430a-b963-b32567a9167d/files/b8383000-f111-4d2f-bb61-5fc5fc18145f.jpg"
                  alt="Shipping port"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/90 rounded flex items-center justify-center">
                      <Icon name="Anchor" className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary">Базис поставки</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded border-l-4 border-primary">
                      <div className="font-bold text-primary mb-1">FOB Новороссийск</div>
                      <div className="text-sm text-muted-foreground">Россия, Черноморский порт</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded">
                      <div className="font-semibold text-primary mb-2">Включено:</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>✓ Доставка до порта</li>
                        <li>✓ Погрузка на судно</li>
                        <li>✓ Экспортные документы</li>
                        <li>✓ Сертификаты качества</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="mt-8 p-8 bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded flex items-center justify-center flex-shrink-0">
                  <Icon name="FileText" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Условия оплаты</h3>
                  <p className="text-muted-foreground mb-4">
                    100% предоплата банковским переводом. После получения оплаты запускается процесс отгрузки в течение 20 рабочих дней.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">SWIFT перевод</span>
                    <span className="px-3 py-1 bg-secondary text-white text-sm rounded-full">Аккредитив</span>
                    <span className="px-3 py-1 bg-accent text-white text-sm rounded-full">Контракт</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 text-white animate-fade-in">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-lg text-white/90">Готовы обсудить условия поставки азотных удобрений</p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Компания *</label>
                    <Input 
                      placeholder="Название вашей компании" 
                      className="border-2"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Контактное лицо *</label>
                    <Input 
                      placeholder="ФИО представителя" 
                      className="border-2"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Email *</label>
                    <Input 
                      type="email" 
                      placeholder="company@example.com" 
                      className="border-2"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Телефон *</label>
                    <Input 
                      placeholder="+971 XX XXX XXXX" 
                      className="border-2"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Объем поставки (тонн) *</label>
                  <Input 
                    placeholder="Укажите требуемый объем" 
                    className="border-2"
                    value={formData.volume}
                    onChange={(e) => setFormData({...formData, volume: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Укажите дополнительную информацию о вашем запросе..." 
                    className="min-h-32 border-2"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  {isSubmitting ? 'Отправка...' : 'Отправить запрос на коммерческое предложение'}
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-sm">Email</div>
                    <a href="mailto:alex@uralkhimpartnership.ru" className="text-sm text-muted-foreground hover:text-accent transition-colors">alex@uralkhimpartnership.ru</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-sm">Телефон</div>
                    <a href="tel:+79337776062" className="text-sm text-muted-foreground hover:text-accent transition-colors">+7 933 777 60 62</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-sm">Офис</div>
                    <div className="text-sm text-muted-foreground">Пресненская набережная, 6с2<br/>Москва, 123112</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/79337776062"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-[#25D366]/80 hover:bg-[#25D366] backdrop-blur-sm text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105"
        aria-label="WhatsApp"
      >
        <Icon name="MessageCircle" size={28} />
      </a>

      <footer className="bg-primary py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
                <Icon name="Leaf" className="text-white" size={24} />
              </div>
              <div>
                <div className="font-bold">FertiGlobal Emirates</div>
                <div className="text-xs text-white/70">Официальный партнер УралКалий</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-sm text-white/80">© 2026 FertiGlobal Emirates. Все права защищены.</div>
              <div className="text-xs text-white/60 mt-1">Registered in Dubai, United Arab Emirates</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;