import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';

class ListItem extends Component {
    render(){
        const {titleStyle} = styles;
        console.log(this.props)
        return (
            <CardSection>
                <Text style={titleStyle}>{this.props.library.title}</Text>
            </CardSection>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

// doing it this way allows us to pass in and dispatch actions
// without needing to call dispatch from props
// null is in place of returning the state
// no need to call dispatch ourselves

export default connect(null, actions)(ListItem);