import Ember from 'ember';
import VerticalBarChartComponent from 'ember-charts/components/vertical-bar-chart';

const { computed, get } = Ember;

export default VerticalBarChartComponent.extend({
  data: computed('votesFor', 'votesAgainst', function(){
    let votesFor = get(this, 'votesFor'),
        votesAgainst = get(this, 'votesAgainst');

    let chartData = [
      {
        label: 'Yes',
        value: votesFor
      },
      {
        label: 'No',
        value: votesAgainst
      }
    ];

    return chartData;
  })
});
