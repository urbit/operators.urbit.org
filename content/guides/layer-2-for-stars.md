+++
title = "Layer 2 for stars"
description = "When considering Layer 2 migration, star operators have the most to gain, but also the most to review and understand. Spawning planets can be cost prohibitive with current gas prices. Migrating to L2 will solve that."
+++

When considering [Layer 2](https://urbit.org/docs/azimuth/l2/layer2) migration, star operators have the most to gain, but also the most to review and understand. Spawning planets can be cost prohibitive with current gas prices. Migrating to L2 will solve that. However, you can also expect the value of your star to decrease. Also, keep in mind you cannot trade an L2 star for $WSTR.

Urbit’s Layer 2 solution, [naive rollups](https://urbit.org/blog/rollups), reduces the costs of Azimuth transactions by ~65-100x; this allows star operators to issue planets cheaply or for free. Layer 2 transactions are performed on Urbit’s network, and periodically committed to the blockchain by nodes called ‘rollers’. The [roller agent](https://urbit.org/docs/azimuth/l2/roller) is Urbit-native software, and the source code can be examined in aggregator.hoon. Network state including queued rollups is maintained by the execution of naive.hoon. Any ship can run `aggregator.hoon` to act as a roller, and all ships run `naive.hoon` to calculate PKI state.

Stars have the option of remaining on Layer 1, or migrating to Layer 2. Concretely, migrating to Layer 2 means transferring your asset's ownership or spawn proxy into a single, shared address that belongs to nobody, recognized by the network as the L2 address. Once you have migrated, the upgraded Azimuth contracts will recognize your asset as operating on Layer 2. You can perform the migration easily and at any time using Bridge. Below, we will review the practical considerations you should weigh before making a decision.

## What to know

- Migration is currently **one-way**.
  <br>You cannot move a Layer 2 ID back to Layer 1.
- **You cannot interact with Layer 2 IDs using Layer 1 tools.**
  <br>You will not be able to use your ID with smart contracts like OpenSea, or ‘see’ it using wallets like MetaMask. Bridge is currently the only software that can see or interact with Layer 2 IDs.
- Layer 2 does not have anything to do with networking between ships.
  <br>Operating your ship on the network will not be influenced by which layer it is on. You will be fully capable of communicating with planets spawned on either layer. Stars can sponsor planets on either layer, but cannot spawn a planet on a different layer than the one the star occupies.
- You can perform Layer 2 transactions for free with Tlon’s roller.
  <br> A public roller operated by Tlon is connected to Bridge by default, but anyone can operate a roller. Tlon’s roller offers free subsidized transactions up to a weekly limit of 25 operations. Tlon’s roller performs its queued operations every day at midnight PST, but third-party rollers might charge a fee to submit them more frequently or allow larger numbers of transactions.
- You will need to pay for the migration to L2.
  <br>Migrating is a one-time process that takes place on Layer 1. You will need to fund it in the same way as a traditional Layer 1 Azimuth transaction.
- You can sponsor planets on both layers simultaneously.
  <br> The planets you already sponsor on Layer 1 do not need to migrate. If you remain on Layer 1, your sponsored planets are free to migrate to Layer 2.

## Should I move?

The **benefits** of moving include:

- Spawn planets for free – batches submitted to Tlon’s roller will be processed at Tlon’s expense and do not require transaction fees on the part of the star operator or planet recipient. This not only saves a huge amount in transaction fees, it should greatly simplify distribution and commercial sales of planets.
- Simplified distribution of planets – star operators on Layer 2 do not need to transfer ERC-721 tokens to recipients. Batches of invite code URLs can be generated and downloaded in CSV format.
- Free or cheap Azimuth transactions – ships with ownership on Layer 2 will also be able to perform Azimuth operations like factory resets and sponsorship changes in Bridge up to a weekly limit for free by using Tlon’s roller, or significantly more cheaply than Layer 1 by using a third-party party roller.

The **trade-offs** for migrating include:

- The resale value of a star can be expected to diminish if it is moved to L2. Migrating is currently a one-way process, and stars will not be able to issue Layer 1 planets after migrating.
- Ships on Layer 2 are not visible to Layer 1 tools like wallets or chain explorers; Bridge is currently the only software that can ‘see’ Layer 2 IDs.
- In the future, Layer 1 IDs may gain value as scarce status symbols, as more of the network shifts onto Layer 2.
- A star that has been moved to L2 can never be [wrapped](https://star.market) as a `$WSTR` token.

## Migration

Stars can migrate their spawn proxy or ownership key to Layer 2. Stars that move their spawn proxy will be able to spawn planets on L2. Stars that move their ownership key to L2 are able to take advantage of using rollups for Azimuth operations like setting networking keys and sponsorship changes, in addition to spawning Layer 2 planets.

A star can move a spawn proxy to Layer 2, and later move ownership as well. If ownership is migrated, it is equivalent to also moving the ID’s proxy addresses, and all Azimuth transactions will take place on L2. Neither spawn proxy nor ownership key can currently be migrated back to Layer 1.

![](/images/star-l2-migration.gif)

To migrate:

1. Log into Bridge.
2. Click the ownership address modal menu at the top left corner.
3. Select ‘Migrate’, and ‘Proceed’ after reading the information presented.
4. You will need to pay a one-time fee to fund the transaction; make sure your L1 address has funds available.

Migrating to Layer 2 does not change the address that owns a point. You will still use the same wallet or key to log into Bridge after migration. A single ownership address might have ships on both Layer 1 and Layer 2.

The migration itself does not need to be submitted to a roller – it should complete within a few minutes. Once it has, you can submit planets and transactions to the roller’s queue immediately.

### Which layer am I on?

You can tell at a glance which layer your asset occupies in Bridge:

1. Log into Bridge.
2. Click the ownership address modal at the top left of the main menu.
3. A square icon with ‘L1’ or ‘L2’ will show up next to each asset that belongs to your address.

A single ownership address can own ships on both Layer 1 and Layer 2.

## Spawning Planets on L2

![](/images/star-l2-invites.gif)

To spawn planets after migrating to L2:

1. Log into Bridge.
2. Click the ‘Create Invites’ button at the top right corner.
3. Click ‘Add more’ and enter the number of planets you want to spawn.
4. Click ‘Generate planet codes’ to submit.

You will see a timer at the top right corner of Bridge – this counts down until the next roll batch is scheduled. Click the timer to see your queued and completed Layer 2 transactions. Click the envelope icon to its left to open a menu that will allow you to queue more spawns or to download a CSV of your generated planet codes.

Once you submit planet spawns to a roller, the action cannot be undone and goes into effect immediately. The planets this spawns can also be booted immediately, before the roll is published to the blockchain.

Once the timer has expired and the roll has been processed, you will see a confirmation notification at the top of Bridge, and the button will show you the number of codes available.

There is also a weekly limit to transactions using Tlon’s roller – currently, this is 25 transactions, where one planet requires four transactions. This translates to up to **six free planet spawns per week** using Tlon’s roller. A transaction might also be setting networking keys or adopting a planet.

## Inviting with planet codes

Planet codes are like a temporary master ticket. Since planet codes are text, they can be distributed more easily than Layer 1 tokens – even through email or physical media. This should simplify distribution of planets for star operators, and open up the use of traditional e-commerce tools for sales and distribution.

### Generating

Planet codes are issued in Bridge by a star operator, and take the form of a password, or Bridge URL with the password embedded. Star operators can issue up to 6 planets per week without charge using Tlon’s roller. Operators that want to issue more can make use of third-party rollers that may charge an additional fee.

The planet codes you generate can also be downloaded from Bridge as a CSV, a plaintext spreadsheet format. Be mindful of how your planet codes are stored – knowing a code or URL is equivalent to the ability to claim it. A planet code is valid for a single use.

### Distributing

Planet codes are dramatically simpler to distribute than Layer 1 AZP tokens. Since a planet code is just text, no smart contracts or Ethereum wallets are required on either end of the transfer. A star operator might build a simple automated system that collects an email address from an invitee or customer and emails them the contents of a line from a planet code CSV, then marks the line as used.

### Claiming

The recipient of a planet code can visit a link to Bridge with an embedded planet code, or they can log into Bridge by entering it manually. This code is used to make the initial claim, and allows the owner to download a keyfile and boot with it immediately. L2 planets will automatically submit a roller transaction on their first boot, which will transfer ownership to a new key owned solely by the planet’s new pilot. L2 planets will have all of their keys set automatically. The networking keys are derived from the ownership keys.

An important note: since planet codes and claim URLs are simply text and not tokens, you must take particular care not to double-issue them. **Activated codes will still appear in Bridge until the next roll is processed**. It is recommended to use a traditional method of maintaining a list of current versus used codes, in order to avoid sending two separate people the same code or URL. If a code is double-issued and used on the same day, both users would be able to boot, but only the first to be booted would be considered the valid node on the network.

## Transaction history

![](/images/star-l2-transactions.png)

A new feature in Bridge is the ability to see the transaction history of your asset. This is particularly important because with Layer 2, much of the Azimuth state is no longer visible on the Ethereum blockchain, but is maintained by the Urbit network. This means you might not be able to directly observe “who owns what” by looking at the Azimuth contracts with something like a [blockchain explorer](https://etherscan.io/address/azimuth.eth). Activities like setting networking keys, issuing planets, or moving your proxy keys will show up in this log. Note that the transaction history menu in Bridge is currently the only way to examine Azimuth operations that take place on Layer 2 – these operations are **not yet visible** via the [Network Explorer](https://network.urbit.org/).

If you submit an operation to your roller, you’ll see a timer counting down to the next batch, and a history of completed operations. Bridge does not currently allow you to cancel a transaction once it has been submitted.

Incoming transfers of new assets will also show up in your transaction history. If your ownership address owns more than one asset, you can use the modal to select from among them.
