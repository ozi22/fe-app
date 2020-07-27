import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { configure, shallow } from 'enzyme';

import Navigation from '../../components/Navigation';

configure({ adapter: new Adapter() });

describe('With Enzyme', () => {
  it('Anchor tag in Navigation component is defined', () => {
    const app = shallow(<Navigation />);
    expect(app.find('a').get(0)).toBeDefined();
  });
});
