import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import GoToTop from "./GoToTop";

const Layout = ({children, title, description, keywords, author }) => {
  return (
    <div>
      {/* helmet is a react library which help us to perform SEO(search engine optimization) */}/
       {/* here we are preforming SEO */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        {children}
      </main>
      <GoToTop />
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Ashish",
};

export default Layout;


