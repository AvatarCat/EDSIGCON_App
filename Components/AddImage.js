import React from 'react';
import { Image, View, Dimensions, ScrollView } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import { Button } from 'react-native-elements';

export default class ImagePickerExample extends React.Component {
    state = {
      image: null,
    };

    selectPicture = async () => {
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
          aspect: 1,
          allowsEditing: true,
        });
        if (!cancelled) this.setState({ image: uri });
      };
  
      takePicture = async () => {
        await Permissions.askAsync(Permissions.CAMERA);
        const { cancelled, uri } = await ImagePicker.launchCameraAsync({
          allowsEditing: false,
        });
        this.setState({ image: uri });
      };
    
    render() {
      let { image } = this.state;

      return (
        <ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                    style={{paddingRight: 5 }}
                    title="Select Image"
                    onPress={this.selectPicture}
                />
                <Button
                    title="Take Picture"
                    onPress={this.takePicture}
                />
            </View>
            <View>
                {image &&
                    <Image source={{ uri: image }} style={{ width: ((Dimensions.get('window').width) * .5), height: ((Dimensions.get('window').width) * .5) }} />}
            </View>
        </ScrollView>
      );
    }
  };