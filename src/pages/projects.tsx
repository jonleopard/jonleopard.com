import 'twin.macro';
import { NextSeo } from 'next-seo';
import routes from '../config/routes';
import { getLayout } from '../components/SiteLayout';
import OSSItem from '../components/OSSItem';

function OSSProjects() {
  return (
    <div>
      <h1 tw="text-2xl text-gray-900 font-semibold mb-1">
        Open Source Projects
      </h1>
      <div tw="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <OSSItem
          symbol="🎓"
          label="hat"
          href="https://github.com/jonleopard/dotfile-starter"
          title="dotfile starter"
          description="A practice/starter guide on how to make your own dotfile repo."
        />
        <OSSItem
          symbol="🏠 "
          label="house"
          href="https://github.com/jonleopard/dotfiles"
          title="dotfiles"
          description="dotfiles for my macOS environment"
        />
        <OSSItem
          symbol="✍️"
          label="writing"
          href="https://github.com/jonleopard/til"
          title="til (today I learned)"
          description="A collection of useful tips and things I've learned on a daily basis"
        />
        <OSSItem
          symbol="🎨"
          label="artist palette"
          href="https://github.com/jonleopard/base16-papercolor-scheme"
          title="base16 papercolor"
          description="Papercolor scheme ported for base16"
        />
        <OSSItem
          symbol="🌙"
          label="moon"
          href="https://github.com/jonleopard/moonphase.space"
          title="moonphase.space"
          description="A tiny app that displays the current moon phase."
        />
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
          <p tw="text-lg">
            Creationshop • Frontend developer and Project manager
          </p>
          <p tw="text-gray-600">March 2009 - March 2021</p>
        </div>

        <div>
          <p tw="text-lg">UpFX • Frontend developer</p>
          <p tw="text-gray-600">April 2014 - November 2016</p>
        </div>

        <div>
          <p tw="text-lg">
            1Cart • Frontend designer, Wireframer, Project manager
          </p>
          <p tw="text-gray-600">Feb 2010 - September 2013</p>
        </div>

        <div>
          <p tw="text-lg">GoingUP • Frontend designer & Project manager</p>
          <p tw="text-gray-600">May 2009 - November 2010</p>
        </div>
        <div>
          <a
            tw="text-blue-600 text-lg"
            href="https://www.linkedin.com/in/jonathan-leopard"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my Linkedin profile →
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <>
      <NextSeo
        title={routes.projects.seo.title}
        description={routes.projects.seo.description}
        openGraph={routes.projects.seo.openGraph}
      />
      <div tw="max-w-3xl mx-auto px-4">
        <h1 tw="block text-5xl font-bold leading-none mb-10">Projects</h1>
        <div tw="grid grid-cols-1 gap-10">
          <OSSProjects />
          <WorkHistory />
        </div>
      </div>
    </>
  );
}

Projects.getLayout = getLayout;

export default Projects;
