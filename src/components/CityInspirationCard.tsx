"use client";

import Script from "next/script";

export function CityInspirationCard() {
  return (
    <section className="city-widget" aria-label="北京城市灵感">
      <Script
        id="info-card-craft-web-component"
        src="https://info-card-craft.vercel.app/embed.js"
        type="module"
        strategy="afterInteractive"
      />
      <info-card-craft card-id="demo-city-inspiration" input-city="北京" />
    </section>
  );
}
