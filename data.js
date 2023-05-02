const data = [
    {
      name: 'Daniel Samuel',
      role: 'fullstack Developer',
      link: 'https://github.com/DanSam5K',
      image: 'capstone-assets/Daniel.jpeg',
    },
    {
      name: 'Zizoh Anto',
      role: 'Andriod Developer',
      link: 'https://github.com/zizoh',
      image: 'capstone-assets/Zizoh.jpeg',
    },
    {
      name: 'Anto Victor Akoke',
      role: 'Fullstack Developer',
      link: 'https://github.com/antoHero',
      image: 'capstone-assets/Akoke.jpeg',
    },
    {
      name: 'Bobai Yakubu',
      role: 'FrontEnd Developer',
      link: 'https://github.com/Phildeoner',
      image: 'capstone-assets/Bobai.jpeg',
    },
    {
      name: 'Bakeung Dickson',
      role: 'FrontEnd developer',
      link: 'https://github.com/BlaizDickson',
      image: 'capstone-assets/Bakeung.jpeg',
    },
    {
      name: 'Isaac Bakoshi',
      role: 'FrontEnd Developer',
      link: 'https://github.com/Kadunapikin',
      image: 'capstone-assets/Isaac.jpeg',
    },
    {
      name: 'Joshua Nathaniel',
      role: 'FrontEnd Developer',
      link: 'https://github.com/Bazzy09',
      image: 'capstone-assets/Nathaniel.jpeg',
    },
    {
      name: 'Akutsang Kaze',
      role: 'FrontEnd Developer',
      link: 'https://github.com/akuutsang',
      image: 'capstone-assets/Akutsang.jpeg',
    },
  ];
  function card(){
    data.forEach((element, i) => {
      const gridContainer = document.querySelector('.grid-container');
      const box = document.createElement('div');
      box.classList = 'boxes';
      const boxItem = `
      <div class="boxes">
              <img class= "img" src="${data[i].image}" alt="">
            </div>
            <div class="info">
            <h5>${data[i].name}</h5>
            <h6>${data[i].role}</h6>
            <a href="${data[i].link}">Readmore</a>
            </div>`;
      box.innerHTML += boxItem;
      gridContainer.appendChild(box);
    });
  } 
  card();

  export{card};