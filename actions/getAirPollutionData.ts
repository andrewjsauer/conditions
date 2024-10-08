export const getAirPollutionData = async ({
  lat,
  lon,
}: {
  lat: string
  lon: string
}) => {
  const data = await fetch(
    `https://www.bigbearconditions.com/api/weather/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
  )

  if (!data.ok) {
    throw new Error("Failed to fetch data")
  }

  return data.json()
}
