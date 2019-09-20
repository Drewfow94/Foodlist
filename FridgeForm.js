import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    StyleSheet
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { saveEvent, formatDateTime } from './api';


const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
    },
    text: {
        height: 40,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10,
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    borderTop: {
        borderColor: '#edeeef',
        borderTopWidth: 0.5
    }
});

class FridgeForm extends Component {
    state = {
        foodName: null,
        date: '',
    };
    // Event handler for navigation
    handleAddPress = () => {
        console.log(state);
        this.props.navigation.navigate('FridgeList');
    }
    render() {
        

        this.handleAddPress = () => {
            saveEvent(this.state)
            .then(() => {
                this.props.navigation.goBack();
            })
        }

        handleChangeName = (value) => {
            this.setState({ foodName: value });
        }

        handleDatePress = () => {
            this.setState({ showDatePicker: true });
        }

        handleDatePickerHide = () => {
            this.setState({ showDatePicker: false });
        }

        handleDatePicked = (date) => {
            this.setState({ date, });
            this.handleDatePickerHide();
        }

        return (
            <View
                style={{ flex: 1 }}>

                <View style={styles.fieldContainer}>
                    <TextInput
                        style={styles.text}
                        placeholder="Food name"
                        spellCheck={false}
                        value={this.state.foodName}
                        onChangeText={this.handleChangeName}
                    />
                    <TextInput
                        style={[styles.text, styles.borderTop]}
                        placeholder="Date added"
                        spellCheck={false}
                        value={formatDateTime(this.state.date.toString())}
                        editable={!this.state.showDatePicker}
                        onFocus={this.handleDatePress}
                    />
                    <DateTimePicker
                        isVisible={this.state.showDatePicker}
                        date={this.props.date}
                        mode="datetime"
                        onConfirm={this.props.handleDatePicked}
                        onCancel={this.props.handleDatePickerHide}
                    />
                </View>    
                <TouchableHighlight
                    onPress={this.handleAddPress}
                    style={styles.button}
                >
                <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
            </View>        
        );
    }
}

export default FridgeForm;