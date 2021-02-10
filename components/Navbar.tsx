import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';

interface StyledLink {
  isActive: boolean;
}

interface Props {
  activeRoute: string;
}

const StyledLink = styled.span`
  a {
    ${tw`inline-block px-4 py-2 font-medium leading-tight text-black rounded-lg hover:bg-gray-100`};
    background: ${(props: StyledLink) =>
      props.isActive ? tw`bg-gray-100 rounded-lg` : 'none'};
  }

  a: hover {
    ${tw`inline-block px-4 py-2 font-medium leading-tight text-black rounded-lg hover:bg-gray-100`};
  }
`;

function NavLinks({ activeRoute }: Props) {
  return (
    <>
      <StyledLink isActive={activeRoute === 'Jon Leopard'}>
        <Link href="/">
          <a>Jon Leopard</a>
        </Link>
      </StyledLink>

      <div tw="mx-auto" />

      <StyledLink isActive={activeRoute === 'Profile'}>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </StyledLink>

      <StyledLink isActive={activeRoute === 'Blog'}>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </StyledLink>
    </>
  );
}

function Navbar() {
  const router = useRouter();

  let activeRoute = '';
  let activePath = '';
  if (router.pathname === '/') {
    activeRoute = 'Home';
    activePath = '/';
  }
  if (router.pathname.startsWith('/profile')) {
    activeRoute = 'Profile';
    activePath = '/profile';
  }
  if (router.pathname.includes('/blog')) {
    activeRoute = 'Blog';
    activePath = '/blog';
  }

  return (
    <div tw="max-w-3xl px-2 mx-auto">
      <Link href={activePath}>
        <nav tw="flex items-baseline flex-shrink-0 py-4">
          <NavLinks activeRoute={activeRoute} />
        </nav>
      </Link>
    </div>
  );
}

export default Navbar;
