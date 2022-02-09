import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ( { defaultCategories = [] }) => {

    //const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr />



            <ol>
                {
                    categories.map(category => {
                        return <GifGrid 
                            key={category}
                            category={category}
                        />
                    })
                }
            </ol>

        </>)
}