import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageNav from "@/components/PageNav";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Logistics = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <PageNav currentPage="logistics" />

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Icon name="Ship" className="text-white" size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Логистика FOB</h1>
              <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
                Отгрузка из портов Санкт-Петербург и Новороссийск с полным документальным сопровождением
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 scroll-animate scroll-animate-delay-1">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Anchor" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Порты отгрузки</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Мы работаем с двумя крупнейшими российскими портами, обеспечивая гибкость в логистике.
                </p>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-xl border-l-4 border-primary">
                    <div className="font-bold text-primary mb-1 flex items-center gap-2">
                      <Icon name="MapPin" size={20} className="text-primary" />
                      Порт Санкт-Петербург
                    </div>
                    <p className="text-sm text-muted-foreground">Балтийское море • Доступ к Европе и Скандинавии</p>
                    <p className="text-xs text-muted-foreground mt-2">Крупнейший порт на Балтике с современной инфраструктурой</p>
                  </div>
                  <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-4 rounded-xl border-l-4 border-accent">
                    <div className="font-bold text-primary mb-1 flex items-center gap-2">
                      <Icon name="MapPin" size={20} className="text-accent" />
                      Порт Новороссийск
                    </div>
                    <p className="text-sm text-muted-foreground">Черное море • Доступ к Азии, Африке и Ближнему Востоку</p>
                    <p className="text-xs text-muted-foreground mt-2">Главный экспортный порт России на Черном море</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 scroll-animate scroll-animate-delay-2">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="FileText" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Условия FOB</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Free On Board (FOB) — продавец доставляет товар на борт судна в порту отгрузки. 
                  Риски и расходы переходят к покупателю после загрузки.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Погрузка товара на судно за наш счет</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Оформление экспортной таможни</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Полный пакет документов (Bill of Lading, сертификаты)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Контроль качества перед отгрузкой</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-10 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white shadow-2xl mb-8 scroll-animate scroll-animate-delay-3">
              <h3 className="text-3xl font-bold mb-6">Процесс отгрузки</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h4 className="font-bold mb-2 text-lg">Подтверждение заказа</h4>
                  <p className="text-white/80 text-sm leading-relaxed">Согласование объемов и условий поставки</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h4 className="font-bold mb-2 text-lg">Подготовка груза</h4>
                  <p className="text-white/80 text-sm leading-relaxed">Резервирование товара на складе производителя</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h4 className="font-bold mb-2 text-lg">Доставка в порт</h4>
                  <p className="text-white/80 text-sm leading-relaxed">Транспортировка товара в порт отгрузки</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">4</span>
                  </div>
                  <h4 className="font-bold mb-2 text-lg">Погрузка на судно</h4>
                  <p className="text-white/80 text-sm leading-relaxed">Загрузка товара и оформление документов</p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-8 scroll-animate scroll-animate-delay-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Package" className="text-secondary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Упаковка и маркировка</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Биг-бэги по 1000 кг или 1200 кг</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Полипропиленовые мешки по 50 кг</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Насыпью в трюмах (для bulk-грузов)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Маркировка по требованиям покупателя</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 scroll-animate scroll-animate-delay-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Clock" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Сроки отгрузки</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-accent/5 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Calendar" className="text-accent" size={24} />
                      <span className="font-bold text-accent text-2xl">20 дней</span>
                    </div>
                    <p className="text-sm text-muted-foreground">С момента получения 100% предоплаты до отгрузки товара</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Zap" className="text-primary" size={24} />
                      <span className="font-bold text-primary">Быстрая погрузка</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Оперативная погрузка судов в течение 2-3 дней после прибытия в порт</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 border-2 border-accent/30 scroll-animate scroll-animate-delay-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Дополнительные услуги</h3>
                  <p className="text-muted-foreground mb-4">По запросу мы можем организовать:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-accent" size={18} />
                      <span className="text-sm text-muted-foreground">Морское страхование груза</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-accent" size={18} />
                      <span className="text-sm text-muted-foreground">Фрахт судов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-accent" size={18} />
                      <span className="text-sm text-muted-foreground">Инспекция груза SGS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-accent" size={18} />
                      <span className="text-sm text-muted-foreground">Доставка до порта назначения (CIF)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-12 text-center scroll-animate scroll-animate-delay-4">
              <Link to="/#contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg gap-2">
                  Запросить условия доставки
                  <Icon name="ArrowRight" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default Logistics;