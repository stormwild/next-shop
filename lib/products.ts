
export interface Product {
    id: number,
    title: string
}

export async function getProducts(): Promise<Array<Product>> {
    const res = await fetch("http://localhost:1337/products");
    return res.json();
}