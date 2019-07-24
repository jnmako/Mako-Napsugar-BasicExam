const characters = {
  data: [],
  init() {
    this.findAll();
  },

  findAll() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        this.setData(request.responseText);
      }
    };
    request.open('GET', '/json/got.json');
    request.send();
  },

  setData(userData) {
    this.data = JSON.parse(userData);
    this.data = Array.from(this.data.filter(aliveCharacters => aliveCharacters.dead !== true)
      .sort((x, y) => {
        if (x.name === y.name) {
          return 0;
        }
        if (x.name > y.name) {
          return 1;
        }
        return -1;
      }));
    this.showAll();
  },

  showAll() {
    let gotTemp = '';
    this.data.forEach((item, i) => {
      gotTemp += `<div class="persons">
                    <img class="personsPhoto" src="/${item.portrait}" 
                        onclick="characters.showCharacterData(${i})" alt="${item.name}">
                    <div class="personsName" 
                       onclick="characters.showCharacterData(${i})" >${item.name}</div>
                    </div> `;
      document.querySelector('.container-1').innerHTML = gotTemp;
    });
  },

  showCharacterData(i) {
    let characterDetails = '';
    characterDetails += `<div class = "personDetails">
      <img class="personsDetailPhoto" src="/${this.data[i].picture}">
      <div display: inline-block>
      <div class = "personsDetailName" >${this.data[i].name} </div>`;

    if (this.data[i].house != null) {
      characterDetails += ` <img class="personsHousePhoto" src="/assets/houses/${this.data[i].house}.png"></div>`;
    }
    characterDetails += `<div class="bio" >${this.data[i].bio}</div>
        </div>`;
    document.querySelector('.details').innerHTML = characterDetails;
  },


  search() {
    const searchBox = document.querySelector('#search');
    let characterIndex = '';
    for (let index = 0; index < this.data.length; index += 1) {
      const element = this.data[index];
      if (element.name.toLowerCase() === searchBox.value.toLowerCase()) {
        characterIndex = index;
      }
    }
    if (characterIndex === '') {
      alert('Character not found :(');
    } else {
      this.showCharacterData(parseInt(characterIndex, 10));
    }
  },
};
characters.init();
