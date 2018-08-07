import * as React from 'react'
import MobileContainer from './Mobile';
import DesktopContainer from "./Container";

import Sections from './Sections/index'

const ResponsiveContainer = ({ children }: { children: any }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

export default () => (
  <ResponsiveContainer>
    <div id="about">
      <Sections />
    </div>
  </ResponsiveContainer >
)
