import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageNav from "@/components/PageNav";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DripIrrigation = () => {
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
      <PageNav currentPage="drip" />

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Icon name="Droplet" className="text-white" size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Капельный полив (Фертигация)</h1>
              <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
                Идеально растворяется для современных систем капельного орошения
              </p>
            </div>

            <Card className="p-8 mb-8 bg-gradient-to-r from-blue-500/10 to-primary/10 border-2 border-blue-400/30 scroll-animate scroll-animate-delay-1">
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-blue-500 mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">О методе</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Фертигация — это внесение удобрений через систему капельного полива. Карбамид UralNitro Pro 46 
                    обладает превосходной растворимостью и не забивает капельницы, что делает его идеальным выбором 
                    для современного орошаемого земледелия.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 scroll-animate scroll-animate-delay-2">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Beaker" className="text-blue-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Концентрации растворов</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Icon name="Droplets" className="text-accent" size={20} />
                      Стандартная концентрация
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Для большинства культур</p>
                    <div className="font-bold text-accent text-xl">0.5-1.5 кг на 1000 л воды</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Icon name="Droplets" className="text-accent" size={20} />
                      Высокая концентрация
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Для интенсивных подкормок</p>
                    <div className="font-bold text-accent text-xl">2-3 кг на 1000 л воды</div>
                  </div>
                  <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-400/20">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="AlertCircle" className="text-blue-500 flex-shrink-0" size={16} />
                      <span>Максимальная концентрация не должна превышать 3%</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 scroll-animate scroll-animate-delay-3">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="TrendingUp" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Нормы внесения через капельный полив</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2">Овощи защищенного грунта</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Томаты, огурцы, перцы</span>
                      <span className="font-bold text-accent text-lg">5-10 кг/га за полив</span>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2">Овощи открытого грунта</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Капуста, лук, морковь</span>
                      <span className="font-bold text-accent text-lg">8-15 кг/га за полив</span>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2">Картофель и бахчевые</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Картофель, арбузы, дыни</span>
                      <span className="font-bold text-accent text-lg">10-20 кг/га за полив</span>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-semibold text-primary mb-2">Плодовые культуры</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Виноград, яблоня, персик</span>
                      <span className="font-bold text-accent text-lg">15-25 кг/га за полив</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-10 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white shadow-2xl mb-8 scroll-animate scroll-animate-delay-4">
              <h3 className="text-3xl font-bold mb-6">Технология приготовления раствора</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h4 className="font-bold mb-2 text-lg">Подготовка воды</h4>
                  <p className="text-white/80 text-sm leading-relaxed">Использовать чистую воду температурой 15-25°C</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h4 className="font-bold mb-2 text-lg">Растворение</h4>
                  <p className="text-white/80 text-sm leading-relaxed">Постепенно добавлять карбамид при перемешивании</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h4 className="font-bold mb-2 text-lg">Фильтрация</h4>
                  <p className="text-white/80 text-sm leading-relaxed">Пропустить через фильтр перед подачей в систему</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">4</span>
                  </div>
                  <h4 className="font-bold mb-2 text-lg">Внесение</h4>
                  <p className="text-white/80 text-sm leading-relaxed">Подавать через инжектор в середине полива</p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-8 scroll-animate scroll-animate-delay-5">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="CheckCircle2" className="text-accent" size={28} />
                  <h3 className="text-2xl font-bold text-primary">Преимущества фертигации</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Равномерное распределение удобрений по всей корневой зоне</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Высокая усвояемость азота растениями (до 95%)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Экономия воды и удобрений на 30-40%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Возможность дробного внесения по фазам роста</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Минимальные потери азота в атмосферу</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Автоматизация процесса подкормки</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 scroll-animate scroll-animate-delay-6">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Settings" className="text-blue-500" size={28} />
                  <h3 className="text-2xl font-bold text-primary">Рекомендации по применению</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" className="text-blue-500 mt-1 flex-shrink-0" size={12} />
                    <span className="text-muted-foreground">Промывать систему чистой водой до и после внесения удобрений</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" className="text-blue-500 mt-1 flex-shrink-0" size={12} />
                    <span className="text-muted-foreground">Вносить удобрения в середине цикла полива</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" className="text-blue-500 mt-1 flex-shrink-0" size={12} />
                    <span className="text-muted-foreground">Контролировать pH раствора (оптимально 5.5-6.5)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" className="text-blue-500 mt-1 flex-shrink-0" size={12} />
                    <span className="text-muted-foreground">Регулярно проверять фильтры на засорение</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" className="text-blue-500 mt-1 flex-shrink-0" size={12} />
                    <span className="text-muted-foreground">Готовить свежий раствор для каждого полива</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Circle" className="text-blue-500 mt-1 flex-shrink-0" size={12} />
                    <span className="text-muted-foreground">Не смешивать с фосфорными удобрениями в одном баке</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-8 border-2 border-accent/30 scroll-animate scroll-animate-delay-7">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Calculator" className="text-accent flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Пример расчета</h3>
                  <p className="text-muted-foreground">Для теплицы площадью 1 га с томатами:</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Объем воды за полив</div>
                  <div className="text-2xl font-bold text-primary">30 м³</div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Норма карбамида</div>
                  <div className="text-2xl font-bold text-accent">30-45 кг</div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Концентрация раствора</div>
                  <div className="text-2xl font-bold text-primary">0.1-0.15%</div>
                </div>
              </div>
            </Card>

            <div className="mt-12 text-center scroll-animate scroll-animate-delay-8">
              <Link to="/#contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg gap-2">
                  Получить расчет для вашего хозяйства
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

export default DripIrrigation;