import React, {useState, useRef, useEffect, useReducer} from 'react'

interface Props {
    name: string,
    age?: number
}

export interface Name {
  one: number;
  two: string;
}

type Actions =
  | {type: "add"; payload: string}
  | {type: "remove"; payload: number};

  const nameReducer = (state: Name[], action: Actions) => {
    switch (action.type) {
      case "add":
        return state
      case "remove":
        return state
    }
  }

const Example: React.FC<Props> = ({}) => {
  const [count, setCount] = useState<number>(0);

  const refs = useRef<HTMLInputElement>(null);

  const [state, dispatch] = useReducer(nameReducer, [])

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
