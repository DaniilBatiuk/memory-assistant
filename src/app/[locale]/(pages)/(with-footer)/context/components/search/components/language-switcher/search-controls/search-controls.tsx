import { SearchBlock } from './components/search-block/search-block'
import { VoiceSaveControls } from './components/voice-save-controls/voice-save-controls'

export const SearchControls: React.FC = () => {
  return (
    <div className='m-auto flex max-w-[675px] items-center gap-4 max-[510px]:flex-col'>
      <SearchBlock />
      <VoiceSaveControls />
    </div>
  )
}
