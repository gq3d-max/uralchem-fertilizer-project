import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageNav from "@/components/PageNav";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SoilApplication = () => {
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
      <PageNav currentPage="soil" />

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Icon name="Sprout" className="text-white" size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Почвенное внесение</h1>
              <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
                Основное и припосевное удобрение для всех типов культур
              </p>
            </div>

            <Card className="p-8 mb-8 bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/30 scroll-animate scroll-animate-delay-1">
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-accent mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">О методе</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Почвенное внесение карбамида — классический и наиболее эффективный способ применения азотных удобрений. 
                    Гранулы вносятся непосредственно в почву перед посевом или в период вегетации, обеспечивая растения 
                    азотом на длительный период.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 scroll-animate scroll-animate-delay-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Timer" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Сроки внесения</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Icon name="Calendar" className="text-accent" size={20} />
                      Весеннее внесение
                    </div>
                    <p className="text-sm text-muted-foreground">За 2-3 недели до посева под основную обработку почвы</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Icon name="Calendar" className="text-accent" size={20} />
                      Припосевное внесение
                    </div>
                    <p className="text-sm text-muted-foreground">Одновременно с посевом в рядки (с осторожностью)</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Icon name="Calendar" className="text-accent" size={20} />
                      Подкормка в период вегетации
                    </div>
                    <p className="text-sm text-muted-foreground">В фазы активного роста с заделкой на 8-10 см</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 scroll-animate scroll-animate-delay-3">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Ruler" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Нормы внесения</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2">Зерновые культуры</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Пшеница, ячмень, рожь</span>
                      <span className="font-bold text-accent text-lg">100-150 кг/га</span>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2">Пропашные культуры</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Кукуруза, подсолнечник</span>
                      <span className="font-bold text-accent text-lg">120-180 кг/га</span>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2">Овощные культуры</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Томаты, огурцы, капуста</span>
                      <span className="font-bold text-accent text-lg">150-250 кг/га</span>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2">Картофель</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Основное внесение</span>
                      <span className="font-bold text-accent text-lg">100-120 кг/га</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-10 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white shadow-2xl mb-8 scroll-animate scroll-animate-delay-4">
              <h3 className="text-3xl font-bold mb-6">Технология внесения</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h4 className="font-bold mb-2 text-xl">Подготовка почвы</h4>
                  <p className="text-white/80 leading-relaxed">Вспашка или культивация для равномерного распределения удобрений</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h4 className="font-bold mb-2 text-xl">Внесение гранул</h4>
                  <p className="text-white/80 leading-relaxed">Разбрасывание центробежными или пневматическими машинами</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h4 className="font-bold mb-2 text-xl">Заделка</h4>
                  <p className="text-white/80 leading-relaxed">Немедленная заделка на глубину 8-10 см для снижения потерь</p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-8 scroll-animate scroll-animate-delay-5">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="CheckCircle2" className="text-accent" size={28} />
                  <h3 className="text-2xl font-bold text-primary">Преимущества</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Длительное действие азота в почве (6-8 недель)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Равномерное распределение питательных веществ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Подходит для всех типов почв и культур</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Простота применения и механизации</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Высокая экономическая эффективность</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 scroll-animate scroll-animate-delay-6">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="AlertTriangle" className="text-orange-500" size={28} />
                  <h3 className="text-2xl font-bold text-primary">Важные рекомендации</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Обязательная заделка удобрений сразу после внесения</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Не вносить на промерзшую или переувлажненную почву</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Избегать прямого контакта с семенами при припосевном внесении</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Учитывать pH почвы - карбамид подкисляет почву</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Хранить удобрения в сухом месте во избежание слеживания</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="mt-12 text-center scroll-animate scroll-animate-delay-7">
              <Link to="/#contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg gap-2">
                  Заказать консультацию агронома
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

export default SoilApplication;