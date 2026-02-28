"use client"

import Script from "next/script"

export function MailerLiteEmbed() {
  return (
    <>
      <Script
        src="https://assets.mailerlite.com/js/universal.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          if (typeof ml !== "undefined") ml("account", "1828078")
        }}
      />
      <div className="ml-embedded" data-form="j8fmQQ" />
    </>
  )
}
