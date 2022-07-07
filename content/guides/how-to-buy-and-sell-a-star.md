If you've been using a comet or a planet, and now you'd like to use a star - either as your main identity, or to build a community, or both - then you're in the right place!

This guide will tell you how to shop for a star, and how to safely purchase one.

### Defining Our Terms: Useful Vocabulary

Before we really get started, let's define some useful vocabulary, so we know what we're taking about.

First, a star (or a planet) can be _booted_ or _unbooted_. The [Urbit blog](https://urbit.org/blog/value-of-address-space-pt3) explains this well:

> A booted address is one that has actually been used to boot Urbit OS. By convention, booted addresses are expected to have some existing reputation outside of their name alone, since they’ve been used on the network. Reputation, good and bad, comes in many forms. Did the address operate any useful infrastructure? Did it get placed on any blacklists for spam or abuse? Did it simply send and receive messages? The ability to programatically track reputation is still in its infancy, but we expect the tooling to develop as Urbit grows.

In other words, if the star has been used, we say it has been booted. It has a history, and other people on the Urbit network may have interacted with it. As a result, it has a reputation.

> Unbooted addresses, on the other hand, have no reputation. Both booted and unbooted addresses can be transferred between owners, but booted addresses will likely vary widely in price depending on the reputation each of them has acquired, and how they’ve been used.

The second pair of terms we should define are _spawned_ and _naked_. If the star has made planets, it has spawned some of its maximum of 2^16 planets. If it has made all of its planets - and has none of its planets left to issue - then the star is naked. (There may be some limits on how many of its planets the star is allowed to spawn, but there will be no such limits by 2025, so I will just not worry about this here).

Remember, once a star has spawned a planet, it can't take it back. Whoever has the keys to that planet address controls the planet.

The last important terms to know are _L1_ and _L2_. Although Urbit is an independent network, it uses Ethereum to transfer addresses, including stars. Ethereum is an L1 chain, like Bitcoin and others. Because transactions on Ethereum are expensive, many L2 chains now exist. These chains have their own transactions, but at the end of the day the transactions are bundled together and put onto an L1 chain. An L2 chain is typically much cheaper to use.

If your star's smart contract address lives directly on Ethereum, it's on L1. An L1 star can be listed on OpenSea, and the [Azimuth tool](https://azimuth.network/) can work with the star to see its transactions and its reputation. You will also be able to verify how many planets this star has spawned.

If your star is on L2, it can't be listed on OpenSea, Azimuth won't work with it, and as of the first quarter of 2022, there is no tool to verify the number of planets the star has spawned (this tool will likely be developed by 2023).

Finally, you might see references to _locked_ and _unlocked_ stars. Practically, you don't need to worry about this, but let's talk about it briefly.

> At present, the majority of Urbit address space is locked by smart contracts. When Urbit address space was first registered on the Ethereum blockchain, this unlocking mechanism was put in place to prevent the network from being flooded with users. A young Urbit network in which all of the address space had been unlocked would be exposed to attacks by bots and spammers. Scarcity, on the other hand, encourages good behavior as it increases the cost to spam.

> ... In practice, the only Urbit IDs that are ‘locked’ are stars.

Let's recap that. Because the Urbit network is new, many stars were locked, so that we didn't have too many people crowding in all at once. Stars are unlocked on a schedule, in batches.

Because stars are unlocked in batches, you can't really buy a single locked star. Furthermore, all stars will be unlocked by January 2024. As a buyer, you can rest assured that you're buying an unlocked star.

### What Makes a Star Commodity Grade

Let's just walk through the terms we've defined, and look at how they impact the value of a star. First, if the star has not been used at all or a lot - if it is unbooted - so that it has not acquired a reputation, it will be even more valuable.

By contrast, a star that has been booted, or even has been used to leave many messages and transactions, already has a reputation associated with it. To take the worst case, imagine the owner has made poor choices. Some people have banned it. Eventually Urbit may build easy ways to look at someone's reputation, which means anyone interacting with this star in the future could see that at one time it behaved badly. You would acquire this reputation when you purchased the star, and would need to redeem it. At the time of writing, it would be fair to say this is not a great concern, because the Urbit network is small and most people behave well, but it is something to keep in mind for the future.

Moving on to _virgin_ and _naked_, of course a star that has spawned planets now has fewer left to spawn. However, to take the most extreme case, a star that has spawned all of its stars and is now naked still has great value. The value of a naked star - really, any star! - lies primarily in its ability **to foster a community, and to route traffic around the Urbit network.**

Finally, a star that's on L2 isn't really commodity grade at this time, because it's helpful to be able to verify how many planets a star has spawned, and to see its reputation.

In short, a star is always valuable, but an L1 star with little to no reputation and fewer planets spawned is more valuable.

An unbooted, virgin, L1 star is commodity grade.

### Your Takeaways

To sum up this section, when you look to buy a star, you want to check for yourself whether the star is booted or unbooted, virgin or naked, and L1 or L2. If the star has been booted, or has spawned some of its planets, or is on L2, you may want to negotiate a lower price for it, or look for a different star. Or not! It all depends what you want to do with the star, and when.

In the rest of this guide, we'll figure out how to check all this, so you know what you're getting, and how to safely purchase it.

### Shopping for a Star

Currently there are two main marketplaces for stars, although a third, [Star Marketplace](https://star.market/), is coming soon. 

The first is [OpenSea](https://opensea.io/collection/urbit-id?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=size&search[stringTraits][0][values][0]=star). Prices are in Ethereum, and the star is in escrow. Possession is automatically transferred to you when you purchase it.

If you are looking for a deal, you may be able to time a dip in Ethereum prices, but naturally that is pretty chancy.

The second marketplace, naturally, is on Urbit itself, `~tirrel/the-marketplace`. It is more informal, and you negotiate with and purchase from a community member directly. This does require a certain level of trust! Some people prefer to negotiate partial payment upfront, and the rest after star delivery. You may be able to find better prices than on OpenSea, but don't count on it.

### How to Find the Owner's Ethereum Address From the Star Name

The easiest place to start checking out the star you're interested in is [network.urbit.org](https://network.urbit.org/). Type in the star's name along with the tilde, e.g. `~modsup`. You will then see on the right the `Azimuth Event Stream`, which is the star's history of ownership.

You can also go to [Urbit.live](https://urbit.live/) and type in the star's name. After you click `More Info`, you'll see the current owner of the star, which should be the Ethereum wallet address of the person you're considering buying from if the star isn't on OpenSea.

By the way, the star also has an Ethereum address, so it can hold funds and so on. This address is deterministically generated from the current owner's address. More on this below when we talk about the Master Ticket.

### How to See How Many Planets a Star Has Spawned

There are two good ways to check how many planets a star has spawned, and therefore how many stars it has available to spawn.

The first and simplest is to open [this giant list of events](https://gaze-exports.s3.us-east-2.amazonaws.com/events.txt) generated by the Azimuth tool.

Every time a planet or star has changed hands, or breached, or a star has spawned a planet, the event is recorded here. You can search for either the name of the star, or its Ethereum address, with CMD-F or CTRL-F (however you search for text on web pages). Searching for either the name or for the address of the star will find it.

For instance, I own a planet spawned by ~marnus. I can search for "marnus,spawned" and see every time ~marnus has spawned a star. Or I could search for "~marnus" and see every action ~marnus has taken on the network. If I wanted to buy the star ~marnus, I could search for its name and simply count how many planets it had spawned.

If you have the star's Ethereum contract address, rather than that of its owner, there is a second way to check how planets a star has spawned. Go to [Etherscan](https://etherscan.io/address/azimuth.eth#readContract). There, under Contract, click Read Contract, and you will see a long list of possible attributes of the star you can check:
        - 1. escapeRequestsIndexes
        - 2. getOwnedPoints
        - ...
        - 65. isRequestingEscapeTo

Of the many possible attributes you could check, you will want to look at `16. getSpawnCount`, and `32. points`. These should both read `0`.

### Taking Possession of Your Star

Now that you have bought a star, how do you get control of it? There are two main possibilities, and both involve Bridge, at [bridge.urbit.org](https://bridge.urbit.org/). 

First, you might have been sent the Master Ticket. This contains a username and a long passphrase. Use these to log in to Bridge. At this point, the seller still owns your star. You should immediately transfer ownership to your own wallet. You can then generate a new Master Ticket, or leave that till later. The old Master Ticket will be invalid as soon as you transfer ownership. You now control your star.

Second, when you purchased your star, the owner may have transferred ownership to your wallet address. This is a little more likely, because it's easy. Go to Bridge, and choose to log in using the wallet address. You will simply sign a transaction which verifies that you control the address which controls this star. You now control your star. Again, you may want to generate a Master Ticket, although you don't need to because no one else has this information.

#### Transferring a Star

If Alice is selling a star to Bob, they have two main options for transferring the star. 

First, Bob can pay Alice, and Alice can transfer the star to Bob's Ethereum address. This requires a certain amount of trust. The amount of trust required can be lessened by interacting with the person, of course, or by going onto Urbit and looking in ~tirrel/the-marketplace, and clicking on Reputations. There Bob could check if Alice has acquired a good or bad reputation; if she does not have a reputation there he can request one.

Second, Alice can place the star in escrow via Opensea. This doesn't require trust. This option requires more gas money to pay for extra transactions putting the star into escrow and getting it out.

Whichever option you take, the steps to transfer the star are pretty simple.

First, log in to Bridge as your star. As covered in `Taking Possession of Your Star`, you can log in using your Master Ticket or the wallet address which owns the star.

Within Bridge, click `ID`. Then, at the top you will see `Ownership Address` and `Transfer`.  After clicking on that, you will be invited to paste in the Ethereum address to which you are transferring ownership.

Paste in the wallet address to which you're transferring ownership. Then click `Generate & Sign Transaction`, and you are done. The transfer will cost money (gas).
    
### How to Change the Master Ticket for a Star

The Master Ticket for a star (or planet or galaxy for that matter) contains your Ownership Seed phrase, which you can use to create a new set of keys to your star. It also contains a passphrase which you can use to log on to Bridge.

To change the Master Ticket, or to generate one for the first time after you've acquired your star, simply go to `ID` and click `Reset` next to `Master Ticket`, and follow the instructions there.

Once you're done, you can download the PDF file for your Master Ticket. Keep it secret. Keep it safe.

### How to Use a Hardware Wallet

Once again, the [Urbit docs](https://urbit.org/docs/azimuth/azimuth/) contain a helpful explanation:

> A common security pattern is to have "hot" and "cold" wallets. For higher value points such as stars and galaxies, you may consider having your ownership address live on a "cold" wallet that never touches an internet-connected computer, and the various proxies on a "hot" wallet that is permitted to connect to internet-connected devices.
 
Because stars are valuable pieces of crypto property, you may want to store it someplace other than the cloud, a browser-based wallet, or even a wallet on your local computer. One common option is to buy a hardware wallet, essentially a secure thumb drive which otherwise works the same as any other wallet. This is sometimes called a "cold wallet," as opposed to a "hot wallet," which is internet-connected.

Often someone who wants to transfer crypto __off__ their "cold" wallet will transfer it instead onto their computer, and then from their computer-based wallet to wherever they want to send it. This way the hardware wallet is never connected directly to the internet, and stays cold.

Supposing you have a hardware wallet such as Trezor or Ledger, you can put your star on it by transferring ownership of the star from your current wallet address (such as a Metamask wallet address) to the hardware wallet address. Simply follow the steps in the previous section. To use Bridge with your star in future, you will need to connect your hardware wallet to Metamask and then to Bridge.

### To the Stars

That concludes our brief guide to buying a star. We're happy you believe in the future of Urbit. For next steps, you might check out our [Guides for Urbit Operators
and Community Leaders](https://operators.urbit.org/), and in particular the guide to [Running a Star](https://operators.urbit.org/guides/running-a-star).
