'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/promo.gif"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            Welcome to our platform
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Build Amazing Things
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            With Modern Tools
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Create beautiful, responsive web applications with Next.js, shadcn/ui, and Tailwind CSS. Everything you need to build modern web experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 pt-16 border-t border-white/20">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
            <p className="text-slate-200">Responsive Design</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">Fast</div>
            <p className="text-slate-200">Lightning Quick</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">Easy</div>
            <p className="text-slate-200">To Customize</p>
          </div>
        </div>
      </div>
    </section>
  )
}
