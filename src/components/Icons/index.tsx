import Dizzy from './Dizzy'
import Flower from './Flower'
import GitHub from './GitHub'
import Keplr from './Kelpr'
import PuzzlePiece from './PuzzlePiece'

type Props = {
  name?: string
  className?: string
}

const Icon = (props: Props) => {
  const { name, className, ...rest } = props

  let SelectedIcon

  switch (name) {
    case 'flower':
      SelectedIcon = Flower
      break
    case 'github':
      SelectedIcon = GitHub
      break
    case 'puzzle-piece':
      SelectedIcon = PuzzlePiece
      break
    case 'keplr':
      SelectedIcon = Keplr
      break
    default:
      SelectedIcon = Dizzy
      break
  }

  return <SelectedIcon className={className} {...rest} />
}

export default Icon
