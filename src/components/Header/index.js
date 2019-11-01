import React from 'react';
// import { Layout } from '../Layout';
import { Hero } from '../Hero';
import { Navigator } from '../Navigator';

export const Header = props => {
  return(
    <>
      <Hero
        currentScrollHeight={props.currentScrollHeight}
        subtitle={props.subtitle}
      >
        {props.children}
      </Hero>
      <Navigator
        currentScrollHeight={props.currentScrollHeight}
        brand={props.brand}
      />
    </>
  )
}