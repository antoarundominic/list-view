import Ember from 'ember';
export default Ember.Component.extend({
  agents: Ember.A([
    {id:1, name:"abc"},
    {id:11, name:"bca"},
    {id:111, name:"cab"}
  ]),
  sortType: "asc",
  actions: {
    add() {
      this.get("agents").pushObject({id:1111, name:"1an"});
    },
    remove() {
      this.get("agents").popObject();
    },
    sort(type) {
      this.set("sortType", type);
    }
  }
});
