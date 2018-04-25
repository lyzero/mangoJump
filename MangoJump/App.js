import React from 'react';
import { Button, View, Text, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { GameView } from './screens/GameView'


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Facebook Login"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        />
        <Button
          title="Go to Game"
          onPress={() => this.props.navigation.navigate('GameView')}
        />
      </View>
    );
  }
}

class LoginScreen extends React.Component {
  _handleFacebookLogin = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '1201211719949057', // Replace with your own app id in standalone app
        { permissions: ['public_profile'] }
      );

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const profile = await response.json();
          Alert.alert(
            'Logged in!',
            `Hi ${profile.name}!`,
          );
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
      Alert.alert(
        'Oops!',
        'Login failed!',
      );
    }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
        <Button
          title="Login with Facebook"
          onPress={this._handleFacebookLogin}
        />
      
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    LoginScreen: {
      screen: LoginScreen,
    },
    GameView: {
      screen: GameView,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}