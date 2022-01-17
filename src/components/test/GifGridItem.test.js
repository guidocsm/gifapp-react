import React from "react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from "../GifGridItem/GifGridItem";

describe('Debe de mostrar el componente correctamente', () => {
    
    const wrapper = shallow(<GifGridItem />);

    expect(wrapper).to
})
