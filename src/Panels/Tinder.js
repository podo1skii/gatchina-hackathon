import React from 'react';

import Card from './Card';
import { isTemplateElement } from '@babel/types';
import { serverResponse, serverResponseOld, getInfoPlace } from '../API';





class TinderCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            routes: [1,2,3,4]
         }
         this.onRemoveCard = this.onRemoveCard.bind(this)
    }


    componentWillMount(){
        serverResponseOld(getInfoPlace(1)).then((e)=>console.log(e))
    }

    onRemoveCard(){
        let routes = this.state.routes;
        routes.shift();
        this.setState({routes: routes})
        this.props.onRemoveRoute();
    }

    render() { 
        console.log('prerender');
        return (
            <>
            {this.state.routes.length === 4 && <Card key={0} id={this.state.routes[0]} onRemoveCard={this.onRemoveCard} />}
            {this.state.routes.length === 3 && <Card key={1} id={this.state.routes[0]} onRemoveCard={this.onRemoveCard} />}
            {this.state.routes.length === 2 && <Card key={2} id={this.state.routes[0]} onRemoveCard={this.onRemoveCard} />}
            {this.state.routes.length === 1 && <Card key={3} id={this.state.routes[0]} onRemoveCard={this.onRemoveCard} />}
            </>
        );
    }
}
 
export default TinderCard;