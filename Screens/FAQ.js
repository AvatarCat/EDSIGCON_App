import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';

import * as firebase from 'firebase';
import 'firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends React.Component {

  constructor(props)
  {
    super(props);

    // Initialize Firebase
    // * Firebse Api Key

  //ensure that there is no more than one firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

    this.state = {
      FAQ: [],
      db: firebase.firestore()
    }

  }

  GetAllFAQ = () => {

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
                 () => {this.setState({FAQ})}
             )
             .catch((error) => 
             {
                console.log(error);
             });
  }

  //callback for firebase to call
  HandleDatabaseRead = (data) => {

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
        FAQ
      }
    )
  }  

  componentDidMount()
  {
    this.GetAllFAQ(); 
  }  

  render() {
    return (
      <ScrollView>
        <View>
          <FlatList
              data = {this.state.FAQ}
              renderItem = {({ item }) =>
                  <ListItem 
                      title = {item.Question}
                      titleStyle={{ fontWeight: 'bold' }}
                      subtitle = {item.Answer}
                  />
              }
              keyExtractor = {item => item.key}
          />
        </View>
      </ScrollView>
    );
  }
}
