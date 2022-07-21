+++
title = "Running a Star"
description = "As a star operator, you should gain familiarity with what your star can do, what is expected of it, and how to perform the tasks associated with its custody."
+++

# Star operator's guide

Stars are an identity class that play a specialized role, acting as a
combination between a certificate authority, ISP, and software services
provider, with a mix of required and voluntary services. There are
65,280 stars, each with a unique, two-syllable `@p` name, like
`~sampel`. A star is a natural business, and keeping your customers happy
is your basic responsibility, but it also carries duties to the rest of
the network. As a star operator, you should gain familiarity with what
your star can do, what is expected of it, and how to perform the tasks
associated with its custody.


## What do stars do?

### Issue Identities

Stars distribute planets. Each star is capable of issuing 65,535 unique
planets; this is their most important intrinsic ability. You can
[generate](https://github.com/tylershuster/venetia) a
list of all of the planets that can be issued by a specific star,
including those containing English words, or sorted [by
sigil](https://github.com/urbitme/venetia-sigil), and you can spawn 
any of the unspawned planets belonging to your star.


### Sponsor Planets

Operating a star means not only spawning, but also sponsoring planets.
Spawning is the act of issuing a planet, and sponsorship is providing
network and software services to the planets you
spawn. Most importantly, your star
delivers updates to the planets it sponsors. It is critical that your
star is running and available at all times. In the future, stars will
take on more roles as network infrastructure, and take over tasks
currently performed by galaxies.



### Social Moderation and Reputation

You are also responsible for the ships you sponsor to a degree. If a
planet you sponsor is abusive, others may ask you to take corrective
action by warning or de-sponsoring the ship in question. Note that this
isn't a common occurrence; unilaterally revoking sponsorship should be
considered the nuclear option.
Right now this
is a system of norms and expectations, but you should expect different
kinds of reputation frameworks to be developed in the future. As a star,
your reputation is particularly important -- nobody wants to be thought
of in the same terms as a shady bulk email provider, and others would be
disincentivized from doing business with you.



Sponsorship is a two-way street. All networking between ships is
voluntary. If you develop a reputation for facilitating abusive planets,
others ultimately have the option of ignoring you or the ships you
sponsor. Sponsorship requires mutual assent, and either you or a
sponsored planet can terminate your relationship without intervention
from the other party. Eventually, formal reputation systems may be
expected to play a role in this calculus.



### Voluntary services

While spawning and sponsoring planets, and
social moderation make up the primary responsibilities of all star
owners, there are additional voluntary actions that star holders can do
to provide utility to their children. Services like these are not
obligatory, but the planets you spawn and others may find them useful.
Services can also be turned into lines of business -- others may be
willing to pay for you to take care of the technical work involved in
setting up and maintaining additional infrastructure. Examples can be
found in the 'Services' section below.

### OTA delivery

Urbit's operating system, Arvo, is updated on the fly without the need
for system restarts or manual intervention -- what is called 'over the
air', or OTA updates. New updates are published by galaxies, then passed
to the stars beneath that galaxy, where it cascades down to planets and
moons. Your star is responsible for delivering updates to all the
planets beneath it.

As mentioned, OTAs flow galaxy → star → planet; if you are experiencing
issues pushing or receiving updates, you can narrow down the issue by
figuring out at which step it is breaking. It is a good idea to sponsor
your own personal planet with your star, so that you can passively
monitor expected functionality. This only
applies to stars that have spawned planets, which should be active on
the network.

Under the hood, updates work by syncing file system branches from your
sponsor galaxy to your star, and syncing a copy of those branches to
your sponsored planets. These branches are called desks -- your star's
desks are copied to your planet, and copied from there to its moons. You
can check where your desks are syncing from by entering `+vats` in
the dojo. This will enumerate the desks you subscribe to, their hashes,
and the source desks they sync from.

You can change your subscription to another
galaxy at the system home screen by
navigating to 'System Preferences' \> 'System Updates', and entering a
`@p` in the 'Switch OTA source' field.

When new OTAs are pushed to the network, an email is sent out to the
[urbit-dev](https://groups.google.com/a/urbit.org/g/dev) mailing
list with release notes and the new base hash. You can be alerted to new
updates by subscribing to this list. Under ordinary circumstances, OTAs
ought to trickle down to your planet within a small amount of time,
almost always within an hour.

How can you tell whether OTAs are being delivered? All ships
display a truncated hash value in their system menu -- look for a small
box at the bottom with a five-character alphanumeric string. This should
match the last five characters of the hash value from the release notes
in the email. Alternately, enter `+vats` in the dojo to print
debug information, including the current base hash and the hashes and
sources of your other desks.

If you or another planet are not receiving OTAs from your star, check
the planet's and star's base hash. If the star hash differs from the
planet's, there is either a connectivity issue between the two, or the
update installation is failing on the planet. 

Software distribution on Urbit works in the same way as OTA delivery: a
ship installs a desk from a remote ship, and subscribes to updates to
that desk. Stars are well situated to act as software distribution
nodes, since the same things that make them useful for updates are
useful for this purpose, and many ships may already be subscribed to
them.

## Services

As a star, you are a natural Schelling point to provide services for
the planets you spawn. The following services are all elective, but act
as examples of useful services for your customers and residents.
Services might be offered gratis or as a commercial service. Services that run on Urbit ships should be delegated to moons so that they don't slow down the core services your star provides.

### Bitcoin

Urbit ships with a native app that enables peer-to-peer Bitcoin
payments. `%btc-wallet` transparently handles the process of
exchanging transient BTC addresses to facilitate transactions between
`@p`'s, but this system still requires a relay node to send
commands to a Bitcoin full node. Casual pilots may not have the
resources or experience to set up a full node on their own, but
connecting to an existing service from their provider is an obvious
choice.

In order to facilitate Bitcoin transactions, you need to run a full node
with a specific configuration and [software
stack](https://github.com/urbit/urbit-bitcoin-rpc). You can use a [Docker
Container](https://hub.docker.com/r/wexpertsystems/urbit-bitcoin-node) to
simplify deployment and scaling. 

Once your blockchain is synced and the stack is ready to go, you'll
connect the `%btc-provider` app to your full node, then whitelist
any clients or groups that you want to allow access: 

```
dojo> :btc-provider +bitcoin!btc-provider/command [%add-whitelist %kids ~]
dojo> :btc-provider +bitcoin!btc-provider/command [%add-whitelist [%groups groups=(sy ~[[~sampel %group-name]])]]
dojo> :btc-provider +bitcoin!btc-provider/command [%add-whitelist [%users users=(sy ~[~wallet-hodler])]]
dojo> :btc-provider +bitcoin!btc-provider/command [%add-whitelist %public ~]
```

Note that running `%btc-provider` and a full node on the same
machine as your star may prove burdensome, so it may make sense for you
to delegate it to another machine, as well as running `%btc-provider` on a
moon.

### Rollers

Urbit's layer 2 solution, [naive
rollups](https://urbit.org/blog/rollups),
moves the computation involved in modifying the Azimuth PKI off the
Ethereum blockchain. Instead, state is calculated by ships on the Urbit
network, and condensed batches of modifications are periodically
published to the blockchain by 'rollers', saved as data rather than
executed as code. This cuts the costs of spawning or modifying points
dramatically compared to the layer 1 Azimuth system.

Tlon operates a roller which submits batches once a day, and covers the
cost of those submissions. However, all ships are capable of operating
as a roller, and you may consider doing
so as a service to your children or the public network. Stars might
offer on-demand roller submissions, submissions on a high-tempo
schedule, or very large batches of transactions.

### Object storage

Due to Urbit's current memory limits, it doesn't make sense to store
large media inside of a ship's file system. Instead, connectors exist
that allow you to automatically upload media through the Groups
interface to a file storage service, then simply store the URL. This
allows a ship to host its own images, without relying on "free" services
or stuffing its memory with large files. These systems and their
backends require resources, setup and maintenance -- handling these
tasks would be valuable for other ships.

These connectors currently point to two systems --
[S3](/manual/os/s3),
an API for object storage originally developed for AWS, and
[LFS](https://github.com/aquarial/urbit-lfs-filehosting),
a system for object storage developed for Git. Both of these systems are
standards and are not bound to particular vendors -- they're just ways
of storing and retrieving data. Minio is a free S3-compatible service you
can run on your own server. Urbit's LFS system features explicit
accomodations for 3rd party hosts, like storage quotas.

### Adoption

Newcomers sometimes buy planets sight-unseen from NFT sales platforms,
boot for the first time, and discover that they do not receive software
updates. You may receive a request to act as a sponsor for these
orphaned planets.

Adoption is a simple process, but it's a two-way operation. To adopt a
planet, they must [escape their original
sponsor](/manual/id/using-bridge%23escaping-your-sponsor) and
set your star's `@p` as their sponsor, which they can do in Bridge. You
must also accept by logging into Bridge with your ownership or
management key, then selecting 'Requests' within the 'Residents' menu,
and accepting the incoming sponsorship
request.

Note that on layer 1, this can cost a little bit of money, but it can
be performed for free using Tlon's roller for layer 2 ships, like all
layer 2 transactions. Stars can still sponsor planets that are on
another layer -- for instance, there is no problem with a layer 2 star
adopting a layer 1 planet.

### Hosting planets

Urbit carries an ethos of self-reliance and autonomy, but not every
person can be expected to keep their laptop running 24/7 or run their
ship on a Pi in their bedroom. Hosting as a commercial activity is
another way to provide services to the ships under your star. At the
simplest level, you might run a handful of ships on VPSes, and mostly
take care of DNS and networking. If you have the relevant skills, you
might make use of tools like Kubernetes and
[Docker](https://hub.docker.com/r/tloncorp/urbit) to
build an automated, scalable platform. Some existing providers have
open-sourced some of the
[tooling](https://github.com/nisfeb/urbit-boot-automation) that
they have
[developed](https://github.com/CaptEmulation/urbit-docker-compose).

If you are acting as a host, follow the spirit of the [Urbit
ethos](https://urbit.org/blog/precepts).
Embody the values of digital freedom and autonomy. If a customer wants
to migrate their ship, allow them to download their pier data without
difficulty. Protect your customers' privacy, and avoid unnecessary
tracking. A planet is a deeply personal object, so treat the data you
host with respect and caution.

### Software distribution

Software distribution on Urbit works by syncing desks between ships,
which maintain subscriptions to their source desk -- the same way OTA
updates are distributed. This is similar to a folder of code downloaded
from another computer onto your ship that also downloads updates
automatically. Since this is a decentralized network, there is no
central app store, only ships sharing with other ships. One way stars
may set themselves apart is by performing distribution -- a star might
specialize by sharing programs written by its residents, games, or
providing services for commercial distribution on behalf of others. Some
software might also take advantage of a star acting as a proxy to
external services like blockchains, or as a trusted intermediary between
parties.

## Buying a star

There are several general means for purchasing a star. Note that this
will almost always be an exchange for cryptocurrency like Bitcoin or
Ethereum, though you might be able to find individual sellers who take
fiat. Be sure to investigate the transaction history of a star -- you
can do this trivially by searching for it on
[Urbit.live](https://urbit.live/~marzod).
 Stars can be 'virgin', meaning they have not spawned any planets, or
otherwise been used. Unspawned stars carry a higher price; the price of
a given star might also be influenced by its `@p`, sigil,
reputation, or other intangibles.

-   **Direct purchase** -- You can purchase a star directly from
    somebody else, in an unmediated exchange. A good place to look for
    sellers is in groups related to trading Urbit IDs and
    cryptocurrency, like [The Marketplace](web+urbitgraph://group/~tirrel/the-marketplace) and [Cryptocurrency Forum](web+urbitgraph://group/~sonwet/cryptocurrency-forum).
    
-   **Markets** --
    [OpenSea](https://opensea.io) is
    an NFT marketplace. You can find both layer 1 planets and
    [stars](https://opensea.io/collection/urbit-id?search%255BsortAscending%255D%3Dtrue%26search%255BsortBy%255D%3DPRICE%26search%255BstringTraits%255D%255B0%255D%255Bname%255D%3Dsize%26search%255BstringTraits%255D%255B0%255D%255Bvalues%255D%255B0%255D%3Dstar) for
    sale, denominated in ETH and exchanged via escrow.
-   **Exchanging $WSTR** -- If you purchase or otherwise receive a
    `$WSTR` token, you can exchange it for a star using [Star
    Market](https://star.market) ([more
    below](#swapping-a-star-for-wstr)).

Purchasing a star means taking custody of an ERC-721 token. In concrete
terms, you will be on the receiving end of an Azimuth transaction which
will assign ownership of a point to an address you control, in the same
way as buying a layer 1 planet. If you don't have experience with
handling cryptocurrency, spend some time learning how to manage an
Ethereum wallet. Stars are high-value objects and should not be handled
inattentively.

## Selling a star

Your options for selling a star are a mirror of the options to buy one
-- directly, through a mediated platform, or via `$WSTR` token. If you
list your star on OpenSea, note that the fiat value of the listing will
fluctuate with ETH.

You can get an idea of the current star prices by checking on current
OpenSea listings, looking at the recent sales statistics on
[urbit.live](https://urbit.live/stats),
and checking the value of the `$WSTR` token. As of writing, there is a
relatively slow-and-steady volume of public star sales, but star tokens
are expected to contribute significant market liquidity. See [Swapping a
star for $WSTR](#swapping-a-star-for-wstr) below.

Be forthright about the history and background of any star you sell. If
you have spawned planets that rely on your services, notify both any
potential buyers of the obligations to your existing residents, as well
as notifying your residents of an imminent change. Consider reaching out
to the planets you sponsor via an Urbit group, or out-of-band
communications like a newsletter or website. If you are selling a star
that has an inactive sponsor, or one that has been de-sponsored, it is
your obligation to let the purchaser know this ahead of the sale.
Similarly, let them know about the number of points it has issued, and
any services that its residents are making use of. A responsible buyer
should be willing to accommodate your existing duties.

## Claiming a star from Bridge

Once you have purchased a star, authenticate into
[Bridge](https://bridge.urbit.org) with
the wallet that received the transfer. You will be greeted with an
incoming transfer prompt, and you will be required to fund the
transaction with a small amount of ETH. If you do not have the funds to
accept the transfer, you can send ETH to the same address that is
receiving the star.

Take advantage of your [proxy
addresses](https://urbit.org/docs/glossary/proxies) to
delegate spawning and management privileges to different addresses than
your ownership key (see 'Key management' section below). Urbit's [HD
wallet](https://urbit.org/docs/azimuth/azimuth%23the-urbit-hd-wallet) design
makes it easy to keep your ownership key locked in a box while you
perform typical operations with subsidiary keys, or re-derive those keys
if you lose them.

Stars are valuable assets, so consider transferring yours to a [master
ticket](https://urbit.org/docs/azimuth/azimuth%23master-ticket) (Urbit's
paper HD wallet), or using a hardware wallet to manage it. Never reveal
the master ticket code or wallet seed phrase to anything other than
Bridge or a wallet you trust, or store either on a computer.

To send your incoming star to a master ticket:

-   Send enough ETH to the same address you provided to the seller to
    cover [transaction
    fees](https://watchtheburn.com/) (this
    will likely come to a few hundred dollars).
-   Log into
    [Bridge](https://bridge.urbit.org) with
    your hardware wallet, and [approve the incoming
    transfer](/manual/id/using-bridge%23accept-your-transfer) of the galaxy. Note that you must pay a transaction fee.
-   Once the star has been accepted, go to the 'ID' section in Bridge to
    transfer your key to a [master
    ticket](https://urbit.org/faq%23master-ticket).
-   Download the 'Passport' containing your new private keys; never
    share these documents or store them on a computer.
-   Approve the transfers to your new addresses; note that this process
    requires you to approve several sequential transactions that will
    need to be paid for by the address you have logged into Bridge
    with.
-   Print the 'Passport' you were prompted to download
-   Store your passport documents somewhere very safe, particularly
    your master ticket.

You can load individual seed phrases of the addresses in a hardware
wallet as recovery keys
([Trezor](https://wiki.trezor.io/User_manual:Recovery),
[Ledger](https://support.ledger.com/hc/en-us/articles/4404382560913-Restore-from-recovery-phrase?support%3Dtrue)).
If you prefer to purely use a hardware wallet, instructions for a
[hardware HD
wallet](https://urbit.org/docs/azimuth/azimuth%23hardware-hd-wallet) analogous
to a master ticket are also available in the docs.

## Swapping a star for $WSTR

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


## Booting a star

Booting a star will be a [familiar
experience](https://urbit.org/getting-started/cli) if
you've booted a planet. After setting your network keys, download your
keyfile from Bridge, and enter the first-time boot command:

```
$> ./urbit -w sampel -k /path/to/sampel-1.key -p 54321
```

It's good practice to delete your keyfile after you've used it (you
will not need one to boot again unless you breach). Specifying your Ames
port is not strictly necessary, but is useful for network configuration
and firewall rules.

Once you have spawned a planet, you have an obligation to keep your
star online. Do not boot your star just to spawn planets without
participating in the network; offline sponsors may suffer from damaged
reputation, and their children may escape to other sponsors.

### Hosting a star

A star can run on any computer a planet can, but a star carries
obligations to its residents. For this reason, you are encouraged to run
your star on a hosted server in a datacenter, or otherwise in a
high-availability configuration.

Like any application, there are a handful of bottlenecks that might
throttle your star's performance under load. These include disk space,
available memory, network speed, and CPU performance. As a star
operator, it is incumbent upon you to offer services in a performant
manner. If you've noticed degraded performance, try keeping an eye on
what your server is reporting via traditional Linux administration tools
like `htop`, 
[Zabbix](https://www.zabbix.com),
or
[Netdata](https://github.com/netdata/netdata).
If you are butting up against the limits of your memory or CPU, consider
upgrading the instance running your ship. You should expect your star to
accrue something like 30GB/year of disk space. In the future, event log
pruning will make this less of an issue, but you should plan ahead of
time to accommodate a very large pier.

[You might notice that a few major providers like DigitalOcean are
frequently used for hosting ships, but Urbit is portable -- you can run
a ship on just about any x86\_64 or ARM server instance with the
necessary resources. Compare commodity hosting providers and evaluate
the metrics and resources that are most important for the services you
offer. If you find a better arrangement in the future, migrating is as
easy as copying a folder between computers.

### Groups on stars

Groups can allow you to announce downtime, technical issues, or
accommodate support requests to many residents at once. You may find it
useful to operate a group for your residents, or related to services
that you provide to them. Your star's operation should optimize for
availability and performance, and as a result it may be inadvisable to
run large groups on your star directly. Groups with hundreds or
thousands of members may have a noticeable effect on the performance of
your star's basic operations.

Unlike elective software services, currently there is no way to migrate
groups between hosts. If you want to host a group related to your star,
it may be pragmatic to run it on a planet or moon on a separate machine.

## Spawning planets

### Layer 1

Urbit's ownership registry lives on the Ethereum blockchain. Ethereum is
used so that the state of the network is stored and modified through
distributed consensus, by nodes validating transactions according to
pre-set rules. These rules are laid out in the
[Azimuth](https://etherscan.io/address/azimuth.eth%23code) contract,
which defines the functions of Urbit's
[PKI](https://urbit.org/blog/pki-maze) and
how you can interact with it. Like a cryptocurrency, this prevents a
ship from being transferred to two people at the same time. The network
of Ethereum validators perform the computational work of making sure all
transactions are valid, in exchange for the gas fees you pay for
transactions.

Ships on layer 1 interact directly with the Azimuth contracts through
[Bridge](https://bridge.urbit.org/).
You can see which layer your ship is after logging into Bridge by
looking for 'L1' or 'L2' in the modal at the top of the home menu[.


-   Log into Bridge by authenticating with your master ticket code or
    the wallet software or hardware that holds your star, and click
    'Issue Point' from the main menu.
-   Provide the `@p` (name) of the ship you want to spawn. Bridge
    will list several random `@p` suggestions if you don't have a
    specific ID in mind. 
-   Enter and the address that will receive the planet. The Ethereum
    address should be provided by the planet's recipient -- most
    commonly, this will be from the recipient's Metamask
    extension.
-   Optionally, you can manually set the transaction fee by clicking
    Advanced and selecting from the provided options (slow, normal or
    fast). Layer 1 transactions can be
    quite expensive, so you probably want to set this to 'slow'.

Once you click 'Generate & Sign Transaction', you will be prompted to
approve the transaction with your wallet. Bridge will then show you a
progress bar that tracks the transaction's status. A slow transaction
might take up to a few hours, but leave the window open until it
completes. The recipient will then need to log into Bridge using the
wallet that contains the address they provided you in order to receive
it, which carries its own transaction fees.

### Layer 2

Urbit's layer 2 refers to a protocol developed to address the high costs
of spawning points, called [naive
rollups](https://urbit.org/blog/rollups).
Naive rollups work by shifting the distributed calculation of PKI state
onto the Urbit network itself, with compressed batches of changes
periodically committed to the Ethereum blockchain by ships running
special software, called 'rollers'. This makes transferring and
modifying keys so cheap that Tlon covers the cost, meaning you can spawn
planets without paying transaction fees by using Tlon's roller. You can
even spawn batches of planets, and distribute them without managing ETH
tokens at all. 

Planets spawned on layer 2 are created with 'planet codes', a special
password that can be redeemed on Bridge for a keyfile. For both a star
operator and planet recipient, this is significantly simpler than layer
1 transfers. Layer 2 ships are still owned cryptographically, just like
layer 1 planets.

Use [Bridge](https://bridge.urbit.org) to
issue layer 2 planets: 

-   Authenticate in Bridge with your star.
-   Click the timer at the top right corner of the home screen -- this
    is a countdown to the next rollup batch submission, which by default
    takes place every 24 hours.
-   Click 'Generate Codes' and enter the number of planets to spawn.
    You can return to this screen to claim codes that you have
    generated.

The batch will need to be processed before you can retrieve planet
codes, so check back the following day. You'll see a transaction
confirmation notification, and an inbox with the number of planet codes
that have been generated for you. You can copy these codes out
individually, or download a CSV file with all of them.

Planet codes are simply text strings; in addition to being cheaper to
issue than layer 1 points, they should be simpler to distribute. For
instance, you can use traditional tools like email to transfer IDs to
recipients. It is not necessary for the recipient to manage a
cryptocurrency wallet; they only need to click a link.

## The future

In the future, stars will perform a more critical role for their
planets. Today, galaxies perform the job of telling a ship the IP
address of another ship to facilitate direct communication, or relay
communication behind routers where necessary. In the future, these tasks
will be performed by stars.

### Ames changes

[Ames](https://urbit.org/docs/arvo/ames/ames) is
an end-to-end encrypted protocol that establishes peer-to-peer
connections when possible. When urbits communicate with each other, they
perform a lookup for the IP address of the ship they want to talk to, so
they can initiate communication with that IP. A ship will then send UDP
packets encrypted with the public key for that `@p` from Azimuth.
If the ship can be reached directly, the connection will be a direct
connection (peer-to-peer). If one of the ships cannot be reached, the
connection may be proxied through a sponsoring galaxy, or the packets
may be stored for later delivery by the sponsoring star if the ship is
offline.

NAT traversal is the act of forwarding a connection on behalf of a
computer that cannot perform direct connections. Most commonly, this is
due to the ship running on a computer that is behind a home router, but
it can also occur if an Ames port is blocked by a firewall. This is not
only a burden on the galaxy that is forwarding the connection, it also
introduces noticeable latency for the planet. If your residents complain
about slow message delivery, you should make sure that they have a
configuration that allows direct connections to their ship. The
`urbit-king` binary has UPnP built in, so you might encourage your
residents to use that instead of `urbit` if they are not
comfortable with modifying their router or firewall.

In the future, both peer discovery and NAT traversal will be performed
by stars, rather than galaxies. This will certainly carry a
significantly higher resource demand than stars presently require,
particularly network bandwidth. There is no date set that this switch
will occur, but it is worth bearing in mind.

### New developments

Urbit is still a young project and will develop in directions not yet
conceived. As a star operator you play a critical role in distributing
address space, but also in developing the ways that the network is used.
Your job as an infrastructure provider dovetails easily with providing
elective services and building new and useful functionality for other
ships. 



Stars are typically hosted with more robust infrastructure than
individual planets, and might make use of that for tasks that require
e.g. significant bandwidth or disk space. As new software and uses are
developed for the network, identify systems and utilities that place a
burden on individuals but might lend themselves to scaling and
automation. These may lead to commercial opportunities. 



The future of stars will likely be one of specialization. All stars
begin with the same capabilities, but their operators will have
different aims and skills. Some stars may be operated by DAOs, and
others passed through families. Some may act as bridges to other
decentralized networks, offer financial services, or distribute
publications. The path your star takes is in your hands.
