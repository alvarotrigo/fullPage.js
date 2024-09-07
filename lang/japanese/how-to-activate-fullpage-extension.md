# fullPage.js エクステンション(拡張機能)の有効化方法

1. [https://alvarotrigo.com/fullPage/extensions/activationKey.html](https://alvarotrigo.com/fullPage/extensions/activationKey.html) にアクセスします。（これは、エクステンション購入時にメールで送信されたURLです）
2. 購入時に提供された**ライセンスキー**を入力します。これは購入確認メールにも記載されています。
3. **アクティベーションキー**を取得するために、ドメイン名の入力が求められる場合があります。
4. **アクティベーションキー**とドメイン（前述の手順で生成された）を取得したら、fullPage.jsの初期化時に `nameOfExtension + "Key": key` という形式でオプションを追加する必要があります。

例えば：

```javascript
new fullPage('#fullpage', {
    fadingEffect: true,
    fadingEffectKey: 'ここにアクティベーションキーを入力',
});
```

他のエクステンションについても同様の手順です。現在のところ、以下のエクステンションオプションがあります。

* `fadingEffectKey`
* `responsiveSlidesKey`
* `continuousHorizontalKey`
* `interlockedSlidesKey`
* `scrollHorizontallyKey`
* `resetSlidersKey`
* `offsetSectionsKey`
* `dragAndMoveKey`
* `parallaxKey`

エクステンションを使用するには、[fullpage.extensions.min.js](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/fullpage.extensions.min.js) を使用する必要があります。  
これは通常の fullPage.js (`fullpage.js`) とは異なります。[エクステンションの使用方法](https://github.com/alvarotrigo/fullPage.js#use-extensions)で説明されているようにしてください。

### 開発環境やウェブサイトの場合は？
localhost と 127.0.0.0.1 にはアクティベーションキーは必要ありません。他のステージングドメインにはライセンス（プロフェッショナルまたはビジネスライセンス）が必要で、新しいキーを生成することができます。

複数のアクティベーションキーを生成できるライセンスをお持ちの場合、すべてのドメインで同じJSコードを使用できます。この場合、異なるドメインごとにキーの配列を使用できます。例えば、`scrollHorizontally` エクステンションを3つのドメインで使用する場合、次のように設定します：

```js
new fullPage('#fullpage', {
    scrollHorizontally: true,
    scrollHorizontallyKey: ['domain1_key', 'domain2_key', 'domain3_key'],
});
```

このように設定することで、これら3つのドメインのいずれでもエクステンションを使用できます。

### ライセンスキーとアクティベーションキーの違い
これらは異なるキーです。
- **ライセンスキー**はエクステンション購入時に提供されます。
- **アクティベーションキー**は特定のドメインに対してエクステンションを有効化する際に取得します（ビジネスライセンスを使用する場合を除く）。生成するには**ライセンスキー**が必要です。

ライセンスキーは4つの8文字のグループで構成されています。(`XXXXXXXXXXXX-XXXXXXXXXXXXXX-XXXXXXXXXXXX-XXXXXXXXXXXX`)  
アクティベーションキーは可変長で、グループに分かれていません 。(`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)  
これらを混同しないようにしてください。
