const INTENT_VS_CLASSNAME = {
  positive: {
    default: 'bg-green-200',
    selected: 'selected bg-green-500',
  },

  negative: {
    default: 'bg-red-200',
    selected: 'bg-red-500',
  },

  default: {
    default: 'hover:bg-yellow-50',
    selected: 'bg-yellow-100',
  },
};

export const Word = ({ word, onClick, selected, intent = 'default' }) => {
  return (
    <span
      data-testid="word"
      selected={selected}
      className={`intent-${intent} px-0.5 cursor-pointer ${
        INTENT_VS_CLASSNAME[intent][selected ? 'selected' : 'default']
      }`}
      onClick={onClick}
    >
      {word}
    </span>
  );
};
