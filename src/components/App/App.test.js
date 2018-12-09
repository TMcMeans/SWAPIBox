import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { mockData } from '../../helpers/mockData';

describe('App', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

//Test that methods have been called, test for method inputs, test for state being set and test for sad paths/error status
