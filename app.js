var restify = require('restify');
var builder = require('botbuilder');

// Create bot and add dialogs
var connector = new builder.ChatConnector({
    appId: "d7c8691e-8fe3-487f-a810-3d7f5782b488",
    appPassword: "byd1Akv2KPPNfSdZKajsPen"
});
var bot = new builder.UniversalBot(connector);  
bot.dialog('/', function (session) {
    session.send(JSON.stringify(session.message.address));
});

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', connector.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url); 
});