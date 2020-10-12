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
        money: 100,
        moneyFormVal: ''
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
                money: prevState.money - sushiObj.price, 
                eatenSushi: [...prevState.eatenSushi, sushiObj]
            }
        })
    }

    formChangeHandler = (value) => {
        this.setState({moneyFormVal: Number(value)})
    }

    addMoney = () => {
        this.setState(prevState => {
            return {
                money: prevState.money + prevState.moneyFormVal,
                moneyFormVal: ''
            }
        })
    }
  
    render() {
        return (
        <div className="app">
            <SushiContainer currentSushi={this.sendOutSushi()} moreSushi={this.moreSushi} eatSushi={this.eatSushi}/>
            <Table eatenSushi={this.state.eatenSushi} 
                money={this.state.money} 
                moneyFormVal={this.state.moneyFormVal} 
                formChangeHandler={this.formChangeHandler}
                addMoney={this.addMoney}
            />
        </div>
        );
    }
}

export default App;