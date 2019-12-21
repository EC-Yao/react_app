import React, {Component} from 'react';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : props.title,
            text : props.text,
            image : props.image
        }
    }

    render() {
        return (
            <div style={{display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <img 
                src={this.state.image}
                alt="new"
                style={{resizeMode: "contain", flex: 1, width: 100}}/>
                <button
                    onClick={() => this.setState({title: "Clicked"})}
                >
                    {this.state.title}
                </button>
                <p>{this.state.text}</p>
            </div>

        )
    }
}

export default Container;