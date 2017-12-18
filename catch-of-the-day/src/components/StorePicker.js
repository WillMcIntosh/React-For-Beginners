import React from 'react';

class StorePicker extends React.Component {
    render() {
        // return <p>Hello.</p>;
        // can return single elements like so, or
        // React.createElement('p', {className: 'test'}, 'Hello')
        // OR:
            // jsx can only return one parent element
        return (
            <form className="store-selector">
            {/* JSX comment */}
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store</button>
            </form>

        )
    }
}

export default StorePicker;
