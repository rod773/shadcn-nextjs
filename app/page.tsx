'use client'


import { Hero } from "@/components/hero"
import { Team } from "@/components/Team"
import { Features } from "@/components/Features"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Team/>
      
      <Features />
      

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to get started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Start building your next amazing project today
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
            Get Started Now
          </Button>
        </div>
      </section>
    </main>
  )
}
