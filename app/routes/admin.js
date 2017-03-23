import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // Query DB and allows access to to post records
    return Ember.RSVP.hash({
      post: this.store.findAll('post'),
      comment: this.store.findAll('comment')
    });
  },
  // Sending data through admin.js, creating new record in data store
  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      // Redirects to 'admin' route
      this.transitionTo('admin');
    },
    // sends action up to model DB to delete a post from DB
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('admin');
    },
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if( params[key]!==undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('admin');
    },
    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
