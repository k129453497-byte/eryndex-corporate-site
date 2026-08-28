// Eryndex Signal Atelier｜全站外框固定導覽、資料流細線與清楚出口優先於裝飾，確保每一頁都能快速回到產品或聯絡入口
import { useEffect, useState } from "react";
import { Link, Route, Switch, Router as WouterRouter, useLocation } from "wouter";
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
};

function Header() {
  const { lang, setLang } = useSite();
  const [open, setOpen] = useState(false);
  const onNav = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" onClick={onNav} aria-label="Eryndex 智序科技 home">
          <span className="brand-mark-wrap" aria-hidden="true"><img src="https://nexoracorp-mfb35dfs.manus.space/manus-storage/eryndex-logo-light-signal_53d6e599.png" alt="" /></span>
          <span className="brand-lockup"><strong>Eryndex</strong><small>智序科技</small></span>
        </Link>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          <a href="/#about" className="nav-link" onClick={onNav}>{navCopy.about[lang]}</a>
          <a href="/#products" className="nav-link" onClick={onNav}>{navCopy.products[lang]}</a>
          <a href="/#solutions" className="nav-link" onClick={onNav}>{navCopy.solutions[lang]}</a>
          <a href="/#resources" className="nav-link" onClick={onNav}>{navCopy.resources[lang]}</a>
          <div className="nav-divider" aria-hidden="true" />
          <div className="language-switch" role="group" aria-label="Language selector">
            {(Object.keys(langNames) as Lang[]).map((option) => (
              <button key={option} className={lang === option ? "lang-option selected" : "lang-option"} onClick={() => setLang(option)} aria-pressed={lang === option}>{langNames[option]}</button>
            ))}
          </div>
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
            <span className="brand-mark-wrap" aria-hidden="true"><img src="https://nexoracorp-mfb35dfs.manus.space/manus-storage/eryndex-logo-light-signal_53d6e599.png" alt="" /></span>
            <span className="brand-lockup"><strong>Eryndex</strong><small>智序科技</small></span>
          </Link>
          <p>{lang === "zh-TW" ? "讓科技理解工作，讓企業專注成長" : lang === "zh-CN" ? "让科技理解工作，让企业专注成长" : "Let technology understand work, so businesses can focus on growth"}</p>
        </div>
        <div className="footer-col"><p className="footer-label">{lang === "en" ? "Explore" : lang === "zh-CN" ? "探索" : "探索"}</p><Link href="/about">{navCopy.about[lang]}</Link><Link href="/products">{navCopy.products[lang]}</Link><Link href="/solutions">{navCopy.solutions[lang]}</Link><Link href="/resources">{navCopy.resources[lang]}</Link></div>
        <div className="footer-col"><p className="footer-label">{lang === "en" ? "Connect" : lang === "zh-CN" ? "联系" : "聯絡"}</p><Link href="/contact">{navCopy.contact[lang]}</Link><a href="mailto:hello@eryndex.example">hello@eryndex.example</a><span>+886 2 7700 2840</span></div>
        <div className="footer-col"><p className="footer-label">{lang === "en" ? "Notes" : lang === "zh-CN" ? "说明" : "說明"}</p><span>{lang === "en" ? "Demo content only" : lang === "zh-CN" ? "仅供演示" : "僅供示範"}</span><span>© 2026 Eryndex</span></div>
      </div>
      <div className="container footer-bottom"><span>台北 · Taipei</span></div>
    </footer>
  );
}

function SiteRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/products/:slug" component={ProductDetailPage} />
      <Route path="/solutions" component={SolutionsPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/contact" component={ContactPage} />
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
          <SiteRoutes />
        </section>
      </div> : <SiteRoutes />}
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
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}><SiteShell /></WouterRouter>
          </TooltipProvider>
        </SiteProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
