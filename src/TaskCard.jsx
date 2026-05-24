import React from 'react';
import { useDispatch } from 'react-redux';

import RoundedBox from './RoundedBox';
import FlexRow from './FlexRow';
import Button from './Button';
import { toggleTaskStatus } from '../tasksSlice.js';

const TaskCard = ({ task, className }) => {
  const dispatch = useDispatch();

  const color = task.state ? '#2cce17' : '#ce1717';

  const box = {
    width: '50px',
    height: '50px',
  };

  const reState = () => {
    dispatch(toggleTaskStatus(task.id));
  };

  return (
    <RoundedBox className={className}>
      <FlexRow expandIndex={1} gap="8px">
        <div>{task.date}</div>
        <div>{task.name}</div>
        <Button backgroundColor={color} onClick={reState} style={box}/>
      </FlexRow>
    </RoundedBox>
  );
};

export default TaskCard;
