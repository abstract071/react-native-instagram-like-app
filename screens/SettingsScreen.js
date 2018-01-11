import React from 'react';
import { View, Button, Image, FlatList, StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import { ImagePicker } from "expo";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Photos',
  };

  constructor(props) {
    super(props);

    this.state = {
      images: []
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.images}
          renderItem={this._renderItem.bind(this)}
          keyExtractor={this._extractKey.bind(this)}

        />

        <View style={styles.footerContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="make a photo"
              onPress={this._makePhoto.bind(this)}
            />
          </View>

          <View>
            <Button
              title="add from gallery"
              onPress={this._pickImage.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }

  _extractKey(item, index) {
    return item.uri + index;
  }

  _renderItem({ item }) {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.uri }}
          style={{ width: 300, height: 300 }}
          resizeMode="cover"
        />
      </View>
    );
  }

  async _pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      this.setState({ images: [...this.state.images, result] });
    }
  };

  async _makePhoto() {
    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      this.setState({ images: [...this.state.images, result] });
    }
  };
}

const styles = StyleSheet.create({
  imageContainer: {
    padding: 5,
    alignItems: 'center'
  },
  footerContainer: {
    backgroundColor: '#eee',
    padding: 10
  },
  buttonContainer: {
    paddingBottom: 10
  }
});
