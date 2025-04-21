import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600 mb-8">
          Choose the plan that's right for you and find your perfect home with our AI-powered platform
        </p>
        <div className="inline-flex items-center rounded-full bg-gray-100 p-1">
          <button className="rounded-full px-6 py-2 bg-blue-600 text-white font-medium">Monthly</button>
          <button className="rounded-full px-6 py-2 text-gray-700 font-medium">Annual (Save 20%)</button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-gray-600">Perfect for casual home seekers</p>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-gray-500">/month</span>
          </div>
          <Button className="w-full mb-8 rounded-xl py-6 h-auto">Get Started</Button>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Basic property search</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Save up to 5 properties</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Limited AI recommendations</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Email support</span>
            </li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-8 relative transform scale-105">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Premium</h3>
            <p className="text-gray-600">For serious home seekers</p>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold">$19.99</span>
            <span className="text-gray-500">/month</span>
          </div>
          <Button className="w-full mb-8 bg-blue-600 hover:bg-blue-700 rounded-xl py-6 h-auto">Get Started</Button>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Advanced property search with filters</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Unlimited saved properties</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Full AI-powered recommendations</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Virtual tours for all properties</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Priority customer support</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Neighborhood insights</span>
            </li>
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-gray-600">For property managers & landlords</p>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold">$49.99</span>
            <span className="text-gray-500">/month</span>
          </div>
          <Button className="w-full mb-8 rounded-xl py-6 h-auto">Contact Sales</Button>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>All Premium features</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Multiple property listings</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Advanced analytics dashboard</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Tenant screening tools</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>Dedicated account manager</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>API access</span>
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-3">Can I cancel my subscription anytime?</h3>
            <p className="text-gray-600">
              Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to your
              plan until the end of your billing period.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
            <p className="text-gray-600">
              We accept all major credit cards, PayPal, and Apple Pay. For Enterprise plans, we also offer invoice
              payment options.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-3">Is there a free trial available?</h3>
            <p className="text-gray-600">
              Yes, we offer a 14-day free trial for our Premium plan. No credit card is required to start your trial.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-3">What's included in the AI recommendations?</h3>
            <p className="text-gray-600">
              Our AI recommendations analyze your preferences, search history, and feedback to suggest properties that
              match your unique needs. Premium users get more personalized recommendations and priority access to new
              listings.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-24 bg-blue-50 rounded-2xl p-12 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Ready to find your perfect home?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of happy renters who found their perfect match with our AI-powered platform
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-xl px-8 py-6 h-auto text-lg">
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl px-8 py-6 h-auto text-lg"
          >
            <Link href="/properties">Browse Properties</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
