import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileMenu from "@/components/MobileMenu";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductSection from "@/components/sections/ProductSection";
import DeliverySection from "@/components/sections/DeliverySection";

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    volume: '',
    message: ''
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Ошибка",
        description: "Заполните обязательные поля",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/a6995de7-61fa-414a-b154-b95ec6578f90', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: `Телефон: ${formData.phone}\nОбъем: ${formData.volume} тонн\n\n${formData.message}`
        })
      });

      if (response.ok) {
        toast({
          title: "Успешно!",
          description: "Ваш запрос отправлен. Мы свяжемся с вами в ближайшее время."
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          volume: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить запрос. Попробуйте позже.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/ddaba7c8-6431-4533-bd4c-bf3041df7f4e.jpg" 
              alt="FertiGlobal Emirates Logo" 
              className="h-10 md:h-14 w-auto object-contain"
            />
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-primary tracking-tight">FertiGlobal Emirates</h1>
              <p className="text-xs text-muted-foreground hidden sm:block font-medium">UralKhim Partner</p>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-8">
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-foreground hover:text-accent transition-all font-medium hover:scale-105">Главная</a>
              <a href="#about" className="text-foreground hover:text-accent transition-all font-medium hover:scale-105">О компании</a>
              <a href="#product" className="text-foreground hover:text-accent transition-all font-medium hover:scale-105">Продукция</a>
              <a href="#delivery" className="text-foreground hover:text-accent transition-all font-medium hover:scale-105">Условия</a>
              <Link to="/info" className="text-foreground hover:text-accent transition-all font-medium hover:scale-105">Полезная информация</Link>
              <a href="#contact" className="text-foreground hover:text-accent transition-all font-medium hover:scale-105">Контакты</a>
            </div>
            <a href="tel:+79337776062" className="hidden md:flex items-center gap-2 text-accent hover:text-accent/80 transition-all whitespace-nowrap font-semibold hover:scale-105">
              <Icon name="Phone" size={20} />
              <span className="text-base">+7 933 777 60 62</span>
            </a>
            <MobileMenu currentPage="home" />
          </div>
        </div>
      </nav>

      <HeroSection />
      <AboutSection />
      <ProductSection />
      <DeliverySection />

      <section id="contact" className="py-12 md:py-16 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-12 text-white scroll-animate">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Запрос на экспорт удобрений</h2>
              <div className="w-20 md:w-24 h-1 bg-accent mx-auto mb-4 md:mb-6"></div>
              <p className="text-base md:text-lg text-white/90">Дистрибьютор промышленных удобрений на экспорт. B2B поставка калийных, азотных и фосфорных удобрений</p>
            </div>

            <Card className="p-4 md:p-6 lg:p-8 scroll-animate scroll-animate-delay-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Компания *</label>
                    <Input 
                      placeholder="Название вашей компании" 
                      className="border-2"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Контактное лицо *</label>
                    <Input 
                      placeholder="ФИО представителя" 
                      className="border-2"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Email *</label>
                    <Input 
                      type="email" 
                      placeholder="company@example.com" 
                      className="border-2"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Телефон *</label>
                    <Input 
                      placeholder="+971 XX XXX XXXX" 
                      className="border-2"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Объем поставки (тонн) *</label>
                  <Input 
                    placeholder="Укажите требуемый объем" 
                    className="border-2"
                    value={formData.volume}
                    onChange={(e) => setFormData({...formData, volume: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Укажите дополнительную информацию о вашем запросе..." 
                    className="min-h-32 border-2"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-white py-4 md:py-6 text-sm md:text-lg"
                >
                  <Icon name="Send" className="mr-2" size={18} />
                  <span className="hidden md:inline">{isSubmitting ? 'Отправка...' : 'Отправить запрос на коммерческое предложение'}</span>
                  <span className="md:hidden">{isSubmitting ? 'Отправка...' : 'Отправить запрос'}</span>
                </Button>
              </form>

              <div className="mt-10 pt-8 border-t-2 border-muted">
                <h3 className="text-xl font-bold text-primary mb-6 text-center">Наши контакты</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="group">
                    <div className="bg-gradient-to-br from-muted/50 to-muted/30 p-6 rounded-2xl border-2 border-border hover:border-accent/50 transition-all hover:shadow-lg hover:-translate-y-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Icon name="Mail" className="text-white" size={24} />
                      </div>
                      <div className="text-center">
                        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Email</div>
                        <a 
                          href="mailto:alex@uralkhimpartnership.ru" 
                          className="text-primary hover:text-accent transition-colors font-medium text-sm break-all"
                        >
                          alex@uralkhimpartnership.ru
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="bg-gradient-to-br from-muted/50 to-muted/30 p-6 rounded-2xl border-2 border-border hover:border-accent/50 transition-all hover:shadow-lg hover:-translate-y-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Icon name="Phone" className="text-white" size={24} />
                      </div>
                      <div className="text-center">
                        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Телефон</div>
                        <a 
                          href="tel:+79337776062" 
                          className="text-primary hover:text-accent transition-colors font-bold text-lg"
                        >
                          +7 933 777 60 62
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="bg-gradient-to-br from-muted/50 to-muted/30 p-6 rounded-2xl border-2 border-border hover:border-accent/50 transition-all hover:shadow-lg hover:-translate-y-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Icon name="MapPin" className="text-white" size={24} />
                      </div>
                      <div className="text-center">
                        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Офис</div>
                        <div className="text-primary font-medium text-sm leading-relaxed">
                          Пресненская набережная, 6с2<br/>
                          <span className="text-muted-foreground">Москва, 123112</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <WhatsAppButton />

      <footer className="bg-primary py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
                <Icon name="Leaf" className="text-white" size={24} />
              </div>
              <div>
                <div className="font-bold">FertiGlobal Emirates</div>
                <div className="text-xs text-white/70">Официальный партнер УралКалий</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-sm text-white/80">© 2026 FertiGlobal Emirates. Все права защищены.</div>
              <div className="text-xs text-white/60 mt-1">Registered in Dubai, United Arab Emirates</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;