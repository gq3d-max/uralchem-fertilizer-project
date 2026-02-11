import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageNav from "@/components/PageNav";

const Partnership = () => {
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
      <PageNav currentPage="partnership" />

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Icon name="Building2" className="text-white" size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Партнерство с УралХим</h1>
              <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
                Официальный партнер крупнейшего российского производителя минеральных удобрений
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 scroll-animate scroll-animate-delay-1">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Factory" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">О компании УралХим</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  УралХим — один из крупнейших производителей минеральных удобрений в России и мире. 
                  Компания специализируется на производстве азотных и фосфорных удобрений высочайшего качества.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Годовая производственная мощность более 10 млн тонн</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Поставки в 50+ стран мира</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Современные производственные комплексы</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 scroll-animate scroll-animate-delay-2">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Handshake" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Наше партнерство</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  FertiGlobal Emirates является официальным дистрибьютором продукции УралХим в регионе Ближнего Востока, 
                  Африки и Азии.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Прямые контракты с производителем</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Гарантированные объемы поставок</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Эксклюзивные условия для клиентов</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-10 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white shadow-2xl scroll-animate scroll-animate-delay-3">
              <h3 className="text-3xl font-bold mb-6">Преимущества работы через нас</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <Icon name="TrendingUp" className="mb-4" size={36} />
                  <h4 className="font-bold mb-2 text-xl">Лучшие цены</h4>
                  <p className="text-white/80 leading-relaxed">Прямые контракты с производителем обеспечивают минимальную стоимость</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <Icon name="Shield" className="mb-4" size={36} />
                  <h4 className="font-bold mb-2 text-xl">Гарантия качества</h4>
                  <p className="text-white/80 leading-relaxed">100% оригинальная продукция от производителя с сертификатами</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <Icon name="Zap" className="mb-4" size={36} />
                  <h4 className="font-bold mb-2 text-xl">Быстрая отгрузка</h4>
                  <p className="text-white/80 leading-relaxed">Готовая продукция на складах — минимальные сроки доставки</p>
                </div>
              </div>
            </Card>

            <div className="mt-12 text-center scroll-animate scroll-animate-delay-4">
              <Link to="/#contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg gap-2">
                  Обсудить условия сотрудничества
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

export default Partnership;