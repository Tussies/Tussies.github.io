import React from 'react';
import "../style.css";

const Navbar = () => {

  return (
    <div className="navbar">
        <span className="logo"> </span>
        <div className='toggleButton'>
            <i class="fa-solid fa-bars"></i>
        </div>
        <div className="links"> 
            <a href="/"> Home </a>
            <a href="/Contact"> Contact </a>
        </div>
    </div>
  )
}

export default Navbar;

// function Navbar() {
//     const [expandNavBar, setExpandNavBar] = useState(false);

//   return (
//     <div className="navbar" id={expandNavBar ? "open" : "close"}>
//         <div className='toggleButton'>
//             <button onClick={() => {
//                 setExpandNavBar((prev) => !prev);
//                 }}
//             >
//             <i class="fa-solid fa-bars"></i>
//             </button>
//         </div>
//         <div className="links"> 
//             <a href="/"> Home </a>
//             <a href="/Contact"> Contact </a>
//         </div>
//     </div>
//   )
// }

// export default Navbar