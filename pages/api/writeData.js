// pages/api/writeData.js
import fs from 'fs/promises';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const { data } = req.body || {};

    if (!data) {
      return res.status(400).json({ error: 'Data is required' });
    }
      console.log(data);
    // Write data to a JSON file
    await fs.writeFile('public/data.json', JSON.stringify(data, null, 2));

    res.status(200).json("data wasssssssss written",{ success: true });
  } catch (error) {
    console.error('Error writing data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
