import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Button from './index';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('should render 1 button', () => {
    const wrapper = shallow(<Button icon="fas fa-paper-plane fa-lg" />);

    expect(wrapper.find('button').length).toBe(1);
  });

  it('should render 1 icon', () => {
    const wrapper = shallow(<Button icon="fas fa-paper-plane fa-lg" />);

    expect(wrapper.find('i').length).toBe(1);
  });

  it('should render with "button landbot-input-send" class name', () => {
    const wrapper = shallow(<Button icon="fas fa-paper-plane fa-lg" />);

    expect(wrapper.find('button').props().className).toBe('button landbot-input-send');
  });

  it('should render with "icon is-large" class name the icon', () => {
    const wrapper = shallow(<Button icon="fas fa-paper-plane fa-lg" />);

    expect(wrapper.find('span').props().className).toBe('icon is-large');
  });

  it('should render button disabled', () => {
    const wrapper = shallow(<Button disabled icon="fas fa-paper-plane fa-lg" />);

    expect(wrapper.find('button').props().disabled).toBe(true);
  });

  it('should render the icon', () => {
    const wrapper = shallow(<Button icon="fas fa-paper-plane fa-lg" />);

    expect(wrapper.find('i').props().className).toBe('fas fa-paper-plane fa-lg');
  });

  it('should call to onClick on click in button', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(<Button icon="fas fa-paper-plane fa-lg" onClick={mockCallback} />);

    wrapper.find('button').simulate('click');

    expect(mockCallback).toBeCalled();
  });

  it('Matches snapshot', () => {
    const wrapper = shallow(<Button icon="fas fa-paper-plane fa-lg" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
