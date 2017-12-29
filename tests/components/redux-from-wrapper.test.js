import React from 'react';
import Immutable from 'immutable';
import expect, { createSpy, spyOn } from 'expect';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import ReduxFormWrapper from './../../src/components/redux-form-intl-input';
import IntlInput from './../../src/components/intl-input';

Enzyme.configure({adapter: new Adapter()})

describe('ReduxFormWrapper component', () => {
  let node;
  let props;

  const value = {
    en: 'Inenglishplease',
    fr: 'Enfrancaisstp',
  };

  beforeEach(() => {
    node = document.createElement('div');
    props = {
      // Normal props
      name: "intl-input",
      initialLang: 'fr',
      languages: [
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'French' },
      ],
      // Redux-form props
      input: {
        value: '',
        onChange: () => {},
        onBlur: () => {},
        onFocus: () => {},
      }
    }
  })

  it('should call the redux-form onFocus callback', () => {

    const spy = spyOn(props.input, 'onFocus');
    const w = shallow(<ReduxFormWrapper {...props} />);
    w.instance().handleInputFocus();

    expect(spy).toHaveBeenCalled();
  })

  it('should call the redux-form onBlur callback', () => {

    props.input.value = value;

    const spy = spyOn(props.input, 'onBlur');
    const w = shallow(<ReduxFormWrapper {...props} />);
    w.instance().handleInputBlur();

    expect(spy).toHaveBeenCalled(value);
    expect(spy).toHaveBeenCalledWith(value);
  })

  it('should pass the new value if no inital value', () => {
    const spy = spyOn(props.input, 'onChange');
    const w = shallow(<ReduxFormWrapper {...props} />);
    w.instance().handleInputChange('en', 'New text');

    expect(spy).toHaveBeenCalled();
    expect(spy.calls[0].arguments).toEqual([{ en: 'New text' }]);
  })

  it('should call the redux-form onChange callback if value', () => {

    props.input.value = value;
    const spy = spyOn(props.input, 'onChange');
    const w = shallow(<ReduxFormWrapper {...props} />);
    w.instance().handleInputChange();

    expect(spy).toHaveBeenCalled();
  })

  describe('handling redux-form/immutable', () => {
    it('should set the initialValues as JS plain object', () => {

      const v = Immutable.Map(value);
      const w = mount(<ReduxFormWrapper {...props} input={{ value: v }} />);
      expect(w.childAt(0).props().initialValues).toEqual(v.toJS())

    })

    it('should call the redux-form onChange callback with an Immutable.Map', () => {

      const spy = spyOn(props.input, 'onChange');

      const v = Immutable.Map(value);
      const w = mount(<ReduxFormWrapper {...props} input={{ value: v, onChange: props.input.onChange }} />);

      w.instance().handleInputChange('fr', 'Nouveau texte francais !');

      expect(spy).toHaveBeenCalled();
      expect(spy.calls[0].arguments).toEqual([ v.set('fr', 'Nouveau texte francais !') ])
    })
  })
});
