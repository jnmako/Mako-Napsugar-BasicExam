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
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
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
         <div class="characters ${ppl.name}">
            <img src="${ppl.portrait}" alt="${ppl.name}" >
            <p>${ppl.name.toUpperCase()}</p>
        </div>
    `;
  },

  searchUser(ppl) {
    let searchedFor = document.getElementById('searchBar').value;
    searchedFor = searchedFor.toLowerCase;
    let inputField = document.getElementById('searchInput').innerHTML;
    for (let i = 0; i < this.characters.length; i += 1) {
      if (this.characters[i].name.toLowerCase().includes(searchedFor)) {

        inputField += `<div> <img src="${ppl.picture}"> </div> 
                    <p>${ppl.name}"</p>
                    <div> <img src="${ppl.picture}"</div>
                    <textarea id="" cols="30" rows="10" value = "${ppl.bio}"></textarea> `;
      }
    };
  },

};

character.init();
