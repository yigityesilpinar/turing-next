import BaseApi from '@api/index';
import { ReviewPayload } from '@api/products/types';

class ProductsApi extends BaseApi {
    static getAttributes() {
        return this.request<Array<IAttribute>, any>({
            method: 'get',
            url: '/attributes',
        });
    }

    static getValuesForAttribute(id: IAttribute['attribute_id']) {
        return this.request<Array<IAttributeValue>, any>({
            method: 'get',
            url: `/attributes/values/${id}`,
        });
    }

    static async getAttributeWithValues(): Promise<Array<IAttributeWithValues>> {
        const [attrs, error] = await ProductsApi.getAttributes();
        if (!error && attrs) {
            return await Promise.all(
                attrs.map(async attr => {
                    const [values = []] = await ProductsApi.getValuesForAttribute(attr.attribute_id);
                    return {
                        ...attr,
                        values,
                    };
                }),
            );
        }
        return [];
    }

    static getAttributesInProduct(id: IProduct['product_id']) {
        return this.request<Array<IAttributeInProduct>, any>({
            method: 'get',
            url: `/attributes/inProduct/${id}`,
        });
    }

    static getCategoriesInProduct(id: IProduct['product_id']) {
        return this.request<Array<Omit<ICategory, 'description'>>, any>({
            method: 'get',
            url: `/categories/inProduct/${id}`,
        });
    }

    static getProductReviews(id: IProduct['product_id']) {
        return this.request<Array<IReview>, any>({
            method: 'get',
            url: `/products/${id}/reviews`,
        });
    }

    static postProductReview(data: ReviewPayload, accessToken: string) {
        return this.request<any, any>({
            data,
            method: 'post',
            headers: { 'user-key': accessToken },
            url: `/products/${data.product_id}/reviews`,
        });
    }
}

export default ProductsApi;
