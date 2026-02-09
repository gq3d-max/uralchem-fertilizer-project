import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const FoliarFeeding = () => {
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
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
              <Icon name="Leaf" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-primary tracking-tight">FertiGlobal Emirates</h1>
              <p className="text-xs text-muted-foreground hidden sm:block font-medium">UralKhim Partner</p>
            </div>
          </Link>
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <Icon name="ArrowLeft" size={18} />
              <span className="hidden sm:inline">На главную</span>
            </Button>
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Icon name="CloudRain" className="text-white" size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Внекорневая подкормка</h1>
              <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
                Быстрое усвоение азота через листья для оперативной коррекции питания
              </p>
            </div>

            <Card className="p-8 mb-8 bg-gradient-to-r from-green-500/10 to-primary/10 border-2 border-green-400/30 scroll-animate scroll-animate-delay-1">
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-green-500 mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">О методе</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Внекорневая подкормка карбамидом — это опрыскивание растений водным раствором удобрения. 
                    Азот быстро усваивается через листовую поверхность, что позволяет оперативно устранить дефицит 
                    питания и стимулировать рост в критические фазы развития растений.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 scroll-animate scroll-animate-delay-2">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Thermometer" className="text-green-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Оптимальные условия</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Icon name="Sun" className="text-accent" size={20} />
                      Время суток
                    </div>
                    <p className="text-sm text-muted-foreground">Раннее утро (6-9 часов) или вечер (18-20 часов)</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Icon name="Thermometer" className="text-accent" size={20} />
                      Температура воздуха
                    </div>
                    <p className="text-sm text-muted-foreground">15-25°C (избегать жары выше 28°C)</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Icon name="Wind" className="text-accent" size={20} />
                      Погодные условия
                    </div>
                    <p className="text-sm text-muted-foreground">Безветренная погода, без осадков минимум 3 часа после обработки</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Icon name="Droplets" className="text-accent" size={20} />
                      Влажность воздуха
                    </div>
                    <p className="text-sm text-muted-foreground">Высокая (60-80%) для лучшего усвоения</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 scroll-animate scroll-animate-delay-3">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Beaker" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Концентрации растворов</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2">Зерновые культуры</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Пшеница, ячмень, рожь</span>
                      <span className="font-bold text-accent text-lg">5-10% раствор</span>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2">Овощные культуры</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Томаты, огурцы, капуста</span>
                      <span className="font-bold text-accent text-lg">0.5-1% раствор</span>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2">Плодовые деревья</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Яблоня, груша, слива</span>
                      <span className="font-bold text-accent text-lg">0.3-0.5% раствор</span>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2">Виноград и ягодники</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Виноград, смородина</span>
                      <span className="font-bold text-accent text-lg">0.5-1% раствор</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-10 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white shadow-2xl mb-8 scroll-animate scroll-animate-delay-4">
              <h3 className="text-3xl font-bold mb-6">Сроки проведения подкормок</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <Icon name="Seedling" className="mb-4" size={36} />
                  <h4 className="font-bold mb-2 text-xl">Ранние фазы</h4>
                  <p className="text-white/80 leading-relaxed mb-3">Всходы - начало кущения (зерновые) или 4-6 листьев (овощи)</p>
                  <div className="text-sm text-white/60">Стимуляция роста вегетативной массы</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <Icon name="Wheat" className="mb-4" size={36} />
                  <h4 className="font-bold mb-2 text-xl">Активный рост</h4>
                  <p className="text-white/80 leading-relaxed mb-3">Кущение - выход в трубку (зерновые) или формирование завязей</p>
                  <div className="text-sm text-white/60">Поддержка интенсивного развития</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <Icon name="Grape" className="mb-4" size={36} />
                  <h4 className="font-bold mb-2 text-xl">Налив плодов</h4>
                  <p className="text-white/80 leading-relaxed mb-3">Формирование и налив зерна/плодов</p>
                  <div className="text-sm text-white/60">Улучшение качества урожая</div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-8 scroll-animate scroll-animate-delay-5">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Target" className="text-accent" size={28} />
                  <h3 className="text-2xl font-bold text-primary">Нормы расхода</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                    <div className="font-semibold text-primary mb-2">Расход рабочего раствора</div>
                    <div className="text-3xl font-bold text-accent mb-1">200-400 л/га</div>
                    <p className="text-sm text-muted-foreground">В зависимости от культуры и фазы развития</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2">Расход карбамида</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Зерновые</span>
                        <span className="font-bold text-primary">10-20 кг/га</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Овощи</span>
                        <span className="font-bold text-primary">1-3 кг/га</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Плодовые</span>
                        <span className="font-bold text-primary">1-2 кг/га</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-500/10 p-4 rounded-lg border border-green-400/20">
                    <div className="flex items-start gap-2">
                      <Icon name="Info" className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                      <p className="text-sm text-muted-foreground">За сезон проводят 2-3 внекорневые подкормки с интервалом 10-14 дней</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 scroll-animate scroll-animate-delay-6">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="CheckCircle2" className="text-accent" size={28} />
                  <h3 className="text-2xl font-bold text-primary">Преимущества метода</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Быстрое усвоение азота (24-48 часов)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Оперативная коррекция дефицита питания</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Повышение устойчивости к стрессам</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Улучшение качества урожая (белок в зерне)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Эффективен на почвах с плохой доступностью азота</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Экономия удобрений по сравнению с почвенным внесением</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-8 border-2 border-orange-400/30 bg-orange-50/50 mb-8 scroll-animate scroll-animate-delay-7">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="AlertTriangle" className="text-orange-500 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Важные предостережения</h3>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="X" className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-primary mb-1">Опасность ожогов</div>
                    <p className="text-sm text-muted-foreground">Не превышайте рекомендуемую концентрацию, особенно в жаркую погоду</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="X" className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-primary mb-1">Время обработки</div>
                    <p className="text-sm text-muted-foreground">Избегайте обработки в полдень и при ярком солнце</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="X" className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-primary mb-1">Совместимость</div>
                    <p className="text-sm text-muted-foreground">Проверяйте совместимость при смешивании с пестицидами</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="X" className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-primary mb-1">Молодые растения</div>
                    <p className="text-sm text-muted-foreground">Используйте сниженные концентрации для рассады и всходов</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-r from-accent/10 to-primary/10 scroll-animate scroll-animate-delay-8">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Lightbulb" className="text-accent flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Практические советы</h3>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Icon name="ChevronRight" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-muted-foreground">Добавьте прилипатель для лучшего удержания раствора на листьях</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Icon name="ChevronRight" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-muted-foreground">Используйте мягкую воду или добавьте подкислитель</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Icon name="ChevronRight" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-muted-foreground">Готовьте раствор непосредственно перед применением</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Icon name="ChevronRight" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-muted-foreground">Обеспечьте равномерное покрытие листовой поверхности</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Icon name="ChevronRight" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-muted-foreground">Проводите пробную обработку на небольшом участке</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Icon name="ChevronRight" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-muted-foreground">Храните остатки раствора не более 24 часов</span>
                  </li>
                </ul>
              </div>
            </Card>

            <div className="mt-12 text-center scroll-animate scroll-animate-delay-9">
              <Link to="/#contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg gap-2">
                  Получить подробные рекомендации
                  <Icon name="ArrowRight" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoliarFeeding;
