var request = require('superagent')
var path = require('path')


function getFromServer (callback) {

	request
		.get('http://localhost:3000/word')
		.end(callback)
}

function postToServer (object, callback) {
	request
		.post('http://localhost:3000/word')
		.send(object)
		.end(callback)
}

module.exports = {
	"getFromServer": getFromServer,
	"postToServer": postToServer
}