import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SliderBox } from "react-native-image-slider-box";


export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        require('../assets/gympic1.jpg'),
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});