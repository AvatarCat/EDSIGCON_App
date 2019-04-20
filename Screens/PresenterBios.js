import React from 'react';
import styles from '../styles'

import {Text, View} from 'react-native';
import { ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

class PresenterBios extends React.Component {
    state = {}
     componentWillMount() {}
    
     render() {

        const list = [
            {
              name: 'Li-Jen Lester - Sam Houston State University',
              avatar_url: 'http://edsigcon.org/assets/img/team/shannon2.jpg',
              subtitle: 'Conference Chair'
            },
            {
              name: 'Tom Janicki',
              avatar_url: 'http://edsigcon.org/assets/img/team/janicki.jpg',
              subtitle: 'Meeting Planner, Panels & Workshops Coordinator & Journal Publisher'
            },
          ]

         return (
            <ScrollView>
                <View>
                    <View>
                        {
                            list.map((l, i) => (
                                <ListItem
                                    key={i}
                                    leftAvatar={{ source: { uri: l.avatar_url }, size: 'large'}}
                                    subtitleProps={{fontSize: 8}}
                                    title={l.name}
                                    subtitle={l.subtitle}
                                    rightIcon={{name:'mail', type:'material', size: 35, color: 'blue'}}
                                />
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
         );
    }
}

export default PresenterBios;