[![GitHub Releases](https://badgen.net/github/tag/vanillawc/wc-icon-rule)](https://github.com/vanillawc/wc-icon-rule/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillawc/wc-icon-rule)](https://www.npmjs.com/package/@vanillawc/wc-icon-rule)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/@vanillawc/wc-icon-rule)](https://bundlephobia.com/result?p=@vanillawc/wc-icon-rule)
[![MIT License](https://badgen.net/github/license/vanillawc/wc-icon-rule)](https://raw.githubusercontent.com/vanillawc/wc-icon-rule/master/LICENSE)
[![Published on WebComponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vanillawc/wc-icon-rule)
[![Latest Status](https://github.com/vanillawc/wc-icon-rule/workflows/Latest/badge.svg)](https://github.com/vanillawc/wc-icon-rule/actions)
[![Release Status](https://github.com/vanillawc/wc-icon-rule/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-icon-rule/actions)

## Installation

```sh
npm i @vanillawc/wc-icon-rule
```

Then import the `index.js` file at the root of the package.

-----

## Usage

Custom Styles

- `--width` - width of the icon (default `32px`)
- `--height` - height of the icon (default `32px`)
- `--space-around` - space around the icon (default `1em`)
- `--hr-width` - horizontal rule width (default `1px`)
- `--hr-style` - horizontal rule style (default `solid`)
- `--hr-color` - horizontal rule color (default `black`)

### Basic Usage

Add the icon as a child of the element

```html
  <wc-icon-rule id="test">
    <img src="twitter.svg" alt="">
  </wc-icon-rule>  
```

*Note: While this is intended for use with icons, the icon can be any element that accepts `display: inline-block`*

-----

## Demo

### [WC-Icon-Rule - WebComponents.dev](https://webcomponents.dev/edit/QfTAXd2htTqIEJowWrK6?sv=1&pm=1)
