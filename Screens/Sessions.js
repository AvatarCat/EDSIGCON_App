import React from 'react';
import styles from '../styles'

import {Text, View, ScrollView} from 'react-native';
import FlipCard from 'react-native-flip-card'
import { Card, ListItem, Button, Icon } from 'react-native-elements';

class Sessions extends React.Component {
    render() {
      return (
        <ScrollView>
          <View style={{flex:1, flexDirection: 'column'}}>
            <FlipCard flipHorizontal={true}>
              <View style={styles.flipCard}>
                <Text>The Face</Text>
              </View>
              <View style={styles.flipCard}>
                <Text>The Back</Text>
              </View>
            </FlipCard>
            <FlipCard flipHorizontal={true}>
              <View style={styles.flipCard2}>
                <Text>The Face</Text>
              </View>
              <View style={styles.flipCard2}>
                <Text>The Back</Text>
              </View>
            </FlipCard>
          </View> 
        </ScrollView> 
      )
   }
}
export default Sessions;