import React from 'react';
import { Helmet } from 'react-helmet';
const App = () => (
  <div>
    <Helmet>
      <title>Here's the Title!</title>
      <meta
        name="description"
        content="This is what you want to show as the page content in the Google SERP Listing"
      />
    </Helmet>
  </div>
);
