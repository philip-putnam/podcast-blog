import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      post: this.store.findRecord('post', params.post_id),
      comment: this.store.findAll('comment')
    });
  },
  actions: {
    save(params) {
      console.log(params);
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      this.transitionTo('entry');
    }
  }
});
