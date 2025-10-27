import {
  Airplane,
  ArrowRight,
  Calendar,
  ChartLine,
  ChatText,
  CurrencyCircleDollar,
  Globe,
  Headphones,
  Lightning,
  MapPin,
  Microphone,
  Phone,
  Shield,
  Sparkle,
} from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface WelcomeProps {
  disabled: boolean;
  startButtonText: string;
  onStartCall: () => void;
}

export const Welcome = ({
  disabled,
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeProps) => {
  return (
    <section
      ref={ref}
      inert={disabled}
      className={cn(
        'bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:to-gray-800',
        'fixed inset-0 mx-auto flex flex-col overflow-y-auto',
        disabled ? 'z-10' : 'z-20'
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 to-transparent"></div>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-indigo-800 shadow-lg">
                <Airplane className="h-7 w-7 text-white" weight="bold" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Travel<span className="text-blue-600">AI</span>
              </span>
            </div>
            <div className="hidden items-center space-x-8 md:flex">
              <a
                href="#features"
                className="font-medium text-gray-700 transition hover:text-blue-600"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="font-medium text-gray-700 transition hover:text-blue-600"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="font-medium text-gray-700 transition hover:text-blue-600"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="font-medium text-gray-700 transition hover:text-blue-600"
              >
                Contact
              </a>
              <button className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-5 py-2 font-medium text-white transition hover:shadow-lg">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-grow items-center px-4 pt-32 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
                <Sparkle className="h-4 w-4" />
                <span>Enterprise-Grade AI Technology</span>
              </div>

              <h1 className="text-4xl leading-tight font-bold text-gray-900 md:text-5xl lg:text-6xl">
                Intelligent Travel Planning for
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  Modern Travelers
                </span>
              </h1>

              <p className="max-w-2xl text-xl leading-relaxed text-gray-600">
                Streamline your travel with our AI-powered voice assistant. Reduce planning time by
                70% while optimizing costs and ensuring the best experiences.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onStartCall}
                  className="group flex transform items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Microphone className="h-5 w-5" />
                  <span>{startButtonText}</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                <Button className="rounded-xl border-2 border-gray-300 px-8 py-4 text-lg font-medium font-semibold text-gray-700 transition hover:border-blue-400 hover:shadow-lg">
                  Schedule Demo
                </Button>
              </div>

              <div className="flex items-center space-x-10 border-t border-gray-200 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">$2.5M</div>
                  <div className="text-sm text-gray-600">Saved Annually</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-1 shadow-2xl">
                <div className="rounded-xl bg-white p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-sm text-gray-500">TravelAI Dashboard</div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                        <ChatText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="rounded-xl rounded-tl-none bg-blue-50 p-4">
                          <p className="text-sm font-medium text-gray-800">Travel Assistant</p>
                          <p className="mt-1 text-xs text-gray-600">
                            Ready to optimize your travel
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="ml-12 rounded-xl rounded-tl-none bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
                      <p className="text-sm">
                        Hello! I'm your travel assistant. How can I help plan your next trip?
                      </p>
                    </div>

                    <div className="mr-12 rounded-xl rounded-tr-none bg-gray-100 p-4">
                      <p className="text-sm text-gray-800">
                        Need to book a flight to Paris with hotel recommendations
                      </p>
                    </div>

                    <div className="ml-12 rounded-xl rounded-tl-none bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white">
                      <p className="text-sm">
                        Understood. Finding optimal flights and hotels that match your
                        preferences...
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-3 text-center text-white shadow">
                        <Shield className="mx-auto mb-1 h-5 w-5" />
                        <div className="text-xs font-semibold">Best Prices</div>
                      </div>
                      <div className="rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 p-3 text-center text-white shadow">
                        <ChartLine className="mx-auto mb-1 h-5 w-5" />
                        <div className="text-xs font-semibold">Cost Savings</div>
                      </div>
                      <div className="rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 p-3 text-center text-white shadow">
                        <Lightning className="mx-auto mb-1 h-5 w-5" />
                        <div className="text-xs font-semibold">Real-time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                AI-Powered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Travel Solutions</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Advanced features designed for modern travel planning and optimization
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 shadow-md">
                <Headphones className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Voice Command Interface</h3>
              <p className="mb-4 text-gray-600">
                Natural conversation with our AI assistant for hands-free travel planning and
                booking.
              </p>
              <div className="text-sm font-semibold text-blue-600">Learn more →</div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 shadow-md">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Best Price Guarantee</h3>
              <p className="mb-4 text-gray-600">
                Automatic price matching across 500+ booking platforms to ensure the best deals.
              </p>
              <div className="text-sm font-semibold text-blue-600">Learn more →</div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 shadow-md">
                <ChartLine className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Cost Optimization</h3>
              <p className="mb-4 text-gray-600">
                AI-driven insights to reduce travel costs while maintaining quality experiences.
              </p>
              <div className="text-sm font-semibold text-blue-600">Learn more →</div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 shadow-md">
                <Globe className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Global Coverage</h3>
              <p className="mb-4 text-gray-600">
                Access to 500,000+ hotels and all major airlines with real-time pricing data.
              </p>
              <div className="text-sm font-semibold text-blue-600">Learn more →</div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 shadow-md">
                <Lightning className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Instant Booking</h3>
              <p className="mb-4 text-gray-600">
                Book flights, hotels, and transportation in seconds with our streamlined process.
              </p>
              <div className="text-sm font-semibold text-blue-600">Learn more →</div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 shadow-md">
                <Sparkle className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Smart Recommendations</h3>
              <p className="mb-4 text-gray-600">
                Personalized suggestions based on your preferences, budget, and travel history.
              </p>
              <div className="text-sm font-semibold text-blue-600">Learn more →</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-4xl font-bold text-white md:text-5xl">98%</div>
              <div className="text-blue-100">User Satisfaction</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-white md:text-5xl">40%</div>
              <div className="text-blue-100">Avg. Cost Savings</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-white md:text-5xl">150+</div>
              <div className="text-blue-100">Destinations</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-white md:text-5xl">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Transform Your Travel Experience
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-600">
            Join thousands of travelers who have revolutionized their travel planning with our
            AI-powered platform.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              onClick={onStartCall}
              className="inline-flex transform items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button className="rounded-xl border-2 border-gray-300 bg-white px-10 py-4 text-lg font-medium font-semibold text-gray-700 transition hover:border-blue-400 hover:shadow-lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 pt-16 pb-8 text-gray-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
                  <Airplane className="h-7 w-7 text-white" weight="bold" />
                </div>
                <span className="text-2xl font-bold text-white">
                  Travel<span className="text-blue-400">AI</span>
                </span>
              </div>
              <p className="mb-6 max-w-md text-gray-400">
                Enterprise-grade travel solutions powered by artificial intelligence. Simplify
                travel planning and reduce costs.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-blue-600"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-blue-600"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="transition hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Demo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="transition hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    API Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="transition hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="text-sm">&copy; 2025 TravelAI. All rights reserved.</p>
              <div className="mt-4 flex space-x-6 md:mt-0">
                <a href="#" className="text-sm transition hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm transition hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="text-sm transition hover:text-white">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
