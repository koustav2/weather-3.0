import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import HumidityChart from "@/components/HumidityChart";
import InformationPanel from "@/components/InformationPanel";
import RainChart from "@/components/RainChart";
import StatsCard from "@/components/StatsCard";
import TempChart from "@/components/TempChart";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";

export const revalidate =60

type Props = {
  params: { 
    city: string ;
    lat: string;
    lon: string;
  }
}

async function WeatherPage({ params: { city, lat, lon } }: Props) {
  const client = getClient();
  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      latitude: lat,
      longitude: lon,
      timezone: "auto",
    }
  })

  const results: Root = data.myQuery;

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <InformationPanel
        city={city}
        results={results}
        lat={lat}
        lon={lon}
      />

      <div className="flex-1 p-5 lg:p-10">
        <div className="p-5">
          <div className="pb-10">
            <h2 className="text-2xl font-bold">Today Overview</h2>
            <p className="text-sm text-gray-400">Last updates: {" "}
              {new Date(results.current_weather.time).toLocaleString()} (
              {results.timezone})
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatsCard
              title="Maximun temp"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
              color="yellow"
            />

            <StatsCard
              title="Minimum temp"
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°`}
              color="pink"
            />
            <div>
              <StatsCard
                title="UV INDEX"
                metric={`${results.daily.uv_index_max[0].toFixed(1)}°`}
                color="pink"
              />
              {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
                <CalloutCard
                  message="UV is high today , be sure to use sunscreen"
                  warning
                />
              )}
            </div>
            <div className="flex space-x-2">
              <StatsCard
                title="Wind Speed"
                metric={`${results.current_weather.windspeed.toFixed(1)} km/h`}
                color="blue"
              />

              <StatsCard
                title="Wind Direction"
                metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                color="emerald"
              />
            </div>
          </div>
        </div>
        <hr className="mb-5 " />
        <div className="space-y-3">
          <TempChart results={results} />
          <RainChart results={results} />
          <HumidityChart results={results} />
        </div>
      </div>
    </div>
  )
}

export default WeatherPage;