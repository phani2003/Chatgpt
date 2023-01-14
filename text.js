// function to submit a message
function submitMessage() {
  // get the message from the input field
  var message = document.getElementById("chat-message").value;
  
  // use the OpenAI API to get a response from ChatGPT
  fetch('https://api.openai.com/v1/engines/davinci/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      prompt: message,
      temperature: 0.5,
      max_tokens: 100
    })
  })
  .then(response => response.json())
  .then(data => {
    // get the response from ChatGPT
    var response = data.choices[0].text;
    
    // create a new div to display the response
    var newDiv = document.createElement("div");
    newDiv.innerHTML = response;
    
    // add the response to the chat output
    document.getElementById("chat-output").appendChild(newDiv);
  });
  
  // clear the input field
  document.getElementById("chat-message").value = "";
}
