import Ember from 'ember';
import layout from '../templates/components/list-view';
const {
  computed
} = Ember;
export default Ember.Component.extend({
  layout: layout,
  itemArray: Ember.A(),
  searchTerm: "",
  searchField: "name",
  sortField: "name",
  sortType: "asc",
  listItems: computed.alias('sortedItems'),

  sortDef: computed('sortField', 'sortType', function() {
    let temp = [this.get("sortField"), this.get("sortType")].join(":");
    return [temp];
  }),

  isEmptySearch: computed.empty("searchTerm"),

  searchRegex: computed("searchTerm", function() {
    if(this.get("isEmptySearch")) {return;}
    let string = this.get("searchTerm").replace(/[^\w\s]/gi, '');
    return new RegExp(string, "i");
  }),

  filteredItems: computed('itemArray.[]', 'searchTerm', function() {
    if(this.get("isEmptySearch")) { return this.get("itemArray"); }
    let exp = this.get("searchRegex");
    let field = this.get("searchField");
    let filtered = this.get("itemArray").filter((item) => {
      return exp.test(item.get(field));
    });
    return filtered;
  }),

  sortedItems: computed.sort('filteredItems','sortDef')


});
