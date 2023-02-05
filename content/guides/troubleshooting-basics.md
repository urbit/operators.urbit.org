+++
title = "Urbit Troubleshooting Basics"
description = "How to fix common problems."
+++


*Originally posted by Zach (~dovsem-bornyl) on [Martian Computing](https://martiancomputing.substack.com/p/urbit-troubleshooting-basics)*

Ninety percent of issues are solved by knowing some basic core ideas about your urbit and a couple of tools that can help you understand the current state you’re in. The goal of this post is to give you enough information to solve the ninety percent case yourself and be able to help others on the network.

## Upgrade overview

Urbit system upgrades come in two main varieties: upgrades to the kernel code and upgrades to the runtime binary. Upgrades to the kernel are typically called OTAs which stands for over-the-air. For these updates you typically don’t have to do anything in the common case, your system will just receive an update from your sponsor. App updates work the same way, but they have their own source.

Runtime upgrades are different, because the runtime is the program that runs your urbit on your computer, you have to shut down your urbit and then update your runtime yourself. We’ve made this process easier via a built in script and I wrote up the instructions for that here in Step 5: https://urbit.org/getting-started/cli

## Kelvin upgrades

Sometimes a new kernel version will make breaking changes to the system. When this happens app developers need to update their applications to account for these new changes. A new kelvin version is used to denote this. To prevent an over-the-air update from breaking apps you rely on, if you have any applications that do not have a new version ready for the new kelvin you will be asked to suspend those in order to upgrade. Those apps will then remain suspended until the developer releases a new version compatible with the new system kelvin (at which point they’ll automatically update and revive). New kelvin versions also require updating your runtime to a version that supports the new kelvin.

## What are the common issues?

With the above exposition out of the way, let’s go through the most common issues and how to recognize and resolve them.

- Runtime version is out of date (or very old and not docked)

- User has apps that are blocking the `%base` kernel upgrade because the app developer didn’t ship a version for the new kernel.

- User’s system says they’re up to date, but they’re not (their sponsor is bad)

- User’s apps say they’re up to date, but they’re not (their app source is bad)

- User’s urbit fails to start because it can’t get enough memory (out of loom)

- The user can’t communicate with other ships (either because their azimuth state is out of date, they accidentally double booted, or the host they’re trying to communicate with is down or has its azimuth state out of date).

- Note: “Double booting” refers to either running more than one copy of your pier at the same time, an older copy of your pier, or accidentally creating a new pier with your same ID when you already have one. Any of these actions will require a breach (or reset) because the network can no longer tell which pier is the correct one to pay attention to. Take care to avoid this.

## How to debug

First run `+vats` in the dojo, this will output the information we need for every app you’ve ever installed. If you’re asking for help in support or UC Help, it’s good to do this and share the results via pastebin. You can also just output one desk by running `+vat %desk`.

```
> +vat %base

%base
  /sys/kelvin:      [%zuse 415]
  base hash:        0v3.sgh93.3pomr.cup26.rivn8.0g8nj.fs6d4.n48ji.5q8g5.r1niq.h0at8
  %cz hash:         0v3.sgh93.3pomr.cup26.rivn8.0g8nj.fs6d4.n48ji.5q8g5.r1niq.h0at8
  app status:       running
  force on:         ~
  force off:        ~
  publishing ship:  ~
  updates:          remote
  source ship:      ~litzod
  source desk:      %kids
  source aeon:      27
  kids desk:        %kids
  pending updates:  ~
::
```
Let’s take note of a few things here:

- The `/sys/kelvin` version of `[%zuse 415]` 

*Note: 415 will be released on Jan 31st 2023, at time of writing the latest is 416.*

- The base hash which ends in `h0at8`

- The app status: **running**

- The source ship: `~litzod`

- The pending updates: ~

This tells us that our kernel supports Zuse kelvin 415 (for apps you’ll see the kelvin versions they support here), that the base system is running, we’re getting our updates from `~litzod`, there are no pending updates, and the version we’re on is `h0at8`.

Next restart your Urbit and look for the following output:

``` 
$ ./<pier>/.run
~
urbit 1.18
boot: home is <path/to/pier>
loom: mapped 2048MB
...
live: loaded: GB/1.109.950.464
...
http: web interface live on http://localhost:8080
```

Take note of:
- the runtime version (1.18 in the above output)

* Note: 1.18 will be released on Jan 31st 2023, at time of writing the latest is 1.17 *

- The amount of loaded memory: 1.1GB above (the closer to 2GB, the more you should run |pack)

- The location you can access your urbit: http://localhost:8080 (8080 in this case)


## How to resolve the most common cases

If your urbit fails to start try a pack (this will reclaim some memory and often allows your urbit to start). If you don’t have `.run` then first upgrade your runtime version in the next bullet.

```
<pier>/.run pack
```

Compare your runtime version to the [latest version available here](https://github.com/urbit/vere/releases ) - if your version is behind then upgrade your runtime following step 5 in the [getting started guide](https://urbit.org/getting-started/cli).

Check your `+vat %base` output and see if you have a pending update. If you do either check the landscape UI for a notification to suspend apps that are not compatible with the new version and update, or run `|bump `in the dojo (the `|bump` command does the same thing).

If your `+vat %base `output has no pending updates, but its kelvin version is behind (for example it’s on 418 when the latest kelvin is 416 - remember kelvins count down) then your sponsor is likely out of date. Run `|ota ~litzod` to change your sponsor to a known good star.

Compare your app sources in your `+vats` output with those in the below table. If they’re different, update the app source with `|install ~correct-source %desk `I’ll give a specific example below.

```
%garden   | source ship: ~mister-dister-dozzod-dozzod
%webterm  | source ship: ~mister-dister-dozzod-dozzod
%landscape| source ship: ~lander-dister-dozzod-dozzod
%groups   | source ship: ~sogryp-dister-dozzod-dozzod
%talk     | source ship: ~sogryp-dister-dozzod-dozzod
```

For example, if you instead of `~sogryp-dister-dozzod-dozzod`for `%groups` you saw some other ship name as the source, you’d want to fix this with:

```
|install ~sogryp-dister-dozzod-dozzod %groups
```
This installs the groups desk from the proper source above and will make sure you have the latest version.

Note that while updating apps, your web UI will not be responsive, but you should see output in the terminal (this is expected).

If everything is up to date, then run `+azimuth-block` and compare the output to the latest block on https://etherscan.io/blocks. If you’re way behind, run `-azimuth-load` to force your system to update its azimuth state. This is a known bug we’re currently working on.

There are a lot of things we’re working on to make self-hosting easier, but there will always be a higher technical bar for those looking to run their own urbit. New products like what [Native Planet](https://nativeplanet.io) is building go a long way to make running locally easier for people. For those not interested in self-hosting, having a hosting provider like [Tlon](https://tlon.io) run their urbit for them will be the way they get on the network.

Hopefully this guide gives you some tools to reason about the state of your system, but if you get stuck - we’re always available to help both on the network, in the [Urbit Community](https://urbit.org/groups/~bitbet-bolbel/urbit-community): Help channel, and off via support@urbit.org.

See you on the network.









