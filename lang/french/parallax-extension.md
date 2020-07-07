# Parallax extension 

![](https://cloud.githubusercontent.com/assets/1706326/23580315/f28edab4-00f6-11e7-90f9-81ffafd77b0e.gif)

Lisez [Utilisation des extensions](https://github.com/alvarotrigo/fullPage.js#use-extensions) avant d'utiliser l'option parallaxe.
- [Démo en direct](http://alvarotrigo.com/fullPage/extensions/parallax.html)
- [Structure HTML requise](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax#required-html-structure)
- [Application de l'arrière-plan](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax#applying-the-background)
- [Options](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax#options)
  - [Options de l'effet parallax](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax#parallax-effect-options)
- [Méthodes](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax#methods)

## HTML
Afin d'utiliser l'effet parallaxe dans les sections et les diapositives, un nouvel élément devra être ajouté avec la classe `fp-bg`. Il devrait s'agir d'un `div` vide placé comme premier enfant de la section ou de la diapositive. Comme ce qui suit :

```html
<div class="fp-bg"></div>
```

Ce serait l'élément auquel vous devrez appliquer le fond au lieu de la section ou des diapositives à laquelle il appartient.

Par exemple :
```html
<div id="fullpage">
    <div class="section" id="section1">
      <div class="fp-bg"></div>
        Diapositive 1.1
      </div>
    <div class="section" id="section2">
        <div class="slide" id="slide2-1">
          <div class="fp-bg"></div>
            Diapositive 2.1
        </div>
        <div class="slide" id="slide2-2">
            <div class="fp-bg"></div>
            Diapositive 2.2
        </div>
    </div>
</div>
```

Cette structure peut être vue dans le code source de
 [la page de démonstration de parallax](http://alvarotrigo.com/fullPage/extensions/parallax.html).

> Si pour une raison quelconque vous ne voulez pas ajouter un nouvel élément dans votre mise en page, vous pouvez définir l'option `property` dans `parallaxOptions` sur `background` afin d'appliquer l'effet à la section courante ou au fond de diapositive.
> Comme expliqué dans Options de l'effet Parallax, je ne recommande de le faire que si c'est vraiment nécessaire, car les performances ne seront pas les mêmes que lors de l'utilisation des éléments `fp-bg`.

<br>

## Appliquer l'arrière-plan
L'arrière-plan doit être appliqué à l'élément `fp-bg` de la même manière que vous l'appliqueriez à une section ou une diapositive.
Vous pouvez utiliser le CSS ou le style en ligne.

Par exemple :
```css
#section1.fp-bg{
    background-image : url('imgs/alvaro-genious.jpg') ;
    background-size : cover;
    background-position : center 80% ;
}
```
## Options

| Option | Description |
| ------------- | ------------- |
| **Parallax** | (par défaut `false`). [Extension de fullPage.js](http://alvarotrigo.com/fullPage/extensions/). Définit s'il faut ou non utiliser les effets de fond de parallax sur les sections / diapositives.  |
| **parallaxOptions:** | (par défaut : `{ type:'reveal', percentage: 62, property:'translate'}`). Permet de configurer les paramètres de l'effet de fond de parallax lors de l'utilisation de l'option `parallax:true`.  |
<br>

### Options de l'effet parallax
Vous pouvez les voir en action [dans la page de démonstration](http://alvarotrigo.com/fullPage/extensions/parallax.html)

Description des options configurables disponibles dans l'option `parallaxOptions` :

| parallaxOptions | Description |
| ------------- | ------------- |
| **type** | (par défaut `reveal`) Les valeurs possibles sont `cover` et `reveal`. Permet de choisir si la section/la diapositive en cours sera supérieure ou inférieure à celle de destination. Lorsque vous utilisez le `cover`, la section ou la diapositive suivante apparaîtra couvrant une partie de la section ou de la diapositive en cours. L'utilisation de `reveal` inversera simplement l'effet et couvrira un peu celui de la destination tout en le révélant.  |
| **percentage** | (`62` par défaut) permettent de définir le pourcentage de l'effet parallax par rapport à la fenêtre. Avoir une valeur plus petite aura un effet de parallaxe plus petit, et avoir 100, qui est le maximum, montrera des fonds complètement statiques.   |
| **property** | Les valeurs possibles sont `translate` et `background`. Définit si nous voulons appliquer l'effet parallax à l'élément `fp-bg` ou directement à la propriété de fond de la section ou de la diapositive.  Il est recommandé d'utiliser la valeur par défaut pour cette option.


Notez que l'utilisation de l'élément `fp-bg` fournit une bien meilleure performance car il utilise l'accélération matérielle translate3d. L'option est là pour ceux qui, pour une raison particulière, ne veulent pas ajouter l'élément supplémentaire `fp-bg` dans chaque section ou diapositive ou ne peuvent simplement pas modifier le balisage HTML.

## Méthodes
Vous pouvez les voir en action [dans la page de démonstration](http://alvarotrigo.com/fullPage/extensions/parallax.html)

#### setOption(nomEnOption, valeur)
Définit une valeur pour une option donnée. `nomEnOption` peut être l'une quelconque des options disponibles dans `parallaxOptions`. (`type`, `pourcentage` ou `bien`).
```javascript
modifier la valeur de la propriété `type`
fullpage_api.parallax.setOption('type','cover') ;

modification de la valeur de la propriété `pourcentage`
fullpage_api.parallax.setOption('percentage','30');
```
---
### destroy()
Éteint l'effet paralax.
```javascript
fullpage_api.parallax.destroy();
```