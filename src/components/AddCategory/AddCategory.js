import React, { useState } from "react";
import PropTypes from 'prop-types';

import './AddCategory.css';

const AddCategory = ({category}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length >= 1) {
            category(elmCategory => [inputValue, ...elmCategory]);
            setInputValue('');
        };
    };

    return (
        <>
            <form className="addCategory-box" onSubmit={handleSubmit}>
                <input className="addCategory-input" type="text" value={inputValue} onChange={handleInputChange} placeholder="Find your favorite gif" />
            </form>
        </>
    )
};

AddCategory.propTypes = {
    category: PropTypes.func.isRequired
}

export default AddCategory;