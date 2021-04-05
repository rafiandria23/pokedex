import Head from "next/head";

export default function MetaTags({ currentURL }) {
  return (
    <Head>
      <title>Pokedex By Fajrin</title>
      <meta property="og:title" content="Pokedex by Fajrin" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentURL} />
      <meta property="og:image" content="/pokeball.svg" />
      <meta
        property="og:description"
        content="Pokedex by Fajrin is pokemon deck web that u can catch your pokemon and collect them, also you can get details about other pokemons."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta name="robots" content="index, follow" />
      <link rel="alternate" href="/" hrefLang="id-id" />
      <link rel="alternate" href="/" hrefLang="en-id" />
      <link rel="alternate" href="/" hrefLang="en-us" />
      <link rel="alternate" href="/" hrefLang="en-gb" />
      <link rel="shortcut icon" href="/pokeball.svg" />
      <meta
        name="description"
        content="Pokedex by Fajrin is pokemon deck web that u can catch your pokemon and collect them, also you can get details about other pokemons."
      />
      <link rel="stylesheet" href="https://use.typekit.net/iou7dkz.css"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=DM+Sans:wght@400;700&family=Hammersmith+One&family=Kulim+Park:wght@400;600;700&family=Noto+Sans+SC:wght@700&family=Roboto:wght@700&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="canonical" href={currentURL} />
    </Head>
  );
}
