import React from 'react';

const Cats = (props) => {

    const {cats} = props.cats

    let catList = "There are no cats yet, where did they disappear again!?"
    if (cats) {
        catList = cats.map((cat,index)=>{
            return(
                <li key={index}>
                    <div className="cat-items">
                        <div className={String(cat.available)}></div>
                        <div className="name">{cat.name}</div>
                        <div className="breed">{cat.breed}</div>
                        <div className="dist">{Math.floor(cat.dis * 10000)} km</div>                        
                    </div>
                </li>
            )
        })
    }

    
    return ( 
        <div className="Cats">
            <div className="cats-list">
                <ul>
                    {catList}
                </ul>
            </div>
        </div>
     );
}
 
export default Cats;