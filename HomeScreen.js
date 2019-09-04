import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <Button
            title="Go to Fridge!"
            onPress={() => navigate('FridgeList')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});

export default HomeScreen;