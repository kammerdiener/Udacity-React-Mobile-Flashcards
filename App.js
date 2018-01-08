import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import DeckListView from './components/DeckListView';
import IndividualDeckView from './components/IndividualDeckView';
import AddCardView from './components/AddCardView';
import QuizView from './components/QuizView';
import QuizCalculations from './components/QuizCalculations';
import CreateDeckView from './components/CreateDeckView';
import { StackNavigator } from 'react-navigation'
import { Constants } from 'expo';
import { setLocalNotification } from './helpers/notifications'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckListView,
  },
  IndividualDeckView: {
    screen: IndividualDeckView,
  },
  AddCardView: {
    screen: AddCardView
  },
  QuizView: {
    screen: QuizView
  },
  QuizCalculations: {
    screen: QuizCalculations
  },
  CreateDeckView: {
    screen: CreateDeckView
  }
});



export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <UdaciStatusBar backgroundColor='#292477' barStyle="light-content" />
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}
