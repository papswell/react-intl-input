import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { IntlInput as Component } from 'src/index';
import { computeState } from 'src/components/intl-input';

// describe('Component', () => {
//   let node;
//
//   beforeEach(() => {
//     node = document.createElement('div');
//   })
//
//   afterEach(() => {
//     unmountComponentAtNode(node);
//   })
//
//   it('displays a welcome message', () => {
//     render(<Component />, node, () => {
//       expect(node.innerHTML).toContain('Welcome to React components')
//     })
//   })
// })

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
})
