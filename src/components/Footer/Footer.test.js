import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Footer from './index';

configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  it('should render 3 divs', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('div').length).toBe(3);
  });

  it('should print children prop', () => {
    const wrapper = shallow(<Footer>Test</Footer>);

    expect(wrapper.find('div').at(2).text()).toBe('Test');
  });

  it('should have "landbot-input-container" class-name the first div', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('div').at(0).props().className).toBe('landbot-input-container');
  });

  it('should have "field" class-name the second div', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('div').at(1).props().className).toBe('field');
  });

  it('should have "control" class-name the third div', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('div').at(2).props().className).toBe('control');
  });

  it('Matches snapshot', () => {
    const wrapper = shallow(<Footer>Test</Footer>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
