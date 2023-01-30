// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenMeteoApi } from '@/api/openmeteo/core/client'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const api = new OpenMeteoApi()

  const { latitude, longitude, current_weather } = req.query

  if (req.method !== 'GET') {
    return res.status(405)
  }

  if (current_weather == 'true') {
    return (await api.forecast.current(latitude as string, longitude as string))
      .mapErr((error) => res.status(500).json(error))
      .map((value) => res.status(200).json(value))
  }

  return res.status(405)
}
