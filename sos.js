function triggerSOS() {
    document.getElementById('sos-actions').style.display = 'block';
  
    // Voice alert
    let message = new SpeechSynthesisUtterance("Emergency detected. Please remain calm. Help is on the way.");
    speechSynthesis.speak(message);
  
    // Simulated actions
    alert("Family member notified.\nDoctor appointment booked.\nAmbulance called.\nSmart door unlocked.");
  }
  