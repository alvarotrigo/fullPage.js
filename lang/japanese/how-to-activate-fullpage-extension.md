# fullPage.js拡張機能の有効化方法

1. 拡張機能を購入した際にお客様のメールアドレスに送信された[URL](https://alvarotrigo.com/fullPage/extensions/activationKey.html)にアクセスします。
2. 購入時に渡されたライセンスキーを入力する。また、購入確認メールにも記載されています。
3. さらに、製品のアクティベーションキーを取得するために、ドメイン名が必要になる場合があります。
4. 次に、fullpage.jsの初期設定に、`nameOfExtension + "Key": key`というオプションを追加して、特定の拡張機能のアクティベーションキーを追加してください:

例如：

```javascript
var myFullpage = new fullpage('#fullpage', {
    fadingEffect: true,
    fadingEffectKey: 'アクティベーションキーはここにあるはずです',
});
```

他の拡張機能を使用している場合は、同じように操作してください。
以下は、現在販売中の拡張オプションです：

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

拡張機能を利用するには、[拡張機能を使う](https://github.com/alvarotrigo/fullPage.js#use-extensions)で説明したように、標準のfullPage.jsファイル(`fullpage.js`)ではなく[`fullpage.extensions.min.js'](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/fullpage.extensions.min.js)を使う必要があることを覚えておいてください。

### 開発環境／Webサイトはどうすればいいのか？
localhostと127.0.0.1にはアクティベーションキーは必要ありません。その他のステージングドメインには、新しいキーを生成するためのライセンス（ProfessionalまたはBusiness）が必要です。

複数のアクティベーションキーを生成できるライセンスを持っている場合、すべてのドメインに同じJSコードを使用したいと思うかもしれません。この場合、ドメインごとに異なるキーを配列で使用することができます。例えば、3つのドメインで`scrollHorizontally`拡張機能を使用する場合、次のようになります:

```js
new fullPage('#fullpage', {
    scrollHorizontally: true,
    scrollHorizontallyKey: ['domain1_key', 'domain2_key', 'domain3_key']
});
```

こうすることで、この拡張子はこれら3つのドメインのいずれでも使用することができます。

### ライセンスキーとアクティベーションキー
この2つは異なるキーです。
- 拡張機能を購入すると、**ライセンスキー**がもらえます。
- ドメイン固有の拡張機能を有効化する場合、**アクティベーションキー**を受け取ります（「無制限ライセンス」が使用されている場合を除く）。**アクティベーションキー**を生成するためには、**ライセンスキー**が必要です。

ライセンスキーは、8文字ずつの4つのグループ(`XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX`)で構成されています。アクティベーションキーは可変長で、区切られた文字群(`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)で構成されるものではありません。この2つを混同しないでください。
