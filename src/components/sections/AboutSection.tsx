import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-5">Экспортер удобрений FertiGlobal Emirates</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Поставщик удобрений для экспорта. Международные поставки минеральных удобрений и агрохимии производства УралХим
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
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">Контрактные поставки удобрений</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Прямые контракты на экспорт азотных, фосфорных и комплексных удобрений ГОСТ с крупнейшим российским производителем
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
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">Логистика экспорта удобрений</h3>
                    <p className="text-muted-foreground leading-relaxed">Морская и железнодорожная перевозка удобрений FOB из портов Санкт-Петербург и Новороссийск</p>
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
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">Сертификация для экспорта</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Экспорт удобрений с паспортом качества. Сертификация удобрений ГОСТ и международные стандарты для каждой партии
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
  );
};

export default AboutSection;