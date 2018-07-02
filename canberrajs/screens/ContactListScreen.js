import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default class ContactListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Contacts",
    headerRight: (
      <Button
        title="Add"
        onPress={() => navigation.navigate("AddContact")}
        color="#a41034"
      />
    )
  });

  state = {
    showContacts: true
  };

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  };

  handleSelectContact = contact => {
    this.props.navigation.push("ContactDetails", contact);
  };



  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.props.screenProps.contacts.map(contact => (
            <Row onSelectContact={this.handleSelectContact} {...contact} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const Row = props => (
  <TouchableOpacity
    style={styles.row}
    onPress={() => props.onSelectContact(props)}
  >
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: { padding: 20 }
});
