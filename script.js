function monitorBP() {
    const bpValue = Math.floor(Math.random() * 60) + 90; // Random 90–150
    document.getElementById('bp-box').innerText = `Blood Pressure: ${bpValue} mmHg`;
  
    if (bpValue > 130) {
      alert("⚠️ High Blood Pressure!\nAdvice: Reduce salt, drink water, relax.");
    }
  }
  
  function monitorSugar() {
    const sugarValue = Math.floor(Math.random() * 150) + 70; // Random 70–220
    document.getElementById('sugar-box').innerText = `Sugar Level: ${sugarValue} mg/dL`;
  
    if (sugarValue > 180) {
      alert("⚠️ High Sugar Level!\nAdvice: Avoid sweets, eat fiber, walk daily.");
    }
  }
  
  function monitorHeartRate() {
    const heartRate = Math.floor(Math.random() * 60) + 70; // Random 70–130
    document.getElementById('heart-box').innerText = `Heart Rate: ${heartRate} bpm`;
  
    if (heartRate > 100) {
      alert("⚠️ High Heart Rate!\nAdvice: Do breathing exercises, avoid caffeine.");
    }
  }
  
