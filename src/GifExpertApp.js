import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
     //const categories = ["One Punch", 'Samurai', 'Dragon Ball'];
    const[categories, setCategories] = useState(["One Punch"]);
     //const handleAdd = () => {
        //setCategories( ["Hunter X", ...categories] );
    //   setCategories( cats => [ ...cats, 'HunterX']);
     //}
     return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map( category =>( 
                                <GifGrid 
                                Key={ category } 
                                category={ category } 
                                />
                    ))
                }
            </ol>
        </div>
    )
}


