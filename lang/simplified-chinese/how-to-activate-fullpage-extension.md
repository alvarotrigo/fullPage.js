# 如何激活fullPage.js扩展

1. 访问 https://alvarotrigo.com/fullPage/extensions/activationKey.html. (当购买扩展时，此链接会发送到你的邮箱中)
1. 介绍在购买物品时给予您的**许可证密钥**。也可以在您的购买确认邮件中找到。
1. 可能需要域名才能获取产品的**激活密钥**。
1. 拿到扩展和域的激活密钥（在前面的步骤中生成）后，你需要在fullpage.js初始化中添加一个选项，其形式为`nameOfExtension + "Key": key`。

例如：

```javascript
var myFullpage = new fullpage('#fullpage', {
    fadingEffect: true,
    fadingEffectKey: '激活密钥应在这里',
});
```

如果您已使用扩展，则其余的扩展名也是如此。
以下是目前所有的扩展关键字选项：

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

请记住，如[扩展的使用](https://github.com/alvarotrigo/fullPage.js#use-extensions)[]中所介绍的，使用扩展需要调用[`fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/fullpage.extensions.min.js)，而不像平常的fullPage.js文件（`fullpage.js`）那样使用扩展。

### What to do for development environments / websites?
No activation key is necessary for localhost and 127.0.0.1. Any other staging domains will require a license (Professional or Business) that allows to generate a new key for those.

If you have a license that allows you to generate multiple activation keys you might want to use the same JS code for all of them. In this case you can use an array with the different keys for each domain, for example, if we are using the `scrollHorizontally` extension for 3 domains, we can do the following:

```js
new fullPage('#fullpage', {
    scrollHorizontally: true,
    scrollHorizontallyKey: ['domain1_key', 'domain2_key', 'domain3_key'] 
});
```

This way the extension can be used in any of those 3 domains.

### 许可证密钥与激活密钥
两者是不同的密钥。
- 购买任何扩展程序时，您将获得**许可证密钥**。
- 激活特定域的扩展时，您将获得**激活密钥** （除非使用“无限许可证”）。 生成**激活密钥**需要**许可证密钥**。

许可证密钥由4组字符组成，每组字符为8个字符(`XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX`)。激活密钥的长度可变，且不是由分隔的字符组组成(`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)。不要将两者混淆。