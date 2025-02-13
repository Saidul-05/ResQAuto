import { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

export default function MapComponent() {
  const [viewport, setViewport] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 10,
    width: '100%',
    height: '400px'
  })

  return (
    <div className="mt-10">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "YOUR_MAPBOX_ACCESS_TOKEN"}
        onViewportChange={(newViewport) => setViewport(newViewport)}
      >
        <Marker latitude={37.7749} longitude={-122.4194}>
          <div className="bg-blue-500 rounded-full h-4 w-4"></div>
        </Marker>
      </ReactMapGL>
    </div>
  )
}
