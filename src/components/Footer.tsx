import * as React from 'react';
import {
  FaGithub,
  FaStackOverflow,
  FaTelegram,
  FaTwitter,
  FaKeybase,
} from 'react-icons/fa';
import styled from 'styled-components';
import 'twin.macro';

interface Line {
  height: string;
  color: string;
}

const Line = styled.hr`
  border-top: ${(props: Line) => props.height} solid
    ${(props: Line) => props.color};
`;

function Footer() {
  const WHAT_YEAR_IS_IT = new Date().getFullYear();
  return (
    <footer>
      <div tw="flex-col max-w-3xl pb-6 mx-auto flex text-gray-600 items-center">
        <div tw="flex justify-between w-1/2 text-2xl">
          <a href="https://github.com/jonleopard" tw="hover:text-indigo-600">
            <FaGithub tw="w-4" />
          </a>
          <a href="https://twitter.com/jonlprd" tw="hover:text-indigo-600">
            <FaTwitter />
          </a>
          <a
            href="https://stackoverflow.com/users/10541736/jon-leopard"
            tw="hover:text-indigo-600"
          >
            <FaStackOverflow tw="w-full" />
          </a>
          <a href="https://t.me/hiJon" tw="hover:text-indigo-600">
            <FaTelegram />
          </a>
          <a
            href="https://keybase.io/jonleopard/pgp_keys.asc"
            tw="hover:text-indigo-600"
          >
            <FaKeybase />
          </a>
        </div>
        <div tw="mt-2">
          <span tw="font-bold text-sm">
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
