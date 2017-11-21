import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import Input from './../../src/components/input';

describe('Input component', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
  })

  afterEach(() => {
    unmountComponentAtNode(node);
  })

  it('should have the name prop', () => {
    render(<Input
      name='my-input'
    />, node, () => {
      expect(node.querySelector('input').name).toBe('my-input')
    })
  });

  it('should have the value prop if given', () => {
    render(<Input
      name='my-input'
      value="my value"
      onChange={() => {}}
    />, node, () => {
      expect(node.querySelector('input').value).toBe('my value')
    })
  });

  it('should call the onChange callback', () => {

    const onChange = expect.createSpy();

    render(<Input
      name='input'
      onChange={onChange}
    />, node, () => {

      ReactTestUtils.Simulate.change(node.querySelector('input'));
      expect(onChange).toHaveBeenCalled()
    })
  });

  it('should call the onFocus callback', () => {

    const onFocus = expect.createSpy();

    render(<Input
      name='input'
      onFocus={onFocus}
    />, node, () => {

      ReactTestUtils.Simulate.focus(node.querySelector('input'));
      expect(onFocus).toHaveBeenCalled()
    })
  });

  it('should call the onBlur callback', () => {

    const onBlur = expect.createSpy();

    render(<Input
      name='input'
      onBlur={onBlur}
    />, node, () => {

      ReactTestUtils.Simulate.blur(node.querySelector('input'));
      expect(onBlur).toHaveBeenCalled()
    })
  });
})
