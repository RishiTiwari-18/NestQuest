import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Headset, CuboidIcon as Cube, Monitor, Info, Check, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function VirtualToursPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Virtual Property Tours</h1>
        <p className="text-xl text-gray-600 mb-6">
          Experience properties from anywhere with our immersive 3D virtual tours
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700">Browse VR Properties</Button>
          <Button variant="outline">How It Works</Button>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">How Virtual Tours Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Headset className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">VR Headset</h3>
            <p className="text-gray-600">Use any VR headset for the most immersive experience</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Monitor className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Desktop View</h3>
            <p className="text-gray-600">Explore properties in 3D on any computer or laptop</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Cube className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Mobile AR</h3>
            <p className="text-gray-600">Use your smartphone for augmented reality tours</p>
          </div>
        </div>
      </div>

      {/* Featured Virtual Tours */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Virtual Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={`/placeholder.svg?height=400&width=600`}
                  alt={`Virtual Tour ${i}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-lg">Modern Apartment {i}</h3>
                    <p>Downtown, New York</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                  VR Ready
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg">$2,500/mo</span>
                  <div className="flex text-sm text-gray-500">
                    <span className="mr-2">2 beds</span>
                    <span>2 baths</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Virtual Tour</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tour Types */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Tour Types</h2>
        <Tabs defaultValue="vr" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="vr">VR Tours</TabsTrigger>
            <TabsTrigger value="3d">3D Walkthroughs</TabsTrigger>
            <TabsTrigger value="ar">AR Experience</TabsTrigger>
          </TabsList>
          <TabsContent value="vr" className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">Virtual Reality Tours</h3>
                <p className="text-gray-700 mb-4">
                  Our VR tours provide the most immersive experience possible. Put on a VR headset and walk through
                  properties as if you were actually there. Look around in 360 degrees, move from room to room, and get
                  a true sense of the space.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Compatible with Oculus, HTC Vive, and other VR headsets</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Realistic lighting and textures</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Interactive elements to open doors, turn on lights, etc.</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700">Try VR Tour Demo</Button>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-auto rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="VR Tour" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 p-4 rounded-full">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="3d" className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">3D Walkthroughs</h3>
                <p className="text-gray-700 mb-4">
                  Our 3D walkthroughs allow you to explore properties on any device without a VR headset. Navigate
                  through the space using your mouse or touchscreen, getting a complete view of the property from any
                  angle.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Works on any device with a web browser</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Dollhouse view to see the entire floor plan</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Measurement tools to check dimensions</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700">Try 3D Walkthrough Demo</Button>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-auto rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="3D Walkthrough" fill className="object-cover" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="ar" className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">Augmented Reality Experience</h3>
                <p className="text-gray-700 mb-4">
                  Our AR experience lets you visualize furniture and decor in the actual space using your smartphone or
                  tablet. See how different items would look and fit in the property before you move in.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Compatible with iOS and Android devices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Virtual furniture catalog with hundreds of items</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Save and share your designs</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700">Download AR App</Button>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-auto rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="AR Experience" fill className="object-cover" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <div className="flex items-center mb-6">
          <Info className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Do I need special equipment for virtual tours?</h3>
            <p className="text-gray-700">
              No special equipment is required for basic 3D walkthroughs, which work on any device with a web browser.
              For the full VR experience, a VR headset is recommended. Our AR features require a smartphone or tablet
              with AR capabilities.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">How accurate are the virtual tours?</h3>
            <p className="text-gray-700">
              Our virtual tours are created using high-precision 3D scanning technology, providing measurements accurate
              to within 1% of the actual dimensions. The visual representation, including colors and lighting, is
              optimized to match the real-world appearance as closely as possible.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Can I schedule a guided virtual tour with an agent?</h3>
            <p className="text-gray-700">
              Yes, we offer guided virtual tours where a real estate agent can walk you through the property in
              real-time, answering questions and providing additional information. These can be scheduled through our
              platform at a time convenient for you.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Are all properties available for virtual tours?</h3>
            <p className="text-gray-700">
              We're continuously expanding our virtual tour offerings. Currently, approximately 70% of our listings
              include some form of virtual tour. Properties with virtual tours are marked with a VR badge in the search
              results.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-md p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Experience Properties Virtually?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Save time and travel by exploring properties from anywhere in the world with our cutting-edge virtual tour
          technology.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            <Link href="/properties">Browse VR Properties</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-600">
            <Link href="/signup">Create Account</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
