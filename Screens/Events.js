// React Native Carousel: https://github.com/machadogj/react-native-carousel-control

import React from 'react';
import styles from '../styles'

import {Text, View, FlatList, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-carousel-control';
import {Header} from 'react-native-elements';

class Events extends React.Component {    
     render() {
      return (
        <ScrollView>
            <View>
              <View style={styles.carousel}>
                  <Carousel pageStyle={ {backgroundColor: "white", borderRadius: 5, height: 500} }>
                    <View style={{alignItems: 'center'}}>
                      <Header backgroundColor='#F5F5F5' centerComponent={{ text: '11/6/19 - 11/7/19', style: { color: 'black', fontSize: 20 } }}/>
                        <Image 
                          source={require('../assets/files.jpg')}/>
                        <View style={styles.list}>
                        <FlatList
                          data={[
                            {key: '6:00pm Light Reception - Registration'},
                            {key: '7:00am-4:30pm Registration'},
                            {key: '7:30am Breakfast'},
                            {key: '8:30am-12:00pm Sessions & Workshops begin'},
                            {key: '12:00pm Industry Keynote Lunch'},
                            {key: '2:00pm - 4:30 Sessions'},
                          ]}
                          renderItem={({item}) => <Text>• {item.key}</Text>}
                        />
                        </View>
                      </View>
                      <View style={{alignItems: 'center'}}>
                      <Header backgroundColor='#F5F5F5' centerComponent={{ text: 'Thursday Night', style: { color: 'black', fontSize: 23} }}/>
                      <Image 
                          source={require('../assets/downtownClevlandRestraunt.jpg')}
                          />
                      <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 15}}>
                          SPECIAL EVENT
                        </Text>
                        <Text style={{padding: 15}}>
                          Thursday Dinner & Fun Night
                          EDSIG Fellow Induction
                        </Text>
                        <Text>
                          Downtown Cleveland location to be determined.
                        </Text>
                      </View>
                      </View>
                      <View style={{alignItems: 'center'}}>
                      <Header backgroundColor='#F5F5F5' centerComponent={{ text: '11/8/19', style: { color: 'black', fontSize: 25 } }}/>
                      <Image 
                          source={require('../assets/lectureRoom.jpg')}
                          />
                      <View style={styles.list}>
                        <FlatList
                            data={[
                              {key: '7:30am Breakfast'},
                              {key: '8:30am-12:00pm Sessions'},
                              {key: '12:00pm Distinguished Educator Keynote Lunch'},
                              {key: '2:00pm - 4:30 Sessions'},
                              {key: '5:00pm EDSIG Members Meeting'},
                              {key: '6:30pm Reception'},
                              {key: 'Meet up with colleagues for dinner'},                
                            ]}
                            renderItem={({item}) => <Text>• {item.key}</Text>}
                          />
                      </View>
                      </View>
                      <View style={{alignItems: 'center'}}>
                      <Header backgroundColor='#F5F5F5' centerComponent={{ text: '11/9/19', style: { color: 'black', fontSize: 25 } }}/>
                      <Image 
                          source={require('../assets/clevelandRestraunt.jpg')}
                          />
                      <View style={styles.list}>
                        <FlatList
                          data={[
                            {key: '7:30am Breakfast'},
                            {key: '8:30am-12:00pm Sessions'},
                            {key: '12:00pm Awards Lunch'},
                          ]}
                          renderItem={({item}) => <Text>• {item.key}</Text>}
                        />
                      </View>
                      </View>
                  </Carousel>
                </View>
            </View>
        </ScrollView>
      )
    }
}

export default Events;