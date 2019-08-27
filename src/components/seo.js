import React from "react"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/user-sitemetadata"

const SEO = ({ title, description, lang = `en` }) => {
  const site = useSiteMetadata()
  const seo = {
    title: title || site.title,
    description: description || site.description,
  }
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={seo.title}
      titleTemplate={`%s | ${site.title}`}
    >
      <meta name="description" content={seo.description} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </Helmet>
  )
}

export default SEO
