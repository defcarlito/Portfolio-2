export default function TeckStack() {
  const stack = [
    { name: "TypeScript" },
    { name: "React" },
    { name: "Tailwind" },
    { name: "Next.js" }
  ]

  return (
    <div className="flex flex-row gap-2 w-full max-w-xl">
        <div className="flex flex-wrap w-fit h-fit bg-muted border p-4 rounded-lg shadow-sm gap-2">
        {stack.map((item, index) => (
            <div
            key={index}
            className="bg-card border p-2 rounded-lg text-sm shadow-sm"
            >
            {item.name}
            </div>
        ))}
        </div>
        <div className="flex flex-wrap w-fit h-fit max-w-lg bg-muted border p-4 rounded-lg shadow-sm gap-2">
        {stack.map((item, index) => (
            <div
            key={index}
            className="bg-card border p-2 rounded-lg text-sm shadow-sm"
            >
            {item.name}
            </div>
        ))}
        </div>
        <div className="flex flex-wrap w-fit h-fit max-w-lg bg-muted border p-4 rounded-lg shadow-sm gap-2">
        {stack.map((item, index) => (
            <div
            key={index}
            className="bg-card border p-2 rounded-lg text-sm shadow-sm"
            >
            {item.name}
            </div>
        ))}
        </div>
    </div>
  )
}
