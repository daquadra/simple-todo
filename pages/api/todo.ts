// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createToDo, getAllToDos } from '../../lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const data = JSON.parse(req.body)
    await createToDo(data)
    return res.status(200).json({
      message: "Success"
    })
  }
  res.status(200).json(await getAllToDos())
}
