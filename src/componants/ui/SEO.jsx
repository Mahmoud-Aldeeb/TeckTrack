// src/components/ui/SEO.jsx
export default function SEO({ title, description, url, image = "https://teck-track.vercel.app/og-default.jpg" }) {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            {/* Structured Data (اختياري بس قوي) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": title,
                        "description": description,
                        "url": url
                    })
                }}
            />
        </>
    );
}