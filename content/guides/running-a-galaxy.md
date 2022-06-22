+++
title = "Running a Galaxy"
description = "By operating a galaxy, you have elected to participate in the network's infrastructure and governance. Operating a galaxy is an important job, and carries special considerations."
+++

# Galaxy operator's guide

Urbit's address space has 256 central nodes, called galaxies. By
operating a galaxy, you have elected to participate in the network's
infrastructure and governance. Operating a galaxy is an important job,
and carries special considerations.

Because galaxies are so rare and important, it is critical that you
treat custody of your keys very carefully. Never store your keys on a
computer or phone. Galaxies are extremely valuable cryptographic
property, so you should treat ownership of it similarly to the way you
would treat a very large amount of Bitcoin.

## What do galaxies do?

### Issue Identities

Galaxies are core network infrastructure and
Azimuth [PKI](https://urbit.org/blog/pki-maze) roots,
with the ability to issue identities (also called 'spawning'). Each
galaxy can issue 255 stars; the stars spawned by a galaxy will bear the
galaxy's `@p`, its pronounceable name like `~pel`, as its
suffix. For instance, `~pel` can spawn `~sampel`. These
stars are referred to as your children, and you are their parent (or
'sponsor'). Each star can issue 65,550 planets, or individual
identities. You can read more about Urbit ID
 [here](https://urbit.org/understanding-urbit/urbit-id),
and more about spawning in the [Spawning
Stars](#spawning-stars) section.

You can distribute these addresses as you see fit, but as a finite
asset, each star carries a monetary value. This value might be
influenced by factors like its `@p` or sigil, and your competence
and reputation as a sponsor. Addresses like stars are owned as ERC-721
NFTs, which you can transfer and sell.

Note that your galaxy can spawn stars on layer
2 if you migrate
your spawn proxy to layer 2 via Bridge. However, unlike a star, a galaxy
can never move its ownership key to layer 2, in order to preserve its
ability to vote. As a result, all non-spawning Azimuth transactions
(voting, transfers, proxy delegation, rekeying) will always take place
on layer 1.

### Networking

On the network, galaxies perform peer discovery and connection
assistance for
their children. Simply put, this means that your galaxy tells other
Urbit instances, or 'ships', where they
can find your children so that they can communicate directly with them
-- similar to asking a DNS server to tell you where to look for
google.com. If those ships are unable to establish a direct connection
with each other, your galaxy facilitates the communication by acting as
a proxy between the two of them, relaying packets through firewalls and
routers.

For this reason, availability is a critical necessity -- your galaxy
must be online and reachable as consistently as possible. Downtime
should be minimized to the best of your abilities, and the machine
running your ship should have the requisite resources to handle these
tasks. If you are unable to provide these services to your children,
they will find somebody who can, by 
[escaping](https://urbit.org/using/id/using-bridge%23escaping-your-sponsor) to another sponsor.

You may have noticed that this means you could technically bear
responsibility for the connectivity of \~16 million ships, but Urbit's
network is still young, and the numbers aren't quite there yet. As it
becomes necessary in the future, it is anticipated that these networking
tasks will be taken over by stars, which should ease the burden on
galaxies. There is no set threshold for this transition, but it is
worth bearing in mind.

### Sponsorship

By default, all stars that you spawn will treat you as their sponsor.
As outlined above, they will rely on you for networking. Sponsorship is
a voluntary arrangement between ships; either party can sever this
agreement at will. Sponsorship is recorded on the Azimuth PKI, so any
modifications will take place through Bridge. As a galaxy, you do not
have a sponsor, but can adopt new ships as a sponsor. You will need to
log into Bridge and pay a small amount of ETH to accept the
transfer.

### Software Updates

Galaxies also sign and distribute software updates. Currently, Urbit OS
is distributed from `~zod` to other galaxies, and from there to
stars and planets. In the future, this may change -- galaxies may push
their own operating system updates downstream. Over time, Urbit may
speciate into an ecosystem of many operating systems built on the same
primitives.

### Governance

In addition to day-to-day tasks, galaxies periodically convene to vote
on documents and proposals for changes to the Ethereum contracts that
govern the Urbit address space. Even if your galaxy has spawned all of
its associated points, it still has the ability and duty to vote on
governance decisions. Participating in governance will be described in
detail [later in this document](#galactic-senate).


## Service Providers

By default, your galaxy performs network services for its children, as
well as any planets they spawn. Galaxies occupy a convenient niche for
providing other services to them; extending your existing relationship
with your children to elective services is an obvious step.

Any services that might require a specialized dedicated host could be
offered by a galaxy. Services like 
[%btc-provider](https://github.com/urbit/urbit-bitcoin-rpc) ([Docker image](https://hub.docker.com/r/wexpertsystems/urbit-bitcoin-node)), WebRTC STUN/TURN, object hosting like S3, or operating a layer 2
roller are 
potentially valuable for your residents and beyond. Neither stars nor
galaxies have any specialized ability to deliver these out of the box --
your main advantages are your status as a Schelling point for your
children, and making use of your deeper infrastructural capacity.
However, an important consideration for providing digital services is
that you should separate running them from your galaxy itself. Try not
to run extraneous software on your galaxy to avoid burdening the host
machine. For the same reason, don't host groups on your galaxy; very
large groups can carry high resource costs. Use dedicated
 [moons](https://urbit.org/docs/glossary/moon) or
planets to host groups or demanding services.

Since you already deliver software updates, software distribution is an
obvious potential service -- as a highly available and trusted node,
your galaxy is a natural choice to host desks with software packages, or
even perform commercial distribution for developers.

A galaxy operator is also in a natural position to offer hosting
services, both for planets and stars. If you have the relevant skills,
you might make use of tools like Kubernetes and
[Docker](https://hub.docker.com/r/tloncorp/urbit) to
build an automated, scalable platform. Some existing providers and
developers have open-sourced some of the
[tooling](https://github.com/nisfeb/urbit-boot-automation) that
they have
[developed](https://github.com/CaptEmulation/urbit-docker-compose).

## Community

Galaxies vote on decisions about important changes to Urbit's software
and network. Your decisions can be better informed by remaining in
dialogue with other galaxy-holders about potential changes, especially
so that you can better understand the consequences of proposed changes
that you vote on. There are several formal channels for staying in touch
with other galaxy-holders:

-   An on-network private group; see
    [attestation](https://gist.github.com/galenwp/c071d91a582ba1c6885ae316f8e727de) instructions
    to delegate participation in this group to your planet
-   A Telegram channel is available for out-of-band communication
-   A galaxy-holder email mailing list

These channels are operated by Tlon; reach out to
[support@tlon.io](mailto:support@tlon.io) to request invitations.

## Buying a galaxy

If you decide to purchase a galaxy, it is your responsibility to
investigate its condition. Evaluate
whether it has been used to spawn stars, how many stars, whether they
have escaped to new sponsors -- and if so, why. Ask your seller about
[lockups](https://urbit.org/blog/value-of-address-space-pt3).

### OTC Desks

Galaxies rarely change hands, and are not usually listed publicly. If
you are interested in purchasing a galaxy, your best bet is through
solicitation through word of mouth. A good place to start looking is in
on-network groups like [The Marketplace](web+urbitgraph://group/~tirrel/the-marketplace),
a public group where over-the-counter point sales are coordinated, or
[Cryptocurrency Forum](web+urbitgraph://group/~sonwet/cryptocurrency-forum), a public group related to trading
cryptocurrency.

Because stars are very high-value items, it is advisable to use an
atomic swap service like
[OpenSea](https://opensea.io/) to
facilitate the transaction. Atomic swaps allow for trustless exchange of assets. Make sure you have funds in your receiving
wallet to cover the transaction
costs of
accepting the transfer, and any proxy delegation or transfers you might
want to perform. It is technically possible for a galaxy to
spawn its stars after it has been sold on OpenSea, but before its
purchase has been collected. This could potentially leave you with a
galaxy significantly less valuable than what you paid for; treat this
option with caution.

### Naked Galaxies

Periodically, you may see a 'naked' galaxy listed on a public market
like OpenSea. Naked galaxies have already spawned all of their stars,
which dramatically reduces their market value. You can easily check the
number of stars a galaxy has issued by using tools like
[Urbit.live](https://urbit.live/~marzod),
Tirrel's [network
graph](https://tirrel.io/graph/),
and
[network.urbit.org](https://network.urbit.org) (forthcoming).
You should independently research the existing obligations of buying a
galaxy which has already spawned stars; you will be expected to perform
networking services for any active points that the galaxy is sponsoring.
If this galaxy was a 'dark galaxy' that issued points without
participating in the network, it may suffer from reputational damage,
and its children may have escaped to other sponsors.

### Receipt of Galaxy

Treat the receipt of your galaxy with an abundance of caution. Consider
receiving your new ownership key under conditions of heightened
security, and moving it immediately to a master
ticket. You
can make use of sharding your ownership key when transferring to a
master ticket to allow for a
[multisig](https://en.wikipedia.org/wiki/Multisignature) configuration,
and storing the shards in separate physical locations. Use your proxy
keys for day-to-day operations. Your master ticket code and the
associated BIP39 mnemonic are equivalent to ownership of your point --
never share them with anybody or store your codes on a computer, and use
your master ticket as infrequently as you can to avoid exposure or
compromise. You can find more security guidance
[here](https://urbit.org/faq%23custody).

To transfer an incoming galaxy to a master ticket:

-   Send enough ETH to the same address you provided to the seller to
    cover  transaction
    [fees](https://watchtheburn.com/) (this
    will likely come to a few hundred dollars).
-   Log into
    [Bridge](https://bridge.urbit.org) with
    your 
    wallet, and  approve the [incoming
    transfer](https://urbit.org/using/id/using-bridge%23accept-your-transfer) of
    the galaxy. Note that you must pay a transaction fee.
-   Once the galaxy has been accepted, go to the 'ID' section in Bridge
    to transfer your key to a  [master
    ticket](https://urbit.org/faq%23master-ticket).
-   Download the 'Passport' containing your new private keys; never
    share these documents or store them on a computer.
-   Approve the transfers to your new addresses; note that this process
    requires you to approve several sequential transactions that will
    need to be paid for by the address you have logged into Bridge
    with.
-   Print the 'Passport' you were prompted to download.
-   Store your passport documents somewhere very safe, particularly
    your master ticket.

Take advantage of your [proxy
addresses](https://urbit.org/docs/glossary/proxies) to
delegate voting, spawning, and management privileges to different
addresses than your ownership key (see '[Key management](#key-management)' section below). Urbit's [HD wallet](https://urbit.org/docs/azimuth/azimuth%23the-urbit-hd-wallet) design
makes it easy to keep your ownership key locked in a box while you
perform typical operations with subsidiary keys, or re-derive those keys
if you lose them.

You can load individual seed phrases of the addresses in a hardware
wallet as recovery keys
([Trezor](https://wiki.trezor.io/User_manual:Recovery),
 [Ledger](https://support.ledger.com/hc/en-us/articles/4404382560913-Restore-from-recovery-phrase?support%3Dtrue)).
If you prefer to purely use a hardware wallet, instructions for a
 [hardware HD
wallet](https://urbit.org/docs/azimuth/azimuth%23hardware-hd-wallet)  analogous
to a master ticket are also available in the docs.

## Selling a galaxy

The value of a galaxy can be influenced by many factors, including
whether it has been booted, whether it has spawned any stars (or how
many stars it retains unspawned), how many of its children have escaped
to new sponsors, or the aesthetic value of its name and sigil. Generally
speaking, the less a galaxy has been used, the higher its value as a
point. A galaxy is most valuable when it has never been used, or spawned
any stars. Other less tangible factors that may influence its value
might include transferable commercial relationships and its reputation
as a network peer. Sales of galaxies are likely to be paid for with
cryptocurrency, particularly BTC and ETH.


As a seller, you should evaluate the reputation and intentions of any
potential buyer. Due to the critical role they could play, the purchaser
should be serious about operating it, have a strong understanding of
what obligations its purchase entails, and should ideally have relevant
experience. Evaluate how potential
buyers would contribute to the network, and how they could add value. If
your galaxy has spawned stars, make their operators aware of a planned
change in ownership.


Most galaxy sales take place privately. The best place to look for
buyers is on Urbit itself, particularly in groups oriented around
trading and digital assets, like [The Marketplace](web+urbitgraph://group/~tirrel/the-marketplace) or
[Cryptocurrency Forum](web+urbitgraph://group/~sonwet/cryptocurrency-forum). Using the network is beneficial both for casting a
wider net than word of mouth, as well as weighing informal reputation on
both sides of an exchange. It also selects for parties who are invested
in the network and might provide informed feedback.


Galaxies that are sold publicly are typically listed on
[OpenSea](https://opensea.io),
an NFT marketplace. This carries higher discoverability for potential
buyers, allows you to auction your point, and acts as a trusted
intermediary, in exchange for a 2.5% fee. However, this also precludes
you for screening partners, and publicly lists the final price that was
paid. Potential buyers may also be hesitant to make galaxy purchases on
OpenSea, due to the possibility of stars being spawned between purchase
and receipt.

## Key Management

[Azimuth](https://urbit.org/docs/glossary/azimuth) allows
operators to delegate privileges related to interacting with the
[PKI](https://urbit.org/blog/pki-maze) to
sub-addresses. This means that you can break up the ability to perform
different tasks into different keys; for instance, using a different key
to vote than you use to spawn stars. This has a strong security
advantage, by allowing you to avoid using your ownership key to perform
day-to-day tasks. For galaxies, these sub-addresses are as follow:

-   **Spawn proxy** is used to spawn points; as a galaxy, this is
    an extremely high-value key.
-   **Management proxy** can be used to set your networking keys,
    or to adopt or eject a child point.
-   **Voting proxy** is used to sign votes in the [Galactic
    Senate](#the-galactic-senate). See the [Assigning a planet
    voting rights](#assigning-a-planet-voting-rights) section below.
-   **Master ticket** can perform each of the above, plus the
    ability to transfer ownership and set the other proxies.

Transferring your galaxy to a master ticket also creates each of the
proxies. Log into Bridge with any of the proxies to perform the tasks
associated with it.

Only your master ticket ownership key can transfer ownership of your
ship or set proxies. You should avoid using your ownership key as much
as possible; if anything compromises any of your other keys, you can use
your ownership key to change them.

## Booting a galaxy

Booting your galaxy for the first time has the same syntax as a planet
or star you may have booted in the past; first, set your networking keys
in Bridge, and download your keyfile. On your server, download the
relevant Urbit binary, and execute it with the `-w` and
`-k`flags:

```
$> ./urbit -w pel -k /path/to/pel-1.key -p 54321
```

It's good practice to delete your keyfile after you've used it.
Specifying your Ames port is not strictly necessary, but is useful for
network configuration and firewall rules. 

Once you have booted your galaxy and spawned any stars, you will have
an obligation to keep your galaxy online and provide sponsorship to your
children. Spawning and transferring a point to someone else creates a
duty to participate in the network; without your services, your children
will be unreachable by other ships and will not receive software
updates. Neglecting this responsibility may result in reputational
damage and escape to other sponsors by your children.

## Hosting a galaxy

You are strongly encouraged to host your galaxy in a high-availability
data
center provider
like DigitalOcean, Google Cloud, Hetzner, or Vultr; alternately,
co-locating your own hardware in a datacenter can give you a deeper
level of control over your asset. Galaxies should also be run on a
static IP address. Your galaxy is a critical node on the
network, and must remain in communication with its children. Failure to
maintain availability will impact the ability of network participants to
communicate, and may result in damage to your reputation, or even lead
to your residents 'escaping' to new sponsors. Availability is the
fundamental responsibility of a galaxy operator.

Because networking is a critical function, it is advisable to shift the
resource burden of auxiliary services onto other instances; moons are
just as capable of running software as your galaxy.
[Moons](https://urbit.org/docs/glossary/moon) are
child instances whose keys are not tracked by Azimuth; your galaxy has
\~4 billion available to spawn at your discretion. Moons might be useful
for performing tasks that would otherwise burden your ship.

Keep an eye on the resources available on the ship's host, like memory
and CPU. If your galaxy is consistently performing very slowly, consider
upgrading the host machine.
[NetData](https://www.netdata.cloud/) and
[Zabbix](https://www.zabbix.com/) are
convenient open source tools for monitoring your server's
resources.

It is advisable to have a separate sponsor for your day-to-day planet.
If your galaxy sponsors your planet but becomes unresponsive, others may
be unable to alert you.

## Spawning stars

### Lockup Contracts

Each galaxy can spawn 255 stars. Some of your stars may
be unavailable for immediate spawning, because they are held by a
[lockup
contract.](https://urbit.org/blog/value-of-address-space-pt3) Most
galaxies already have their stars spawned to lockup contracts. Locked up
assets are usually made available to you over a period of time, but you
will still need to manually release them to yourself once they are
available. Additional details for this process can be found in the Stars
in lockup contracts section.

### Bridge

Spawning a star on layer 1 is an Azimuth transaction, so you will need
to use
[Bridge](https://bridge.urbit.org) to
perform it. If you have assigned an address as a spawn
proxy, you can use that to log into
Bridge and carry out the transaction.
Bridge is a browser-based
[interface](https://urbit.org/using/id/using-bridge&) for
interacting with the Azimuth contracts.

In the Bridge main menu, select 'Issue
point'. Here you can enter the
`@p` of the star and the recipient's address. This is a layer 1
transaction, so it will require ETH funds for the transaction costs in
either your ownership key address, or your spawn proxy, depending on
which is being used.

A galaxy can spawn a star on layer 2 if its spawn proxy is already in
the L2 address, and the star has not already been spawned. Layer 2 does
not impact your ability to sponsor or adopt a
point. You can read more about how layer
2 works in [this
post](https://urbit.org/blog/rollups).

## Swapping a star for `$WSTR`

`$WSTR`, or 'wrapped star', is a fungible token that bears a 1:1
correspondence with a star. This allows you to make use of your star in
DeFi tools like Uniswap or smart contracts. A `$WSTR` token represents 'a
star', abstractly -- not any particular star.

The `$WSTR` contract only works with stars that have [never been booted
or issued planets. 'Unkeyed' or 'inactive' refers to whether a
ship has set its networking keys -- a ship that has not had its
networking keys set cannot have been booted. The contract accepts the
transfer of an unkeyed star, and produces a token for the address that
initiated the transfer. Alternatively, anyone who possesses a token can
exchange it for a star. You can interact with the contract via its
official UI at [Star
Market](https://star.market).

If you've ever used Uniswap, these
processes will be familiar. To trade **stars for `$WSTR`**:

-   Allow the site to connect to your wallet in order to let it see the
    stars that it holds.
-   If you have more than one star, you can select one or more from a
    modal.
-   Use the 'Review Swap' button to confirm your transaction.
-   After confirming the transaction with your wallet, you'll see your
    new balance at the top of the page. Note that you will need to pay
    for the transaction fees.

In order to swap a **`$WSTR` for stars**, the process is the
same:

-   Connect your wallet that contains `$WSTR`, select the number of
    tokens you want to exchange.
-   Confirm the transaction with your wallet.
-   The star will be transferred to the same address as your funds.
    Note that you will need to pay for the transaction fees.

Trading in a `$WSTR` token will give you the star that was most recently
deposited into the `$WSTR` contract. If you deposit your star, there is
no guarantee that you will be able to exchange the token back for that
specific `@p`.

## Stars in lockup contracts

Most galaxies have stars committed to
lockup contracts. This means that they are not immediately available to
spawn or transfer. On a set schedule or under conditions specified to
you, stars will be available for release from lockup, and you will be
permitted to withdraw them. This maintains the scarcity of address
space, which makes an identity valuable and keeps the network
friendly.

To **withdraw an unlocked star**:

-   Authenticate into Bridge with your ownership key.
-   Navigate to the 'Lockup Contract' menu.
-   Under 'Locked', you can see the number of stars available to
    withdraw from lockup. Here you can specify the ETH address you want
    to withdraw to.
-   You can only withdraw one star at a time, and you must fund the
    transaction. If you do not have the available funds, send ETH to
    your galaxy's ownership address (you can find this in the 'ID' menu
    on Bridge). 
-   After the star has been transferred, you will need to accept the
    incoming transfer via Bridge, which carries another transaction
    fee.

Once your star is withdrawn, it is owned by your galaxy's ownership
address. You can log into Bridge using the galaxy's ownership key, and
select the relevant star to perform Azimuth operations with it, like
transfers and keying.

## The Galactic Senate

An important privilege available to galaxy owners is participation in
the Galactic Senate. In practice, this means periodically voting on
proposals or upgrades to the Ethereum contracts. Votes take place via
the Bridge 'Senate' interface.

The Galactic Senate votes on all changes to the Ethereum contracts, and
passes resolutions by voting on proposed documents. These documents
might be a statement of intent, recognition of fact, etc. Any changes to
the way the address space or key infrastructure works must take place
through this process.

Voting is always to accept or reject a proposal. Each galaxy can vote
once on a proposal, which will pass if it achieves a majority, with at
least 1/4 of all galaxies submitting a vote during the poll duration
period, and at least half of those voting to accept. Proposals that do
not achieve a majority can be re-submitted after a cooldown
period.

### Assigning a planet voting rights

Azimuth points have the ability to delegate privileges to
[sub-addresses](https://urbit.org/docs/azimuth/azimuth%23proxies),
so that you can avoid exposing your ownership keys. Voting on contract
upgrades takes place in Bridge, but you may find it more convenient and
secure to use a proxy to perform the voting operations. For this reason,
Bridge allows you to delegate voting rights to a proxy address, like
your day-to-day planet.

This is a layer 1 Azimuth operation, so it will require ETH in your
galaxy's ownership address to fund the transaction. If you don't already
know the address of the ship you are delegating to, log into Bridge with
its private key, select 'ID', and copy the 'Ownership address'
field.

Log into Bridge, and select, 'ID', then 'Voting key'. Enter the ETH
address that owns the point you want to use as a proxy. You will need to
confirm the transaction and pay the relevant fees. Once the transaction
has cleared, you will be able to vote with your voting proxy by logging
into Bridge with its key. Note that the address that carries out voting
must have funds to submit voting transactions.

### Past votes

To see past votes, you can look at the [closed + voting
tags](https://github.com/urbit/azimuth/pulls?q%3Dis%253Aclosed%2Blabel%253A%2522status%253A%2Bvoting%2522%2B) on
the Azimuth contract repository. This includes both contract upgrade and
document proposals, along with discussions. Note that discussion may
also take place elsewhere (e.g. in the private galaxy group).

You can also view a list of proposals that your galaxy has voted on in
Bridge, in the 'Senate' menu. This contains a list of Keccak256 hashes
linked to their original documents for document proposals, and Ethereum
addresses for contract upgrades. To view the history of individual
votes, you will need to examine the blockchain using a service like
Etherscan.

### Upcoming Votes

You will be notified of upcoming votes in the Galactic Senate via the
formal galaxy channels -- the private galaxy group on the network, and
the galaxy mailing list. As time goes on, expect announcements and
deliberation to shift more onto the network.

### Voting

When it comes time to vote on a new proposal or document, you can do so
within Bridge by authenticating and navigating to the 'Senate' menu item
from the home screen.

The Senate menu contains separate submenus for document and upgrade
proposals. Document proposals are text statements you can vote to
approve or reject -- this might be a statement of intent that needs
consensus, an announcement on behalf of the senate, or other measure
that is not reflected in code. Upgrade proposals are specific
modifications to the Ethereum contracts that govern the mechanics of
Urbit's address space.

For a document proposal, by convention the text displayed in Bridge is a
Keccak256 hash of the proposal text. You can examine the contents of the
proposal by clicking the hash's link -- you are encouraged to validate
the hash of the text manually, which you can do easily with an
[online](https://emn178.github.io/online-tools/keccak_256.html) [generator](https://keccak-256.cloxy.net/).

Compare the output to the hash of the proposal in Bridge and make sure
they are identical.

For upgrade proposals, the Bridge menu entry will contain the address
of a modified contract on the Ethereum blockchain.

Active document and upgrade proposals in Bridge have 'Accept' and
'Reject' buttons. Performing either of these actions is a layer 1
Azimuth transaction and will require funds for transaction fees. If you
are unable to register your vote due to funds, you can send ETH to your
ownership key or voting proxy, depending on which you are using to
vote.

### Submitting a Proposal

To submit a new proposal for voting, you will need to interact directly
with the Ecliptic contract. To submit a **contract upgrade
proposal**:

-   Deploy your modified contract to the blockchain.
-   Call `startUpgradePoll()` on the current Ecliptic with the
    address of the deployed contract.

For a **document proposal**:

-   Publish the document somewhere that it can be shared.
-   Generate a Keccak256 hash of the document's contents. You can use an
    [online
    tool](https://emn178.github.io/online-tools/keccak_256.html) or
    [do it
    yourself](https://solidity-by-example.org/hashing/)
-   Call `startDocumentPoll()` with the hash of the
    document.

Galaxies may publish their proposals via a pull request on the  Azimuth
[Github repo](https://github.com/urbit/azimuth/pulls),
before or after calling the poll function. If the proposal is approved
by the senate's on-chain votes, the change will be merged with the
master branch. This is a conventional practice, but you may modify or
ignore it. You can read more details
[here](https://github.com/urbit/azimuth/blob/master/senate.md).

## Future of Galaxies

The future of the network will be built by its owners and participants.
Galaxy owners hold a major stake and act as leaders. By voting on
contract upgrades and governance decisions, your judgment will impact
the shape the project takes. By operating your ship, distributing
points, and maintaining the network, you facilitate its growth and
contribute value and utility. The influence you have over the
distribution and governance of Urbit's address space conveys
extraordinary potential and deep responsibility.

At a point in the future that it becomes infeasible for galaxies to
perform networking services like peer discovery on behalf of all of
their children, there will likely be a decision to delegate these
functions downstream to stars, in order to distribute the load. What
were once the core functions of galaxies will be lifted, but there will
be other services to take their place in the future -- these may be
fundamental network tasks like storing Ames packets, or commercial
pursuits like renting out infrastructure, APIs, and blockchain services.
It is a natural choice for the ships you spawn to do business with you,
due to your default relationship and position of trust. History
demonstrates that there are great opportunities in occupying a major
nexus in a global network.

A galaxy might become a vertically-integrated provider that offers
hosting, specialized OS forks and subscription services, or it may be a
relatively hands-off piece of infrastructure that does little but push
updates. Some galaxy operators may break away to establish their own
networks; the strong security guarantees of cryptographic identity and a
modified networking stack would allow for parallel, self-contained
secure networks built on their own operating systems. In the future,
very large organizations or even governments may find it useful to
operate independent networks built around galaxies to take advantage of
these strengths.Remember that once it reaches stasis, the only thing
that is truly permanent is Nock -- everything else is system design and
can be modified, albeit with increasing friction down the stack. We
don't know what Urbit will end up being, but it needs your guidance to
get there.
