import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
    state = {
        sushiList: [],
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
  
    render() {
        return (
        <div className="app">
            <SushiContainer currentSushi={this.sendOutSushi()} moreSushi={this.moreSushi}/>
            <Table />
        </div>
        );
    }
}

export default App;