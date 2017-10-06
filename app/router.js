import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('mostrar');
  this.route('asignar');
  this.route('puntos');
  this.route('config');
  this.route('registrar');
  this.route('premios');
});

export default Router;
