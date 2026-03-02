import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/department/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(app)/departments/"!</div>
}
