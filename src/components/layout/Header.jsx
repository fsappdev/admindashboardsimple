import userPic from "../../assets/jake-nackos-IF9TK5Uy-KI-unsplash.jpg"

const Header = () => {
   return (
      <header className="header">
         <div className="logo">
         <a href="#">EasyPay</a>
         <div className="search_box">
            <input type="text" placeholder="Search EasyPay"/>
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
         </div>
         </div>

         <div className="header-icons">
         <i className="fas fa-bell"></i>
         <div className="account">
            <img src={userPic} alt=""/>
            <h4>Random User</h4>
         </div>
         </div>
      </header>
   )
}

export default Header