/*
Copyright © 2015-2016 ADP, LLC.

Licensed under the Apache License, Version 2.0 (the “License”);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an “AS IS” BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.  See the License for the specific language
governing permissions and limitations under the License.
*/

'use strict';

var oauthCodeMap = {
	invalid_request: 'The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed.',
	unauthorized_client: 'The client is not authorized to request an authorization code using this method.',
	access_denied: 'The resource owner or authorization server denied the request',
	unsupported_response_type: 'The authorization server does not support obtaining an authorization code using this method.',
	invalid_scope: 'The requested scope is invalid, unknown, or malformed.',
	server_error: 'The authorization server encountered an unexpected condition that prevented it from fulfilling the request. (This error code is needed because a 500 Internal Server Error HTTP status code cannot be returned to the client via a HTTP redirect.)',
	temporarily_unavailable: 'The authorization server is currently unable to handle the request due to a temporary overloading or maintenance of the server.  (This error code is needed because a 503 Service Unavailable HTTP status code cannot be returned to the client via a HTTP redirect.)'
};

module.exports = function oauthCode(err) {
	return oauthCodeMap[err.error];
};
