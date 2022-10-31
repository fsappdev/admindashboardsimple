import {useContext} from 'react'
import {UserContext, SetUserContext} from '../App'

const MainPageDos = () => {

   const estadoInicial = useContext(UserContext)
   const setearUsario = useContext(SetUserContext)
   console.log("ESTADO INICIAL DESDE APP", estadoInicial)

   //funcion que cambia el nombre del usuario
   const setNuevoUsuario = () => setearUsario({usuario: "TERMINATOR🤖"})

   return (
      <>
         <div className="main-body">
            <h2>Main-Page-Dos</h2>
            <div className="promo_card">
            <h1>EasyPay - Pag 2 </h1>
            <span>usuario conectado es: {estadoInicial.usuario}</span>
            <button onClick={setNuevoUsuario}>CAMBIAR USUARIO</button>
            </div>

            <div className="history_lists">
               <div className="list1">
               <div className="row">
                     <h4>History</h4>
                     <a href="#">See all</a>
               </div>
               <table>
                     <thead>
                     <tr>
                        <th>#</th>
                        <th>Dates</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Ammount</th>
                     </tr>
                     </thead>
                     <tbody>
                     <tr>
                        <td>1</td>
                        <td>2, Aug, 2022</td>
                        <td>Sam Tonny</td>
                        <td>Premimum</td>
                        <td>$2000.00</td>
                     </tr>
                     <tr>
                        <td>2</td>
                        <td>29, July, 2022</td>
                        
                        <td>Code Info</td>
                        <td>Silver</td>
                        <td>$5,000.00</td>
                     </tr>
                     <tr>
                        <td>3</td>
                        <td>15, July, 2022</td>
                     
                        <td>Jhon David</td>
                        <td>Startup</td>
                        <td>$3000.00</td>
                     </tr>
                     <tr>
                        <td>4</td>
                        <td>5, July, 2022</td>
                        <td>Salina Gomiz</td>
                        <td>Premimum</td>
                        <td>$7000.00</td>
                     </tr>
                     <tr>
                        <td>5</td>
                        <td>29, June, 2022</td>
                        <td>Gomiz</td>
                        <td>Gold</td>
                        <td>$4000.00</td>
                     </tr>
                     <tr>
                        <td>6</td>
                        <td>28, June, 2022</td>
                        <td>Elyana Jhon</td>
                        <td>Premimum</td>
                        <td>$2000.00</td>
                     </tr>
                     </tbody>
               </table>
               </div>

               <div className="list2">
               <div className="row">
                     <h4>Documnets</h4>
                     <a href="#">Upload</a>
               </div>
               <table>
                     <thead>
                     <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Uplaoded</th>
                     </tr>
                     </thead>
                     <tbody>
                     <tr>
                        <td>1</td>
                        <td>CNIC</td>
                        <td>PDF</td>
                        <td>20</td>
                     </tr>
                     <tr>
                        <td>2</td>
                        <td>Passport</td>
                        <td>PDF</td>
                        <td>12</td>
                     </tr>
                     <tr>
                        <td>3</td>
                        <td>Licence</td>
                        <td>PDF</td>
                        <td>9</td>
                     </tr>
                     <tr>
                        <td>4</td>
                        <td>Pic</td>
                        <td>Jpg</td>
                        <td>22</td>
                     </tr> 
                     <tr>
                        <td>5</td>
                        <td>CNIC</td>
                        <td>Jpg</td>
                        <td>22</td>
                     </tr> 
                     <tr>
                        <td>6</td>
                        <td>Docx</td>
                        <td>Word</td>
                        <td>22</td>
                     </tr> 
                     </tbody>
               </table>
               </div>
            </div>
         </div>
      </>
   )
}

export default MainPageDos