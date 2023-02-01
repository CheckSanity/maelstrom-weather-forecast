import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenMeteoApi } from '@/api/openmeteo/core/client'
import { GeocodingResponses } from '@/api/openmeteo/responses/geocoding.responses'
import { ErrorResponse } from '@/api/openmeteo/responses/common.responses'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GeocodingResponses | ErrorResponse>,
) {
  const api = new OpenMeteoApi()

  const { name } = req.query

  switch (req.method) {
    case 'GET':
      return (await api.geocoding.search(name as string))
        .mapErr((error) => res.status(500).json(error))
        .map((value) => res.status(200).json(value))
    default:
      res.status(405)
      break
  }
}
