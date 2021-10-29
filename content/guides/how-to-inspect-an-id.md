+++
title = "How to Inspect an ID"
description = "Urbit IDs unlock an entire digital world, and while they are NFTs, there’s a lot more to them than your typical piece of digital art."
+++

There are five different types of Urbit ID—galaxies, stars, planets, moons, comets—but only the first three are relevant for the purposes of this guide (moons and comets should **never be purchased**). For an in-depth overview of what each ID is for, check out the [Urbit ID Buyer’s Guide](/guides/which-id-should-i-buy).

One of the most important things to understand about Urbit IDs (“ID”) is that they are intended to be used to power an operating system, within which their owner will interact with a larger network of other ID owners (“owners”). An owner may take actions that permanently affect the state of the ID, and their actions with other owners on the network may confer *reputation* to the ID. Throughout the rest of this guide we’ll discuss the best ways to determine the status of a given ID.

Throughout this guide we’ll be making use of the [Urbit Network Explorer](https://network.urbit.org). 

## Planets

When evaluating a planet you’ll want to consider the following:

- Whether the planet has been spawned
- Whether the planet has been booted
- Whether the planet has an online sponsor

### Spawn status

A planet that has not been spawned cannot be acquired—if someone is attempting to sell you an unspawned planet they’re not to be trusted. 

Here’s an example of an unspawned planet: https://network.urbit.org/~sampel-palnet

Note the absence of a **Spawned** event in the **Azimuth Event Stream** box at the right side of the screen.

### Booted or unbooted

When purchasing a planet it’s best to buy one that has never been brought onto the network, commonly referred to as *unbooted*. 

A planet that has been *booted* has been brought onto the network and can be assumed to have interacted with other ships. This means that it may have acquired a reputation, either good or bad, which will now be conferred upon you as the new owner. *It’s best to not have the baggage of an existing reputation when acquiring a new planet.*

Use the [Urbit Network Explorer](https://network.urbit.org) to determine whether or not a planet has been booted before by checking its **Key Revision.**

The planet [`~pannex-pidrup`](https://network.urbit.org/~pannex-pidrup) has been spawned, but has a Key Revision of `0`, which means that you can be certain that it has never been on the network. On the other hand, [`~riprud-tidmel`](https://network.urbit.org/~riprud-tidmel) has a key revision of `1`, which means that it has likely been booted.

### Sponsor status

Planets are meant to be used, and in order for a planet to be useful it must have an online sponsor. Sponsors are responsible for distributing software updates and performing peer discovery (the specifics of which are covered [here](TODO)), which are necessary functions for using your planet that you’ll be unable to receive with an offline sponsor.

To find the sponsor of a given planet, consider the previous example of `~pannex-pidrup` in the Network Explorer:

![sponsor chain](https://storage.googleapis.com/media.urbit.org/operators/sponsor-chain.png)

The sponsor can be found in the **Sponsor Chain**, which in this case is `~siddef`. 

An **online sponsor** is a star that has been booted and is running on the network. At time of writing (October 2021), there is no direct way to determine whether or not a star is online using the Network Explorer; however, there are a number of ways to get a good idea. 

First, check if the star has been booted. If it has not been booted, it cannot be online (see above). [This star](https://network.urbit.org/~foddef) has never been booted, since it has a Key Revision of 0, while [this star](https://network.urbit.org/~litzod) has definitely been booted.

Second, check to see if the star is actively sponsoring other planets. The more planets sponsored, the higher the likelihood that the star provides a good quality of service—meaning it is online most/all of the time. Here’s an [example of a star](https://network.urbit.org/~litzod) that must provide good service since it has so many child planets under sponsorship.

Finally, if you’d really like to be sure, you can [boot a comet](https://urbit.org/getting-started) and use `|hi ~sampel` (where `~sampel` is the star in question) to determine if the star is online *right now*. If the response is `~sampel is ok`, `~sampel` is online.

## Stars

When evaluating a star you’ll want to consider whether or not it has:

- Been spawned
- Been booted
- An online sponsor
- Spawned planets

Evaluating the points 1-3 above is basically the same as it is for planets for the same reasons. The only difference is that for checking an online sponsor, you’re instead checking the galaxy instead of the star. 

## Booted or spawned planets

A star’s value decreases significantly if it has been booted or spawned planets. If it has been booted or engaged in any spawning of planets, it’s no longer able to be wrapped using [WSTR](https://star.market).

Even if trading as an ERC-721, the presence of spawned planets indicates that the star is no longer in “mint” condition. It’s like driving a car off the lot.

The easiest way to check if a star has spawned planets is through Etherscan directly:

Navigate to the Azimuth contract: https://etherscan.io/address/azimuth.eth#readContract
Scroll down to number 16, `getSpawnCount`
Enter the point number (found in the Network Explorer) into the field, and hit **Query**

For example, let’s use the star `~siddef`:

![point-number](https://storage.googleapis.com/media.urbit.org/operators/point-number.png)

The point number is 30,645, which we’d then put into Etherscan:

![getSpawnCount](https://storage.googleapis.com/media.urbit.org/operators/getSpawnCount.png)

This star has indeed spawned planets. If a star has not spawned planets, this number will come back as 0.

## Galaxies

Galaxies are rare and highly valuable, and the stakes of purchasing them are much higher. Most galaxies have stars in the Linear Release Contract, which disburses stars to their owner on a linear schedule up until the year 2024. 

Due to the complexity inherent in purchasing a Galaxy, we’d recommend reaching out to `~wolref-podlex` at the Urbit Foundation for support. 

