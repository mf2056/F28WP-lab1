
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://mf2056.github.io/F28WP-lab1/week4/cities1.json');
ourRequest.onload = function() {
console.log(ourRequest.responseText);
};
ourRequest.send();

