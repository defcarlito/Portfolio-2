import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowUpRight } from "lucide-react"

export default function MoreInfoPopup({
  title,
  description,
  company,
}: {
  title: string
  description: string
  company: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="inline-flex gap-1 text-primary items-center">
          <Button
            variant="link"
            className="hidden sm:inline !p-0 w-auto h-auto text-sm"
          >
            Info
          </Button>
          <ArrowUpRight className="inline size-4 align-baseline" />
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {title} @ {company}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
