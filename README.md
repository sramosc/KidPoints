# KidPoints

Idea preliminar
------------------
Sistema de puntuación / premios

Resumen
-------
Aplicación pensada para la gestión de puntos y premios, para motivar el buen comportamiento de los niños.

Análisis
--------
La aplicación tendrá varias pantallas.

- Login: el usuario tiene que introducir login/pw para poder acceder a la aplicación. En función del usuario, tendrá un tipo de rol u otro que habilitará distintas opciones.
- Asignación de Puntos: desde esta pantalla se podrá seleccionar un día del calendario y asignar un número de puntos determinado al niño/niños seleccionados. Sólo podrá haber un voto por día/niño, pudiendose modificar en caso de error.
- Mostrar Puntos: podrá consultarse el número de puntos acumulados hasta el momento (total), el número de puntos obtenidos y consumidos, y filtrar por rango (total, diario, semanal o mensual)
- Premios: desde esta pantalla se mostrará una lista de los premios registrados y se activarán si están disponibles o no para los puntos actuales de los niños. También habrá una opción para registrar un nuevo premio o modificar uno existente.
- Registro de niños: Pantalla para dar de alta a niños
- Configuración: desde esta pantalla se podrá gestionar los datos del usuario y sus preferencias (cantidad de puntos máximos al dia, datos personales) y dar permiso a otros usuarios para acceder a los datos de los niños

Tecnología
----------
- Node.js
- ES6
- PouchDB

