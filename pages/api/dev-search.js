export default async (req, res) => {
  const results = await fetch(
    `https://developers-urbit-bls6d8h8w-urbit.vercel.app/api/search?q=${encodeURIComponent(req.query.q)}`
  ).then((res) => res.json());
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(results));
};
