  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  //Declare and init speech recognition
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'en-US';
  
  //Declare element handle variables
  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);

  //Event listener
  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

      // const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
      p.textContent = transcript;

      if (e.results[0].isFinal) {
        // p = document.createElement('p');
        // words.appendChild(p);
        // console.log(typeof transcript)
        document.body.style.backgroundColor = transcript;
      }
      // if()
      // document.body.style.backgroundColor = "red";
  });

  // recognition.addEventListener('end', recognition.start);

  recognition.start();
