import React from 'react'
import {useState} from 'react'

interface Props {
    name: string,
    age?: number
}

const Example: React.FC<Props> = ({}) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Example
