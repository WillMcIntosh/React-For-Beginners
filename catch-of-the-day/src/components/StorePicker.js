import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    // need to bind this to StorePicker in goToStore
    // could use a constructor
    // constructor() {
    // super();
    // this.goToStore = this.goToStore.bind(this);
    // }
    // OR
    // do it in the onSubmit below
    // as this.goToStore.bind(this)
    // OR with an arrow function
    // (e) => this.goToStore(e)
    
    goToStore(event) {
        // stop React from refreshing page
        event.preventDefault();
        console.log('You changed the URL');
        // first grab text from box
        const storeId = this.storeInput.value;
        console.log(`Going to ${storeId}`);
        // second transition from / to /store/storeid
        this.context.router.transitionTo(`store/${storeId}`);
    }
    // render is always bound to the Component so this refers to Component
    render() {
        // return <p>Hello.</p>;
        // can return single elements like so, or
        // React.createElement('p', {className: 'test'}, 'Hello')
        // OR:
            // jsx can only return one parent element
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
            {/* JSX comment */}
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name"
                    defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
                <button type="submit">Visit Store</button>
            </form>

        )
    }
}

// tell React that StorePicker component expects something called router
StorePicker.contextTypes  = {
    router: React.PropTypes.object
}

export default StorePicker;
