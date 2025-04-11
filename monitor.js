document.getElementById("bpInput").addEventListener("input", function () {
    const bp = this.value;
    document.getElementById("bpDisplay").innerText = bp;
  
    // Check if BP is in normal range
    const bpParts = bp.split("/");
    if (bpParts.length === 2) {
      const systolic = parseInt(bpParts[0]);
      const diastolic = parseInt(bpParts[1]);
  
      if (!isNaN(systolic) && !isNaN(diastolic)) {
        if (systolic < 130 && diastolic < 80) {
          speak("Your blood pressure is normal. Keep it up!");
        } else if (systolic >= 130 && systolic <= 180) {
          speak("Your blood pressure is elevated. Please monitor closely.");
        } else if (systolic > 180) {
          speak("Warning! Your blood pressure is very high. Take immediate action.");
          speechSynthesis.speak(new SpeechSynthesisUtterance("Testing voice. Can you hear me?"));

        }
      }
    }
  });
  
  document.getElementById("bpmInput").addEventListener("input", function () {
    const bpm = this.value;
    document.getElementById("bpmDisplay").innerText = bpm + " BPM";
  });
  
  // Voice function
  function speak(text) {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
  }
  