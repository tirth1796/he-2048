import React, { useState, useMemo, useCallback } from 'react';
import { Word } from './components/Word';
import { Button } from './components/Button';

export const Annotations = ({ paragraph }) => {
  // Splits the paragraph into an array of words
  const words = useMemo(() => paragraph.split(' '), [paragraph]);

  // TODO: Implement All Callbacks
  const onWordClick = useCallback(() => {}, []);
  const onAnnotatePositiveClick = useCallback(() => {}, []);
  const onAnnotateNegativeClick = useCallback(() => {}, []);
  const onResetAnnotateClick = useCallback(() => {}, []);

  return (
    <div className="w-full flex flex-col gap-4">
      <div
        data-testid="paragraph"
        className="flex-1 flex flex-wrap p-4 border-gray-200 rounded-xl border border-solid shadow-md"
      >
        {words.map((word, index) => (
          // TODO: These should be rendered with correct intent, selection and click handling
          <Word word={word} key={index} onClick={onWordClick} />
        ))}
      </div>

      {/* TODO: Menu should be visible only when words are selected */}
      <div
        data-testid="menu"
        className="flex-1 flex flex-wrap justify-center gap-2"
      >
        {/* TODO: button should have correct selection and click handling */}
        <Button
          label="Annotate Positive"
          onClick={onAnnotatePositiveClick}
          intent="positive"
          // TODO: Implement this
          disabled={false}
          // TODO: Implement this
          selected={false}
        />
        {/* TODO: button should have correct selection and click handling */}
        <Button
          label="Annotate Negative"
          onClick={onAnnotateNegativeClick}
          intent="negative"
          // TODO: Implement this
          disabled={false}
          // TODO: Implement this
          selected={false}
        />
        {/* TODO: button should have correct disabled and click handling */}
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
