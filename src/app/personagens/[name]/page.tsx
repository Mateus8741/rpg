'use client'

interface TestProps {
  params: {
    name: string
  }
}

export default function Test({ params: { name } }: TestProps) {
  return (
    <div>
      <div>teste</div>
      <div>{name}</div>
    </div>
  )
}
