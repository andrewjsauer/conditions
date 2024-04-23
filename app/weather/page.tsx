import { getAirPollutionData } from "@/actions/getAirPollutionData"
import { getUVData } from "@/actions/getUVData"
import { getForecast } from "@/actions/getForecast"
import CurrentWeather from "@/components/widgets/CurrentWeather"
import HourlyForecast from "@/components/widgets/HourlyForecast"
import TenDayForecast from "@/components/widgets/TenDayForecast"
import WeatherWidgets from "@/components/widgets/WeatherWidgets"
import { ModeToggle } from "@/components/ui/ModeToggle"

import { DEFAULT_LOCATION } from "@/lib/config"
import {
  AirPollutionResponse,
  ForecastResponse,
  UVIndexResponse,
} from "@/lib/types"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: `Big Bear Conditions | Weather`,
  description: `${DEFAULT_LOCATION.city} weather forecast with current conditions, wind, air quality, and what to expect for the next 3 days.`,
}

export default async function WeatherPage() {
  const { lat, lon } = DEFAULT_LOCATION.coord

  const ForecastRequest: ForecastResponse = await getForecast({
    lat,
    lon,
  })
  const AirDataRequest: AirPollutionResponse = await getAirPollutionData({
    lat,
    lon,
  })
  const UvIndexRequest: UVIndexResponse = await getUVData({ lat, lon })

  const [forecast_data, air_pollution, uv_index] = await Promise.all([
    ForecastRequest,
    AirDataRequest,
    UvIndexRequest,
  ])

  if (!forecast_data || !air_pollution || !uv_index) return notFound()

  return (
    <>
      <nav className="flex items-center justify-between py-4">
        <Link href="/">
          <h1 className="text-center text-3xl">Big Bear Conditions</h1>
        </Link>
        <div />
        <ModeToggle />
      </nav>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex w-full min-w-[18rem] flex-col gap-4 md:w-1/2">
          <CurrentWeather
            current={forecast_data.current}
            cityName={DEFAULT_LOCATION.city}
            cityTimezone={forecast_data.timezone_offset}
            tempMax={forecast_data.daily[0].temp.max}
            tempMin={forecast_data.daily[0].temp.min}
          />
          <TenDayForecast
            cityTimezone={forecast_data.timezone_offset}
            data={forecast_data.daily}
          />
        </div>
        <section className="grid h-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
          <WeatherWidgets
            airQuality={air_pollution.list[0]}
            cityTimezone={forecast_data.timezone_offset}
            current={forecast_data.current}
            hourly={forecast_data.hourly}
            uvIndexForToday={uv_index.daily.uv_index_max[0]}
          />
          <HourlyForecast data={forecast_data.hourly} />
        </section>
      </div>
    </>
  )
}
