import 'twin.macro'
import ListItem from './ListItem'

export default function OSSProjects() {
  return (
    <div>
      <h1 tw="text-2xl text-gray-900 font-semibold mb-1">
        Open Source Projects
      </h1>
      <div tw="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <ListItem
          symbol="🎓"
          label="hat"
          href="https://github.com/jonleopard/dotfile-starter"
          title="dotfile starter"
        >
          A practice/starter guide on how to make your own dotfile repo.
        </ListItem>

        <ListItem
          symbol="🏠 "
          label="house"
          href="https://github.com/jonleopard/dotfiles"
          title="dotfiles"
        >
          dotfiles for my macOS environment
        </ListItem>
        <ListItem
          symbol="✍️"
          label="writing"
          href="https://github.com/jonleopard/til"
          title="til (today I learned)"
        >
          A collection of useful tips and things I've learned on a daily basis
        </ListItem>
        <ListItem
          symbol="🎨"
          label="artist palette"
          href="https://github.com/jonleopard/base16-papercolor-scheme"
          title="base16 papercolor"
        >
          Papercolor scheme ported for base16
        </ListItem>
        <ListItem
          symbol="🌙"
          label="moon"
          href="https://github.com/jonleopard/moonphase.space"
          title="moonphase.space"
        >

          A tiny app that displays the current moon phase.
        </ListItem>
      </div>
    </div>
  )
}
