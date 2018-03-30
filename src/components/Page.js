import React from 'react';
import Title from './Title';
import QuestionBlock from './QuestionBlock';

const Page = ({
  data, category, location: { pathname }, selected, select,
}) => {
  const path = parseInt(pathname.replace(/^\/+|\/+$/g, ''), 10);

  const titleText = (() => {
    switch (category) {
      case 'shoes':
        return 'What is the de facto footwear of your apocalypse?';
      case 'weapons':
        return 'Choose your weapon of the apocalypse';
      case 'enemies':
        return 'Enemies: who rules at world\'s end?';
      case 'currency':
        return 'What is the currency of your new world?';
      case 'music':
        return 'Which musician scored the soundtrack to your apocalypse?';
      case 'companion':
        return 'Who is your best and only friend in this God-forsaken place?';
      default:
        return '';
    }
  })(category);

  return (
    <div className="page">
      <Title title={titleText} />
      <QuestionBlock data={data} path={path} selected={selected} select={select} category={category} />
    </div>
  );
};

export default Page;
