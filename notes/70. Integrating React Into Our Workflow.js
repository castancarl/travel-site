/* This lesson is just about integrating react into a typical workflow that already exists. */

//IF from scratch ---> ---> package called Create React app.

/* now to actually output a react powered component onto our website, we need to add an empty div to index.html*/

// React Related Code Goes Here
import React from 'react';
import ReactDOM from 'react-dom';

// THIS IS SOMETHING CALLED JSX SYNTAX IT LOOKS LIKE HTML BUT IT ISN'T HTML!!!!
// TIP 1:  IT IS STILL JAVASCRIPT so example  you can't use the word CLASS becouse is reserved in JS for blueprints instead use className=""
// TIP 2: you can only have one root or top level element It doesn't need to be a div.
// You could use something called a react fragment.

function MyAmazingComponent() {
  return (
    <div>
      <h1 className="section-title section-title--blue">This is My Amazing React Component</h1>
      <p>React is great, the sky is blue , grass is green.</p>
    </div>
  );
}
/* Well, even though Web browsers would not be able to understand JSX, we can just download a BABEL tool that is specifically designed for react and the JSXsyntax. */

/* Then whenever Web pack bundles up our code, it will convert this into something that does make sense to JavaScript interpreters and Web browsers in general.*/

ReactDOM.render(<MyAmazingComponent />, document.querySelector('#my-react-example'));
// The first argument is a component  in react that you want to render TO the page element (second argument)
// In REACT Everything really boils down to the idea of components.
// For now you can just think of a component as a reusable feature.

// <MyAmazingComponent /> this almost looks like an HTML tag.
/* So instead of a heading level three tag or a paragraph tag, we can create a component with its own custom name and custom features, custom behavior */

/* WHAT NEXT IN REACT --> PROPS --> HOOKS/USE STATE HOOK  Once the idea of props makes sense, then I would encourage you to research Hooke's and specifically */
