import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    constructor() {
        // cannot use this until you call super
        // react component needs to be initialised
        super();

        // bind addFish method to App
        this.addFish = this.addFish.bind(this);
        // getInitialState
        this.state = {
            fishes: {},
            order: {}
        };
    }

    addFish(fish) {
        // update our state
        // spread just takes every item from obj and spread into this obj
        // (makes a copy)
        const fishes = {...this.state.fishes};
        // add in new fish
        const timestamp = Date.now(); // # of miliseconds since 1/1/70
        fishes[`fish-${timestamp}`] = fish;
        // set state
        this.setState({ fishes }) // same as fishes(obj): fishes(const)
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            
            </div>

        )
    }
}

export default App;
