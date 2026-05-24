import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RoundedBox from './RoundedBox.jsx'
import Button from './Button.jsx'
import FlexRow from './FlexRow.jsx' 
import TaskCard from './TaskCard.jsx';
import Input from './Input.jsx';
import FlexColumn from './FlexColumn.jsx';

import {
  clearCompletedTasks,
  selectTasksByName,
} from '../tasksSlice.js'

const RoundedCard = ({ title, children }) => {
  const styles = {
    card: {
      borderRadius: '12px',
      border: '1px solid #e0e0e0',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      width: '100%',
      height: '100%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '800px',
    },
    header: {
      padding: '12px 16px',
      fontWeight: 'bold'
    },
    content: {
      padding: '5px',
      display: 'flex',
      flexDirection: 'column',
      gap: '3px'
    },
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filterPattern, setFilterPattern] = useState('');
  const tasks = useSelector((state) => selectTasksByName(state, filterPattern));

  const toAdd = () => {
    navigate('/addTask');
  };

  const clearTask = () => {
    dispatch(clearCompletedTasks());
  };

  return (
    <div style={styles.card}>
      <RoundedBox>
        <FlexRow expandIndex={0} gap="16px">
          {title && <div style={styles.input}>{title}</div>}
            <FlexColumn expandIndex={2} gap="16px">
              <Button backgroundColor='#2cce17' onClick={toAdd}> 
                Добавить
              </Button>
              <Button backgroundColor='#ce1717' onClick={clearTask}> 
                Очистить
              </Button>
            </FlexColumn>
        </FlexRow>
      </RoundedBox>
      <FlexRow expandIndex={0} gap="8px" content_margin='20px 20px'>
        <Input value={filterPattern} 
					onChange={(e) => setFilterPattern(e.target.value)} placeholder="Поиск по названию">
        </Input>
      </FlexRow>
      <div style={styles.content}>
        {children}
        {tasks.map((item) => (
          <TaskCard key={item.id} task={item}/>
        ))}
      </div>
    </div>
  );
};

export default RoundedCard;
