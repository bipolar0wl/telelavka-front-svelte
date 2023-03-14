<script>
	import {
		basket as basketStore,
		categories as categoriesStore,
		products as productsStore
	} from '../store/store';
	import { onMount, beforeUpdate } from 'svelte';
	import CategoriesList from './../components/CategoriesList.svelte';
	import ProductList from './../components/ProductList.svelte';
	import FooterBar from './../components/FooterBar.svelte';
	import Basket from './../components/Basket.svelte';
	import {fetchCategories} from './../http/productsAPI.js'

	//fetchCategories().then(data => console.log(data));

	let categories = [];
	let products = [];
	let currentCategory = {};
	let basket = {};
	let page = 0;
	categoriesStore.subscribe((data) => {
		categories = data;
	});
	productsStore.subscribe((data) => {
		products = data;
	});
	$: basketStore.set(basket);

	onMount(async () => {
		let tg = window.Telegram.WebApp;
		currentCategory = categories[0];
		alert(tg.initData)
		tg.expand();
		tg.MainButton.setText('Посмотреть заказ');
		tg.MainButton.setParams({
			color: '#31b545'
		});
		tg.setBackgroundColor('secondary_bg_color');
		tg.MainButton.onClick(async () => {
			tg.HapticFeedback.impactOccurred('light');
			if (page == 0){
				page = 1;
				let text = tg.MainButton.text = Object.keys(basket).reduce((sum, val) => sum + products.find(el => el.id == val).price*basket[val], 0);
				// tg.MainButton.setText(`К оформлению ${basket.reduce((sum, val) => sum + val, 0)} ₽`);
				tg.MainButton.setText(`К оформлению ${text} ₽`);
				let baseUrl = "https://api.telegram.org/bot";
				let botToken = process.env.BOT_TOKEN;
				let providerToken = process.env.PAYMENTS_PROVIDER_TOKEN;
				let url = `${baseUrl}${botToken}/createInvoiceLink`
				let prices = [];
				Object.keys(basket).forEach((id)=>{
					prices.push({label: products[id].name + basket[id] > 1 ? ` x${basket[id]}` : "", amount: products[id].price * basket[id] + '00' })
				})
				let message = {
					title: "telelavka",
					description: 'telelavka test',
					provider_token: providerToken,
					payload: "telelavka",
					currency: 'RUB',
					prices: JSON.stringify(prices),
				}
				console.log(url + "?" + new URLSearchParams(message));
				let response = await fetch(url + "?" + new URLSearchParams(message), {method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					}
				})
						.then(response => response.text())
						.then(ref => tg.openInvoice(JSON.parse(ref).result));
				if (response.ok) { // если HTTP-статус в диапазоне 200-299
					// получаем тело ответа (см. про этот метод ниже)
					let json = await response.json();
				} else {
					alert("Ошибка HTTP: " + response.status);
				}
			}else{
				tg.MainButton.text = 'Посмотреть заказ';
			}
		});
		basketStore.subscribe((data) => {
			basket = data;
			if (Object.keys(basket).length !== 0) {
				tg.MainButton.show();
			} else {
				tg.MainButton.hide();
			}
		});
	});
	async function handleClick() {
		let tg = window.Telegram.WebApp;
		if (page == 0){
			page = 1
			tg.MainButton.setText(`К оформлению ${Object.keys(basket).reduce((sum, val) => sum + products.find(el => el.id == val).price*basket[val], 0)} ₽`);
		}else{
			page = 0;
		}
	}
</script>

<main>
	<div class="app">
		{#if page == 0}
			<CategoriesList bind:categories bind:currentCategory />
			<ProductList bind:basket {products} {categories} bind:currentCategory />
		{:else}
			<Basket bind:page />
		{/if}
<!--		<button on:click={handleClick}>click me</button>-->
	</div>
</main>

<style>
	* {
		scroll-behavior: smooth;
	}
	body {
		background: var(--tg-theme-secondary-bg-color);
	}
	.app {
		background: var(--tg-theme-secondary-bg-color);
		color: var(--tg-theme-text-color);
		/* max-width: 360px; */
		margin: 0 auto;
	}
</style>
