import { getResource } from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  btn.addEventListener('click', function() {
    getResource('assets/db.json')
      .then(res => createCards(res.styles))
      .catch(error => console.log(error));

    this.remove();
  });

  function createCards(response) {
    const cardFragment = document.createDocumentFragment();

    response.forEach(({ src, title, link }) => {
      let card = document.createElement('div');
      card.className = 'animated fadeInUp col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1';

      card.innerHTML = `
        <div class="styles-block">
          <img src=${src} alt="style">
          <h4>${title}</h4>
          <a href=${link}>Подробнее</a>
        </div>
      `;

      cardFragment.appendChild(card);
    });

    document.querySelector(wrapper).appendChild(cardFragment);
  }
};

export default showMoreStyles;
