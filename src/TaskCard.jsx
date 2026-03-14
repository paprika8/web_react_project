import React, { useEffect } from 'react';

import RoundedBox from './RoundedBox';
import FlexRow from './FlexRow';
import Button from './Button';
import { bd_save, bd_update } from './database';

const TaskCard = ({task, className}) => {

	const id = task.id;

	const [state, setState] = React.useState(task.state);

	var color = state? '#2cce17' : '#ce1717';

	const box = {
		width:'50px',
		height:'50px',
	}

	useEffect(()=>{
		setState(task.state);
		color = state? '#2cce17' : '#ce1717';
	});

	const reState = () => {
		setState(!state);
		task.state = !state;
		bd_update(id, !state);
		bd_save();
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