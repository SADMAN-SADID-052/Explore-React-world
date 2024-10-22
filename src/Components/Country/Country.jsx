import './country.css'
const Country = ({country}) => {
    // console.log(country)

    const {name,flags,population,area} = country;
    return (
        <div className='country'>
           <h5>Name:{name.common}</h5>
           <img  src={flags.png} alt="" />

           <p>Population: {population}</p>
           <p>Area : {area}</p>
            
        </div>
    );
};

export default Country;