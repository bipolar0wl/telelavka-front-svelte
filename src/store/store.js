import { writable } from 'svelte/store';

export let basket = writable({});
export let products = writable([]);