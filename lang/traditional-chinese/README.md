# fullPage.js
![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.png)

<p align="center">
  <a href="https://github.com/alvarotrigo/fullPage.js">English</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish#fullpagejs">Español</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#fullpagejs">Français</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#fullpagejs">Pусский</a> |
  <span>繁體中文</span> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/simplified-chinese#fullpagejs">简体中文</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs">한국어</a> | 
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese#fullpagejs"> 日本語</a> | 
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese#fullpagejs">Português Brasileiro</a>
</p>
<p align="center">
	適用於&nbsp;<a href="https://github.com/alvarotrigo/vue-fullpage.js">Vue</a>&nbsp;,&nbsp;<a href="https://github.com/alvarotrigo/react-fullpage">React</a>&nbsp;和&nbsp;<a href="https://github.com/alvarotrigo/angular-fullpage">Angular</a>
</p>

---

![fullPage.js version](https://img.shields.io/badge/fullPage.js-v4.0.26,2-brightgreen.svg)
[![License](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)](https://www.paypal.me/alvarotrigo/9.95)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/fullpage.js/badge?style=rounded)](https://www.jsdelivr.com/package/npm/fullpage.js)
[![Minzipped Size](https://img.shields.io/bundlephobia/minzip/fullpage.js)](https://bundlephobia.com/package/fullpage.js)
&nbsp;&nbsp;**|**&nbsp;&nbsp; *Created by [@imac2](https://twitter.com/imac2)*

- [範例](https://alvarotrigo.com/fullPage/) | [Codepen](https://codepen.io/alvarotrigo/pen/qqabrp)
- [Wordpress plugin for Gutenberg](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/) and [WordPress pluging fo Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)
- [Wordpress 的主題](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [fullpage.js 擴充功能](https://alvarotrigo.com/fullPage/extensions/)
- [常見問題](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)
- [從 fullPage v3 更新至 fullpage v4](https://alvarotrigo.com/fullPage/help/migration-from-fullpage-3/)
---

通過此函式庫可讓你輕鬆建立全屏滾動網站 (也稱為一頁式網站)。
本庫可建立全屏滾動網站，同時也可在網站中新增橫向滾動條。

- [介紹](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#介紹)
- [相容性](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#相容性)
- [許可證](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#許可證)
- [用法](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#用法)
  - [建立鏈接到 section 或 slide](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#%E5%BB%BA%E7%AB%8B%E9%8F%88%E6%8E%A5%E5%88%B0%20section%20%E6%88%96%20slide)
  - [建立更小或更大的 section](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#%E5%BB%BA%E7%AB%8B%E6%9B%B4%E5%B0%8F%E6%88%96%E6%9B%B4%E5%A4%A7%E7%9A%84%20section)
  - [fullpage.js 新增的狀態類](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#fullpage.js%20%E6%96%B0%E5%A2%9E%E7%9A%84%E7%8B%80%E6%85%8B%E9%A1%9E)
  - [懶加載](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#懶加載)
  - [自動播放內嵌媒體](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#自動播放內嵌媒體)
  - [使用擴充功能](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#使用擴充功能)
- [參數](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#參數)
- [全域函式](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#全域函式)
- [回調函式](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#回調函式)
- [問題反饋](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#問題反饋)
- [貢獻](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#貢獻)
- [更新日誌](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#更新日誌)
- [編譯構建](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#編譯構建)
- [參考資源](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#%E8%AA%B0%E5%9C%A8%E4%BD%BF%E7%94%A8%20fullpage.js)
- [誰在使用 fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#%E8%AA%B0%E5%9C%A8%E4%BD%BF%E7%94%A8%20fullpage.js)
- [贊助](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#贊助)

## 介紹

不僅限於提需求，也歡迎提出編碼風格改進的建議。
集思廣益，讓這個庫更加強大，讓寫程式更輕鬆！

## 相容性

fillPage.js 完全支持所有現代瀏覽器和 IE 11。 如果您需要支持 IE < 11，請考慮使用 [fullPage.js v3](https://github.com/alvarotrigo/fullPage.js/tree/3.1.2)。
它同時支援手機、平板電腦和觸摸屏電腦等行動裝置的觸摸功能。

特別感謝 [Browserstack](https://www.browserstack.com/) 贊助 fullpage.js 。

## 許可證

### 商業許可證

如果您想使用 fullPage 開發商業網站、主題、專案和應用程式，商業許可證是您應使用的許可證。使用這個許可證，您的原始碼將保持私有，並且您將不必將其開源。[點選此處購買fullpage 商業許可證](https://alvarotrigo.com/fullPage/pricing/)。

### 開源許可證

如果您使用與 [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html) 相容的許可證建立開源應用程式，則可以在 GPLv3 條款下使用 fullPage。

**你必須提供一個顯著的標示你有使用 fullPage.js。 JavaScript 和 CSS 檔案中的許可證應保持完整 (即使在合併或壓縮后）**

[閱讀更多關於 fullPage 的許可證](https://alvarotrigo.com/fullPage/pricing/)。