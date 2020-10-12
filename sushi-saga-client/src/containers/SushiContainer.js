import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        { props.currentSushi.map(sushiObj => <Sushi key={sushiObj.id}sushi={sushiObj} />)}
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer