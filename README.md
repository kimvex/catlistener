# Catlistener
![imagen](https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/12669569_997263900319311_4752086437610440860_n.jpg?oh=e7cfe2f13100e845f08842d33313a2c8&oe=5727E541)

## Instalación

### npm

`npm install catlistener`

## Uso

La forma facil de usar es la siguiente:
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

En la seccion de enviroment colocamos las variables de entorno que utilizaremos para nuestro proyecto, enviroment siempre debe de ir primero.

En la seccion node podemos hacer uso de cualquier modulo para levantar nuestro servidor:

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
En options colocamos las opciones que querramos que haga nuestro stylus.

En css colocamos la direccion donde se guardara nuestro css compilado.

En stylus colocamos la direccion de nuestro archivo styl.

### Uso de broserify
```js
cat.broserify({
  original: './app/staticos/js/script.js',
  compilado: './app/staticos/js/compilado.js',
  presets: true
});
```
En original colocamos la direccion de nuestro js original.

En compilado colocamos la direccion y el nombre de nuestros js compilado en ecmascript 6.

En presets podemos colocar si queremos que use ecmascript 6 compilado con babelify

NOTA: Para que esta funcion de broserify funcione debes de descargar babel-preset-es2015


## Comandos de terminal

El uso de los comandos es limitado, podemos hacer la mayoria de los comandos de git sin dejar de obtener respuesta de lo que ocurre en nuestro servidor y stylus, de igual forma podemos instalar modulos de npm sin detener el servidor.

## Ejecucion

Para poder hacer uso del modulo solo crea un archivo donde coloques todo lo anterior que desees e inicia asi:

```
node archivoCreado
```

Y asi de facil catlistener se estara ejecutando.
