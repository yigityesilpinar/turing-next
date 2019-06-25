interface IShipping {
    shipping_id: number;
    shipping_type: string;
    shipping_cost: string;
    shipping_region_id: number;
}

interface IShippingRegion {
    shipping_region_id: number;
    shipping_region: string;
}
