import 'twin.macro';
import Emoji from 'a11y-react-emoji';
import { NextSeo } from 'next-seo';
import routes from '../config/routes';
import PreviewCard from '../components/PreviewCard';
import { getLayout } from '../components/SiteLayout';

function Intro() {
  return (
    <div>
      <h1 tw="block text-5xl font-bold leading-none mb-10">About</h1>

      <div tw="grid grid-cols-1 gap-4">
        <p>
          My career started as a web designer in 2009. Back in the days when
          photoshop reigned king, and slicing up .psd files was common practice.
          In mid 2015, I switched gears and went in all in with programming.
          Since then, I’ve been programming web interfaces and building API
          servers. For frontend work, I specialize in React (NextJS, JAMStack),
          and Go is my language of choice for anything server related.{' '}
        </p>
        <p>
          I've been a US expat since 2012 and currently reside in France. If you
          ever find yourself in the Paris region, let's grab a beer!{' '}
          <a tw="mt-8 text-blue-600" href="https://twitter.com/jonlprd">
            @jonlprd
          </a>
        </p>
        <div>
          <img tw="rounded-xl" src="/img/jon-andorra.jpeg" />
        </div>
      </div>
    </div>
  );
}

function RandomBits() {
  return (
    <div>
      <h1 tw="text-2xl text-gray-900 font-semibold">Random bits</h1>
      <div tw="grid grid-cols-1 gap-4">
        <p>
          Computers have been a part of my life since I was a{' '}
          <PreviewCard text="youngling" src="/img/computer-nerd.jpeg" />.
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
          was my favorite FPS. You can find me occasionally streaming on{' '}
          <a
            href="https://www.twitch.tv/tronbo"
            tw="text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitch <Emoji symbol="👾" role="img" aria-label="Atari Emoji" />
          </a>
          .
        </p>
        <p>
          My first laptop was a tangerine iBook G3 that took me forever to save
          up for. I built my first custom PC in 2003 out of an an{' '}
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
          Music is one of my hobbies. I've been drumming since I could{' '}
          <PreviewCard text="hold a pair of sticks" src="/img/drums.jpeg" /> and
          picked up the guitar when I was 9.
        </p>

        <p>
          I discovered the world of coffee at a young age when my Dad started
          his own{' '}
          <PreviewCard
            text="roasting company"
            src="/img/joe-coffee-online.png"
          />{' '}
          in 1999. He later opened up a{' '}
          <PreviewCard text="storefront" src="/img/colorado-bean.png" /> in 2001
          where I learned how to pull a good shot, and brew a perfect cup of
          joe.
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
          I moved from America to Cabo San Lucas with my family in the Spring of
          2012. We where there for 9 months and then moved to France afterwards.
          I've been living in the Paris region ever since.
        </p>
      </div>
    </div>
  );
}

function About() {
  return (
    <>
      <NextSeo
        title={routes.about.seo.title}
        description={routes.about.seo.description}
        openGraph={routes.about.seo.openGraph}
      />
      <div tw="max-w-3xl mx-auto px-4">
        <div tw="grid grid-cols-1 gap-10">
          <Intro />
          <RandomBits />
        </div>
      </div>
    </>
  );
}

About.getLayout = getLayout;

export default About;
