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
		image:
			'https://storage.yandexcloud.net/telegram-shop/telegram-shop/%D0%91%D1%83%D0%BA%D0%B5%D1%82%20%D0%B8%D0%B7%20%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D1%86%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D1%85%20%D0%A0%D0%BE%D0%B7.jpeg'
	},
	{
		id: 2,
		name: 'Букет из хризантем',
		description: '9 шт • 55 см',
		category_id: 1,
		price: 2350,
		// discount: 0,
		image:
			'https://storage.yandexcloud.net/telegram-shop/telegram-shop/%D0%91%D1%83%D0%BA%D0%B5%D1%82%20%D0%98%D0%B7%209%20%D0%A5%D1%80%D0%B8%D0%B7%D0%B0%D0%BD%D1%82%D0%B5%D0%BC.jpeg'
	},
	{
		id: 3,
		name: 'Гипсофила в коробке',
		description: '5 шт • 17 см',
		category_id: 1,
		price: 1550,
		// discount: 0,
		image:
			'https://storage.yandexcloud.net/telegram-shop/telegram-shop/%D0%93%D0%B8%D0%BF%D1%81%D0%BE%D1%84%D0%B8%D0%BB%D1%8B.jpeg'
	},
	{
		id: 4,
		name: 'Букет Ирисов',
		description: '9 шт • 50 см',
		category_id: 1,
		price: 1550,
		// discount: 0,
		image:
			'https://storage.yandexcloud.net/telegram-shop/telegram-shop/%D0%91%D1%83%D0%BA%D0%B5%D1%82%20%D0%98%D1%80%D0%B8%D1%81.jpeg'
	},
	{
		id: 5,
		name: 'Свеча Кекс & Ваниль',
		description: '100 мл',
		category_id: 2,
		price: 612,
		// discount: 0,
		image:
			'https://storage.yandexcloud.net/telegram-shop/telegram-shop/%D1%81%D0%B2%D0%B5%D1%87%D0%B0%20%D0%BA%D0%B5%D0%BA%D1%81%20%26%20%D0%B2%D0%B0%D0%BD%D0%B8%D0%BB%D1%8C.jpeg'
	},
	{
		id: 6,
		name: 'Свеча Tropical Delight',
		description: '15x8 см • парафин',
		category_id: 2,
		price: 492,
		// discount: 0,
		image:
			'https://storage.yandexcloud.net/telegram-shop/telegram-shop/%D1%81%D0%B2%D0%B5%D1%87%D0%B0%20Tropical%20Delight%20.jpeg'
	},
	{
		id: 7,
		name: 'Фотоальбом',
		description: '10x15 см • 500 фото',
		category_id: 4,
		price: 1550,
		// discount: 0,
		image:
			'https://storage.yandexcloud.net/telegram-shop/telegram-shop/%D1%84%D0%BE%D1%82%D0%BE%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC.jpeg'
	},
	{
		id: 8,
		name: 'Светильник ночник Луна',
		description: '15 см',
		category_id: 4,
		price: 699,
		// discount: 0,
		image:
			'https://storage.yandexcloud.net/telegram-shop/telegram-shop/%D0%A1%D0%B2%D0%B5%D1%82%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA.jpeg'
	},
	{
		id: 9,
		name: 'Полотенце Tangerine',
		description: '40x75 см',
		category_id: 3,
		price: 2500,
		// discount: 0,
		image:
			'https://storage.yandexcloud.net/telegram-shop/telegram-shop/%D0%A1%D0%B2%D0%B5%D1%82%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA.jpeg'
	},
	{
		id: 10,
		name: 'Полотенцa махровые 3 шт.',
		description: '70x140 • 50x90 • 40x70 см',
		category_id: 3,
		price: 2500,
		// discount: 0,
		image:
			'https://storage.yandexcloud.net/telegram-shop/telegram-shop/%D0%BF%D0%BE%D0%BB%D0%BE%D1%82%D0%B5%D0%BD%D1%86%D0%B0%203%20%D0%A8%D1%82.jpeg'
	}
]);
