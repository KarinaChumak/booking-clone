const featureMap = {
  'Pets allowed': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M16.01 15a4.5 4.5 0 1 0-9 0l.75-.75a3.75 3.75 0 1 0 0 7.5 4.96 4.96 0 0 0 2.245-.59 3.277 3.277 0 0 1 3.018.005c.677.365 1.44.567 2.22.585a3.75 3.75 0 1 0 .018-7.5l.749.75zm-1.5 0c0 .414.336.75.75.75a2.25 2.25 0 0 1 0 4.5 3.435 3.435 0 0 1-1.536-.41 4.786 4.786 0 0 0-4.42-.005 3.457 3.457 0 0 1-1.562.415A2.247 2.247 0 0 1 5.51 18a2.25 2.25 0 0 1 2.25-2.25.75.75 0 0 0 .75-.75 3 3 0 1 1 6 0zm-9.75-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3.75 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"></path>
    </svg>
  ),
  'Free Wi-Fi': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06zm3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06zm2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z"></path>
    </svg>
  ),
  'Air conditioning': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M11.25.75v7.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm4.031.914l-3.75 3h.938l-3.75-3a.75.75 0 1 0-.938 1.172l3.75 3a.75.75 0 0 0 .938 0l3.75-3a.75.75 0 1 0-.938-1.172zM1.883 7.024l6.495 3.75a.75.75 0 0 0 .75-1.299l-6.495-3.75a.75.75 0 1 0-.75 1.3zM4.69 3.99l.723 4.748.468-.812-4.473 1.748a.75.75 0 0 0 .546 1.398l4.473-1.748a.75.75 0 0 0 .468-.812l-.723-4.748a.75.75 0 1 0-1.482.226zM2.632 18.274l6.495-3.75a.75.75 0 1 0-.75-1.298l-6.495 3.75a.75.75 0 1 0 .75 1.299zm-1.224-3.948l4.473 1.748-.468-.812-.723 4.748a.75.75 0 0 0 1.482.226l.723-4.748a.75.75 0 0 0-.468-.812l-4.473-1.748a.75.75 0 0 0-.546 1.398zM12.75 23.25v-7.5a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm-4.031-.914l3.75-3h-.938l3.75 3a.75.75 0 0 0 .937-1.172l-3.75-3a.75.75 0 0 0-.937 0l-3.75 3a.75.75 0 0 0 .938 1.172zm13.399-5.36l-6.495-3.75a.75.75 0 0 0-.75 1.298l6.495 3.75a.75.75 0 0 0 .75-1.299zm-2.807 3.034l-.724-4.748-.468.812 4.473-1.748a.75.75 0 0 0-.546-1.398l-4.473 1.748a.75.75 0 0 0-.468.812l.723 4.748a.75.75 0 0 0 1.483-.226zm2.057-14.285l-6.495 3.75a.75.75 0 0 0 .75 1.3l6.495-3.75a.75.75 0 0 0-.75-1.3zm1.224 3.95l-4.473-1.749.468.812.724-4.748a.75.75 0 0 0-1.483-.226l-.723 4.748a.75.75 0 0 0 .468.812l4.473 1.748a.75.75 0 0 0 .546-1.398zM11.625 7.6L8.377 9.475a.75.75 0 0 0-.375.65v3.75a.75.75 0 0 0 .375.65l3.248 1.874a.75.75 0 0 0 .75 0l3.248-1.875a.75.75 0 0 0 .375-.649v-3.75a.75.75 0 0 0-.375-.65L12.375 7.6a.75.75 0 0 0-.75 0zm.75 1.3h-.75l3.248 1.874-.375-.649v3.75l.375-.65-3.248 1.876h.75l-3.248-1.876.375.65v-3.75l-.375.65L12.375 8.9z"></path>
    </svg>
  ),
  '24-hour front-desk': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <path d="M127.32 53.67l-8 11.87a2.498 2.498 0 0 1-.21.24 2.285 2.285 0 0 1-.28.34l-.22.19c-.12.112-.247.215-.38.31a.777.777 0 0 1-.2.11c-.158.1-.321.19-.49.27h-.18a3.87 3.87 0 0 1-.58.18h-.19a3.08 3.08 0 0 1-.53.06h-.26a3.608 3.608 0 0 1-.46-.05l-.34-.07-.31-.1-.35-.13-.26-.14-.36-.21-11.81-8a4 4 0 0 1 4.46-6.54l4.89 3.3C106.987 30.316 85.347 12.036 60 12h-.65c-28.719.18-51.854 23.606-51.675 52.325C7.855 93.044 31.281 116.179 60 116h.65a52.22 52.22 0 0 0 44.5-26.18 4.005 4.005 0 0 1 6.94 4A60.26 60.26 0 0 1 60.74 124H60C26.863 123.999.001 97.135.002 63.998.003 30.86 26.867 3.998 60.004 4c28.511.001 53.084 20.065 58.786 48l1.9-2.82a4.002 4.002 0 1 1 6.64 4.47zm-69.74 2.47c-.038-7.677-6.253-13.892-13.93-13.93-10.1 0-12.76 8.08-14.19 12.42l-.18.57a4 4 0 0 0 7.59 2.53l.19-.6c1.55-4.7 2.7-6.92 6.59-6.92a5.94 5.94 0 0 1 5.93 5.93 5 5 0 0 1-1.47 3.56L30.24 77.57a4 4 0 0 0 2.83 6.83h20.51a4 4 0 0 0 0-8H42.72l11.05-11.05a13 13 0 0 0 3.81-9.21zM76.93 80.4v-2.84H63.84a4 4 0 0 1-3.39-6.12l17.09-27.35a4 4 0 0 1 7.39 2.12V80.4a4 4 0 0 1-8 0zm0-10.84v-9.4l-5.87 9.4z"></path>
    </svg>
  ),
  'Key-card access': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
    </svg>
  ),
  'Entire apartment': (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3.004 13.923v8.25c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v6c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-8.25a.75.75 0 0 0-1.5 0v8.25l.75-.75h-6l.75.75v-6a2.25 2.25 0 0 0-2.25-2.25h-1.5a2.25 2.25 0 0 0-2.25 2.25v6l.75-.75h-6l.75.75v-8.25a.75.75 0 0 0-1.5 0zm-1.72-.97l10.19-10.189a.75.75 0 0 1 1.06 0l10.19 10.19a.75.75 0 1 0 1.06-1.061L13.595 1.703a2.25 2.25 0 0 0-3.181 0L.224 11.894a.75.75 0 0 0 1.06 1.06zm15.97-7.28v-1.5l-.75.75h3.75l-.75-.75v5.25a.75.75 0 0 0 1.5 0v-5.25a.75.75 0 0 0-.75-.75h-3.75a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0z"></path>
    </svg>
  ),
  'Private kitchen': (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2.25 2.25h19.5L21 1.5v21l.75-.75H2.25l.75.75v-21l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v21c0 .414.336.75.75.75h19.5a.75.75 0 0 0 .75-.75v-21a.75.75 0 0 0-.75-.75H2.25zm-1.5 1.5h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm0 21h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM18 15v3.539a.211.211 0 0 1-.211.211H6.211A.211.211 0 0 1 6 18.539v-7.078c0-.117.094-.211.211-.211h11.578c.116 0 .211.095.211.211V15zm1.5 0v-3.539a1.71 1.71 0 0 0-1.711-1.711H6.211c-.945 0-1.711.766-1.711 1.711v7.078c0 .945.766 1.711 1.711 1.711h11.578a1.71 1.71 0 0 0 1.711-1.711V15zM9 14.25h6a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5zM5.25 4.875a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm3 0a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm-6 3.375h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5zm11.25-3h5.25a.75.75 0 0 0 0-1.5H13.5a.75.75 0 0 0 0 1.5z"></path>
    </svg>
  ),
  Balcony: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M.768 11.413l1.5 6.75a.75.75 0 0 0 1.464-.326l-1.5-6.75a.75.75 0 0 0-1.464.326zM2.22 23.456l1.5-5.25L3 18.75h3a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 0 1.5 0V19.5A2.25 2.25 0 0 0 6 17.25H3a.75.75 0 0 0-.721.544l-1.5 5.25a.75.75 0 1 0 1.442.412zm19.547-12.369l-1.5 6.75a.75.75 0 1 0 1.464.326l1.5-6.75a.75.75 0 1 0-1.464-.326zm1.453 11.957l-1.5-5.25A.75.75 0 0 0 21 17.25h-3a2.25 2.25 0 0 0-2.25 2.25v3.75a.75.75 0 0 0 1.5 0V19.5a.75.75 0 0 1 .75-.75h3l-.721-.544 1.5 5.25a.75.75 0 1 0 1.442-.412zM11.25 6.75v16.5a.75.75 0 0 0 1.5 0V6.75a.75.75 0 0 0-1.5 0zm-4.5 7.5h10.5a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0 0 1.5zM1.5 6l10.064-4.37c.297-.161.575-.161.803-.033l10.178 4.425L22.5 6H1.5zm0 1.5h21a1.5 1.5 0 0 0 .689-2.832L13.034.255c-.616-.35-1.452-.35-2.136.034L.858 4.646c-.544.28-.856.792-.857 1.352A1.5 1.5 0 0 0 1.499 7.5z"></path>
    </svg>
  ),
  Terrace: (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M.768 11.413l1.5 6.75a.75.75 0 0 0 1.464-.326l-1.5-6.75a.75.75 0 0 0-1.464.326zM2.22 23.456l1.5-5.25L3 18.75h3a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 0 1.5 0V19.5A2.25 2.25 0 0 0 6 17.25H3a.75.75 0 0 0-.721.544l-1.5 5.25a.75.75 0 1 0 1.442.412zm19.547-12.369l-1.5 6.75a.75.75 0 1 0 1.464.326l1.5-6.75a.75.75 0 1 0-1.464-.326zm1.453 11.957l-1.5-5.25A.75.75 0 0 0 21 17.25h-3a2.25 2.25 0 0 0-2.25 2.25v3.75a.75.75 0 0 0 1.5 0V19.5a.75.75 0 0 1 .75-.75h3l-.721-.544 1.5 5.25a.75.75 0 1 0 1.442-.412zM11.25 6.75v16.5a.75.75 0 0 0 1.5 0V6.75a.75.75 0 0 0-1.5 0zm-4.5 7.5h10.5a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0 0 1.5zM1.5 6l10.064-4.37c.297-.161.575-.161.803-.033l10.178 4.425L22.5 6H1.5zm0 1.5h21a1.5 1.5 0 0 0 .689-2.832L13.034.255c-.616-.35-1.452-.35-2.136.034L.858 4.646c-.544.28-.856.792-.857 1.352A1.5 1.5 0 0 0 1.499 7.5z"></path>
    </svg>
  ),
  Dishwasher: (
    <svg
      viewBox="0 0 128 128"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M108 0H20C13.37 0 8 5.37 8 12v104c0 6.63 5.37 12 12 12h88c6.63 0 12-5.37 12-12V12c0-6.63-5.37-12-12-12ZM20 8h88c2.21 0 4 1.79 4 4v20H16V12c0-2.21 1.79-4 4-4Zm88 112H20c-2.21 0-4-1.79-4-3.99V40h96v76c0 1.06-.42 2.08-1.17 2.83S109.06 120 108 120ZM28 24h16c2.21 0 4-1.79 4-4s-1.79-4-4-4H28c-2.21 0-4 1.79-4 4s1.79 4 4 4Zm25.78 34.33H31.56a6.119 6.119 0 0 0-6.23 6v4c0 7.55 5.7 13.88 13.34 15.56v4.44h-.5c-2.21 0-4 1.79-4 4s1.79 4 4 4h8.89c2.21 0 4-1.79 4-4s-1.79-4-4-4h-.39v-4.44C54.3 82.21 60 75.88 60 68.33v-4c-.07-3.37-2.85-6.06-6.22-6Zm-1.78 10c0 4.41-4.19 8-9.33 8s-9.34-3.59-9.34-8v-2H52v2Zm30.67-11c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20Zm0 32c-6.63 0-12-5.37-12-12s5.37-12 12-12 12 5.37 12 12-5.37 12-12 12ZM96 26c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6Zm-24 0c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6Z"></path>
    </svg>
  ),
  'Flat-screen TV': (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M22.5 10.375v6.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25v-13a.25.25 0 0 1 .25-.25h20.5a.25.25 0 0 1 .25.25v6.5zm1.5 0v-6.5a1.75 1.75 0 0 0-1.75-1.75H1.75A1.75 1.75 0 0 0 0 3.875v13c0 .966.784 1.75 1.75 1.75h20.5a1.75 1.75 0 0 0 1.75-1.75v-6.5zm-16.5 12h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5zm3.75-4.5v3.75a.75.75 0 0 0 1.5 0v-3.75a.75.75 0 0 0-1.5 0z"></path>
    </svg>
  ),
};

export default featureMap;