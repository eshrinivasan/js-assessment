exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
      return arr.indexOf(item);
  },

  sum : function(arr) {
      var sum = arr.reduce(function(total, curr){
          return total + curr;
      });
      return sum;
  },

  remove : function(arr, item) {
      var filter = arr.filter(function(val){
        return val !== item;
      });

      return filter;
  },

  removeWithoutCopy : function(arr, item) {
      while(arr.indexOf(item) > -1){
        arr.splice(arr.indexOf(item), 1);
      }

      return arr;
  },

  append : function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate : function(arr) {
      arr.pop();
      return arr;
  },

  prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail : function(arr) {
      arr.shift();
      return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var counter = arr.filter(function(val){
      return item === val;
    }).length;

    return counter;
  },

  duplicates : function(arr) {

  },

  square : function(arr) {
    var square = arr.map(function(val){
      return val * val;
    })

    return square;
  },

  findAllOccurrences : function(arr, target) {
      var occurances = [];
      for(var i= 0; i < arr.length; i++){
        if(arr[i] == target){
          occurances.push(i);
        }
      }

      return occurances;
  }
};
