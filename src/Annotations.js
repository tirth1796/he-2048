import React, { useState, useMemo, useCallback } from 'react';
import { Word } from './components/Word';
import { Button } from './components/Button';

export const Annotations = ({ paragraph }) => {
  // Splits the paragraph into an array of words
  const words = useMemo(() => paragraph.split(' '), [paragraph]);

  // TODO: Implement This
  const onWordClick = useCallback(() => {}, []);

  // TODO: Implement This
  const onAnnotatePositiveClick = useCallback(() => {}, []);

  // TODO: Implement This
  const onAnnotateNegativeClick = useCallback(() => {}, []);

  // TODO: Implement This
  const onResetAnnotateClick = useCallback(() => {}, []);

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
            onClick={onWordClick}
            // TODO: Implement this
            selected={false}
            // TODO: Implement this
            intent="default"
          />
        ))}
      </div>

      <div
        data-testid="menu"
        className="flex-1 flex flex-wrap justify-center gap-2"
      >
        <Button
          label="Annotate Positive"
          onClick={onAnnotatePositiveClick}
          intent="positive"
          // TODO: Implement this
          disabled={false}
          // TODO: Implement this
          selected={false}
        />
        <Button
          label="Annotate Negative"
          onClick={onAnnotateNegativeClick}
          intent="negative"
          // TODO: Implement this
          disabled={false}
          // TODO: Implement this
          selected={false}
        />
        <Button
          label="Reset Annotation"
          onClick={onResetAnnotateClick}
          // TODO: Implement this
          disabled={false}
        />
      </div>
    </div>
  );
};
