var express = require('express');
var app = express();
app.use(express.logger());

  app.get('/?*', function(request, response) {
  var requestedResourceId = request.params[0];

  if(!requestedResourceId || requestedResourceId < 0) {
    console.warn('Bad Request: Invalid parameters')
    response.statusCode = 400;
    return response.send('Bad Request');
  }

  console.log('Received a data request for resource %s', requestedResourceId);

  /**
   * Send back the resource data as follows:
   * Resource 7 has no changes
   * Resource 8 has new data
   * Resource 9 has ended
   */
   var resourceToReturn = {};

   switch(requestedResourceId)
   {
   case 'matchesfeed/7/matchcentre':
      resourceToReturn.id = 7;
   		resourceToReturn.version = 5000000000000;
   		resourceToReturn.refereeName = 'Deniz';
   		resourceToReturn.terminated = false;
   		break;
   case 'matchesfeed/8/matchcentre':
   		var d = new Date();
		  var n = d.getTime();
      resourceToReturn.id = 8;
   		resourceToReturn.version = n;
   		resourceToReturn.refereeName = 'Engin';  
   		resourceToReturn.terminated = false;
   		break;
   case 'matchesfeed/8/matchcentre':
      resourceToReturn.id = 9;
   		resourceToReturn.version = 9000000000000;
   		resourceToReturn.refereeName = 'Jon'; 
   		resourceToReturn.terminated = true; 
   		break;
   default:
  		resourceToReturn.id = null;
  		response.statusCode = 501;
    	return response.send('Not implemented');  
   }

   return response.send(JSON.stringify(resourceToReturn));
});

app.get('/', function(req, res){
  var body = 'node-dataprovider';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Server listening on %s', port);
});
