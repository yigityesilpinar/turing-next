import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IAppState } from '@store/rootReducer';
import { setActiveDepartment } from '@store/departments/actions';
import useLocationOnly from '@hooks/useLocationOnly';

import { Container, Link } from './styled';

const Departments: React.FC = () => {
    const { departments, active: activeDepartment } = useSelector<IAppState, IAppState['departmentStore']>(
        state => state.departmentStore,
    );
    const display = useLocationOnly('/');
    const dispatch = useDispatch();

    const clickHandler = (department: IDepartment) => (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const shouldUnset = activeDepartment && activeDepartment.department_id === department.department_id;
        // unset department if user click the active one
        dispatch(setActiveDepartment(shouldUnset ? null : department));
    };

    if (!display) {
        return null;
    }

    return (
        <Container>
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
        </Container>
    );
};

export default Departments;
