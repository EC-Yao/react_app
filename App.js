import React, {Component} from 'react';
import Container from './container.js';
import './App.css';

class App extends Component {
    renderContainer(title, text, image) {
        return <Container title={title} text={text} image={image}/>;
    }

    render() {
        return(
            <div style={{
                flexDirection: "column",
                display: "flex",
                flex: 1,
                justifyContent: "center",
                backgroundColor: "blue"
            }}>
                
                <div style={{
                    flexDirection: "row",
                    display: "flex",
                    flex: 1,
                    backgroundColor: "yellow"
                }}>
                    {this.renderContainer("First", "test text 1", "https://images-na.ssl-images-amazon.com/images/I/412qW%2BoKDBL._SX466_.jpg")}
                    {this.renderContainer("Second", "test text 2", "https://images-na.ssl-images-amazon.com/images/I/412qW%2BoKDBL._SX466_.jpg")}
                    {this.renderContainer("Third", "test text 3", "https://images-na.ssl-images-amazon.com/images/I/412qW%2BoKDBL._SX466_.jpg")}
                </div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/412qW%2BoKDBL._SX466_.jpg" alt="new" style={{flex: 1}}/>

                <h1>Hello World</h1>
                <button>
                    5
                </button>
            </div>
        )
    }
}

export default App;