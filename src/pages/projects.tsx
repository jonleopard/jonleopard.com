import 'twin.macro';
import Emoji from 'a11y-react-emoji';
import { getLayout } from '../components/SiteLayout';

function OSSProjects() {
  return (
    <div>
      <h1 tw="text-2xl text-gray-900 font-semibold">Open Source Projects</h1>
      <div tw="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <div>
          <Emoji symbol="🌙" role="img" aria-label="Moon" tw="mr-2" />
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
          <Emoji symbol="🏠 " role="img" aria-label="House" tw="mr-2" />
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
          <Emoji symbol="🎓" role="img" aria-label="Hat" tw="mr-2" />
          <a
            tw="text-blue-600"
            href="https://github.com/jonleopard/dotfile-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            dotfile starter
          </a>
          <p>A practice/starter guide on how to make your own dotfile repo.</p>
        </div>

        <div>
          <Emoji symbol="✍️" role="img" aria-label="Writing" tw="mr-2" />
          <a
            href="https://github.com/jonleopard/til"
            tw="text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            til (today i learned)
          </a>
          <p>
            A collection of useful tips and things I've learned on a daily
            basis.
          </p>
        </div>

        <div>
          <Emoji symbol="🎨" role="img" aria-label="Artist Palette" tw="mr-2" />
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
  );
}

function WorkHistory() {
  return (
    <div>
      <h1 tw="text-2xl text-gray-900 font-semibold">Work History</h1>

      <div tw="grid grid-cols-1 gap-4">
        <div>
          <p>Creationshop • Frontend developer and Project manager</p>
          <p tw="text-gray-600">March 2009 - March 2021</p>
        </div>

        <div>
          <p>UpFX • Frontend developer</p>
          <p tw="text-gray-600">April 2014 - November 2016</p>
        </div>

        <div>
          <p>1Cart • Frontend designer, Wireframer, Project manager</p>
          <p tw="text-gray-600">Feb 2010 - September 2013</p>
        </div>

        <div>
          <p>GoingUP • Frontend designer & Project manager</p>
          <p tw="text-gray-600">May 2009 - November 2010</p>
        </div>
        <div>
          <a
            tw="text-blue-600"
            href="https://www.linkedin.com/in/jonathan-leopard"
          >
            View my linkedin profile →
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div tw="max-w-3xl mx-auto px-4">
      <h1 tw="block text-5xl font-bold leading-none mb-10">Projects</h1>
      <div tw="grid grid-cols-1 gap-10">
        <OSSProjects />
        <WorkHistory />
      </div>
    </div>
  );
}

Projects.getLayout = getLayout;

export default Projects;
