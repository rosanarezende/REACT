import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Introduction from '../pages/Introduction/Introduction';
import Children from '../pages/Children/Children';
import Props from '../pages/Props/Props';
import PropTypes from '../pages/PropTypes/PropTypes';
import PropsAndChildren from '../pages/PropsAndChildren/PropsAndChildren';
import DefaultProps from '../pages/DefaultProps/DefaultProps';
import ConditionalRendering from '../pages/ConditionalRendering/ConditionalRendering';

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/children" element={<Children />} />
        <Route path="/props" element={<Props />} />
        <Route path="/props-children" element={<PropsAndChildren />} />
        <Route path="/proptypes" element={<PropTypes />} />
        <Route path="/default-props" element={<DefaultProps />} />
        <Route path="/conditional-rendering" element={<ConditionalRendering />} />
      </ReactRoutes>
    </BrowserRouter>
  )
}
