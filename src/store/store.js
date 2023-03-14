import { writable } from 'svelte/store';

export let basket = writable({});
export let categories = writable([
	{
		id: 1,
		name: 'Цветы'
	},
	{
		id: 2,
		name: 'Свечи'
	},
	{
		id: 3,
		name: 'Полотенца'
	},
	{
		id: 4,
		name: 'Другое'
	}
]);
export let products = writable([
	{
		id: 1,
		name: 'Букет из разноцветных роз',
		description: '19 шт • 35 см',
		category_id: 1,
		price: 1500,
		// discount: 10,
		image: './images/Розы.jpeg'
	},
	{
		id: 2,
		name: 'Букет из хризантем',
		description: '9 шт • 55 см',
		category_id: 1,
		price: 2350,
		// discount: 0,
		image: './images/Хризантемы.jpeg'
	},
	{
		id: 3,
		name: 'Гипсофила в коробке',
		description: '5 шт • 17 см',
		category_id: 1,
		price: 1550,
		// discount: 0,
		image: './images/Гипсофилы.jpeg'
	},
	{
		id: 4,
		name: 'Букет Ирисов',
		description: '9 шт • 50 см',
		category_id: 1,
		price: 1550,
		// discount: 0,
		image: './images/Ирис.jpeg'
	},
	{
		id: 5,
		name: 'Свеча Кекс & Ваниль',
		description: '100 мл',
		category_id: 2,
		price: 612,
		// discount: 0,
		image: './images/Свеча ароматная.jpeg'
	},
	{
		id: 6,
		name: 'Свеча Tropical Delight',
		description: '15x8 см • парафин',
		category_id: 2,
		price: 492,
		// discount: 0,
		image: './images/Свеча.jpeg'
	},
	{
		id: 7,
		name: 'Фотоальбом',
		description: '10x15 см • 500 фото',
		category_id: 4,
		price: 1550,
		// discount: 0,
		image: './images/Книга.jpeg'
	},
	{
		id: 8,
		name: 'Светильник ночник Луна',
		description: '15 см',
		category_id: 4,
		price: 699,
		// discount: 0,
		image: './images/Светильник.jpeg'
	},
	{
		id: 9,
		name: 'Полотенце Tangerine',
		description: '40x75 см',
		category_id: 3,
		price: 2500,
		// discount: 0,
		image: './images/Полотенца оранжевые.jpeg'
	},
	{
		id: 10,
		name: 'Полотенцa махровые 3 шт.',
		description: '70x140 • 50x90 • 40x70 см',
		category_id: 3,
		price: 2500,
		// discount: 0,
		image: './images/Полотенца.jpeg'
	}
]);
