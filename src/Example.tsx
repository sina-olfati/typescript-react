import React from 'react'

interface Props {
    name: string,
    age?: number,
    fn?: (name: string) => void
}

const Example: React.FC<Props> = () => {
  return (
    <div>
      <input name = "Sina" />
    </div>
  )
}

export default Example
