let data = {
    'hello': {
        title: 'Hello',
        icon: 'images/apecoin-quick-learn-logo.png',
        descriptions: [
            "This is ApeCoin Quick Learn.",
            "ApeCoin is an ERC-20 governance and utility token used within the APE Ecosystem.",
            "Easy. Straight to the point. Step-by-step.",
            "Questions? Reach out on <a href='https://twitter.com/gregcardo' target='_blank'>Twitter</a><img src='images/twitter-logo.png' class='inline-icon'>",
            "To get started, <a href='#first-thing' subject='first-thing'>click here</a><img src='images/first-logo.png' class='inline-icon'>"
        ],
        steps: [

        ],
        list: [

        ]
    },
    'missing': {
        title: 'Uh oh!',
        icon: 'images/missing-icon.png',
        descriptions: [
            "Looks like you found a broken link",
            "See if you can find the page in the menu"
        ],
        steps: [

        ],
        list: [

        ]
    },
    'first-thing': {
        title: 'First thing to do',
        icon: 'images/first-logo.png',
        descriptions: [
            "Starting from step 0?",
            "Here's what you should try first."
        ],
        list: [],
        steps: [
            "Get to know about the <a href='#what-is-apecoindoa' subject='what-is-apecoindoa'>ApeCoin DAO</a><img src='images/apecoin-logo.svg' class='inline-icon'> and how you can be a member",
            "Know the <a href='#must-knows' subject='must-knows'>must-knows</a><img src='images/important-icon.png' class='inline-icon'> of transacting on the Ethereum blockchain",
            "Set up a <a href='#get-wallet' subject='get-wallet'>MetaMask</a><img src='images/metamask-logo.svg' class='inline-icon'> wallet",
            "Buy $15-$20 worth of ApeCoin on <a href='#get-coinbase' subject='get-coinbase'>Coinbase</a><img src='images/coinbase-logo.png' class='inline-icon'> or <a href='#get-binance' subject='get-binance'>Binance</a><img src='images/binance-logo.svg' class='inline-icon'>",
            "Send the ApeCoin to your MetaMask over <a href='#try-ethereum' subject='try-ethereum'>Ethereum</a><img src='images/ethereum-logo.png' class='inline-icon'>",
            "Join the ApeCoin token gated <a href='https://forum.apecoin.com/invites/fEdGfZyTPi' target='_blank'>forum</a><img src='images/apecoin-logo.svg' class='inline-icon'>",
            "Join the ApeCoin DAO <a href = 'https://snapshot.org/#/apecoin.eth' target = '_blank' > snapshot space</a><img src='images/fdt.png' class='inline-icon'> and participate in voting",
            "Join the unofficial ApeCoin token gated <a href = 'https://discord.gg/apecoindao' target = '_blank' > discord</a><img src='images/discord-icon.svg' class='inline-icon'>",

        ]
    },
    'must-knows': {
        title: 'The must-knows',
        icon: 'images/important-icon.png',
        descriptions: [
            'Here are a few things you absolutely must know!'
        ],
        steps: [],
        list: [
            "You need ether (ETH) to pay for gas to transact on the Ethereum network where ApeCoin leaves",
            "Be aware that transactions on Ethereum can be expensive when the network is busy",
            "Never share your seed phrase or store them on your phone or computer. Write it down on paper!",
            "Only send ether to an Ethereum address, bitcoin to a Bitcoin addresses, etc",
            "However, you can send and receive ERC20 tokens with an Ethereum address since they are programmed on the Ethereum network",
            "Ether (ETH) is the asset and Ethereum is the network",
            "Now let's walkthrough setting up a <a href='#get-wallet' subject='get-wallet'>MetaMask</a><img src='images/metamask-logo.svg' class='inline-icon'> wallet"
        ]
    },
    'what-is-apecoindoa': {
        title: 'What is ApeCoin DAO',
        icon: 'images/question-icon.png',
        descriptions: [],
        steps: [],
        list: [
            "DAO is short for Decentralized Autonomous Organisation.",
            "ApeCoin DAO is an organisation that runs on a blockchain network",
            "ApeCoin DAO is governed by holders of ApeCoin.",
            "Only one Apecoin is needed to join the DAO and begin participating.",
            "ApeCoin DOA members can propose and vote on proposals using the ApeCoin token.",
            "ApeCoin DAO facilitate decentralised governance, funding, and coordination.",
            "ApeCoin DAO is open to everyone around the world.",
            "There are some things you <a href='#must-knows' subject='must-knows'>should know</a><img src='images/important-icon.png' class='inline-icon'> regarding using the blockchain"
        ]
    },
    'get-wallet': {
        title: 'Get a wallet',
        icon: 'images/metamask-logo.svg',
        descriptions: [
            "The most popular wallet to use with DeFi is MetaMask.",
            "You'll want the app on your phone and the browser extension."
        ],
        steps: [
            "Download <a href='https://metamask.io/download/' target='_blank'>MetaMask</a><img src='images/metamask-logo.svg' class='inline-icon'> on your phone",
            "Choose Create a new wallet",
            "Follow on-screen instructions, <i>write down seed phrase on paper</i>",
            "Download <a href='https://metamask.io/download/' target='_blank'>MetaMask extension</a> in Chrome browser",
            "Choose restore wallet from seed phrase (the one you wrote down)",
            'To get your public address, touch/click the "0x000...0000" in MetaMask',
            "Go to <a href='https://etherscan.io/' target='_blank'>etherscan.io</a> and paste in address to see it on a block explorer",
            "MetaMask is connected to Ethereum by default",
            "Next let's get some ApeCoin on <a href='#get-coinbase' subject='get-coinbase'>Coinbase</a><img src='images/coinbase-logo.png' class='inline-icon'>\
            or <a href='#get-binance' subject='get-binance'>Binance</a><img src='images/binance-logo.svg' class='inline-icon'>"
        ],
        list: []
    },
    'get-coinbase': {
        title: 'Get Coinbase',
        icon: 'images/coinbase-logo.png',
        descriptions: [
            "The most trusted and most widely used platform for buying crypto with your bank account"
        ],
        steps: [
            "Sign up for a <a href='https://www.coinbase.com/join/davis_95' target='_blank'>Coinbase.com</a><img src='images/coinbase-logo.png' class='inline-icon'> account",
            "Connect your checking account",
            "<a href='https://www.coinbase.com/price/apecoin' target='_blank'>Buy some ApeCoin</a> (maybe $20 worth).",
            "Next let's send <a href='#try-ethereum' subject='try-ethereum'>ApeCoin to the Ethereum network</a><img src='images/ethereum-logo.png' class='inline-icon'>"
        ],
        list: []
    },
    'get-binance': {
        title: 'Get Binance',
        icon: 'images/binance-logo.svg',
        descriptions: [
            "The largest cryptocurrency exchange in the world"
        ],
        steps: [
            "Sign up for a <a href='https://accounts.binance.com/register?ref=128069471' target='_blank'>Binance.com</a><img src='images/binance-logo.svg' class='inline-icon'> account",
            "Connect your checking account if the platform supports your local bank. P2P trading is also available on Binance for you to buy stable coins",
            "<a href='https://www.binance.com/en/price/apecoin-ape' target='_blank'>Buy some ApeCoin</a> (maybe $15-$20 worth).",
            "Next let's send <a href='#try-ethereum' subject='try-ethereum'>ApeCoin to the Ethereum network</a><img src='images/ethereum-logo.png' class='inline-icon'>"
        ],
        list: []
    },
    'try-ethereum': {
        title: 'Know Ethereum',
        icon: 'images/ethereum-logo.png',
        descriptions: [
            "Ethereum is a decentralized blockchain with smart contract functionality.",
            "Ether is the native cryptocurrency of the platform."
        ],
        steps: [
            "Withdraw the ApeCoin to your 0x00..00 address and <i>choose to use the Ethereum network</i>",
            "In your metamask extension, click on import token, search for ApeCoin, select it and import it to be able to view it after the transaction is completed",
            "You can also view your address on <a href='https://etherscan.io/' target='_blank'>etherscan.io</a><img src='images/etherscan-logo.svg' class='inline-icon'> to confirm it worked",
            "You are now able to join some ApeCoin token gated communities: ApeCoin DAO " +
            "<a href='https://forum.apecoin.com/invites/fEdGfZyTPi' target='_blank'>forum</a><img src='images/apecoin-logo.svg' class='inline-icon'> and " +
            "<a href='https://discord.gg/apecoindao' target='_blank'>discord</a><img src='images/discord-icon.svg' class='inline-icon'>",
            "Join the ApeCoin DAO <a href='https://snapshot.org/#/apecoin.eth' target='_blank'>snapshot</a><img src='images/fdt.png' class='inline-icon'></img> space where you can vote on community proposals",
            "At this point you're a complete community member ready to shape the culture. When you're ready to explore some awesome apps built by the ApeCoin community, click <a href='#first-thing' subject='first-thing'>here</a><img src='images/fast-forward.png' class='inline-icon'>"

        ],
        list: []
    },
    'check-gas': {
        title: 'Check Ethereum gas',
        icon: 'images/gas-logo.png',
        descriptions: [
            "Gas prices to transact on Ethereum can sometimes be too high to try things",
            "Networks like <a href='#try-optimism' subject='try-optimism'>Optimism<a><img src='images/optimism-logo.png' class='inline-icon'> help scale Ethereum to more people with cheaper costs",
            "Ethereum mainnet is becoming the home for large financial transactions"
        ],
        steps: [
            "Go to <a href='https://www.blocknative.com/gas-estimator' target='_blank'>blocknative.com/gas-estimator</a>",
            "The important number is the Base Fee near the bottom of the graphic",
            "If Base Fee > 50 I would wait until gas is lower before transacting on Ethereum",
            "To easily see gas levels, click Download the Extension"
        ],
        list: []
    },
    'get-ens': {
        title: 'Get .eth name',
        icon: 'images/ens-logo.png',
        descriptions: [
            "Register a human readable address to map to your ugly long wallet address",
            "Your .eth name is perceived as your username for web3",
            "Consider privacy when choosing a name"
        ],
        steps: [
            "<a href='#check-gas' subject='check-gas'>Check gas<a><img src='images/gas-logo.png' class='inline-icon'> to make sure it's not too high",
            "Go to <a href='https://app.ens.domains/' target='_blank'>app.ens.domains</a> and search for a name you'd like to claim",
            "If available, choose number of years, then click Request to Register",
            "Confirm MetaMask tx, then it makes you wait 1 minute",
            "Once ready, click to confirm to register your name",
            "After claiming, you need to set the Reverse Record of your address so the blockchain knows the .eth name goes to your address",
            "On the My Account page, expand Primary ENS Name section, choose your new name in dropdown and confirm",
            "To learn more about Ethereum Name Service (ENS) go <a href='https://ens.domains/' target='_blank'>here</a>",
            "Another handy tool to explore names is <a href='https://ens.tools/domains' target='_blank'>ens.tools</a><img src='images/ens-tools-logo.png' class='inline-icon'>"
        ],
        list: []
    },
    'try-thankape': {
        title: 'ThankApe',
        icon: 'images/thrivecoin-logo.jpeg',
        descriptions: [
            "This and that",
            "This and that",
            "This and that"

        ],
        steps: [
            "This and that",
            "This and that"
        ],
        lists: []
    }
}

// ideas:
// buy nfts on opensea
// bet on exotic markets
// lend/borrow nfts to earn yield
// lens protocol
// barnbridge
// livepeer staking
// the graph (tenderize?)
// indexcoop MNYe
// defillama.com
// bullish case on tokens that actually do something
// revoke.cash revoke permissions, etherscan method
// compound on ethereum
