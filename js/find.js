/* 
    find() does the same application as filter. But only difference is that find() returns only the first match.
*/


const friends = ['anik', 'babul', 'suroma', 'sumit', 'bablu', 'pritum'];

const filteredNamesFilter = friends.find(x => x.length % 5 == 0);
console.log(filteredNamesFilter);
/* 
 In this case: 
 Filter returns: [ 'babul', 'sumit', 'bablu' ]
 Find returns: babul
 map returns: [ false, true, false, true, true, false ]
*/