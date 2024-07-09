# パララックス拡張機能

![](https://cloud.githubusercontent.com/assets/1706326/23580315/f28edab4-00f6-11e7-90f9-81ffafd77b0e.gif)

パララックスオプションの使用前にお読みください [拡張機能の使用](https://github.com/alvarotrigo/fullPage.js/tree/dev/lang/japanese#拡張機能の使用)。
- [表示例](http://alvarotrigo.com/fullPage/extensions/parallax.html)
- [HTML構造を必要とする](#html)
- [アプリケーションの背景](#アプリケーションの背景)
- [オプション](#オプション)
  - [パララックス効果オプション](#パララックス効果オプション)
- [機能](#機能)

## HTML
スニペットやスライドでパララックス効果を使うには、そのスニペットやスライドの最初のサブセグメントとして、新しい空の`div`要素をクラス`fp-bg`に追加する必要があります。これを以下に示します:

```html
<div class="fp-bg"></div>
```

これは、所属するスニペットやスライドではなく、背景に適用する必要のある要素です。

例:
```html
<div id="fullpage">
    <div class="section" id="section1">
        <div class="fp-bg"></div>
        スライド 1.1
    </div>
    <div class="section" id="section2">
        <div class="slide" id="slide2-1">
            <div class="fp-bg"></div>
            スライド 2.1
        </div>
        <div class="slide" id="slide2-2">
            <div class="fp-bg"></div>
            スライド 2.2
        </div>
    </div>
</div>
```

この構造は、[パララックスデモ画面](http://alvarotrigo.com/fullPage/extensions/parallax.html)のソースコードで確認することができます。

> もし、他の理由でどうしてもレイアウトに新しい要素を加えたくない場合は、`parallaxOptions`のオプション`property`を`background`に設定すると、現在のパラグラフやスライドの背景に効果を適用することができます。
> パララックスオプションで説明したように、`fp-bg`要素を使用したときよりもパフォーマンスが低下するので、本当に必要な場合のみ、この方法をお勧めします。


## アプリケーションの背景
`fp-bg`要素に適用される背景は、段落やスライドに適用するのと同じ方法で適用する必要があります。
CSSやインラインスタイルを使用することができます。

例:
```css
#section1 .fp-bg{
    background-image: url('imgs/alvaro-genious.jpg');
    background-size: cover;
    background-position: center 80%;
}
```
## オプション

| オプション  | 説明 |
| ------------- | ------------- |
| **parallax**  | (デフォルト `false`)。[fullPage.jsの拡張機能](http://alvarotrigo.com/fullPage/extensions/). 段落/スライドにパララックス背景効果を使用するかどうかを定義します。使用可能な値は、false、true、section、slidesです。  |
| **parallaxOptions:**   | (デフォルト: `{ type: 'reveal', percentage: 62, property: 'translate'}`)。オプション`parallax:true`が使われている場合、パララックス背景効果のパラメータを設定することができます。  |


### パララックス効果オプション
[デモ画面](http://alvarotrigo.com/fullPage/extensions/parallax.html)でその様子をご覧いただけます


`parallaxOptions`オプションで利用可能な設定可能なオプションの説明:

| parallaxOptions  | 説明 |
| ------------- | ------------- |
| **type**  | (デフォルト `reveal`) 利用可能な値は`cover`と`reveal`です。現在の段落/スライドが対象ページの上にあるか下にあるかを選択する方法を提供します。`cover`を使用すると、次の段落やスライドが現在のページの一部を上書きします。`reveal`を使用すると、表示されているターゲットページの一部を反転して上書きする効果しかありません。 |
| **percentage**  | (デフォルト 62） ビューポートに関連する視差効果の割合を定義する方法を提供します。値が小さいほど視差効果は小さくなり、最大値100の画像では背景が完全に静止します。   |
| **property** | 視差効果を`fp-bg`要素に適用するか、あるいは段落やスライドの背景プロパティに直接適用するかを定義します。このオプションはデフォルト値を使用することが推奨されます。|

`fp-bg`要素を使用すると、translate3dのハードウェアアクセラレーションを利用するため、より良いパフォーマンスが得られることに注意してください。このオプションは、何らかの理由で各段落やスライドに余分な`fp-bg`要素を追加したくない、またはHTMLマークアップを変更できない人のためのものです。

## 機能
実行結果は[デモ画面](http://alvarotrigo.com/fullPage/extensions/parallax.html)で確認することができます。

### setOption(optionName, value)
与えられたオプションに値を設定する。`optionName`には、`parallaxOptions`のオプション（`type`、`percentage`、`property`）のいずれかを指定することができます。
```javascript
//属性`type`の値を変更する
fullpage_api.parallax.setOption('type', 'cover');

//属性`percentage`の値を変更する。
fullpage_api.parallax.setOption('percentage', '30');
```
---

### init()
パララックス効果を有効にします。 特定の時点で動的に機能を有効にする必要がある場合、このメソッドを呼び出すことができます。
```javascript
fullpage_api.parallax.init();
```
---
### destroy()
パララックス効果をオフにする。
```javascript
fullpage_api.parallax.destroy();
```
