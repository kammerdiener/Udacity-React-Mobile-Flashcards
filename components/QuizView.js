import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class AddCardView extends React.Component {
  state = {
    deck: {
      title: 'Test1',
      cards: [
        {
          question: 'test',
          answer: 'test'
        },
        {
          question: 'test1',
          answer: 'test1'
        },
        {
          question: 'test2',
          answer: 'test2'
        },
        {
          question: 'test3',
          answer: 'test3'
        }
      ]
    },
    count: 0,
    score: 0,
    showAnswer: false
  };

  score = 0;

  componentDidMount() {
    const { deck } = this.props.navigation.state.params;
    this.setState({deck});
  }

  onIncorrect = () => {
    if (this.state.count === (this.state.deck.cards.length - 1)) {
      return this.props.navigation.navigate(
        'QuizCalculations',
        { score: this.state.score, deck: this.state.deck});
    } else {
      const newCount = ++this.state.count;
      this.setState({ count: newCount });
    }
  };


  onCorrect() {
    this.score = this.score + 1;
    if (this.state.count === (this.state.deck.cards.length - 1)) {
      return this.props.navigation.navigate(
        'QuizCalculations',
        { score: this.score, deck: this.state.deck});
    } else {
      const newCount = ++this.state.count;
      this.setState({ count: newCount });
    }
  }

  renderAnswer() {
    if (this.state.showAnswer) {
      return (
        <Text>{ this.state.deck.cards[this.state.count].answer }</Text>
      )
    }
  }

  render() {
    console.log(this.state);
    if (this.state.deck.cards.length > 0) {
      return (
        <View>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          <Text/>
          <Text>{`${this.state.count + 1}/${this.state.deck.cards.length}` }</Text>
          <Text>{ this.state.deck.cards[this.state.count].question }</Text>
          {this.renderAnswer()}
          <TouchableOpacity onPress={() => this.setState({ showAnswer: true})} style={styles.box}>
            <Text>Show Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onCorrect()} style={styles.box}>
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onIncorrect()} style={styles.box}>
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View>
          <Text>No Cards in the deck</Text>
        </View>
      )
    }
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

export default AddCardView;



