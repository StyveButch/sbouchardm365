function calculateScore() {
  let total = 0;
  let answered = 0;
  const answers = {};

  for (let i = 0; i < 12; i++) {
    const sel = document.querySelector(`input[name="q${i}"]:checked`);
    answers[`q${i}`] = sel ? sel.value : null;
    if (sel) {
      answered++;
      total += Number(sel.value);
    }
  }

  if (answered === 0) {
    alert("Veuillez répondre à au moins une question.");
    return;
  }

  let interpretation = "";
  if (total >= 18) {
    interpretation = "Posture structurée : gouvernance et contrôles en place.";
  } else if (total >= 10) {
    interpretation = "Posture partielle : des bases existent, mais des risques subsistent.";
  } else {
    interpretation = "Gouvernance à structurer : exposition significative aux risques.";
  }

  document.getElementById("result").innerHTML = `
    <h2>Score : ${total} / 24</h2>
    <p>${interpretation}</p>
    <p><strong>Prochaine étape :</strong> analyse détaillée et priorisation décisionnelle.</p>
  `;
  document.getElementById("result").classList.remove("hidden");

  const body =
    "Bonjour,%0D%0A%0D%0A" +
    "J’ai complété le diagnostic Microsoft 365.%0D%0A" +
    "Score obtenu : " + total + "/24%0D%0A%0D%0A" +
    "Pouvez-vous me proposer une analyse personnalisée et les prochaines étapes ?%0D%0A%0D%0A" +
    "Merci.";

  document.getElementById("cta").classList.remove("hidden");
  
  document.getElementById("leadScore").value = total;
	document.getElementById("leadAnswers").value = JSON.stringify(answers);

	// afficher le formulaire Forminit
	document.getElementById("lead").classList.remove("hidden");
}