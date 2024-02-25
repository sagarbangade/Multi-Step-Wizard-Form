function nextStep(step) {
    var currentStep = document.querySelector('.wizard-step.active');
    var input = currentStep.querySelector('input[required], textarea[required]');
    
    if (input && !input.value) {
      alert('Please fill out this field before proceeding.');
      return;
    }
    
    currentStep.classList.remove('active');
    document.getElementById(`step${step}`).classList.add('active');
  }
  
  function prevStep(step) {
    document.querySelector('.wizard-step.active').classList.remove('active');
    document.getElementById(`step${step}`).classList.add('active');
  }
  