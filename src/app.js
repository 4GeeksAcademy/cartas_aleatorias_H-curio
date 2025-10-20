import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const suits = ['♦', '♥', '♠', '♣'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
 
  //2. Generar indice aleatorios
  const suitIndex = Math.floor(Math.random() * 8);
  const valueIndex = Math.floor(Math.random() * 13);
  

  //3. Obtener  símbolo y valor
  const suitSymbol = suits[suitIndex];
  const cardValue = values[valueIndex];

  //4. crear el div de la carta
  const cardDiv = this.document.createElement('div');
  cardDiv.className = 'card';

  //5 agregar la clase del palo (por ejemplo, 'heart)
  if (suitIndex === 1 || suitIndex === 0){ //corazon o diamantes
    cardDiv.classList.add('heart'); // Puedes usar 'diamond' también, pero 'heart' es rojo
  } else { // Picas o Tréboles 
    cardDiv.classList.add('spade'); // Picas es negro 
  } 

  // 6. Crear los spans
    const topLeftSpan = document.createElement('span');
    topLeftSpan.className = 'top-left';
    topLeftSpan.textContent = suitSymbol;

    const centerSpan = document.createElement('span');
    centerSpan.className = 'center';
    centerSpan.textContent = cardValue;

    const bottomRightSpan = document.createElement('span');
    bottomRightSpan.className = 'bottom-right';
    bottomRightSpan.textContent = suitSymbol;

    // 7. Añadir los spans al div
    cardDiv.appendChild(topLeftSpan);
    cardDiv.appendChild(centerSpan);
    cardDiv.appendChild(bottomRightSpan);

    // 8. Añadir la carta al cuerpo del documento
    document.body.appendChild(cardDiv);
};
