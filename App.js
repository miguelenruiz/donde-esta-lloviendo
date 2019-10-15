import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UserCus from "./app/navigation/usercustom";

export default function App() {
  return (
    <View style={styles.container}>
      <UserCus />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
