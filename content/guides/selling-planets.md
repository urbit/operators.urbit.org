+++
title = "What to know about selling planets"
description = "Planet distribution has been drastically simplified and pushed to near-zero cost for star owners. If you have a star, it's never been easier to start a business selling your planets."
+++

From late 2018 until early 2022, Urbit's identity layer existed solely on the 'Layer 1' Ethereum blockchain. While Ethereum has very strong advantages, selling or distributing planets on Layer 1 took some specialized skills. Layer 1 planets are NFTs -- transferring or receiving them requires interacting with the ETH blockchain through intermediary software, like MetaMask. Worse, high gas costs have made it prohibitively expensive for most people.

Fortunately, Urbit's [Layer 2](https://urbit.org/docs/azimuth/l2/layer2) launched in February. L2 means that the ownership state of an ID is computed by the Urbit network itself, rather than being computed by the Ethereum network. The result is still *stored* on Ethereum and inherits its strengths, like decentralization and independent verifiability. The benefit of L2 is that planets can be issued cheaply or for free, and distributed without any special software. 

Planet distribution has been drastically simplified and pushed to near-zero cost for star owners -- this transition has allowed a small ecosystem of independent businesses and community members to dispense planets at a [scale that was previously impossible](https://hatryx-lastud.tlon.network/newsletter/urbit-takeoff-is-here). If you have a star, it's never been easier to start a business selling your planets.

## What to know about L2

Selling L2 planets means selling planet codes. **Planet codes** are one-time passwords, issued by stars, used to redeem a planet via Bridge. 

- A star needs to [migrate](https://operators.urbit.org/guides/layer-2-for-stars#user-content-migration) its spawn proxy or ownership key onto Layer 2 before it can issue L2 planet codes.

- You can generate planet codes [in Bridge](https://operators.urbit.org/guides/layer-2-for-stars#user-content-spawning-planets-on-l2), then copy them individually or export them in a CSV spreadsheet. You can generate planet codes for free using Tlon's roller (Bridge's default behavior), or operate your own roller and pay for them at a reduced cost vs L1.

- Each planet code you generate can be used to spawn a single, specific planet.

- Planet codes are no longer valid once they've been claimed. Unclaimed codes **continue to appear** in subsequent Bridge CSV exports until they are claimed.

This last point is important to consider. If you generate a list of 20 planet codes, distribute them, and then generate another 20 planet codes, you may see some from your first batch in the second export. This is because some recipients may not yet have claimed their codes. If you are manually exporting codes from Bridge, you will need some kind of system to account for previously distributed planet codes, like a simple script that can check for duplicates against a master list of sold planets.

Selling L2 planets is like selling passwords. You don't need any special Web3 software or cryptocurrency tools to sell or transfer them -- distribution via email or even a piece of paper with a code printed on it works perfectly fine.

## Layer 2 sales methods

Below are some methods of selling planets that have been mapped out by the community thus far, listed from least to most complex.

### Manual/OTC sales

The basic requirements for selling planets are an operational star and planet codes generated in Bridge -- you can distribute codes through any text medium. Some star operators sell planets via one-on-one chats or on-network groups dedicated to sales, or create a web presence advertising sales channels with contact information.

- **Advantages:** Allows for flexibility in payment methods and minimal technical overhead.
- **Considerations:** Lacks the ability to scale, since all sales are processed manually.
- **Examples:** [The Planet Store][https://www.theplanet.store/], [Galactic Embassy Hotel](web+urbitgraph://group/~fipdel/galactic-embassy-hotel)
- **Level of complexity:** Low

### Hosted e-commerce tools

Layer 2 opens up the use of conventional e-commerce sales platforms and tools for sales and distribution. In practice, this looks like creating a store on a platform like Gumroad and creating an inventory from your generated planet codes.

- **Advantages:**  Allows star operators to collect credit card payment; relatively low technical burden. 
- **Considerations:** Minimal automation -- if you generate 100 codes, you will need to manually enter 100 items in inventory. Operator is subject to terms and conditions of the sales platform.
- **Examples:** [~mocbel house](https://planets.mocbel.house/), [~lanlyd](https://planets.lanlyd.net/)
- **Level of complexity:** Low

### Self-hosted software stack

Running your own sales stack with point-of-sale software like [BTCPayServer](https://btcpayserver.org/) gives you full control of your sales platform, and allows for greater UX customization than traditional retail tools. In addition to a point-of-sale, you may also wish to create or adapt an external inventory system, or customize the distribution mechanism using email or webhooks.

You can find a tutorial for adapting BTCPayServer to selling planet codes via email [here](https://urbit.media/a/~sitful-hatred/urbit-media-6867/170141184505504169778500419536142991360).

- **Advantages:** Autonomy, no processing fees. 
- **Considerations:** Higher maintenance burden. Assembling a stack from scratch rather than adapting an existing one requires deeper technical skill.
- **Examples:** [Wexpert Systems](https://wexpert.systems), [Networked Subject](https://subject.network)
- **Level of complexity:** Intermediate

### Custom sales stack

If you're a capable web developer, this option allows for the greatest flexibility. Writing a custom sales platform allows you to make use of whichever payment methods you prefer, and create systems that will allow you to scale as much as you need. 

You can make use of existing tooling like [azimuth-cli](https://github.com/lukebuehler/azimuth-cli) to assist with automating L2 transactions.

- **Advantages:** Allows for a more polished UX and greater automation.
- **Considerations:** Much more complex than other options; requires significant technical skills and labor hours. Full responsibility for maintenance and bugs.
- **Examples:** [Azimuth Shop](https://azimuth.shop/)
- **Level of complexity:** High

## Layer 1 sales methods

This guide has focused on L2 planets because of the diminished cost and overhead for distribution, but if you want to preserve your star's L1 status or trade your planets as ERC-721 tokens, you can take advantage of existing Web3 tooling. Transferring NFTs requires more experience and domain knowledge on the part of both the seller and buyer, in addition to higher transaction costs. As a result, it's now more typically used for stars and galaxies than planets.

However, if you prefer to sell planets on Layer 1, there are a few options. In addition to OTC sales and manual transfers, there are two broad categories of L1 sales platforms -- hosted/managed and custom-made. Both categories present a web catalog of available IDs, which are purchased by connecting a browser-based wallet like MetaMask and exchanging ETH. 

### Hosted L1 sales platforms

L1 ID's are ETH NFTs, and can be sold on several NFT marketplaces. Star operators can list their available IDs on these platforms, and in exchange for a cut of revenue, the host service takes care of backend management and processing transactions. In addition to OpenSea, the most well-known, Urbitex is a platform specifically designed to buy and sell L1 Urbit ID's.

- **Advantages:** Offload technical burden of L1 transactions and security; network effect and reputation of shared platform. 
- **Considerations:** L1 transactions carry high transaction costs; fees collected by host.
- **Examples:** [urbitex](https://urbitex.io), [OpenSea](https://opensea.io/collection/urbit-id)
- **Level of complexity:** Low/moderate

### Custom L1 sales platforms

If you're not a fan of giving up a cut of your revenue to a marketplace, or you simply prefer full control of your sales flow, you can look to the examples of `urbit.me` and `urbit.live` for what an L1 marketplace might look like. These services are custom-built by specific star operators. Customers can purchase NFTs via their browser's wallet like MetaMask.

Like `azimuth-cli` for L2, there is the [azimuth-js](https://github.com/urbit/azimuth-js) library available for programmatic interaction with the L1 contracts.

- **Advantages:** Full control of platform and UX; accommodate trustless atomic swaps.
- **Considerations:** Significant technical overhead and development; full burden of maintenance.
- **Examples:** [urbit.live](https://urbit.live/), [urbit.me](https://urbit.me)
- **Level of complexity:** High
