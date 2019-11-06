import React from 'react';
import { Hero, Navigator } from '../';

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