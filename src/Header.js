import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function updateTitleAsAction(args) {
    return {
        type: "UPDATE_TITLE",
        result: {
            title: "World War Declared"
        }
    };
}

class Header extends Component {
    static propTypes = {
        imageSrc: PropTypes.string.isRequired,
        title: PropTypes.string,
        updateTitle: PropTypes.func
    };

    render () {
        const { imageSrc, title, updateTitle } = this.props;

        return (
            <header className="App-header">
                <img src={imageSrc} className="App-logo" alt="logo" />
                <h1 className="App-title">{title}</h1>
                <button onClick={updateTitle}>Update Title</button>
            </header>
        )
    }
}

//connect is a 'thunk' function that returns a function
function mapStateToProps(state) {
    console.log("Updated state");

    return {
        title: state.title
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateTitle: () => dispatch(updateTitleAsAction())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
