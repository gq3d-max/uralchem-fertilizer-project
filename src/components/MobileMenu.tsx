import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface MobileMenuProps {
  currentPage?: string;
}

const MobileMenu = ({ currentPage = "home" }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/#home", label: "Главная", isHash: true },
    { href: "/#about", label: "О компании", isHash: true },
    { href: "/#product", label: "Продукция", isHash: true },
    { href: "/#delivery", label: "Условия", isHash: true },
    { href: "/info", label: "Полезная информация", isHash: false },
    { href: "/#contact", label: "Контакты", isHash: true },
  ];

  const handleClick = (href: string, isHash: boolean) => {
    setIsOpen(false);
    if (isHash && currentPage === "home") {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center justify-center w-10 h-10 text-foreground hover:text-accent transition-all"
        aria-label="Меню"
      >
        <Icon name={isOpen ? "X" : "Menu"} size={24} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-[76px] left-0 right-0 bg-white/70 backdrop-blur-md border-b border-border/30 shadow-lg z-50 md:hidden animate-slide-down">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  item.isHash ? (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => handleClick(item.href, item.isHash)}
                      className="text-lg font-medium text-foreground hover:text-accent transition-all py-3 border-b border-border/30 last:border-0"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-accent transition-all py-3 border-b border-border/30 last:border-0"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                <a
                  href="tel:+79337776062"
                  className="flex items-center gap-3 text-lg font-semibold text-accent hover:text-accent/80 transition-all py-3 mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon name="Phone" size={20} />
                  <span>+7 933 777 60 62</span>
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;