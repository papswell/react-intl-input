import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Option from './../../src/components/option';

describe('Option component', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
  })

  afterEach(() => {
    unmountComponentAtNode(node);
  })

  it('displays the label prop', () => {
    render(<Option label="Option label" />, node, () => {
      expect(node.innerHTML)
        .toContain('Option label')
    })
  })

  it('displays the warning if needed', () => {
    render(<Option label="Option label" displayWarning />, node, () => {
      expect(node.innerHTML)
        .toContain('⚠')
    })
  })
})
