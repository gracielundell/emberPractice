import Ember from 'ember';

export default Ember.Route.extend({
  // method inside an ember class is called a hook, so this is our model hook
  model() {
    return this.store.findAll('rental');
  },
});
