import React from "react";

const Button = ({ onsubmit, classname, value, content,onclick }) => {
  return (
    <React.Fragment>
      <button className={classname} onSubmit={onsubmit} onClick={onclick} value={value}>
        {content}
      </button>
    </React.Fragment>
  );
};
export default Button;
