export default function Meta(post) {
  const author = post?.extra?.author || "Urbit";
  const title = post?.title ? `${post.title} - ` : "";
  const description =
    post?.description || "A series of guides and reference material for assisting you in the usage and operations of your urbit.";
  const image =
    post?.extra?.image || "https://storage.googleapis.com/media.urbit.org/site/opengraph/operators.png";
  return (
    <>
      <link rel="icon" type="image/png" href="/images/favicon.ico" />
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter-card"
      />
      <meta name="twitter:site" content="@urbit" key="twitter-site" />
      <meta name="twitter:creator" content="@urbit" key="twitter-creator" />
      <meta name="og:title" content={`${title}urbit.org`} key="title" />
      <meta name="og:description" content={description} key="description" />
      <meta name="description" content={description} />
      <meta name="author" content={author} key="author" />
      <meta name="twitter:image" content={image} key="image" />
      <link
        rel="alternative"
        type="application/rss+xml"
        title="RSS"
        href="/rss.xml"
      />
    </>
  );
}
