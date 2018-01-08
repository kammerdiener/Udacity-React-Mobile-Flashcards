import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';

class AddCardView extends React.Component {
  state = {
    title: '',
  };

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text/>
        <Text/>
        <Text/>
        <Text/>
        <Text/><Text/>

        <Text>Title:</Text>
        <TextInput style={styles.textbox}
                   onChangeText={(title) => this.setState({ title })}
                   value={this.state.title}
        />

        <TouchableOpacity onPress={() => {
          this.props.dispatch(addDeck({ [this.state.title]: { title: this.state.title, cards:[]} }));
          return this.props.navigation.navigate(
                              'IndividualDeckView', { deck: { title: this.state.title, cards:[]}});
        }} style={styles.box}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  },
  textbox: {
    height: 50,
    width: 250,
    backgroundColor: '#e8e8e8',
    margin: 10,
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ...ownProps
  };
};

export default connect(mapStateToProps)(AddCardView);



