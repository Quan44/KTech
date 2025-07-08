// types/Product.ts
export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    categoryId: number;
    category?: Category;
    images: string[];
    slug?: string;
    creationAt?: string;
    updatedAt?: string;
};

export type Category = {
    id: number;
    name: string;
    image: string;
}