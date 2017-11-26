react-intl-input
================

A flexible input control for [React](http://facebook.github.io/react/index.html) to handle multi languages fields.  

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]


## Installation

```
npm install --save react-intl-input
```

Then you can import one of `react-intl-input` components as follows:

```js
import { IntlInput } from 'react-intl-input';
```

## Features

- Can be used standalone
- Works with [redux-form](https://redux-form.com/7.1.2/)
- Easy customization

## Basic usage

```jsx
import { IntlInput } from 'react-intl-input';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      languages: [
       { value: 'en', label: 'English' },
       { value: 'fr', label: 'French' },
      ],
      initialValues: {
        en: 'This is an english translation',
        fr: 'Ceci est un texte en francais',
      },
    }
  }

  render() {
    return (
      <form onSubmit={() => {}}>
        <IntlInput
          name="basic-intl-input"
          {...this.state}
        />
      </form>
    )
  }
}

```
## Demo & Examples

Live demo with many concrete examples: [papswell.github.io/react-intl-input](https://papswell.github.io/react-intl-input)

## Props

| Property | Type | Default | Description |
|:---|:---|:---|:---|
| name | string _(required)_ | | The name attribute of the html input. |
| languages | array _(required)_ | | The languages handled by the input |
| initialLang | string | | The language selected on the first render |
| initialValues | object | | The initial values for each language |
| onLangChange | func | | Called whenever the language selection changes. ```onLangChange({ value, label}, state)``` |
| onInputChange | func | | Called whenever the current value changes. ```onInputChange(currentLanguage, inputValue, state)``` |
| onInputFocus | func | | Called when the input is focused. ```onInputFocus(syntheticEvent)``` |
| onInputBlur | func | | Called when the input is blurred. ```onInputChange(syntheticEvent)``` |
| inputComponent | func | | A function or a `React.Component` to be used as the input. |


[build-badge]: https://img.shields.io/travis/papswell/react-intl-input/master.png?style=flat-square
[build]: https://travis-ci.org/papswell/react-intl-input

[npm-badge]: https://img.shields.io/npm/v/react-intl-input.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-intl-input

[coveralls-badge]: https://img.shields.io/coveralls/papswell/react-intl-input/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/papswell/react-intl-input
