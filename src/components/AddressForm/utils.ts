import { textFileds } from './static';

export const filterFields = (customer: ICustomer) => {
    let fields = {};
    textFileds.forEach(key => {
        //@ts-ignore
        fields[key] = customer[key] || '';
    });
    return fields;
};
