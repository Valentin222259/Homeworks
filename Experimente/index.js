fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  .then((res) => res.json())
  .then((data) => {
    const catsDiv = document.getElementById("cats");
    data.forEach((cat) => {
      const img = document.createElement("img");
      img.src = cat.url;
      catsDiv.append(img);
    });
  })
  .catch((err) => {
    console.log("Failed");
  });
