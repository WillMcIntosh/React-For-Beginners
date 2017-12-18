import React from 'react';

// if component is only going to render HTML,
// dont need
// class Header extends React.Component {
// you can just use a Stateless Function

// could write function Header()
// or var Header = function()

const Header = (props) => {
    return (
        <header className="top">
            <h1>
                Catch
                <span className="ofThe">
                    <span className="of">of</span>
                    <span className="the">the</span>
                </span>
                Day
            </h1>
            <h3 className="tagline"><span>{props.tagline}</span></h3>
        </header>
    )
}

export default Header;
