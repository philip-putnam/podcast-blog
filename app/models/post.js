import DS from 'ember-data';
// Define data store attributes/keys
export default DS.Model.extend({
    blog_author: DS.attr(),
    blog_content: DS.attr(),
    podcast_title: DS.attr(),
    logo: DS.attr(),
    episode_title: DS.attr(),
    air_date: DS.attr(),
    url: DS.attr(),
    comments: DS.hasMany('comment', { async: true })
});
