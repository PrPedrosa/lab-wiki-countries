
import {useParams, Link} from "react-router-dom"

function CountryDetails({countries}) {
    const {id} = useParams()
    const [country] = countries.filter(el => el.alpha3Code === id);
    /* console.log(countries) */

    const styles = {
        width: "30%",
    }

    

  return (

    <div className='container'>
    <div className='row'>
    <div className="col-9">
            <h1>{country.name.official} <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country" /></h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={styles}>Capital</td>
                  <td>{country.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {country.borders.map((border, i) => <li><Link to={`/country/${border}`}>{border}</Link></li>)}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <Link to="/">Go to Countries List</Link>
          </div>
          </div>
    
          </div>
  )
}

export default CountryDetails