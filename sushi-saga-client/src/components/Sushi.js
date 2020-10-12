import React, { Fragment } from 'react'

class Sushi extends React.Component {
    state = {
        hasBeenEaten: false
    }
    clickHandler = () => {
        this.setState({hasBeenEaten: true})
        this.props.eatSushi(this.props.sushi)
    }
    render(){
        return (
            <div className="sushi">
            <div className="plate" 
                onClick={this.clickHandler}>
                { this.state.hasBeenEaten ? null : <img src={this.props.sushi.img_url } width="100%" />}
            </div>
            <h4 className="sushi-details">
                {this.props.sushi.name} - ${this.props.sushi.price}
            </h4>
            </div>
        )
    }
}

export default Sushi