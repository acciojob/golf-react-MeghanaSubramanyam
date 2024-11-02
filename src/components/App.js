import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,      // Controls whether the ball is displayed
            posi: 0,                // Tracks the left position of the ball
            ballPosition: { left: "0px" }
        };
        this.renderBallOrButton = this.renderBallOrButton.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    buttonClickHandler() {
        // Set renderBall to true to display the ball and hide the Start button
        this.setState({ renderBall: true });
    }

    handleKeyDown(event) {
        // Move the ball to the right if the ArrowRight key is pressed
        if (event.key === "ArrowRight" || event.keyCode === 39) {
            this.setState((prevState) => {
                const newPosition = prevState.posi + 5;
                return {
                    posi: newPosition,
                    ballPosition: { left: `${newPosition}px` }
                };
            });
        }
    }

    componentDidMount() {
        // Bind keydown event to handleKeyDown
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        // Clean up the event listener
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>;
        } else {
            return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
        }
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        );
    }
}

export default App;
