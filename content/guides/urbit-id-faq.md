+++
title = "Urbit ID FAQ"
description = "Frequently asked questions about Urbit ID."
+++



## What is Urbit ID?

Urbit ID is the identity system utilized by Urbit, which associates to each [ship](https://developers.urbit.org/reference/glossary/ship) a public and private key used to establish encrypted connections between one another and to guard private data. For [planets](https://developers.urbit.org/reference/glossary/planet), [stars](https://developers.urbit.org/reference/glossary/star), and [galaxies](https://developers.urbit.org/reference/glossary/galaxy), this is achieved with a set of Ethereum smart contracts called [Azimuth](https://developers.urbit.org/overview/azimuth). Keys for [moons](https://developers.urbit.org/reference/glossary/moon) and [comets](https://developers.urbit.org/reference/glossary/comet) are handled within Urbit.

## What are stars, galaxies, and planets?

Urbit IDs come in three classes: galaxies, stars, and planets. The length of an identity’s name will tell you its class. Galaxies are 8-bit and have names like `~mul`. Galaxies issue 16-bit stars (`~dacmul`), which can themselves issue 32-bit planets (`~laptel-holfur`).

Planets are intended for everyday use by individuals, and there are 4.3 billion of them (two to the 32nd power). Stars and galaxies, on the other hand, are meant to act as network infrastructure: on the [Urbit OS](https://developers.urbit.org/overview/arvo) network they provide routing and are responsible for distributing software updates.

## How can I spend less to get a planet? 

Using Ethereum has become much more expensive since Urbit ID first launched. To rectify this, Tlon has created a system referred to as [naive rollups](https://developers.urbit.org/reference/glossary/rollups), or "layer 2". By reducing the size of transactions, batching them together, and moving computation off-chain to your urbit, it is now possible to perform Urbit ID transactions free of charge and without any prior knowledge of blockchains, cryptocurrency, or Ethereum. This is easily done using [Bridge](https://developers.urbit.org/reference/glossary/bridge), our web interface for managing your Urbit ID.

## What is Azimuth?

[Azimuth](https://developers.urbit.org/overview/azimuth) is what we call the set of Ethereum contracts that make up a general-purpose decentralized PKI ("public key infrastructure") utilized by Urbit ID. It keeps a record of which Ethereum addresses own which Urbit planets, stars, and galaxies, as well as the public keys associated with those ships.

It's also kind of a [cool astronomical concept](https://en.wikipedia.org/wiki/Azimuth).

## How many planets, stars, and galaxies are active?

The raw data on most Urbit ID / Azimuth events that have occurred can be found [on the Azimuth website](https://azimuth.network/stats/events.txt). We’re currently working on generalized tooling for viewing these events.

You can also inspect and execute functions in the [azimuth.eth](https://etherscan.io/address/azimuth.eth#code) contract on Etherscan.

## What are comets and moons?
In addition to the three classes of identities mentioned above, there are two other kinds of Urbit [ship](https://developers.urbit.org/reference/glossary/ship)s that are _not_ registered in the Urbit ID / Azimuth contracts.

[Moons](https://developers.urbit.org/reference/glossary/moon) are 64 bits, issued by [planets](https://developers.urbit.org/reference/glossary/planet), and have names like `~doznec-salfun-naptul-habrys`. Moons are meant for connected devices: phones, desktops, smart TVs, digital thermostats, and other IoT devices. Moons are subordinate to their parent planet. A strong analogy here is that ordinary social media sites are somewhat like planets, and your account on them is a moon. Urbit elevates everybody to the level of planet.

[Comets](https://developers.urbit.org/reference/glossary/comet) are 128 bits and have no parents. They can be launched by anyone for free. Since their identity is not maintained on the blockchain, they will likely not be trusted by default by others on the [Urbit OS](https://developers.urbit.org/overview/arvo) network, though you shouldn't have any problem until the network grows much larger. They have long, hard-to-memorize names, like `~racmus-mollen-fallyt-linpex-watres-sibbur-modlux-rinmex`.

## What is a `@p`? Why is my username generated for me?

A `@p` ([pronounced](https://urbit.org/docs/hoon/hoon-school/hoon-syntax#reading-hoon-aloud) _pat-pee_) is a name like `~zod` or `~lodleb-ritrul` composed of pronounceable, three-letter phonemic elements like `zod`, `lod`, `leb`, `rit` and `rul`. Shorter names, such as `~zod` and `~marzod`, are assigned to [ship](https://developers.urbit.org/reference/glossary/ship)s with special duties on the [Arvo](https://developers.urbit.org/overview/arvo) network galaxies and stars, respectively. Longer names like `~palfun-foslup` are identities for typical users.

These names map directly to a corresponding number in the Urbit ID address space. Galaxies occupy the 8-bit address space, so any galaxy is actually a number between zero and 255. Stars occupy the 16-bit address space, and planets occupy the 32-bit address space.

Your name is generated for you as a solution to [Zooko's triangle](https://en.wikipedia.org/wiki/Zooko%27s_triangle), which roughly states that names on a network protocol can only be two of (i) human-meaningful, (ii) secure, and (iii) decentralized. Urbit chooses (ii) and (iii), while something like DNS chooses (i) and (ii).

Regardless, you can always choose to set your nickname in Landscape, so if you wish for a different name to be displayed then you have the freedom to do so.

## Can I change my `@p`?

Nope. There is a 1:1 mapping between name and identity. Think of your `@p` sort of like a phone number. It's just a random synthetic name that doesn't leak any personal information about you.

## How do I get an identity?

The easiest way is to find a friend who can give you one. They're out there — just ask around. You'll have a good chance of meeting one if you join Urbit Community, the default group for new [ship](https://developers.urbit.org/reference/glossary/ship)s at `~bitbet-bolbel/urbit-community`, as a [comet](https://developers.urbit.org/reference/glossary/comet) and contribute pleasantly to the conversation.

Or, if you must, try an ERC-721 (NFT) exchange (Google or Twitter should help you with this). This will probably involve a purchase and a transfer to an Ethereum address that you own. We recommend using [Bridge](https://developers.urbit.org/reference/glossary/bridge), available at [https://bridge.urbit.org](https://bridge.urbit.org), to access the address that the identity is transferred to.

## How do I transfer an identity to someone else?

Access the Ethereum address that holds the identity you wish to transfer via [Bridge](https://bridge.urbit.org).

## What is the best way to access my Urbit ID?

We recommended using [Bridge](https://bridge.urbit.org) for all Urbit ID-related operations. It’s great for managing your identities, as well as for viewing information about identities you don’t own.

Be careful about using online versions of Bridge not hosted on urbit.org. Since Bridge touches your private keys, it can also steal them.

## Why aren't there more planets?

Urbit is designed to be as simple as possible. The sponsorship tree for Urbit ID simply expands by squaring the size of the last tier. That is, there are <span class="mono">2^8^ (256)</span> [galaxies](https://developers.urbit.org/reference/glossary/galaxy), <span class="mono">(2^8^)^2^ = 2^16^ (~65K)</span> [stars](https://developers.urbit.org/reference/glossary/star), <span class="mono">(2^16^)^2^ = 2^32^ (~4B)</span> [planets](https://developers.urbit.org/reference/glossary/planet). There are <span class="mono">2^64^</span> [moons](https://developers.urbit.org/reference/glossary/moon) — but moons are tethered to their planet, unlike stars and planets.

This pattern exists because it’s a simple way to enforce the scarcity of addresses and build a friendly network. When a tier of the address space begins to be populated, we start populating the next tier down. When Urbit nears the limit of <span class="mono">2^32^ (4B)</span> planets, we’ll figure out a way to populate the <span class="mono">2^64^</span> moons. The galaxies that govern the Urbit ID contracts can always vote to upgrade them — and we expect that they will.

The problem with populating the moons now is that <span class="mono">2^64^</span> is a _really, really big_ number. We’ll need some way of differentiating between humans and their devices (to prevent devices turning into rogue botnets). But that’s a hard problem, and we prefer to start with the simplest possible solution before solving hard problems. The current scheme works. Once we need to update it, we’ll figure it out.

The number of addresses is in a sort of 'Goldilocks zone' for preventing spam. Too many addresses will result in them being very cheap and thus spammers can just acquire more once they get blocked. Too few addresses and they end up too expensive for the average user. The technical term for what the finite address space bestows upon the network is [Sybil resistance](https://en.wikipedia.org/wiki/Sybil_attack), a very important property for any decentralized network.

It’s also worth noting that, while there are almost 8B people on Earth, there are almost certainly not 8B internet users. Facebook has about 2.5B users, Apple has about 1B. Urbit has a long way to go before we get close to <span class="mono">2^32^</span>.

(For more background on why Urbit ID is the way it is, read [this](https://urbit.org/understanding-urbit/urbit-id/).)

## I have a galaxy or star with lockup conditions. How does this work?

There are two kinds of release schemes for locked up assets: linear and conditional.

In either scheme, you start out being able to take one star out of lockup, regardless of the terms set around the lockup as a whole. This way, you get to participate with a star right away. Go do something cool!

If your lockup involved a [galaxy](https://developers.urbit.org/reference/glossary/galaxy), all of its [stars](https://developers.urbit.org/reference/glossary/star) will be locked up, but you will have immediate, lock-free control of the galaxy. You will likely need it to use that star.

Note that the "releasing" of stars just means that they become available for you to claim. They don't automatically get transferred to you; you have to withdraw them from the appropriate lockup contract.

Linear release is the simplest: your stars will be released linearly over a period of time. Most often this is a period of four years. If you have four stars in lockup, that means you will be able to withdraw one star per year. In many cases, there is also an initial windup period which has to pass before linear releasing begins, typically one year. Since Azimuth launched in January 2019, the linear release will begin in January 2020.

Conditional release is a bit more complicated. If your stars are in conditional lockup, they're likely divided over three so-called tranches. Each of these unlocks only after a unique condition is met. Since it's difficult to verify things about the real world using smart contracts, the [Galactic Senate](https://developers.urbit.org/reference/glossary/senate) verifies that they've been met. Once the Senate marks a condition for a tranche as cleared, it starts releasing linearly over the period of a year.
