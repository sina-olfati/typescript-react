import React, {useState, useRef, useEffect} from 'react'

interface Props {
    name: string,
    age?: number
}

const Example: React.FC<Props> = ({}) => {
  const [count, setCount] = useState<number>(0);

  const refs = useRef<HTMLInputElement>(null);

  return (
    <div>
      <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <br/>
        <input ref={refs} value = {refs.current?.value} onChange = {() => {console.log(refs.current?.value)}} />
    </div>
  )
}

export default Example
