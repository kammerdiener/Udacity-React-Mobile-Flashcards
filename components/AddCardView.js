import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { updateDeck } from '../actions';

class AddCardView extends React.Component {
  state = {
    title: '',
    question: '',
    answer: ''
  };

  componentDidMount() {
    const { title } = this.props.navigation.state.params;
    this.setState({ title });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text/>
        <Text/>
        <Text/>
        <Text/>
        <Text/><Text/>

        <Text>Question:</Text>
        <TextInput style={styles.textbox}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />

        <Text>Answer:</Text>
        <TextInput style={styles.textbox}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />

        <TouchableOpacity onPress={() => {
          this.props[this.state.title].cards.push({ question: this.state.question, answer: this.state.answer });
          this.props.dispatch(updateDeck({ [this.state.title]: this.props[this.state.title] }))
          return this.props.navigation.navigate(
                              'IndividualDeckView', { deck: this.props[this.state.title] });
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



