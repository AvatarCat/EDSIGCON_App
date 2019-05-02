import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';
import {ListItem} from "react-native-elements"



export default class App extends React.Component {

  constructor(props)
  {
    super(props);

    var config = {
        apiKey: "AIzaSyAtkvSY_qeKszbLPWf0yHgNSAUNXJZJHQg",
        authDomain: "babb-grp-project.firebaseapp.com",
        databaseURL: "https://babb-grp-project.firebaseio.com",
        projectId: "babb-grp-project",
        storageBucket: "babb-grp-project.appspot.com",
        messagingSenderId: "394926697581"
    };

    //ensure that no more than one firebase is instantiated
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    this.state = {
      FAQ: [],
      db: firebase.firestore()
    }

  }

  GetAllFAQ = () => {

    //console.log(`USING EMAIL: ${email}`);

    let db = firebase.firestore();

    let FAQRef = db.collection("FAQ");

    FAQRef.get()
             .then( (querySnapshot) => {
               // console.log(querySnapshot.docs);
               if(!querySnapshot.empty){
                this.HandleDatabaseRead(querySnapshot);
               }
             })
             .then(
                 () => {this.setState({FAQ: FAQ})}
             )
             .catch((error) => 
             {
                console.log(error);
             });
  }

  //callback for firebase to call
  HandleDatabaseRead = (data) => {

    //console.log("FIRESTORE_TEST", data);

    const FAQ = [];

    data.forEach( (doc) => {

      //destructure data
      const { Question, Answer } = doc.data();

      console.log("FIRESTORE_TEST", Answer)
      let listQuestion = {
        key: doc.id,
        Question: Question,
        Answer: Answer
      }

      FAQ.push(listQuestion);
      return listQuestion;
    });

    this.setState(
      {
        FAQ: FAQ
      }
    )
  }  

  componentDidMount()
  {
    this.GetAllFAQ(); 
  }  

  render() {
    return (
      <View>
        <Text>FAQ</Text>
        <FlatList
            data = {this.state.FAQ}
            renderItem = {({ item }) =>
                <ListItem 
                    title = {item.Question}
                    subtitle = {item.Answer}
                />
            }
            keyExtractor = {item => item.key}
        />
      </View>
    );
  }
}