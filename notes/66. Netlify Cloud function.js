/* We're going to be able to add backend or server side functionality to our otherwise static or front */

/* The idea is that the logic that determines if this password is correct or incorrect, well, that logic needs to be executed on the back end or the server side */

/* only static website --> It's not like this is generated by P, P or Python Ruby. */

/* It's just an HTML file being served up by very basic servers. */

/* because whether it's GitHub pages or net Lafi servers, they aren't actually running any serverside or backend language. */

/* 
So the question becomes, how can we have the speed and security benefits of a static website while still being able to perform actual actions that require server side logic */

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: 'Welcome to the super secret area',
  });
};