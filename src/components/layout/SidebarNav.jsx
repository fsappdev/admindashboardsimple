import { Link } from 'react-router-dom'
const SidebarNav = () => {
   return (
      <nav>
         <div className="side_navbar">
               <span>Menú Principal</span>
              {/*  <a href="#" className="active">Inicio</a> */}
               <Link to="/">Página Uno</Link>
               {/* <a href="#">Profile</a> */}
               <Link to="/maindos">Página Dos</Link>
               {/* <a href="#">History</a> */}
               <Link to="/maintres">Página Tres</Link>
               
               <a href="#">Application</a>
               <a href="#">My Account</a>
               <a href="#">Documnets</a>
               <div className="links">
               <span>Quick Link</span>
               <a href="#">Paypal</a>
               <a href="#">EasyPay</a>
               <a href="#">SadaPay</a>
               </div>
         </div>
      </nav>
   )
}

export default SidebarNav