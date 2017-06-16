import React, { Component } from 'react';
import Header               from './components/Header';
import sampleFishes         from './sample-fishes';
import Fish                 from './components/Fish';
import Inventory            from './components/Inventory';

class App extends Component {
    constructor () {
        super()
        this.state = {
            fishes: sampleFishes
        }
        this.addFish = this.addFish.bind(this);
        this.updateFish = this.updateFish.bind(this);
    }

    addFish(fish) {
        // update our state
        const fishes = {...this.state.fishes};
        // add in our new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        // set state
        this.setState({ fishes });
    }

    updateFish = (key, updatedFish) => {
        const fishes = {...this.state.fishes};
        fishes[key] = updatedFish;
        this.setState({ fishes });
    }

    removeFish = (key) => {
        const fishes = {...this.state.fishes};
        //fishes[key] = null;
        delete fishes[key];
        this.setState({ fishes });
    }

    addToOrder(){
        console.log('order')
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="list-of-fishes">
                        { Object
                            .keys(this.state.fishes)
                            .map(key => <Fish key={key} index={key} details={this.state.fishes[key]}
                                              addToOrder={this.addToOrder}/>)
                        }
                    </ul>
                </div>
                <Inventory fishes={this.state.fishes}
                           addFish={this.addFish}
                           updateFish={this.updateFish}
                           removeFish={this.removeFish} />
            </div>
        );
    }
}

export default App;
