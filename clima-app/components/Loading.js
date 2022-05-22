import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Loading = (props) => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size={props.size} color={props.color} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default Loading;