import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import authApi from '@api/auth';
import cartApi from '@api/cart';
import { getItemFromStorage, removeItemFromStorage } from '@utils/storage';
import { setCustomer, setCustomerReady, setToken } from '@store/customer/actions';
import { setCart, setCartID } from '@store/cart/actions';

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
                dispatch(setCustomerReady(true));
            });
        } else {
            dispatch(setCustomerReady(true));
        }
        const cartID = getItemFromStorage('cartID');
        if (cartID) {
            try {
                dispatch(setCartID(cartID));
                cartApi.getItemsInCart(cartID).then(([res, err]) => {
                    if (res && res.length && !err) {
                        dispatch(setCart(res));
                    }
                });
            } catch (e) {}
        }
    }, []);
    return null;
};

export default PageView;
