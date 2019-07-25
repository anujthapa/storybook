import React from "react";

const Button = ({ onsubmit, classname, value, content,onclick }) => {
  return (
    <div>
      <button className={classname} onSubmit={onsubmit} onClick={onclick} value={value}>
        {content}
      </button>
    </div>
  );
};
export default Button;
