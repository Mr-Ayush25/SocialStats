"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, TrendingUp, Users, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CanvasAnimation } from "@/components/CanvasAnimation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">SocialAI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/lets-analyzie"
          >
            AI Chat
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Open-Source AI-Powered Social Media Analytics
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Unlock the power of AI to supercharge your social media
                  strategy. Get deep insights, predict trends, and optimize your
                  content with our open-source platform.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-x-4"
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-indigo-600"
                >
                  <Link href="/lets-analyzie">Try AI Chat</Link>
                </Button>
                <Button variant="outline">Learn More</Button>
              </motion.div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-gray-850">
                  <CardContent className="p-6">
                    <TrendingUp className="h-12 w-12 mb-4 text-blue-600" />
                    <h3 className="text-2xl font-bold mb-2">
                      Trend Prediction
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Stay ahead of the curve with AI-powered trend forecasting.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-gray-850">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 mb-4 text-blue-600" />
                    <h3 className="text-2xl font-bold mb-2">
                      Audience Insights
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Understand your audience like never before with deep AI
                      analysis.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-gray-850">
                  <CardContent className="p-6">
                    <Zap className="h-12 w-12 mb-4 text-blue-600" />
                    <h3 className="text-2xl font-bold mb-2">
                      Content Optimization
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Optimize your content strategy with AI-driven
                      recommendations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="rounded-full bg-blue-600 text-white p-4 mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Connect Your Accounts
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Easily link your social media accounts to our platform.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="rounded-full bg-blue-600 text-white p-4 mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">
                  AI Analyzes Your Data
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our advanced AI processes and analyzes your social media data.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="rounded-full bg-blue-600 text-white p-4 mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Get Actionable Insights
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Receive detailed reports and recommendations to improve your
                  strategy.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              AI in Action
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
              Watch as our AI simulates social media connections and trend
              analysis in real-time. Each particle represents a data point, with
              connections showing correlations and insights.
            </p>
            <div className="relative w-full h-[400px]">
              <CanvasAnimation />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Experience AI-Powered Social Media Analytics
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Try our open-source AI chat interface and see how it can
                  transform your social media strategy.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Button
                  asChild
                  className="bg-white text-blue-600 hover:bg-gray-100 group"
                >
                  <Link href="/lets-analyzie" className="flex items-center">
                    Start AI Chat
                    <motion.span
                      className="ml-2 inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 SocialAI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
