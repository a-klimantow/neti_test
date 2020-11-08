import { useState } from "react"

export const useSearch = () => {
  const [value, setValue] = useState("")

  return { value, onChange: (e) => setValue(e.target.value) }
}
