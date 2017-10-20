import ReactOnRails from 'react-on-rails';

import GamerProfile from '../bundles/GamerProfile/components/GamerProfile';
import GamerReviews from '../bundles/GamerProfile/components/GamerReviews';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  GamerProfile,
  GamerReviews,
});