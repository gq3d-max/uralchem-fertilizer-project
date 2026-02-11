import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageNav from "@/components/PageNav";

const Registration = () => {
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
      <PageNav currentPage="registration" />

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Icon name="Globe" className="text-white" size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Регистрация в ОАЭ</h1>
              <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
                Компания зарегистрирована в Дубае с полным пакетом экспортных лицензий
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 scroll-animate scroll-animate-delay-1">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Building" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">О нашей компании</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  FertiGlobal Emirates LLC зарегистрирована в Свободной экономической зоне Дубая (DMCC) 
                  в 2023 году как компания-дистрибьютор химической продукции и минеральных удобрений.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Icon name="MapPin" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-primary">Адрес</div>
                      <div className="text-sm text-muted-foreground">DMCC Business Center, Dubai, UAE</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Icon name="FileCheck" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-primary">Лицензия</div>
                      <div className="text-sm text-muted-foreground">Trade License № DMCC-879542</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Icon name="Calendar" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-primary">Год основания</div>
                      <div className="text-sm text-muted-foreground">2023</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 scroll-animate scroll-animate-delay-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Лицензии и сертификаты</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Компания имеет все необходимые разрешения для ведения международной торговли 
                  химической продукцией и удобрениями.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Торговая лицензия DMCC на экспорт/импорт</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Сертификат соответствия ISO 9001:2015</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Разрешение на торговлю удобрениями</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Членство в Торговой палате Дубая</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-10 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white shadow-2xl scroll-animate scroll-animate-delay-3">
              <h3 className="text-3xl font-bold mb-6">Преимущества регистрации в ОАЭ</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <Icon name="DollarSign" className="mb-4" size={36} />
                  <h4 className="font-bold mb-2 text-xl">Налоговые льготы</h4>
                  <p className="text-white/80 leading-relaxed">0% налог на прибыль в свободной экономической зоне</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <Icon name="Globe2" className="mb-4" size={36} />
                  <h4 className="font-bold mb-2 text-xl">Мировой хаб</h4>
                  <p className="text-white/80 leading-relaxed">Доступ к рынкам Азии, Африки и Ближнего Востока</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <Icon name="ShieldCheck" className="mb-4" size={36} />
                  <h4 className="font-bold mb-2 text-xl">Стабильность</h4>
                  <p className="text-white/80 leading-relaxed">Надежная юрисдикция с развитой инфраструктурой</p>
                </div>
              </div>
            </Card>

            <Card className="mt-8 p-8 border-2 border-accent/30 scroll-animate scroll-animate-delay-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Юридическая информация</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Полное название:</span>
                      <p className="font-semibold text-primary">FertiGlobal Emirates LLC</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Регистрационный номер:</span>
                      <p className="font-semibold text-primary">DMCC-879542</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Юрисдикция:</span>
                      <p className="font-semibold text-primary">Dubai Multi Commodities Centre</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Вид деятельности:</span>
                      <p className="font-semibold text-primary">Торговля химической продукцией</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-12 text-center scroll-animate scroll-animate-delay-4">
              <Link to="/#contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg gap-2">
                  Связаться с нами
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

export default Registration;