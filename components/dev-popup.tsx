/**
 * Link In Bio
 * Author: nayandas69
 * GitHub: https://github.com/nayandas69/linkinbio-nextjs
 * Email: nayanchandradas@hotmail.com
 * Developer Popup Component
 * Shows project information and developer credits after 10 seconds
 * This dev-popup leave as it is, do not remove or edit this file
 */

"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, ExternalLink } from "lucide-react"

interface DevPopupProps {
  isDarkMode: boolean
}

export default function DevPopup({ isDarkMode }: DevPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  // Show popup after 10 seconds, only once per session
  useEffect(() => {
    if (hasShown) return

    const timer = setTimeout(() => {
      setIsVisible(true)
      setHasShown(true)
    }, 10000) // 10 seconds

    return () => clearTimeout(timer)
  }, [hasShown])

  const closePopup = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closePopup}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`relative w-full max-w-md rounded-3xl border shadow-2xl backdrop-blur-xl ${
              isDarkMode ? "border-white/10 bg-gray-900/90" : "border-white/30 bg-white/90"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closePopup}
              className={`absolute right-4 top-4 z-10 rounded-full border p-2 backdrop-blur-md transition-all duration-300 ${
                isDarkMode
                  ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                  : "border-white/40 bg-white/30 text-gray-800 hover:bg-white/40"
              }`}
              aria-label="Close popup"
            >
              <X size={16} />
            </button>

            <div className="p-6">
              {/* Header */}
              <div className="mb-6 text-center">
                <motion.h2
                  className={`mb-2 text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Link-In-Bio Project
                </motion.h2>
                <motion.p
                  className={`text-sm opacity-70 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Developed by{" "}
                  <a
                    href="https://github.com/nayandas69/linkinbio-nextjs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-semibold transition-colors duration-300 ${
                      isDarkMode ? "text-purple-400 hover:text-purple-300" : "text-blue-600 hover:text-blue-500"
                    }`}
                  >
                    Nayan Das
                    <ExternalLink size={12} className="ml-1 inline" />
                  </a>
                </motion.p>
              </div>

              {/* License Information */}
              <motion.div
                className={`mb-6 rounded-2xl border p-4 ${
                  isDarkMode ? "border-white/10 bg-white/5" : "border-white/40 bg-white/30"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className={`mb-3 text-sm font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                  Custom License
                </h3>
                <ul className={`space-y-2 text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">✓</span>
                    Free to use, modify, and distribute
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">✓</span>
                    Personal and non-commercial use allowed
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500">⚠</span>
                    Commercial use requires authors permission
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">✗</span>
                    Do not remove author credits
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">✗</span>
                    Do not claim original authorship {/* Fixed unescaped apostrophe that was causing ESLint error */}
                  </li>
                </ul>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className={`mb-3 text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  For commercial use, contact:
                </p>
                <a
                  href="mailto:nayanchandradas@hotmail.com"
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-md transition-all duration-300 ${
                    isDarkMode
                      ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                      : "border-white/40 bg-white/30 text-gray-800 hover:bg-white/40"
                  }`}
                >
                  <Mail size={16} />
                  nayanchandradas@hotmail.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
