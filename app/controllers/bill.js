import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    voteFor(bill){
      this.vote(bill, 1);
    },

    voteAgainst(bill){
      this.vote(bill, 0);
    }
  },

  vote(bill, position) {
    let model = this.model;
    Ember.$.ajax({
      type: 'POST',
      url: `/bills/${bill.id}/votes`,
      contentType: 'application/json',
      data: JSON.stringify({
        vote: {
          position: position,
          bill_id: bill.id
        }
      })
    })
    .then(function(result){
      model.set('votesFor', result.bill.votes_for);
      model.set('votesAgainst', result.bill.votes_against);
    });
  }
});
