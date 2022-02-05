import Product from "../pages/products/[id]";

export interface Product {
    id: number,
    title: string
}

export async function getProducts(): Promise<Array<Product>> {
    const res = await fetch("http://localhost:1337/products");
    const data = await res.json();
    return data.map(({id, title}) => { return { id, title} });
}

export async function getProduct(id:number) {
    const res = await fetch(`http://localhost:1337/products/${id}`);
    return res.json();
}