import Ember from 'ember';
import DS from 'ember-data';


const {
  Model, attr
} = DS;


export default Model.extend({
  name            : attr(),
  title           : attr(),  
});
