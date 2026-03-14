import React from 'react';
import { useNavigate } from 'react-router-dom';

import RoundedBox from './RoundedBox.jsx'
import Button from './Button.jsx'
import FlexRow from './FlexRow.jsx' 
import TaskCard from './TaskCard.jsx';
import Input from './Input.jsx';

import {bd_clear, bd_filter, bd_get_items, bd_load, bd_save} from './database.js'
import FlexColumn from './FlexColumn.jsx';

const RoundedCard = ({ title, children }) => {
  const styles = {
    card: {
      borderRadius: '12px',
      border: '1px solid #e0e0e0',
      overflow: 'hidden',          // чтобы скругление применялось ко всем углам
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      width: '100%',
      height: '100%',
      margin: '0 auto', // центрирование
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
      gap: '3px'                  // вертикальные отступы между дочерними элементами
    },
  };

  const navigate = useNavigate();

  const toAdd = (() => {
    navigate('/addTask');
  });

  const clearTask = (() => {
    bd_clear();
    bd_save();
    setTasks(bd_get_items());
  });

  const [tasks, setTasks] = React.useState(bd_get_items())
  const [update, setUpdate] = React.useState(-1)
  const [filterPattern, getFilterPattern] =  React.useState("")

  React.useEffect(() => {
    bd_load()
    if(update == -1)
      setTasks(bd_get_items());
    setUpdate(bd_load());
  });

  const useFilter = (pattern)=>{
    if(pattern == "")
      setTasks(bd_get_items());
    else
      setTasks(bd_filter(item => item.name.toLowerCase().includes(pattern.toLowerCase())));

    getFilterPattern(pattern)
  }

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
					onChange={e => useFilter(e.target.value)} placeholder="Поиск по названию">
        </Input>
      </FlexRow>
      <div style={styles.content}>
        {children}
        {tasks.map((item) => (
          <TaskCard task={item}/>
        ))}
      </div>
    </div>
  );
};

export default RoundedCard;