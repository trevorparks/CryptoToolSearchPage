//reference data
const cryptoData = [
  { name: "Uniswap", url: "https://uniswap.org", category: "DeFi", description: "A decentralized exchange protocol"},
  { name: "Yearn Finance", url: "https://yearn.fi", category: "DeFi",description: "A yield aggregator platform" },
  { name: "Compound Finance", url: "https://compound.finance", category: "DeFi", description: "A decentralized lending protocol" },
  { name: "Curve Finance", url: "https://curve.fi", category: "DeFi", description: "A decentralized exchange specializing in stableswaps" },
  { name: "Rarity Tools", url: "https://rarity.tools", description: "Tools for searching NFT trait rarity and more" },
  { name: "Gem", url: "https://gem.xyz", category: "NFT", description: "NFT aggregator" },
  { name: "OpenSea", url: "https://opensea.io", category: "NFT", description: "NFT marketplace" },
  { name: "Icy Tools", url: "https://icy.tools", category: "NFT", description: "Real-time market insights, more NFT alpha" },
  { name: "Degenz", url: "https://www.degenz.finance/", category: "NFT", description: "NFT Data" },
  { name: "Sudoswap", url: "https://www.sudoswap.io/", category: "NFT", description: "NFT LPing and trading" },
    { name: "Dune Analytics", url: "https://dune.xyz", category: "Analytics", description: "A powerful tool for querying and visualizing blockchain data" },
    { name: "Flipside Crypto", url: "https://flipsidecrypto.xyz/", category: "Analytics", description: "A platform for analyzing and understanding blockchain data" },
    { name: "Glassnode", url: "https://glassnode.com", category: "Analytics", description: "A provider of on-chain data and analytics" },
    {name: "DefiLlama", description: "A provider of crypto tools, data, and more", url: "https://defillama.com", category: "Analytics Defi NFTs" },
    {
      id: 15,
      name: "DexTools",
      description: "Charts for the newest and hottest altcoins",
      url: "https://dextools.io",
      category: "Analytics"
    },
    {
      id: 16,
      name: "Etherscan",
      description: "Block explorer for Ethereum",
      url: "https://etherscan.io",
      category: "Block Explorer"
    },
    {
      id: 17,
      name: "Dexscreener",
      description: "Charts for the newest and hottest altcoins",
      url: "https://www.dexscreener.com/multicharts",
      category: "DeFi Analytics"
    },
    {
      id: 18,
      name: "Aggr Trade",
      description: "Aggregator of exchange data for BTC, ETH, etc",
      url: "https://www.aggr.trade",
      category: "DeFi Analytics"
    },
    {
      id: 19,
      name: "vfat",
      description: "Yields for degens tool",
      url: "https://vfat.tools",
      category: "DeFi Analytics"
    },
    {
      id: 20,
      name: "Dexscreener",
      description: "Charts for the newest and hottest altcoins",
      url: "https://dexscreener.com/multicharts",
      category: "DeFi Analytics"
    },
    {
      id: 21,
      name: "Defi llama",
      description: "DeFi data aggregator",
      url: "https://defillama.com",
      category: "Analytics Defi NFTs"
    },
    {
      id: 22,
      name: "Gas price gwei and dollars",
      description: "Ethereum gas price tracker",
      url: "https://etherscan.io/gastracker",
      category: "Analytics"
    },
    {
      id: 23,
      name: "Dextools",
      description: "Charts for the newest and hottest altcoins",
      url: "https://dextools.io",
      category: "Analytics"
    },
    {
      id: 24,
      name: "Top gainers and losers",
      description: "Crypto gainers and losers",
      url: "https://www.coingecko.com/en/crypto-gainers-losers",
      category: "Analytics"
    },
    {
      id: 25,
      name: "Dex screener multichart",
      description: "Charts for the newest and hottest altcoins",
      url: "https://dexscreener.com/multicharts",
      category: "Analytics"
    },
    {
      id: 26,
      name: "Funding Rates",
      description: "Crypto funding rates",
      url: "https://www.coinglass.com/",
      category: "Analytics"
    },
    {
      id: 27,
      name: "All CEX tokens into WL",
      description: "Aggregator for centralized exchange tokens",
      url: "https://www.sandwich.finance/",
      category: "Analytics"
    },
    {
      id: 28,
      name: "aggr",
      description: "Aggregator of exchange data for BTC, ETH, etc",
      url: "https://www.aggr.trade",
      category: "Analytics"
    },
    {
      id: 29,
      name: "Gecko Terminal",
      description: "Crypto terminal",
      url: "https://geckoterminal.com",
      category: "Analytics"
    },
    {
      id: 30,
      name: "Cosmos Airdrops",
      description: "Airdrops for Cosmos projects",
      url: "https://cosmosuplink.web.app/airdrops",
      category: "Analytics"
    },
    {
      id: 31,
      name: "vfat",
      description: "Yield aggregator tool",
      url: "https://vfat.tools",
      category: "Analytics"
    },
    {
      id: 32,
      name: "Chart School",
      description: "Education for technical analysis",
      url: "https://school.stockcharts.com/",
      category: "Analytics"
    },
    {
      id: 33,
      name: "True Vibration Series",
      description: "Education for crypto trading",
      url:
        "https://www.youtube.com/playlist?list=PLLoSNo4YB1T0NpCQN3nTbq95l0khb8Tdw",
      category: "Analytics"
    },
    {
      id: 34,
      name: "Trading View",
      description: "Financial charting platform",
      url: "https://www.tradingview.com",
      category: "Analytics"
    },
    {
      id: 35,
      name: "okotoki",
      description: "A suite of DeFi tools",
      url: "https://okotoki.com/",
      category: "Analytics"
    },
    {
      id: 36,
      name: "ICT",
      description: "Forex trading education",
      url: "https://www.youtube.com/c/InnerCircleTrader/playlists",
      category: "Analytics"
    },
    {
      id: 37,
      name: "Seeking Alpha",
      description: "Investment research platform",
      url: "https://www.seekingalpha.com/",
      category: "Analytics"
    },
    {
      id: 38,
      name: "Eth gas fees",
      description: "Ethereum gas fee tracker",
      url: "https://crypto.com/defi/dashboard/gas-fees",
      category: "Analytics"
    },
    {
      id: 39,
      name: "babylonians site",
      description: "Web3 Crypto Hub",
      url:
        "https://thebabylonians.notion.site/thebabylonians/Web3-Crypto-Hub-d9b4f86131a9455887758b28e35935b8",
      category: "Analytics"
    },
    {
      id: 40,
      name: "one click transfer",
      description: "Crypto transfer tool",
      url: "https://sweeposaurus.com/",
      category: "Analytics"
    },
    {
      id: 41,
      name: "discord tool",
      description: "Discord plugin for better server management",
      url: "https://betterdiscord.app/plugin/JoinedAtDate",
      category: "Analytics"
    },
    {
      id: 42,
      name: "TweetShift",
      description: "Twitter automation tool",
      url: "https://tweetshift.com/",
      category: "Analytics"
    },
    {
      id: 43,
      name: "Llama directory",
      description: "Directory of DeFi projects",
      url: "https://twitter.com/DefiLlama/status/1563906762087989249",
      category: "Analytics Defi NFTs"
    },
    {
      id: 44,
      name: "Llama Airforce",
      description: "DeFi dashboard",
      url: "https://llama.airforce/#/",
      category: "Analytics Defi NFTs"
    },
    {
      id: 45,
      name: "samczsun",
      description: "Ethereum tag explorer",
      url: "https://tags.eth.samczsun.com",
      category: "Analytics"
    },
    {
      id: 46,
      name: "truflation",
      description: "Crypto inflation tracker",
      url: "https://app.truflation.com/",
      category: "Analytics"
    },
    {
      id: 47,
      name: "TweetShift",
      description: "Twitter automation tool",
      url:
        "https://tweetshift.com/dashboard/server/1004514396476801078/auto-posting?alert=added",
      category: "Analytics"
    },
    {
      id: 48,
      name: "coindix",
      description: "Crypto market news aggregator",
      url: "https://coindix.com/",
      category: "Analytics"
    },
    {
      id: 49,
      name: "trade the chain",
      description: "Crypto market insights and alerts",
      url: "https://tradethechain.com/",
      category: "Analytics"
    },
    {
      id: 50,
      name: "blockchain center",
      description: "Crypto market data and analysis",
      url: "https://www.blockchaincenter.net/altcoin-season-index/",
      category: "Analytics"
    },
    {
      id: 51,
      name: "defi yield WALLET TOOLBOX",
      description: "DeFi yield calculator and portfolio management tool",
      url: "https://defiyield.info/",
      category: "DeFi"
    },
    {
      id: 52,
      name: "liquidity folio",
      description: "DeFi portfolio tracker",
      url: "https://www.liquidityfolio.com/#",
      category: "DeFi"
    },
    {
      id: 53,
      name: "degenscore",
      description: "NFT evaluation tool",
      url: "https://degenscore.com/",
      category: "NFT"
    },
    {
      id: 54,
      name: "better discord",
      description: "Discord plugin for better server management",
      url: "https://betterdiscord.app/plugin/ServerDetails",
      category: "Analytics"
    },
    {
      id: 55,
      name: "breadcrumbs (wallet tracking)",
      description: "Crypto wallet tracking tool",
      url: "https://www.breadcrumbs.app/",
      category: "Analytics"
    },
    {
      id: 56,
      name: "Artemis",
      description: "Crypto market data aggregator",
      url: "https://www.artemis.xyz/",
      category: "Analytics"
    },
    {
      id: 57,
      name: "GokuStats",
      description: "Crypto market data and analysis",
      url: "https://www.gokustats.xyz/dashboard",
      category: "Analytics"
    },
    {
      id: 58,
      name: "Devs",
      description: "Crypto market data for developers",
      url: "https://www.gokustats.xyz/developers",
      category: "Analytics"
    },
    {
      id: 59,
      name: "Twitter Tracker",
      description: "Twitter analytics tool",
      url: "https://en.whotwi.com/",
      category: "Analytics"
    },
    {
      id: 60,
      name: "MultiFarm",
      description: "Cross-chain yield farming aggregator",
      url: "https://app.multifarm.fi/",
      category: "DeFi"
    },
    {
      id: 61,
      name: "Santiment",
      description: "Crypto market insights and analytics",
      url: "https://app.santiment.net/",
      category: "Analytics"
    },
    {
      id: 62,
      name: "Tax Calculator",
      description: "Crypto tax calculator and reporting tool",
      url: "https://twitter.com/CryptoTaxHQ",
      category: "Analytics"
    },
    {
      id: 63,
      name: "APY Vision",
      description: "DeFi yield calculator and portfolio management tool",
      url: "https://app.apy.vision/",
      category: "DeFi"
    },
    {
      id: 64,
      name: "BTC options calc",
      description: "Bitcoin options calculator",
      url:
        "https://www.cmegroup.com/tools-information/quikstrike/options-calculator.html",
      category: "Analytics"
    },
    {
      id: 65,
      name: "clev dune",
      description: "Crypto market data aggregator",
      url: "https://dune.com/Marcov/clever",
      category: "Analytics"
    },
    {
      id: 66,
      name: "Fed watch",
      description: "Countdown to the next FOMC meeting",
      url:
        "https://www.cmegroup.com/trading/interest-rates/countdown-to-fomc.html",
      category: "Analytics"
    },
    {
      id: 67,
      name: "unrekt smart contract checker",
      description: "Smart contract security analysis tool",
      url: "https://app.unrekt.net/",
      category: "Analytics"
    },
    {
      id: 68,
      name: "CVX value checker",
      description: "CVX token value calculator",
      url: "https://buycvxcorrect.netlify.app/",
      category: "DeFi"
    },
    {
      id: 69,
      name: "ExoCharts",
      description: "Charts and insights for the crypto market",
      url: "https://exocharts.com/",
      category: "Analytics"
    },
    {
      id: 70,
      name: "Glassnode",
      description: "On-chain data and analytics",
      url: "https://glassnode.com/",
      category: "Analytics"
    },
    {
      id: 71,
      name: "Dune Analytics",
      description: "A platform for querying and visualizing blockchain data",
      url: "https://dune.xyz/dashboards",
      category: "Analytics"
    },
    {
      id: 72,
      name: "Twitter Analytics",
      description: "A platform for analyzing and understanding Twitter data",
      url: "https://en.whotwi.com/",
      category: "Analytics"
    },
    {
      id: 73,
      name: "Google Trends",
      description: "A platform for analyzing and understanding search trends",
      url: "https://trends.google.com/",
      category: "Analytics"
    },
    {
      id: 74,
      name: "Fear and Greed Index",
      description: "An alternative sentiment indicator for the crypto market",
      url: "https://alternative.me/crypto/fear-and-greed-index/",
      category: "Analytics"
    },
    {
      id: 75,
      name: "Eigen Phi",
      description: "An analytics tool for tracking crypto markets",
      url: "https://www.eigenphi.com/",
      category: "Analytics"
    },
    {
      id: 76,
      name: "Token Terminal",
      description:
        "A platform for tracking revenue, growth, and more for DeFi protocols",
      url: "https://tokenterminal.com/terminal",
      category: "Analytics"
    },
    {
      id: 77,
      name: "Risk DAO",
      description:
        "A community-managed protocol for assessing risk in the DeFi space",
      url: "https://twitter.com/Risk_DAO",
      category: "DeFi Analytics"
    },
    {
      id: 78,
      name: "Vendor Finance",
      description: "A data-driven lending platform for DeFi",
      url: "https://twitter.com/VendorFI",
      category: "DeFi Analytics"
    },
    {
      id: 79,
      name: "Nomics",
      description: "A provider of transparent and reliable crypto data",
      url: "https://nomics.com",
      category: "Analytics"
    },
    {
      id: 80,
      name: "Viewbase",
      description: "A platform for tracking and analyzing crypto wallets",
      url: "https://viewbase.com",
      category: "Analytics"
    },
    {
      id: 81,
      name: "Into the Block",
      description: "A provider of insights and analytics for the crypto market",
      url: "https://app.intotheblock.com",
      category: "Analytics"
    },
    {
      id: 82,
      name: "Sushi Analytics",
      description: "A platform for tracking analytics on the SushiSwap platform",
      url: "https://analytics.sushi.com/bar",
      category: "Analytics"
    },
    {
      id: 83,
      name: "Coinmetrics",
      description: "A provider of on-chain data and analytics",
      url: "https://coinmetrics.io",
      category: "Analytics"
    },
    {
      id: 84,
      name: "Coinalyze",
      description: "Real-time market insights for cryptocurrencies",
      url: "https://coinalyze.net",
      category: "Analytics"
    },
    {
      id: 85,
      name: "Coin Dance",
      description: "Cryptocurrency data and statistics",
      url: "https://coin.dance",
      category: "Analytics"
    },
    {
      id: 86,
      name: "Flipside",
      description: "A platform for analyzing and understanding blockchain data",
      url: "https://flipsidecrypto.com",
      category: "Analytics"
    },
    {
      id: 87,
      name: "Bloxy",
      description: "Blockchain analytics and data visualization",
      url: "https://bloxy.info/analytics",
      category: "Analytics"
    },
    {
      id: 88,
      name: "Pools.fyi",
      description: "Aggregate data for decentralized exchanges",
      url: "https://pools.fyi/#/",
      category: "Analytics"
    },
    {
      id: 89,
      name: "DeFi Llama",
      description: "A provider of crypto tools, data, and more",
      url: "https://defillama.com",
      category: "Analytics Defi NFTs"
    },
    {
      id: 90,
      name: "DeFi Pulse",
      description: "A provider of DeFi data and analytics",
      url: "https://defipulse.com",
      category: "Analytics Defi"
    },
    {
      id: 91,
      name: "DeFi Dapp Review",
      description: "A provider of DeFi data and analytics",
      url: "https://defi.dapp.review",
      category: "Analytics Defi"
    },
    {
      id: 92,
      name: "Revert",
      description: "Portfolio management for DeFi",
      url: "https://revert.finance",
      category: "Analytics Defi"
    },
    {
      id: 93,
      name: "Parsec",
      description: "Analytics for DeFi and crypto",
      url: "https://parsec.finance",
      category: "Analytics Defi"
    },
    {
      id: 94,
      name: "Check On Chain",
      description: "Blockchain data and analytics",
      url: "https://checkonchain.com",
      category: "Analytics"
    },
    {
      id: 95,
      name: "Genesis Volatility",
      description: "Options analytics for DeFi and crypto",
      url: "https://pro.gvol.io/",
      category: "Analytics Defi"
    },
    {
      id: 96,
      name: "Token Unlocks",
      description: "Analytics for token unlocking schedules",
      url: "https://token.unlocks.app/",
      category: "Analytics"
    },
    {
      id: 97,
      name: "MEV Relayer Analytics",
      description: "Analytics for MEV (Miner Extractable Value) relayers",
      url: "https://www.mevboost.org/",
      category: "Analytics Defi"
    },
    {
      id: 98,
      name: "0x Scope",
      description: "Blockchain explorer for 0x",
      url: "https://0xscope.com/",
      category: "Analytics"
    },
    {
      id: 99,
      name: "King Fisher",
      description: "Options analytics for DeFi and crypto",
      url: "https://thekingfisher.io/abht",
      category: "Analytics Defi"
    },
    {
      id: 100,
      name: "Token Sniffer for Scam Rug Smart Contract",
      description: "Analytics tool to identify scam and rug pull tokens",
      url: "https://tokensniffer.com/",
      category: "Analytics"
    },
    {
      id: 101,
      name: "UNISWAP v3 Analytics",
      description: "Analytics for UNISWAP v3",
      url: "https://info.uniswap.org/#/",
      category: "Analytics"
    },
    {
      id: 102,
      name: "NFT Tracker",
      description: "Analytics tool to track NFT sales and transactions",
      url: "https://nonfungible.com/",
      category: "Analytics"
    },
    {
      id: 103,
      name: "NFT Tracker",
      description: "Analytics tool to track NFT sales and transactions",
      url: "https://icy.tools/",
      category: "Analytics"
    },
    {
      id: 104,
      name: "Token God Mode Mochi",
      description: "Analytics tool for Mochi Market",
      url: "https://dune.com/defimochi/token-god-mode",
      category: "Analytics"
    },
    {
      id: 105,
      name: "Kyberswap Trending",
      description: "Analytics for trending tokens on Kyberswap",
      url: "https://kyberswap.com/discover?tab=trending_soon",
      category: "Analytics"
    },
    {
      id: 106,
      name: "Icy Tools",
      description: "NFT analytics platform",
      url: "https://icy.tools/",
      category: "NFT"
    },
    {
      id: 107,
      name: "Sudoswap",
      description: "NFT marketplace",
      url: "https://www.sudoswap.xyz",
      category: "NFT"
    },
    {
      id: 108,
      name: "Genie",
      description: "NFT marketplace",
      url: "https://www.genie.xyz",
      category: "NFT"
    },
    {
      id: 109,
      name: "Rarity Tools",
      description: "NFT rarity tools",
      url: "https://www.rarity.tools",
      category: "NFT"
    },
    {
      id: 110,
      name: "NFT Perp",
      description: "NFT perpetual swap trading platform",
      url: "https://nftperp.xyz/",
      category: "NFT"
    },
    {
      id: 111,
      name: "Rarity Sniper",
      description: "NFT sniping tool",
      url: "https://raritysniper.com/",
      category: "NFT"
    },
    {
      id: 112,
      name: "Dune Analytics - NFT Communities",
      description: "Analyze activities of NFT communities",
      url: "https://dune.com/azima/Analyze-activities-of-NFT-communities",
      category: "NFT"
    },
    {
      id: 113,
      name: "NFT Tax Guide",
      description: "NFT tax guide",
      url: "https://www.nfttaxguide.com/#mint",
      category: "NFT"
    },
    {
      id: 114,
      name: "Rarity Tools",
      description: "NFT rarity tools",
      url: "https://rarity.tools/",
      category: "NFT"
    },
    {
      id: 115,
      name: "WGMI",
      description: "NFT marketplace",
      url: "https://wgmi.io/",
      category: "NFT"
    },
    {
      id: 116,
      name: "NFT Scoring",
      description: "NFT scoring and valuation platform",
      url: "https://nftscoring.com/trending",
      category: "NFT"
    },
    {
      id: 117,
      name: "Furion",
      description: "NFT marketplace and tools",
      url: "https://furion.io/",
      category: "NFT"
    },
    {
      id: 118,
      name: "Neo Tokyo Codes",
      description: "NFT marketplace and tools",
      url: "neotokyo.codes",
      category: "NFT"
    },
    {
      id: 119,
      name: "NFTs Super Site",
      description: "NFT marketplace and tools",
      url: "https://nfts.super.site/",
      category: "NFT"
    },
    {
      id: 120,
      name: "What's Minting Live",
      description: "NFT marketplace and tools",
      url: "https://www.whatsminting.live",
      category: "NFT"
    },
    {
      id: 121,
      name: "Sovs - NFT",
      description: "Collection of resources on NFTs",
      url: "https://sovs.notion.site/NFT-31d5ca637a8446d98b61e077d0f3fcf5",
      category: "NFT"
    },
    {
      id: 122,
      name: "arbiscan.io",
      description: "Arbitrum block explorer",
      url: "https://arbiscan.io/",
      category: "Block Explorer"
    },
    {
      id: 123,
      name: "snowtrace.io",
      description: "Snowbridge Avalanche-Ethereum bridge explorer",
      url: "https://snowtrace.io/",
      category: "Block Explorer"
    },
    {
      id: 124,
      name: "ftmscan.com",
      description: "Fantom Opera network block explorer",
      url: "https://ftmscan.com/",
      category: "Block Explorer"
    },
    {
      id: 125,
      name: "bscscan.com",
      description: "Binance Smart Chain block explorer",
      url: "https://bscscan.com/",
      category: "Block Explorer"
    },
    {
      id: 126,
      name: "optimistic.etherscan.io",
      description: "Optimistic Ethereum block explorer",
      url: "https://optimistic.etherscan.io/",
      category: "Block Explorer"
    },
    {
      id: 127,
      name: "Chainlist",
      description: "List of bridges between Ethereum and other chains",
      url: "https://chainlist.org/",
      category: "Bridge DeFi"
    },
    {
      id: 128,
      name: "Hop Protocol",
      description: "Fast and low-cost cross-chain swaps",
      url: "https://www.hop.exchange",
      category: "Bridge DeFi"
    },
    {
      id: 129,
      name: "Synapse Protocol",
      description: "Secure and decentralized cross-chain communication",
      url: "synapseprotocol.com",
      category: "Bridge DeFi"
    },
    {
      id: 130,
      name: "Arbitrum Bridge",
      description: "Bridge between Ethereum and Arbitrum",
      url: "bridge.arbitrum.io",
      category: "Bridge DeFi"
    },
    {
      id: 131,
      name: "Optimism Bridge",
      description: "Bridge between Ethereum and Optimism",
      url: "https://app.optimism.io/bridge",
      category: "Bridge DeFi"
    },
    {
      id: 132,
      name: "ChainEye",
      description: "Monitor and analyze cross-chain transactions",
      url: "https://chaineye.tools/",
      category: "Bridge DeFi"
    },
    {
      id: 133,
      name: "DeGate Bridge",
      description: "Bridge between Ethereum and Binance Smart Chain",
      url: "https://bridge.degate.com/",
      category: "Bridge DeFi"
    },
    {
      id: 134,
      name: "Debridge",
      description: "Bridge between Ethereum and Binance Smart Chain",
      url: "https://app.debridge.finance/deswap?inputChain=1&outputChain=56",
      category: "Bridge DeFi"
    }  
    ];


const searchBoxesInput = document.getElementById('searchBoxesInput')

searchBoxesInput.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission

  const searchInput = document.getElementById('search-input').value;
  const categoryInput = document.getElementById("category-select").value;
  const sortInput = document.getElementById("sort-select").value;

  console.log(searchInput, categoryInput, sortInput)
  const searchResults = performSearch(searchInput, categoryInput, sortInput, cryptoData);
  
//search the array for matches using input data
function performSearch(searchInput, categoryInput, sortInput, cryptoData) {
  let matches = cryptoData.filter((item) => 
  item.name.toLowerCase().includes(searchInput.toLowerCase()) &&
  item.category === categoryInput
);
    if (categoryInput == "" && searchInput == ""){
    matches = cryptoData;
    return displaySearchResults(matches)
      }
  
  if (sortInput === 'name-asc') {
    matches.sort((a, b) => a.name.localeCompare(b.name));
  } else { matches.sort((a, b) => b.name.localeCompare(a.name));
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

      const urlElement = document.createElement("p");
      urlElement.innerText = `URL: ${match.url}`;
      dataDiv.appendChild(urlElement);
      
      const urlBtn = document.createElement("button");
      urlBtn.textContent = "Visit";
      urlBtn.addEventListener("click", () => {
        window.location.href = match.url;
      });
      dataDiv.appendChild(urlBtn);
      
      

      resultsDiv.appendChild(dataDiv);
    });
  }
}
});