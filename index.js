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
    var transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

      p.textContent = transcript;
      
      var listWords = transcript.split(" ");
      var firstWord = listWords[0];
      var listWordsFirstRemoved = "";
      var listIndex = 0;
      
      listWords.forEach(function(element){
        if(listIndex != 0){
          listWordsFirstRemoved += " " +element;
        }
        listIndex++
      });
      // first index leading space removed
      listWordsFirstRemoved = listWordsFirstRemoved.substr(1);
      
      
      console.log(firstWord);
      if(firstWord == "background"){
        document.body.style.backgroundColor = listWordsFirstRemoved;
        transcript = [];
      }
      if(firstWord == "console"){
        console.log(listWordsFirstRemoved);
        transcript = [];
      }
      
      
      if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }
      
  });
  recognition.addEventListener('end', recognition.start);
  

  recognition.start();
