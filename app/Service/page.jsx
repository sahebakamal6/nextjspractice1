import Navbar from '@/components/ui/navbar'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'

function Service() {
  return (
     <>
    <Navbar/>
    <Card className="m-auto mt-20 w-60 h-50 shadow rounded-md">
        <CardHeader>
        <h1 className="">This is Service Page:The Header</h1>
        </CardHeader>
        <CardContent>Service page Card Content</CardContent>
        <CardFooter>Service Page Card Footer</CardFooter>
    </Card>
    </>
  )
}

export default Service
