import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create(){
      let title = this.get('title'),
          description = this.get('description');

      Ember.$.ajax({
        type: 'POST',
        url: '/bills',
        contentType: 'application/json',
        data: JSON.stringify({
          bill: {
            title: title,
            description: description
          }
        })
      })
      .then(function(){
        console.log(arguments);
      });
    }
  }
});
