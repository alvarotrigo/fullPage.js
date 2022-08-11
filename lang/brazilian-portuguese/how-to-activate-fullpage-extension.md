# Cómo activar una extension de fullPage.js

1. Acesse https://alvarotrigo.com/fullPage/extensions/activationKey.html. (Que é o URL que é enviado a você por e-mail após a compra da extensão)
1. Insira a *chave de licença* que lhe foi mostrada após a compra da extensão. Também disponível no e-mail de confirmação de compra.
1. Dependendo da sua licença. Talvez seja necessário inserir um domínio para obter a **chave de ativação** do seu produto.
1. Uma vez que você tenha a **chave de ativação** para sua extensão e domínio (gerada nas etapas anteriores), você deverá adicionar a opção correspondente à sua extensão na inicialização de fullPage.js. Isso estará na forma de ExtensionName + "Key": key.

Por exemplo:

```javascript
var myFullpage = new fullpage('#fullpage', {
    fadingEffect: true,
    fadingEffectKey: 'Cole a chave de ativação aqui',
});
```

O mesmo aconteceria com o resto das extensões que você está usando.
Estas são todas as opções possíveis para outras chaves de extensão:

* `fadingEffectKey`
* `responsiveSlidesKey`
* `ContinuousHorizontalKey`
* `interlockedSlidesKey`
* `scrollHorizontallyKey`
* `resetSlidersKey`
* `offsetSectionsKey`
* `dragAndMoveKey`
* `parallaxKey`
* `cardsKey`

Lembre-se que o uso de extensões requer o uso de [`fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/fullpage.extensions.min.js) em em vez do arquivo fullPage.js usual (`fullpage.js`) conforme explicado em [Usando extensões](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese# use-of-extensions ).

### O que fazer para ambientes de desenvolvimento e sites de teste?
O uso de uma chave de ativação não é necessário para ambientes de host local.
Se você precisar usar uma extensão em um ambiente de desenvolvimento externo, poderá obter a chave de ativação desse domínio e, em seguida, [entre em contato](http://alvarotrigo.com/#contact) para obter outra chave ao movê-la para produção.

Se você tiver uma licença que permite gerar várias chaves de ativação para vários domínios, convém usar o mesmo código JS para todos eles. Nesse caso, você pode usar um array com as diferentes chaves para cada domínio. Por exemplo, se estivermos usando a extensão `scrollHorizontally` para 3 domínios, podemos fazer o seguinte:

```js
new fullPage('#fullpage', {
    scrollHorizontally: true,
    scrollHorizontallyKey: ['domain1_key', 'domain2_key', 'domain3_key'] 
});
```
Desta forma, a extensão pode ser usada em todos os 3 domínios.

### Chave de licença x Chave de ativação
São chaves muito diferentes:
- Você obtém a **chave de licença** ao comprar qualquer extensão.
- Você obtém a **chave de ativação** ao ativar uma extensão para um domínio específico (a menos que use a licença de domínio ilimitado). Para gerar a chave de ativação, você precisará usar a chave de licença.

A chave de licença é composta por 4 grupos de 8 caracteres cada (`XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX`) e a chave de ativação é de comprimento variável e não é composta por grupos separados (`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`).
É importante não confundir os dois.