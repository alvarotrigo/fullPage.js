# 滾動視差擴展

![](https://cloud.githubusercontent.com/assets/1706326/23580315/f28edab4-00f6-11e7-90f9-81ffafd77b0e.gif)

使用滾動視差選項前請先閱讀 [擴展的使用](https://github.com/alvarotrigo/fullPage.js/tree/dev/lang/chinese#%E4%BD%BF%E7%94%A8%E6%89%A9%E5%B1%95)。
- [展示例子](http://alvarotrigo.com/fullPage/extensions/parallax.html)
- [要求 HTML 結構](#html)
- [應用背景](#%E5%BA%94%E7%94%A8%E8%83%8C%E6%99%AF)
- [選項](#%E9%80%89%E9%A1%B9)
  - [滾動視差效果選項](#%E8%A7%86%E5%B7%AE%E6%95%88%E6%9E%9C%E9%80%89%E9%A1%B9)
- [方法](#%E6%96%B9%E6%B3%95)

## HTML
為了在代碼段和幻燈片中使用滾動視差效果，必須將一個空的 `div` 元素添加到類 `fp-bg` 中，作為該代碼段或幻燈片的第一個子元素。如下面所示：

```html
<div class="fp-bg"></div>
```

這是您必須應用在背景中的元素，而不是其所屬的代碼段或幻燈片。

例如：
```html
<div id="fullpage">
    <div class="section" id="section1">
        <div class="fp-bg"></div>
        幻燈片 1.1
    </div>
    <div class="section" id="section2">
        <div class="slide" id="slide2-1">
            <div class="fp-bg"></div>
            幻燈片 2.1
        </div>
        <div class="slide" id="slide2-2">
            <div class="fp-bg"></div>
            幻燈片 2.2
        </div>
    </div>
</div>
```

這種結構可以在 [滾動視差演示頁面](http://alvarotrigo.com/fullPage/extensions/parallax.html) 的源代碼中找到。

> 如果出於某種原因，您真的不想在佈局中添加新元素，則可以將 `parallaxOptions` 中的選項 `property` 設置為 `background`，以便將效果應用於當前段落或幻燈片背景。
> 正如“滾動視差效果選項”中所解釋的，我只推薦這種方法，如果真的有必要，因為性能不會像使用 `fp-bg` 元素時那樣好。

## 應用背景
應用於 `fp-bg` 元素的背景應與將其應用於段落或幻燈片的方式相同。
您可以使用 CSS 或內聯樣式。

例如：
```css
#section1 .fp-bg{
    background-image: url('imgs/alvaro-genious.jpg');
    background-size: cover;
    background-position: center 80%;
}
```

## 選項

| 選項  | 說明 |
| ------------- | ------------- |
| **parallax**  | (默認為 `false`)。 [fullPage.js 的擴展](http://alvarotrigo.com/fullPage/extensions/)。定義是否在段落/幻燈片上使用滾動視差背景效果。可選值為 false、true、sections、slides。 |
| **parallaxOptions:**   | (默認： `{ type: 'reveal', percentage: 62, property: 'translate'}`)。當使用選項 `parallax: true` 時，允許配置滾動視差背景效果的參數。 |

### 滾動視差效果選項
可以在 [演示頁面](http://alvarotrigo.com/fullPage/extensions/parallax.html) 看到運行效果。

在選項 `parallaxOptions` 中可用的配置選項說明：

| parallaxOptions  | 描述 |
| ------------- | ------------- |
| **type**  | (默認 `reveal`) 可用值是 `cover` 和 `reveal`。提供選擇當前段落/幻燈片是高於還是低於目標頁面的方法。當使用 `cover` 時，下一段落或幻燈片將會覆蓋當前的部分頁面。使用 `reveal` 僅是反轉的效果，並在顯示時覆蓋了小部分目標頁面。 |
| **percentage**  | (默認值 62) 提供一種方法來定義與視口相關的滾動視差效果的百分比。數值越小，滾動視差效果越小，而最大值為 100 的圖像則為完全靜態的背景。 |
| **property** | 定義我們是否要將滾動視差效果應用於 `fp-bg` 元素，或者直接應用於段落或幻燈片的背景屬性。建議使用此選項的默認值。 |

請注意，使用 `fp-bg` 元素可以獲得更好的性能，因為它利用了 translate3d 硬件加速。該選項適用於那些由於某種原因不想在每個段落或幻燈片中添加額外的 `fp-bg` 元素或無法修改 HTML 標記的人。

## 方法
可以在 [演示頁面](http://alvarotrigo.com/fullPage/extensions/parallax.html) 查看運行效果。

### setOption(optionName, value)
為給定選項設置一個值。`optionName` 可以是 `parallaxOptions` 中的任意選項（`type`、`percentage` 或 `property`）。
```javascript
// 改變屬性 `type` 的值
fullpage_api.parallax.setOption('type', 'cover');

// 改變屬性 `percentage` 的值
fullpage_api.parallax.setOption('percentage', '30');
```

---

### init()
啟用滾動視差效果。如果您需要在某個特定時間點動態啟用該功能，可以調用這個方法。
```javascript
fullpage_api.parallax.init();
```

---

### destroy()
關閉滾動視差效果。
```javascript
fullpage_api.parallax.destroy();
```