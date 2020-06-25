//immediate invoked function expression
(function() {
    const quotes = [
      {
          author:'Tony robbins',
          quote:'A real decision is measured by the fact that you have taken a new action .If there is no action, you have not truly decided'
      },
      {
          author:'Buddha',
          quote:'Even death is not to be feared by one who has lived wisely.'
      },
      {
          author:'Mahatma Gandhi',
          quote:'You must be the change you want to see in the world.'
      },
      {
          author:'Albert Einstein',
          quote:'A person who never made a mistake never tried anything new.'
      },
  
      {
          author:'Mother teresa',
          quote:'If we really want to love we must learn how to forgive'
      }
  ];
  
    const btn = document.getElementById("generate-btn");
  
    btn.addEventListener("click", function() {
      let random = Math.floor(Math.random() * quotes.length);
      console.log(random);
  
      document.getElementById("quote").textContent = quotes[random].quote;
      document.querySelector(".author").textContent = quotes[random].author;
    });
  })();
  