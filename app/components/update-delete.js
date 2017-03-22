import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    // delete action asks if user is sure, then passes action with post indentifying data up to admin.js
    delete(post) {
      if (confirm('Are you sure?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
