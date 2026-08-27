// Eryndex Signal Atelier｜全站外框。固定導覽、資料流細線與清楚出口優先於裝飾，確保每一頁都能快速回到產品或聯絡入口。
import { useEffect, useState } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SiteProvider, langNames, useSite, type Lang } from "./contexts/SiteContext";
import {
  AboutPage,
  ContactPage,
  Home,
  NotFoundPage,
  ProductDetailPage,
  ProductsPage,
  ProductionPage,
  ResourcesPage,
  SolutionsPage,
} from "./pages/Home";

const navCopy = {
  about: { "zh-TW": "關於我們", "zh-CN": "关于我们", en: "About" },
  products: { "zh-TW": "產品", "zh-CN": "产品", en: "Products" },
  solutions: { "zh-TW": "解決方案", "zh-CN": "解决方案", en: "Solutions" },
  resources: { "zh-TW": "資源中心", "zh-CN": "资源中心", en: "Resources" },
  contact: { "zh-TW": "聯絡我們", "zh-CN": "联系我们", en: "Contact" },
  demo: { "zh-TW": "預約產品展示", "zh-CN": "预约产品演示", en: "Book a demo" },
  making: { "zh-TW": "製作說明", "zh-CN": "制作说明", en: "Credits" },
};

function Header() {
  const { lang, setLang } = useSite();
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const onNav = () => setOpen(false);
  const isActive = (href: string) => href === "/" ? location === href : location.startsWith(href);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" onClick={onNav} aria-label="Eryndex 智序科技 home">
          <span className="brand-mark-wrap" aria-hidden="true"><img src="/manus-storage/eryndex-mark-dark_0e671042.png" alt="" /></span>
          <span className="brand-lockup"><strong>Eryndex</strong><small>智序科技</small></span>
        </Link>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          <Link href="/about" className={isActive("/about") ? "nav-link active" : "nav-link"} onClick={onNav}>{navCopy.about[lang]}</Link>
          <Link href="/products" className={isActive("/products") ? "nav-link active" : "nav-link"} onClick={onNav}>{navCopy.products[lang]}</Link>
          <Link href="/solutions" className={isActive("/solutions") ? "nav-link active" : "nav-link"} onClick={onNav}>{navCopy.solutions[lang]}</Link>
          <Link href="/resources" className={isActive("/resources") ? "nav-link active" : "nav-link"} onClick={onNav}>{navCopy.resources[lang]}</Link>
          <div className="nav-divider" aria-hidden="true" />
          <div className="language-switch" role="group" aria-label="Language selector">
            {(Object.keys(langNames) as Lang[]).map((option) => (
              <button key={option} className={lang === option ? "lang-option selected" : "lang-option"} onClick={() => setLang(option)} aria-pressed={lang === option}>{langNames[option]}</button>
            ))}
          </div>
          <Link href="/contact" className="header-cta" onClick={onNav}>{navCopy.demo[lang]} <ArrowUpRight size={15} /></Link>
        </nav>
      </div>
      <div className="header-signal" aria-hidden="true"><span /><span /><span /></div>
    </header>
  );
}

function Footer() {
  const { lang } = useSite();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-col">
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark-wrap" aria-hidden="true"><img src="/manus-storage/eryndex-mark-dark_0e671042.png" alt="" /></span>
            <span className="brand-lockup"><strong>Eryndex</strong><small>智序科技</small></span>
          </Link>
          <p>{lang === "zh-TW" ? "讓科技理解工作，讓企業專注成長。" : lang === "zh-CN" ? "让科技理解工作，让企业专注成长。" : "Let technology understand work, so businesses can focus on growth."}</p>
          <div className="footer-status"><i /> {lang === "en" ? "Systems designed for the work ahead" : lang === "zh-CN" ? "为未来工作而设计的系统" : "為下一步工作而設計的系統"}</div>
        </div>
        <div className="footer-col"><p className="footer-label">{lang === "en" ? "Explore" : lang === "zh-CN" ? "探索" : "探索"}</p><Link href="/about">{navCopy.about[lang]}</Link><Link href="/products">{navCopy.products[lang]}</Link><Link href="/solutions">{navCopy.solutions[lang]}</Link><Link href="/resources">{navCopy.resources[lang]}</Link></div>
        <div className="footer-col"><p className="footer-label">{lang === "en" ? "Connect" : lang === "zh-CN" ? "联系" : "聯絡"}</p><Link href="/contact">{navCopy.contact[lang]}</Link><a href="mailto:hello@eryndex.example">hello@eryndex.example</a><span>+886 2 7700 2840</span></div>
        <div className="footer-col"><p className="footer-label">{lang === "en" ? "Notes" : lang === "zh-CN" ? "说明" : "說明"}</p><Link href="/making">{navCopy.making[lang]}</Link><span>{lang === "en" ? "Demo content only" : lang === "zh-CN" ? "仅供演示" : "僅供示範"}</span><span>© 2026 Eryndex</span></div>
      </div>
      <div className="container footer-bottom"><span>台北 · Taipei</span><span>EDX / 2026.08</span></div>
    </footer>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/products/:slug" component={ProductDetailPage} />
      <Route path="/solutions" component={SolutionsPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/making" component={ProductionPage} />
      <Route path="/404" component={NotFoundPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

function SiteShell() {
  const [location, navigate] = useLocation();
  const { lang } = useSite();
  const isOverlay = location !== "/";

  useEffect(() => {
    if (!isOverlay) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") navigate("/"); };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKey);
    return () => { document.body.classList.remove("modal-open"); window.removeEventListener("keydown", onKey); };
  }, [isOverlay, navigate]);

  const closeLabel = lang === "en" ? "Close panel" : lang === "zh-CN" ? "关闭面板" : "關閉面板";
  return <>
    <Header />
    <main>
      {isOverlay ? <div className="site-modal-backdrop" role="presentation" onClick={() => navigate("/")}>
        <section className="site-modal" role="dialog" aria-modal="true" aria-label={closeLabel} onClick={(event) => event.stopPropagation()}>
          <button className="modal-close" onClick={() => navigate("/")} aria-label={closeLabel}><X size={20} /></button>
          <Router />
        </section>
      </div> : <Router />}
    </main>
    <Footer />
  </>;
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <SiteProvider>
          <TooltipProvider>
            <Toaster theme="dark" position="bottom-right" />
            <SiteShell />
          </TooltipProvider>
        </SiteProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
