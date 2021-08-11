import fetch from 'isomorphic-unfetch'
import { NextApiRequest, NextApiResponse } from 'next'

const newsletter = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const BASE_EMAIL = process.env.BASE_EMAIL
  const LIST_ID = process.env.MAILCHIMP_LIST_ID
  const API_KEY = process.env.MAILCHIMP_API_KEY
  const DATACENTER = API_KEY.split('-')[1]

  const data = {
    email_address: email,
    status: 'subscribed',
  }

  const response = await fetch(
    `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
    {
      body: JSON.stringify(data),
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then((res) => res.json())

  if (response.status === 400 && response.title === 'Member Exists') {
    return res.status(400).json({
      error: null,
    })
  }

  if (response.status >= 400) {
    return res.status(400).json({
      error: `:'( Not able to add your email to the list. Ping me directly at ${BASE_EMAIL} and I'll make sure you get added!`,
    })
  }
  return res.status(201).json({ error: '' })
}

export default newsletter
