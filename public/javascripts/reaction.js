"use strict";

Array.prototype.shuffle = function() {
  var array = this;
  var m = array.length, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    [array[m], array[i]] = [array[i], array[m]];
  }
  return array;
}
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

console.log("Generate random")
console.log(testLength);
// Generate table
let numTable = document.getElementById("numTable");
let rowArray = Array.from(new Array(parseInt(testLength)), (x,i) => i+1);
rowArray.shuffle();
let index = 0;
for (let i = 0; i < Math.sqrt(testLength); i++) {
  let tr = document.createElement("tr");
  numTable.appendChild(tr);
  for (let j = 0; j < Math.sqrt(testLength); j++) {
    let td = document.createElement("td");
    tr.appendChild(td);
    td.innerHTML = rowArray[index++];
  }
}
