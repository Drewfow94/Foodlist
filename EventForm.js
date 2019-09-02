import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

class EventForm extends Component {
    // Event handler for navigation
    handleAddPress = () => {
        // To be developed heeeeere***
    }
    render() {
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

export default EventForm;