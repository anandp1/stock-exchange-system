import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export interface APIStock {
  symbol: string;
  exchange: string;
  exchangeName: string;
  name: string;
  date: string;
  region: string;
  currency: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const response = await axios.get(
      `https://cloud.iexapis.com/stable/ref-data/symbols?token=${process.env.API_TOKEN}`
    );

    return res.status(200).json(response.data);
  } catch {
    return res.status(500).json({ message: `Internal server error` });
  }
};

export default handler;
