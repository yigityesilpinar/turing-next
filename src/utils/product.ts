export const groupProductAttributes = (attrs: Array<IAttributeInProduct>) =>
    attrs.reduce(
        (acc, { attribute_name, ...rest }) => {
            const foundIndex = acc.findIndex(x => x.attribute_name === attribute_name);
            if (foundIndex === -1) {
                return acc.concat([
                    {
                        attribute_name,
                        values: [rest],
                    },
                ]);
            } else {
                acc[foundIndex] = {
                    attribute_name,
                    values: acc[foundIndex].values.concat([rest]),
                };
                return acc;
            }
        },
        [] as Array<IGroupedProductAttributes>,
    );

export const getActualPrice = ({ price, discounted_price }: Pick<IProduct, 'price' | 'discounted_price'>) =>
    parseInt(discounted_price, 10) > 0 ? discounted_price : price;

export const getSubTotal = ({ price, quantity }: { price: string; quantity: number }) =>
    (parseFloat(price) * quantity).toFixed(2);
