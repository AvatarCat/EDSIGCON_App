// React Native Dropdown List: https://www.npmjs.com/package/react-native-material-dropdown

import React from 'react';
import styles from '../styles'

import {Text, View, Picker} from 'react-native';
import {SearchBar} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { ScrollView } from 'react-native-gesture-handler';

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
              </View>
            </ScrollView>
         );
    }
}

export default LostAndFound;