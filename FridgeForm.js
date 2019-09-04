import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

class FridgeForm extends Component {
    // Event handler for navigation
    handleAddPress = () => {
        this.props.navigation.navigate('FridgeList');
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <TouchableHighlight
                    onPress={this.handleAddPress}
                >
                    <Text>Add</Text>
                </TouchableHighlight>
            </View>        
        );
    }
}

export default FridgeForm;