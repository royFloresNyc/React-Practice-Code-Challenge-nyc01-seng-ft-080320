import React, { Fragment } from 'react'
import AddMoney from '../components/AddMoney'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.money} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(props.eatenSushi)}
        </div>
      </div>
      <div className="money-form">
            <AddMoney moneyFormVal={props.moneyFormVal} 
                formChangeHandler={props.formChangeHandler}
                addMoney={props.addMoney}
            /> 
      </div>
      
    </Fragment>
  )
}

export default Table