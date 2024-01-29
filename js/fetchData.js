const possibilities = document.getElementById('possibilitiesId');
const features = document.getElementById('featuresId');

/*  Para a página ficar mais pequena decidi criar estas funções que replicavam a informação
assim sendo não exige tanto do user.
Também é mais fácil realizar alterações.
*/

export const fetchData = async (url, createCardFunction, containerElement) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();

    data.forEach((item) => {
      const cardHtml = createCardFunction(item);
      containerElement.innerHTML += cardHtml;
    });

    return data;
  } catch (err) {
    console.error('Error:', err.message);
  }
};

// Cria o cartão com as possibilidades
const createPossibilitiesCard = (data) => `
  <div class="col-3">
    <div class="card-possibilities">
      <div class="card-possibilities-text">
        <div class="card-possibilities-icon">
          <span class="material-icons-round notranslate">${data.icon}</span>
        </div>
        <h3 class="card-possibilities-title">${data.title}</h3>
        <div class="card-possibilities-description">${data.description}</div>
      </div>
      <div class="card-possibilities-image no-gap">
        <img
          src="${data.imageSrc}"
          srcset="${data.imgSrcset}"
          alt=""
          class="object-fit"
        />
      </div>
    </div>
  </div>`;

// Cria o cartão com as features.
const createFeatureCard = (feature) => `
  <div class="col-12 col-sm-6 mb-3">
    <div class="feature-card">
      <div class="d-flex">
        <div>
          <h3 class="feature-card-title">${feature.title}</h3>
          <p class="feature-card-description">${feature.text}</p>
        </div>
        <div class="icon">
          <span class="material-icons-outlined feature-card-icon">${feature.icon}</span>
        </div>
      </div>
      <div class="feature-img">
        <img
          width="100%"
          srcset="${feature.imgSrcset}"
          sizes="${feature.imgSizes}"
          src="${feature.imgSrc}"
          alt="${feature.title}"
        />
      </div>
    </div>
  </div>`;

fetchData('/db/possibilities.json', createPossibilitiesCard, possibilities);
fetchData('/db/features.json', createFeatureCard, features);
