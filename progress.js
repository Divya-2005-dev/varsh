function compareReports() {
    const beginning = {
      bp: document.getElementById("beginning-bp").value.trim(),
      sugar: parseInt(document.getElementById("beginning-sugar").value),
      heart: parseInt(document.getElementById("beginning-heart").value)
    };
  
    const current = {
      bp: document.getElementById("current-bp").value.trim(),
      sugar: parseInt(document.getElementById("current-sugar").value),
      heart: parseInt(document.getElementById("current-heart").value)
    };
  
    const table = document.querySelector("#comparison-table tbody");
    table.innerHTML = "";
  
    // Blood Pressure
    let bpStatus = beginning.bp !== current.bp ? "Improved" : "Same";
    let bpClass = beginning.bp !== current.bp ? "status-good" : "status-same";
    table.innerHTML += `<tr>
      <td>Blood Pressure</td>
      <td>${beginning.bp}</td>
      <td>${current.bp}</td>
      <td class="${bpClass}">${bpStatus}</td>
    </tr>`;
  
    // Sugar Level
    let sugarStatus = current.sugar < beginning.sugar ? "Improved" : (current.sugar > beginning.sugar ? "Worsened" : "Same");
    let sugarClass = sugarStatus === "Improved" ? "status-good" : (sugarStatus === "Worsened" ? "status-bad" : "status-same");
    table.innerHTML += `<tr>
      <td>Sugar Level</td>
      <td>${beginning.sugar} mg/dL</td>
      <td>${current.sugar} mg/dL</td>
      <td class="${sugarClass}">${sugarStatus}</td>
    </tr>`;
  
    // Heart Rate
    let heartStatus = current.heart < beginning.heart ? "Improved" : (current.heart > beginning.heart ? "Worsened" : "Same");
    let heartClass = heartStatus === "Improved" ? "status-good" : (heartStatus === "Worsened" ? "status-bad" : "status-same");
    table.innerHTML += `<tr>
      <td>Heart Rate</td>
      <td>${beginning.heart} bpm</td>
      <td>${current.heart} bpm</td>
      <td class="${heartClass}">${heartStatus}</td>
    </tr>`;
  }
  