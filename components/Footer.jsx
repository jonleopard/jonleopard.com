import * as React from 'react';
import styled from 'styled-components';
import 'twin.macro';

const Line = styled.hr`
  border-top: ${(props) => props.height} solid
    ${(props) => props.color};
`;
function Footer() {
  const WHAT_YEAR_IS_IT = new Date().getFullYear();
  return (
    <div>
      <div tw="max-w-2xl pt-10 pb-6 px-8 mx-auto">
        <footer tw="flex text-xs font-bold uppercase justify-between">
          <a href="https://github.com/jonleopard" tw="pr-5">
            github
          </a>
          <a href="https://twitter.com/jonlprd" tw="pr-5">
            twitter
          </a>
          <a
            href="https://stackoverflow.com/users/10541736/jon-leopard"
            tw="pr-5"
          >
            stack overflow
          </a>
          <a href="https://t.me/hiJon" tw="pr-5">
            telegram
          </a>
          <a
            href="https://keybase.io/jonleopard/pgp_keys.asc"
            tw="pr-5"
          >
            gpg
          </a>
          <div>
            &copy;
            <span> {WHAT_YEAR_IS_IT}</span>
          </div>
        </footer>
      </div>
      <div tw="grid grid-cols-1 gap-1">
        <Line height="6px" color="#62BB47" />
        <Line height="5px" color="#FCB827" />
        <Line height="4px" color="#F6821F" />
        <Line height="3px" color="#E03A3E" />
        <Line height="2px" color="#963D97" />
        <Line height="1px" color="#009ddc" />
      </div>
    </div>
  );
}

export default Footer;
