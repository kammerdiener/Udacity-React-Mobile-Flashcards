import { AsyncStorage } from 'react-native';

const DECK_STORAGE_KEY = 'udacicards:deck';


export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(JSON.parse);
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      return results[id];
    });
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      cards: []
    }
  }))
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const decks = JSON.parse(results);
      decks[title].cards.push(card);
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
    });
}