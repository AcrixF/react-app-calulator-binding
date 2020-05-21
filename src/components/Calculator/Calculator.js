import React, { Component } from "react";
import './Calculator.css'

export default class Calculator extends Component {

    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            result: 0
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleResult = this.handleResult.bind(this);

    }

    handleOnChange(event) {
        const { target: { value, name } } = event;

        this.setState({
            [name]: Number(value)
        });
    }

    handleResult(event) {
        this.setState({
            result: this.state.number1 + this.state.number2
        });
    }

    render() {
        return(
            <div className="Calculator">
                <input name="number1"
                       type="text"
                       value={this.state.number1}
                       onChange={this.handleOnChange}/>
                {' + '}
                <input name="number2"
                       type="text"
                       value={this.state.number2}
                       onChange={this.handleOnChange}/>

                <p><button onClick={this.handleResult}>=</button></p>
                <p className="result">{this.state.result}</p>
            </div>
        )
    }

}