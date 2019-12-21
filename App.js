import React, {Component} from 'react';
import Container from './container.js';
import './App.css';

class App extends Component {
    renderContainer(title, text) {
        return <Container />;
    }

    render() {
        return(
            <div style={{
                flex: 1,
                flexDirection: "column",
                backgroundColor: "green",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "red",
                }}>
                    {this.renderContainer("First", "test text 1")}
                    {this.renderContainer("Second", "test text 2")}
                    {this.renderContainer("Third", "test text 3")}
                </div>
                <img src="https://cdn.shopify.com/s/files/1/0035/2780/2947/products/Asuna_Chibi_590x.png?v=1571711589" alt="new"/>

                <h1>Hello World</h1>
                <button>
                    5
                </button>
            </div>
        )
    }
}

export default App;