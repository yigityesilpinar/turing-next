import React from 'react';

import Search from '@components/Search';
import Departments from '@components/Departments';

import { Logo } from './static';
import HedaerAuth from './Auth';
import HeaderCart from './Cart';
import { HeaderContainer, RigtMenu, DepartmentsContainer } from './styled';

const Header: React.FC<{}> = () => {
    return (
        <HeaderContainer>
            <Logo />
            <DepartmentsContainer>
                <Departments />
            </DepartmentsContainer>
            <RigtMenu>
                <Search />
                <HeaderCart />
                <HedaerAuth />
            </RigtMenu>
        </HeaderContainer>
    );
};

export default Header;
