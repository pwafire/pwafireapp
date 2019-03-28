
var render = function (template, node) {
  
  if (!node) return;
  node.innerHTML = template;
  
};

var template = '<h1>Hello world!</h1>';
render(template, document.querySelector('#main'));

/*

var data = {
  animals:[
    {name: 'mouse'},
    {name: 'cat'},
    {name: 'bird'},
    {name: 'dog'}
  ]
};
var directive = {
  'li':{
    'animal<-animals':{ //for each entry in animales name the element 'animal'
      'span': 'animal.name' //the dot selector, means the current node (here a LI)
    }
  }
};
$p( 'ul' ).render( data, directive );
*/