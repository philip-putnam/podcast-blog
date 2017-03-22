import Ember from 'ember';

export default Ember.Component.extend({
  // initially hides our form, new-post-tile.hbs on admin.hbs
  newPostFormShowing: false,
  // toggles hide/show of form
  actions: {
    toggleFormShowing: function() {
      if (!this.newPostFormShowing) {
        this.set('newPostFormShowing', true);
      } else {
        this.set('newPostFormShowing', false);
      }
    },
    // gathers values from new-post-file.hbs form
    savePost: function() {
      // saves those values in an object
      var params = {
        blog_author: this.get('blog_author'),
        blog_content: this.get('blog_content'),
        podcast_title: this.get('podcast_title'),
        logo: this.get('logo'),
        episode_title: this.get('episode_title'),
        air_date: this.get('air_date'),
        url: this.get('url'),
      };
      // hide form, new-post-tile.hbs on admin.hbs
      this.set('newPostFormShowing', false);
      // send data back up to and through admin.js
      this.sendAction('savePost', params);
    }
  }
});
