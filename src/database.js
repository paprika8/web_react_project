// DataContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Начальное состояние
var data = {
	id: 0,
	items: [], // массив элементов
};

export function bd_load() {
	const saved = localStorage.getItem('appData');
	data.id = localStorage.getItem('max_id');
	if (saved) {
		const parsed = JSON.parse(saved);
		data = { ...data, items: parsed.items || [] }
	}
	return data.id;
}

export function bd_addItem(item) {
	data.id++;
	item.id = data.id;
	data = { ...data, items: [...data.items, item] };
}

export function bd_remove(id){
	data = { ...data, items: data.items.filter(item => item.id !== id) };
}


export function bd_clear(){
	data = { ...data, items: data.items.filter(item => !item.state) };
}

export function bd_update(id, state){
	var buf = data.items.find(item => item.id == id);
	buf.state = state;
}

export function bd_filter(lambda){
	return data.items.filter(lambda);
}
export function bd_get_items(){
	return data.items;
}

export function bd_save() {
	localStorage.setItem('appData', JSON.stringify({ items: data.items }));
	localStorage.setItem('max_id', data.id);
}