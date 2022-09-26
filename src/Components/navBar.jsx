import React from 'react';
import RangeField from './form/rangeField';
import TextField from './form/textField';

function NavBar({ onChange, outputParams }) {
  const isNumber = (num) => {
    console.log(num);
    return typeof num === 'number' && !isNaN(num);
  };
  return (
    <div className="d-flex pt-3">
      <div>
        <button
          onClick={() => onChange({ name: 'nationalities', value: 'fr' })}
          className={
            outputParams.nationalities === 'fr' ? 'btn btn-dark me-3' : 'btn bg-light btn me-3'
          }>
          France
        </button>
        <button
          onClick={() => onChange({ name: 'nationalities', value: 'ir' })}
          className={
            outputParams.nationalities === 'ir' ? 'btn btn-dark me-3' : 'btn bg-light me-3'
          }>
          Iran
        </button>
        <button
          onClick={() => onChange({ name: 'nationalities', value: 'tr' })}
          className={
            outputParams.nationalities === 'tr' ? 'btn btn-dark me-3' : 'btn bg-light me-3'
          }>
          Turkey
        </button>
      </div>
      <div>seed</div>
      <TextField onChange={onChange} name="seed" value={outputParams.seed} />
      <div>
        <RangeField onChange={onChange} value={outputParams.range} />
      </div>
    </div>
  );
}

export default NavBar;
