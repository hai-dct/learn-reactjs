import React, { Component } from 'react';
import { ReactComponent as Logo } from '../logo.svg';

class About extends Component {

    constructor(props) {
        super(props);
        console.log('constructor');

        this.state = {
            'list': this.props.items,
        };
    }

    deleteItem(id) {
        console.log(id);

        let { list } = this.state;
        // let index = items.findIndex(obj => obj.id === id);

        // if (index >= 0) {
        //     items.splice(index, 1);
        //     this.setState({'items': items});
        // }

        const newList = list.filter((item) => item.id !== id);
        this.setState({ 'list': newList });
    }

    componentDidMount() {
        console.log('componentDidMount');
    }


    componentDidUpdate(previousProps, previousState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');

        const cellStyles = {
            display: 'flex',
            margin: '10px'
        };

        const rectStyles = {
            width: 50,
            height: 50,
            background: 'black'
        };

        const imgStyles = {
            width: 50,
            height: 50,
            display: 'flex',
            background: 'black',
            alignItems: 'center',
        };

        const itemStyles = {
            display: 'flex',
            margin: '10px'
        };

        const listItems = this.state.list.map((item) =>
            <li style={itemStyles} key={item.id}>
                <div style={rectStyles} />
                <div>
                    <h1>{item.title}</h1>
                    <h5>{item.content}</h5>
                </div>
                <button style={imgStyles} onClick={() => this.deleteItem(item.id)}>
                    <Logo alt="logo" />
                </button>
            </li>
        );

        const isEmpty = this.state.list.length <= 0
        return (
            <div style={cellStyles}>
                { isEmpty ? <h1>Empty Data</h1> : <ul>{listItems}</ul> }
            </div>
        );
    }
}

export default About;