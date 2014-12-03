
function desenharBarGraph(data) {
    console.log(typeof(data))

    d3.selectAll("#pasted").remove();

    var keys = []
    var values = []

    for (var key in data) {
        keys.push(key)
        values.push(data[key])
    }

    //console.log(">" + keys);
    //console.log(">" + values);

    var result = quickSort(keys, values, 0, values.length - 1);

    //console.log("***" + keys.slice(0,5));
    //console.log("***" + values.slice(0,5));

    var data_index = [];

    for(var i = 0; i < keys.slice(0,5).length; i++){
        data_index.push(i)
    }

    d3.select(".chart")
      .selectAll("#show")
        .data(data_index)
      .enter().append("div")
        .attr("id", "pasted")
        .style("width", function(d) { return (values[d] * 30) + 40 + "px"; })
        .text(function(d) { return keys[d]; });
 }

function quickSort(items_aux, items, left, right) {

    var index;

    if (items.length > 1) {

        index = partition(items_aux, items, left, right);

        if (left < index - 1) {
            quickSort(items_aux, items, left, index - 1);
        }

        if (index < right) {
            quickSort(items_aux, items, index, right);
        }

    }

    return items + " " + items_aux;
}

 function partition(items_aux, items, left, right) {

     var pivot   = items[Math.floor((right + left) / 2)],
         i       = left,
         j       = right;


     while (i <= j) {

         while (items[i] > pivot) {
             i++;
         }

         while (items[j] < pivot) {
             j--;
         }

         if (i <= j) {
             swap(items_aux, items, i, j);
             i++;
             j--;
         }
     }

     return i;
 }

 function swap(items_aux, items, firstIndex, secondIndex){
     var temp = items[firstIndex];
     var temp_aux = items_aux[firstIndex];

     items[firstIndex] = items[secondIndex];
     items[secondIndex] = temp;

     items_aux[firstIndex] = items_aux[secondIndex];
     items_aux[secondIndex] = temp_aux;
 }