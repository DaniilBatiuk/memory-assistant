import { LINKS } from '@/constants'

import { Link } from '@/i18n'

import { ActionDropDown } from './components/action-drop-down/action-drop-down'

export const DictionaryItem: React.FC = () => {
  return (
    <div className='relative flex flex-col gap-[5px] border-b py-4 pr-11'>
      <Link
        href={LINKS.Dictionary + '/1'}
        className='truncate font-semibold underline-offset-2 adaptive-font-size-20-24 hover:underline'
      >
        Appearence Appearence Appearence Appearence Appearence Appearence Appearence Appearence
        Appearence Appearence Eng-Rus
      </Link>
      <p className='truncate text-foreground/55'>для узичения иностранных слов</p>
      <ActionDropDown />
    </div>
  )
}
