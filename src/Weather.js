import { useState, useEffect } from "react";

export function Weather({ location }) {
  const [data, setData] = useState(location);

  useEffect(() => {
    if (!location) return;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location},uk&APPID=${process.env.REACT_APP_KEY}`)
      .then(response => response.json())
      .then(setData)
  }, [location]);

  if (data.cod === 200) {
  return (
    <pre>
        { JSON.stringify(data, null, 2) }
    </pre>
  )} else {
    return (
      <pre>
        {data.message}
      </pre>
    )
  }
}