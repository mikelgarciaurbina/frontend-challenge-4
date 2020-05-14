import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Header from './index';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('should render 1 h1', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('h1').length).toBe(1);
  });

  it('should print children prop', () => {
    const wrapper = shallow(<Header>Test</Header>);

    expect(wrapper.find('h1').text()).toBe('Test');
  });

  it('should have a div with landbot-header class-name', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('div').props().className).toBe('landbot-header');
  });

  it('should have a h1 with subtitle class-name', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('h1').props().className).toBe('subtitle');
  });

  it('Matches snapshot', () => {
    const wrapper = shallow(<Header>Test</Header>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
