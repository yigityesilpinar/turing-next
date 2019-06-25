import React, { ChangeEvent } from 'react';

import { Container, SearchInput, SearchIcon } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '@store/rootReducer';
import { setSearch } from '@store/search/actions';
import useLocationOnly from '@hooks/useLocationOnly';

const Search: React.FC = () => {
    const searchValue = useSelector<IAppState, IAppState['searchStore']['search']>(state => state.searchStore.search);
    const display = useLocationOnly('/');
    const dispatch = useDispatch();
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.persist();
        dispatch(setSearch(e.target.value));
    };
    if (!display) {
        return null;
    }
    return (
        <Container>
            <SearchInput onChange={onChange} placeholder="search anything..." type="search" value={searchValue} />
            <SearchIcon src="/static/images/search_icon.png" />
        </Container>
    );
};

export default Search;
