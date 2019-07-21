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

  nameSorting() {
    this.characters.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  },

  showAll() {
    let input = '';
    this.nameSorting();
    for (let i = 0; i < this.characters.length; i += 1) {
      if (this.characters[i].dead !== true) {
        input += this.addInput(this.characters[i]);
      }
    }
    document.querySelector('.container-1').innerHTML += input;
  },

  addInput(ppl) {
    return ` 
         <div class="characters">
            <img src="${ppl.portrait}" alt="${ppl.name}" >
            <p>${ppl.name.toUpperCase()}</p>
        </div>
    `;
  },
};

character.init();
