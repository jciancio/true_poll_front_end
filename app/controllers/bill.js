import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    voteFor(){
      console.log('im here');
    },

    voteAgainst(){
      console.log('im here');
    }
  }
});
