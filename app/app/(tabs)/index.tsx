import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.texto}>HOME</Text>
        <TouchableOpacity onPress={toggleDarkMode}>MUDA TEMA</TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  main : {
    width: '90%' ,
    shadowColor : "#000" ,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    borderRadius: 15,
    padding: 20,
    backgroundColor : "#fff",
  },
  texto : {
    fontSize : 22
  }
})
