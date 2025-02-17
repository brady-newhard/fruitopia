import React, { useState } from 'react'
import { show } from '../../../services/fruitService'

function FruitSearch() {
    const [fruit, setFruit] = useState('')
    const [fruitData, setFruitData] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!fruit.trim()) return 
            try {
                const data = await show(fruit)
                setFruitData(data)
            } catch (error) {
                console.error("Error fetching fruit: ", error)
        }
        setFruit('')
    }
    console.log(fruitData)
  return (
    <div>
        <section>
            <h2>Search for Fruits</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fruit">Enter Fruit:</label> 
            <input 
                type="text" 
                name="fruit" 
                id='fruit' 
                value={fruit}
                onChange={(e) => setFruit(e.target.value)}
                />
            <button type="submit">Search</button>
            </form>
        </section>  
    </div>
  )
}

export default FruitSearch