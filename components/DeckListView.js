import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class DeckListView extends React.Component {

  componentDidMount() {
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
        <TouchableOpacity style={styles.box}
                          onPress={() => {
                              return this.props.navigation.navigate(
                                'CreateDeckView');
                          }}>
          <Text>Create A New Deck</Text>
        </TouchableOpacity>
        {renderList(this.props.decks, this.props.navigation)}
      </View>
    );
  }
}

const renderList = (decks, navigation) => {
  const ids = Object.keys(decks);
  return ids.map((id) => {
    return (
        <TouchableOpacity style={styles.box}  key={id}
                          onPress={() => {
                              return navigation.navigate(
                                'IndividualDeckView',
                                { deck: decks[id] });
                          }}>
          <Text> { `${decks[id].title} ${decks[id].cards.length}`} </Text>
        </TouchableOpacity>
    )
  });
};

const mapStateToProps = (state, ownProps) => {
  return {
    decks: state,
    ...ownProps
  }
};


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

export default connect(mapStateToProps)(DeckListView);
