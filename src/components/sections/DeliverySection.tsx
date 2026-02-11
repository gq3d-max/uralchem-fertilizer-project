import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const DeliverySection = () => {
  return (
    <section id="delivery" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">Условия экспорта удобрений оптом</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">Поставка удобрений на экспорт с прозрачными условиями и фиксированными сроками для международных рынков</p>
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
  );
};

export default DeliverySection;