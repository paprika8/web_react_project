import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlexColumn from './FlexColumn';
import Input from './Input';
import Button from './Button';
import FlexRow from './FlexRow';
import PageTemplate from './PageTemplate';

import {bd_addItem, bd_save} from './database.js'

const AddTask = () => {
	
	const [taskName, setTaskNamet] = useState('');

	const navigate = useNavigate();

	const create = (() =>{
		const currentDate = new Date().toLocaleDateString();
		bd_addItem({name: taskName, date: currentDate, state: false});
		bd_save();
		back();
	});

	const back = (() =>{
		navigate('/');
	});

	

	return (
		<PageTemplate header="Создание Задачи">
			<FlexColumn gap = '16px' expandIndex={0}>
				<Input value={taskName}
					onChange={(e) => setTaskNamet(e.target.value)} placeholder="Название задачи"/>
				<FlexRow gap = '16px' expandIndex={0}>
					<Button backgroundColor='#17b424' onClick={create}><div>Создать</div></Button>
					<Button onClick={back}><div>Отмена</div></Button>
				</FlexRow>
			</FlexColumn>
		</PageTemplate>
	);
};

export default AddTask;