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
import { ChevronLeft, ChevronRight, X, Play, Sun, Moon } from "lucide-react"
import { GitHubIcon, PatreonIcon, YouTubeIcon, DiscordIcon, BriefcaseIcon, EmailIcon } from "@/components/social-icons"

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
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className={`absolute -right-40 -top-40 h-80 w-80 rounded-full opacity-20 blur-3xl ${
            isDarkMode ? "bg-purple-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute -bottom-40 -left-40 h-80 w-80 rounded-full opacity-20 blur-3xl ${
            isDarkMode ? "bg-pink-500" : "bg-purple-400"
          }`}
        />
      </div>

      {/* Theme toggle button - fixed position for easy access */}
      <motion.button
        onClick={toggleTheme}
        className={`fixed right-6 top-6 z-50 rounded-full border p-3 backdrop-blur-md transition-all duration-300 ${
          isDarkMode
            ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
            : "border-white/40 bg-white/30 text-gray-800 hover:bg-white/40"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>

      {/* Main content container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
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
          className={`w-full max-w-md rounded-3xl border p-6 shadow-2xl backdrop-blur-xl sm:p-8 ${
            isDarkMode ? "border-white/10 bg-white/5" : "border-white/30 bg-white/20"
          }`}
        >
          {/* Profile Section */}
          <motion.div
            className="mb-6 text-center sm:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Profile image with hover animation */}
            <motion.div
              className="relative mx-auto mb-4 h-20 w-20 sm:h-24 sm:w-24"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Nayan Das Profile Picture"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="rounded-full border-4 border-white/30 object-cover"
                priority
              />
              {/* Animated ring around profile image */}
              <div
                className={`absolute inset-0 animate-pulse rounded-full border-2 ${
                  isDarkMode ? "border-purple-400/50" : "border-blue-400/50"
                }`}
              />
            </motion.div>

            {/* Name and bio text */}
            <motion.h1
              className={`mb-2 text-xl font-bold sm:text-2xl ${isDarkMode ? "text-white" : "text-gray-800"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Nayan Das
            </motion.h1>
            <motion.p
              className={`px-2 text-xs opacity-80 sm:text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Crafting Code & Content for a Connected World
            </motion.p>
          </motion.div>

          {/* Social Links - Responsive 6-icon grid with proper hover */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="mx-auto grid max-w-xs grid-cols-6 gap-2 sm:max-w-sm sm:gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative ${link.bgColor} flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent active:translate-y-0 active:scale-95 sm:h-12 sm:w-12 md:h-14 md:w-14`}
                  whileHover={{
                    scale: 1.1,
                    y: -4,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{
                    scale: 0.95,
                    y: 0,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  aria-label={`Visit ${link.name}`}
                >
                  <link.icon size={16} className="drop-shadow-sm sm:h-[18px] sm:w-[18px] md:h-[20px] md:w-[20px]" />

                  {/* Enhanced tooltip with better positioning */}
                  <div
                    className={`absolute -top-10 left-1/2 -translate-x-1/2 transform rounded-lg px-2 py-1 text-xs font-medium opacity-0 transition-all duration-300 group-hover:opacity-100 sm:-top-12 sm:px-3 sm:py-2 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} pointer-events-none z-20 origin-bottom scale-0 whitespace-nowrap border shadow-xl backdrop-blur-sm group-hover:scale-100`}
                  >
                    {link.name}
                    <div
                      className={`absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform border-l-[4px] border-r-[4px] border-t-[4px] border-transparent ${isDarkMode ? "border-t-gray-800" : "border-t-white"}`}
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Blog Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h2
              className={`mb-4 text-center text-lg font-semibold sm:text-xl ${isDarkMode ? "text-white" : "text-gray-800"}`}
            >
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
                      className={`relative cursor-pointer overflow-hidden rounded-2xl border backdrop-blur-md ${
                        isDarkMode
                          ? "border-white/10 bg-white/5 hover:bg-white/10"
                          : "border-white/40 bg-white/30 hover:bg-white/40"
                      } transition-all duration-300`}
                      onClick={() => openBlogModal(blog)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Blog thumbnail with play button overlay */}
                      <div className="relative h-40 overflow-hidden sm:h-48">
                        <Image
                          src={blog.thumbnail || "/placeholder.svg"}
                          alt={blog.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          priority={index === 0} // ✅ Preload only the first blog image
                        />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 hover:opacity-100">
                          <div className="rounded-full bg-white/90 p-2 sm:p-3">
                            <Play size={20} className="ml-1 text-gray-800 sm:h-6 sm:w-6" />
                          </div>
                        </div>
                        {/* Category badge */}
                        <div
                          className={`absolute left-2 top-2 rounded-full px-2 py-1 text-xs font-medium sm:left-3 sm:top-3 ${
                            isDarkMode ? "bg-black/50 text-white" : "bg-white/80 text-gray-800"
                          }`}
                        >
                          {blog.category}
                        </div>
                        {/* Duration badge */}
                        <div
                          className={`absolute right-2 top-2 rounded-full px-2 py-1 text-xs font-medium sm:right-3 sm:top-3 ${
                            isDarkMode ? "bg-black/50 text-white" : "bg-white/80 text-gray-800"
                          }`}
                        >
                          {blog.duration}
                        </div>
                      </div>

                      {/* Blog content */}
                      <div className="p-3 sm:p-4">
                        <h3
                          className={`mb-2 line-clamp-2 text-sm font-semibold ${
                            isDarkMode ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {blog.title}
                        </h3>
                        <p
                          className={`line-clamp-2 text-xs opacity-70 ${
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
                className={`absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full border p-1.5 backdrop-blur-md transition-all duration-300 sm:p-2 ${
                  isDarkMode
                    ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                    : "border-white/40 bg-white/30 text-gray-800 hover:bg-white/40"
                }`}
                aria-label="Previous blog"
              >
                <ChevronLeft size={14} className="sm:h-4 sm:w-4" />
              </button>
              <button
                onClick={nextSlide}
                className={`absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full border p-1.5 backdrop-blur-md transition-all duration-300 sm:p-2 ${
                  isDarkMode
                    ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                    : "border-white/40 bg-white/30 text-gray-800 hover:bg-white/40"
                }`}
                aria-label="Next blog"
              >
                <ChevronRight size={14} className="sm:h-4 sm:w-4" />
              </button>
            </div>

            {/* Carousel dots indicator */}
            <div className="mt-3 flex justify-center space-x-2 sm:mt-4">
              {blogData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={closeBlogModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={`relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border shadow-2xl backdrop-blur-xl ${
                isDarkMode ? "border-white/10 bg-gray-900/90" : "border-white/30 bg-white/90"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal close button */}
              <button
                onClick={closeBlogModal}
                className={`absolute right-4 top-4 z-10 rounded-full border p-2 backdrop-blur-md transition-all duration-300 ${
                  isDarkMode
                    ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                    : "border-white/40 bg-white/30 text-gray-800 hover:bg-white/40"
                }`}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="p-4 sm:p-6">
                {/* Modal header */}
                <div className="mb-4 sm:mb-6">
                  <h2 className={`mb-2 text-xl font-bold sm:text-2xl ${isDarkMode ? "text-white" : "text-gray-800"}`}>
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
                <div className="relative mb-4 h-0 w-full overflow-hidden rounded-2xl pb-[56.25%] sm:mb-6">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedBlog.videoId}`}
                    title={selectedBlog.title}
                    className="absolute inset-0 h-full w-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Blog description */}
                <div className={`prose max-w-none ${isDarkMode ? "prose-invert" : ""}`}>
                  <p
                    className={`text-sm leading-relaxed sm:text-base ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
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
