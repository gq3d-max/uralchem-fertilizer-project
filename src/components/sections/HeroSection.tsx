import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(160,225,200,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(160,200,225,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-accent font-semibold text-sm tracking-wide">Поставки из России</span>
            </div>
            <h2 className="md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-primary text-5xl text-left">
              Азотные удобрения<br />
              <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent text-5xl">мирового класса</span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-muted-foreground font-light leading-relaxed">
              Прямые поставки UralNitro Pro 46 от производителя УралХим через нашу компанию в Дубае
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
            <img 
              src="https://cdn.poehali.dev/projects/e2337ca5-ae7d-430a-b963-b32567a9167d/bucket/4e696be6-c191-4b66-871d-4f76f9c4f462.jpg" 
              alt="Urea big bags storage"
              className="rounded-3xl shadow-2xl border-8 border-white/50 w-full h-auto"
            />
            <div className="absolute -bottom-8 -right-4 bg-gradient-to-br from-accent/80 to-accent/70 backdrop-blur-sm p-4 md:p-5 rounded-xl shadow-2xl border-2 border-white/50">
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
