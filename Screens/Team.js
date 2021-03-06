// Got code from https://github.com/ahuimanu/CIDM4385-Spring2019/blob/master/ExpoFirestore/firestore_test/App.js
// Got help from John Cunningham

import React from 'react';
import { FlatList, View } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';

export default class Team extends React.Component {

  constructor(props)
  {
    super(props);

    // Initialize Firebase
    var config = {
      apikey: process.env.REACT_APIKEY_TEAM,
      authDomain: process.env.REACT_AUTHDOMAIN_TEAM,
      databaseURL: process.env.REACT_DATABASEURL_TEAM,
      projectId: "confapp-15042",
      storageBucket: process.env.REACT_STORAGEBUCKET_TEAM,
      messagingSenderId: process.env.REACT_MESSAGINGSENDERID_TEAM
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
             .then(() => {this.setState({Presenters})})
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

      Presenters.push(listPresenters);
    });

    console.log(Presenters);
    this.setState(
      {
        Presenters
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
                <FlatList 
                  data={this.state.Presenters}
                  renderItem={({item}) =>
                  <ListItem
                    title={item.Name}
                    titleStyle={{fontSize: 20}}
                    subtitle={`${item.Role}\n${item.School}`}
                    leftAvatar={{ source: require('../assets/sugarGlider.jpg')}}
                  />                    
                }
                  keyExtractor={item => item.key}
                />
            </View>
        </ScrollView>
    );
  }
}
