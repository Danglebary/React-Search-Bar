import React from 'react'
import { storiesOf } from '@storybook/react';

import { SearchBar } from '../components/SearchBar';

const stories = storiesOf('App Test', module);

stories.add('App', () => {

    const handleSubmit = (search: string) => {
        console.log(search);
    };

    return (
        <SearchBar submitFunction={handleSubmit} /> 
    );
});