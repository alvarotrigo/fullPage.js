# How to activate a fullPage.js extension 

1. Accédez à https://alvarotrigo.com/fullPage/extensions/activationKey.html. (Quelle est l'URL qui a été envoyée à votre adresse email lors de l'achat de l'extension)
1. Présentez la **clé de licence** qui vous a été remise lors de l'achat de l'article. Aussi disponible dans votre courriel de confirmation d'achat.
1. Un nom de domaine peut être requis afin d'obtenir la **clé d'activation** de votre produit.
1. Une fois que vous avez la **clé d'activation** de votre extension et domaine (générée lors des étapes précédentes) vous devrez ajouter une option dans l'initialisation de fullpage.js sous la forme `nomDeLextension + "Clé" : key`.

Par exemple :

```javascript
new fullPage('#fullpage', {
    fadingEffect : true,
    fadingEffectKey:'ACTIVATION KEY DEVRAIT ÊTRE ICI',
}) ;
```

Idem pour le reste des extensions si vous les utilisez.
Ce sont toutes les options de la clé d'extension pour le moment :

* `fadingEffectKey`
* `responsiveSlidesKey`
* `continuousHorizontalKey`
* `interlockedSlidesKey`
* `scrollHorizontallyKey`
* `resetSlidersKey`
* `offsetSectionsKey`
* `dragAndMoveKey`
* `parallaxKey`

Rappelez-vous que l'utilisation d'extensions nécessite l'utilisation de[`fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/fullpage.extensions.min.js) au lieu du fichier fullPage.js habituel (`fullpage.js`) comme expliqué dans[utilisation des extensions](https://github.com/alvarotrigo/fullPage.js#use-extensions).

### Que faire pour les environnements de développement / sites Web ?
Aucune clé d'activation n'est nécessaire pour localhost et 127.0.0.0.1. Tout autre domaine de staging nécessitera une licence (Professionnel ou Business) qui permettra de générer une nouvelle clé pour ceux-ci.

Si vous avez une licence qui vous permet de générer plusieurs clés d'activation, vous pouvez utiliser le même code JS pour toutes. Dans ce cas, vous pouvez utiliser un tableau avec les différentes clés pour chaque domaine, par exemple, si nous utilisons l'extension `scrollHorizontally` pour 3 domaines, nous pouvons faire ce qui suit :

```js
new fullPage('#fullpage', {
    scrollHorizontalement : true,
    défilementHorizontalementClé : ['domain1_key','domain2_key','domain3_key'].
}) ;
```

De cette façon, l'extension peut être utilisée dans n'importe lequel de ces 3 domaines.

### Clé de licence vs clé d'activation
Les deux sont des clés différentes.
- Vous obtenez la **clé de licence** lors de l'achat d'une extension.
- Vous obtenez la **clé d'activation**  lorsque vous activez votre extension pour un domaine particulier (sauf si vous utilisez la Business License). Pour le générer, vous avez besoin de la **clé de licence**.

La clé de licence est composée de 4 groupes de 8 caractères chacun (`XXXXXXXXXXXX-XXXXXXXXXXXXXX-XXXXXXXXXXXX-XXXXXXXXXXXX`) et la clé d'activation a une longueur variable et elle n'est pas composée de groupes séparés (`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)
Il est important de ne pas s'embrouiller les uns les autres.