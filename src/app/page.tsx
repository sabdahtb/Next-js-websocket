'use client'

import React, { useEffect } from 'react'
import { w3cwebsocket as WebSocketClient } from 'websocket'

export default function Home() {
  useEffect(() => {
    const apiKey = process.env.API_KEY
    const socket = new WebSocketClient('wss://ws.coinapi.io/v1/')

    socket.onopen = () => {
      console.log('WebSocket Connected')
      // You can perform any necessary actions once the WebSocket is connected

      // Example: Send a request to the API after the WebSocket is connected
      const request = {
        type: 'hello',
        apikey: apiKey,
        heartbeat: false,
        subscribe_data_type: ['trade'],
        subscribe_filter_symbol_id: [
          'BITSTAMP_SPOT_BTC_USD$',
          'BITFINEX_SPOT_BTC_LTC$',
          'COINBASE_',
          'ITBIT_',
        ],
      }

      socket.send(JSON.stringify(request))
    }

    socket.onmessage = (event) => {
      console.log('Received message:', event.data)
      // Process the received message from the WebSocket

      // Example: Parse and set the received data

      if (typeof event.data === 'string') {
        const data = JSON.parse(event.data as string)
        console.log(data)
      }
    }

    socket.onclose = () => {
      console.log('WebSocket Disconnected')
      // You can handle the WebSocket disconnection event
    }

    return () => {
      socket.close()
    }
  }, [])

  return (
    <main className='h-full bg-white'>
      <p>Halo main</p>
    </main>
  )
}
