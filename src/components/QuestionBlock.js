import React from 'react';
import Question from './Question';

const QuestionBlock = ({
  data, path, selected, select, category,
}) => {
  const questions = data.map(({ text, image, index }) => (
    <Question text={text} image={image} path={path} selected={selected} key={index} index={index} select={select} category={category} />
  ));
  return (
    <div className="question-block">
      {questions}
    </div>
  );
};

export default QuestionBlock;

