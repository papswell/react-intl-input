import expect, { createSpy, spyOn } from 'expect';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import IntlInput, { computeState } from './../../src/components/intl-input';
import Input from './../../src/components/input';
import Option from './../../src/components/option';

Enzyme.configure({adapter: new Adapter()})

describe('IntlInput component', () => {
  let node;
  let props;

  beforeEach(() => {
    node = document.createElement('div');
    props = {
      name: "intl-input",
      initialLang: 'fr',
      languages: [
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'French' },
      ],
      initialValues: {
        en: 'Old english text',
        fr: 'Vieux texte francais'
      }
    }
  })

  afterEach(() => {
    unmountComponentAtNode(node);
  })

  it('should increment the instance count', () => {
    expect(IntlInput.instanceCount).toBe(0);

    render(
      <div>
        <IntlInput {...props} />
        <IntlInput {...props} />
        <IntlInput {...props} />
      </div>, node, () => {
      expect(IntlInput.instanceCount).toBe(3);
    });
  });

  it('should recompute state on will reeive props', () => {

    const w = shallow(<IntlInput {...props} />);
    const oldState = Object.assign({}, w.instance().state);

    w.setProps({
      initialLang: 'en',
    });

    const newState = Object.assign({}, w.instance().state);

    expect(newState).toEqual({
      lang: 'en',
      languages: [
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'French' },
      ],
      values: {
        en: 'Old english text',
        fr: 'Vieux texte francais'
      }
    });
  })


  it('should update the internal state on value changes', () => {

    const w = shallow(<IntlInput {...props} />);
    const oldState = Object.assign({}, w.instance().state);

    w.instance().handleInputChange({ target: { value: 'Nouveau texte francais' }});

    const newState = Object.assign({}, w.instance().state);

    expect(newState).toEqual({
      lang: 'fr',
      languages: [
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'French' },
      ],
      values: {
        en: 'Old english text',
        fr: 'Nouveau texte francais'
      }
    });
  })

  it('should call the prop callback on value changes if given', () => {

    const onInputChange = createSpy();
    const w = shallow(<IntlInput
      {...props}
      onInputChange={onInputChange}
    />);
    const oldState = Object.assign({}, w.instance().state);

    w.instance().handleInputChange({ target: { value: 'Nouveau text francais' }});

    expect(onInputChange).toHaveBeenCalled();
    expect(onInputChange).toHaveBeenCalledWith(oldState.lang, 'Nouveau text francais', w.instance());
  })

  it('should update the internal state on lang change', () => {

    const w = shallow(<IntlInput {...props} />);
    const oldState = Object.assign({}, w.instance().state);

    w.instance().handleLangChange({
      value: 'en',
    });

    const newState = Object.assign({}, w.instance().state);

    expect(newState).toEqual({
      lang: 'en',
      languages: [
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'French' },
      ],
      values: {
        en: 'Old english text',
        fr: 'Vieux texte francais'
      }
    });
  })

  it('should not update the internal state if the lang is cleared', () => {

    const w = shallow(<IntlInput {...props} />);
    const oldState = Object.assign({}, w.instance().state);

    w.instance().handleLangChange();

    const newState = Object.assign({}, w.instance().state);

    expect(newState).toEqual({
      lang: 'fr',
      languages: [
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'French' },
      ],
      values: {
        en: 'Old english text',
        fr: 'Vieux texte francais'
      }
    });
  })

  it('should call the prop callback on lang changes if given', () => {

    const onLangChange = createSpy();
    const w = shallow(<IntlInput
      {...props}
      onLangChange={onLangChange}
    />);
    const oldState = Object.assign({}, w.instance().state);

    const newValue = { value: 'en' };
    w.instance().handleLangChange(newValue);

    expect(onLangChange).toHaveBeenCalled();
    expect(onLangChange).toHaveBeenCalledWith(newValue, w.instance());
  })

  it('should use the default Option if no optionRenderer given', () => {

    const w = mount(<IntlInput
      {...props}
    />);

    const o = w.instance().renderSelectOptions({ value: 'fr' });
    expect(o.type).toBe(Option);
  })

  it('should render the default Option with warning of no value provided', () => {

    const w = mount(<IntlInput
      {...props}
      initialValues={null}
    />);

    const o = w.instance().renderSelectOptions({ value: 'fr' });
    expect(o.props.displayWarning).toBe(true);
  })

  it('should use the optionRenderer if given', () => {
    const optionRenderer = createSpy();
    const w = mount(<IntlInput
      {...props}
      optionRenderer={optionRenderer}
    />, { attachTo: node});

    w.instance().renderSelectOptions();
    expect(optionRenderer).toHaveBeenCalled();
  });

  it('should use the inputRenderer if given', () => {
    const spy = createSpy().andCall((props) => (<input {...props}/>));
    const w = mount(<IntlInput
      {...props}
      inputComponent={spy}
    />);

    expect(spy).toHaveBeenCalled();
  })
})
