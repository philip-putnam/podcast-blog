import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('admin');
  // add DS id to URL to make it unique
  this.route('entry', {path: '/entry/:post_id'});
});

export default Router;
