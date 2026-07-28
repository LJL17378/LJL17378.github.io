"use client";

import Script from "next/script";

const BILI_UID = "7900967";

export function BiliInfoCard() {
  return (
    <section className="bili-widget" aria-label="哔哩哔哩个人资料">
      <Script
        id="bili-info-card-web-component"
        src="https://bili-info-card.vercel.app/bilibili-user-card.js"
        type="module"
        strategy="afterInteractive"
      />
      <bilibili-user-card uid={BILI_UID} link-target="_blank" />
    </section>
  );
}
