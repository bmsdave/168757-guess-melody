import getElementFromTemplate from './template-utils';
import showWindow from './template-render';
import mainWelcome from './main-welcome';

const mainResultSuccess = getElementFromTemplate(`  <!-- Результат игры -->
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
 
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`);

/**
 * Кнопка «Сыграть еще раз» на последнем экране (экран результатов или экран поражения)
 * должна открывать первый экран.
 */
mainResultSuccess.querySelector(`.main-replay`).addEventListener(`click`, () => showWindow(mainWelcome));

export default mainResultSuccess;
