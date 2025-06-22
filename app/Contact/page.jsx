import Navbar from '@/components/ui/navbar'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'

function Contact() {
  return (
     <>
    <Navbar/>
    <Card className="m-auto mt-20 w-60 h-50 shadow rounded-md">
        <CardHeader>
        <h1 className="">This is Contact Page:The Header</h1>
        </CardHeader>
        <CardContent>Contact page Card Content</CardContent>
        <CardFooter>Contact Page Card Footer</CardFooter>
    </Card>
    </>
  )
}

export default Contact
