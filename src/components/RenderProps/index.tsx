import React, { memo, useState, useMemo } from 'react'
const RenderProps: React.FC<RD.RenderP> = ({ name, children }) => {
  const [age, setAge] = useState(18)
  const myChildren = useMemo(
    () => (children instanceof Function ? children(setAge) : children),
    [children, setAge],
  )
  return (
    <div>
      RenderProps --{name} {age}
      <button onClick={() => setAge(age + 1)}>age + 1</button>
      <div>{myChildren}</div>
    </div>
  )
}
export default memo(RenderProps)
