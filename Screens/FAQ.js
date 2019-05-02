import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';

import * as firebase from 'firebase';
import 'firebase/firestore';



export default class App extends React.Component {

  constructor(props)
  {
    super(props);

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAtkvSY_qeKszbLPWf0yHgNSAUNXJZJHQg",
      authDomain: "babb-grp-project.firebaseapp.com",
      databaseURL: "https://babb-grp-project.firebaseio.com",
      projectId: "babb-grp-project",
      storageBucket: "babb-grp-project.appspot.com",
      messagingSenderId: "394926697581"
  };

  //ensure that there is no more than one firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

    this.state = {
      FAQ: [],
      db: firebase.firestore()
    }

  }

  GetAllQuestions = () => {

    //console.log(`USING EMAIL: ${email}`);

    let db = firebase.firestore();

    let questionsRef = db.collection("FAQ");

    questionsRef.get()
             .then( (querySnapshot) => {
               // console.log(querySnapshot.docs);
               if(!querySnapshot.empty){
                this.HandleDatabaseRead(querySnapshot);
               }
             })
             .then(() => {this.setState({FAQ: FAQ})})
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

      let listQuestion = {
        key: doc.id,
        Question: Question,
        Answer: Answer
      }

      FAQ.push(listQuestion);
      return listQuestion;
    });

    console.log(FAQ);
    this.setState(
      {
        FAQ
      }
    )
  }  

  componentDidMount()
  {
    this.GetAllQuestions("ahuimanu@gmail.com");
  }  

  render() {
    return (
      <View>
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