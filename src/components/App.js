import React, {Component} from 'react';
import './App.css';
import Header from "../shared/components/layout/Header";
import Content from "../shared/components/layout/Content";
import Calculator from "./Calculator/Calculator";
import Footer from "../shared/components/layout/Footer";

export default class App extends Component {

    render() {
        return(
            <div className="App">
                <Header title="Calculator"/>
                <Content>
                    <Calculator/>
                </Content>
                <Footer/>
            </div>
        )
    }

}