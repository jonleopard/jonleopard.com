import 'twin.macro'
import Emoji from 'a11y-react-emoji'
import PreviewCard from '../PreviewCard'

export default function RandomBits() {
  return (
    <div>
      <h1 tw="text-2xl text-gray-900 font-semibold">Random bits</h1>
      <div tw="grid grid-cols-1 gap-4">
        <div>
          Computers have been a part of my life since I was a{' '}
          <PreviewCard text="youngling" src="/img/computer-nerd.jpeg" />.
        </div>
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

        <div>
          Music is one of my hobbies. I've been drumming since I could{' '}
          <PreviewCard text="hold a pair of sticks" src="/img/drums.jpeg" /> and
          picked up the guitar when I was 9.
        </div>

        <div>
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
        </div>
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
  )
}
