import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  TextInput,
  Image,
  StyleSheet,
  Text,
  View,
  TextOutput,
} from "react-native";
import logo from "./assets/gmconverter.png";
import { TextBox, output } from "./TextBox";

export default function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

  const handleChangeValue1 = (newVal) => setText1(newVal);
  const handleChangeValue2 = (newVal) => setText2(newVal);
  const handleChangeValue3 = (newVal) => setText3(newVal);

  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={{ width: 305, height: 300 }}
        style={styles.img}
      />
      <Text style={styles.txt}>Converter!</Text>
      <TextInput
        style={styles.input}
        // value={text1}
        placeholder="Type Here:name"
        onChangeText={setText1}
      />
      <TextInput
        style={styles.input}
        //  value={text2}
        placeholder="Type Here:gram"
        keyboardType="numeric"
        onChangeText={(text2) => setText2(text2)}
      />
      <TextInput
        style={styles.input}
        // value={text3}
        placeholder="Type Here:moles"
        keyboardType="numeric"
        onChangeText={(text3) => setText3(text3)}
      />

      <TextBox
        parameter1={text1}
        parameter2={text2}
        parameter3={text3}
        onChangeValue={handleChangeValue1}
        onChangeValue={handleChangeValue2}
        onChangeValue={handleChangeValue3}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5DFBB",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 400,
    height: 300,
    marginBottom: 10,
    borderRadius: 50,
  },
  txt: {
    color: "#ffffff",
    fontSize: 40,
    marginHorizontal: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
