import * as React from 'react';
import tw, { styled } from 'twin.macro';
import Emoji from 'a11y-react-emoji';
import { getLayout } from '../components/SiteLayout';

const StyledImage = tw.img`max-w-xs rounded overflow-hidden shadow-lg absolute z-50 left-0`;

// TODO: This should be better...
function PreviewCard({ src, alt, text }) {
  const [isShown, setIsShown] = React.useState(false);

  return (
    <>
      <a
        href={src}
        tw="relative text-blue-600 visited:text-purple-600"
        onMouseEnter={() => {
          setIsShown(true);
        }}
        onMouseLeave={() => setIsShown(false)}
      >
        {text}
        {isShown && <StyledImage src={src} alt={alt} />}
      </a>
    </>
  );
}

function Profile() {
  return (
    <div tw="max-w-3xl mx-auto px-4">
      <div tw="grid grid-cols-1 gap-10">
        <div>
          <h1 tw="block text-5xl font-bold leading-none mb-10">
            Profile
          </h1>
          <p>
            I'm a web developer with a background in design. This
            website serves as a medium to get me more involved in the
            industry, discuss the projects I'm working on, and other
            random musings. I've been a US expat since 2012 and
            currently reside in France. If you ever find yourself in
            the Paris region, let's grab a beer!
          </p>
          <div>
            <a
              tw="mt-8 text-blue-600"
              href="https://twitter.com/jonlprd"
            >
              @jonlprd
            </a>
          </div>
        </div>

        <div>
          <h1 tw="text-2xl text-gray-900 font-semibold">Projects</h1>
          <div tw="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <div>
              <Emoji
                symbol="🌙"
                role="img"
                aria-label="Moon"
                tw="mr-2"
              />
              <a
                tw="text-blue-600"
                href="https://github.com/jonleopard/lunarphase"
                target="_blank"
                rel="noopener noreferrer"
              >
                moonphase.space
              </a>
              <p>A tiny app that displays the current moon phase.</p>
            </div>

            <div>
              <Emoji
                symbol="🏠 "
                role="img"
                aria-label="House"
                tw="mr-2"
              />
              <a
                tw="text-blue-600"
                href="https://github.com/jonleopard/dotfiles"
                target="_blank"
                rel="noopener noreferrer"
              >
                dotfiles
              </a>
              <p>dotfiles for my macOS environment.</p>
            </div>

            <div>
              <Emoji
                symbol="🎓"
                role="img"
                aria-label="Hat"
                tw="mr-2"
              />
              <a
                tw="text-blue-600"
                href="https://github.com/jonleopard/dotfile-starter"
                target="_blank"
                rel="noopener noreferrer"
              >
                dotfile starter
              </a>
              <p>
                A practice/starter guide on how to make your own
                dotfile repo.
              </p>
            </div>

            <div>
              <Emoji
                symbol="✍️"
                role="img"
                aria-label="Writing"
                tw="mr-2"
              />
              <a
                href="https://github.com/jonleopard/til"
                tw="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                til (today i learned)
              </a>
              <p>
                A collection of useful tips and things I've learned on
                a daily basis.
              </p>
            </div>

            <div>
              <Emoji
                symbol="🎨"
                role="img"
                aria-label="Artist Palette"
                tw="mr-2"
              />
              <a
                href="https://github.com/jonleopard/base16-papercolor-scheme"
                tw="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                base16 papercolor
              </a>
              <p>Papercolor scheme ported for base16</p>
            </div>
          </div>
        </div>

        <div>
          <h1 tw="text-2xl text-gray-900 font-semibold">
            Random bits
          </h1>
          <div tw="grid grid-cols-1 gap-4">
            <p>
              Computers have been a part of my life since I was a{' '}
              <PreviewCard
                text="youngling"
                tw="text-blue-600"
                src="/img/computer-nerd.jpeg"
                alt="pooter nerd"
              />
              .
            </p>
            <p>
              I'm a huge gamer! My first experiences were{' '}
              <a
                href="https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
                tw="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prince of Persia
              </a>{' '}
              and{' '}
              <a
                href="https://en.wikipedia.org/wiki/Lemmings_(video_game)"
                tw="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lemmings
              </a>
              . Bungie's{' '}
              <a
                href="https://en.wikipedia.org/wiki/Marathon_Trilogy"
                tw="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Marathon
              </a>{' '}
              was my favorite FPS. You can find me occasionally
              streaming on{' '}
              <a
                href="https://www.twitch.tv/tronbo"
                tw="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitch
                <Emoji
                  symbol="👾"
                  role="img"
                  aria-label="Atari Emoji"
                  tw="mr-2"
                />
                .
              </a>
            </p>
            <p>
              My first laptop was a tangerine iBook G3 that took me
              forever to save up for. I built my first custom PC in
              2003 out of an an{' '}
              <a
                href="https://en.wikipedia.org/wiki/EMachines"
                tw="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                eMachine
              </a>{' '}
              chassis and some leftover server components from my Dad.
            </p>

            <p>
              Music is one of my hobbies. I've been drumming since I
              could{' '}
              <PreviewCard
                text="hold a pair of sticks"
                src="/img/drums.jpeg"
              />{' '}
              and picked up the guitar when I was 9.
            </p>

            <p>
              I discovered the world of coffee at a young age when my
              Dad started his own{' '}
              <PreviewCard
                text="roasting company"
                src="/img/joe-coffee-online.png"
                alt="image of old website"
              />{' '}
              in 1999. He later opened up a{' '}
              <PreviewCard
                text="storefront"
                src="/img/colorado-bean.png"
                alt="Image of coffee shop"
              />{' '}
              in 2001 where I learned how to pull a good shot, and
              brew a perfect cup of joe.
            </p>
            <p>
              I'm a{' '}
              <a
                tw="text-blue-600"
                target="blank"
                rel="noopener noreferrer"
                href="https://trakt.tv/users/lprd"
              >
                movie buff
              </a>
              .
            </p>
            <p>
              I moved from America to Cabo San Lucas with my family in
              the Spring of 2012. We where there for 9 months and then
              moved to France afterwards. I've been living in the
              Paris region ever since.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Profile.getLayout = getLayout;

export default Profile;
