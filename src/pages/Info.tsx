import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileMenu from "@/components/MobileMenu";

const Info = () => {
  const articles = [
    { id: 1, title: "Значение водного аммиака в индустрии и сельском хозяйстве", slug: "ammonia-importance" },
    { id: 2, title: "Гидрофобизаторы - что это и для чего нужны", slug: "hydrophobizers" },
    { id: 3, title: "Где используется пропиленгликоль", slug: "propylene-glycol" },
    { id: 4, title: "Промышленный биосинтез аминокислот: основные понятия", slug: "amino-acids-biosynthesis" },
    { id: 5, title: "Чем отличаются неорганическая и органическая химия", slug: "chemistry-types" },
    { id: 6, title: "Химические реагенты", slug: "chemical-reagents" },
    { id: 7, title: "Пояснение к единице измерения МЕШ (mesh)", slug: "mesh-unit" },
    { id: 8, title: "Подробнее о ТАНК-контейнерах", slug: "tank-containers" },
    { id: 9, title: "Подробнее о IBC-контейнерах", slug: "ibc-containers" },
    { id: 10, title: "Типы паллет и их использование", slug: "pallet-types" },
    { id: 11, title: "Размеры используемых крытых железнодорожных вагонов", slug: "railway-wagons" },
    { id: 12, title: "Таблица пищевых добавок E", slug: "food-additives" },
    { id: 13, title: "Правила перевозки опасных грузов автомобильным транспортом", slug: "dangerous-goods-transport" },
  ];

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
          <div className="flex items-center gap-3 md:gap-8">
            <Link to="/" className="hidden md:block text-foreground hover:text-accent transition-all font-medium hover:scale-105">
              На главную
            </Link>
            <a href="tel:+79337776062" className="hidden md:flex items-center gap-2 text-accent hover:text-accent/80 transition-all whitespace-nowrap font-semibold hover:scale-105">
              <Icon name="Phone" size={20} />
              <span className="text-base">+7 933 777 60 62</span>
            </a>
            <MobileMenu currentPage="info" />
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg">
                <Icon name="BookOpen" className="text-white" size={28} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary">Полезная информация</h1>
            </div>
            
            <p className="text-lg text-muted-foreground mb-12">
              Статьи о химической промышленности, азотных удобрениях, логистике и технических стандартах
            </p>

            <div className="space-y-4">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  to={`/info/${article.slug}`}
                  className="block bg-card border-2 border-border hover:border-accent/50 rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name="FileText" className="text-accent" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{article.title}</h3>
                    </div>
                    <Icon name="ChevronRight" className="text-muted-foreground flex-shrink-0" size={24} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Leaf" className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold">FertiGlobal Emirates</h3>
              </div>
              <p className="text-primary-foreground/80">Поставщик качественных азотных удобрений UralNitro Pro 46</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Email: info@fertiglobal-emirates.com</p>
                <p>Телефон: +7 933 777 60 62</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Главная</Link>
                <Link to="/info" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Полезная информация</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2026 FertiGlobal Emirates. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Info;