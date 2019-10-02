/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const profile = () => (
  <Layout>
    <div sx={{ pt: 80 }}>
      <h1>Profile</h1>
    </div>

    <div>
      <div>
        I'm a self taught web developer who loves all things tech. This blog serves as a medium to get me more involved
        in the industry, talk about the projects I'm working on, as well as post other random musings. I'm a huge movie
        buff, gaming nerd, and coffee lover. When I'm not in front of a screen, I'm most likely reading a good book or
        listening to music. Check out my
        <Link to="https://last.fm/user/crunkmastafunk" target="_blank" rel="noopener noreferrer">
          last.fm
        </Link>
        and
        <Link to="https://goodreads.com/jonleopard" target="_blank" rel="noopener noreferrer">
          Goodreads
        </Link>
        profile to see what I'm into these days.
      </div>
    </div>

    <div sx={{ mt: 80 }}>
      <h3 sx={{ mb: 3 }}>Projects</h3>
    </div>

    <div sx={{ flexWrap: 'wrap', mx: '-2' }}>
      <div sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <span role="img" aria-label="Moon">
          🌙
        </span>
        <Link href="https://github.com/jonleopard/lunarphase" target="_blank" rel="noopener noreferrer">
          moonphase.space
        </Link>
        <div>A tiny app that displays the current moon phase</div>
      </div>

      <div sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <span role="img" aria-label="Tools">
          🛠
        </span>
        <Link href="https://github.com/jonleopard/dotfiles" target="_blank" rel="noopener noreferrer">
          dotfiles
        </Link>
        <div>A dotfile repo for my development environment</div>
      </div>

      <div sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <span role="img" aria-label="Hat">
          🎓
        </span>
        <Link href="https://github.com/jonleopard/dotfiles" target="_blank" rel="noopener noreferrer">
          dotfile Starter
        </Link>
        <div>A practice/starter guide on how to make your own dotfile repo</div>
      </div>
    </div>

    <div sx={{ mt: 80 }}>
      <div sx={{ fontSize: [5, 4], mb: 3 }}>Skills</div>
    </div>

    <div sx={{ flexWrap: 'wrap', mx: -2 }}>
      <div sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <div fontSize={3} mb={2}>
          ✨ Frontend
        </div>
        <div>React - Vue - Redux - NextJS</div>
        <div>Webpack - Babel - Prettier - ESLint</div>
        <div>GatsbyJS - Bootstrap - TailwindCSS - Styled Components</div>
      </div>

      <div sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <div fontSize={3} mb={2}>
          ⚡Backend
        </div>
        <div>Node - Go - PHP - Laravel</div>
        <div>SQL - Docker - GraphQL</div>
      </div>
    </div>

    <div sx={{ mt: 80 }}>
      <div sx={{ fontSize: [5, 4], pb: 3 }}>Experience</div>
    </div>

    <div sx={{ flexWrap: 'wrap', mx: -2 }}>
      <div sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <div sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div sx={{ fontSize: 3, mb: 2 }}>GoingUP</div>
          <div>2009 - 2010</div>
        </div>
        <div>Frontend Designer & Project Manager</div>
      </div>

      <div sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <div sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div sx={{ fontSize: 3, mb: 2 }}>GoingUP</div>
          <div>2009 - 2010</div>
        </div>
        <div>Frontend Designer & Project Manager</div>
      </div>
    </div>

    <div sx={{ mt: 80 }}>
      <div sx={{ fontSize: [5, 4], pb: 3 }}>Certifications</div>
    </div>

    <div sx={{ flexWrap: 'wrap', mx: -2 }}>
      <div sx={{ width: ['50%', '25%'], px: 2, py: 2 }}>
        <div>2016 - LinuxAcademy</div>
        <div>Docker Quick Start</div>
      </div>

      <div sx={{ width: ['50%', '25%'], px: 2, py: 2 }}>
        <div>2016 - LinuxAcademy</div>
        <div>Ansible Quick Start</div>
      </div>

      <div sx={{ width: ['50%', '25%'], px: 2, py: 2 }}>
        <div>2016 - LinuxAcademy</div>
        <div>Introduction to Linux</div>
      </div>

      <div sx={{ width: ['50%', '25%'], px: 2, py: 2 }}>
        <div>2016 - LinuxAcademy</div>
        <div>OpenStack Essentials</div>
      </div>

      <div sx={{ width: ['50%', '25%'], px: 2, py: 2 }}>
        <div>2017 - Udemy</div>
        <div>Web Developer Bootcamp</div>
      </div>

      <div sx={{ width: ['50%', '25%'], px: 2, py: 2 }}>
        <div>2017 - Udemy</div>
        <div>GraphQL with React</div>
      </div>

      <div sx={{ width: ['50%', '25%'], px: 2, py: 2 }}>
        <div>2017 - Wes Bos</div>
        <div>LearnNode!</div>
      </div>

      <div sx={{ width: ['50%', '25%'], px: 2, py: 2 }}>
        <div>2017 - Wes Bos</div>
        <div>ES6 for Everyone</div>
      </div>

      <div sx={{ width: ['50%', '25%'], px: 2, py: 2 }}>
        <div>2017 - Wes Bos</div>
        <div>React for Beginners</div>
      </div>
    </div>
  </Layout>
)

export default profile
