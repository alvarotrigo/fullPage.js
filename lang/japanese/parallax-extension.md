# Parallax Extension 

![](https://cloud.githubusercontent.com/assets/1706326/23580315/f28edab4-00f6-11e7-90f9-81ffafd77b0e.gif)

[エクステンションの使用方法](https://github.com/alvarotrigo/fullPage.js#use-extensions)を確認してから、パララックスオプションを使用してください。
- [ライブデモ](http://alvarotrigo.com/fullPage/extensions/parallax.html)
- [必要なHTML構造](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax#required-html-structure)
- [背景の適用方法](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax#applying-the-background)
- [オプション](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax#options)
  - [パララックスエフェクトオプション](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax#parallax-effect-options)
- [メソッド](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax#methods)

## HTML
セクションやスライド内でパララックスエフェクトを使用するには、`fp-bg` クラスを持つ新しい要素を追加する必要があります。これは、セクションやスライドの最初の子要素として配置された空の `div` である必要があります。次のようになります：

```html
<div class="fp-bg"></div>
```

この要素に対して背景を適用し、セクションやスライドそのものには適用しません。

例えば：
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

この構造は、[パララックスデモページ](http://alvarotrigo.com/fullPage/extensions/parallax.html)のソースコードで確認できます。

> どうしてもレイアウトに新しい要素を追加したくない場合は、`parallaxOptions` 内の `property` オプションを `background` に設定して、現在のセクションやスライドの背景にエフェクトを適用できます。  
> `fp-bg` 要素を使用する場合と比べてパフォーマンスが劣るため、本当に必要な場合にのみおすすめします。

<br>

## 背景の適用方法
背景は、セクションやスライドに背景を適用するのと同じ方法で `fp-bg` 要素に適用します。CSSまたはインラインスタイリングを使用できます。

例えば：
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
| **parallax**  | (デフォルト `false`)。 [fullPage.jsのエクステンション](http://alvarotrigo.com/fullPage/extensions/)。セクション/スライドにパララックス背景エフェクトを使用するかどうかを定義します。可能な値は `false`、`true`、`sections`、`slides` です。 |
| **parallaxOptions:**   | (デフォルト: `{ type: 'reveal', percentage: 62, property: 'translate'}`) 。`parallax:true` オプションを使用する際のパララックス背景エフェクトのパラメーターを設定します。 |

<br>

### パララックスエフェクトオプション
[デモページ](http://alvarotrigo.com/fullPage/extensions/parallax.html)で動作を確認できます。

`parallaxOptions` 内で設定可能なオプションの説明：

| parallaxOptions  | 説明 |
| ------------- | ------------- |
| **type**  | (デフォルト `reveal`) 可能な値は `cover` と `reveal` です。現在のセクション/スライドが目的のセクション/スライドの上または下に配置されるかどうかを選択できます。`cover` を使用すると、次のセクションやスライドが現在のセクションやスライドの一部を覆う形で表示されます。`reveal` を使用すると、効果が反転し、目的のセクションやスライドの一部を覆いながら表示されます。 |
| **percentage**  | (デフォルト 62) ビューポートに対するパララックス効果の割合を定義します。値が小さいほどパララックス効果は小さく、100（最大値）にすると完全に静的な背景が表示されます。 |
| **property** | 可能な値は `translate` と `background` です。パララックス効果を `fp-bg` 要素に適用するか、セクションやスライドの背景プロパティに直接適用するかを定義します。このオプションのデフォルト値を使用することを推奨します。 |

`fp-bg` 要素を使用することで、translate3d ハードウェアアクセラレーションを利用できるため、パフォーマンスが向上します。**property**オプションは、特定の理由で各セクションやスライドに追加の `fp-bg` 要素を追加したくない場合や、HTMLマークアップを変更できない場合のために用意されています。

## メソッド
[デモページ](http://alvarotrigo.com/fullPage/extensions/parallax.html)で動作を確認できます。

### setOption(optionName, value)
指定したオプションの値を設定します。`optionName` は `parallaxOptions` 内のいずれかのオプション（`type`、`percentage` または `property`）です。
```javascript
// `type` プロパティの値を変更する
fullpage_api.parallax.setOption('type', 'cover');

// `percentage` プロパティの値を変更する
fullpage_api.parallax.setOption('percentage', '30');
```
---

### init()
パララックスエフェクトを有効にします。特定のタイミングで動的に有効にする必要がある場合に便利です。
```javascript
fullpage_api.parallax.init();
```
---
### destroy()
パララックスエフェクトをオフにします。
```javascript
fullpage_api.parallax.destroy();
```
