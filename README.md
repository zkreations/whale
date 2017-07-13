# whale.css
Microframework | flexbox and basic tools

En muchos casos necesitamos crear un diseño basico, con menus multinivel responsive, dinamicos o elementos de este estilo y por falta de conocimientos recurrimos a frameworks mas grandes y complejas como JQuery. El hacer esto conlleva a la utilizacion de recursos que realmente no necesitamos. Whale es un conjunto de funciones generales, como la creacion de menus, toggleclass, tabs, reset css, flebox entre otros, todo en archivos muy pequeños.

## Instalación

Incluir **whale.css** y **whale.js**, recomiendo agregar **whale.css** debajo de `<head>` y **whale.js** arriba de `</body>` para mayor rendimiento. Al incluir whale.css ya no es necesario incluir normalizer.

```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdn.rawgit.com/zkreations/whale.css/master/dist/latest/whale.min.css"/>

<!-- Latest compiled and minified JavaScript -->
<script src="https://cdn.rawgit.com/zkreations/whale.css/master/dist/latest/whale.min.js"></script>
```

## Componentes

<table>
    <tr>
        <td>whale--menu</td>
        <td>Crea un menu multi-nivel responsive.</td>
    </tr>
    <tr>
        <td>whale--class</td>
        <td>Crea la funcion conocida como toggleclass.</td>
    </tr>
    <tr>
        <td>whale--tab</td>
        <td>Inicializa los tabs.</td>
    </tr>
    <tr>
        <td>whale--window</td>
        <td>Los enlaces del contenedor se abriran en una nueva ventana.</td>
    </tr>
    <tr>
        <td>whale--group</td>
        <td>Los botones del contenedor agregaran o removeran una class a un unico contenedor.</td>
    </tr>
</table>

## whale--menu

Inicializa la funcion que permite crear un menu multinivel responsive, el menu detecta los padres de los submenus y agrega un indicador. Para que el menu funcione correctamente es necesario agregar la class **dropdown-menu** a la etiqueta **ul** principal, se puede omitir esto ultimo si solo se desea la funcion. Ejemplo:

```html
<ul class="whale--menu dropdown-menu">
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

## whale--class

Inicializa la funcion **toggleclass**, esto quiere decir que la etiqueta html sera capaz de agregar o quitar la class **is-active** a otro elemento. Para poder enlazar a este ultimo, el elemento afectado necesita una **id**, que tambien debe ser especificada al elemento que realiza la accion mediante el atributo **data-focus**. Ejemplo:

```html
<button class="whale--class" data-focus="contenedor">Boton toggle</button>
<div id="contenedor"></div><!-- elemento afectado -->
```

## whale--tab

Inicializa los **tabs**, requiere contenedores con una **id** unica y la class **whale__panel**, tambien botones con la class **whale__item** y el atributo **href** apuntando a la **id** del panel correspondiente. Ejemplo:

```html
<div class="whale--tab">
   <div><!-- botones -->
      <a href="#panel1" class="whale__item">Item 1</a>
      <a href="#panel2" class="whale__item">Item 2</a>
   </div>
   <div><!-- paneles -->
      <div id="panel1" class="whale__panel">Panel 1</div>
      <div id="panel2" class="whale__panel">Panel 2</div>
   </div>
</div>
```

## whale--window

Todos los enlaces dentro del contenedor que contengan la class **window__button** se abriran en una nueva ventana posicionada en el centro. Ejemplo:

```html
<div class="whale--window">
   <a href="https://www.google.com" class="window__button">Ir a google</a>
   <a href="https://www.zkreations.com" class="window__button">Ir a zkreations</a>
</div>
```

## whale--group

Todos los botones dentro del contenedor que contengan la class **whale__button** agregaran o removeran una class a un unico contenedor con la id especificada. Los botones tambien requieren del atributo data-class para especificar la class que se agregara y removera segun la situacion. Ejemplo:

```html
<div class="whale--group" data-focus="example">
   <button class="whale__button" data-class="uno">Agregar clase uno</button>
   <button class="whale__button" data-class="dos">Agregar clase dos</button>
</div>

<div id="example"></div>
```

## Licencia

**Whale** is licensed under the MIT License.



