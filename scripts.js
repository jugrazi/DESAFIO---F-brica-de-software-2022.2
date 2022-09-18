let dados = [
    {
      id: "1",
      image: "https://th.bing.com/th/id/R.19e5fd516a452e56eefc5adb2332de20?rik=QbOqn%2fDv4i4lsw&riu=http%3a%2f%2fwww.singing-wings-aviary.com%2fwp-content%2fuploads%2f2015%2f03%2fRingneck-Parakeet.jpg&ehk=MtNTu0zeXHXRgBJzuVk1SwJo%2f89bEhDo6PtxuHJjQoo%3d&risl=&pid=ImgRaw&r=0",
       name: "Zoológico",
    },
  ];

  const elementoH1 = document.querySelector("h1");
  
  for (let objeto of dados) {
    const elemtArticle = document.createElement("article");
  elemtArticle.classList.add("animal");

  elementoH1.insertAdjacentElement("afterend", elemtArticle);
  }
  
  const btn = document.querySelector(".btn-azul");

  fetch("https://zoo-animal-api.herokuapp.com/")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });
  
  for (let objeto of dados) {
    const elemtArticle = document.createElement("article");
    elemtArticle.classList.add("animal");
  
    elemtArticle.innerHTML = `
    <img src="${objeto.image}" alt="${objeto.name}" />
    `;
  
    elementoH1.insertAdjacentElement("afterend", elemtArticle);
  }
  
  btn.addEventListener("click", () => {
    let articles = document.querySelectorAll("article");
    for (let i = 0; i < articles.length; i++) {
      articles[i];
    }
    dados = [];
    elementoH1.innerText = `${dados.length} monstros`;
  });