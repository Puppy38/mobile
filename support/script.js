function message() {
  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;

  const webhook =
"https://discord.com/api/webhooks/1405538730932175020/tPL8K4Mo7rZi-z1v2JjLXONY0KomVqSpL6fX4pgTUr4cu98xcAOM83p-L8ltukw1wBqS";
  const contents = `Name: ${name}\nMessage: ${message}`;
  const request = new XMLHttpRequest();
  request.open("POST", webhook);
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    content: contents
  }
  request.send(JSON.stringify(params));

}




