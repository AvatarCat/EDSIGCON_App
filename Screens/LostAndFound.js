// React Native Dropdown List: https://www.npmjs.com/package/react-native-material-dropdown

import React from 'react';
import styles from '../styles'

import {Text, View, Picker} from 'react-native';
import {SearchBar} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import 'firebase/firestore';

class LostAndFound extends React.Component {  
  constructor(props)
  {
    super(props);

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCbcbyCO77Fplksny8Sm8yNq6qcsoJWIxk",
        authDomain: "confapp-15042.firebaseapp.com",
        databaseURL: "https://confapp-15042.firebaseio.com",
        projectId: "confapp-15042",
        storageBucket: "confapp-15042.appspot.com",
        messagingSenderId: "971098273273"
    };

    //ensure that there is no more than one firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }

    this.state = {
      search = '',
      LostAndFound: [],
      db: firebase.firestore()
    }

    this.HandleDatabaseRead = this.HandleDatabaseRead.bind(this);
    this.GetAllItems = this.GetAllItems.bind(this);

  }

  GetAllTeams(Item){
    let itemsRef = this.state.db.collection("Items");


    itemsRef.get()
             .then( (querySnapshot) => {
               if(!querySnapshot.empty){
                this.HandleDatabaseRead(querySnapshot);
               }
             })
             .then(() => {this.setState({Items})})
             .catch((error) => 
             {
                console.log(error);
             });
  }

  //callback for firebase to call
  HandleDatabaseRead(data){
    const Items = [];

    data.forEach( (doc) => {

      //destructure data
      const { Color, Description } = doc.data();

      let listItems = {
        key: doc.id,
        Color: Color,
        Description: Description,
      }

      Items.push(listItems);
    });

    console.log(Items);
    this.setState(
      {
        Items
      }
    )
  }  

  componentDidMount()
  {
    this.GetAllTeams();
  }

      updateSearch = search => {
        this.setState({ search });
      };
    
     render() {
        const { search } = this.state;

        let data = [{
            value: 'Red',
          }, {
            value: 'Blue',
          }, {
            value: 'Black',
          }, {
              value: 'White',
          }, {
            value: 'Purple',
          },{
            value: 'Orange',
          },{
            value: 'Other',
          }];

         return (
           <ScrollView>
              <View>
                  <View>
                      <Dropdown
                          label='Color'
                          data={data}
                      />
                      <SearchBar
                          placeholder="Item..."
                          onChangeText={this.updateSearch}
                          value={search}
                      />
                      <View>
                      <FlatList 
                        data={this.state.Items}
                        renderItem={({item}) =>
                        <ListItem
                          title={item.Color}
                          titleStyle={{fontSize: 20}}
                          subtitle={item.Description}
                          leftAvatar={{ source: require('../assets/tinyGecko.jpg')}}
                        />                    
                      }
                        keyExtractor={item => item.key}
                      />
                      </View>
                  </View>
              </View>
            </ScrollView>
         );
    }
}

export default LostAndFound;