const heading = React.createElement
('h1', 
{id: 'heading'}, 
'Hello, World! From React'
);
root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);