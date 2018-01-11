import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import { ImagePicker } from 'expo';

import { Avatar } from '../components/Avatar';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      imageUri: null,
      name: ''
    };
  }

  render() {
    const { imageUri } = this.state;

    return (
      <View style={styles.container}>

        <View style={styles.avatarContainer}>
          <Avatar avatarUrl={imageUri} />
        </View>

        <View>
          <Text>
            {this.state.name}
          </Text>
          <TextInput
            onChangeText={text => this.setState({ name: text })}
            value={this.state.name}
            placeholder="Enter name..."
            placeholderTextColor="#555"
          />
        </View>

        <View>
          <Button
            style={styles.button}
            title="Camera"
            onPress={this._makePhoto.bind(this)}
          />
        </View>

      </View>
    );
  }

  async _makePhoto() {
    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      this.setState({ imageUri: result.uri });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#eee'
  },
  avatarContainer: {
    marginRight: 15,
    paddingTop: 2,
    alignItems: 'center'
  },
  buttonContainer: {
    paddingBottom: 10
  },
});
