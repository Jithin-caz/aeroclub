"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plane, Award, Cpu, Users, ChevronRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useAnimation, useInView } from "framer-motion"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const isHeroInView = useInView(heroRef, { once: false });
  
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 300], [0, -100])
  // const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const controls = useAnimation()

  useEffect(() => {
    if (isHeroInView) {
      controls.start("visible")
    }
  }, [controls, isHeroInView])

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Navigation */}
      <header className="sticky px-2 top-0 z-40 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className=" flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Plane className="h-6 w-6 text-blue-500" />
              <span className="inline-block font-bold">AERO CLUB MACE</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                About
              </Link>
              <Link
                href="#achievements"
                className="flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                Achievements
              </Link>
              <Link
                href="#drones"
                className="flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                Drones
              </Link>
              <Link
                href="#sponsors"
                className="flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                Sponsors
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex border-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white"
            >
              Join the Club
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Simplified with scroll animations */}
        <section
          ref={heroRef}
          className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-black"
        >
          <img className=" absolute top-0 left-0 w-full opacity-50" src="https://i.pinimg.com/736x/ac/ca/1b/acca1b45ceb8da0756af2f85619861b6.jpg" alt="" />
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent_70%)]"></div>
          </div>

          <motion.div
            style={{ y: y1, opacity }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
          >
            <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-3xl"></div>
            <div className="absolute bottom-[30%] right-[15%] w-[250px] h-[250px] rounded-full bg-blue-600/5 blur-3xl"></div>
          
          </motion.div>

          <div className=" px-4 md:px-6 z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="text-center max-w-3xl mx-auto"
            >
              <Badge
                className="inline-flex mb-4 bg-blue-900/30 text-blue-400 border-blue-800 backdrop-blur-sm"
                variant="outline"
              >
                Innovation in Flight
              </Badge>
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
                }}
              >
                Engineering Dreams, <span className="text-blue-500">Taking Flight</span>
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-gray-400 md:text-xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
                }}
              >
                AERO CLUB MACE is a student-led organization dedicated to designing, building, and flying cutting-edge
                drones and aircraft.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
                }}
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-1">
                  Explore Our Projects <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white"
                >
                  Join Our Team
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <ChevronRight className="h-8 w-8 text-gray-500 rotate-90" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-24 lg:py-32 bg-black">
          <div className=" px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">About AERO CLUB MACE</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded with a passion for aerospace engineering, AERO CLUB MACE brings together students from various
                  disciplines to design, build, and fly innovative drones and aircraft.
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/20 border border-blue-800/50">
                  <Cpu className="h-6 w-6 text-blue-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">Innovation</h3>
                  <p className="text-gray-400">
                    Pushing the boundaries of drone technology through creative design and engineering solutions.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/20 border border-blue-800/50">
                  <Award className="h-6 w-6 text-blue-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">Excellence</h3>
                  <p className="text-gray-400">
                    Committed to the highest standards in design, fabrication, and performance.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/20 border border-blue-800/50">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">Collaboration</h3>
                  <p className="text-gray-400">
                    Bringing together diverse talents to create extraordinary flying machines.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="w-full py-24 lg:py-32 bg-gray-950">
          <div className=" px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Our Achievements</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Celebrating our success in national and international competitions and technological breakthroughs.
                </p>
              </div>
            </motion.div>
            <div className="mx-auto px-4 grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {[
    {
      title: "National Drone Championship",
      description: "1st Place, 2023",
      image: "/placeholder.svg?height=200&width=400",
      alt: "Trophy ceremony",
      footer: "Recognized for innovative design and exceptional flight performance",
      delay: 0.2,
    },
    {
      title: "SAE Aero Design",
      description: "2nd Place, 2022",
      image: "/placeholder.svg?height=200&width=400",
      alt: "Team with aircraft",
      footer: "Excelled in design, presentation, and flight rounds",
      delay: 0.4,
    },
    {
      title: "Tech Innovation Award",
      description: "Drone Tech Expo, 2023",
      image: "/placeholder.svg?height=200&width=400",
      alt: "Innovation award",
      footer: "Recognized for breakthrough in autonomous navigation systems",
      delay: 0.6,
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: item.delay }}
    >
      <Card className="bg-gray-900 border-gray-800 text-white">
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription className="text-gray-400">{item.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={item.image}
            alt={item.alt}
            width={400}
            height={200}
            className="rounded-lg object-cover w-full h-auto"
          />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-400">{item.footer}</p>
        </CardFooter>
      </Card>
    </motion.div>
  ))}
</div>

          </div>
        </section>

        {/* Drones Section */}
        <section id="drones" className="w-full py-24 lg:py-32 bg-black">
  <div className="px-4 md:px-6">
    <motion.div
      className="flex flex-col items-center justify-center space-y-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Our Drones</h2>
        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Explore our fleet of custom-designed drones and aircraft, each built for specific missions and challenges.
        </p>
      </div>
    </motion.div>
    <motion.div
      className="mx-auto max-w-5xl py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="overflow-x-auto scrollbar-hide">
        <Tabs defaultValue="falcon" className="w-full min-w-[600px]">
          <TabsList className="flex w-full bg-gray-900 text-gray-400">
            {[
              { value: "falcon", label: "Falcon X1" },
              { value: "phoenix", label: "Phoenix V2" },
              { value: "eagle", label: "Eagle Scout" },
              { value: "raptor", label: "Raptor X" }, // Add more here
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-blue-900/30 data-[state=active]:text-blue-400 whitespace-nowrap"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="overflow-y-auto max-h-[500px] px-4 py-6">
            {[
              {
                value: "falcon",
                title: "Falcon X1",
                description: "Our flagship racing drone, designed for speed and agility in competitive drone racing events.",
                image: "/placeholder.svg?height=600&width=800",
                specs: ["Weight: 250g", "Max Speed: 120 km/h", "Flight Time: 15 minutes", "Motor: 2306 2450KV", "Frame: Carbon Fiber"],
                features: ["HD Camera System", "Custom Flight Controller", "Digital FPV System", "GPS Return-to-Home", "Obstacle Avoidance"],
              },
              {
                value: "phoenix",
                title: "phoenix X1",
                description: "Our flagship racing drone, designed for speed and agility in competitive drone racing events.",
                image: "/placeholder.svg?height=600&width=800",
                specs: ["Weight: 250g", "Max Speed: 120 km/h", "Flight Time: 15 minutes", "Motor: 2306 2450KV", "Frame: Carbon Fiber"],
                features: ["HD Camera System", "Custom Flight Controller", "Digital FPV System", "GPS Return-to-Home", "Obstacle Avoidance"],
              },
               {
                value: "eagle",
                title: "eagle X2",
                description: "Our flagship racing drone, designed for speed and agility in competitive drone racing events.",
                image: "/placeholder.svg?height=600&width=800",
                specs: ["Weight: 250g", "Max Speed: 120 km/h", "Flight Time: 15 minutes", "Motor: 2306 2450KV", "Frame: Carbon Fiber"],
                features: ["HD Camera System", "Custom Flight Controller", "Digital FPV System", "GPS Return-to-Home", "Obstacle Avoidance"],
              },
              {
                value: "raptor",
                title: "raptor X3",
                description: "Our flagship racing drone, designed for speed and agility in competitive drone racing events.",
                image: "/placeholder.svg?height=600&width=800",
                specs: ["Weight: 250g", "Max Speed: 120 km/h", "Flight Time: 15 minutes", "Motor: 2306 2450KV", "Frame: Carbon Fiber"],
                features: ["HD Camera System", "Custom Flight Controller", "Digital FPV System", "GPS Return-to-Home", "Obstacle Avoidance"],
              },
             
              // Add more drones here...
            ].map((drone) => (
              <TabsContent key={drone.value} value={drone.value} className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="relative h-[300px] rounded-xl overflow-hidden border border-gray-800">
                    <Image src={drone.image} alt={drone.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold text-white">{drone.title}</h3>
                    <p className="text-gray-400">{drone.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-400">Specifications</h4>
                        <ul className="mt-2 space-y-1 text-sm text-gray-300">
                          {drone.specs.map((spec, index) => (
                            <li key={index}>{spec}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-400">Features</h4>
                        <ul className="mt-2 space-y-1 text-sm text-gray-300">
                          {drone.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </motion.div>
  </div>
</section>

        {/* Sponsors Section */}
        <section id="sponsors" className="w-full py-24 lg:py-32 bg-gray-950">
          <div className="px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Our Sponsors</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We&apos;re grateful for the support of these organizations that make our work possible.
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <motion.div
                className="flex flex-col items-center justify-center space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative h-[100px] w-[200px] overflow-hidden rounded-lg bg-gray-900 p-4 border border-gray-800">
                  <Image src="/placeholder.svg?height=100&width=200" alt="Sponsor 1" fill className="object-contain" />
                </div>
                <p className="font-medium text-white">TechCorp Industries</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center justify-center space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative h-[100px] w-[200px] overflow-hidden rounded-lg bg-gray-900 p-4 border border-gray-800">
                  <Image src="/placeholder.svg?height=100&width=200" alt="Sponsor 2" fill className="object-contain" />
                </div>
                <p className="font-medium text-white">AeroSystems Inc.</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center justify-center space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative h-[100px] w-[200px] overflow-hidden rounded-lg bg-gray-900 p-4 border border-gray-800">
                  <Image src="/placeholder.svg?height=100&width=200" alt="Sponsor 3" fill className="object-contain" />
                </div>
                <p className="font-medium text-white">NextGen Electronics</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center justify-center space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="relative h-[100px] w-[200px] overflow-hidden rounded-lg bg-gray-900 p-4 border border-gray-800">
                  <Image src="/placeholder.svg?height=100&width=200" alt="Sponsor 4" fill className="object-contain" />
                </div>
                <p className="font-medium text-white">Global Aviation Partners</p>
              </motion.div>
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                className="gap-1 border-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white"
              >
                Become a Sponsor <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24 lg:py-32 bg-black border-t border-gray-800">
          <div className=" px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Join AERO CLUB MACE
                </h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be part of a team that&apos;s pushing the boundaries of aerospace engineering and drone technology.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-1">
                  Apply Now <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800 py-6 md:py-0 bg-black">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Plane className="h-5 w-5 text-blue-500" />
            <p className="text-sm leading-loose text-center md:text-left text-gray-400">
              &copy; {new Date().getFullYear()} AERO CLUB MACE. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

