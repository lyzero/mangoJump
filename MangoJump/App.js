import React from 'react';
import { TouchableOpacity,StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {

constructor(props) {
    super(props);
    this.state = {  startTime:Date.now(), diff: 0}
  }

  onPressIn = () => {
    this.setState({
      startTime: Date.now()
    })
  }
  onPressOut = () => {
    this.setState({
      diff: Date.now() - this.state.startTime
    })
  }

  render() {
    return ( 
      <View style={styles.container}>
        <TouchableOpacity style={styles.container} onPressIn={this.onPressIn} onPressOut={this.onPressOut}>
          <Text>{this.state.diff}</Text>
          <Mango></Mango>
          <Obstacle></Obstacle>
        </TouchableOpacity>
      </View>
    );
  }
}

export class Mango extends React.Component {
  render() {
    return (
      <View style={styles.playerMango}>
        <Image
          style={{
            width: 51,
            height: 51,
            resizeMode: Image.resizeMode.contain,
          }}
          source={require('../MangoJump/Assets/MangoLogo.png')} 
        />
      </View>
    );
  }
}
 

export class Obstacle extends React.Component {
  render() {
    return (
      <View style={styles.rectangleShapeView}>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  playerMango: {
    marginRight: 20,
    backgroundColor: '#FFC107',
  },


  rectangleShapeView: {
    marginTop: 20,
    width: 120 * 2,
    height: 120,
    backgroundColor: '#FFC107'
  }
});
