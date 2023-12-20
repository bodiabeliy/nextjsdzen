import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()
  res.status(200).json(data)
}