import Ember from 'ember';
// return each 'post' object in model() to be displayed in index.hbs
export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
});
