import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class QuizCalculations extends React.Component {

  state = {
    score: 0,
    deck: {}
  };

  componentDidMount() {
    const { score, deck } = this.props.navigation.state.params;
    this.setState({ score, deck });
  }


  render() {
    return (
      <View>
        <Text/>
        <Text/>
        <Text/>
        <Text/>
        <Text/>
        <Text/>
        <Text>Score</Text>
        <Text>Number of questions answered correctly: { this.state.score }</Text>
        <TouchableOpacity style={styles.box}
                          onPress={() => {
                            return this.props.navigation.navigate(
                              'QuizView', { deck: this.state.deck});
                          }}>
          <Text>Retry Quiz</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.box}
                          onPress={() => {
                            return this.props.navigation.navigate(
                              'IndividualDeckView',
                              { deck: this.state.deck });
                          }}>
          <Text>Go Back To Deck View</Text>
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
  }
});


export default QuizCalculations;



