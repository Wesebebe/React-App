// import React from 'react';
// import { Button } from 'react-bootstrap';

// function MyButton() {
//   return (
//     <Button onClick={() => alert('You clicked this button')}>
//       Click me
//     </Button>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <MyButton />
//     </div>
//   );
// }

// export default App;




import React from 'react';
// import { Button } from 'bootstrap';
import Books from './Books';



const App = () => {
  return (
    <div>
     {/* <MyImage />
     <MyButton /> */}
     <h1>How much did you love these books?</h1>
     <Books />
    </div>
  );
};

// function MyImage() {
//   return (
//     <div>
//       <img src="https://images.unsplash.com/photo-1680371130801-3701acb35d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="nature" />
      
//       <p>"What is the good of your stars and trees, your sunrise and the wind, if they do not enter into our daily lives?" E.M. Forster</p>
//     </div>
//   );
// }


// function MyButton() {
//   return (
//     <div>
//       <button onClick={() => alert('You clicked this button')}>Click me </button>
//     </div>
//   );
// }


export default App
