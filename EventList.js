import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native';

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        const events = require('./db.json').events;
        this.setState({ events });
    }
    render() {
        return (
            <FlatList
                data={this.state.events}
                renderItem={({ item }) => <Text>{item.foodName}</Text>}
                keyExtractor={item => item.id}
            />
        );
    }
}

export default EventList;