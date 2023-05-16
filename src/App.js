
import './App.css';
import MoreDetails from './Components/MoreDetails';
import UserListe from './Components/UserListe';
import { Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= { <UserListe/> }/>
        <Route path='/details/:id' element={<MoreDetails/>}/>
       </Routes>
  
    </div>
  );
}

export default App;
