import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
    state = {
        sushiList: [],
        eatenSushi: [],
        head: 0,
        tail: 3,
    }

    componentDidMount() {
        fetch(API).then(resp => resp.json())
            .then(sushiApi => this.setState({sushiList: sushiApi}))
    }

    moreSushi = () => {
        this.setState(prevState => {
            return {
                head: prevState.tail + 1,
                tail: prevState.tail + 4
            }
        })
    }

    sendOutSushi = () => {
        return this.state.sushiList.slice(this.state.head, this.state.tail + 1)
    }

    eatSushi = (sushiObj) => {
        this.setState(prevState => {
            return {
                eatenSushi: [...prevState.eatenSushi, sushiObj]
            }
        })
    }
  
    render() {
        console.log('Eaten Sushi: ', this.state.eatenSushi)
        return (
        <div className="app">
            <SushiContainer currentSushi={this.sendOutSushi()} moreSushi={this.moreSushi} eatSushi={this.eatSushi}/>
            <Table eatenSushi={this.state.eatenSushi}/>
        </div>
        );
    }
}

export default App;