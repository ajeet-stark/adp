'use strict';

process.env.NODE_DEBUG = 'adp-connection';

var debug = require('./lib/debug');
var adpConnection = require('./index');
var adpCore = require('./index_core');

var connectionOpts = {
	clientId: '88a73992-07f2-4714-ab4b-de782acd9c4d',
	clientSecret: 'a130adb7-aa51-49ac-9d02-0d4036b63541',
	granttype: 'client_credentials',
	sslCertPath: 'iatCerts/apiclient_iat.pem',
	sslKeyPath: 'iatCerts/apiclient_iat.key',
	apiUrl: 'https://iat-api.adp.com',
	tokenUrl: 'https://iat-api.adp.com/auth/oauth/v2/token',
	authorizationUrl: 'https://iat-accounts.adp.com/auth/oauth/v2/authorize'
};

var conn = adpConnection.createConnection(connectionOpts);
function connectionComplete(err) {
	if(err) {
		debug('Not Connected');
	}else{
		debug('Connected with token: ' + conn.accessToken);
	}
}
conn.connect(connectionComplete);
const app = adpCore.consumerApplicationInstance(conn, './config.zip');

const methodName = 'hr.v2.worker.associateoid';
const execOpts = {
    associateoid: '0000000000000000'
};
const handleResponse = (err, payload) => {
    // business logic.
};
//here read data is failing as its unable to find appConfig.json
app.getData(methodName, execOpts, handleResponse);
