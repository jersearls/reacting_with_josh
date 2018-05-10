import React, { Component } from "react";

class Body extends Component {
    render() {
        return (
        <section>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.children}
        </section>
        );
    }
}

export default Body;
