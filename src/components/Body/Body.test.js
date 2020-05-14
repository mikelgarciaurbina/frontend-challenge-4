import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Body from './index';

configure({ adapter: new Adapter() });

describe('<Body />', () => {
  it('should render 1 div', () => {
    const wrapper = shallow(<Body />);

    expect(wrapper.find('div').length).toBe(1);
  });

  it('should print children prop', () => {
    const wrapper = shallow(<Body>Test</Body>);

    expect(wrapper.find('div').text()).toBe('Test');
  });

  it('should have "landbot-messages-container" class-name and id', () => {
    const wrapper = shallow(<Body />);

    expect(wrapper.find('div').props().className).toBe('landbot-messages-container');
    expect(wrapper.find('div').props().id).toBe('landbot-messages-container');
  });

  it('Matches snapshot', () => {
    const wrapper = shallow(<Body>Test</Body>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
