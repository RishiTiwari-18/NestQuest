import Hero from "@/components/AI-Features/Hero"
import Overview from "@/components/AI-Features/Overview"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Brain,
  Shield,
  FileCheck,
  Headset,
  MapPin,
  MessageSquare,
  Check,
  TrendingUp,
  Lock,
  Users,
  Star,
} from "lucide-react"

export default function AIFeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
    <Hero/>

      {/* AI Features Overview */}
      <Overview/>

      {/* AI Matchmaking Showcase */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">AI-Powered Matchmaking</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">How It Works</h3>
            <p className="text-gray-700 mb-6">
              Our advanced AI algorithm analyzes your preferences, search history, and feedback to recommend properties
              that match your unique needs. The more you use the platform, the smarter it gets at finding your perfect
              home.
            </p>

            <div className="space-y-6">
              <div className="flex">
                <div className="bg-blue-100 p-2 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-semibold text-blue-600">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Input Your Preferences</h4>
                  <p className="text-gray-600">
                    Tell us about your budget, desired location, must-have amenities, and lifestyle needs.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-blue-100 p-2 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-semibold text-blue-600">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">AI Analysis</h4>
                  <p className="text-gray-600">
                    Our algorithm analyzes thousands of properties and market data points to find matches.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-blue-100 p-2 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-semibold text-blue-600">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Personalized Recommendations</h4>
                  <p className="text-gray-600">
                    Receive a curated list of properties with match percentages based on your criteria.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-blue-100 p-2 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-semibold text-blue-600">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Continuous Learning</h4>
                  <p className="text-gray-600">The AI learns from your feedback and refines future recommendations.</p>
                </div>
              </div>
            </div>

            <Button className="mt-8 bg-blue-600 hover:bg-blue-700">Try AI Matching Now</Button>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-gray-100 rounded-lg p-6 h-full">
              <h3 className="text-xl font-semibold mb-4">Match Score Breakdown</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Location Match</span>
                    <span className="font-medium text-blue-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    This property is in your preferred neighborhood and close to your workplace.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Budget Match</span>
                    <span className="font-medium text-blue-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    The rent is within your budget range, including estimated utilities.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Amenities Match</span>
                    <span className="font-medium text-blue-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    This property has 9/10 amenities you marked as important.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Lifestyle Match</span>
                    <span className="font-medium text-blue-600">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    The neighborhood aligns with your lifestyle preferences and activities.
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-lg">Overall Match</span>
                    <span className="font-medium text-lg text-blue-600">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price Prediction */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Rental Price Prediction</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Market Trend Analysis</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Our AI analyzes historical rental data, seasonal trends, and market conditions to predict how prices will
              change in the coming months. This helps you make informed decisions about when to rent and what to expect
              for renewal.
            </p>
            <div className="relative h-64 bg-gray-100 rounded-lg mb-4 overflow-hidden">
              <div className="w-full h-full">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium text-gray-700">Rental Price Trends (1BR Apartment)</div>
                    <div className="text-xs text-gray-500">Last 12 months</div>
                  </div>
                  <div className="flex items-end h-44 w-full">
                    {/* Chart bars - each represents a month */}
                    <div className="w-1/12 mx-0.5">
                      <div className="bg-blue-500 h-24 rounded-t-sm"></div>
                      <div className="text-xs text-center mt-1">Jan</div>
                    </div>
                    <div className="w-1/12 mx-0.5">
                      <div className="bg-blue-500 h-28 rounded-t-sm"></div>
                      <div className="text-xs text-center mt-1">Feb</div>
                    </div>
                    <div className="w-1/12 mx-0.5">
                      <div className="bg-blue-500 h-32 rounded-t-sm"></div>
                      <div className="text-xs text-center mt-1">Mar</div>
                    </div>
                    <div className="w-1/12 mx-0.5">
                      <div className="bg-blue-500 h-30 rounded-t-sm"></div>
                      <div className="text-xs text-center mt-1">Apr</div>
                    </div>
                    <div className="w-1/12 mx-0.5">
                      <div className="bg-blue-500 h-36 rounded-t-sm"></div>
                      <div className="text-xs text-center mt-1">May</div>
                    </div>
                    <div className="w-1/12 mx-0.5">
                      <div className="bg-blue-500 h-40 rounded-t-sm"></div>
                      <div className="text-xs text-center mt-1">Jun</div>
                    </div>
                    <div className="w-1/12 mx-0.5">
                      <div className="bg-blue-600 h-42 rounded-t-sm"></div>
                      <div className="text-xs text-center mt-1">Jul</div>
                    </div>
                    <div className="w-1/12 mx-0.5">
                      <div className="bg-blue-600 h-44 rounded-t-sm"></div>
                      <div className="text-xs text-center mt-1">Aug</div>
                    </div>
                    <div className="w-1/12 mx-0.5">
                      <div className="bg-blue-600 h-40 rounded-t-sm"></div>
                      <div className="text-xs text-center mt-1">Sep</div>
                    </div>
                    <div className="w-1/12 mx-0.5">
                      <div className="bg-blue-700 h-38 rounded-t-sm"></div>
                      <div className="text-xs text-center mt-1">Oct</div>
                    </div>
                    <div className="w-1/12 mx-0.5">
                      <div className="bg-blue-700 h-36 rounded-t-sm"></div>
                      <div className="text-xs text-center mt-1">Nov</div>
                    </div>
                    <div className="w-1/12 mx-0.5">
                      <div className="bg-blue-700 h-34 rounded-t-sm"></div>
                      <div className="text-xs text-center mt-1">Dec</div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <div>$1,500</div>
                    <div>$2,200</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                Live Data
              </div>
            </div>
            <Button className="w-full">View Price Trends</Button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Brain className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Fair Price Estimator</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Not sure if a property is priced fairly? Our AI compares similar properties in the area, taking into
              account amenities, size, condition, and location to determine if you're getting a good deal.
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Address</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter address" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>1</option>
                    <option>1.5</option>
                    <option>2</option>
                    <option>2.5+</option>
                  </select>
                </div>
              </div>
            </div>
            <Button className="w-full">Estimate Fair Price</Button>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Security & Trust Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-red-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fraud Detection</h3>
            <p className="text-gray-600">
              Our AI constantly scans listings for suspicious patterns and red flags that might indicate scams or
              fraudulent activity.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Lock className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-600">
              All payments and financial transactions are protected with bank-level encryption and secure payment
              processing.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Users className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Identity Verification</h3>
            <p className="text-gray-600">
              We verify the identity of both landlords and tenants to ensure everyone on our platform is who they claim
              to be.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
              <div>
                <h4 className="font-semibold">Michael Johnson</h4>
                <p className="text-sm text-gray-500">New York, NY</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "The AI matching feature saved me so much time! Instead of browsing through hundreds of listings, I got a
              curated list of apartments that matched exactly what I was looking for."
            </p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" />
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
              <div>
                <h4 className="font-semibold">Jennifer Lee</h4>
                <p className="text-sm text-gray-500">San Francisco, CA</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "The virtual tours were a game-changer for me since I was relocating from another state. I was able to see
              multiple properties without traveling, and the 3D walkthrough was incredibly accurate."
            </p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500" fill={i < 4 ? "currentColor" : "none"} />
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
              <div>
                <h4 className="font-semibold">David Wilson</h4>
                <p className="text-sm text-gray-500">Chicago, IL</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "As a landlord, the digital contracts and payment system have made managing my properties so much easier.
              The verification system also gives me peace of mind about who I'm renting to."
            </p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500" fill={i < 5 ? "currentColor" : "none"} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Renting?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join thousands of happy renters who found their perfect home with our AI-powered platform
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-white bg-white/10 hover:bg-blue-50">
            Watch Demo
          </Button>
        </div>
      </div>
    </div>
  )
}
