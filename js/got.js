const character = {

  characters: [],
  init() {
    this.findAll();
  },

  findAll() {
    const request = new XMLHttpRequest();
    request.onload = () => {
      this.jsonData(request.responseText);
    };
    request.open('GET', '/Mako-Napsugar_BasicExam/json/got.json');
    request.send();
  },

  jsonData(gotCharacters) {
    this.characters = JSON.parse(gotCharacters);
    this.showAll();
  },

  showAll() {
    let input = '';
    for (let i = 0; i < this.characters.length; i += 1) {
      if (this.characters[i].dead !== true) {
        input += this.addInput(this.characters[i]);
      }
    }
    document.querySelector('.container-1').innerHTML += input;

  },

  addInput(ppl) {
    return `
    <div>  
        <div>
            <img src="${ppl.portrait}" alt="${ppl.name}">
            <p>${ppl.name}</p>
        </div>
    </div>
    `;
  },
}

character.init();
