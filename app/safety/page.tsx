import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, AlertTriangle, Check, Info, FileCheck, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SafetyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Safety & Security</h1>
        <p className="text-xl text-gray-600">
          Your safety is our top priority. Learn about the measures we take to create a secure rental experience.
        </p>
      </div>

      {/* Main Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden">
          <div className="bg-blue-600 h-2"></div>
          <CardContent className="p-8">
            <div className="bg-blue-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Verified Properties</h2>
            <p className="text-gray-600 mb-6">
              Every property on our platform undergoes a thorough verification process to ensure authenticity and
              accuracy.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>Property ownership verification</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>Address and location confirmation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>Photo verification</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>Listing accuracy checks</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden">
          <div className="bg-green-600 h-2"></div>
          <CardContent className="p-8">
            <div className="bg-green-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Identity Verification</h2>
            <p className="text-gray-600 mb-6">
              We verify the identity of both landlords and tenants to create a trusted community of users.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>Government ID verification</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>Phone number verification</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>Email verification</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>Profile review process</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden">
          <div className="bg-purple-600 h-2"></div>
          <CardContent className="p-8">
            <div className="bg-purple-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
              <Lock className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Secure Transactions</h2>
            <p className="text-gray-600 mb-6">
              All financial transactions on our platform are protected with bank-level security measures.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>Encrypted payment processing</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>Secure deposit handling</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>Fraud detection systems</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>Payment confirmation receipts</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Fraud Prevention */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Fraud Prevention</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Our AI-powered fraud detection system continuously monitors the platform to identify and remove suspicious
              listings and users.
            </p>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold mb-2">Red Flag Detection</h3>
                <p className="text-gray-600">
                  Our system automatically flags suspicious behavior patterns and listings that don't meet our safety
                  standards.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold mb-2">Price Analysis</h3>
                <p className="text-gray-600">
                  We analyze rental prices against market data to identify listings with suspiciously low prices that
                  could indicate scams.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold mb-2">Image Verification</h3>
                <p className="text-gray-600">
                  Our technology checks images to detect stock photos or pictures used across multiple listings.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative min-h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Fraud Prevention"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Safety Tips */}
      <div className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Safety Tips for Renters</h2>
          <p className="text-lg text-gray-600">
            Follow these guidelines to ensure a safe and secure rental experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Info className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Before Viewing a Property</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Verify the landlord's identity through our platform</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Research the neighborhood and property online</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Schedule viewings during daylight hours</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Bring a friend or family member when possible</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Share your viewing schedule with someone you trust</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Info className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">When Making Payments</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Always use our secure payment system</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Never wire money or pay in cash</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Be wary of requests for security deposits before viewing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Verify lease terms before making any payments</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Keep receipts and documentation of all transactions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Info className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Signing the Lease</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Read the entire lease agreement carefully</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Use our secure digital signing platform</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Document the property condition before moving in</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Verify all terms match what was discussed</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Keep a copy of the signed lease agreement</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Info className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Red Flags to Watch For</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Prices significantly below market value</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Requests to wire money or pay via gift cards</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Landlords who can't show the property in person</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Pressure to sign or pay immediately</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Vague or inconsistent property details</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Legal Protections */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 relative min-h-[300px] rounded-xl overflow-hidden order-2 md:order-1">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Legal Protections"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FileCheck className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Legal Protections</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              We provide resources and tools to help you understand your rights and responsibilities as a renter or
              landlord.
            </p>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold mb-2">Fair Housing Compliance</h3>
                <p className="text-gray-600">
                  All listings on our platform must comply with fair housing laws, prohibiting discrimination based on
                  race, color, religion, sex, disability, familial status, or national origin.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold mb-2">Standardized Lease Agreements</h3>
                <p className="text-gray-600">
                  Our platform offers legally-reviewed lease templates that comply with local regulations and protect
                  both parties.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold mb-2">Dispute Resolution</h3>
                <p className="text-gray-600">
                  We provide a structured process for resolving disputes between landlords and tenants, with access to
                  mediation services when needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Report a Concern */}
      <div className="bg-red-50 rounded-2xl p-8 md:p-12 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-red-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Report a Concern</h2>
          <p className="text-lg text-gray-700 mb-8">
            If you encounter a suspicious listing, user, or activity on our platform, please report it immediately. Your
            vigilance helps keep our community safe.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 rounded-xl px-8 py-6 h-auto text-lg">
            <Link href="/report-concern">Report a Concern</Link>
          </Button>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font\
