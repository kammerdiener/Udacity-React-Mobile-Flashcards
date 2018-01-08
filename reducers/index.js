import {RECEIVE_DECKS, ADD_DECK, UPDATE_DECK} from '../actions'

const initState = {
  Test1: {
    title: 'Test1',
    cards: []
  },
  Test2: {
    title: 'Test2',
    cards: []
  },
  Test3: {
    title: 'Test3',
    cards: []
  }
};

function decks(state = initState, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      };
    case UPDATE_DECK:
      return {
        ...state,
        ...action.deck
      };
    default:
      return state
  }
}

export default decks;