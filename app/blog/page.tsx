import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample blog posts data
const featuredPost = {
  id: "1",
  title: "10 Tips for Finding Your Perfect Rental in a Competitive Market",
  excerpt:
    "Discover expert strategies to stand out in today's competitive rental market and secure your dream home faster.",
  image: "/placeholder.svg?height=600&width=1200",
  date: "October 15, 2023",
  author: "Sarah Johnson",
  category: "Rental Tips",
}

const blogPosts = [
  {
    id: "2",
    title: "How AI is Revolutionizing the Rental Market",
    excerpt:
      "Explore how artificial intelligence is changing the way people find and secure rental properties in 2023.",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 10, 2023",
    author: "Michael Chen",
    category: "Technology",
  },
  {
    id: "3",
    title: "Understanding Rental Agreements: What to Look For",
    excerpt:
      "A comprehensive guide to rental agreements and what clauses you should pay special attention to before signing.",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 5, 2023",
    author: "Jessica Williams",
    category: "Legal",
  },
  {
    id: "4",
    title: "5 Emerging Neighborhood Hotspots for Renters",
    excerpt: "Discover up-and-coming neighborhoods that offer great value, amenities, and quality of life for renters.",
    image: "/placeholder.svg?height=400&width=600",
    date: "September 28, 2023",
    author: "David Rodriguez",
    category: "Neighborhoods",
  },
  {
    id: "5",
    title: "Decorating Your Rental: Tips That Won't Lose Your Deposit",
    excerpt:
      "Creative ways to personalize your rental space without making permanent changes that could affect your deposit.",
    image: "/placeholder.svg?height=400&width=600",
    date: "September 22, 2023",
    author: "Emma Thompson",
    category: "Interior Design",
  },
  {
    id: "6",
    title: "The Future of Smart Homes in Rental Properties",
    excerpt:
      "How smart home technology is being integrated into rental properties and what benefits it offers to tenants.",
    image: "/placeholder.svg?height=400&width=600",
    date: "September 15, 2023",
    author: "James Wilson",
    category: "Technology",
  },
  {
    id: "7",
    title: "Navigating Roommate Relationships: A Guide",
    excerpt:
      "Tips for finding compatible roommates and maintaining healthy relationships when sharing a rental property.",
    image: "/placeholder.svg?height=400&width=600",
    date: "September 8, 2023",
    author: "Olivia Martinez",
    category: "Lifestyle",
  },
]

const categories = [
  "All Categories",
  "Rental Tips",
  "Technology",
  "Legal",
  "Neighborhoods",
  "Interior Design",
  "Lifestyle",
  "Market Trends",
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">HomeMatch Blog</h1>
        <p className="text-xl text-gray-600">
          Insights, tips, and trends to help you navigate the rental market and make your house feel like home
        </p>
      </div>

      {/* Search and Categories */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                index === 0 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <Card className="overflow-hidden border-0 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                  {featuredPost.category}
                </span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-500 text-sm flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {featuredPost.date}
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <span className="font-medium">{featuredPost.author}</span>
                </div>
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="text-blue-600 font-medium flex items-center hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden border-0 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-48">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
                  {post.category}
                </span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-500 text-sm flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {post.date}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 flex items-center justify-center">
                    <User className="h-4 w-4 text-gray-500" />
                  </div>
                  <span className="text-sm font-medium">{post.author}</span>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-600 font-medium text-sm flex items-center hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Get the latest rental tips, market insights, and home decoration ideas delivered straight to your inbox
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6">Subscribe</Button>
        </div>
      </div>
    </div>
  )
}
