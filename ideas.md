# Eryndex 智序科技｜網站設計提案

## 三種視覺方向

### Theme Name: Signal Atelier
Very Brief Intro: 以深色企業介面為基底，將資料流、節點與光學線條轉化成克制而高級的品牌語言。專業、清晰，適合需要建立信任的 B2B 科技公司。
Probability: 0.06

### Theme Name: Quiet Systems
Very Brief Intro: 以霧白、石墨與冷青色構成安靜的企業系統美學，透過大留白、細線與編輯式排版傳達可靠與秩序。更偏向策略顧問與高端軟體品牌。
Probability: 0.03

### Theme Name: Orbit Commons
Very Brief Intro: 以暖灰底色、珊瑚橘與深藍作為對比，將企業工作流程視為可被理解的共同空間。親和但不失科技感，適合強調導入體驗的成長型服務。
Probability: 0.08

## 舊版方向：Signal Atelier（保留）

### Design Movement
現代企業數位主義（Contemporary Corporate Digitalism），融合 Swiss International Typographic Style 的資訊秩序、editorial layout 的節奏，以及低飽和的 data-visualisation 語彙。

### Core Principles
1. 讓資訊層級先於裝飾：每個視覺元素都需幫助訪客理解產品價值或採取下一步。
2. 以暗色建立信任，以高亮色標示行動：背景深而穩定，電光藍只用在重點、狀態與導覽。
3. 以細線、節點與視窗模組建立一致的「工作系統」感，而非遊戲化的炫技效果。
4. 保留呼吸感與空間差異：不以大量圓角卡片堆疊內容，使用偏移、分欄與水平節奏引導閱讀。

### Color Philosophy
主色使用近黑的藍灰 #07111F 與深海藍 #0C1D31，代表企業資料、長期可靠與安定的底層系統。品牌識別色為電光青藍 #62E7FF，帶出「理解工作」的瞬間與可見的效率提升；輔助色使用冷紫 #A38BFF 與薄荷綠 #69E6C1，分別代表智慧推理與安全狀態。亮色只出現在連結、狀態、圖表與 CTA，讓視覺焦點保持珍貴。

### Layout Paradigm
採用「資料流長頁」結構：首頁由一段帶有偏移座標的 hero 開始，接續產品導航、企業問題、解決方案與內容資源。桌面版使用不對稱兩欄與水平卡列，產品區由左側編號與標籤定位、右側展示內容；手機版則轉為單欄，維持編號和細線作為閱讀軸線。

### Signature Elements
1. **Signal rail**：貫穿頁面的細藍線與小型節點，表示從問題到行動的資料路徑。
2. **System labels**：使用 `[ NXR / 01 ]`、`LIVE CONTEXT` 等短標籤，建立可掃讀的企業系統語彙。
3. **Glass console**：只在 hero 和產品主視覺使用少量半透明控制台，內含抽象數據狀態，避免每個區塊都變成玻璃卡片。

### Interaction Philosophy
互動要讓訪客感覺「系統正在回應」，而不是炫耀動畫。按鈕有短促的壓下回饋，產品卡 hover 時只提升邊框亮度與內容位移；FAQ 以穩定的展開收合呈現清晰答案；表單送出後在同一視區顯示成功狀態，不跳轉、不製造不確定性。

### Animation
進場動畫以 180–260ms 的 opacity 與 translate 為主，使用 stagger 讓標題、描述、視覺依序進入。hero 的資料節點採低幅度、慢速脈動，產品視覺使用微小的視差漂移；不使用持續旋轉、強烈霓虹閃爍或大幅縮放。所有非必要動畫都必須在 `prefers-reduced-motion: reduce` 時停用。

### Typography System
英文與數字使用 Space Grotesk，形成具有工程感但仍友善的標題與數據語彙；繁體中文與簡體中文使用 Noto Sans TC / Noto Sans SC，確保字形完整與長文閱讀性。H1 使用 clamp(2.7rem, 7vw, 6.8rem)，字距 -0.06em；H2 使用 clamp(2rem, 4vw, 4.2rem)，字距 -0.04em；內文最大寬度 42rem，行高 1.8；系統標籤使用 0.68rem、0.16em letter-spacing、全大寫。

### Brand Essence
Eryndex 智序科技是為中小型企業打造的 AI 工作系統，讓自動化、安全與營運洞察在同一個清晰脈絡裡運作；它不販售遙遠的未來，而是讓今天的工作更有餘裕。

Personality adjectives: 清醒、可靠、前瞻

### Brand Voice
標題直接、具畫面但不誇張；CTA 具體說明下一步，不使用空泛的「立即體驗」；微文案像一位懂業務流程的技術顧問，簡短、帶有安定感。避免無法證明的第一、唯一、百分之百等宣稱。

Example lines:
- 「把重複交給系統，把判斷留給團隊。」
- 「看見每一筆資料如何成為下一個決策。」

### Wordmark & Logo
Logo 使用由四個切角模組組成的抽象「N」符號：兩條垂直資料軌由一條斜向連線接起，形成可辨識的核心水平線。標誌不含文字，深色版以電光青藍與白色雙色呈現，淺色版以深海藍與青藍呈現；字標以 Space Grotesk SemiBold 的自訂字距呈現「Eryndex」，中文副標採 Noto Sans TC Medium。

### Signature Brand Color
**Signal Cyan — #62E7FF**。它不是裝飾用霓虹，而是代表資訊被理解、流程開始流動的可視化訊號；只用於狀態、焦點、關鍵 CTA 與品牌標記。

## 內容與命名決策

為降低與既有品牌混淆的風險，四項產品採用本案專屬的描述性命名：**Qadryn**（AI 工作流程自動化）、**Vessyra**（資料安全與權限管理）、**Mireqon**（營運分析儀表板）、**Terviq**（企業內部 AI 邊緣運算設備）。網站內容只使用示範聯絡資訊與清楚標記的 Example / Demo 說明，不捏造客戶、營收、合作夥伴、排名或未證實成果。

## Style Decisions

- 主管比較版本：Signal Atelier 深色版本保留於既有 checkpoint；Luminous Operations Journal 是目前執行中的第二套明亮編輯型企業系統方案。
- Luminous Operations Journal 的淺色畫布、鈷藍與訊號橘可主導 Hero 與產品入口；不套用舊版 Signal Atelier 的深色／霓虹限制。


- 深色企業數位主義是全站唯一主視覺方向；不使用紫色漸層作為大面積背景。
- 生成圖片僅用在 hero 與四項產品主視覺，其他區域以 CSS 圖形與內容排版承擔資訊，不重複使用同一張主圖。
- 所有主要互動需兼顧鍵盤操作、可見 focus ring、足夠文字對比與 reduced-motion。

- Signal Cyan `#62E7FF` reserved for actions, selected states, signal nodes, key terms, and important numerals; large headline coloration is used only when the highlighted word is the conceptual turning point.
- Every product visual must be a distinct abstract system diagram or glass-console state for that product, not a generic tech image block, while sharing the same Eryndex rails, nodes, labels, and dark material language. If generated media is unavailable, the product-specific CSS signal diagram preserves this requirement without exposing an error state.
- Secondary light-background sections are documentation mode only and retain Eryndex’s signal rail, system-label, and thin-line information structure.


## 目前執行方向：Luminous Operations Journal

### Design Movement
瑞士編輯設計與當代企業軟體藝術指導的融合：以明亮紙張感畫布、嚴謹字級層次、寬闊留白與有節奏的資訊帶，取代深色科幻控制室。

### Core Principles
1. **編輯式清晰**：每個區塊像高端年度報告中的一個版面，有明確邊界、標題、註記與閱讀順序。
2. **務實的溫度**：以礦物象牙白、石墨、鈷藍與訊號橘，讓 AI 顯得可信、實用且有人尺度。
3. **結構化非對稱**：以左右分欄、偏移產品卡與寬闊留白取代置中的 Hero 模板。
4. **證據優先**：透過流程圖、狀態標籤與介面片段說明系統價值，不依賴發光特效。

### Color Philosophy
礦物象牙白與柔霧灰代表開放、可讀與主管審閱的舒適度；石墨色穩定文字與結構；鈷藍代表智慧與信任；訊號橘只標示行動、變化與重要節點。整體像高端策略出版物轉化成企業軟體，而不是一般 SaaS 模板。

### Layout Paradigm
採用垂直編輯文件結構：左側是章節編號與脈絡，中間是主要敘事，右側是偏移的證據面板。產品模組交替排列，穿插滿版色帶、窄欄註記與可在手機橫向閱讀的資訊列。

### Signature Elements
大型 Eryndex monogram 水印、以鈷藍細線搭配訊號橘索引標記，以及將產品主張與小型流程圖／介面片段／資料標籤結合的產品卡。

### Interaction Philosophy
互動像翻閱一本設計精準的營運手冊：快速、清楚、有目的。Hover 顯示證據註記，產品卡開啟 modal dossier，表單動作在同一視區提供明確確認，不使用戲劇化動畫。

### Animation
按鈕、卡片與 modal 使用 160–280ms ease-out；重要區塊可使用線條繪製、數字淡入與水平遮罩揭示。取消持續軌道旋轉與環境粒子。啟用 reduced motion 時改用即時顯示，所有資訊仍保留在靜態畫面。

### Typography System
英文標題使用 **Space Grotesk**，中英文介面使用 **Noto Sans TC / SC**；採用編輯型字級：緊湊但醒目的 Display、14–16px 內文、11px 大寫系統標籤，以及等寬數字。避免 Inter 與未設定的預設字體。

### Brand Essence
Eryndex 是為需要更清晰、更安全、更容易採取行動的成長型企業打造的實用智慧層。人格：**精準、沉著、安靜地前瞻**。

### Brand Voice
標題直接而有用，CTA 說明下一步，不承諾空泛轉型。示例：「把複雜工作整理成下一步。」／「Turn operational noise into a decision.」

### Wordmark & Logo
保留 Eryndex 自製標誌，但改以淺色系統呈現：石墨字標、鈷藍 monogram，以及作為註冊標記的細小訊號橘索引缺口。絕不使用未設計的預設文字 Logo。

### Signature Brand Color
**Eryndex Cobalt — #1847D1**，作為礦物象牙白與石墨之間的品牌識別錨點，僅在重要資訊與行動上使用。

### Versioning Decision
這是與 Signal Atelier 並行的第二視覺方向。現有深色版本保留於先前 WebDev checkpoint 與 Git 歷史中；新版必須能與舊版直接比較。


### 字體與標題修訂（目前執行）

目前第二方案改用 **Noto Serif TC／SC** 作為中文主標題字體，以較有編輯感與制度感的襯線結構提升企業品牌辨識度；英文與控制項使用 **Manrope**，內文維持 **Noto Sans TC／SC**，確保長文與三語介面清晰。主標題採高對比粗細、較緊字距與局部鈷藍強調，並以低調訊號橘底線標示概念轉折；產品名稱與按鈕則維持 Manrope 的精準幾何感。產品內容與既有三語文案不更動。
