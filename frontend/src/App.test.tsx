import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';

function setup(nextProps = {}) {
  const props = {
    documents:null,
    filter:'',
    loading:false,
    handleGetDocs: jest.fn(),
    handleFilterDocs:jest.fn(),
    handleDeleteDoc:jest.fn(),
    handleUploadDoc:jest.fn(),
    ...nextProps
  };
  const wrapper = shallow(<App {...props} />);//.dive();

  return {
    props,
    wrapper
  };
}

describe('<App>', () => {
  it('should match the snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

});