import { test } from 'qunit';
import moduleForAcceptance from 'kid-points/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list points');

test('Deberia mostrar la pantalla de Mostrar Puntos como pantalla inicial', function (assert){
  visit('/');
  andThen(function(){
    assert.equal(currentURL(), '/mostrar','deberia redirigir automaticamente');
  });
});

test('Deberia enlazar a la pantalla de Mostrar Puntos', function (assert){
  visit('/');
  click('a:contains("Mostrar")');
  andThen(function() {
    assert.equal(currentURL(), '/mostrar', 'deberia navegar a Mostrar');
  });
});

test('Deberia mostrar los puntos disponibles por cada niño', function (assert){
  visit('/');
  andThen(function() {
    assert.equal(find('.listing').length,2,'deberia haber 2 registros de puntos');
  });
});

test('Deberia enlazar a la pantalla de Premios', function (assert){
  visit('/');
  click('a:contains("Premios")');
  andThen(function() {
    assert.equal(currentURL(), '/premios', 'deberia navegar a Premios');
  });
});

test('Deberia enlazar a la pantalla de Configuracion', function (assert){
  visit('/');
  click('a:contains("Configuración")');
  andThen(function() {
    assert.equal(currentURL(), '/config', 'deberia navegar a Configuración');
  });
});

test('Deberia enlazar a la pantalla de Registro', function (assert){
  visit('/');
  click('a:contains("Registro")');
  andThen(function() {
    assert.equal(currentURL(), '/registrar', 'deberia navegar a Registro');
  });
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
