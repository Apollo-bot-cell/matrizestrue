//CRIA O PRIMEIRO ARRAY DA MATRIZ
var matriz = [];
var matriz1 = [];


//ESTIPULA O NÚMERO DE LINHAS E COLUNAS NAS MATRIZES
alert("Você informará o número de linhas e colunas de duas matrizes, depois o site gera e multiplica elas!");

//CERTIFICA ALGUMAS REGRAS DAS MATRIZES
var valor;
do {
    nrlinhas = parseInt(prompt("Digite o número de linhas da primeira matriz"));
    nrcol = parseInt(prompt("Digite o número de colunas da primeira matriz"));
    nrlinhas1 = parseInt(prompt("Digite o número de linhas da segunda matriz"));
    nrcol1 = parseInt(prompt("Digite o número de colunas da segunda matriz"));
    valor = 1;
 if (nrcol != nrlinhas1) {
    alert("Para que o produto exista, o número de colunas da primeira matriz tem que ser igual ao número de linhas da segunda matriz. Recarregue a página e informe uma matriz condizente.")
    valor = 0;
}
}while(valor == 0);

//primeira matriz
for (i = 0; i < nrlinhas ; i++) {
    matriz.push([]);
    for (x = 0; x < nrcol; x++) {
        matriz[i][x] = parseFloat(Math.floor(Math.random()*10));
    }
}

 //segunda matriz
for (i = 0; i < nrlinhas1 ; i++) {
    matriz1.push([]);
    for (x = 0; x < nrcol1; x++) {
        matriz1[i][x] = parseFloat(Math.floor(Math.random()*10));
    }
}

//tabela de apresentacao da matriz 1
document.write("<div id = 'div1'>");
document.write( "<table class = 'comBordaComplexa' border=1>");
for (i = 0; i < matriz.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz[i].length; x++) {
     linha = linha + "<td class = 'comBordaComplexa td'><p>" + matriz[i][x] + "</td>";
    }
     linha=linha+"</tr>"
     document.write(linha);
}
document.write( "</table>");
document.write("*");

 //tabela de apresentação da matriz 2
document.write( "<table class = 'comBordaComplexa' border=1>");
for (i = 0; i < matriz1.length; i++) {
    linha = '<tr>';
    for (x = 0; x < matriz1[i].length; x++) {
     linha = linha + "<td class = 'comBordaComplexa td'><p>" + matriz1[i][x] + "</td>";
    }
     linha=linha+"</tr>"
     document.write(linha);
}
document.write( "</table>");
document.write("</div>");

//multiplicação 
    m = [];
    for (i = 0; i < nrlinhas; i++) {
      m.push([]);
      for (var x = 0; x < nrcol1; x++) {
        m[i][x] = 0;             
        for (var y = 0; y < nrlinhas1; y++) {
          m[i][x] += matriz[i][y] * matriz1[y][x];
        }
      }             
    }

//exibição  
document.write( "<p class = 'resultante'> Matriz Resultante:");
document.write( "<table class = 'comBordaComplexa' border=1>");
for (i = 0; i < m.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < m[i].length; x++) {
     linha = linha + "<td class = 'comBordaComplexa td'><p>" + m[i][x] + "</td>";
    }
     linha=linha+"</tr>"
     document.write(linha);
}
document.write( "</table>");
