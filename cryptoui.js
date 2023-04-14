const yieldFarmingData = [
  { name: "Uniswap", url: "uniswap.org", category: "DeFi", description: "A decentralized exchange protocol"},
  { name: "Yearn Finance", url: "yearn.fi", category: "DeFi",description: "A yield aggregator platform" },
  { name: "Compound", url: "compound.finance", category: "DeFi", description: "A decentralized lending protocol" }
];

const nftsData = [
  { name: "Rarity Tools", url: "https://rarity.tools", description: "Tools for searching NFT trait rarity and more" },
  { name: "Gem", url: "https://gem.xyz", description: "NFT aggregator" },
  { name: "OpenSea", url: "https://opensea.io", description: "NFT marketplace" },
  { name: "Icy Tools", url: "https://icy.tools", description: "Real-time market insights, more NFT alpha" },
  { name: "Degenz", url: "https://www.degenz.finance/", description: "NFT Data" },
  { name: "Sudoswap", url: "https://www.sudoswap.io/", description: "NFT LPing and trading" },
  ];

  const analyticsData = [
    { name: "Dune Analytics", description: "A powerful tool for querying and visualizing blockchain data" },
    { name: "Flipside Crypto", description: "A platform for analyzing and understanding blockchain data" },
    { name: "Glassnode", description: "A provider of on-chain data and analytics" }
    ];


const searchBoxesInput = document.getElementById('searchBoxesInput')

searchBoxesInput.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission

  const name = document.querySelector('.search-input').value;
  const category = document.getElementById("category-select").value;
  const sort = document.getElementById("sort-select").value;

  const results = performSearch(name, category, sort, yieldFarmingData, nftsData, analyticsData);
  
  if (results.length > 0) {
    console.log(`Results found:`, results);
  } else {
    console.log(`No results found`);
  }
});

function performSearch(name, category, sort, data) {
  let matches = data.filter(item => {
    let isMatch = true;
    if (name && !item.name.toLowerCase().includes(name.toLowerCase())) {
      isMatch = false;
    }
    if (category && item.category !== category) {
      isMatch = false;
    }
    return isMatch;
  });
  
  if (sort === 'name') {
    matches.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  displaySearchResults(matches);
}

function displaySearchResults(matches) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // clear previous search results

  if (matches.length === 0) {
    resultsDiv.innerText = "No results found";
  } else {
    matches.forEach(match => {
      const dataDiv = document.createElement("div");
      dataDiv.classList.add("search-result");

      const nameElement = document.createElement("h3");
      nameElement.innerText = match.name;
      dataDiv.appendChild(nameElement);

      const categoryElement = document.createElement("p");
      categoryElement.innerText = `Category: ${match.category}`;
      dataDiv.appendChild(categoryElement);

      const descriptionElement = document.createElement("p");
      descriptionElement.innerText = `Description: ${match.description}`;
      dataDiv.appendChild(descriptionElement);

      resultsDiv.appendChild(dataDiv);
    });
  }
}

// function printAllData(yieldFarmingData, nftsData, analyticsData) {
//   const resultsDiv = document.getElementById("results");
//   resultsDiv.innerHTML = ""; // clear previous results
  
//   yieldFarmingData.forEach((data) => {
//     const dataDiv = document.createElement("div");
//     dataDiv.innerText = `Name: ${data.name}, Category: ${data.category}, Description: ${data.description}`;
//     resultsDiv.appendChild(dataDiv);
//   });
//   nftsData.forEach((data) => {
//     const dataDiv = document.createElement("div");
//     dataDiv.innerText = `Name: ${data.name}, Category: ${data.category}, Description: ${data.description}`;
//     resultsDiv.appendChild(dataDiv);
//   });
//   analyticsData.forEach((data) => {
//     const dataDiv = document.createElement("div");
//     dataDiv.innerText = `Name: ${data.name}, Category: ${data.category}, Description: ${data.description}`;
//     resultsDiv.appendChild(dataDiv);
//   });
// }




  