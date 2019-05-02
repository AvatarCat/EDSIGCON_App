import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';

import * as firebase from 'firebase';
import 'firebase/firestore';
import {ListItem} from "react-native-elements"


<<<<<<< HEAD

=======
>>>>>>> c00ba4a11e2dcdd9a72e077a4ccfe23f67020af6

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

<<<<<<< HEAD
  GetAllQuestions = () => {
=======
  GetAllFAQ = () => {
>>>>>>> c00ba4a11e2dcdd9a72e077a4ccfe23f67020af6

    //console.log(`USING EMAIL: ${email}`);

    let db = firebase.firestore();

<<<<<<< HEAD
    let questionsRef = db.collection("FAQ");

    questionsRef.get()
=======
    let FAQRef = db.collection("FAQ");

    FAQRef.get()
>>>>>>> c00ba4a11e2dcdd9a72e077a4ccfe23f67020af6
             .then( (querySnapshot) => {
               // console.log(querySnapshot.docs);
               if(!querySnapshot.empty){
                this.HandleDatabaseRead(querySnapshot);
               }
             })
<<<<<<< HEAD
             .then(() => {this.setState({FAQ: FAQ})})
=======
             .then(
                 () => {this.setState({FAQ: FAQ})}
             )
>>>>>>> c00ba4a11e2dcdd9a72e077a4ccfe23f67020af6
             .catch((error) => 
             {
                console.log(error);
             });
  }

  //callback for firebase to call
  HandleDatabaseRead = (data) => {

<<<<<<< HEAD
=======
    //console.log("FIRESTORE_TEST", data);

>>>>>>> c00ba4a11e2dcdd9a72e077a4ccfe23f67020af6
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

<<<<<<< HEAD
    console.log(FAQ);
    this.setState(
      {
        FAQ
=======
    this.setState(
      {
        FAQ: FAQ
>>>>>>> c00ba4a11e2dcdd9a72e077a4ccfe23f67020af6
      }
    )
  }  

  componentDidMount()
  {
<<<<<<< HEAD
    this.GetAllQuestions("ahuimanu@gmail.com");
=======
    this.GetAllFAQ(); 
>>>>>>> c00ba4a11e2dcdd9a72e077a4ccfe23f67020af6
  }  

  render() {
    return (
      <View>
<<<<<<< HEAD
=======
        <Text>FAQ</Text>
>>>>>>> c00ba4a11e2dcdd9a72e077a4ccfe23f67020af6
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