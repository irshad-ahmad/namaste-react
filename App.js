import React from 'react';
import ReactDOM from 'react-dom/client';

//React Component
const HeadingComponent = () => <h1 className='heading' tabIndex={0}>Namaste React Heading</h1>
 
//React Element
const title = <h6>Namaste ReactJS</h6>;
//React Component composition.
//we can put react element inside the component.
// we can put javascript expression inside the component.
const BodyComponent = () => (
  <div id="container">
    {1000+200}
    {title}
    <HeadingComponent />
    {HeadingComponent()}
    <HeadingComponent></HeadingComponent>
    <h2 className="body">Namaste React Body</h2>
  </div>
);

root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BodyComponent />);