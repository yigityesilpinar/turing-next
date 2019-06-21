import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IAppState } from '@store/rootReducer';
import { setActiveDepartment } from '@store/departments/actions';
import Auth from '@components/Auth';

import { Logo } from './static';
import { HeaderContainer, Link } from './styled';

const Header: React.FC<{}> = () => {
    const { departments, active: activeDepartment } = useSelector<IAppState, IAppState['departmentStore']>(
        state => state.departmentStore,
    );

    const dispatch = useDispatch();

    const clickHandler = (department: IDepartment) => (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const shouldUnset = activeDepartment && activeDepartment.department_id === department.department_id;
        // unset department if user click the active one
        dispatch(setActiveDepartment(shouldUnset ? null : department));
    };

    return (
        <HeaderContainer>
            <Logo />
            {departments.map(department => (
                <Link
                    active={!!activeDepartment && activeDepartment.department_id === department.department_id}
                    onClick={clickHandler(department)}
                    key={department.name}
                    href="#"
                >
                    {department.name}
                </Link>
            ))}
            <Auth />
        </HeaderContainer>
    );
};

export default Header;
