/* Don't worry, it's not like including react both here and in the main file is going to bloat the bundle. 
Web pack is super efficient and it just points towards the same instance.*/

import React from 'react';

function MyAmazingComponent() {
  return (
    <div>
      <h1 className="section-title section-title--blue">This is My Amazing React Component !!!</h1>
      <p>React is great, the sky is blue , grass is green.</p>
    </div>
  );
}

export default MyAmazingComponent;
