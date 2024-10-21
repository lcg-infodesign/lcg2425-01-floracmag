function setup() {
  createCanvas(windowWidth, windowHeight);
  angle = random(TWO_PI); // Gera um ângulo randômico
  noLoop();
}

function draw() {
  background("#132b95");

  noStroke();
  fill("#c24435");

let columns = windowWidth / (100 + 10);
let rows = windowHeight / (100 + 10);

// 1 grande
for (let i = 0.1; i < columns; i++) {
  for (let r = 0.1; r < rows; r++){
    rect(i * 220, r * 220, 100, 100);
  }
}

// 2 grande
for (let i = 0.61; i < columns; i++) {
  for (let r = 0.61; r < rows; r++){
    rect(i * 220, r * 220, 100, 100);
  }
}

//1 pequeno
for (let i = 0.63; i < columns; i++) {
  for (let r = 0.125; r < rows; r++) {
      // Gera um ângulo randômico entre 0 e 5 graus
      let angle = random(-5,5) * (PI / 180); // Converte para radianos
      // Calcula a posição central do retângulo
      let x = i * 220 + 45; // 90/2 = 45
      let y = r * 220 + 45; // 90/2 = 45

      // Translada para o centro do retângulo
      push(); // Salva o estado atual do contexto
      translate(x, y);
      rotate(angle); // Rotaciona pelo ângulo randômico
      rectMode(CENTER); // Define o modo de desenho para o centro
      rect(0, 0, 85, 85); // Desenha o retângulo
      pop(); // Restaura o estado anterior do contexto
  }
}

//2 pequeno
for (let i = 0.125; i < columns; i++) {
  for (let r = 0.63; r < rows; r++) {
      // Gera um ângulo randômico entre 0 e 5 graus
      let angle = random(-5,5) * (PI / 180); // Converte para radianos
      // Calcula a posição central do retângulo
      let x = i * 220 + 45; // 90/2 = 45
      let y = r * 220 + 45; // 90/2 = 45

      // Translada para o centro do retângulo
      push(); // Salva o estado atual do contexto
      translate(x, y);
      rotate(angle); // Rotaciona pelo ângulo randômico
      rectMode(CENTER); // Define o modo de desenho para o centro
      rect(0, 0, 85, 85); // Desenha o retângulo
      pop(); // Restaura o estado anterior do contexto
  }
}

}
