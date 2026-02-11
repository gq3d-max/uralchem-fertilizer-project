import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import MobileMenu from "@/components/MobileMenu";

interface PageNavProps {
  currentPage?: string;
  showBackButton?: boolean;
}

const PageNav = ({ currentPage = "other", showBackButton = true }: PageNavProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="https://cdn.poehali.dev/projects/e2337ca5-ae7d-430a-b963-b32567a9167d/bucket/88a6d201-533b-4002-8275-234a0fb21f06.jpg" 
            alt="FertiGlobal Emirates Logo" 
            className="h-10 md:h-14 w-auto object-contain"
          />
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-primary tracking-tight">FertiGlobal Emirates</h1>
            <p className="text-xs text-muted-foreground hidden sm:block font-medium">UralKhim Partner</p>
          </div>
        </Link>
        
        <div className="flex items-center gap-3 md:gap-4">
          {showBackButton && (
            <Link to="/" className="hidden md:block">
              <Button variant="outline" className="gap-2">
                <Icon name="ArrowLeft" size={18} />
                <span>На главную</span>
              </Button>
            </Link>
          )}
          <a 
            href="tel:+79337776062" 
            className="hidden md:flex items-center gap-2 text-accent hover:text-accent/80 transition-all whitespace-nowrap font-semibold hover:scale-105"
          >
            <Icon name="Phone" size={20} />
            <span className="text-base">+7 933 777 60 62</span>
          </a>
          <MobileMenu currentPage={currentPage} />
        </div>
      </div>
    </nav>
  );
};

export default PageNav;