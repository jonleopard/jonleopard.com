import { Box } from 'rebass'
import styled from 'styled-components'

// 33px = 1.65em;

const Markdown = styled(Box)`
  h1 {
    font-size: 37px;
    line-height: 57px;
    margin-bottom: 30px;
    font-family: 'Rubik';
  }

  h2 {
    font-size: 29px;
    line-height: 46px;
    font-family: 'Rubik';
  }

  h3 {
    font-size: 23px;
    font-weight: 500;
    line-height: 37px;
    font-family: 'Rubik';
  }

  p {
    font-family: 'Lato';
    font-size: 18px;
    line-height: 1.667em;
    text-align: justify;
    hyphens: auto;
    padding-bottom: 19px;
  }

  ul {
    list-style-type: circle;
    font-family: 'Lato';
    font-size: 18px;
  }
  li {
    font-family: 'Lato';
    font-size: 18px;
  }

  /*
Name: Duotone Dark
Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)

Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
*/

  code[class*='language-'],
  pre[class*='language-'] {
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter',
      'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', 'Courier New', Courier,
      monospace;
    font-size: 16px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: #2a2734;
    color: #9a86fd;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #6a51e6;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background: #6a51e6;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6c6783;
  }

  .token.punctuation {
    color: #6c6783;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.tag,
  .token.operator,
  .token.number {
    color: #e09142;
  }

  .token.property,
  .token.function {
    color: #9a86fd;
  }

  .token.tag-id,
  .token.selector,
  .token.atrule-id {
    color: #eeebff;
  }

  code.language-javascript,
  .token.attr-name {
    color: #c4b9fe;
  }

  code.language-css,
  code.language-scss,
  .token.boolean,
  .token.string,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .language-scss .token.string,
  .style .token.string,
  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit,
  .token.statement,
  .token.regex,
  .token.atrule {
    color: #ffcc99;
  }

  .token.placeholder,
  .token.variable {
    color: #ffcc99;
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    border-bottom: 1px dotted #eeebff;
    text-decoration: none;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: #c4b9fe;
  }

  .token.entity {
    cursor: help;
  }

  pre > code.highlight {
    outline: 0.4em solid #8a75f5;
    outline-offset: 0.4em;
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
  .line-numbers .line-numbers-rows {
    border-right-color: #2c2937;
  }

  .line-numbers-rows > span:before {
    color: #3c3949;
  }

  /* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/
  .line-highlight {
    background: rgba(224, 145, 66, 0.2);
    background: -webkit-linear-gradient(left, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0));
    background: linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0));
  }
`

export default Markdown