export default function Meta(post, disableImage, large = false) {
  const author = post?.extra?.author || "Urbit";
  const title = post?.title ? `${post.title} - ` : "";
  const description =
    post?.description || "A series of guides and reference material for assisting you in the usage and operations of your urbit.";
  const image =
    post?.extra?.image || "https://storage.googleapis.com/media.urbit.org/site/opengraph/sig-white.png";
  return (
    <>
      <link rel="icon" type="image/png" href="/images/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/site.webmanifest" />

      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter-card"
      />

      <meta
          name="twitter:card"
          content={large ? "summary_large_image" : "summary"}
          key="twitter-card"
      />
      <meta name="twitter:site" content="@urbit" key="twitter-site" />
      <meta name="twitter:creator" content="@urbit" key="twitter-creator" />
      <meta
          name="og:title"
          content={`${title}roadmap.urbit.org`}
          key="title"
      />
      <meta name="og:description" content={description} key="description" />
      <meta name="description" content={description} />
      <meta name="author" content={author} key="author" />
      {!disableImage && (
          <meta name="twitter:image" content={image} key="image" />
      )}


    </>
  );
}
