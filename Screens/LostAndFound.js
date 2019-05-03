// React Native Dropdown List: https://www.npmjs.com/package/react-native-material-dropdown
// Confetti: https://github.com/VincentCATILLON/react-native-confetti-cannon

import React from 'react';
import styles from '../styles'

import {Text, View, Picker} from 'react-native';
import {SearchBar} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { ScrollView } from 'react-native-gesture-handler';
import ConfettiCannon from 'react-native-confetti-cannon';

const Confetti = () => (
  <ConfettiCannon count={500} origin={{x: -10, y: 0}} />
);

class LostAndFound extends React.Component {  
    state = {
        search: '',
    };

     componentWillMount() {}

     updateSearch = search => {
        this.setState({ search });
      };
    
     render() {
        const { search } = this.state;

        let data = [{
            value: 'Red',
          }, {
            value: 'Blue',
          }, {
            value: 'Black',
          }, {
              value: 'White',
          }, {
            value: 'Purple',
          },{
            value: 'Orange',
          },{
            value: 'Other',
          }];

         return (
           <ScrollView>
              <View>
                  <View>
                      <Dropdown
                          label='Color'
                          data={data}
                      />
                      
                      <SearchBar
                          placeholder="Item..."
                          onChangeText={this.updateSearch}
                          value={search}
                      />
                  </View>
                  <View style={{marginTop: 575}}>
                    <Confetti/>
                  </View>
              </View>
            </ScrollView>
         );
    }
}

export default LostAndFound;