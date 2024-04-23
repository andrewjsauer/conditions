import React from "react"
import { Metadata } from "next"
import Link from "next/link"

import { ModeToggle } from "@/components/ui/ModeToggle"
import { DEFAULT_LOCATION } from "@/lib/config"

export const metadata: Metadata = {
  title: `Big Bear Conditions | Roads`,
  description: `${DEFAULT_LOCATION.city} road conditions with current traffic, construction, and what to expect.`,
}

function RoadsPage() {
  const mapUrl = "https://quickmap.dot.ca.gov/"

  return (
    <>
      <nav className="flex items-center justify-between py-4">
        <Link href="/">
          <h1 className="text-center text-3xl">Big Bear Conditions</h1>
        </Link>
        <div />
        <ModeToggle />
      </nav>
      <div className="mx-auto my-20 max-w-4xl px-10">
        <h2 className="text-2xl">Latest Road Conditions</h2>
        <p className="mt-4 text-lg">
          Currently best way to see the latest road conditions for Big Bear is
          using
          <strong> CalTrans QuickMap</strong>, a government service that pulls
          data from Waze, current road conditions, snow plow whereabouts, and
          more.
        </p>
        <p className="mt-4 text-lg">
          We are waiting until they allow us to use their API to pull in the
          data directly, but for now you can visit their website to see the
          latest road conditions.
        </p>
        <Link
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-20 flex items-center justify-center rounded-3xl bg-[#476c77] px-4 py-4 text-lg font-bold text-white transition-colors duration-300 ease-in-out hover:bg-[#efb071] hover:text-black"
        >
          Visit CalTrans QuickMap
        </Link>
        <p className="mt-4 text-lg">
          Note: To use the map, click the link below and manually navigate to
          Big Bear Lake, California. From there you will need to toggle the
          &quot;Options&quot; menu and select all the options you want to see on
          the map. We recommend turning them all on.
        </p>
      </div>
    </>
  )
}

export default RoadsPage
