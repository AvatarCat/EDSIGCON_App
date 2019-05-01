import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';

const ords = [];

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
      orders: [],
      db: firebase.firestore()
    }

  }

  GetAllOrders = () => {

    //console.log(`USING EMAIL: ${email}`);

    let db = firebase.firestore();

    let ordersRef = db.collection("FAQ");

    ordersRef.get()
             .then( (querySnapshot) => {
               // console.log(querySnapshot.docs);
               if(!querySnapshot.empty){
                let Q = HandleDatabaseRead(querySnapshot);
               }
             })
             .then(
                 () => {this.setState({orders: ords})}
             )
             .catch((error) => 
             {
                console.log(error);
             });
  }

  //callback for firebase to call
  HandleDatabaseRead = (data) => {

    //console.log("FIRESTORE_TEST", data);



    data.forEach( (doc) => {

      //destructure data
      const { Question, Answer } = doc.data();

      let listQuestion = {
        key: doc.id,
        Question: Question,
        Answer: Answer
      }

      ords.push(listQuestion);
      return listQuestion;
    });

    console.log(ords);
    this.setState(
      {
        orders: ords
      }
    )
  }  

  componentDidMount()
  {
    this.GetAllOrders("ahuimanu@gmail.com");
  }  

  render() {
    return (
      <View>
        <Text>FAQ</Text>
        <Text>{Question.Question}</Text>
        <FlatList
            data = {this.state.orders}
            renderItem = {({ item }) =>
                <ListItem 
                    title = {listQuestion.Question}
                    subtitle = {item.Answer}
                />
            }
            keyExtractor = {item => item.id}
        />
      </View>
    );
  }
}