const INTENT_VS_CLASSNAME = {
  positive: {
    default: 'text-white bg-green-500 hover:bg-green-600',
    selected: 'selected text-white bg-green-900 hover:bg-green-900',
  },

  negative: {
    default: 'text-white bg-red-500 hover:bg-red-600',
    selected: 'selected text-white bg-red-900 hover:bg-red-900',
  },

  default: {
    default:
      'text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100',
    selected: '',
  },
};

export const Button = ({
  label,
  onClick,
  intent = 'default',
  selected,
  disabled,
}) => {
  const intentClassName = `${INTENT_VS_CLASSNAME[intent].default} ${
    selected ? INTENT_VS_CLASSNAME[intent].selected : ''
  }`;
  return (
    <button
      onClick={onClick}
      className={`py-1 px-3 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500 ${intentClassName}`}
      disabled={disabled}
      selected={selected}
    >
      {label}
    </button>
  );
};
