import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {"cakes": []}
        fetch("http://localhost:8080/api/cakes")
            .then(response => response.json())
            .then(data => {
                this.setState(data["_embedded"]);
            });
    }

    render() {
        return <CakeList cakes={this.state.cakes}/>;
    }
}

class CakeList extends React.Component {
    render() {
        var cakes = this.props.cakes.map(cake =>
            <Cake key={cake._links.self.href} cake={cake}/>
    );
        return (
            <table>
            <tbody>
            <tr>
            <th>Name</th>
            <th>Description</th>
            </tr>
            {cakes}
            </tbody>
            </table>
    );
    }
}

class Cake extends React.Component{
    render() {
        return (
            <tr>
            <td>{this.props.cake.name}</td>
        <td>{this.props.cake.description}</td>
        </tr>
    );
    }
}

render((
    <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/foobarofbbaro" component={App} />
    <Route path="/numberthree" component={App} />
    </Router>
), document.getElementById('react'));