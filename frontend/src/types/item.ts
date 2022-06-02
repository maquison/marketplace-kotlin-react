export type Item = {
    id: number;
    name: string;
    description: string;
    category: string;
    image: string;
    currentPrice: number;
    previousPrice: number;
    reviews: number;
    classification: number;
}

export type ItemPage = {
    content: Item[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
} 