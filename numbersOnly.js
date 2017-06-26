function copyArray(arr) {
    var newArray=[];
    for (var i=0; i<arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArray.push(arr[i]);
        }
    }
console.log(newArray);
}

copyArray(["fish", 4, "pickles", 9, 13, true, "roast beef"]);


