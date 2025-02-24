import { useState } from 'react'

import { Label, RadioGroup, RadioGroupItem } from '@/components/ui'

import { cn } from '@/lib'

interface RadioGroupProps {
  setStep: React.Dispatch<React.SetStateAction<number>>
  setResult: React.Dispatch<React.SetStateAction<boolean[]>>
  variants: IVariant[]
}

export const RadioGroupBlock: React.FC<RadioGroupProps> = ({
  setStep,
  setResult,
  variants,
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string | 'none'>('none')
  const handleResetSelection = () => {
    setSelectedValue('none')
    setStep(prev => prev + 1)
  }

  return (
    <div className='absolute left-0 w-full px-[15px] adaptive-bottom-20-60'>
      <RadioGroup value={selectedValue} disabled={selectedValue !== 'none'}>
        {variants.map((variant, index) => (
          <div
            key={index}
            className={cn(
              'flex cursor-pointer items-center space-x-3 rounded-lg border px-[15px] py-3 hover:bg-foreground/5',
              {
                'bg-[#16ff01]/50 hover:bg-[#16ff01]/50':
                  selectedValue === String(index) && variant.isRight,
                'bg-[#ff2151]/50 hover:bg-[#ff2151]/50':
                  selectedValue === String(index) && !variant.isRight,
              },
            )}
            onClick={() => document.getElementById(`r${index}`)?.click()}
          >
            <RadioGroupItem
              value={String(index)}
              id={`r${index}`}
              onClick={e => {
                e.stopPropagation()
                setSelectedValue(String(index))
                setResult(prev => [...prev, variants[+String(index)].isRight])
                setTimeout(handleResetSelection, 1000)
              }}
            />
            <Label
              htmlFor={`r${index}`}
              className='cursor-pointer text-lg'
              onClick={e => e.stopPropagation()}
            >
              {variant.variant}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
