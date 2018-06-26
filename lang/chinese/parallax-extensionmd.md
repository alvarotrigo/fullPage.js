# 视差扩展

![](https://cloud.githubusercontent.com/assets/1706326/23580315/f28edab4-00f6-11e7-90f9-81ffafd77b0e.gif)

使用视差选项前请先阅读 [扩展的使用](https://github.com/alvarotrigo/fullPage.js/tree/dev/lang/chinese#%E4%BD%BF%E7%94%A8%E6%89%A9%E5%B1%95)。
- [展示例子](http://alvarotrigo.com/fullPage/extensions/parallax.html)
- [要求 HTML 结构](#html)
- [应用背景](#%E5%BA%94%E7%94%A8%E8%83%8C%E6%99%AF)
- [选项](#%E9%80%89%E9%A1%B9)
  - [视差效果选项](#%E8%A7%86%E5%B7%AE%E6%95%88%E6%9E%9C%E9%80%89%E9%A1%B9)
- [方法](#%E6%96%B9%E6%B3%95)

## HTML
为了在代码段和幻灯片中使用视差效果，必须将一个空`div`新元素添加到类`fp-bg`中，作为该代码段或幻灯片的第一个子段。 如下所示：

```html
<div class="fp-bg"></div>
```

这是您必须应用在背景中的元素，而不是其所属的代码段或幻灯片。

例如：
```html
<div id="fullpage">
    <div class="section" id="section1">
        <div class="fp-bg"></div>
        幻灯片 1.1
    </div>
    <div class="section" id="section2">
        <div class="slide" id="slide2-1">
            <div class="fp-bg"></div>
            幻灯片  2.1
        </div>
        <div class="slide" id="slide2-2">
            <div class="fp-bg"></div>
            幻灯片 2.2
        </div>
    </div>
</div>
```

这个结构可以在[视差演示页面](http://alvarotrigo.com/fullPage/extensions/parallax.html)的源代码中看到。

> 如果出于其他原因，您真的不想在布局中添加新元素，则可以将`parallaxOptions`中的选项`property`设置为`background`，以便将效果应用于当前段落或幻灯片背景。
> 正如“视差效果选项”中所解释的，如果真的有必要，我只推荐这样做，因为性能不会像使用`fp-bg`元素时那样。


## 应用背景
应用于`fp-bg`元素的背景应与将其应用于段落或幻灯片的方式相同。
您可以使用CSS或内联样式。

例如：
```css
#section1 .fp-bg{
    background-image: url('imgs/alvaro-genious.jpg');
    background-size: cover;
    background-position: center 80%;
}
```
## 选项

| 选项  | 说明 |
| ------------- | ------------- |
| **parallax**  | (默认为 `false`). [fullPage.js的扩展。](http://alvarotrigo.com/fullPage/extensions/). 定义是否在段落/幻灯片上使用视差背景效果。  |
| **parallaxOptions:**   | (默认： `{ type: 'reveal', percentage: 62, property: 'translate'}`). 当使用选项`parallax:true`时，表示允许配置视差背景效果的参数  |


### 视差效果选项
可以在[演示页面](http://alvarotrigo.com/fullPage/extensions/parallax.html)看到运行效果


在选项`parallaxOptions`中可用的可配置选项说明：

| parallaxOptions  | 描述 |
| ------------- | ------------- |
| **type**  | (默认 `reveal`) 可用值是`cover`和`reveal`。提供选择当前段落/幻灯片是高于还是低于目标页面的方法。当使用`cover`时，下一段落或幻灯片将会覆盖当前的部分页面。使用`reveal`仅是反转的效果，并在显示时覆盖了小部分目标页面 |
| **percentage**  | (默认值 62 ) 提供一种方法来定义与视口相关的视差效果的百分比。数值越小，视差效果越小，而最大值为100的图像则为完全静态的背景。   |
| **property** | 定义我们是否要将视差效果应用于`fp-bg`元素，或者直接应用于段落或幻灯片的背景属性。建议使用此选项的默认值。|

请注意，使用`fp-bg`元素可以获得更好的性能，因为它利用了translate3d硬件加速。该选项适用于那些由于某种原因不想在每个段落或幻灯片中添加额外的`fp-bg`元素或无法修改HTML标记的人。

## 方法
可以在[演示页面](http://alvarotrigo.com/fullPage/extensions/parallax.html)查看运行效果。

### setOption(optionName, value)
为给定选项设一个值。`optionName` 可以是`parallaxOptions`中的任意选项 (`type`, `percentage` 或 `property`).
```javascript
//改变属性`type`的值
fullpage_api.parallax.setOption('type', 'cover');

//改变属性`percentage`的值
fullpage_api.parallax.setOption('percentage', '30');
```
---

### init()
启用视差效果。如果您需要在某个特定时间点动态启用该功能，可以调用这个方法。
```javascript
fullpage_api.parallax.init();
```
---
### destroy()
关闭视差效果。
```javascript
fullpage_api.parallax.destroy();
```
