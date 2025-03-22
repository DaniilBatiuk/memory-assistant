import { useEffect, useState } from 'react'

export const useQuizInit = () => {
  const [type, setType] = useState<string | null>(null)
  const [openTypeDialog, setOpenTypeDialog] = useState(false)
  const [openQuantityDialog, setOpenQuantityDialog] = useState(false)

  useEffect(() => {
    if (type) {
      setOpenQuantityDialog(true)
    }
  }, [type])

  useEffect(() => {
    if (!openQuantityDialog && openTypeDialog!) {
      setType(null)
    }
  }, [openQuantityDialog, openTypeDialog])

  return {
    type,
    setType,
    openTypeDialog,
    setOpenTypeDialog,
    openQuantityDialog,
    setOpenQuantityDialog,
  }
}
