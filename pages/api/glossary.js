export default async (req, res) => {
  const results = await fetch(
    `https://developers-urbit-966qqrq67-urbit.vercel.app/api/glossary?q=${encodeURIComponent(
      req.query.q
    )}`
  ).then((res) => res.json());
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(results));
};
