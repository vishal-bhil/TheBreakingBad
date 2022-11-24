export default class Loader {
  static loader;

  static setLoader = loader => {
    this.loader = loader;
  };

  static showLoader = () => {
    this.loader.showLoader();
  };
  static hideLoader = () => {
    this.loader.hideLoader();
  };
}
