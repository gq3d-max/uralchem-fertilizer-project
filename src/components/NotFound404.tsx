import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Icon from "@/components/ui/icon";

const NotFound404 = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);

    const metaStatus = document.createElement("meta");
    metaStatus.name = "prerender-status-code";
    metaStatus.content = "404";
    document.head.appendChild(metaStatus);

    const metaRobots = document.createElement("meta");
    metaRobots.name = "robots";
    metaRobots.content = "noindex, nofollow";
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaStatus);
      document.head.removeChild(metaRobots);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">

        <div className="mb-8">
          <span className="text-[120px] font-bold leading-none text-white/10 select-none block">
            404
          </span>
          <div className="-mt-6">
            <h1 className="text-2xl font-bold text-white mb-2">
              Страница не найдена
            </h1>
            <p className="text-slate-400 text-sm">
              Такой страницы не существует, но мы всегда на связи
            </p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left space-y-4">
          <h2 className="text-white font-semibold text-center mb-4">
            Свяжитесь с нами
          </h2>

          <a
            href="tel:+79337776062"
            className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
              <Icon name="Phone" size={18} className="text-green-400" />
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-0.5">Телефон</div>
              <div className="font-medium">+7 933 777 60 62</div>
            </div>
          </a>

          <a
            href="mailto:info@fertiglobal-emirates.com"
            className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
              <Icon name="Mail" size={18} className="text-blue-400" />
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-0.5">Email</div>
              <div className="font-medium">info@fertiglobal-emirates.com</div>
            </div>
          </a>

          <a
            href={`https://wa.me/79337776062?text=${encodeURIComponent("Здравствуйте! Интересует информация о поставках UralNitro Pro 46")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
              <Icon name="MessageCircle" size={18} className="text-emerald-400" />
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-0.5">WhatsApp</div>
              <div className="font-medium">Написать в WhatsApp</div>
            </div>
          </a>

          <div className="flex items-center gap-3 text-slate-300">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Icon name="MapPin" size={18} className="text-orange-400" />
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-0.5">Адрес</div>
              <div className="font-medium">DMCC Business Center, Dubai, UAE</div>
            </div>
          </div>
        </div>

        {/* Быстрые разделы */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
          <h2 className="text-white font-semibold text-center mb-4">
            Популярные разделы
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {[
              { to: "/", label: "Главная", icon: "Home" },
              { to: "/quality", label: "Качество", icon: "BadgeCheck" },
              { to: "/logistics", label: "Логистика", icon: "Truck" },
              { to: "/partnership", label: "Партнёрство", icon: "Handshake" },
              { to: "/registration", label: "Регистрация", icon: "FileText" },
              { to: "/info", label: "Статьи", icon: "BookOpen" },
            ].map(({ to, label, icon }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors text-sm"
              >
                <Icon name={icon} size={15} className="text-slate-400 shrink-0" />
                {label}
              </Link>
            ))}
          </div>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-xl transition-colors"
        >
          <Icon name="ArrowLeft" size={16} />
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound404;