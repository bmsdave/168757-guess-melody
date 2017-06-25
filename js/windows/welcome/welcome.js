import changeView from '../../template-render';
import WelcomeView from './welcome-view';
import {initialState} from '../../data/game-data';
import levelArtist from '../level-artist/level-artist';


export default () => {
  const welcome = new WelcomeView();

  welcome.onStart = () => {
    changeView(levelArtist(initialState).element);
  };

  return welcome;
};
