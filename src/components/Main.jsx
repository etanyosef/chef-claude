import React from "react";

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map((ingredient) => {
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    })

    function addIngredient(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get('ingredient');
        // ingredients.push(newIngredient)

        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const [isImportant, setIsImportant] = React.useState('Yes')
    function handleClick() {
        setIsImportant('Definitely')
    }

    const [count, setCount] = React.useState(0);
    function addHandler() {
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
    }
    function minusHandler() {
        setCount(prevCount => prevCount - 1)
    }

    const [isGoingOut, setGoingOut] = React.useState(true)
    function goingOutHandler() {
        setGoingOut(prevState => !prevState);
    }
    
    const [myFavoriteThings, setMyFavoriteThings] = React.useState([])
    const allFavoriteThings = ['Bike', 'Money', 'Computer', 'Phone']
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)
    function addFavoriteThing() {
        setMyFavoriteThings(
            prevFavoriteThings => [
                ...prevFavoriteThings, 
                allFavoriteThings[prevFavoriteThings.length]
            ]
        )
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={addIngredient}>
                <input 
                    type="text" 
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
            <button className="value" onClick={handleClick}>{isImportant}</button>

            <div className="counter">
                <h1>Counter</h1>
                <h2 className="count">{count}</h2>
                <button className="minus" onClick={minusHandler}>-</button>
                <button className="plus" onClick={addHandler}>+</button>
            </div>

            <div>
                <h2>Do i feel like going out tonight?</h2>
                <button onClick={goingOutHandler}>{isGoingOut ? 'Yes' : 'No'}</button>
            </div>

            <div>
                <h2>Favorite Things</h2>
                <button onClick={addFavoriteThing}>Add item</button>
                <section>
                    {thingsElements}
                </section>
            </div>
        </main>
    )
}