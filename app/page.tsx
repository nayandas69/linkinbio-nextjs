/**
 * Link in Bio
 * Author: nayandas69
 * GitHub: https://github.com/nayandas69/linkinbio-nextjs
 * Email: nayanchandradas@hotmail.com
 * License: MIT
 * Description: Modern Link in Bio portfolio built with Next.js, featuring glassmorphism design and smooth animations.
 * 
 * IMPORTANT: Please do not remove this author credit comment.
 * You are free to use and modify this code under MIT license,
 * but please keep the author attribution intact.
 * 
 * 
 * Main Page Component - Link in Bio Portfolio
 *
 * This is the main landing page that displays:
 * - Profile section with image and bio
 * - Social media links with glassmorphism effects
 * - Blog carousel with modal functionality
 * - Dark/light theme toggle
 *
 * Features:
 * - Responsive design for all screen sizes
 * - Smooth animations and transitions
 * - Accessibility support with proper ARIA labels
 * - Modern glassmorphism UI design
 * - Auto-playing blog carousel with manual controls
 * - Modal for blog details with embedded YouTube videos
 * - Custom social media icons with hover effects
 * - Theme persistence using localStorage
 * - vercel speed-insights and analytics
 * - Note: This is a client-side component using Next.js App Router.
 * 
 * Support me:
 * If you like my work and want to support me, consider:
 * - Following me on Patreon: https://patreon.com/NayanDas69
 * - Subscribing to my YouTube channel: https://youtube.com/@dasnayan69
 * - Joining my Discord community: https://discord.gg/skHyssu
 * - Starring this project on GitHub: https://github.com/nayandas69/linkinbio-nextjs
 */

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Play, Sun, Moon } from 'lucide-react'
import { 
  GitHubIcon, 
  PatreonIcon, 
  YouTubeIcon, 
  DiscordIcon, 
  BriefcaseIcon, 
  EmailIcon 
} from "@/components/social-icons"

/*
 * Extended Social Media Icons Import
 * Uncomment these imports if you want to use additional social media icons
 * Make sure to also uncomment the corresponding icons in components/social-icons.tsx
 */
/*
import {
  FacebookIcon,
  MessengerIcon,
  SnapchatIcon,
  TikTokIcon,
  WhatsAppIcon,
  BlueskyIcon,
  MastodonIcon,
  XIcon,
  InstagramIcon,
  TelegramIcon,
  LinkedInIcon,
  TumblrIcon,
} from "@/components/social-icons"
*/

// Blog data structure - contains all blog post information
const blogData = [
  {
    id: 1,
    title: "Create a Stunning Animated Navigation Magic Menu",
    description:
      "Welcome to our step-by-step tutorial on creating a stunning animated navigation magic menu using HTML, CSS, and JavaScript! Learn modern web development techniques.",
    videoId: "SRShOP9iKRc",
    thumbnail: "/images/blog1.png",
    category: "Web Development",
    duration: "9:13",
  },
  {
    id: 2,
    title: "Build a Stylish Password Strength Checker",
    description:
      "Welcome to our step-by-step tutorial on building a sleek and functional Password Strength Checker using HTML, CSS, and JavaScript. Perfect for beginners!",
    videoId: "gbfoGJLlXgI",
    thumbnail: "/images/blog2.png",
    category: "JavaScript",
    duration: "5:45",
  },
  {
    id: 3,
    title: "Build a Stunning Creative Portfolio in Just 10 Minutes",
    description:
      "In this video, I will show you how to create a beautiful and modern portfolio website in just 10 minutes! Quick and effective web development.",
    videoId: "p2_FN9djQNc",
    thumbnail: "/images/blog3.png",
    category: "Portfolio",
    duration: "10:23",
  },
]

// Social media links configuration with custom icons (Currently showing 6 icons)
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/nayandas69",
    icon: GitHubIcon,
    color: "from-gray-700 to-gray-900",
    hoverColor: "hover:from-gray-600 hover:to-gray-800",
    bgColor: "bg-gray-800",
  },
  {
    name: "Patreon",
    url: "https://patreon.com/NayanDas69",
    icon: PatreonIcon,
    color: "from-orange-500 to-red-600",
    hoverColor: "hover:from-orange-400 hover:to-red-500",
    bgColor: "bg-orange-500",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@dasnayan69",
    icon: YouTubeIcon,
    color: "from-red-500 to-red-700",
    hoverColor: "hover:from-red-400 hover:to-red-600",
    bgColor: "bg-red-600",
  },
  {
    name: "Discord",
    url: "https://discord.gg/skHyssu",
    icon: DiscordIcon,
    color: "from-indigo-500 to-purple-600",
    hoverColor: "hover:from-indigo-400 hover:to-purple-500",
    bgColor: "bg-indigo-600",
  },
  {
    name: "Website",
    url: "https://nayandas69.github.io/link-in-bio",
    icon: BriefcaseIcon,
    color: "from-emerald-500 to-teal-600",
    hoverColor: "hover:from-emerald-400 hover:to-teal-500",
    bgColor: "bg-emerald-600",
  },
  {
    name: "Email",
    url: "mailto:nayanchandradas@hotmail.com",
    icon: EmailIcon,
    color: "from-blue-500 to-cyan-600",
    hoverColor: "hover:from-blue-400 hover:to-cyan-500",
    bgColor: "bg-blue-600",
  },
/*
 * Extended Social Links Array
 * Uncomment this array and replace the current socialLinks array above
 * to use additional social media platforms. Update URLs with your actual profiles.
 * Make sure to also uncomment the corresponding icon imports at the top of this file.
 */
/*
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: InstagramIcon,
    color: "from-pink-500 to-rose-600",
    hoverColor: "hover:from-pink-400 hover:to-rose-500",
    bgColor: "bg-pink-600",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/yourusername",
    icon: XIcon,
    color: "from-gray-800 to-black",
    hoverColor: "hover:from-gray-700 hover:to-gray-900",
    bgColor: "bg-black",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: LinkedInIcon,
    color: "from-blue-600 to-blue-800",
    hoverColor: "hover:from-blue-500 hover:to-blue-700",
    bgColor: "bg-blue-700",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/yourusername",
    icon: FacebookIcon,
    color: "from-blue-500 to-blue-700",
    hoverColor: "hover:from-blue-400 hover:to-blue-600",
    bgColor: "bg-blue-600",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@yourusername",
    icon: TikTokIcon,
    color: "from-gray-900 to-black",
    hoverColor: "hover:from-gray-800 hover:to-gray-900",
    bgColor: "bg-gray-900",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/yourphonenumber",
    icon: WhatsAppIcon,
    color: "from-green-500 to-green-700",
    hoverColor: "hover:from-green-400 hover:to-green-600",
    bgColor: "bg-green-600",
  },
  {
    name: "Telegram",
    url: "https://t.me/yourusername",
    icon: TelegramIcon,
    color: "from-blue-400 to-blue-600",
    hoverColor: "hover:from-blue-300 hover:to-blue-500",
    bgColor: "bg-blue-500",
  },
  {
    name: "Snapchat",
    url: "https://snapchat.com/add/yourusername",
    icon: SnapchatIcon,
    color: "from-yellow-400 to-yellow-600",
    hoverColor: "hover:from-yellow-300 hover:to-yellow-500",
    bgColor: "bg-yellow-500",
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/yourusername",
    icon: BlueskyIcon,
    color: "from-sky-400 to-sky-600",
    hoverColor: "hover:from-sky-300 hover:to-sky-500",
    bgColor: "bg-sky-500",
  },
  {
    name: "Mastodon",
    url: "https://mastodon.social/@yourusername",
    icon: MastodonIcon,
    color: "from-purple-500 to-purple-700",
    hoverColor: "hover:from-purple-400 hover:to-purple-600",
    bgColor: "bg-purple-600",
  },
  {
    name: "Tumblr",
    url: "https://yourusername.tumblr.com",
    icon: TumblrIcon,
    color: "from-indigo-600 to-purple-700",
    hoverColor: "hover:from-indigo-500 hover:to-purple-600",
    bgColor: "bg-indigo-700",
  },
  {
    name: "Messenger",
    url: "https://m.me/yourusername",
    icon: MessengerIcon,
    color: "from-blue-500 to-purple-600",
    hoverColor: "hover:from-blue-400 hover:to-purple-500",
    bgColor: "bg-blue-600",
  },
*/
]

export default function HomePage() {
  // State management for various UI components
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedBlog, setSelectedBlog] = useState<(typeof blogData)[0] | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  /**
   * Load theme preference from localStorage on component mount
   * This ensures the user's theme choice persists across sessions
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    setIsDarkMode(savedTheme === "dark" || (!savedTheme && prefersDark))
  }, [])

  /**
   * Save theme preference to localStorage whenever it changes
   * This allows the theme to persist across browser sessions
   */
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])

  /**
   * Auto-play functionality for the blog carousel
   * Automatically advances to the next slide every 5 seconds
   */
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % blogData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  /**
   * Toggle between dark and light theme modes
   */
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  /**
   * Navigate to the next slide in the carousel
   */
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogData.length)
    setIsAutoPlaying(false) // Stop autoplay when user manually navigates
  }

  /**
   * Navigate to the previous slide in the carousel
   */
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogData.length) % blogData.length)
    setIsAutoPlaying(false) // Stop autoplay when user manually navigates
  }

  /**
   * Open the blog modal with selected blog details
   */
  const openBlogModal = (blog: (typeof blogData)[0]) => {
    setSelectedBlog(blog)
    document.body.style.overflow = "hidden" // Prevent background scrolling
  }

  /**
   * Close the blog modal and restore scrolling
   */
  const closeBlogModal = () => {
    setSelectedBlog(null)
    document.body.style.overflow = "auto" // Restore background scrolling
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      {/* Animated background elements for visual appeal */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-purple-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-pink-500" : "bg-purple-400"
          }`}
        />
      </div>

      {/* Theme toggle button - fixed position for easy access */}
      <motion.button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
          isDarkMode
            ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
            : "bg-white/30 border-white/40 text-gray-800 hover:bg-white/40"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>

      {/* Main content container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {/* Hidden Mastodon verification link */}
        <a 
          rel="me" 
          href="https://mastodon.social/@nayandas" 
          className="sr-only"
          aria-label="Mastodon profile verification"
        >
          Mastodon
        </a>
        {/* Main card container with glassmorphism effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`w-full max-w-md p-8 rounded-3xl backdrop-blur-xl border shadow-2xl ${
            isDarkMode ? "bg-white/5 border-white/10" : "bg-white/20 border-white/30"
          }`}
        >
          {/* Profile Section */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Profile image with hover animation */}
            <motion.div
              className="relative w-24 h-24 mx-auto mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Nayan Das Profile Picture"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="rounded-full object-cover border-4 border-white/30"
                priority
              />
              {/* Animated ring around profile image */}
              <div
                className={`absolute inset-0 rounded-full border-2 animate-pulse ${
                  isDarkMode ? "border-purple-400/50" : "border-blue-400/50"
                }`}
              />
            </motion.div>

            {/* Name and bio text */}
            <motion.h1
              className={`text-2xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Nayan Das
            </motion.h1>
            <motion.p
              className={`text-sm opacity-80 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Crafting Code & Content for a Connected World
            </motion.p>
          </motion.div>

          {/* Social Links - Single Row with 6 Circular Icons */}
          <motion.div
            className="flex justify-center items-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative ${link.bgColor} text-white transition-all duration-300 
        flex items-center justify-center hover:scale-110 hover:shadow-lg hover:-translate-y-1
        w-12 h-12 rounded-full backdrop-blur-sm border border-white/10`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                aria-label={`Visit ${link.name}`}
              >
                <link.icon size={18} className="drop-shadow-sm" />

                {/* Enhanced tooltip on hover */}
                <div
                  className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 
        rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300
        ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} 
        shadow-xl border backdrop-blur-sm z-10 whitespace-nowrap`}
                >
                  {link.name}
                  <div
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 
          border-l-4 border-r-4 border-t-4 border-transparent
          ${isDarkMode ? "border-t-gray-800" : "border-t-white"}`}
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Blog Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h2 className={`text-xl font-semibold mb-4 text-center ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Latest Blogs
            </h2>

            {/* Blog Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {blogData.map((blog, index) => (
                  <div key={blog.id} className="w-full flex-shrink-0">
                    <motion.div
                      className={`relative cursor-pointer rounded-2xl overflow-hidden backdrop-blur-md border ${
                        isDarkMode
                          ? "bg-white/5 border-white/10 hover:bg-white/10"
                          : "bg-white/30 border-white/40 hover:bg-white/40"
                      } transition-all duration-300`}
                      onClick={() => openBlogModal(blog)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Blog thumbnail with play button overlay */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={blog.thumbnail || "/placeholder.svg"}
                          alt={blog.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          priority={index === 0} // ✅ Preload only the first blog image
                        />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 rounded-full p-3">
                            <Play size={24} className="text-gray-800 ml-1" />
                          </div>
                        </div>
                        {/* Category badge */}
                        <div
                          className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
                            isDarkMode ? "bg-black/50 text-white" : "bg-white/80 text-gray-800"
                          }`}
                        >
                          {blog.category}
                        </div>
                        {/* Duration badge */}
                        <div
                          className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                            isDarkMode ? "bg-black/50 text-white" : "bg-white/80 text-gray-800"
                          }`}
                        >
                          {blog.duration}
                        </div>
                      </div>

                      {/* Blog content */}
                      <div className="p-4">
                        <h3
                          className={`font-semibold text-sm mb-2 line-clamp-2 ${
                            isDarkMode ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {blog.title}
                        </h3>
                        <p
                          className={`text-xs opacity-70 line-clamp-2 ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {blog.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

              {/* Carousel navigation buttons */}
              <button
                onClick={prevSlide}
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full backdrop-blur-md border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
                    : "bg-white/30 border-white/40 text-gray-800 hover:bg-white/40"
                }`}
                aria-label="Previous blog"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextSlide}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full backdrop-blur-md border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
                    : "bg-white/30 border-white/40 text-gray-800 hover:bg-white/40"
                }`}
                aria-label="Next blog"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Carousel dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {blogData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? isDarkMode
                        ? "bg-white"
                        : "bg-gray-800"
                      : isDarkMode
                        ? "bg-white/30"
                        : "bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Blog Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeBlogModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl backdrop-blur-xl border shadow-2xl ${
                isDarkMode ? "bg-gray-900/90 border-white/10" : "bg-white/90 border-white/30"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal close button */}
              <button
                onClick={closeBlogModal}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-md border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
                    : "bg-white/30 border-white/40 text-gray-800 hover:bg-white/40"
                }`}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="p-6">
                {/* Modal header */}
                <div className="mb-6">
                  <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    {selectedBlog.title}
                  </h2>
                  <p className={`text-sm opacity-70 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    by{" "}
                    <strong>
                      <a
                        href="https://youtube.com/@dasnayan69"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${isDarkMode ? "text-purple-400 hover:text-purple-300" : "text-blue-600 hover:text-blue-500"} transition-colors duration-300`}
                      >
                        dasnayan69
                      </a>
                    </strong>{" "}
                    • {selectedBlog.category} • {selectedBlog.duration}
                  </p>
                </div>

                {/* Video embed */}
                <div className="relative w-full h-0 pb-[56.25%] mb-6 rounded-2xl overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedBlog.videoId}`}
                    title={selectedBlog.title}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Blog description */}
                <div className={`prose max-w-none ${isDarkMode ? "prose-invert" : ""}`}>
                  <p className={`text-base leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {selectedBlog.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
