import React from 'react';
import { Link } from 'react-router-dom';

const Question = ({
  text, image, path, selected, select, index, category,
}) => {
  let classNames = 'card';
  if (selected === index) {
    classNames = 'card selected';
  } else if (selected) {
    classNames = 'card not-selected';
  }

  const onClick = () => {
    select(category, index);
  };

  return (
    <Link to={`/${path + 1}`} className={classNames} onClick={onClick}>
      <img src={image} alt={text} />
      <h2>{text}</h2>
    </Link>
  );
};

export default Question;
