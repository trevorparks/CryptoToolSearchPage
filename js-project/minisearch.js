import MiniSearch from 'minisearch'

const yieldFarmingData = [
    { name: "Uniswap", url: "uniswap.org", category: "DeFi", description: "A decentralized exchange protocol"},
    { name: "Yearn Finance", url: "yearn.fi", category: "DeFi",description: "A yield aggregator platform" },
    { name: "Compound", url: "compound.finance", category: "DeFi", description: "A decentralized lending protocol" }
  ];

  const searchIndex = new MiniSearch({
    fields: ["name", "url", "description"],
   storeFields: ["name", "url", "description"],
   searchOptions: {
    boost: { title: 2, description: 1 },
    prefix: true,
    fuzzy: 0.25,
   },
   // idField: "someOtherUniqueField"
  });

  searchIndex.addAll(yieldFarmingData);

  let searchResults = searchIndex.search('click', function (event) {
    event.preventDefault(); // Prevent form submission
    // filter: (result) => result.tags.includes("pb")
  });

//   searchIndex.documentCount;
//   searchIndex.remove(mockData[0]);