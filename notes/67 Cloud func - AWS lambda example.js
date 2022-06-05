/* we're going to set things up so that when the user submits this form, we programmed the Web browser to send a request to this Netlify function URL ENDPOINT, but also send along with it whatever value the user typed into this field.*/

/* first learn how to make our cloud function work with any incoming data. */
/* when it comes to experimenting with sending requests to different URLs and sending along different
data with those requests, there's no better tool than Postman.
 */

/* let's learn how to send a different response, depending on what password value the user sends along.
 */

/* the event parameter contains information about the incoming request (in JSON FORMATT !!!) so we can use this parameter to extract the data that the user sent along.*/
/* In other words, event dot body is going to be the literal text characters that the visitor sent along
with  curly brackets and the quotations and the semicolon, we don't want that.. */

/* 
so event = REQ from client =

{
  'password': '123abc';
} 

body in this case = 'password': '123abc' (STRINGS) to convert
*/

/* Instead of JSON notation , We want to understand it as if it's actual JavaScript, not just a literal string of text. */

export function handler(event, context, callback) {
  /*   You don't have to have your server send back HTML, you could just send back raw data or JSON data and
then have the front end or the Web browser parse that JSON data to create its own HTML.!!!!!!!!!!!!
*/
  // CONST - ponieważ nie planujemy żeby jakaś funkcja to zmieniała
  const secretContent = `
<h3>Welcome to The Secret Area</h3>
<p>Here we can tell you that the sky is <strong>blue</strong> an two plus two equals four</p>
`;

  // deklarujemy tutaj żeby zmienna była dostępna w scopie funkcji handler. Dajemy LET ponieważ wartość będzie zmieniana przez inne funkcje w scope function handler
  let body;

  if (event.body) {
    body = JSON.parse(event.body);
    // zamień {'password': 'data'} ---> ---> {password: data}
    // We give it a string of text and it's going to pass it or convert it into actual JavaScript,
  } else {
    // Otherwise, if there is no incoming body data on the request, let's just set body to equal an empty OBJECT
    body = {};
  }

  if (body.password == 'secret') {
    callback(null, {
      statusCode: 200,
      // body: 'Welcome to the super secret area',
      body: secretContent,
    });
  } else {
    callback(null, {
      statusCode: 401,
    });
  }
}
