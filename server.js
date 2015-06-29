var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var url = 'mongodb://localhost/contatooh';
    if( process.env.OPENSHIFT_MONGODB_DB_PASSWORD ){
        url =   "mongodb://" +
                process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
                process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
                process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
                process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
                process.env.OPENSHIFT_APP_NAME;
    }

var http = require('http');
var app  = require('./config/express')();
require('./config/passport')();
require('./config/database.js')(url);

http.createServer(app).listen(port,server_ip_address, function(){
  console.log('Express Server escutando na porta ' + 
              port);
});
