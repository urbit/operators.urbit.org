+++
title = "Urbit Security"
description = "Most of Urbit is quite secure, while other parts are works in progress and need technical auditing."
+++


## How secure is Urbit right now?

We consider some parts of Urbit to be secure, while other parts still need some work and external auditing. For technical details on Urbit's cryptosystems, see the [documentation](https://urbit.org/docs/system-overview/cryptography).

[Urbit ID](/guides/urbit-id-faq/#what-is-urbit-id) / [Azimuth](/guides/urbit-id-faq/#what-is-azimuth), Urbit's identity layer, is live on the Ethereum blockchain and has been audited by Open Zeppelin, Blockchain at Berkeley, and Bloctrax.

In late 2020, Urbit's [Ames](https://urbit.org/docs/glossary/ames) networking protocol was audited by [Leviathan Security](https://www.leviathansecurity.com/). You can read about this milestone [here](https://urbit.org/blog/security-and-continuity).

The security of the runtime, [Vere](https://urbit.org/docs/vere/), has not yet been adequately assessed or systematically hardened.

All communication on Urbit is end-to-end encrypted. However, the [event log](https://urbit.org/docs/glossary/eventlog) is not encrypted at rest but we plan to give users that option in the future.

Tlon keeps a quantum computing expert on staff and understands that post-quantum cryptographic methods must be implemented sooner than later, since any data not already encrypted using these methods is at risk of being collected and decrypted once sufficiently powerful quantum computers exist. [NIST](https://www.nist.gov/) anticipates the release of their preliminary findings on [post-quantum cryptography standards](https://csrc.nist.gov/projects/post-quantum-cryptography) around the end of 2021, with full guidelines following in 2024. Tlon will develop a strategy for post-quantum encryption for Urbit following their recommendations.

Thus, while Urbit is probably more secure and private than most digital communication channels, we cannot yet consider it impervious to a dedicated attacker. If you are a cybersecurity expert looking for work, get in touch with Tlon at `apply@tlon.io`.