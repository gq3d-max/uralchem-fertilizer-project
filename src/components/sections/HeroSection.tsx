import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    {
      url: "https://cdn.poehali.dev/projects/e2337ca5-ae7d-430a-b963-b32567a9167d/bucket/4e696be6-c191-4b66-871d-4f76f9c4f462.jpg",
      alt: "Urea big bags storage"
    },
    {
      url: "https://cdn.poehali.dev/projects/e2337ca5-ae7d-430a-b963-b32567a9167d/bucket/0e8c5e5d-a1b6-4209-9268-7c2f372f15aa.jpg",
      alt: "Fertilizer granules with plant"
    },
    {
      url: "https://cdn.poehali.dev/projects/e2337ca5-ae7d-430a-b963-b32567a9167d/bucket/f8e0f75b-dc1b-4d00-95dd-aaca8f596f7b.jpg",
      alt: "Big bags loading at port"
    },
    {
      url: "https://cdn.poehali.dev/projects/e2337ca5-ae7d-430a-b963-b32567a9167d/bucket/96b7cb42-43a0-4bfe-99b0-a5aca6b58f08.jpg",
      alt: "Tractor applying fertilizer to field"
    },
    {
      url: "https://cdn.poehali.dev/projects/e2337ca5-ae7d-430a-b963-b32567a9167d/bucket/7c38279c-50ce-4224-9fdc-98015890834a.jpg",
      alt: "Fertilizer warehouse with crane"
    },
    {
      url: "https://cdn.poehali.dev/projects/e2337ca5-ae7d-430a-b963-b32567a9167d/bucket/9b23bbf0-d518-4a28-8ead-279cd6fe2db6.jpg",
      alt: "Fertilizer production facility"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(160,225,200,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(160,200,225,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-accent font-semibold text-sm tracking-wide">Экспорт удобрений из России</span>
            </div>
            <h2 className="md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-primary text-5xl text-left">
              Экспорт минеральных удобрений<br />
              <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent text-5xl">на международные рынки</span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-muted-foreground font-light leading-relaxed">
              Дистрибьютор азотных удобрений УралХим. Оптовый экспорт карбамида и промышленных удобрений для B2B клиентов
            </p>
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10">
              <div className="bg-card border-2 border-accent/20 p-4 md:p-6 rounded-2xl hover:shadow-xl hover:border-accent/40 transition-all hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">46%</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Азот N</div>
              </div>
              <div className="bg-card border-2 border-accent/20 p-4 md:p-6 rounded-2xl hover:shadow-xl hover:border-accent/40 transition-all hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">100K</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">тонн/месяц</div>
              </div>
              <div className="bg-card border-2 border-accent/20 p-4 md:p-6 rounded-2xl hover:shadow-xl hover:border-accent/40 transition-all hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">20</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">дней FOB</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in max-w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl -z-10 transform scale-105"></div>
            
            <div className="relative rounded-3xl shadow-2xl border-8 border-white/50 overflow-hidden">
              <div className="relative h-[400px] md:h-[500px]">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
                aria-label="Previous slide"
              >
                <Icon name="ChevronLeft" size={24} className="text-primary" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
                aria-label="Next slide"
              >
                <Icon name="ChevronRight" size={24} className="text-primary" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-8 -right-4 bg-gradient-to-br from-accent/80 to-accent/70 backdrop-blur-sm p-4 md:p-5 rounded-xl shadow-2xl border-2 border-white/50 z-20">
              <div className="text-white text-lg md:text-xl font-bold mb-0.5">От $330</div>
              <div className="text-white/90 text-sm md:text-base font-medium">за тонну FOB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;