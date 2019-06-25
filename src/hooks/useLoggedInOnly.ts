import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import { IAppState } from '@store/rootReducer';
import { setShowAuth } from '@store/customer/actions';

const useLoggedInOnly = () => {
    const { customer, showAuth, customerReady } = useSelector<IAppState, IAppState['customerStore']>(
        state => state.customerStore,
    );
    const dispatch = useDispatch();
    useEffect(() => {
        if (customerReady && !customer) {
            dispatch(setShowAuth('login'));
            Router.push('/cart');
        }
    }, [customer, showAuth, customerReady]);
};

export default useLoggedInOnly;
