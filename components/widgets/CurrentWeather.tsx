import { Card } from "@/components/ui/card"
import { CurrentWeatherType } from "@/lib/types"
import Clock from "../ui/clock"
import { convertToDate } from "@/lib/dateUtils"
import IconComponent from "../ui/icon-component"

interface CurrentWeatherProps {
  current: CurrentWeatherType
  cityName: string
  cityTimezone: number
  tempMax: number
  tempMin: number
}

export default function CurrentWeather({
  current,
  cityName,
  cityTimezone,
  tempMax,
  tempMin,
}: CurrentWeatherProps) {
  const initial = new Date()

  return (
    <Card className="relative flex h-fit w-full shrink-0 flex-col justify-between overflow-hidden md:h-[25rem]">
      <div className="absolute " />
      <div>
        <div className="flex justify-between text-lg font-semibold">
          <span>{convertToDate(cityTimezone, current.dt, "long")}</span>
          <Clock initial={initial} timezone={cityTimezone} />
        </div>
        <div className="text-md mt-2 flex font-bold">
          <span>{cityName}</span>
          <i>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-0.5 h-4 w-4 fill-none stroke-black dark:stroke-white"
            >
              <path
                d="M7.39993 6.32003L15.8899 3.49003C19.6999 2.22003 21.7699 4.30003 20.5099 8.11003L17.6799 16.6C15.7799 22.31 12.6599 22.31 10.7599 16.6L9.91993 14.08L7.39993 13.24C1.68993 11.34 1.68993 8.23003 7.39993 6.32003Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.1101 13.6501L13.6901 10.0601"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
        </div>
      </div>
      <div className="flex justify-center py-7 text-8xl font-bold md:py-10">
        {Math.round(current.temp)}&deg;
      </div>
      <div>
        <IconComponent
          weatherCode={current.weather[0].id}
          className="h-9 w-9"
        />
        <div className="font-semibold">{current.weather[0].main}</div>
        <div className="flex gap-2 dark:text-neutral-500">
          <span>H: {Math.round(tempMax)}&deg;</span>
          <span>L: {Math.round(tempMin)}&deg;</span>
        </div>
      </div>
    </Card>
  )
}
