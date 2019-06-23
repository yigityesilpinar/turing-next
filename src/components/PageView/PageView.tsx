import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import authApi from '@api/auth';
import { getItemFromStorage, removeItemFromStorage } from '@utils/storage';
import { setCustomer, setToken } from '@store/customer/actions';
import { setCart } from '@store/cart/actions';

const PageView: React.FC = () => {
    const dispatch = useDispatch();
    // component handle initial logic on client like PageView analytic events or setting initial store values etc...
    useEffect(() => {
        const token = getItemFromStorage('token');
        if (token) {
            authApi.getCustomer(token).then(([response, _err]) => {
                if (response) {
                    dispatch(setCustomer(response));
                    dispatch(setToken(token));
                } else {
                    removeItemFromStorage('token');
                }
            });
        }
        const cartItems = getItemFromStorage('cartItems');
        if (cartItems) {
            try {
                dispatch(setCart(JSON.parse(cartItems)));
            } catch (e) {}
        }
    }, []);
    return null;
};

export default PageView;
