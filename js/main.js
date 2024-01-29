import { headerToggle, menuToggle } from './header.js';
import { fetchData } from './fetchData.js';

/* Por uma questão de organização decidi criar o main e importar as funções para aqui, para ser mais fácil leitura. */
document.addEventListener('DOMContentLoaded', function () {
  headerToggle();
  menuToggle();
  fetchData();
});
