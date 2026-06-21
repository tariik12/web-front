import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export function App() {
  return (
    <div className=" flex h-screen w-full  items-center justify-center">

    <Card size="sm" className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-center">Welcome to Web Front</CardTitle>
       
      </CardHeader>
      <CardContent>
        <p className="text-center">
          We are start a new project. The project for practice frontend.
        </p>
      </CardContent>

    </Card>
    </div>
  )
}
