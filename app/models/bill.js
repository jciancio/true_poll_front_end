import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  votesFor: DS.attr('number'),
  votesAgainst: DS.attr('number')
});
