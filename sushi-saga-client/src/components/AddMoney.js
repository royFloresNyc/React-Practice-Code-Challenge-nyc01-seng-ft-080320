import React from 'react'

const AddMoney = (props) => {
    const localChangeHandler = (e) =>{
        props.formChangeHandler(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.addMoney()
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Add Money to Wallet:</label> <br/>
            <input type="number" 
                placeholder={0}
                value={props.moneyFormVal} 
                onChange={localChangeHandler}>
            </input>
            <input type="submit"></input>
        </form>
    )
}

export default AddMoney