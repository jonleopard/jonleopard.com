import * as React from "react";
import {
  FaGithub,
  FaKeybase,
  FaLinkedin,
  FaStackOverflow,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import styled from "styled-components";
import "twin.macro";



function Footer() {
  const WHAT_YEAR_IS_IT = new Date().getFullYear();
  return (
    <footer>
      <div tw="flex-col max-w-3xl pb-6 mx-auto flex text-gray-600 items-center">
        <div tw="flex justify-between w-1/2 text-2xl">
          <a
            href="https://www.linkedin.com/in/jonathan-leopard/"
            tw="hover:text-indigo-600"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/jonleopard" tw="hover:text-indigo-600">
            <FaGithub />
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
    </footer>
  );
}

export default Footer;
