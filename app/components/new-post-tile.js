import Ember from 'ember';

export default Ember.Component.extend({
  newPostFormShowing: false,
  actions: {
    toggleFormShowing: function() {
      if (!this.newPostFormShowing) {
        this.set('newPostFormShowing', true);
      } else {
        this.set('newPostFormShowing', false);
      }
    }
  }
});
