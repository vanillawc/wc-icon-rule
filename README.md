<h1 align="center">&lt;wc-icon-rule&gt; Horizontal Rule with Visual Appeal</h1>

<div align="center">
  <a href="https://github.com/vanillawc/wc-icon-rule/releases"><img src="https://badgen.net/github/tag/vanillawc/wc-icon-rule" alt="GitHub Releases"></a>
  <a href="https://www.npmjs.com/package/@vanillawc/wc-icon-rule"><img src="https://badgen.net/npm/v/@vanillawc/wc-icon-rule" alt="NPM Releases"></a>
  <a href="https://bundlephobia.com/result?p=@vanillawc/wc-icon-rule"><img src="https://badgen.net/bundlephobia/minzip/@vanillawc/wc-icon-rule" alt="Bundlephobia"></a>
  <a href="https://github.com/vanillawc/wc-icon-rule/actions"><img src="https://github.com/vanillawc/wc-icon-rule/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillawc/wc-icon-rule/actions"><img src="https://github.com/vanillawc/wc-icon-rule/workflows/Release/badge.svg" alt="Release Status"></a>

  <a href="https://discord.gg/aSWYgtybzV"><img alt="Discord" src="https://img.shields.io/discord/723296249121603604?color=%23738ADB"></a>
  <a href="https://www.webcomponents.org/element/vanillawc/wc-icon-rule"><img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" alt="Published on WebComponents.org"></a>
</div>

## Installation

*Installation*
```sh
npm i @vanillawc/wc-icon-rule
```

*Import from NPM*
```html
<script type="module" src="node_modules/@vanillawc/wc-icon-rule/index.js"></script>
```

*Import from CDN*
```html
<script type="module" src="https://cdn.jsdelivr.net/gh/vanillawc/wc-icon-rule@1/index.js"></script>
```

## Demo

Try it on [WebComponents.dev](https://webcomponents.dev/edit/QfTAXd2htTqIEJowWrK6?sv=1&pm=1)

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
  <wc-icon-rule>
    <img src="twitter.svg" alt="">
  </wc-icon-rule>  
```

*Note: While this is intended for use with icons, the icon can be any element that accepts `display: inline-block`*

## Contributing

See [CONTRIBUTING.md](https://github.com/vanillawc/vanillawc/blob/main/CONTRIBUTING.md)
