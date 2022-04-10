
export const RenderCountries = ({data}) => {
    return data.map((country) => {
      return (

      <div className="card wraper-card">
  <img src={country.flags.svg} className="card-img-top img-wrapper" alt={country.name.official}/>
  <div className="card-body">
    <h5 className="card-title d-flex justify-content-center">{country.name.common}</h5>
    <p className="card-text d-flex justify-content-center">population:{country.population}</p>
    <p className="card-text d-flex justify-content-center">area:{country.area}</p>
    <p className="card-text d-flex justify-content-center">capital cyti:{country.capital}</p>
   
    <a 
              href={country.maps.googleMaps}
              className="btn btn-primary d-flex justify-content-center"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
  </div>
</div>

      )
    })
  }