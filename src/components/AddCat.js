import React,{useState} from 'react';
import { useHistory } from "react-router-dom";

const AddCat = () => {

    const history = useHistory();

    const [cat,setCat] = useState({
        name:"",
        breed:"",
        geometry:{coordinates:[0,0]}
    });

    const nameHandler = e=> setCat({...cat,name:e.target.value})
    const breedHandler = e=> setCat({...cat,breed:e.target.value})
    const latHandler = e=>{
        let b = {...cat};
        b.geometry.coordinates[0] = parseInt(e.target.value);
        setCat(b)
    }
    const lngHandler = e=>{
        let b = {...cat};
        b.geometry.coordinates[1] = parseInt(e.target.value);
        setCat(b)
    }
    const submitHandler = e=>{
        e.preventDefault();
        fetch("http://localhost:4000/api/cats",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cat)
        })
        .then(data=>{
            alert("Ekledik, harika!")
            history.push('/')
        })
        
    }

    return ( 
        <div className="AddCat">
            <div className="form-wrapper">
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">Cat name:</label>
                    <input type="text" name="name" maxLength="15" required onChange={nameHandler} />
                    <label htmlFor="breed">Cat breed:</label>
                    <input type="text" name="breed" maxLength="20" required onChange={breedHandler}/>
                    <div className="location">
                        <div className="latitude">
                            <label htmlFor="latitude">Latitude:</label>
                            <input type="text" name="latitude" maxLength="6" required onChange={latHandler}/>
                        </div>
                        <div className="longitude">
                            <label htmlFor="longitude">Longitude:</label>
                            <input type="text" name="longitude" maxLength="6" required onChange={lngHandler}/>
                        </div>
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddCat;