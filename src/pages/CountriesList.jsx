import { Link } from 'react-router-dom';


function CountriesList({countries}) {
  const styles = {
    maxHeight: "90vh",
    overflow: "scroll"
  }
  
  return (
    <div className='container'>
    <div className='row'>
    <div className="col-7" style={styles}>
      <div className="list-group">
        {countries.map(country => {
            return <div  key={country.alpha3Code} className="list-group-item list-group-item-action">
            <Link to={`country/${country.alpha3Code}`}>{country.name.common} <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country" /></Link>
            </div>
        })}
      </div>
    </div>
    </div>
    </div>
  )
}

export default CountriesList