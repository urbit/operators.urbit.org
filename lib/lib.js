import fs from "fs";
import { join } from "path";

const directories = (dir) => {
  switch (dir) {
    case "guides":
      return join(process.cwd(), "content/guides");
    case "/":
      return join(process.cwd(), "content");
    default:
      return join(process.cwd(), `content/${dir}`);
  }
};

export function getPostSlugs(key) {
  const dir = fs.readdirSync(directories(key), { withFileTypes: true });
  return dir
    .filter((f) => f.isFile() && f.name !== "_index.md")
    .map((f) => f.name);
}

function getAllPaths(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllPaths(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

export function getDocsPaths() {
  return getAllPaths(directories("docs"), []);
}

export function getNextPost(slug, fields = [], key, sort = "date") {
  let resultPost = null;

  getAllPosts(fields, key, sort).forEach((post, index, array) => {
    if (post.slug === slug) {
      if (typeof array[index - 1] !== "undefined") {
        resultPost = array[index - 1];
      }
    }
  });
  return resultPost;
}
