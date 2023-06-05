import { render } from '../framework/render';
import NoPointView from '../view/no-point-view';

export default class NoPointViewPresenter {
  #noPointViewComponent = null;
  #parentContainer = null;

  constructor(parentContainer) {
    this.#parentContainer = parentContainer;
  }

  init() {
    this.#noPointViewComponent = new NoPointView();
    render(this.#noPointViewComponent, this.#parentContainer);
  }
}
