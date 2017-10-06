# KidPoints

## Idea preliminar

Sistema de puntuación / premios

## Resumen

Aplicación pensada para la gestión de puntos y premios, para motivar el buen comportamiento de los niños.

## Análisis

La aplicación tendrá varias pantallas.

- Login: el usuario tiene que introducir login/pw para poder acceder a la aplicación. En función del usuario, tendrá un tipo de rol u otro que habilitará distintas opciones.
- Asignación de Puntos: desde esta pantalla se podrá seleccionar un día del calendario y asignar un número de puntos determinado al niño/niños seleccionados. Sólo podrá haber un voto por día/niño, pudiendose modificar en caso de error.
- Mostrar Puntos: podrá consultarse el número de puntos acumulados hasta el momento (total), el número de puntos obtenidos y consumidos, y filtrar por rango (total, diario, semanal o mensual)
- Premios: desde esta pantalla se mostrará una lista de los premios registrados y se activarán si están disponibles o no para los puntos actuales de los niños. También habrá una opción para registrar un nuevo premio o modificar uno existente.
- Registro de niños: Pantalla para dar de alta a niños
- Configuración: desde esta pantalla se podrá gestionar los datos del usuario y sus preferencias (cantidad de puntos máximos al dia, datos personales) y dar permiso a otros usuarios para acceder a los datos de los niños

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)
* [PouchDB] 

## Installation

* `git clone <repository-url>` this repository
* `cd kid-points`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
