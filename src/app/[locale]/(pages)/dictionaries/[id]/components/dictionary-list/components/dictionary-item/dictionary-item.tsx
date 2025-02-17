import { ActionDropDown } from './components/action-drop-down/action-drop-down'

export const DictionaryItem: React.FC = () => {
  return (
    <div className='relative flex flex-col gap-[5px] border-b py-4 pr-11'>
      <h2 className='truncate font-semibold adaptive-font-size-20-24'>Eng-Rus</h2>
      <p className='truncate text-foreground/55'>для узичения иностранных слов</p>
      <ActionDropDown />
    </div>
  )
}
