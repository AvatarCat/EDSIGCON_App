import React from 'react';
import styles from '../styles'

import {Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class CustomContent extends React.Component {
    state = {}
     componentWillMount() {}
    
     render() {
         return (
            <ScrollView>
                <View style={styles.container}>
                    <Text>Hello World</Text>
                </View>
            </ScrollView>
         )
    }
}

export default CustomContent;