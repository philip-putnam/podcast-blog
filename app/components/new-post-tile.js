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
    },
    savePost: function() {
      var params = {
        blog_author: this.get('blog_author'),
        blog_content: this.get('blog_content'),
        podcast_title: this.get('podcast_title'),
        logo: this.get('logo'),
        episode_title: this.get('episode_title'),
        air_date: this.get('air_date'),
        url: this.get('url'),
      };
      this.set('newPostFormShowing', false);
      this.sendAction('savePost', params);
    }
  }
});
