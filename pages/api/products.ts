import type { NextApiRequest, NextApiResponse } from 'next'
 
 
export default async function getAllProducts(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(`${process.env._FAKE_DB_CONNECT}/products`)
  const data = await response.json()
  res.status(200).json(data)
}