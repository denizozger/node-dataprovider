var express = require('express');
var app = express();
var bigMatchData = require('./match.json');
var delta = require('./delta.json');
var log = require('npmlog');
var Chance = require('chance');
var chance = new Chance();

app.use(express.logger());

  app.get('/?*', function(request, response) {
  var requestedResourceId = request.params[0];

  if(!requestedResourceId || requestedResourceId < 0) {
    log.warn('Bad Request: Invalid parameters')
    response.statusCode = 400;
    return response.send('Bad Request');
  }

   var resourceToReturn = {};

   switch(requestedResourceId)
   {
    case 'test1':
      var body = chance.paragraph({sentences: 1})

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=1');

    return response.send(body);
    case 'test2':
      var body = chance.paragraph({sentences: 2})

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=2');

    return response.send(body);
    case 'test3':
      var body = chance.paragraph({sentences: 3})

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=3');

    return response.send(body);
    case 'matchesfeed/1/matchcentre':
      var body = delta;

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=1');

    return response.send(body);
    case 'matchesfeed/2/matchcentre':
      var body = delta;

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=1');

    return response.send(body);
    case 'matchesfeed/3/matchcentre':
      var body = delta;

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=1');

    return response.send(body);
    case 'matchesfeed/4/matchcentre':
      var body = delta;

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=1');

    return response.send(body);
    case 'matchesfeed/5/matchcentre':
      var body = delta;

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=1');

    return response.send(body);
    case 'matchesfeed/6/matchcentre':
      var body = delta;

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=1');

    return response.send(body);
    case 'matchesfeed/7/matchcentre':
   		var body = delta;

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=1');

    return response.send(body);
    case 'matchesfeed/8/matchcentre':
   		var body = delta;

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=1');

 		return response.send(body);
    case 'matchesfeed/9/matchcentre':
   		var body = delta;

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=1');

    return response.send(body);
    case 'matchesfeed/10/matchcentre':
      var body = delta;

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=1');

    return response.send(body);
    case 'matchesfeed/11/matchcentre':
      resourceToReturn.refereeName = 'Engin';  
      resourceToReturn.weather = 'Sunny';
      
      var body = JSON.stringify(resourceToReturn);

      response.setHeader('Content-Length', body.length);
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Last-Modified', new Date());
      response.setHeader('Cache-Control', 'max-age=1');

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
