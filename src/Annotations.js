import React, { useState, useMemo } from 'react';
import { Word } from './components/Word';
import { Button } from './components/Button';

export const Annotations = ({ paragraph }) => {
  // Splits the paragraph into an array of words
  const words = useMemo(() => paragraph.split(' '), [paragraph]);

  return (
    <div className="w-full flex flex-col gap-4">
      <div
        data-testid="paragraph"
        className="flex-1 flex flex-wrap p-4 border-gray-200 rounded-xl border border-solid shadow-md"
      >
        {words.map((word, index) => (
          // TODO: These should be rendered with correct intent, selection and click handling
          <Word word={word} key={index} />
        ))}
      </div>

      {/* TODO: Menu should be visible only when words are selected */}
      <div
        data-testid="menu"
        className="flex-1 flex flex-wrap justify-center gap-2"
      >
        {/* TODO: button should have correct selection and click handling */}
        <Button label="Annotate Positive" intent="positive" />
        {/* TODO: button should have correct selection and click handling */}
        <Button label="Annotate Negative" intent="negative" />
        {/* TODO: button should have correct disabled and click handling */}
        <Button label="Reset Annotation" />
      </div>
    </div>
  );
};
