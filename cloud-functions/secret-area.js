export function handler(event, context, callback) {
  const secretContent = `
<h3>Welcome to The Secret Area</h3>
<p>Here we can tell you that the sky is <strong>blue</strong> an two plus two equals four</p>
`;

  callback(null, {
    statusCode: 200,
    body: secretContent,
  });
}
