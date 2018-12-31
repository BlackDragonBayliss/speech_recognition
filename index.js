
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  //Declare and init speech recognition
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'en-US';
  
  //Setup element tag handles
  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);

  //Event listener
  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

      const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
      p.textContent = poopScript;

      if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }
  });

  recognition.addEventListener('end', recognition.start);

  recognition.start();
