
const Sidebar = () => {
   return (
      <div className="sidebar">
         <h4>Account Balance</h4>
         
         <div className="balance">
               <i className="fas fa-dollar icon"></i>
               <div className="info">
               <h5>Dollar</h5>
               <span><i className="fas fa-dollar"></i>25,000.00</span>
               </div>
         </div>
      
         <div className="balance">
               <i className="fa-solid fa-rupee-sign icon"></i>
               <div className="info">
               <h5>PKR</h5>
               <span><i className="fa-solid fa-rupee-sign"></i>300,000.00</span>
               </div>
         </div>

         <div className="balance">
               <i className="fas fa-euro icon"></i>
               <div className="info">
               <h5>Euro</h5>
               <span><i className="fas fa-euro"></i>25,000.00</span>
               </div>
         </div>

         <div className="balance">
               <i className="fa-solid fa-indian-rupee-sign icon"></i>
               <div className="info">
               <h5>INR</h5>
               <span><i className="fa-solid fa-indian-rupee-sign"></i>220,000.00</span>
               </div>
         </div>

         <div className="balance">
               <i className="fa-solid fa-sterling-sign icon"></i>
               <div className="info">
               <h5>Pound</h5>
               <span><i className="fa-solid fa-sterling-sign"></i>30,000.00</span>
               </div>
         </div>

      </div>
   )
}

export default Sidebar