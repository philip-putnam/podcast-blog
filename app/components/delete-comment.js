import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(comment) {
      if(confirm("Are you sure?")) {
        this.sendAction('destroyComment', comment);
      }
    }
  }
});
