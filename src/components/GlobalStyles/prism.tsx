import { createGlobalStyle } from 'styled-components'

const GlobalPrismStyles = createGlobalStyle`
code[class*="language-"],
pre[class*="language-"] {
  font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  -webkit-overflow-scrolling: touch;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  color: #fff;
  color: #edf2f7;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  line-height: 1.5;
  tab-size: 4;
  hyphens: none;
}

pre[class*="language-"] {
  overflow: auto;
  padding: 1rem;
  border-radius: 0.5rem;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background-color: #2d3748;
  font-size: 0.875rem;
}

code.language-js .token.regex,
pre.language-js .token.regex,
.token.selector,
.token.attr-name,
.token.property,
.token.regex,
.token.class-name,
.token.entity {
  color: #ffe484;
}

code.language-diff,
pre.language-diff {
  color: #cbd5e0;
}

code.language-diff .token.inserted,
pre.language-diff .token.inserted,
.token.url,
.token.attr-value,
.token.char,
.token.string,
.token.builtin,
.token.inserted,
.token.boolean,
.token.constant {
  color: #b5f4a5;
}

:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #a0aec0;
}

.namespace {
  opacity: 0.7;
}

.token.symbol,
.token.deleted,
.token.tag,
.token.number,
code.language-js .token.boolean,
pre.language-js .token.boolean {
  color: #ff8383;
}

.token.unit,
.token.function,
.token.punctuation,
.token.hexcode,
.token.operator,
code.language-js .token.operator,
pre.language-js .token.operator {
  color: #93ddfd;
}

.token.atrule,
.token.atrule > .token.property,
.token.atrule > .token.property + .token.punctuation,
.token.atrule
  > .token.property
  + .token.punctuation
  + .token.number
  + .token.unit,
.token.atrule > .token.number,
.token.atrule > .token.unit,
code.language-js .token.punctuation,
pre.language-js .token.punctuation,
code.language-js .token.keyword,
pre.language-js .token.keyword,
code.language-bash .token.function,
pre.language-bash .token.function {
  color: #fff;
}

.token.rule,
.token.important,
.token.variable {
  font-weight: inherit;
  color: #d9a9ff;
}

.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

`

export default GlobalPrismStyles
