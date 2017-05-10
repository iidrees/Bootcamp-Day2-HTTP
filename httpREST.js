function gitUser(username){// 
	const https = require('https'); //require the https module in order to make an encrypted request to the server


	let options = {//Declare and create the object that will be used for the request
		host: 'api.github.com', // the URL
		path: '/users/' + username, //The resource being searched for 
		method: 'GET', // The http method being made
		headers: { 'user-agent': 'node.js'} // The header sent to notify the server the app that is consuming the api
	};

	https.get(options, function(res) {//A GET function that takes two args (the option obj and a callback function.) the callback function waits for a response from the request made and then passes it to the 'data' variable

		res.on('data', function(data) {//When a response is received by 'data', the callback function runs the code in the code block

			let resData = data.toString() // we get the 'data' response, change it to a string and then assign it to a getContent variable

			console.log(resData); //We log to the console the response
		});
	}).on('error', function(error) {//check for error and if there is, call the callback function and then log the err to the console.
		console.log('There is an error: ' + error.message);
	});

}
gitUser('iidrees');//we call the function passing in a username