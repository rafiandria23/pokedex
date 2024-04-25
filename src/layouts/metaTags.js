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
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" sizes="180x180" href="/pokeball.png" />
      <link rel="shortcut icon" href="/pokeball.svg" />
      <meta
        name="description"
        content="Pokedex by Fajrin is pokemon deck web that u can catch your pokemon and collect them, also you can get details about other pokemons."
      />
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=DM+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <script
        src="https://kit.fontawesome.com/0f0612ffeb.js"
        crossorigin="anonymous"
      ></script>
      <link rel="canonical" href={currentURL} />
      <link rel="amphtml" href={`${currentURL}?amp=1`} />
    </Head>
  );
}
