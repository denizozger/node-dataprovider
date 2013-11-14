var express = require('express');
var app = express();
app.use(express.logger());

app.get('/matchesfeed/:id/matchcentre', function(request, response) {
  var requestedMatchId = request.params.id;

  if(!requestedMatchId || requestedMatchId < 0) {
    console.warn('Bad Request: Invalid parameters')
    response.statusCode = 400;
    return response.send('Bad Request');
  }

  console.log('Received a data request for match %s', requestedMatchId);

  /**
   * Send back the match data as follows:
   * Match 7 has no changes
   * Match 8 has new data
   * Match 9 has ended
   */

   var matchToReturn = {};
   matchToReturn.id = requestedMatchId;

   switch(requestedMatchId)
   {
   case '7':
   		matchToReturn.version = 5000000000000;
   		matchToReturn.refereeName = 'Deniz';
   		matchToReturn.terminated = false;
   		break;
   case '8':
   		var d = new Date();
		  var n = d.getTime();
   		matchToReturn.version = n;
   		matchToReturn.refereeName = 'Engin';  
   		matchToReturn.terminated = false;
   		break;
   case '9':
   		matchToReturn.version = 9000000000000;
   		matchToReturn.refereeName = 'Jon'; 
   		matchToReturn.terminated = true; 
   		break;
   default:
		matchToReturn.id = null;
		response.statusCode = 501;
    	return response.send('Not implemented');  
   }

   return response.send(JSON.stringify(matchToReturn));
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
