declare namespace RD {
  type RenderP = {
    name: string
    children:
      | ((
          setAge: React.Dispatch<React.SetStateAction<number>>,
        ) => React.ReactNode)
      | React.ReactNode
  }
}
