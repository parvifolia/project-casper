import React, {useState} from 'react';

const Search = (props) => {

    const [latitude,setLat] = useState({lat:""})
    const [longitude,setLng] = useState({lng:""})

    const submitHandler = e=>{
        e.preventDefault();
        fetch('http://localhost:4000/api/cats?lat='+latitude.lat+"&lng="+longitude.lng)
        .then(data=>data.json())
        .then(json=>props.dataBring(json))
    }

    const cityHandler= e=>{
        e.preventDefault();

        // update State with city input
        switch (e.target.value) {
            case "moda":
                setLat({lat:29.02})
                setLng({lng:40.98})
                break;
            case "macka":
                setLat({lat:28.99})
                setLng({lng:41.04})
                break;
            case "emirgan":
                setLat({lat:29.05})
                setLng({lng:41.10})
                break;
            case "bebek":
                setLat({lat:29.04})
                setLng({lng:41.07})
                break;
            default:
                break;
        }
    }

    // update State with latitude&longitude input
    const latHandler = e=>{
        setLat({lat:e.target.value})
    }
    const lngHandler = e=>{
        setLng({lng:e.target.value})
    }

    const formToggler = e=>{

        if (e.target.classList.contains('city-active')) {
            e.target.innerHTML = "Take me back to the cities";
            e.target.previousSibling.style.display="flex";
            e.target.previousSibling.previousSibling.style.display="none";
            e.target.classList.remove('city-active');
        } else {
            e.target.innerHTML = "Let me enter longitude & latitude";
            e.target.previousSibling.style.display="none";
            e.target.previousSibling.previousSibling.style.display="flex";
            e.target.classList.add('city-active');
        }

    }


    return ( 
        <div className='Search'>
            <div className="form-wrapper">
                <form className='city' onSubmit={submitHandler} method='GET'>
                    <select defaultValue='none' onChange={cityHandler}>
                        <option value="" >Select a city</option>
                        <option value="moda">Moda Sahil</option>
                        <option value="macka">Maçka Parkı</option>
                        <option value="emirgan">Emirgan Korusu</option>
                        <option value="bebek">Bebek Sahil</option>
                    </select>
                    <input type="submit" value="O" className="submit-button"/>
                </form>

                <form className='long-lat' onSubmit={submitHandler} method='GET'>
                    <input type="text" name="lat" value={latitude.lat} onChange={latHandler} placeholder='Latitude'/>
                    <input type="text" name="lng" value={longitude.lng} onChange={lngHandler} placeholder='Longitude'/>
                    <input type="submit" value="O" className="submit-button"/>
                </form>

                <div onClick={formToggler} className="form-toggler city-active">
                    Let me enter longitude & latitude
                </div>

            </div>
        </div>
    );
}
 
export default Search;