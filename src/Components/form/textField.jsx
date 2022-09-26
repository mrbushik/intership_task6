import React from 'react';

function TextField({ name, value, onChange }) {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className="mb-1">
      <div className="input-group has-validation">
        <input
          type="number"
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={'form-control'}
        />
      </div>
    </div>
  );
}

export default TextField;
