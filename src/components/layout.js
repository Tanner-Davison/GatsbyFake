/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import HeroHeader from "./HeroHeader"
import "./layout.css";
import Footer from "./GlobalComponents/Footer";
import SideQuote from "./SideQuote";
import PullQuote from "./PullQuote";
import SimpleCentered from "./SimpleCentered";
import AutoSlider from './AutoSlider';
import StickyScroll from "./StickyScroll";
import SwissList from "./SwissList";

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
    <HeroHeader/>
    <SideQuote/>
    <StickyScroll/>
    <PullQuote/>
    <SwissList/>
    <SimpleCentered/>
    <AutoSlider/>
   <Footer/>
    </>
  )
}

export default Layout
