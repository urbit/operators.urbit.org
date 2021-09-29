import { index } from "../../cache/data";
import FuzzySearch from "fuzzy-search";

export default (req, res) => {
  const searcher = new FuzzySearch(index, ["title"], { sort: true });
  const results = searcher.search(req.query.q);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};
