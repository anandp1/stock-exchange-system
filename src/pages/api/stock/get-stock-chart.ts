import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const symbol = req.query.symbol as string;

  try {
    const response = await axios.get(
      `https://cloud.iexapis.com/stable/stock/${symbol}/chart/3m?token=${process.env.API_TOKEN}`
    );

    const formattedChartData = response.data.map((data: any) => {
      return [new Date(`${data.date} 2:00:00.00 PM`).getTime(), data.close];
    });

    return res.status(200).json(formattedChartData);
  } catch {
    return res.status(500).json({ message: `Internal server error` });
  }
};

export default handler;
