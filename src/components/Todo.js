import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "react-native-elements";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      text: ""
    };
  }

  addToList = () => {
    // return <FormLabel>To Do:</FormLabel>;
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.TextInput}
          className=""
          placeholder="Add To Do..."
        />
        <Button title={"To Do"} />
      </View>
    );
  }
}

export default Todo;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 40,
    marginBottom: 10
  },
  TextInput: {
    flex: 1,
    height: 40,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 2,
    marginRight: 10
  },
  button: {
    flex: 2
  }
});
