import React from 'react';

import Search from '@components/Search';

import { Logo } from './static';
import HedaerAuth from './Auth';
import HeaderCart from './Cart';
import { HeaderContainer, RigtMenu } from './styled';
import Departments from './Departments';

const Header: React.FC<{}> = () => {
    return (
        <HeaderContainer>
            <Logo />
            <Departments />
            <RigtMenu>
                <Search />
                <HeaderCart />
                <HedaerAuth />
            </RigtMenu>
        </HeaderContainer>
    );
};

export default Header;
