import Ember from 'ember';
import VerticalBarChartComponent from 'ember-charts/components/vertical-bar-chart';

const { computed, get, on, getProperties, setProperties } = Ember;

// export default Ember.Component.extend({
// });

var MyVbcComponent = VerticalBarChartComponent.extend({
  data: computed('model', function(){
    let model, yesVotes, noVotes;
    model = get(this, 'model');
    yesVotes = model.data.votesFor
    noVotes = model.data.votesAgainst;
    return [
      {
        label: 'Yes',
        value: yesVotes
      },
      {
        label: 'No',
        value: noVotes
      }
    ]
  })
});

export default MyVbcComponent;
