import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const ProductSection = () => {
  return (
    <section id="product" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 scroll-animate">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-5">Экспорт карбамида UralNitro Pro 46</h2>
          <div className="w-16 md:w-20 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-light">Экспорт NPK удобрений и аммиачной селитры. Оптовая поставка удобрений на экспорт для B2B рынка</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 items-stretch">
            <Card className="relative group bg-white rounded-lg p-6 scroll-animate scroll-animate-delay-1 flex flex-col">
              <img 
                src="https://cdn.poehali.dev/projects/e2337ca5-ae7d-430a-b963-b32567a9167d/files/341aefe9-48d3-4d85-b1d7-cb0f236673f6.jpg"
                alt="Urea granules"
                className="rounded-lg w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="mt-6 space-y-4">
                <div className="text-center border-b pb-4">
                  <p className="text-primary font-bold text-xl mb-2">Гранулы белого цвета диаметром 2-4 мм</p>
                  <p className="text-muted-foreground text-sm">Идеальная форма для всех видов применения</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg text-center">
                    <Icon name="Eye" className="mx-auto mb-2 text-accent" size={24} />
                    <div className="text-xs text-muted-foreground mb-1">Внешний вид</div>
                    <div className="font-semibold text-primary text-sm">Белый/серый</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg text-center">
                    <Icon name="Maximize2" className="mx-auto mb-2 text-accent" size={24} />
                    <div className="text-xs text-muted-foreground mb-1">Размер гранул</div>
                    <div className="font-semibold text-primary text-sm">2-4 мм</div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="CheckCircle2" className="text-accent" size={20} />
                    <span className="font-semibold text-primary">Преимущества формы</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                    <li>• Равномерное распределение</li>
                    <li>• Легкое растворение в воде</li>
                    <li>• Минимальная пыль при хранении</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 border-2 border-accent/30 hover:border-accent/60 transition-all bg-gradient-to-br from-card to-muted/20 shadow-lg scroll-animate scroll-animate-delay-2 flex flex-col">
              <h3 className="text-3xl font-bold text-primary mb-8">Технические характеристики</h3>
              <div className="space-y-5 mb-6">
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
              
              <div className="mt-auto pt-6 border-t-2 border-accent/20">
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-5 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Award" className="text-accent" size={22} />
                    <span className="font-bold text-primary">Сертификация</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="CheckCircle" className="text-accent flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">GOST 2081-2010</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="CheckCircle" className="text-accent flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">ISO 9001:2015</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="CheckCircle" className="text-accent flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">SGS проверено</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="CheckCircle" className="text-accent flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Европейский стандарт</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <div className="flex items-start gap-3">
                    <Icon name="Package" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-primary mb-1">Упаковка</div>
                      <p className="text-sm text-muted-foreground">Биг-бэги 500-1000 кг или мешки 50 кг с влагозащитой</p>
                    </div>
                  </div>
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
              <Link to="/soil-application" className="block">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all border border-white/20 hover:scale-105 cursor-pointer h-full">
                  <Icon name="Sprout" className="mb-4" size={36} />
                  <h4 className="font-bold mb-2 text-xl">Почвенное внесение</h4>
                  <p className="text-white/80 leading-relaxed mb-3">Основное и припосевное удобрение</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span>Подробнее</span>
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              </Link>
              <Link to="/drip-irrigation" className="block">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all border border-white/20 hover:scale-105 cursor-pointer h-full">
                  <Icon name="Droplet" className="mb-4" size={36} />
                  <h4 className="font-bold mb-2 text-xl">Капельный полив</h4>
                  <p className="text-white/80 leading-relaxed mb-3">Идеально растворяется для фертигации</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span>Подробнее</span>
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              </Link>
              <Link to="/foliar-feeding" className="block">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all border border-white/20 hover:scale-105 cursor-pointer h-full">
                  <Icon name="CloudRain" className="mb-4" size={36} />
                  <h4 className="font-bold mb-2 text-xl">Внекорневая подкормка</h4>
                  <p className="text-white/80 leading-relaxed mb-3">Быстрое усвоение через листья</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span>Подробнее</span>
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;