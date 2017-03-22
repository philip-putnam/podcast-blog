import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // Query DB and allows access to to post records
    return this.store.findAll('post');
  },
  // Sending data through admin.js, creating new record in data store
  actions: {
    savePost(params) {
      console.log(params);
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      // Redirects to 'admin' route
      this.transitionTo('admin');
    },
    // sends action up to model DB to delete a post from DB
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
