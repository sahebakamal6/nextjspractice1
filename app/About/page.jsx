import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Navbar from "@/components/ui/navbar"

function About() {
    
  return (
      <>
    <Navbar/>
    <Card className="m-auto mt-20 w-60 h-50 shadow rounded-md">
        <CardHeader>
        <h1 className="">This is About Page:The Header</h1>
        </CardHeader>
        <CardContent>About page Card Content</CardContent>
        <CardFooter>About Page Card Footer</CardFooter>
    </Card>
    </>
  )
}

export default About
