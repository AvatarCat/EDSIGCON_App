// Got code from https://github.com/ahuimanu/CIDM4385-Spring2019/blob/master/ExpoFirestore/firestore_test/App.js
// Got help from John Cunningham

import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';

let presenters = [];

export default class App extends React.Component {

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
      Presenters: [],
      db: firebase.firestore()
    }

    this.HandleDatabaseRead = this.HandleDatabaseRead.bind(this);
    this.GetAllPresenters = this.GetAllPresenters.bind(this);

  }

  GetAllPresenters(Name){
    let presentersRef = this.state.db.collection("Presenters");


    presentersRef.get()
             .then( (querySnapshot) => {
               if(!querySnapshot.empty){
                this.HandleDatabaseRead(querySnapshot);
               }
             })
             .then(() => {this.setState({Presenters: presenters})})
             .catch((error) => 
             {
                console.log(error);
             });
  }

  //callback for firebase to call
  HandleDatabaseRead(data){
    const Presenters = [];

    data.forEach( (doc) => {

      //destructure data
      const { Name, Role, School } = doc.data();

      let listPresenters = {
        key: doc.id,
        Name: Name,
        Role: Role, 
        School: School
      }

      presenters.push(listPresenters);
    });

    console.log(Presenters);
    this.setState(
      {
        Presenters: Presenters
      }
    )
  }  

  componentDidMount()
  {
    this.GetAllPresenters("Name");
  }

  render() {
    return (
        <ScrollView>
            <View>
                <Text>Presenters</Text>
                <FlatList 
                  data={this.state.Presenters}
                  renderItem={({item}) =>
                  <ListItem
                    title={item.Name}
                    subtitle={`${item.Role}\n${item.School}`}
                    leftAvatar={{ source: { uri: 'http://edsigcon.org/assets/img/team/bakir.jpg' } }}
                  />                    
                }
                  keyExtractor={item => item.key}
                />
            </View>
        </ScrollView>
    );
  }
}