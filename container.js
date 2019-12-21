import React, {Component} from 'react';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : props.title,
            text : props.text
        }
    }

    render() {
        return (
            <div style={{display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <img 
                src="https://cdn.shopify.com/s/files/1/0035/2780/2947/products/Asuna_Chibi_590x.png?v=1571711589"
                alt="new"
                style={{resizeMode: "contain", flex: 1, width: 30, height: 30}}/>
                asdf
                <button>
                    {this.state.title}
                </button>
            </div>

        )
    }
}

export default Container;