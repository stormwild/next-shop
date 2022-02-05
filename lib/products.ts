import Product from "../pages/products/[id]";
import { fetchJson } from "./api";

const CMS_URL = 'http://localhost:1337'
export interface Product {
    id: number,
    title: string
}

export async function getProducts(): Promise<Array<Product>> {
    const data = await fetchJson(`${CMS_URL}/products`);
    return data.map(({id, title}) => { return { id, title} });
}

export async function getProduct(id:number) {
    return fetchJson(`${CMS_URL}/products/${id}`);
}