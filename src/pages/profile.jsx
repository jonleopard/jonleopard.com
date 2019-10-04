/** @jsx jsx */
import { jsx, Heading, Flex, Box } from 'theme-ui'
import { Link } from 'gatsby'
import Emoji from 'a11y-react-emoji'

import Layout from '../components/layout'
import PageHeader from '../components/page-header'

const profile = () => (
  <Layout>
    <PageHeader title="Profile" />
    <Box sx={{ fontSize: [2, 3] }}>
      I'm a self taught web developer who loves all things tech. This blog
      serves as a medium to get me more involved in the industry, talk about the
      projects I'm working on, as well as post other random musings. I'm a huge
      movie buff, gaming nerd, and coffee lover. When I'm not in front of a
      screen, I'm most likely reading a good book or listening to music.
    </Box>

    <div sx={{ mt: 80 }}>
      <h3 sx={{ fontSize: [5, 4], mb: 3 }}>Projects</h3>
    </div>

    <Flex sx={{ flexWrap: 'wrap', mx: -2 }}>
      <Box sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <Emoji symbol="🌙" role="img" aria-label="Moon" />
        <a
          sx={{ color: 'inherit', fontSize: 3, pl: 1 }}
          href="https://github.com/jonleopard/lunarphase"
          target="_blank"
          rel="noopener noreferrer"
        >
          moonphase.space
        </a>
        <div>A tiny app that displays the current moon phase</div>
      </Box>

      <Box sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <Emoji symbol="🛠" role="img" aria-label="Tools" />
        <a
          sx={{ color: 'inherit', fontSize: 3, pl: 1 }}
          href="https://github.com/jonleopard/dotfiles"
          target="_blank"
          rel="noopener noreferrer"
        >
          dotfiles
        </a>
        <div>A dotfile repo for my development environment</div>
      </Box>

      <Box sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <Emoji symbol="🎓" role="img" aria-label="Hat" />
        <a
          sx={{ color: 'inherit', fontSize: 3, pl: 1 }}
          href="https://github.com/jonleopard/dotfiles"
          target="_blank"
          rel="noopener noreferrer"
        >
          dotfile Starter
        </a>
        <div>A practice/starter guide on how to make your own dotfile repo</div>
      </Box>

      <Box sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <Emoji symbol="✍️" role="img" aria-label="Writing" />
        <a
          sx={{ color: 'inherit', fontSize: 3, pl: 1 }}
          href="https://github.com/jonleopard/til"
          target="_blank"
          rel="noopener noreferrer"
        >
          TIL
        </a>
        <div>
          A collection of useful tips and things I've learned on a daily basis
        </div>
      </Box>
    </Flex>

    <div sx={{ mt: 80 }}>
      <h3 sx={{ fontSize: [5, 4], mb: 3 }}>Skills</h3>
    </div>

    <Flex sx={{ flexWrap: 'wrap', mx: -2 }}>
      <Box sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <div sx={{ fontSize: 3, mb: 2 }}>
          <Emoji symbol="✨" role="img" aria-label="stars" />
          Frontend
        </div>
        <div sx={{ textAlign: 'justify', textJustify: 'inter-word' }}>
          React - Vue - Redux - NextJS Webpack - Babel - Prettier - ESLint
          GatsbyJS - Bootstrap - TailwindCSS Styled Components
        </div>
      </Box>

      <Box sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <div sx={{ fontSize: 3, mb: 2 }}>
          <Emoji symbol="⚡" role="img" aria-label="lightning" />
          Backend
        </div>
        <div sx={{ textAlign: 'justify', textJustify: 'inter-word' }}>
          Go - PHP - Node - Express - Laravel PostgreSQL - MySQL - Docker
          GraphQL
        </div>
      </Box>
    </Flex>

    <div sx={{ mt: 80 }}>
      <h3 sx={{ fontSize: [5, 4], mb: 3 }}>Experience</h3>
    </div>

    <Flex sx={{ flexWrap: 'wrap', mx: -2 }}>
      <Box sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div sx={{ fontSize: 3, mb: 2 }}>UpFX</div>
          <div>2014 - 2016</div>
        </Flex>
        <div>Frontend Designer & Project Manager</div>
      </Box>

      <Box sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div sx={{ fontSize: 3, mb: 2 }}>GoingUP</div>
          <div>2009 - 2010</div>
        </Flex>
        <div>Frontend Designer & Project Manager</div>
      </Box>

      <Box sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div sx={{ fontSize: 3, mb: 2 }}>1Cart</div>
          <div>2010 - 2013</div>
        </Flex>
        <div>Frontend Designer, Wireframer, Project Manager</div>
      </Box>

      <Box sx={{ width: ['100%', '50%'], px: 2, py: 2 }}>
        <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div sx={{ fontSize: 3, mb: 2 }}>Total Recall</div>
          <div>2006 - 2008</div>
        </Flex>
        <div>Technician & Customer Support Representative</div>
      </Box>
    </Flex>
  </Layout>
)

export default profile
