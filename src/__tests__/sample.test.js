import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { Annotations } from '../Annotations';

const paragraph =
  'The customer service at the restaurant was prompt and friendly, but the food took too long to arrive and was not well-cooked. The ambiance was pleasant, though the seating arrangement was somewhat cramped.';

const selectWord = (word, isMetaKey = false) =>
  fireEvent.click(screen.getByText(word), { metaKey: isMetaKey });

const selectWords = (words) => {
  words.forEach(async (word) => {
    const wordEl = screen.getByText(word);
    fireEvent.click(wordEl, { metaKey: true });
  });
};

const expectWordsSelected = (words) =>
  words.forEach((word) => {
    expect(screen.getByText(word).selected).toBeTruthy();
  });

const expectWordsUnselected = (words) =>
  words.forEach((word) => expect(screen.getByText(word).selected).toBeFalsy());

const expectWordsIntent = (words, intent) =>
  words.forEach((word) => {
    expect(screen.getByText(word)).toHaveClass(`intent-${intent}`);
  });

const words = ['customer', 'service', 'prompt', 'friendly,'];
const negativeWords = ['not', 'well-cooked.'];

test('should select multiple words', () => {
  render(<Annotations paragraph={paragraph} />);
  selectWords(words);
  expectWordsSelected(words);
  screen.getByTestId('menu');

  selectWord(negativeWords[0]);

  expectWordsUnselected(words);
  expectWordsSelected([negativeWords[0]]);

  selectWord(negativeWords[1]);

  expectWordsSelected([negativeWords[1]]);
  expectWordsUnselected([negativeWords[0]]);
});

test('should unselect words on escape click', () => {
  render(<Annotations paragraph={paragraph} />);
  selectWords(words);
  expectWordsSelected(words);
  screen.getByTestId('menu');

  userEvent.keyboard('{Escape}');

  expectWordsUnselected(words);
  const menu = screen.queryByTestId('menu');
  expect(menu).not.toBeInTheDocument();
});

test('annotates selected words as positive', () => {
  render(<Annotations paragraph={paragraph} />);
  const words = ['customer', 'service', 'prompt', 'friendly,'];
  selectWords(words);
  expectWordsIntent(words, 'default');

  fireEvent.click(screen.getByText('Annotate Positive'));
  expectWordsIntent(words, 'positive');
});

test('annotates selected words with correct intent', () => {
  render(<Annotations paragraph={paragraph} />);
  selectWords(words);
  expectWordsIntent(words, 'default');

  fireEvent.click(screen.getByText('Annotate Positive'));
  expectWordsIntent(words, 'positive');

  fireEvent.click(screen.getByText('Annotate Negative'));
  expectWordsIntent(words, 'negative');

  fireEvent.click(screen.getByText('Reset Annotation'));
  expectWordsIntent(words, 'default');
  expectWordsSelected(words);
});

test('should unselect annotation on selecting any other word', () => {
  render(<Annotations paragraph={paragraph} />);
  selectWords(words);
  fireEvent.click(screen.getByText('Annotate Positive'));
  expectWordsSelected(words);

  selectWords(negativeWords);
  expectWordsUnselected(words);
  expectWordsSelected(negativeWords);
});

test('should unselect word(s) on selecting any annotation', () => {
  render(<Annotations paragraph={paragraph} />);
  selectWords(words);
  fireEvent.click(screen.getByText('Annotate Positive'));

  selectWords(negativeWords);
  expectWordsSelected(negativeWords);

  selectWord(words[0], true);
  expectWordsUnselected(negativeWords);
  expectWordsSelected(words);
});

test('reset works correctly', () => {
  render(<Annotations paragraph={paragraph} />);
  selectWords(words);
  expect(screen.getByText('Reset Annotation').disabled).toBeTruthy();

  fireEvent.click(screen.getByText('Annotate Positive'));
  expectWordsIntent(words, 'positive');

  fireEvent.click(screen.getByText('Reset Annotation'));
  expectWordsIntent(words, 'default');
  expectWordsSelected(words);

  fireEvent.click(screen.getByText('Annotate Negative'));
  expectWordsIntent(words, 'negative');

  expect(screen.getByText('Reset Annotation').disabled).toBeFalsy();
  fireEvent.click(screen.getByText('Reset Annotation'));
  expect(screen.getByText('Reset Annotation').disabled).toBeTruthy();
  expectWordsIntent(words, 'default');
  expectWordsSelected(words);
});

test('correct intent button is in selected state', () => {
  render(<Annotations paragraph={paragraph} />);
  selectWords(words);
  fireEvent.click(screen.getByText('Annotate Positive'));

  selectWords(negativeWords);
  fireEvent.click(screen.getByText('Annotate Negative'));

  expectWordsIntent(words, 'positive');
  expectWordsIntent(negativeWords, 'negative');

  selectWord(words[1]);
  expect(screen.getByText('Annotate Positive').selected).toBeTruthy();
  expect(screen.getByText('Annotate Negative').selected).toBeFalsy();

  selectWord(negativeWords[0]);
  expect(screen.getByText('Annotate Positive').selected).toBeFalsy();
  expect(screen.getByText('Annotate Negative').selected).toBeTruthy();
});

test('selects group of annotated words and allows changing their annotation', () => {
  render(<Annotations paragraph={paragraph} />);
  selectWords(words);
  fireEvent.click(screen.getByText('Annotate Positive'));
  expect(screen.getByText('Annotate Positive').selected).toBeTruthy();
  expect(screen.getByText('Annotate Negative').selected).toBeFalsy();
  expectWordsIntent(words, 'positive');

  fireEvent.click(screen.getByText('Annotate Negative'));
  expect(screen.getByText('Annotate Positive').selected).toBeFalsy();
  expect(screen.getByText('Annotate Negative').selected).toBeTruthy();
  expectWordsIntent(words, 'negative');
});
