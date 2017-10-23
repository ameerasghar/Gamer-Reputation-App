import ReactOnRails from 'react-on-rails';

import GamerProfile from '../bundles/GamerProfile/components/GamerProfile';
import GamerReviews from '../bundles/GamerProfile/components/GamerReviews';
import NewReview from '../bundles/GamerProfile/components/NewReview';
import FindPlayer from '../bundles/GamerProfile/components/FindPlayer';
import SinglePageApp from '../bundles/SinglePageApp/components/SinglePageApp';
import SearchResult from '../bundles/GamerProfile/components/SearchResult';
import NavBar from '../bundles/GamerProfile/components/NavBar';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  GamerProfile,
  GamerReviews,
  NewReview,
  FindPlayer,
  SinglePageApp,
  SearchResult,
  NavBar,
});
