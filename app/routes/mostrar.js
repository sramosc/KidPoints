import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'daniela',
      title: 'Daniela',
      puntos_act: 30,
      puntos_tot: 75,
      img: 'https://thumbs.dreamstime.com/z/girl-boy-cartoon-character-children-icons-isolated-vector-illustrator-55196928.jpg'
    }, {
      id: 'claudia',
      title: 'Claudia',
      puntos_act: 34,
      puntos_tot: 67,
      img: 'https://thumbs.dreamstime.com/z/girl-boy-cartoon-character-children-icons-isolated-vector-illustrator-55196928.jpg'
    }]
  }
});
