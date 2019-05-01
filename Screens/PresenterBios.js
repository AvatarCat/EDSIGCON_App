import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';

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

    console.log(`USING Name: ${Name}`);

    let presentersRef = this.state.db.collection("Presenters");

    presentersRef.get()
             .then( (querySnapshot) => {
               if(!querySnapshot.empty){
                this.HandleDatabaseRead(querySnapshot);
               }
             })
             .catch((error) => 
             {
                console.log(error);
             });
  }

  //callback for firebase to call
  HandleDatabaseRead(data){

    console.log("HandleDatabaseRead");

    const Presenters = [];

    data.forEach( (doc) => {

      //destructure data
      const { Name, Role, School } = doc.data();

      let listPresenters = {
        key: doc.id,
        Name: Name,
        Role: Role, 
        Shcool: School
      }

      Presenters.push(listPresenters);
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
            <View style={styles.container}>
                <Text>Presenters</Text>
                <FlatList data={this.state.Presenters}
                        renderItem={({Name}) => <Text style={styles.item}>{Name.Name}</Text>} 
                />
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100    
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },  
});