import { ControlsLoading } from './components/dictionary-control/components/controls-loading/controls-loading'
import { WordsLoading } from './components/words-list/components/words-loading/words-loading'

export default function Loading() {
  return (
    <div className='container adaptive-margin-top-20-60'>
      <ControlsLoading />
      <div>
        <WordsLoading />
      </div>
    </div>
  )
}
