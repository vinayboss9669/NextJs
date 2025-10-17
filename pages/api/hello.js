// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  //step1: Fetch the blog post data based on the slug
  res.status(200).json({ name: "John Doe" });
}
