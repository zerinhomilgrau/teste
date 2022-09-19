function calcNota() {
  // Primeira Nota
  var notaUm = document.getElementById("nt1").value;
  var notaUmParse = parseFloat(notaUm);
  // Segunda Nota
  var notaDois = document.getElementById("nt2").value;
  var notaDoisParse = parseFloat(notaDois);
  // Terceira Nota
  var notaTres = document.getElementById("nt3").value;
  var notaTresParse = parseFloat(notaTres);
  // Quarta Nota
  var notaQuatro = document.getElementById("nt4").value;
  var notaQuatroParse = parseFloat(notaQuatro);

  // Média
  var calcMedia =
    (notaUmParse + notaDoisParse + notaTresParse + notaQuatroParse) / 4;

  // Nota final
  var notaFinal = calcMedia.toFixed(1);
  var notaFinalParse = parseFloat(notaFinal);

  // Mensagem que aparece quando a média for maior que 7 //
  if (notaFinalParse >= 7);
  {
    document.getElementById(
      "result"
    ).innerText = `Ihaaa! Agora já pode respirar tranquilo, você foi aprovado com média ${notaFinalParse}!!`;
    document.getElementById("result").style.color = "#008000";

    // Mensagem que aparece quando a média está entre 5 e 7 //
  }
  if (notaFinalParse >= 5 && notaFinalParse < 7) {
    document.getElementById(
      "result"
    ).innerText = `D'oh! Infelizmente você ficou abaixo da média dessa vez, sua nota foi ${notaFinalParse}, mas você ainda pode melhorar isso!`;

    // Mensagem que aparece quando a média está abaixo de  //
  }
  if (notaFinalParse <= 5.9) {
    document.getElementById(
      "result"
    ).innerText = `Infelizmente dessa vez você reprovou com média ${notaFinalParse}!`;
    document.getElementById("result").style.color = "#FF0000";
  }
}
