# Catlistener
![imagen](https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/12669569_997263900319311_4752086437610440860_n.jpg?oh=e7cfe2f13100e845f08842d33313a2c8&oe=5727E541)

##English
## Instalation

### npm

`npm install catlistener`

## Using 

This is the simplest way to use:
```js
var cat = require('catlistener');

cat.server({
  enviroment:{
    ENV: dev
  },
  node: 'node',
  debug: '-debug',
  app: 'server'
});

```
## Using server

In enviroment section, place the enviroment variables that be useful for our project, "enviroment" should be always initial.


In the Node section we can use of any module for start our server: 

####node

####supervisor

####babel-node


### Using stylus
```js
cat.stylus({
  options: ['compiles','listener', 'watch'],
  css: './app/staticos/css/',
  stylus: './app/staticos/stylus/estilo.styl'
});
```
In options we can customize the options that stylus contain.

In css add the route where our css compiled going to be saved.

In stylus add the route of our styl file.

## Using Broserify
```js
cat.broserify({
  original: './app/staticos/js/script.js',
  compilado: './app/staticos/js/compilado.js',
  presets: true
});
```
In "original" put the direction of our original Js.

In "compilado" put the direction and the name of our Js files compilated in Ecmascript 6.

"Presets" it´s able to put if you want, use Ecmascript 6 compilated with Babelify

IMPORTANT: For this function to Broserify works must download babel-preset-es2015


## Terminal Commands 

The use of Terminal Commands is actually ilimited, we can use most of the Git commands, whitout leaving to get response about pour server and stylus, similarly we can install npm modules whitout stop the server.

##Implementation

To use this module, just create a file where put all previous that you want and it begin like the example:

```
Node fileCreated
```

As easy as that Catlistener Module will be executing.

##Español
Un automatizador de tareas y con comandos de terminal para poder ejecutar npm o git sin dejar de ejecutar el servidor u otro servicio.

## Instalación

### npm

`npm install catlistener`

## Uso

La forma de usar es la siguiente:
```js
var cat = require('catlistener');

cat.server({
  enviroment:{
    ENV: dev
  },
  node: 'node',
  debug: '-debug',
  app: 'server'
});

```

### Uso del servidor

En la sección de enviroment colocamos las variables de entorno que utilizaremos para nuestro proyecto, enviroment siempre debe de ir primero.

En la sección `node` podemos hacer uso de cualquier módulo para levantar nuestro servidor:

####node

####supervisor

####babel-node


### Uso de stylus
```js
cat.stylus({
  options: ['compila','escucha', 'observa'],
  css: './app/staticos/css/',
  stylus: './app/staticos/stylus/estilo.styl'
});
```
En `options` colocamos las opciones que queramos usar en nuestro stylus.

En `css` colocamos la dirección donde se guardara nuestro css compilado.

En `stylus` colocamos la dirección de nuestro archivo styl.

### Uso de broserify
```js
cat.broserify({
  original: './app/staticos/js/script.js',
  compilado: './app/staticos/js/compilado.js',
  presets: true
});
```
En `original` colocamos la dirección de nuestro js original.

En `compilado` colocamos la dirección y el nombre de nuestros js compilado en ecmascript 6.

En `presets` podemos colocar si queremos que use ecmascript 6 compilado con babelify

NOTA: Para que la función de broserify funcione debes de descargar babel-preset-es2015

## Comandos de terminal

El uso de los comandos es limitado, podemos usar la mayoría de los comandos de git sin dejar de obtener respuesta de lo que ocurre en nuestro servidor y stylus, de igual forma podemos instalar módulos de npm sin detener el servidor.

## Ejecución

Para poder hacer uso del módulo, solo crea un archivo donde coloques todo lo anterior que desees e inicia así:

```
node archivoCreado
```

Y asi de facil catlistener se estará ejecutando.
