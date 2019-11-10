import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';
import toJson from 'enzyme-to-json';

// it('expect to render Card component', () => {
//     expect(shallow(<Card />).length).toEqual(1);
// });


it('expect to Card snapshot', () => {
    const wrapper = shallow(<Card />);

    expect(toJson(wrapper)).toMatchSnapshot();
});