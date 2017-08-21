# whale

> Microframework | flexbox and basic tools

[![license][license-img]][license-url]
[![changelog][changelog-img]][changelog-url]

## Introduccion
Whale es un conjunto de funciones generales, que incluye menus, botones, tabs, reset css, flebox entre otros, todo en archivos muy pequeños.

## Instalación

Incluir **whale.css** y **whale.js**, ambos archivos son independientes entre si, no es obligatorio que se incluyan juntos aunque esa es la idea.

```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdn.rawgit.com/zkreations/whale/master/dist/latest/whale.min.css"/>

<!-- Latest compiled and minified JavaScript -->
<script src="https://cdn.rawgit.com/zkreations/whale/master/dist/latest/whale.min.js"></script>
```

# whale.css

> Conjunto de propiedades basadas en flexbox y enfocadas al diseño responsive.

## Breakpoints

Si basas tu proyecto en los Breakpoints de **whale** obtendras mejores resultados. Whale se basa en los siguientes.

```css
/*
=>MediaQuerys
*/
/* Extra small devices */
@media (max-width: 575px) {

}

/* Small devices */
@media (min-width: 576px) {
  
}

/* Medium devices */
@media (min-width: 768px) {
  
}

/* Large devices */
@media (min-width: 992px) {
   
}

/* Extra large devices */
@media (min-width: 1200px) {

}
```
## Componentes

Puedes otorgar clases a cualquier elemento html y este ganará las propiedades descritas en las siguientes tablas.

### Utilidades
<table>
    <tr>
        <td>.none</td>
        <td>El elemento no sera visible: <strong>display none</strong></td>
    </tr>
    <tr>
        <td>.none-print</td>
        <td>El elemento no sera visible en la vista de impresion</td>
    </tr>
    <tr>
        <td>.reset</td>
        <td>Resetea los estilo del elemento.</td>
    </tr>
    <tr>
        <td>.center</td>
        <td>Centra un elemento tipo bloque.</td>
    </tr>
    <tr>
        <td>.center-text</td>
        <td>Centra caracteres del tipo texto</td>
    </tr>
    <tr>
        <td>.clearfix</td>
        <td>Limpia los elementos flotantes dentro del padre.</td>
    </tr>
	<tr>
        <td>.button</td>
        <td>Otorga propiedades de boton a un elemento.</td>
    </tr>
    <tr>
        <td>.embed</td>
        <td>Los elementos incrustados dentro del padre adquieren propiedades responsive</td>
    </tr>
    <tr>
        <td>.table</td>
        <td>La tabla dentro del padre adquiere propiedades responsive.</td>
    </tr>
	<tr>
        <td>.container</td>
        <td>Genera un contenedor que se centra por defecto.</td>
    </tr>
    <tr>
        <td>.dropdown-menu</td>
        <td>Otorga propiedades de menu multinivel (Requiere wjs-menu)</td>
    </tr>
    
</table>


### flexbox

Las siguientes clases trabajan exclusivamente con flexbox layout. La sintaxis es similar a **Foundation**.

<table>
    <tr>
        <td>.flex</td>
        <td>Propiedad <strong>display: flex</strong></td>
    </tr>
    <tr>
        <td>.wrap</td>
        <td>Propiedad <strong>flex-wrap: wrap</strong> </td>
    </tr>
    <tr>
        <td>.wrap-reverse</td>
        <td>Propiedad <strong>flex-wrap: wrap-reverse</strong> </td>
    </tr>
    <tr>
        <td>.column</td>
        <td>Propiedad <strong>flex-direction: column</strong> </td>
    </tr>
    <tr>
        <td>.column-reverse</td>
        <td>Propiedad <strong>flex-direction: column-reverse</strong> </td>
    </tr>
    <tr>
        <td>.row</td>
        <td>Propiedad <strong>flex-direction: row</strong> </td>
    </tr>
    <tr>
        <td>.row-reverse</td>
        <td>Propiedad <strong>flex-direction: row-reverse</strong> </td>
    </tr>
    <tr>
        <td>.order-first</td>
        <td>Propiedad <strong>order: -1</strong> </td>
    </tr>
    <tr>
        <td>.order-last</td>
        <td>Propiedad <strong>order: 1</strong> </td>
    </tr>
    <tr>
        <td>.no-order</td>
        <td>Propiedad <strong>order: 0</strong> </td>
    </tr>
    <tr>
        <td>.justify-content-center</td>
        <td>Propiedad <strong>justify-content: center</strong> </td>
    </tr>
    <tr>
        <td>.justify-content-end</td>
        <td>Propiedad <strong>justify-content: flex-end</strong> </td>
    </tr>
    <tr>
        <td>.justify-content-start</td>
        <td>Propiedad <strong>justify-content: flex-start</strong> </td>
    </tr>
    <tr>
        <td>.justify-content-around</td>
        <td>Propiedad <strong>justify-content: space-around</strong> </td>
    </tr>
    <tr>
        <td>.justify-content-between</td>
        <td>Propiedad <strong>justify-content: space-between</strong> </td>
    </tr>
    <tr>
        <td>.align-content-center</td>
        <td>Propiedad <strong>align-content: center</strong> </td>
    </tr>
    <tr>
        <td>.align-content-end</td>
        <td>Propiedad <strong>align-content: flex-end</strong> </td>
    </tr>
    <tr>
        <td>.align-content-start</td>
        <td>Propiedad <strong>align-content: flex-start</strong> </td>
    </tr>
    <tr>
        <td>.align-content-around</td>
        <td>Propiedad <strong>align-content: space-around</strong> </td>
    </tr>
    <tr>
        <td>.align-content-between</td>
        <td>Propiedad <strong>align-content: space-between</strong> </td>
    </tr>
    <tr>
        <td>.align-content-stretch</td>
        <td>Propiedad <strong>align-content: stretch</strong> </td>
    </tr>
    <tr>
        <td>.align-items-baseline</td>
        <td>Propiedad <strong>align-items: baseline</strong> </td>
    </tr>
    <tr>
        <td>.align-items-center</td>
        <td>Propiedad <strong>align-items: center</strong> </td>
    </tr>
    <tr>
        <td>.align-items-end</td>
        <td>Propiedad <strong>align-items: flex-end</strong> </td>
    </tr>
    <tr>
        <td>.align-items-start</td>
        <td>Propiedad <strong>align-items: flex-start</strong> </td>
    </tr>
    <tr>
        <td>.align-items-stretch</td>
        <td>Propiedad <strong>align-items: stretch</strong> </td>
    </tr>
    <tr>
        <td>.align-self-auto</td>
        <td>Propiedad <strong>align-self: auto</strong> </td>
    </tr>
    <tr>
        <td>.align-self-baseline</td>
        <td>Propiedad <strong>align-self: baseline</strong> </td>
    </tr>
    <tr>
        <td>.align-self-center</td>
        <td>Propiedad <strong>align-self: center</strong> </td>
    </tr>
    <tr>
        <td>.align-self-end</td>
        <td>Propiedad <strong>align-self: flex-end</strong> </td>
    </tr>
    <tr>
        <td>.align-self-start</td>
        <td>Propiedad <strong>align-self: flex-start</strong> </td>
    </tr>
     <tr>
        <td>.align-self-stretch</td>
        <td>Propiedad <strong>align-self: stretch</strong> </td>
    </tr>
</table>

### flex Breakpoints

Si deseas interactuar con los Breakpoints de whale, puedes agregar a cualquier propiedad flex, las siguientes terminaciones.

<table>
    <tr>
        <td>-xsmall</td>
        <td>La propiedad se aplica solo a resoluciones menores de 575px.</td>
    </tr>
    <tr>
        <td>-small</td>
        <td>La propiedad se aplica hasta los 576px de resolucion.</td>
    </tr>
    <tr>
        <td>-medium</td>
        <td>La propiedad se aplica hasta los 768px de resolucion.</td>
    </tr>
    <tr>
        <td>-large</td>
        <td>La propiedad se aplica hasta los 992px de resolucion.</td>
    </tr>
    <tr>
        <td>-xlarge</td>
        <td>La propiedad se aplica hasta los 1200px de resolucion.</td>
    </tr>
</table>


# whale.js

> Se compone de diversas funciones generales. No necesitas saber de javascript para utilizarlo, solo conocer su sintaxis.

## Componentes

<table>
    <tr>
        <td>wjs-menu</td>
        <td>Crea un menu multi-nivel responsive.</td>
    </tr>
    <tr>
        <td>wjs-class</td>
        <td>Crea la funcion conocida como toggleclass.</td>
    </tr>
    <tr>
        <td>wjs-tab</td>
        <td>Inicializa los tabs.</td>
    </tr>
    <tr>
        <td>wjs-window</td>
        <td>Los enlaces del contenedor se abriran en una nueva ventana.</td>
    </tr>
    <tr>
        <td>wjs-group</td>
        <td>Los botones del contenedor agregaran o removeran una class a un unico contenedor.</td>
    </tr>
</table>

### wjs-menu

Inicializa la funcion que permite crear un menu multinivel responsive, el menu detecta los padres de los submenus y agrega un indicador. Para que el menu funcione correctamente es necesario agregar la class **dropdown-menu** a la etiqueta **ul** principal, se puede omitir esto ultimo si solo se desea la funcion. Ejemplo:

```html
<ul class="wjs-menu dropdown-menu">
   <li><a href="#">Item 1</a></li>
   <li><a href="#">Item 2</a>
      <ul><!-- sub menu-->
         <li><a href="#">Subitem 1</a></li>
         <li><a href="#">Subitem 2</a>     
      </ul>
   </li>
   <li><a href="#">Item 3</a></li>
</ul>
```

### wjs-class

Inicializa la funcion **toggleclass**, esto quiere decir que la etiqueta html sera capaz de agregar o quitar la class **is-active** a otro elemento. Para poder enlazar a este ultimo, el elemento afectado necesita una **id**, que tambien debe ser especificada al elemento que realiza la accion mediante el atributo **data-focus**. Ejemplo:

```html
<button class="wjs-class" data-focus="contenedor">Boton toggle</button>
<div id="contenedor"></div><!-- elemento afectado -->
```

### wjs-tab

Inicializa los **tabs**, requiere contenedores con una **id** unica y la class **this-panel**, tambien botones con la class **this-item** y el atributo **href** apuntando a la **id** del panel correspondiente. Ejemplo:

```html
<div class="wjs-tab">
   <div><!-- botones -->
      <a href="#panel1" class="this-item">Item 1</a>
      <a href="#panel2" class="this-item">Item 2</a>
   </div>
   <div><!-- paneles -->
      <div id="panel1" class="this-panel">Panel 1</div>
      <div id="panel2" class="this-panel">Panel 2</div>
   </div>
</div>
```

### wjs-window

Todos los enlaces dentro del contenedor que contengan la class **this-window** se abriran en una nueva ventana posicionada en el centro. Ejemplo:

```html
<div class="wjs-window">
   <a href="https://www.google.com" class="this-window">Ir a google</a>
   <a href="https://www.zkreations.com" class="this-window">Ir a zkreations</a>
</div>
```

### wjs-group

Todos los botones dentro del contenedor que contengan la class **this-button** agregaran o removeran una class a un unico contenedor con la id especificada. Los botones tambien requieren del atributo data-class para especificar la class que se agregara y removera segun la situacion. Ejemplo:

```html
<div class="wjs-group" data-focus="example">
   <button class="this-button" data-class="uno">Agregar clase uno</button>
   <button class="this-button" data-class="dos">Agregar clase dos</button>
</div>

<div id="example"></div>
```

## Licencia

**Whale** is licensed under the MIT License.

[changelog-img]: https://img.shields.io/badge/changelog-md-blue.svg?style=flat-square
[changelog-url]: changelog.md
[license-img]: https://img.shields.io/npm/l/normalize.css.svg?style=flat-square
[license-url]: LICENSE