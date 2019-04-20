import React from 'react';
import styles from '../styles'

import {Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class FAQ extends React.Component {
    state = {}
     componentWillMount() {}
    
     render() {
         return (
            <ScrollView>
                <View>
                    <Text>Q: Where is the conference</Text>
                    <Text style={{paddingLeft: 15}}>A: It is located somewhere</Text>
                </View>
            </ScrollView>
         )
    }
}

export default FAQ;