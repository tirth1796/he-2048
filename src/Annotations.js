import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Word } from './components/Word';
import { Button } from './components/Button';

export const Annotations = ({ paragraph }) => {
  const [selectedWordIndices, setSelectedWordIndices] = useState([]);

  const [annotationGroups, setAnnotationGroups] = useState([]);

  const currentAnnotationGroup = annotationGroups.find((group) =>
    group.words.includes(selectedWordIndices[0])
  );

  const currentIntent = currentAnnotationGroup?.intent;

  // Splits the paragraph into an array of words
  const words = useMemo(() => paragraph.split(' '), [paragraph]);

  const handleWordClick = (wordIndex, event) => {
    // If word is annotated, clicking it will select the entire annotation group
    const annotationGroup = annotationGroups.find((group) =>
      group.words.includes(wordIndex)
    );

    if (annotationGroup) {
      setSelectedWordIndices(annotationGroup.words);
      return;
    }

    // Command/Ctrl key enables multiple selection
    if (!currentAnnotationGroup && (event.metaKey || event.ctrlKey)) {
      setSelectedWordIndices((prevSelectedWords) => {
        if (prevSelectedWords.includes(wordIndex)) {
          return prevSelectedWords.filter((i) => i !== wordIndex);
        } else {
          return [...prevSelectedWords, wordIndex].sort((a, b) => a - b);
        }
      });
    } else {
      setSelectedWordIndices([wordIndex]);
    }
  };

  const annotate = (intent) => {
    setAnnotationGroups([
      ...annotationGroups.filter((g) => g !== currentAnnotationGroup),
      { words: selectedWordIndices, intent },
    ]);
  };

  const resetAnnotation = () => {
    setAnnotationGroups(
      annotationGroups.filter((g) => g !== currentAnnotationGroup)
    );
  };

  const onEscape = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        setSelectedWordIndices([]);
      }
    },
    [resetAnnotation]
  );

  useEffect(() => {
    document.addEventListener('keydown', onEscape, false);

    return () => {
      document.removeEventListener('keydown', onEscape, false);
    };
  }, [resetAnnotation]);

  return (
    <div className="w-full flex flex-col gap-4">
      <div
        data-testid="paragraph"
        className="flex-1 flex flex-wrap p-4 border-gray-200 rounded-xl border border-solid shadow-md"
      >
        {words.map((word, index) => (
          <Word
            word={word}
            key={index}
            selected={selectedWordIndices.includes(index)}
            intent={
              annotationGroups.find((group) => group.words.includes(index))
                ?.intent
            }
            onClick={(e) => handleWordClick(index, e)}
          />
        ))}
      </div>

      {selectedWordIndices.length ? (
        <div
          data-testid="menu"
          className="flex-1 flex flex-wrap justify-center gap-2"
        >
          <Button
            label="Annotate Positive"
            intent="positive"
            onClick={() => annotate('positive')}
            selected={currentIntent === 'positive'}
          />
          <Button
            label="Annotate Negative"
            intent="negative"
            onClick={() => annotate('negative')}
            selected={currentIntent === 'negative'}
          />
          <Button
            label="Reset Annotation"
            onClick={resetAnnotation}
            disabled={!currentIntent}
          />
        </div>
      ) : null}
    </div>
  );
};
