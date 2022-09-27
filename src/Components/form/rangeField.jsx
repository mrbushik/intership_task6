import React from 'react';

const RangeField = ({ onChange, value }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div>
      <input
        type="range"
        className="custom-range"
        min="0"
        max="10"
        step="0.25"
        name="range"
        value={value}
        onChange={handleChange}
      />
      <h4>Количество ошибок {value}</h4>
    </div>
  );
};

export default RangeField;
