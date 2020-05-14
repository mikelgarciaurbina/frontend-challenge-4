import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Message from './index';

configure({ adapter: new Adapter() });

describe('<Message />', () => {
  it('should render 1 article', () => {
    const wrapper = shallow(<Message author="bot" />);

    expect(wrapper.find('article').length).toBe(1);
  });

  it('should render 1 figure', () => {
    const wrapper = shallow(<Message author="bot" />);

    expect(wrapper.find('figure').length).toBe(1);
    expect(wrapper.find('img').length).toBe(1);
  });

  it('should render 2 p', () => {
    const wrapper = shallow(<Message author="bot" />);

    expect(wrapper.find('p').length).toBe(2);
  });

  it('should print text prop', () => {
    const wrapper = shallow(<Message author="bot" text="test" />);

    expect(wrapper.find('p').at(1).text()).toBe('test');
  });

  it('should print author prop in the article', () => {
    const wrapper = shallow(<Message author="bot" text="test" />);

    expect(wrapper.find('article').prop('data-author')).toBe('bot');
  });

  it('should have a aticle with "media landbot-message" class-name', () => {
    const wrapper = shallow(<Message author="bot" />);

    expect(wrapper.find('article').props().className).toBe('media landbot-message');
  });

  it('should have a img with "is-rounded" class-name', () => {
    const wrapper = shallow(<Message author="bot" />);

    expect(wrapper.find('img').props().className).toBe('is-rounded');
  });

  it('should have a div with "content" class-name', () => {
    const wrapper = shallow(<Message author="bot" />);

    expect(wrapper.find('div').at(1).props().className).toBe('content');
  });

  it('Matches snapshot', () => {
    const wrapper = shallow(<Message author="bot" text="test" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
