import { Box } from 'grid-styled';
import styled from 'styled-components';
import { H2 } from 'components/typography';

const Markdown = Box.extend`
  color: ${props => props.theme.colors.text};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  table {
    display: table;
    margin: 24px 0;
    width: 100%;

    th {
      padding: 8px 10px;
      background: #f4f7fd;
      font-size: 16px;
      font-weight: 600;
      text-align: left;
    }

    tr {
      background: #fff;

      &:nth-child(even) {
        background: #f4f7fd;
      }
    }

    td {
      padding: 8px 10px;
    }

    em {
      font-style: normal;
      text-decoration: underline;
    }
  }

  p {
    margin-bottom: 16px;

    &:first-of-type {
      font-size: 1.1em;
    }
  }

  p,
  li {
    font-size: 16px;
    line-height: 1.9em;
  }

  strong {
    font-weight: 500;
  }

  img {
    width: calc(100% + 200px);
    margin: 32px 0 23px -100px;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4em;
    margin: 16px 0;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4em;
    margin: 16px 0;
  }

  hr {
    border-color: rgba(255, 255, 255, 0.2);
  }

  .gatsby-resp-image-wrapper {
    margin: 24px 0;
  }

  a {
    color: ${props => props.theme.colors.text};
    padding-bottom: 1px;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  }

  /**
 * Dracula Theme for Prism.JS
 *
 * @author Gustavo Costa
 * e-mail: gusbemacbe@gmail.com
 * @license MIT 2016
 */

  .gatsby-highlight {
    background-color: rgba(40, 42, 54, 1);
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    background-color: rgba(40, 42, 54, 1);
    border-color: inherit;
    border-radius: 0px;
    color: #ccc;
    direction: ltr;
    font-family: Hack, Consolas, Monaco, 'Andale Mono', monospace;
    line-height: 1.5;
    margin: auto;
    text-align: left;
    word-break: normal;
    word-spacing: 0;
  }

  code::selection {
    background-color: #5a5f80;
  }

  pre::selection {
    background-color: #5a5f80;
  }

  ::selection {
    background-color: #5a5f80;
  }

  ::selector {
    background-color: #5a5f80;
  }

  .token.comment {
    color: rgba(98, 114, 164, 1);
  }

  .token.prolog {
    color: rgba(207, 207, 194, 1);
  }

  .token.tag {
    color: rgba(220, 104, 170, 1);
  }

  .token.entity {
    color: rgba(139, 233, 253, 1);
  }

  .token.atrule {
    color: rgba(98, 239, 117, 1);
  }

  .token.url {
    color: rgba(102, 217, 239, 1);
  }

  .token.selector {
    color: rgba(207, 207, 194, 1);
  }

  .token.string {
    color: rgba(241, 250, 140, 1);
  }

  .token.property {
    color: rgba(255, 184, 108, 1);
  }

  .token.important {
    color: rgba(255, 121, 198, 1);
    font-weight: bold;
  }

  .token.punctuation {
    color: rgba(230, 219, 116, 1);
  }

  .token.number {
    color: rgba(189, 147, 249, 1);
  }

  .token.function {
    color: rgba(80, 250, 123, 1);
  }

  .token.class-name {
    color: rgba(255, 184, 108, 1);
  }

  .token.keyword {
    color: rgba(255, 121, 198, 1);
  }

  .token.boolean {
    color: rgba(255, 184, 108, 1);
  }

  .token.operator {
    color: rgba(139, 233, 253, 1);
  }

  .token.char {
    color: rgba(255, 135, 157, 1);
  }

  .token.regex {
    color: rgba(80, 250, 123, 1);
  }

  .token.variable {
    color: rgba(80, 250, 123, 1);
  }

  .token.constant {
    color: rgba(255, 184, 108, 1);
  }

  .token.symbol {
    color: rgba(255, 184, 108, 1);
  }

  .token.builtin {
    color: rgba(255, 121, 198, 1);
  }

  .token.attr-value {
    color: #7ec699;
  }

  .token.deleted {
    color: #e2777a;
  }

  .token.namespace {
    color: #e2777a;
  }

  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token {
    color: #ff79c6;
  }

  .langague-cpp .token.string {
    color: #8be9fd;
  }

  .langague-c .token.string {
    color: #8be9fd;
  }

  .language-css .token.selector {
    color: rgba(80, 250, 123, 1);
  }

  .language-css .token.property {
    color: rgba(255, 184, 108, 1);
  }

  .language-java span.token.class-name {
    color: #8be9fd;
  }

  .language-java .token.class-name {
    color: #8be9fd;
  }

  .language-markup .token.attr-value {
    color: rgba(102, 217, 239, 1);
  }

  .language-markup .token.tag {
    color: rgba(80, 250, 123, 1);
  }

  .language-objectivec .token.property {
    color: #66d9ef;
  }

  .language-objectivec .token.string {
    color: #50fa7b;
  }

  .language-php .token.boolean {
    color: #8be9fd;
  }

  .language-php .token.function {
    color: #ff79c6;
  }

  .language-php .token.keyword {
    color: #66d9ef;
  }

  .language-ruby .token.symbol {
    color: #8be9fd;
  }

  .language-ruby .token.class-name {
    color: #cfcfc2;
  }

  div.prism-show-language {
    color: green;
    position: relative;
  }

  div.prism-show-language > div.prism-show-language-label {
    color: #000;
    display: inline-block;
    position: absolute;
    bottom: auto;
    left: auto;
    top: 0;
    right: 0;
    width: auto;
    height: auto;
    font-size: 0.9em;
    border-radius: 0 0 0 5px;
    padding: 0 0.5em;
    text-shadow: none;
    z-index: 1;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
    background: #cfcfcf;
  }

  .command-line-prompt {
    border-right: 1px solid #999;
    display: block;
    float: left;
    font-size: 100%;
    letter-spacing: -1px;
    margin-right: 1em;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .command-line-prompt > span:before {
    color: #999;
    content: ' ';
    display: block;
    padding-right: 0.8em;
  }

  .command-line-prompt > span[data-user]:before {
    content: '[' attr(data-user) '@' attr(data-host) '] $';
  }

  .command-line-prompt > span[data-user='root']:before {
    content: '[' attr(data-user) '@' attr(data-host) '] #';
  }

  .command-line-prompt > span[data-prompt]:before {
    content: attr(data-prompt);
  }

  pre.line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }

  pre.line-numbers > code {
    position: relative;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em;
    /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 1px solid #999;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .line-numbers-rows > span {
    pointer-events: none;
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #999;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }

  pre.code-toolbar {
    position: relative;
  }

  pre.code-toolbar > .toolbar {
    position: absolute;
    top: 0.3em;
    right: 0.2em;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }

  pre.code-toolbar:hover > .toolbar {
    opacity: 1;
  }

  pre.code-toolbar > .toolbar .toolbar-item {
    display: inline-block;
  }

  pre.code-toolbar > .toolbar a {
    cursor: pointer;
  }

  pre.code-toolbar > .toolbar button {
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    -webkit-user-select: none;
    /* for button */
    -moz-user-select: none;
    -ms-user-select: none;
  }

  pre.code-toolbar > .toolbar a,
  pre.code-toolbar > .toolbar button,
  pre.code-toolbar > .toolbar span {
    color: #bbb;
    font-size: 0.8em;
    padding: 0 0.5em;
    background: #f5f2f0;
    background: rgba(224, 224, 224, 0.2);
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;
  }

  pre.code-toolbar > .toolbar a:hover,
  pre.code-toolbar > .toolbar a:focus,
  pre.code-toolbar > .toolbar button:hover,
  pre.code-toolbar > .toolbar button:focus,
  pre.code-toolbar > .toolbar span:hover,
  pre.code-toolbar > .toolbar span:focus {
    color: inherit;
    text-decoration: none;
  }

  pre::-webkit-scrollbar {
    width: 14px;
  }

  pre::-webkit-scrollbar-track {
    background-color: #6272a4;
    border-radius: 0px;
  }

  pre::-webkit-scrollbar-thumb {
    background-color: #bd93f9;
    border-radius: 0px;
  }
`;

export default Markdown;
