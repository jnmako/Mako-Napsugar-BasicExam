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
    console.log(this.characters);
  },

};

character.init();
