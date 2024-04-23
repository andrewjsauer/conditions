import localFont from "next/font/local"
import { CodeIcon, HeartIcon } from "@radix-ui/react-icons"
import Link from "next/link"

import { Analytics } from "@vercel/analytics/react"
import { NextThemesProvider } from "@/components/providers/NextThemesProvider"

import "./globals.css"

const heading = localFont({
  src: "fonts/antique-olive-compact.otf",
  display: "swap",
  variable: "--font-antique-compact",
})

const paragraphTitle = localFont({
  src: "fonts/n-haas-grotesk-d.otf",
  display: "swap",
  variable: "--font-haas-grotesk-title",
})

const paragraph = localFont({
  src: "fonts/n-haas-grotesk-d-paragraph.otf",
  display: "swap",
  variable: "--font-haas-grotesk",
})

export const dynamic = "force-dynamic"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${heading.variable} ${paragraphTitle.variable} ${paragraph.variable}, container mx-auto flex min-h-screen flex-col antialiased selection:bg-black selection:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black`}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-grow">{children}</main>
          <footer className="mt-4 sm:mt-5 md:mt-7 lg:mt-12">
            <div className="flex w-full flex-col items-start rounded-2xl bg-[#476c77] p-10 sm:flex-row">
              <div className="flex w-full flex-col md:mb-10">
                <h3 className="mb-6 text-4xl text-white md:text-5xl lg:text-6xl">
                  Big Bear Conditions
                </h3>
                <div className="flex flex-col justify-between md:flex-row">
                  <div className="flex flex-row">
                    <div className="mr-12 flex flex-col md:mr-24">
                      <h4 className="mb-4 text-2xl text-white md:text-3xl">
                        Menu
                      </h4>
                      <div className="mb-4">
                        <Link
                          href="/weather"
                          className="text-md border-b border-white text-white no-underline hover:border-[#efb071] hover:text-[#efb071] md:text-lg"
                        >
                          Weather
                        </Link>
                      </div>
                      <div className="mb-4">
                        <Link
                          href="/roads"
                          className="text-md border-b border-white text-white no-underline hover:border-[#efb071] hover:text-[#efb071] md:text-lg"
                        >
                          Roads
                        </Link>
                      </div>
                      <div className="mb-4">
                        <Link
                          href="mailto:andrew@sauerapple.com"
                          rel="noopener noreferrer"
                          aria-label="Email sauerApple (opens in a new tab)"
                          className="text-md border-b border-white text-white no-underline hover:border-[#efb071] hover:text-[#efb071] md:text-lg"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="mb-4 text-2xl text-white md:text-3xl">
                        Social
                      </h4>
                      <div className="mb-4">
                        <Link
                          target="_blank"
                          href="https://www.facebook.com/groups/464630955895857/"
                          className="text-md border-b border-white text-white no-underline hover:border-[#efb071] hover:text-[#efb071] md:text-lg"
                        >
                          Facebook
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col md:mt-0 md:w-4/12">
                    <h4 className="mb-4 text-2xl text-white md:text-3xl">
                      Let&apos;s stay connected
                    </h4>
                    <p className="text-md text-white md:text-lg">
                      Reach out about any conditions or just drop a line to say
                      hello. We are open to any and all feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="group m-8 flex items-center justify-between gap-1 text-neutral-400 dark:text-neutral-600"
              aria-hidden={true}
            >
              <div className="flex items-center justify-center gap-1">
                <CodeIcon className="h-5 w-5" />
                <span>with</span>
                <HeartIcon className="h-4 w-4 group-hover:text-red-500" />
                <span>in Big Bear, CA</span>
              </div>
              <div>
                <span>
                  © {new Date().getFullYear()}{" "}
                  <Link
                    target="_blank"
                    href="https://sauerapple.com"
                    className="border-b border-white no-underline hover:border-[#efb071] hover:text-[#efb071]"
                  >
                    sauerApple
                  </Link>
                  . All rights reserved.
                </span>
              </div>
            </div>
          </footer>
        </NextThemesProvider>
        <Analytics />
      </body>
    </html>
  )
}
