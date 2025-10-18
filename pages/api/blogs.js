// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    // Get the list of files in the blogdata directory
    const dirPath = path.join(process.cwd(), 'blogdata');
    const files = await fs.promises.readdir(dirPath);
    
    // Read the content of each blog file
    const allBlogs = [];
    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(dirPath, file);
        const fileContent = await fs.promises.readFile(filePath, 'utf-8');
        allBlogs.push(JSON.parse(fileContent));
      }
    }
    
    res.status(200).json(allBlogs);
  } catch (error) {
    console.error("Error reading blog files:", error);
    res.status(500).json({ error: "Failed to fetch blog data" });
  }
}