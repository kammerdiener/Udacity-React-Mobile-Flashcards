import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class DeckListView extends React.Component {

  state = {
    deck: {
      title: 'undefined',
      cards: []
    }
  };

  componentDidMount() {
    const { deck } = this.props.navigation.state.params;
    this.setState({deck});
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
        <Text/>
        <Text/>
        <Text/>
        <Text>Title: {this.state.deck.title}</Text>
        <Text>Cards: {this.state.deck.cards.length }</Text>
        <TouchableOpacity style={styles.box}
                          onPress={() => {
                            return this.props.navigation.navigate(
                              'QuizView',
                              { deck: this.state.deck });
                          }}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}
          onPress={() => {
            return this.props.navigation.navigate(
              'AddCardView',
              { title: this.state.deck.title });
          }}>
          <Text>Add Card</Text>
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

export default DeckListView;



