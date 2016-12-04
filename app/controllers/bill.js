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
    $.ajax({
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
    .done(function(result){
      let votesFor = result.bill.votes_for;
      let votesAgainst = result.bill.votes_against;

      $('#votesFor').html(votesFor);
      $('#votesAgainst').html(votesAgainst);
    });
  }
});
