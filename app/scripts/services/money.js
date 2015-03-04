//Factory that holds money when switching between pages.
angular.module('slotsApp')
.factory('MoneyFactory', function(){
  var total = 100
  function set(data) {
    total = data;
  }
  function get() {
    return total;
  }

  return {
    set: set,
    get: get
  }

});
