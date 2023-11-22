import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotePage from './Pages/Note/NotePage';
import NavBar from './Components/NavBar';
import Creationpage from './Pages/Creation/CreationPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MonEspacePage from './Pages/User/MonEspacePage';
import InscriptionPage from './Pages/User/InscriptionPage';
import ConnexionPage from './Pages/User/ConnexionPage';
import NotePageById from './Pages/Note/NotePageById';
import CategoriePage from './Pages/Categorie/CategoriePage2';
import DatePage from './Pages/date/DatePages'
import Globalcontext from './context/GlobalContext';
import { useState } from 'react';


function App() {
  const [userId, setUserId] = useState(1);
  return <>
  <Globalcontext.Provider value={{userId, setUserId}}>
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path={'/'}  element={<NotePage/>}/>
      <Route path={'/note/:id'}  element={<NotePageById/>}/>
      <Route path={'/Creation'}  element={<Creationpage/>}/>
      <Route path={'/MonCompte'}  element={<MonEspacePage/>}/>
      <Route path={'/Inscription'}  element={<InscriptionPage/>}/>
      <Route path={'/Connexion'}  element={<ConnexionPage/>}/>
      <Route path={'/categorie/:id'} element={<CategoriePage/>}/>
     <Route path={'/date/:id'}  element={<DatePage/>}/>
     
    </Routes>
  </BrowserRouter>
  </Globalcontext.Provider>
  <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    />
  </>;
}

export default App;
