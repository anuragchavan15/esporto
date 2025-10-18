"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Shield, Smartphone, Trophy, Wallet, Users, Play } from "lucide-react"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-green-500/20 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-green-500" />
            <span className="font-semibold text-sm sm:text-base">PUBG Arena</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Badge className="bg-green-500/15 text-green-400 text-xs hidden sm:inline-flex">Mobile Optimized</Badge>
            <Badge className="bg-green-500/15 text-green-400 text-xs">Real Money</Badge>
            <Link href="/">
              <Button className="bg-green-500 text-black hover:bg-green-600 text-xs sm:text-sm px-2 sm:px-4">
                Enter the Arena
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Compete. Win.
              <br />
              Dominate PUBG Mobile
              <br />
              Esports.
            </h1>
            <p className="mt-4 max-w-xl text-gray-300 text-sm sm:text-base">
              Join skill-based tournaments, climb leaderboards, and win real cash prizes
              with anti-cheat protection and live moderation.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/">
                <Button className="w-full sm:w-auto bg-green-500 text-black hover:bg-green-600">
                  Get Started
                </Button>
              </Link>
              <a href="#features">
                <Button variant="outline" className="w-full sm:w-auto border-green-500/40 text-green-400">
                  Explore Features
                </Button>
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-video w-full overflow-hidden rounded-xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent">
            <Image
              src="/placeholder.jpg"
              alt="PUBG gameplay"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Quick value cards */}
        <div id="features" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-green-500/20 bg-neutral-900">
            <CardContent className="flex items-center gap-3 p-5">
              <Trophy className="h-5 w-5 text-yellow-400" />
              <div>
                <p className="font-medium">₹5L+ Prizes</p>
                <p className="text-sm text-gray-400">Monthly payouts</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-500/20 bg-neutral-900">
            <CardContent className="flex items-center gap-3 p-5">
              <Shield className="h-5 w-5 text-green-400" />
              <div>
                <p className="font-medium">Anti-cheat</p>
                <p className="text-sm text-gray-400">24/7 protection</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-500/20 bg-neutral-900">
            <CardContent className="flex items-center gap-3 p-5">
              <Wallet className="h-5 w-5 text-emerald-400" />
              <div>
                <p className="font-medium">Fast Payouts</p>
                <p className="text-sm text-gray-400">Instant withdrawals</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why section */}
      <section className="mx-auto max-w-7xl px-4 pb-6">
        <h2 className="mb-4 text-xl sm:text-2xl font-bold">Why PUBG Arena?</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Skill-based Tournaments",
              desc: "Solo, Duo, and Squad formats with fair matchmaking.",
              icon: <Users className="h-5 w-5 text-green-400" />,
            },
            {
              title: "Wallet & Payouts",
              desc: "Add money, join matches, and withdraw winnings securely.",
              icon: <Wallet className="h-5 w-5 text-emerald-400" />,
            },
            {
              title: "Live Streams",
              desc: "Watch live matches with low-latency viewing.",
              icon: <Play className="h-5 w-5 text-blue-400" />,
            },
            {
              title: "Leaderboards",
              desc: "Track your rank and compete for seasonal rewards.",
              icon: <Trophy className="h-5 w-5 text-yellow-400" />,
            },
            {
              title: "Admin Tools",
              desc: "Transparent prize pools and strict ban controls.",
              icon: <Shield className="h-5 w-5 text-green-400" />,
            },
            {
              title: "Mobile-first",
              desc: "Optimized for touch with fast navigation.",
              icon: <Smartphone className="h-5 w-5 text-green-400" />,
            },
          ].map((item) => (
            <Card key={item.title} className="border-green-500/20 bg-neutral-900">
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  {item.icon}
                  <p className="font-semibold">{item.title}</p>
                </div>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/">
            <Button className="bg-green-500 text-black hover:bg-green-600">
              Enter the Arena
            </Button>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
        <h2 className="mb-2 text-center text-xl sm:text-2xl font-bold">How it works</h2>
        <p className="mb-6 sm:mb-8 text-center text-gray-300 text-sm sm:text-base">Three steps to your first win.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[{
            n: "1",
            title: "Create your account",
            desc: "Sign in with phone OTP or email, then set your in-game PUBG ID.",
          },{
            n: "2",
            title: "Fund your wallet",
            desc: "Top up via UPI or cards, and track every transaction in your history.",
          },{
            n: "3",
            title: "Join & win",
            desc: "Enter upcoming matches, play fair, and claim rewards automatically.",
          }].map(step => (
            <Card key={step.n} className="border-green-500/20 bg-neutral-900">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-green-500/20 text-green-400">{step.n}</Badge>
                <p className="mb-1 font-semibold">{step.title}</p>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <Button className="bg-green-500 text-black hover:bg-green-600">Start now</Button>
          </Link>
        </div>
      </section>

      {/* Safety banner */}
      <section className="mx-auto max-w-7xl px-4">
        <Card className="border-green-500/20 bg-green-900/10">
          <CardContent className="flex flex-wrap items-center justify-between gap-3 p-5 text-green-300">
            <div>Protected by 24/7 anti-cheat and manual reviews. Violators are banned instantly.</div>
            <div className="flex gap-2">
              <Badge className="bg-green-500/20 text-green-300">Device ban supported</Badge>
              <Badge className="bg-green-500/20 text-green-300">IP ban supported</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
        <h2 className="mb-4 sm:mb-6 text-center text-xl sm:text-2xl font-bold">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do payments and withdrawals work?</AccordionTrigger>
            <AccordionContent>
              Add funds securely via UPI or cards. Withdrawals are processed instantly to your
              linked method, subject to compliance checks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Who can participate?</AccordionTrigger>
            <AccordionContent>
              Players who meet local age and legal requirements. Fair play policies apply to all matches.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do you prevent cheating?</AccordionTrigger>
            <AccordionContent>
              We combine device and IP bans with real-time detection and manual reviews to keep matches fair.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}


