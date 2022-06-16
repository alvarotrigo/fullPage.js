![](https://cloud.githubusercontent.com/assets/1706326/23580315/f28edab4-00f6-11e7-90f9-81ffafd77b0e.gif)

Leia [como usar Extenões](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese#uso-de-extenões) antes de usar a opção de paralaxe.
- [Ejemplo online](http://alvarotrigo.com/fullPage/extensions/parallax.html)
- [Estrutura HTML necessária](#estrutura-html-necessária)
- [Adicionando a imagem de fundo](#adicionando-a-imagem-de-fundo)
- [Opções](#Opções)
  - [Opções do efeito parallax](#opções-do-efeito-parallax)
- [Métodos](#métodos)

## Estrutura HTML necessária
Para usar o efeito de paralaxe em seções ou slides, precisaremos adicionar um novo elemento que use a classe `fp-bg`. Será um elemento `div` vazio que colocaremos como o primeiro elemento abaixo da seção ou slide ao qual pertence.

```html
<div class="fp-bg"></div>
```

Nesse elemento, teremos que aplicar a imagem de fundo, em vez de fazê-lo diretamente na seção ou nos slides aos quais pertence.

Por exemplo:
```html
<div id="fullpage">
    <div class="section" id="section1">
        <div class="fp-bg"></div>
        Slide 1.1
    </div>
    <div class="section" id="section2">
        <div class="slide" id="slide2-1">
            <div class="fp-bg"></div>
            Slide 2.1
        </div>
        <div class="slide" id="slide2-2">
            <div class="fp-bg"></div>
            Slide 2.2
        </div>
    </div>
</div>
```

Você pode ver esta mesma estrutura no código fonte do [exemplo de paralaxe](http://alvarotrigo.com/fullPage/extensions/parallax.html).

> Se por algum motivo você não quiser adicionar um novo elemento fp-bg à Estrutura da Página, você pode usar a opção `property` dentro de `parallaxOptions` e definir seu valor como `background`. Dessa forma, você pode aplicar o plano de fundo diretamente na seção ou no slide.
> Como será explicado posteriormente na seção Opções do efeito parallax, só recomendo fazer isso se for realmente necessário, pois o desempenho não será o mesmo de quando se utiliza o elemento `fp-bg`.

<br>

## Adicionando a imagem de fundo
O plano de fundo deve ser aplicado diretamente sobre o elemento `fp-bg` da mesma forma que você faria em uma seção ou slide.
Você pode usar CSS para isso ou usar estilos inline através do atributo `style`.

Por exemplo:
```css
#section1 .fp-bg{
    background-image: url('imgs/alvaro-genious.jpg');
    background-size: cover;
    background-position: center 80%;
}
```

## Opções

| Opção | Descrição |
| ------------- | ------------- |
| **paralaxe** | (por padrão `falso`). [Extensão do fullPage.js](http://alvarotrigo.com/fullPage/extensions/). Determina se o efeito de paralaxe deve ser usado em seções e slides. Os valores possíveis são `false`, `true`, `sections`, `slides`|
| **Opções de paralaxe:** | (padrão: `{ type: 'reveal', percentage: 62, property: 'translate'}`). Permite definir os parâmetros para o efeito de paralaxe ao usar a opção `parallax: true`. |
<br>

### Opções do efeito parallax
Você pode vê-los em ação na [página de exemplo](http://alvarotrigo.com/fullPage/extensions/parallax.html).

Descrição das opções de configuração disponíveis na opção `parallaxOptions`:

| Opções de paralaxe | Descrição |
| ------------- | ------------- |
| **tipo** | (o padrão é `reveal`) Os valores possíveis para esta opção são `cover` e `reveal`. Eles permitem que você escolha a maneira como as seções ou slides se sobrepõem, determinando se a seção/slide atual ficará acima ou abaixo do destino. Quando a opção `cover` é usada, a Seção/Slide de destino aparecerá para cobrir parte da Seção/Slide atual. Se `reveal` for usado, o efeito será o oposto e parte da seção de destino/Slide será coberta conforme aparece. |
| **porcentagem** | (padrão 62) permite definir a porcentagem do efeito de paralaxe em relação à viewport (tamanho da tela). Usar um valor pequeno resultará em menos efeito de paralaxe, e usar 100, que é o máximo, mostrará um plano de fundo estático. |
| **propriedades** | Determina se o efeito de paralaxe será aplicado ao elemento `fp-bg` ou diretamente à propriedade de fundo da seção/slide. Recomenda-se usar o valor padrão para esta opção. |

Observe que usar o elemento `fp-bg` fornece um desempenho muito melhor e mais suave ao executar o efeito. Isso ocorre porque isso faz uso da aceleração de hardware ao usar o translate3d. A opção `background` está disponível para aqueles que por algum motivo não querem adicionar o elemento `fp-bg` extra ou que não podem modificar o código HTML.

## Métodos
Você pode vê-los em ação na [página de exemplo](http://alvarotrigo.com/fullPage/extensions/parallax.html).

### setOption(optionName, value)
Define um valor para a opção passada a ele como parâmetro. `optionName` pode ser qualquer uma das opções disponíveis em `parallaxOptions`. (`tipo`, `porcentagem` ou `propriedade`).

```javascript
//alterando o valor da propriedade `type`
fullpage_api.parallax.setOption('type', 'cover');

//alterando o valor da propriedade `percentage`
fullpage_api.parallax.setOption('percentage', '30');
```
---

### init()
Ative o efeito de paralaxe. É útil quando você precisa habilitar esse efeito dinamicamente em um determinado momento.
```javascript
fullpage_api.parallax.init();
```
---
### destroy()
Desativa o efeito de paralaxe.
```javascript
fullpage_api.parallax.destroy();
```
