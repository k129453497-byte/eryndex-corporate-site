# Eryndex 智序科技｜企業 AI 自動化與資料安全

Eryndex 智序科技是一個面向中小型企業的多語 B2B 科技公司網站概念，聚焦 AI 工作流程自動化、企業資料安全、營運分析與內部 AI 邊緣運算。網站以「讓科技理解工作，讓企業專注成長」為品牌主張，採用 Signal Atelier 深色訊號場視覺語言與單頁 modal 導覽體驗。

## Live site

- Manus Website: https://nexoracorp-mfb35dfs.manus.space
- GitHub Pages: https://k129453497-byte.github.io/eryndex-corporate-site/
- Languages: 繁體中文（台灣用語）、简体中文、English
- Architecture: React 19 + TypeScript + Vite + Tailwind CSS 4 + Wouter

GitHub Pages 由 `.github/workflows/deploy-pages.yml` 在 `main` 分支更新時自動建置與發布；網站使用 repository base path，並保留 404 fallback 以支援直接開啟 modal 子路徑。

## Website architecture PDF

主管版網站架構與製作說明可由網站的「網站架構」入口下載，也可直接使用以下連結：

[Download the executive site architecture PDF](https://nexoracorp-mfb35dfs.manus.space/manus-storage/eryndex-site-architecture_0eb6bd1e.pdf)

PDF 涵蓋品牌定位、單頁 modal 架構、四項產品系統、產品專屬 SVG／CSS 動效、三語支援、WCAG 2 相關實作範圍、技術棧與公開參考來源。

## Product system

| Product | Focus | Visual scene |
|---|---|---|
| Qadryn | AI workflow automation | Three branching routes, square nodes, and signal pauses |
| Vessyra | Data security and access control | Security grid, verification gates, layered protection, and lock core |
| Mireqon | Operational analytics | Dashboard frame, data bars, readouts, and a travelling chart point |
| Terviq | On-premise edge AI | Processor die, board traces, and staggered electronic pulses |

## Experience architecture

首頁是主要品牌場景；About、Products、Solutions、Resources、Contact 與 Credits 皆以可關閉的內容面板開啟。每個面板保留固定關閉控制、背景點擊關閉與 Escape 鍵路徑。產品詳情頁只展示兩項與目前產品具有連動價值的模組，避免使用無關的推薦內容。

## Accessibility and quality scope

網站實作語意化 HTML、表單 label 與錯誤提示、可見鍵盤 focus、modal Escape 關閉、背景點擊關閉、圖片替代文字、reduced-motion、對比度意識與不依賴顏色的資訊表達。這是目前的實作範圍紀錄，不宣稱已完成正式 WCAG 2.1／2.2 一致性稽核。

已完成 TypeScript check、Vite production build、PDF 文字驗證、PDF 靜態資產 HTTP 回應檢查，以及桌機與約 390px 手機寬度的響應式檢查。

## Reference and production notes

網站製作說明頁列出 Space Grotesk、Noto Sans TC、Lucide Icons、W3C WCAG 2、React、TypeScript、Vite、Tailwind CSS 與 MDN SVG animateMotion 等公開參考來源及用途。Manus 內建 AI 圖片生成用於原創品牌符號與首頁氛圍主視覺；Signal Atelier 視覺語言、產品 SVG 場景與三語文案則為本案製作內容。

公開來源不代表 Eryndex 與來源之間存在合作、授權背書或商業關係。網站未使用現成品牌 Logo、真人肖像或外部圖片作為主要視覺，也未宣稱真實客戶、營收、市占率或絕對安全等未經證實的成果。

## Local development

```bash
pnpm install
pnpm dev
```

Production build：

```bash
pnpm check
pnpm build
```

本專案為靜態前端架構；聯絡表單目前為前端互動示範，未連接 CRM 或後端資料庫。
