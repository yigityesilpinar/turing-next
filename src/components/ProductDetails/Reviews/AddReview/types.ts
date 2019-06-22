export interface IState {
    text: string;
    rating: number;
}

export interface IAddReview {
    product_id: IProduct['product_id'];
}
