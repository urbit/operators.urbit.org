import { index } from "../../cache/data";
import { glossary } from "../../cache/glossary";

export default (req, res) => {
  const results = index.filter(
    (e) =>
      e.title?.toLowerCase().includes(req.query.q.toLowerCase()) ||
      e?.slug.includes(req.query.q.toLowerCase()) ||
      e?.parent.toLowerCase().includes(req.query.q.toLowerCase())
  );

  results.push(
    ...index
      .filter((e) => !results.includes(e))
      .filter((e) => {
        let found = false;
        e.headings.forEach((heading) => {
          if (heading.toLowerCase().includes(req.query.q.toLowerCase())) {
            found = true;
          }
        });
        return found;
      })
      .map((e) => ({ ...e, foundOnPage: true }))
  );

  const entries = glossary.filter((entry) => {
    return (
      entry.name.includes(req.query.q.toLowerCase()) ||
      entry.symbol.includes(req.query.q)
    );
  });

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results, glossary: entries }));
};
