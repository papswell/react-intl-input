import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { IntlInput as Component } from 'src/index';
import { computeState } from 'src/components/intl-input';

describe('computeState', () => {

  let props;

  beforeEach(() => {
    props = {
      languages: [
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'French' },
      ]
    }
  })

  it('should set a lang as props.initialLang if defined', () => {
    props.initialLang = 'fr';
    expect(computeState(props).lang).toBe('fr');
  });

  it('should set a lang as state.lang if defined', () => {
    const state = { lang: 'es' };
    expect(computeState(props, state).lang).toBe('es');
  });

  it('should set a lang as props.languages[0] if no props nor state', () => {
    expect(computeState(props).lang).toBe('en');
  });

  it('should set a values as "languages" keyed object, with all values empty', () => {
    expect(computeState(props).values).toEqual({
      en: '',
      fr: ''
    });
  });

  it('should set a values acoording to the initial props', () => {
    props.initialValues = {
      en: "An english string",
      fr: "Un string francais..."
    }
    expect(computeState(props).values).toEqual({
      en: 'An english string',
      fr: 'Un string francais...'
    });
  });
})
