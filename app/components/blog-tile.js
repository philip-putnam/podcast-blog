import Ember from 'ember';

// hide blog content unless user action click on img or title, linked to index.hbs
export default Ember.Component.extend({
  blogContentShowing: false,
  actions: {
    contentShow: function() {
      if (!this.blogContentShowing) {
        this.set('blogContentShowing', true);
      } else {
        this.set('blogContentShowing', false);
      }
    }
  }
});
