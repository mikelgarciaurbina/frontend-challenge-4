import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Input from './index';

configure({ adapter: new Adapter() });

describe('<Input />', () => {
  it('should render 1 input', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.find('input').length).toBe(1);
  });

  it('should be a text type input', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.find('input').props().type).toBe('text');
  });

  it('should render with landbot-input class name', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.find('input').props().className).toBe('landbot-input');
  });

  it('should render the input placeholder', () => {
    const wrapper = shallow(<Input placeholder="test" />);

    expect(wrapper.find('input').props().placeholder).toBe('test');
  });

  it('should render the input value', () => {
    const wrapper = shallow(<Input value="test" />);

    expect(wrapper.find('input').props().value).toBe('test');
  });

  it('should call to onChange on type in Input', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(<Input onChange={mockCallback} />);

    wrapper.find('input').simulate('change', { target: { value: 'test' } });

    expect(mockCallback).toBeCalledWith({ target: { value: 'test' } });
  });

  it('should call to onKeyUp on key up in Input', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(<Input onKeyUp={mockCallback} />);

    wrapper.find('input').simulate('keyUp', { key: 'Enter' });

    expect(mockCallback).toBeCalledWith({ key: 'Enter' });
  });

  it('Matches snapshot', () => {
    const wrapper = shallow(
      <Input
        placeholder="test"
        value="test"
      />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
