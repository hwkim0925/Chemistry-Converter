import React, { useState } from "react";
import { TextInput, Image, StyleSheet, Text, View } from "react-native";

export const TextBox = (props) => {
  let parameter1 = props.parameter1;
  let parameter2 = props.parameter2;
  let parameter3 = props.parameter3;
  let onChangeValue = props.onChangeValue;
  let mymap = new Map();
  mymap.set("H", 1.0079);
  mymap.set("He", 4.0026);
  mymap.set("Li", 6.941);
  mymap.set("Be", 9.0122);
  mymap.set("B", 10.811);
  mymap.set("C", 12.011);
  mymap.set("N", 14.007);
  mymap.set("O", 15.999);
  mymap.set("F", 18.998);
  mymap.set("Ne", 20.18);
  mymap.set("Na", 22.99);
  mymap.set("Mg", 24.305);
  mymap.set("Al", 26.982);
  mymap.set("Si", 28.086);
  mymap.set("P", 30.974);
  mymap.set("S", 32.065);
  mymap.set("Cl", 35.453);
  mymap.set("Ar", 39.948);
  mymap.set("K", 39.098);
  mymap.set("Ca", 40.078);
  mymap.set("Sc", 44.956);
  mymap.set("Ti", 47.867);
  mymap.set("V", 50.942);
  mymap.set("Cr", 51.996);
  mymap.set("Mn", 54.938);
  mymap.set("Fe", 55.845);
  mymap.set("Co", 58.933);
  mymap.set("Ni", 58.693);
  mymap.set("Cu", 63.546);
  mymap.set("Zn", 65.38);
  mymap.set("Ga", 69.723);
  mymap.set("Ge", 72.64);
  mymap.set("As", 74.922);
  mymap.set("Se", 78.96);
  mymap.set("Br", 79.904);
  mymap.set("Kr", 83.798);
  mymap.set("Rb", 85.468);
  mymap.set("Sr", 87.62);
  mymap.set("Y", 89.906);
  mymap.set("Zr", 91.224);
  mymap.set("Nb", 92.906);
  mymap.set("Mo", 95.96);
  mymap.set("Tc", 98);
  mymap.set("Ru", 101.07);
  mymap.set("Rh", 102.91);
  mymap.set("Pd", 106.42);
  mymap.set("Ag", 107.87);
  mymap.set("Cd", 112.41);
  mymap.set("In", 114.82);
  mymap.set("Sn", 118.71);
  mymap.set("Sb", 121.76);
  mymap.set("Te", 127.6);
  mymap.set("I", 126.9);
  mymap.set("Xe", 131.29);
  mymap.set("Cs", 132.91);
  mymap.set("Ba", 137.33);
  mymap.set("La", 138.91);
  mymap.set("Ce", 140.12);
  mymap.set("Pr", 140.91);
  mymap.set("Nd", 144.24);
  mymap.set("Pm", 145);
  mymap.set("Sm", 150.36);
  mymap.set("Eu", 151.96);
  mymap.set("Gd", 157.25);
  mymap.set("Tb", 158.93);
  mymap.set("Dy", 162.5);
  mymap.set("Ho", 164.93);
  mymap.set("Er", 167.26);
  mymap.set("Tm", 168.93);
  mymap.set("Yb", 173.05);
  mymap.set("Lu", 174.97);
  mymap.set("Hf", 178.49);
  mymap.set("Ta", 180.95);
  mymap.set("W", 183.84);
  mymap.set("Re", 186.21);
  mymap.set("Os", 190.23);
  mymap.set("Ir", 192.22);
  mymap.set("Pt", 195.08);
  mymap.set("Au", 196.97);
  mymap.set("Hg", 200.59);
  mymap.set("Tl", 204.38);
  mymap.set("Pb", 207.2);
  mymap.set("Bi", 208.98);
  mymap.set("Po", 209);
  mymap.set("At", 210);
  mymap.set("Rn", 222);
  mymap.set("Fr", 223);
  mymap.set("Ra", 226);
  mymap.set("Ac", 227);
  mymap.set("Th", 232.04);
  mymap.set("Pa", 231.04);
  mymap.set("U", 238.03);
  mymap.set("Np", 237);
  mymap.set("Pu", 244);
  mymap.set("Am", 243);
  mymap.set("Cm", 247);
  mymap.set("Bk", 247);
  mymap.set("Cf", 251);
  mymap.set("Es", 252);
  mymap.set("Fm", 257);
  mymap.set("Md", 258);
  mymap.set("No", 259);
  mymap.set("Lr", 262);
  mymap.set("Rf", 267);
  mymap.set("Db", 268);
  mymap.set("Sg", 271);
  mymap.set("Bh", 272);
  mymap.set("Hs", 277);
  mymap.set("Mt", 276);
  mymap.set("Ds", 281);
  mymap.set("Rg", 280);
  mymap.set("Cn", 285);
  mymap.set("Fl", 287);
  mymap.set("Lv", 291);

  var name = [];
  var num = [];
  var mm = 0;
  var m = 0;
  var output = 0;
  var temp1;
  var temp2;
  var temp3;
  var i = 0;
  var ii = 0;
  if (parameter1 != null) {
    if (parameter1.length == 1) {
      name.push(parameter1);
      num.push(1);
    } else {
      for (i = 0; i < parameter1.length; i++) {
        temp1 = parameter1.charAt(i);

        if (/[A-Z]/.test(temp1) && i != 0) {
          temp2 = parameter1.charAt(i - 1);
          if (/[A-Z]/.test(temp2)) {
            num.push(1);
          }
          name.push(temp1);
        } else if (/[a-z]/.test(temp1)) {
          ii = 2;
          temp2 = name.pop();
          name.push(temp2 + temp1);
        } else if (!isNaN(temp1)) {
          ii++;
          temp2 = parameter1.charAt(i - 1);
          if (!isNaN(temp2)) {
            temp3 = num.pop();
            num.push(temp3 + temp1);
          } else {
            num.push(temp1);
          }
        } else {
          name.push(temp1);
        }
      }
    }
    if (isNaN(parameter1.charAt(parameter1.length - 1))) {
      num.push(1);
    }
    for (var i = 0; i < name.length; i++) {
      m = mymap.get(name[i]);
      mm = mm + num[i] * m;
    }
    if (parameter3 == 0) {
      //gram->mole
      console.log("line 164");
      output = parameter2 / mm;
    } //mole->gram
    else if (parameter2 == 0) {
      console.log("line 168");
      output = parameter3 * mm;
    } else if (parameter3 == 0 && parameter2 == 0) {
      output = -1;
    }
    return (
      <View style={styles.input}>
        <Text>{output}</Text>
      </View>
    );
  } else {
    return <View></View>;
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2db53b",
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
    height: 50,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
});
