import Ember from 'ember';

export default Ember.Component.extend({
  updateFormShowing: false,
  actions: {
    toggleUpdateForm: function() {
      if (!this.updateFormShowing) {
        this.set('updateFormShowing', true);
      } else {
        this.set('updateFormShowing', false);
      }
    },
    // delete action asks if user is sure, then passes action with post indentifying data up to admin.js
    delete(post) {
      if (confirm('Are you sure?')) {
        this.sendAction('destroyPost', post);
      }
    },
    update(post) {
      var params = {
        blog_author: this.get('blog_author'),
        blog_content: this.get('blog_content'),
        podcast_title: this.get('podcast_title'),
        logo: this.get('logo'),
        episode_title: this.get('episode_title'),
        air_date: this.get('air_date'),
        url: this.get('url'),
      };
      this.set('updateFormShowing', false);
      this.sendAction('update', post, params);
    }

  }
});
