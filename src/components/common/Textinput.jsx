import React from "react";

const Textinput = ({
  type,
  name,
  onclick,
  onhover,
  placeholder,
  value,
  onchange
}) => {
  return (
    <div className="text-input">
      <input
        type={type}
        name={name}
        onClick={onclick}
        onHover={onhover}
        onChange={onchange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Textinput;
