import React from 'react';
import { Annotations } from './Annotations';

const PARAGRAPH =
  "The customer service at the restaurant was prompt and friendly, but the food took too long to arrive and was not well-cooked. The ambiance was pleasant, though the seating arrangement was somewhat cramped.";

export default function App() {
  return (
    <div className="flex flex-col items-center gap-8 p-4 max-w-[1280px] mx-auto">
      <Annotations paragraph={PARAGRAPH} />
    </div>
  );
}
