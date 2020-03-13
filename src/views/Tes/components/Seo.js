import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const Seo = props => {
  const { data, facebook } = props;

  const postTitle = data ? (data.edges[0].node || {}).title : "";
  const postDescription = data ? (data.edges[0].node || {}).subTitle : "";
  const postCover = data ? (data.edges[0].node || {}).cover : "";
  const postSlug = data ? (data.edges[0].node || {}).slug : "";

  const title = postTitle !== "" ? `${postTitle} - ${config.shortSiteTitle}` : config.siteTitle;
  const description = postDescription !== "" ? postDescription : config.siteDescription;
  const image = postCover !== "" ? postCover.resolutions.src : config.siteImage;
  const url = config.siteUrl + config.pathPrefix + "/" + postSlug;

  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* OpenGraph tags */}
      <meta name="og:url" content={url} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:type" content="website" />
      <meta name="fb:app_id" content={facebook.appId} />
      {/* Twitter Card tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
      />
    </Helmet>
  );
};

Seo.propTypes = {
  data: PropTypes.object,
  facebook: PropTypes.object.isRequired
};

export default Seo;
