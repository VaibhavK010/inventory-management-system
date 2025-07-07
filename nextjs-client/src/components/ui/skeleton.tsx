import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-[#ffe4e1] text-[#2c2c2c] text-xl font-mono p-4 rounded-xl border border-red-400 shadow-md",
        className
      )}
      {...props}
    >
      Loading...
    </div>
  )
}

export { Skeleton }
