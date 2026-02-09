import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
              <Icon name="Leaf" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-primary tracking-tight">FertiGlobal Emirates</h1>
              <p className="text-xs text-muted-foreground hidden sm:block font-medium">UralKhim Partner</p>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-8">
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-foreground hover:text-accent transition-all font-medium hover:scale-105">Главная</a>
              <a href="#about" className="text-foreground hover:text-accent transition-all font-medium hover:scale-105">О компании</a>
              <a href="#product" className="text-foreground hover:text-accent transition-all font-medium hover:scale-105">Продукция</a>
              <a href="#delivery" className="text-foreground hover:text-accent transition-all font-medium hover:scale-105">Условия</a>
              <a href="#contact" className="text-foreground hover:text-accent transition-all font-medium hover:scale-105">Контакты</a>
            </div>
            <a href="tel:+79337776062" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-all whitespace-nowrap font-semibold hover:scale-105">
              <Icon name="Phone" size={18} className="md:hidden flex-shrink-0" />
              <Icon name="Phone" size={20} className="hidden md:block flex-shrink-0" />
              <span className="text-sm md:text-base">+7 933 777 60 62</span>
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(160,225,200,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(160,200,225,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent/20 rounded-full mb-8">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-accent font-semibold text-sm tracking-wide">Поставки из России</span>
              </div>
              <h2 className="md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-primary text-5xl text-left">
                Азотные удобрения<br />
                <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent text-5xl">мирового класса</span>
              </h2>
              <p className="text-xl md:text-2xl mb-10 text-muted-foreground font-light leading-relaxed">
                Прямые поставки UralNitro Pro 46 от производителя УралХим через нашу компанию в Дубае
              </p>
              <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10">
                <div className="bg-card border-2 border-accent/20 p-4 md:p-6 rounded-2xl hover:shadow-xl hover:border-accent/40 transition-all hover:-translate-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-1">46%</div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">Азот N</div>
                </div>
                <div className="bg-card border-2 border-accent/20 p-4 md:p-6 rounded-2xl hover:shadow-xl hover:border-accent/40 transition-all hover:-translate-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-1">100K</div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">тонн/месяц</div>
                </div>
                <div className="bg-card border-2 border-accent/20 p-4 md:p-6 rounded-2xl hover:shadow-xl hover:border-accent/40 transition-all hover:-translate-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-1">20</div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">дней FOB</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in max-w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl -z-10 transform scale-105"></div>
              <img 
                src="https://cdn.poehali.dev/projects/e2337ca5-ae7d-430a-b963-b32567a9167d/files/6f7ef9f5-24fe-4f48-aee3-1d04c9e73d99.jpg" 
                alt="Industrial facility"
                className="rounded-3xl shadow-2xl border-8 border-white/50 w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-accent to-accent/90 p-6 md:p-8 rounded-2xl shadow-2xl border-4 border-white">
                <div className="text-white text-2xl md:text-3xl font-bold mb-1">От $330</div>
                <div className="text-white/90 text-base md:text-lg font-medium">за тонну FOB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-5">О компании FertiGlobal Emirates</h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
                Официальный дистрибьютор азотных удобрений производства УралХим
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/partnership">
                <Card className="p-8 border-2 border-border hover:border-accent/50 hover:shadow-2xl transition-all duration-300 group bg-card hover:-translate-y-2 scroll-animate scroll-animate-delay-1 cursor-pointer h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Icon name="Building2" className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">Партнерство с УралХим</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Прямые контракты с крупнейшим российским производителем минеральных удобрений
                      </p>
                      <div className="flex items-center gap-2 mt-3 text-accent font-medium">
                        <span>Подробнее</span>
                        <Icon name="ArrowRight" size={18} />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link to="/registration">
                <Card className="p-8 border-2 border-border hover:border-accent/50 hover:shadow-2xl transition-all duration-300 group bg-card hover:-translate-y-2 scroll-animate scroll-animate-delay-2 cursor-pointer h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Icon name="Globe" className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">Регистрация в ОАЭ</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Компания зарегистрирована в Дубае с полным пакетом экспортных лицензий
                      </p>
                      <div className="flex items-center gap-2 mt-3 text-accent font-medium">
                        <span>Подробнее</span>
                        <Icon name="ArrowRight" size={18} />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link to="/logistics">
                <Card className="p-8 border-2 border-border hover:border-accent/50 hover:shadow-2xl transition-all duration-300 group bg-card hover:-translate-y-2 scroll-animate scroll-animate-delay-3 cursor-pointer h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Icon name="Ship" className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">Логистика FOB</h3>
                      <p className="text-muted-foreground leading-relaxed">Отгрузка из порта Санкт-Петербург и Новороссийск с полным документальным сопровождением</p>
                      <div className="flex items-center gap-2 mt-3 text-accent font-medium">
                        <span>Подробнее</span>
                        <Icon name="ArrowRight" size={18} />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link to="/quality">
                <Card className="p-8 border-2 border-border hover:border-accent/50 hover:shadow-2xl transition-all duration-300 group bg-card hover:-translate-y-2 scroll-animate scroll-animate-delay-4 cursor-pointer h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Icon name="Shield" className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">Гарантии качества</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Сертификаты соответствия и лабораторные анализы для каждой партии
                      </p>
                      <div className="flex items-center gap-2 mt-3 text-accent font-medium">
                        <span>Подробнее</span>
                        <Icon name="ArrowRight" size={18} />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-5">UralNitro Pro 46</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground font-light">Гранулированная карбамидная мочевина высшего качества</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8 items-stretch">
              <Card className="relative group bg-white rounded-lg p-6 scroll-animate scroll-animate-delay-1 flex flex-col">
                <img 
                  src="https://cdn.poehali.dev/projects/e2337ca5-ae7d-430a-b963-b32567a9167d/files/341aefe9-48d3-4d85-b1d7-cb0f236673f6.jpg"
                  alt="Urea granules"
                  className="rounded-lg w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="mt-4 text-center">
                  <p className="text-primary font-semibold text-lg">Гранулы белого цвета диаметром 2-4 мм</p>
                </div>
              </Card>

              <Card className="p-8 md:p-10 border-2 border-accent/30 hover:border-accent/60 transition-all bg-gradient-to-br from-card to-muted/20 shadow-lg scroll-animate scroll-animate-delay-2 flex flex-col">
                <h3 className="text-3xl font-bold text-primary mb-8">Технические характеристики</h3>
                <div className="space-y-5">
                  <div className="flex justify-between items-center pb-4 border-b-2 border-border">
                    <span className="text-muted-foreground font-medium">Химическое название</span>
                    <span className="font-bold text-primary text-lg">Карбамид CO(NH₂)₂</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b-2 border-border">
                    <span className="text-muted-foreground font-medium">Содержание азота</span>
                    <span className="font-bold text-3xl bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">46%</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b-2 border-border">
                    <span className="text-muted-foreground font-medium">Форма выпуска</span>
                    <span className="font-bold text-primary text-lg">Гранулы 2-4 мм</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b-2 border-border">
                    <span className="text-muted-foreground font-medium">pH раствора</span>
                    <span className="font-bold text-primary text-lg">~7.0 (нейтральный)</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b-2 border-border">
                    <span className="text-muted-foreground font-medium">Растворимость</span>
                    <span className="font-bold text-primary text-lg">Отличная</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b-2 border-border">
                    <span className="text-muted-foreground font-medium">Цвет</span>
                    <span className="font-bold text-primary text-lg">Белый/сероватый</span>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-10 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white shadow-2xl border-0 scroll-animate scroll-animate-delay-3">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-xl">
                  <Icon name="Droplets" size={36} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-1">Применение</h3>
                  <p className="text-white/90 text-lg font-light">Универсальное азотное удобрение</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all border border-white/20 hover:scale-105">
                  <Icon name="Sprout" className="mb-4" size={36} />
                  <h4 className="font-bold mb-2 text-xl">Почвенное внесение</h4>
                  <p className="text-white/80 leading-relaxed">Основное и припосевное удобрение</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all border border-white/20 hover:scale-105">
                  <Icon name="Droplet" className="mb-4" size={36} />
                  <h4 className="font-bold mb-2 text-xl">Капельный полив</h4>
                  <p className="text-white/80 leading-relaxed">Идеально растворяется для фертигации</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all border border-white/20 hover:scale-105">
                  <Icon name="CloudRain" className="mb-4" size={36} />
                  <h4 className="font-bold mb-2 text-xl">Внекорневая подкормка</h4>
                  <p className="text-white/80 leading-relaxed">Быстрое усвоение через листья</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">Условия поставки</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">Прозрачные условия работы с фиксированными сроками</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center border-t-4 border-accent hover:shadow-xl transition-shadow scroll-animate scroll-animate-delay-1">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="DollarSign" className="text-accent" size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">от $330</div>
                <div className="text-sm text-muted-foreground">за тонну FOB</div>
              </Card>

              <Card className="p-6 text-center border-t-4 border-primary hover:shadow-xl transition-shadow scroll-animate scroll-animate-delay-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" className="text-primary" size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20</div>
                <div className="text-sm text-muted-foreground">дней с момента оплаты</div>
              </Card>

              <Card className="p-6 text-center border-t-4 border-secondary hover:shadow-xl transition-shadow scroll-animate scroll-animate-delay-3">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Package" className="text-secondary" size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">предоплата</div>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 scroll-animate scroll-animate-delay-1">
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

              <Card className="p-8 relative overflow-hidden scroll-animate scroll-animate-delay-2">
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

            <Card className="mt-8 p-8 bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent scroll-animate scroll-animate-delay-3">
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
            <div className="text-center mb-12 text-white scroll-animate">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-lg text-white/90">Готовы обсудить условия поставки азотных удобрений</p>
            </div>

            <Card className="p-8 scroll-animate scroll-animate-delay-1">
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
                  className="w-full bg-accent hover:bg-accent/90 text-white py-4 md:py-6 text-sm md:text-lg"
                >
                  <Icon name="Send" className="mr-2" size={18} />
                  <span className="hidden md:inline">{isSubmitting ? 'Отправка...' : 'Отправить запрос на коммерческое предложение'}</span>
                  <span className="md:hidden">{isSubmitting ? 'Отправка...' : 'Отправить запрос'}</span>
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