var express = require('express');
var app = express();
var bigMatchData = require('./match.json');
var log = require('npmlog');

app.use(express.logger());

  app.get('/?*', function(request, response) {
  var requestedResourceId = request.params[0];

  if(!requestedResourceId || requestedResourceId < 0) {
    log.warn('Bad Request: Invalid parameters')
    response.statusCode = 400;
    return response.send('Bad Request');
  }

  // log.http('Received a data request for resource', requestedResourceId);

  /**
   * Send back the resource data as follows:
   * Resource 7's max age is a point in time where we'll all be dead
   * Resource 8 has always new data
   * Resource 9 should not be monitored after one fetch
   * Resource 10 has always new data
   */
   var resourceToReturn = {};

   switch(requestedResourceId)
   {
    case 'matchesfeed/1/matchcentre':
      var body = bigMatchData;

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=1');

      return response.send(body);
    case 'matchesfeed/2/matchcentre':
      var body = bigMatchData;

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=2');

      return response.send(body);
    case 'matchesfeed/3/matchcentre':
      var body = bigMatchData;

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=3');

      return response.send(body);
    case 'matchesfeed/4/matchcentre':
      var body = bigMatchData;

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=4');

      return response.send(body);
    case 'matchesfeed/5/matchcentre':
      var body = bigMatchData;

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=5');

      return response.send(body);
    case 'matchesfeed/6/matchcentre':
      var body = bigMatchData;

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=4');

      return response.send(body);
   case 'matchesfeed/7/matchcentre':
   		resourceToReturn.refereeName = 'Deniz';
   		
      var body = JSON.stringify(resourceToReturn);
      response.writeHead(200, {
        'Content-Length': body.length,
        'Content-Type': 'text/plain',
        'Last-Modified': new Date(),
        'Cache-Control': 'max-age=' + Math.pow(2,51)
      }); 

      return response.send(body);
   case 'matchesfeed/8/matchcentre':
   		resourceToReturn.refereeName = 'Engin';  
      resourceToReturn.weather = 'Sunny';

      var body = JSON.stringify(resourceToReturn);

      response.writeHead(200, {
        'Content-Length': body.length,
        'Content-Type': 'text/plain',
        'Last-Modified': new Date(),
        'Cache-Control': 'max-age=3'
      }); 

   		return response.send(body);
   case 'matchesfeed/9/matchcentre':
   		resourceToReturn.refereeName = 'Jon'; 
   		
      var body = JSON.stringify(resourceToReturn);
      response.writeHead(200, {
        'Content-Length': body.length,
        'Content-Type': 'text/plain',
        'Last-Modified': new Date(),
        'Cache-Control': 'max-age=-1'
      }); 

      return response.send(body);
   case 'matchesfeed/10/matchcentre':
      resourceToReturn.refereeName = 'Jack';  
      
      var body = JSON.stringify(resourceToReturn);
      response.writeHead(200, {
        'Content-Length': body.length,
        'Content-Type': 'text/plain',
        'Last-Modified': new Date(),
        'Cache-Control': 'max-age=2'
      }); 

      return response.send(body);
    case 'matchesfeed/11/matchcentre':
      resourceToReturn.refereeName = 'Engin';  
      resourceToReturn.weather = 'Sunny';

      var body = JSON.stringify(resourceToReturn);

      response.writeHead(200, {
        'Content-Length': body.length,
        'Content-Type': 'text/plain',
        'Last-Modified': new Date(),
        'Cache-Control': 'max-age=1'
      }); 

      return response.send(body);
    case 'matchesfeed/12/matchcentre':
      var body = '{ some : corrupt = json / data .. ';

      response.writeHead(200, {
        'Content-Length': body.length,
        'Content-Type': 'text/plain',
        'Last-Modified': new Date(),
        'Cache-Control': 'max-age=1'
      }); 

      return response.send(body);
   default:
  		resourceToReturn.id = null;
  		response.statusCode = 501;

      log.warn('Not implemented: ' + requestedResourceId);

    	return response.send('Not implemented');  
   }
});

app.get('/', function(req, res){
  var body = 'node-dataprovider';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  log.info('Server ' + process.pid + ' listening on ', port);
});
