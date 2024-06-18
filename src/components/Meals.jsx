"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Meals = () => {
    const [search, setSearch] = useState("a");
    const [error, setError] = useState(" ");
    const [meals, setMeals] = useState([]);

    const loadData = async () => {
        try {
            const res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${search}`);
            const data = await res.json();
            console.log(data.meals);
            setMeals(data.meals);
            setError("")
        } catch (error) {
            setError('no data found')
        }
    }
    const handler = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    useEffect(() => {
        loadData();
    }, [search]);
    return (
        <div>
            <div className='mt-10'>
                <input
                    onChange={handler}
                    className='bg-gray-200 border-2 p-2' type="text" placeholder='' />
                <button onClick={() => loadData()}
                    className='p-2 bg-black text-white'>search</button>
                <div className='mt-12 grid grid-cols-3 gap-12'>
                    {
                        meals?.length > 0 && !error && meals?.map((meal) => (
                            <div key={meal?.idMeal} className='border-2 p-4'>
                                <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={500} height={500}></Image>
                                <h6>{meal.strMeal}</h6>
                                <h6>{meal.strMeal}</h6>
                                <p>{meal.strInstructions}</p>
                            </div>
                        ))
                    }
                    {
                        error && <h6>No Data Found</h6>
                    }
                </div>
            </div>

        </div>
    )
}

export default Meals
