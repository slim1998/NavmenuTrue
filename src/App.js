// import React from 'react';
// import Nav from './Componets/nav'
// import './App.css';

// // const Navmenu =[

// //   menu : "Scholes",
// //   menu : "hello",
// //   menu : "Scholes" 
// // ]






// function App() {
//   return (
//     <div className="App">
//      <Nav />
   
//     </div>
//   );
// }

// export default App;





import React from 'react';
import Nav from './Componets/nav.js';
import './App.css';


const Navmenu = [

  {menu : "Home"},
  {menu : "Services"},
  {menu : "Contacts" ,cla : 'drplist', drop : ["Marketing and PR" , "Customer, Success and sales" , "IT, Product, Design, UX and data", "Finance and administration", "HR and more"]},

]

function App() {


  return (
    <div className="App">
   <Nav property={Navmenu}/>
    </div>

  );
}

export default App;








