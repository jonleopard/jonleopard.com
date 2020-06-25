import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faStackOverflow,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import 'twin.macro';

const Line = styled.hr`
  border-top: ${(props) => props.height} solid
    ${(props) => props.color};
`;
function Footer() {
  const WHAT_YEAR_IS_IT = new Date().getFullYear();
  return (
    <footer>
      <div tw="w-full flex-col max-w-2xl pt-10 pb-6 px-8 mx-auto flex text-xs font-bold uppercase text-gray-800 items-center">
        <div tw="flex justify-between w-1/2">
          <a href="https://github.com/jonleopard">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://twitter.com/jonlprd">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://stackoverflow.com/users/10541736/jon-leopard">
            <FontAwesomeIcon icon={faStackOverflow} size="2x" />
          </a>
          <a href="https://t.me/hiJon">
            <FontAwesomeIcon icon={faTelegram} size="2x" />
          </a>
          <a href="https://keybase.io/jonleopard/pgp_keys.asc">
            <FontAwesomeIcon icon={faKey} size="2x" />
          </a>
        </div>
        <div tw="mt-2">
          <span>
            &copy;
            {WHAT_YEAR_IS_IT}
          </span>
        </div>
      </div>
      <div tw="grid grid-cols-1 gap-1">
        <Line height="6px" color="#62BB47" />
        <Line height="5px" color="#FCB827" />
        <Line height="4px" color="#F6821F" />
        <Line height="3px" color="#E03A3E" />
        <Line height="2px" color="#963D97" />
        <Line height="1px" color="#009ddc" />
      </div>
    </footer>
  );
}

export default Footer;
