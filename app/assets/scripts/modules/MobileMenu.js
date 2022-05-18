class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector('.site-header__menu-icon');
  }

  events() {
    this.menuIcon.addEventListener('click', () => this.toggleTheMenu());
  }

  toggleTheMenu() {
    console.log('The top right icon was clicked.');
  }
}

export default MobileMenu;
