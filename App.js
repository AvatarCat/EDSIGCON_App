import React from 'react';
import styles from './styles'

import LostAndFound from './Screens/LostAndFound.js'
import Gallery from './Screens/Gallery.js'
import FAQ from './Screens/FAQ.js'
import Map from './Screens/Map.js'
import PresenterBios from './Screens/PresenterBios.js'
import Sessions from './Screens/Sessions.js'
import Events from './Screens/Events.js'


import { Text, View, Linking, ImageBackground } from 'react-native';
import { Icon, SocialIcon } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./assets/Cleveland2.jpg')} style={styles.image}>

        <View style={{paddingTop: 20, margin: 10}}> 
          <Text style={{textAlign: 'center', fontSize: 25}}>EDSIGCON | CONISAR 2019</Text>
        </View>
          <Text style={{textAlign: 'center', fontSize: 15}}>Wedsneday, Nov. 6 - Saturday, Nov. 9</Text>
          <View style={styles.icons}>
            <Icon
                raised
                name='logo-dropbox'
                type='ionicon'
                color='orange'
                title='Lost & Founds'
                size= {30}
                onPress={() => this.props.navigation.navigate('Lost')}                     
            />

            <Icon
                raised
                name='md-photos'
                type="ionicon"
                color='orange'
                size= {30}
                onPress={() => this.props.navigation.navigate('Photos')}  
            />

            <Icon
                raised
                name='md-chatbubbles'
                type='ionicon'  
                color='orange'
                size= {30}   
                onPress={() => this.props.navigation.navigate('Questions')}     
            />

            <Icon
                raised
                name='place'
                type='material'
                color='orange'
                size= {30}
                onPress={() => this.props.navigation.navigate('Location')} 
            />

            <Icon
                raised
                name='ios-contacts'
                type='ionicon'
                color='orange'
                size= {30}
                onPress={() => this.props.navigation.navigate('Presenters')} 
            />
            
            <Icon
                raised
                name='people'
                type='material'
                color='orange'
                size= {30}
                onPress={() => this.props.navigation.navigate('Sessions')} 
            />

            <Icon
                raised
                name='md-calendar'
                type='ionicon'
                color='orange'
                size= {30}
                onPress={() => this.props.navigation.navigate('Events')} 
            />
          </View>

            <View style={styles.socialIcons}>
              <SocialIcon
                  type='instagram'
                  size={15}
                  onPress={() => Linking.openURL('http://instagram.com').catch((err) => console.error('An error occurred', err))}
              />
              <SocialIcon
                  type='facebook'
                  size={15}
                  onPress={() => Linking.openURL('http://facebook.com').catch((err) => console.error('An error occurred', err))} 
              />
              <SocialIcon
                  type='twitter'
                  size={15}
                  onPress={() => Linking.openURL('http://twitter.com').catch((err) => console.error('An error occurred', err))} 
              />
              <SocialIcon
                  type='linkedin'
                  size={15}
                  onPress={() => Linking.openURL('http://linkedin.com').catch((err) => console.error('An error occurred', err))} 
              />
          </View>
      </ImageBackground>
    )
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null, //this will hide the header
        headerBackTitle: null, // this hides the title of the back button
      },
    },
    Lost: {
      screen: LostAndFound, 
      navigationOptions: {
        title: 'Lost and Found',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#368BC1',
        },
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      },
    },
    Photos: {
      screen: Gallery,
      navigationOptions: {
        title: 'Gallery',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#368BC1',
        },
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      },
    },
    Questions: {
      screen: FAQ,
      navigationOptions: {
        title: 'FAQ',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#368BC1',
        },
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      },
    },
    Location: {
      screen: Map,
      navigationOptions: {
        title: 'Location',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#368BC1',
        },
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      },
    },
    Presenters: {
      screen: PresenterBios,
      navigationOptions: {
        title: 'Presenter Bios',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#368BC1',
        },
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      },
    },
    Sessions: {
      screen: Sessions,
      navigationOptions: {
        title: 'Sessions',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#368BC1',
        },
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      },
    },
    Events: {
      screen: Events,
      navigationOptions: {
        title: 'Events',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#368BC1',
        },
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      },
    },
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}