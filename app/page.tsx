import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  CreditCard,
  PieChart,
  Star,
} from "lucide-react";
import { GradientButton } from "@/components/ui/button-gradient";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">B</span>
              </div>
              <span className="text-white font-semibold text-xl">Bankly</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/sign-in">
                <Button
                  variant="ghost"
                  className="text-slate-300 hover:text-white"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <GradientButton>Get Started</GradientButton>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              All your finances.{" "}
              <span className="bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] bg-clip-text text-transparent">
                One dashboard.
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Track your bank accounts, credit cards, budgets, and financial
              health in one elegant, secure platform. Take control of your money
              with Bankly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up">
                <GradientButton size="lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </GradientButton>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary-foreground"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)]/20 to-[hsl(36,100%,50%)]/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
              <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">
                    Dashboard Preview
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-green-500/20 text-green-400"
                  >
                    Live Data
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-slate-700/50 border-slate-600">
                    <CardContent className="p-4">
                      <div className="text-slate-400 text-sm">
                        Total Balance
                      </div>
                      <div className="text-2xl font-bold text-white">
                        $12,847.32
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-700/50 border-slate-600">
                    <CardContent className="p-4">
                      <div className="text-slate-400 text-sm">
                        Monthly Spending
                      </div>
                      <div className="text-2xl font-bold text-white">
                        $3,247.89
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-700/50 border-slate-600">
                    <CardContent className="p-4">
                      <div className="text-slate-400 text-sm">
                        Connected Banks
                      </div>
                      <div className="text-2xl font-bold text-white">4</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Bankly?
            </h2>
            <p className="text-lg text-slate-300">
              Experience the future of personal finance management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-slate-900" />
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Budget Management
                </h3>
                <p className="text-slate-400 text-sm">
                  Set budgets and track your progress with real-time
                  notifications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-slate-900" />
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Bank-Level Security
                </h3>
                <p className="text-slate-400 text-sm">
                  Your data is protected with 256-bit encryption and
                  multi-factor authentication.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-6 w-6 text-slate-900" />
                </div>
                <h3 className="text-white font-semibold mb-2">
                  All Your Accounts
                </h3>
                <p className="text-slate-400 text-sm">
                  Connect all your bank accounts and credit cards in one secure
                  dashboard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Trusted by thousands of users
            </h2>
            <p className="text-xl text-slate-300">
              See what our customers have to say about Bankly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-4">
                  "Bankly has completely transformed how I manage my finances.
                  The insights are incredible!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">SM</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      Sarah Martinez
                    </div>
                    <div className="text-slate-400 text-sm">
                      Product Manager
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-4">
                  "Finally, a financial app that doesn't feel overwhelming.
                  Clean, simple, and powerful."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">DJ</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      David Johnson
                    </div>
                    <div className="text-slate-400 text-sm">Entrepreneur</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-4">
                  "The budget tracking features helped me save over $2,000 in
                  just three months!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">EC</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Emily Chen</div>
                    <div className="text-slate-400 text-sm">Designer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300">
              Everything you need to know about Bankly.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-slate-700/50 border-slate-600 rounded-lg px-6"
            >
              <AccordionTrigger className="text-white hover:text-slate-300">
                Is my financial data secure?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Yes, absolutely. We use bank-level 256-bit encryption and never
                store your banking credentials. All connections are read-only
                and we're SOC 2 Type II certified.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-slate-700/50 border-slate-600 rounded-lg px-6"
            >
              <AccordionTrigger className="text-white hover:text-slate-300">
                Which banks are supported?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                We support over 12,000 financial institutions including all
                major banks like Chase, Bank of America, Wells Fargo, and credit
                unions across the United States.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-slate-700/50 border-slate-600 rounded-lg px-6"
            >
              <AccordionTrigger className="text-white hover:text-slate-300">
                How much does Bankly cost?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Bankly offers a free tier with basic features and a Pro plan at
                $9.99/month with advanced analytics, unlimited budgets, and
                priority support.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-slate-700/50 border-slate-600 rounded-lg px-6"
            >
              <AccordionTrigger className="text-white hover:text-slate-300">
                Can I export my data?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Yes, you can export all your transaction data, budgets, and
                reports in CSV or PDF format at any time. Your data belongs to
                you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-sm">B</span>
                </div>
                <span className="text-white font-semibold text-xl">Bankly</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Take control of your financial future with Bankly's
                comprehensive money management platform.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 Bankly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
