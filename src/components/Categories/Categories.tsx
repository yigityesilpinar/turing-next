import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { IAppState } from '@store/rootReducer';

import { Container, Category } from './styled';
import { setActiveCategory, setCategories } from '@store/categories/actions';

const Categories: React.FC = () => {
    const { categories, active: activeCategory } = useSelector<IAppState, IAppState['categoryStore']>(
        state => state.categoryStore,
    );
    const { active: activeDepartment } = useSelector<IAppState, IAppState['departmentStore']>(
        state => state.departmentStore,
    );
    const dispatch = useDispatch();
    useEffect(() => {
        if (categories.length === 0) {
            axios(`${process.env.API_BASE_URL}/categories`).then(res => {
                const categoriesResponse: ICategoryResponse = res.data;
                dispatch(setCategories(categoriesResponse.rows));
            });
        }
    }, []);
    const clickHandler = (category: ICategory) => () => {
        dispatch(
            setActiveCategory(activeCategory && activeCategory.category_id === category.category_id ? null : category),
        );
    };
    let activeCategories = categories.slice();
    if (activeDepartment) {
        activeCategories = categories.filter(c => c.department_id === activeDepartment.department_id);
    }
    return (
        <Container>
            {activeCategories.map(category => (
                <Category
                    active={!!activeCategory && activeCategory.category_id === category.category_id}
                    onClick={clickHandler(category)}
                    key={category.category_id}
                >
                    {category.name}
                </Category>
            ))}
        </Container>
    );
};

export default Categories;
