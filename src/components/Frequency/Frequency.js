// Модули
import React, { useState, useEffect } from 'react';
import { loremIpsum } from 'lorem-ipsum';

// Компоненты
import FrequencyStatistic from './FrequencyStatistic';
import FrequencyForm from './FrequencyForm';

const Frequency = () => {
  const [text, setText] = useState('');
  const [letters, setLeters] = useState([]);
  const [changeSort, setChangeSort] = useState(false);

  useEffect(() => {
    const textLocalStorage = localStorage.getItem('text', text);
    setText(textLocalStorage);
    const addIdInLettersObjects = hadleChangeTextArea(
      textLocalStorage.replace(/[^a-zA-Z0-9]/g, ''),
    );

    hadleChange(
      textLocalStorage.replace(/[^a-zA-Z0-9]/g, ''),
      addIdInLettersObjects,
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('text', text);
  }, [letters]);

  const getUniqueListBy = (arr, key) => [
    ...new Map(arr.map(item => [item[key], item])).values(),
  ];

  const createLettersObjects = currentLetters => {
    const result = currentLetters.reduce((prevLetter, currentLetter) => {
      const countLetter = currentLetters.filter(
        letter => letter === currentLetter,
      ).length;
      const procentLetter = (
        (countLetter * 100) /
        currentLetters.length
      ).toFixed(1);

      return [
        ...prevLetter,
        {
          symbol: currentLetter,
          count: countLetter,
          procent: procentLetter,
        },
      ];
    }, []);

    return getUniqueListBy(result, 'symbol');
  };

  const hadleChangeTextArea = cleanText => {
    const currentLettersObjects = createLettersObjects(cleanText.split(''));

    return currentLettersObjects.map((letter, id) => ({
      id: id + 1,
      ...letter,
    }));
  };

  const hadleChangeRight = e => {
    setText(e.target.value);
    const cleanText = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
    const addIdInLettersObjects = hadleChangeTextArea(cleanText);

    hadleChange(cleanText, addIdInLettersObjects);
  };

  const hadleChange = (cleanText, addIdInLettersObjects) => {
    setLeters(prevSymbols => [...addIdInLettersObjects]);
    handleSort('count')
    setChangeSort(false);
  };

  const handleSort = sort => {
    setChangeSort(prevState => !prevState);

    if (changeSort) {
      return setLeters(
        letters.sort((letter, nextLetter) => letter[sort] - nextLetter[sort]),
      );
    } else {
      return setLeters(
        letters.sort((letter, nextLetter) => nextLetter[sort] - letter[sort]),
      );
    }
  };

  const handleSortByLetter = () => {
    setChangeSort(prevState => !prevState);

    if (changeSort) {
      letters.sort((letter, nextLetter) => {
        if (letter.symbol < nextLetter.symbol) {
          return -1;
        }
        if (letter.symbol > nextLetter.symbol) {
          return 1;
        }
      });
    } else {
      letters.sort((letter, nextLetter) => {
        if (letter.symbol < nextLetter.symbol) {
          return 1;
        }
        if (letter.symbol > nextLetter.symbol) {
          return -1;
        }
      });
    }
  };

  const handleAddRandomText = () => {
    const cleanText = loremIpsum();
    setText(cleanText);
    const addIdInLettersObjects = hadleChangeTextArea(
      cleanText.replace(/[^a-zA-Z0-9]/g, ''),
    );

    hadleChange(cleanText.replace(/[^a-zA-Z0-9]/g, ''), addIdInLettersObjects);
  };

  return (
    <>
      <FrequencyForm
        text={text}
        hadleChangeRight={hadleChangeRight}
        handleAddRandomText={handleAddRandomText}
      />
      {letters.length !== 0 && (
        <FrequencyStatistic
          letters={letters}
          handleSort={handleSort}
          handleSortByLetter={handleSortByLetter}
        />
      )}
    </>
  );
};

export default Frequency;
