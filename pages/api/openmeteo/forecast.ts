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

  if (req.method !== 'GET') {
    return res.status(405)
  }

  if (req.query.current_weather == 'true') {
    return (
      await api.forecast.current(
        req.query.latitude as string,
        req.query.longitude as string
      )
    )
      .mapErr((error) => res.status(500).json(error))
      .map((value) => res.status(200).json(value))
  } else if (req.query.hourly !== undefined) {
    return (
      await api.forecast.hourly(
        req.query.latitude as string,
        req.query.longitude as string,
        req.query.start_date as string
      )
    )
      .mapErr((error) => res.status(500).json(error))
      .map((value) => res.status(200).json(value))
  } else if (req.query.daily !== undefined) {
    return (
      await api.forecast.daily(
        req.query.latitude as string,
        req.query.longitude as string,
        req.query.start_date as string,
        req.query.end_date as string
      )
    )
      .mapErr((error) => res.status(500).json(error))
      .map((value) => res.status(200).json(value))
  }

  return res.status(405)
}
