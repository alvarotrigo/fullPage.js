# 如何激活 fullPage.js 擴展

1. 訪問 [https://alvarotrigo.com/fullPage/extensions/activationKey.html](https://alvarotrigo.com/fullPage/extensions/activationKey.html)。（當您購買擴展時，此鏈接會發送到您的電子郵件中）
2. 輸入您在購買物品時獲得的**授權密鑰**。您也可以在購買確認郵件中找到它。
3. 可能需要域名來獲取產品的**激活密鑰**。
4. 獲得擴展和域的激活密鑰（在前面的步驟中生成）後，您需要在 fullpage.js 初始化中添加一個選項，格式為 `nameOfExtension + "Key": key`。

例如：

```javascript
var myFullpage = new fullpage('#fullpage', {
    fadingEffect: true,
    fadingEffectKey: '激活密鑰應在這裡',
});
```

如果您已使用擴展，其他擴展名也是如此。
以下是目前所有擴展的關鍵字選項：

* `fadingEffectKey`
* `responsiveSlidesKey`
* `continuousHorizontalKey`
* `interlockedSlidesKey`
* `scrollHorizontallyKey`
* `resetSlidersKey`
* `offsetSectionsKey`
* `dragAndMoveKey`
* `parallaxKey`
* `cardsKey`

請記住，如[擴展的使用](https://github.com/alvarotrigo/fullPage.js#use-extensions)中所介紹的，使用擴展需要調用 [`fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/fullpage.extensions.min.js)，而不像平常的 fullPage.js 文件（`fullpage.js`）那樣使用擴展。

### 開發環境/網站的處理方式
對於 localhost 和 127.0.0.1 不需要激活密鑰。其他 staging 域將需要允許生成新密鑰的許可證（專業版或商業版）。

如果您有一個允許生成多個激活密鑰的許可證，您可以使用相同的 JS 代碼來處理所有的密鑰。在這種情況下，您可以使用包含不同密鑰的數組。例如，如果我們為三個域使用 `scrollHorizontally` 擴展，可以這樣做：

```js
new fullPage('#fullpage', {
    scrollHorizontally: true,
    scrollHorizontallyKey: ['domain1_key', 'domain2_key', 'domain3_key'] 
});
```

這樣，該擴展可以在這三個域中的任何一個上使用。

### 授權密鑰與激活密鑰
兩者是不同的密鑰。
- 購買任何擴展時，您將獲得**授權密鑰**。
- 激活特定域的擴展時，您將獲得**激活密鑰**（除非使用“無限授權”）。生成**激活密鑰**需要**授權密鑰**。

授權密鑰由 4 組字符組成，每組字符為 8 個字符（`XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX`）。激活密鑰的長度可變，且不是由分隔的字符組成（`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`）。請不要將兩者混淆。