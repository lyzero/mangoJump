import React from 'react';
import { TouchableOpacity,StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {

constructor(props) {
    super(props);
    this.state = {  
      startTime:Date.now(),
      diff: 0, 
      mangoPosition:{
        width:51,
        height: 51,
        borderRadius: 30,
        resizeMode: Image.resizeMode.contain
      },
      obstacleCenter:{
        width: 51,
        height: 51,
        borderRadius: 30,
        resizeMode: Image.resizeMode.contain
      }
    }
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

  onMangoMove = () => {
    this.setState({
      mangoPosition: {
        width: this.state.diff/8,
        height:86,
        borderRadius: 30,
        resizeMode: Image.resizeMode.contain
      }
    })
  }

  render() {
    return ( 
      <View style={styles.container}>
        <TouchableOpacity style={styles.container} onPressIn={this.onPressIn} onPressOut={this.onPressOut} 
        onPress={this.onMangoMove}>
          <Text>{this.state.diff}</Text>
          <Mango moveStyle={this.state.mangoPosition}></Mango>
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
          style={this.props.moveStyle ? this.props.moveStyle : styles.playerMango} 
          source={require('../MangoJump/Assets/MangoLogo.png')} 
        />
      </View>
    );
  }
}
 

export class Obstacle extends React.Component {


  getRandomHeightStyle = function() {
    let height = Math.floor(Math.random() * 201);
    console.log(height)
    return {
      marginTop: 20,
      width: 120 * 2,
      height: height,
      backgroundColor: '#FFC107'
    };
  }

  render() {
    return (
      <View style={this.getRandomHeightStyle()}>
      </View>
    );
  }  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  playerMango: {
    marginRight: 20,
    backgroundColor: '#FFC107',
    borderRadius:30,
    left: 0,
    bottom: 0
  },

  rectangleShapeView: {
    marginTop: 20,
    width: 120 * 2,
    backgroundColor: '#FFC107'
  }
});
