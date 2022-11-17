import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import CountriesList from './pages/CountriesList';
import CountryDetails from './pages/CountryDetails';
import {useState, useEffect} from "react"
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([])
  const [fetching, setFetching] = useState(true)

    const getFromApi = async() =>{
        try {
      const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries`);
      setCountries(response.data);
      setFetching(false);
        } catch (error) {
      console.log(error);
        }
    };

    useEffect(() => {getFromApi()}, [])
    console.log(countries)

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element={fetching? <h1>Chill a bit, loading..</h1>: <CountriesList countries={countries}/>} />
      <Route path="/country/:id" element={fetching? <h1>Chill a bit, loading..</h1>: <CountryDetails countries={countries}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
