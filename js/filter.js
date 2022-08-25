/* 
    filter() is as same as the MAP. Only difference is 
    *filter() filter elements on condition and returns the rest.
    *but map() returns every elements if an elements doesn't mathch the condtion it returns undefined!
*/

/* 
    Considering the following example:
    1: Get and array of names of your friends.
    2: Store the names that are even length only
*/

const friends = ['anik', 'babul', 'suroma', 'sumit', 'bablu', 'pritum'];

/* Using map() returns this:
output: [ false, true, false, true, true, false ] */
const filteredNamesMap = friends.map(x => x.length % 5 == 0);
console.log(filteredNamesMap);


/* using filter() returns this:
output: [ 'babul', 'sumit', 'bablu' ] */
const filteredNamesFilter = friends.filter(x => x.length % 5 == 0);
console.log(filteredNamesFilter);

/* 
    above is the key difference in map and filter

    -> map returns the operation result and stores in an new array.
    -> filter() filters elements based on the condition and returns the element if condition mathches.
*/
