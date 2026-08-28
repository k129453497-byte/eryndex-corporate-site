# 第一版字體改造研究紀錄

## 參考來源

1. FullStop Insights, “SaaS Typography Playbook: What 50 Companies Actually Use”
   https://fullstop360.com/blog/insights/branding/saas-typography-playbook-what-leading-companies-use

   文章指出 SaaS 網站以 sans-serif 為主，並以 Inter、Notion、Linear、Shopify 等產品作為企業軟體字體案例。可採用的設計結論不是直接複製 Inter，而是使用中性、開放、長文清晰的無襯線字體，搭配少量具有品牌個性的字重與字距。

2. U.S. Web Design System, “Typography”
   https://designsystem.digital.gov/components/typography/

   USWDS 強調標題、內文、標籤與輸入欄位需要清楚且一致；大多數正文建議至少採有效 16px，並以字級、行高、字距、行長與留白共同維持閱讀性。頁面標示通過 WCAG 2.1 AA 的 typography accessibility tests。

## 第一版採用方向

第一版不再使用過度幾何、窄體或過重的標題組合。英文與數字改採 Plus Jakarta Sans，中文使用 Noto Sans TC／SC；H1 使用 700 weight、較短的文字行長與溫和負字距，H2 使用 600 weight，內文維持 16px 以上與較寬鬆行高。系統標籤仍使用等寬字體，但只保留必要的產品編號與狀態資訊。

產品卡與產品詳情移除多餘的 `EDX / 01 · SIGNAL READY` 及 `EDX / 01 · PRODUCT SIGNAL` 標籤，避免重複傳達相同訊息。保留產品編號、產品名稱、用途與功能內容，以維持資訊辨識與三語翻譯完整性。


## 本機驗證

第一版首頁已套用 Plus Jakarta Sans 與 Noto Sans TC／SC，深藍背景、Signal Cyan 與既有動態主視覺均保留。產品卡目前只顯示 `EDX / 01`、產品分類、產品名稱與說明，不再顯示 `EDX / 01 · SIGNAL READY`。Qadryn 詳情頁的產品視覺 caption 只保留 `EDX / 01`，不再顯示 `EDX / 01 · PRODUCT SIGNAL`。本機首頁與 `/products/qadryn` 路由均可渲染，modal 關閉按鈕仍可見。
