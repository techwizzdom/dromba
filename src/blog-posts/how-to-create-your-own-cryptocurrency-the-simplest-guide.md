Crypto is such a hyped word today.

For somebody not familiar with tech, it can sound like black magic. You can assume that it's extremely complex.

And for most parts, it is.

But what if I told you that you can create your own cryptocurrency in just a few minutes? Without any coding knowledge!

You probably won't create a Bitcoin killer, but you can still make something valuable.

Let's dive in.

---

## 1. Download and Setup Metamask

Head over to [Metamask.io](https://metamask.io/), download and set up the wallet.

After you're done, copy the wallet address.

<img src="https://i.imgur.com/UW1YPKQ.png" alt="Metamask wallet address copy" />

---

## 2. Send Yourself Some Test Ethereum

We don't want to pay for the gas fees — that's why we're gonna send a test Ethereum to our wallet and pay the gas with it.

Go to [Ropsten Ethereum Faucet](https://faucet.ropsten.be/), paste the wallet address there, and click send.

<img src="https://i.imgur.com/8lWpTCU.png" alt="Ropsten Ethereum Faucet" />

You should receive the ETH soon!

---

## 3. Copy The Only Code You'll Need

Go to [Open Zeppelin](https://openzeppelin.com/contracts/), and copy the code after the page is loaded.

<img src="https://i.imgur.com/8bA9siz.png" alt="OpenZeppelin ERC20 Token Code" />

This code will be used to generate the token.

---

## 4. Open the Remix IDE

Go to [Remix Ethereum](https://remix.ethereum.org/) and create a new file.

Then, paste the code from Open Zeppelin to that newly created file.

Modify elements highlighted with arrows. Those are:

1. Token name
2. Token symbol
3. Decimals

<img src="https://i.imgur.com/SF2cBIg.png" alt="Remix Ethereum Org" />

---

## 5. Compile the Token

Click on the compile option in the sidebar.

Make sure that the settings are the same as on the screenshot (and that your compiler version is the same as the Solidity version at the top of your file).

Don't forget to select your token at the "Contract" dropdown.

<img src="https://i.imgur.com/ID5oWNj.png" alt="Remix Ethereum Compile Token" />

---

## 6. Deploy the Token

Select "Deploy" from the sidebar.

Select "Injected Web3" from the first dropdown and connect the Metamask wallet. Make sure that the "Account" field has your wallet address as a selected option!

Also, select your token at the "Contract" dropdown.

<img src="https://i.imgur.com/19L9XlY.png" alt="Remix Ethereum Deploy Token" />

And now, hit deploy and confirm the transaction on Metamask!

---

## 7. Import the Token To Your Wallet

The token is created, you just need to import it to your wallet.

Copy the contract address first:

<img src="https://i.imgur.com/HTf5kwc.png" alt="Metamask Import Tokens" />

Then, import that address to your Metamask wallet:

<img src="https://i.imgur.com/2ngmKwH.png" alt="Metamask Newly Imported Tokens" />

And finally, the token is here! 🎉
