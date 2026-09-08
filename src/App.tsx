import useStations from "./hooks/useStations"

function App() {
  const {
    stations,
    isLoading,
    isError,
    error
  } = useStations()
  return (
    <main className="bg-gray-50 h-screen">
      <h2>Welcome to terpel</h2>
      {isLoading && (<div className="mb-4 text-blue-500">Loading stations...</div>)}
      {isError && (<div className="mb-4 text-red-500">Error: {error?.message}</div>)}
      {stations?.length === 0 && !isError && !isLoading && (
        <div className="mb-4">No stations found.</div>
      )}
      {stations && stations.length > 0 && (
        <div>
          {
            stations.map(station => (
              <li key={station.id} className="border p-3 rounded">
                <h3 className="font-semibold">{station.name}</h3>
                <p>{station.stationId}</p>
              </li>
            ))
          }
        </div>
      )}

    </main>
  )
}

export default App
