//Assignment One

/*Just practicing a multi-line comment...
still practicing*/

let myhttp = require('http');

//dot notation to access object and its methods(commands) and properties
//createServer takes arguments aka parameters
let myserver = myhttp.createServer(
  function( myrequest, myresponse){
    console.log( myrequest.url );

    let mytext;
    if (myrequest.url === '/home' ){mytext = "Wow its working...";
   } else {
      mytext = 'Unbelievable!';
   }
    
    myresponse.writeHead( 200, { 'Content-Type': 'text/plain'});

    myresponse.end( mytext );
  }
);
//asking hhtp to listen
myserver.listen(8080, '0.0.0.0');

console.log('server has started');