import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageNav from "@/components/PageNav";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Quality = () => {
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
      <PageNav currentPage="quality" />

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Icon name="Shield" className="text-white" size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Гарантии качества</h1>
              <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
                Сертификаты соответствия и лабораторные анализы для каждой партии
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 scroll-animate scroll-animate-delay-1">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="FileCheck" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Сертификаты качества</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Каждая партия товара сопровождается полным пакетом документов, подтверждающих качество продукции.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Сертификат качества от производителя УралХим</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Протокол лабораторных испытаний</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Сертификат соответствия ГОСТ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Фитосанитарный сертификат</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 scroll-animate scroll-animate-delay-2">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Microscope" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Лабораторный контроль</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Каждая партия проходит строгий лабораторный контроль качества перед отгрузкой.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Анализ содержания азота (N)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Проверка гранулометрического состава</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Определение влажности и биурета</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Контроль прочности гранул</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-10 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white shadow-2xl mb-8 scroll-animate scroll-animate-delay-3">
              <h3 className="text-3xl font-bold mb-6">Технические характеристики UralNitro Pro 46</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <h4 className="font-bold mb-4 text-xl flex items-center gap-2">
                    <Icon name="Beaker" size={24} />
                    Химический состав
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-white/20">
                      <span className="text-white/80">Азот (N)</span>
                      <span className="font-bold text-xl">46.0% мин.</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/20">
                      <span className="text-white/80">Биурет</span>
                      <span className="font-bold">1.0% макс.</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/20">
                      <span className="text-white/80">Влага</span>
                      <span className="font-bold">0.5% макс.</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <h4 className="font-bold mb-4 text-xl flex items-center gap-2">
                    <Icon name="Layers" size={24} />
                    Физические свойства
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-white/20">
                      <span className="text-white/80">Размер гранул</span>
                      <span className="font-bold">2-4 мм</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/20">
                      <span className="text-white/80">Цвет</span>
                      <span className="font-bold">Белый/сероватый</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/20">
                      <span className="text-white/80">Прочность</span>
                      <span className="font-bold">≥95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center scroll-animate scroll-animate-delay-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">ISO 9001:2015</h3>
                <p className="text-sm text-muted-foreground">Система менеджмента качества</p>
              </Card>

              <Card className="p-6 text-center scroll-animate scroll-animate-delay-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="BadgeCheck" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">ГОСТ 2081-2010</h3>
                <p className="text-sm text-muted-foreground">Карбамид для промышленности</p>
              </Card>

              <Card className="p-6 text-center scroll-animate scroll-animate-delay-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="ShieldCheck" className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">SGS Инспекция</h3>
                <p className="text-sm text-muted-foreground">Независимая проверка качества</p>
              </Card>
            </div>

            <Card className="p-8 border-2 border-accent/30 scroll-animate scroll-animate-delay-4">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Search" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Независимая инспекция</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    По желанию клиента мы организуем независимую инспекцию груза международными компаниями:
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                  <Icon name="Check" className="text-accent flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold text-primary">SGS (Société Générale de Surveillance)</div>
                    <div className="text-sm text-muted-foreground">Мировой лидер инспекционных услуг</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                  <Icon name="Check" className="text-accent flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold text-primary">Bureau Veritas</div>
                    <div className="text-sm text-muted-foreground">Международная сертификационная компания</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                  <Icon name="Check" className="text-accent flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold text-primary">Intertek</div>
                    <div className="text-sm text-muted-foreground">Глобальная инспекционная сеть</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                  <Icon name="Check" className="text-accent flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold text-primary">Alex Stewart International</div>
                    <div className="text-sm text-muted-foreground">Специалисты по агрохимии</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="mt-8 p-8 bg-accent/5 border-2 border-accent/30 scroll-animate scroll-animate-delay-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ThumbsUp" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Наши гарантии</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Мы гарантируем 100% соответствие поставляемой продукции заявленным характеристикам. 
                    В случае несоответствия качества — полный возврат средств или замена партии.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-accent text-white text-sm rounded-full font-medium">Возврат денег</span>
                    <span className="px-4 py-2 bg-primary text-white text-sm rounded-full font-medium">Замена партии</span>
                    <span className="px-4 py-2 bg-secondary text-white text-sm rounded-full font-medium">Компенсация убытков</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-12 text-center scroll-animate scroll-animate-delay-4">
              <Link to="/#contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg gap-2">
                  Запросить сертификаты качества
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

export default Quality;