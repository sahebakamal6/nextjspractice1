import Navbar from "@/components/ui/navbar";
import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
export default function Home() {
  return (
    <>
    <Navbar/>
    <Card className="m-auto mt-20 w-60 h-50 shadow rounded-md">
        <CardHeader>
        <h1 className="">This is Home Page:The Header</h1>
        </CardHeader>
        <CardContent>Home page Card Content</CardContent>
        <CardFooter>Home Page Card Footer</CardFooter>
    </Card>
    </>
  );
}
