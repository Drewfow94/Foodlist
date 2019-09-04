import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native'; 
import FoodCard from './FoodCard';
import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    }
});

class FridgeList extends Component {
    state = {
        food: []
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                food: this.state.food.map(evt => ({
                    ...evt,
                    timer: Date.now(),       
                })),
            });      
        }, 1000);    
    
        const food = require('./db.json').food.map(e => ({
            ...e,
            date: new Date(e.date),    
        }));
        this.setState({ food });
    }
    
    handleAddEvent = () => {
        this.props.navigation.navigate('form');
    }

    render() {
        const {navigate} = this.props.navigation; 
        return [
            <FlatList
                key="flatlist"
                style={styles.list}
                data={this.state.food}
                keyExtractor={item => item.id}
                renderItem={({ item, separators }) => (
                        <FoodCard 
                    food={item} />
                )}
            />,
            <ActionButton
                    key="fab"
                    onPress={() => navigate('FridgeForm')}
                    buttonColor="rgba(rgba(6, 214, 160, 1))"
            />
        ];
    }
}

export default FridgeList;