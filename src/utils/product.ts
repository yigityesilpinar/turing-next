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
