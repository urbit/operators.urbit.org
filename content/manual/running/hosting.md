+++
title = "Cloud Hosting"
description = "How to host your ship in the cloud so you can access it from any device."
template = "doc.html"
weight = 2
[extra]
hidetitle = "true"
+++

The goal of this guide is to have clear and easy to follow best practices for
deploying an Urbit node to a server you control in the cloud. Deploying in the
cloud allows you to access your Urbit from any device.

Most Urbit users start out running their ship locally on one machine in order to
play with it, but this means when your machine is offline your Urbit node is
offline too (and can't get updates). You can also only access your Urbit from
that one machine.

This guide uses Digital Ocean as the cloud provider, but others can be used. If
using another provider, the setup script provided and other server configuration
instructions may need to be modified or done manually.

## 1. Create a Droplet

Create an account on [Digital Ocean](https://digitalocean.com). Once you make an
account, choose "Deploy a virtual machine".

You should see the page below where you can create your Droplet, aka Virtual Machine:

![do screenshot](https://media.urbit.org/operators/manual/running/hosting/do-screenshot.png)

Fill out the options like so:

#### Image

Ubuntu 22.04 x64

#### Plan

- Shared CPU: Basic
- CPU options: Regular with SSD
- 2GB / 1 CPU ($12/mo)

You can choose a more powerful option if you'd like but the $12 option should be
sufficient. Note Urbit needs 2GB of memory; it's possible to choose a cheaper
option and run it with less memory by using swap but it will impact performance.

#### Add block storage

The $12 plan includes 50GB which should be sufficient for quite some time, so
you can skip this.

#### Datacenter region

Choose the region closest to you.

#### VPC Network

Leave this as default.

#### Authentication

In the "Authentication" field, select "SSH keys" and hit "New SSH Key". Run the
following command in the terminal on your local machine, replacing
`riclen-tinlyr` with the name of your ship (sans the leading `~`):

```bash {% copy=true %}
SHIP="riclen-tinlyr" bash -c 'ssh-keygen -q -N "" -C $SHIP -f ~/.ssh/$SHIP && cat ~/.ssh/$SHIP.pub'
```

It should spit out a long string of letters and numbers beginning with `ssh-rsa`
and ending with your ship name. Copy the whole thing and paste it into the "SSH
key content" field on Digital Ocean. In the "Name" field, enter your ship name.

#### Additional options

Click "User data" and paste the script below into the field provided. This
will automatically configure the server and install necessary software.

```bash {% copy=true %}
#!/bin/bash

# configure swap
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo "/swapfile swap swap defaults 0 0" >> /etc/fstab

# setup firewall
ufw allow OpenSSH
ufw allow www
ufw allow https
ufw allow 34543/udp
ufw enable

# create and configure user
useradd -s /bin/bash -d /home/urbit -m -G sudo urbit
passwd -d urbit
echo "urbit ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# configure ssh keys for user
mkdir -p /home/urbit/.ssh
chmod 700 /home/urbit/.ssh
cp /root/.ssh/authorized_keys /home/urbit/.ssh/authorized_keys
chmod 600 /home/urbit/.ssh/authorized_keys
chown -R urbit:urbit /home/urbit/.ssh

# configure sshd
mkdir -p /etc/ssh/sshd_config.d
cat > /etc/ssh/sshd_config.d/override.conf <<EOF
PermitRootLogin no
PubkeyAuthentication yes
PasswordAuthentication no
EOF

# fetch and extract urbit binary
curl -L https://urbit.org/install/linux64/latest | tar xzk --strip=1 -C /home/urbit/
chown urbit:urbit /home/urbit/urbit

# install necessary packages
apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list
apt -y update
apt install -y caddy tmux

# reboot
systemctl reboot
```

#### How many Droplets?

1

#### Choose a hostname

This will be the name the server calls itself locally, you can put in whatever
you want. Your planet name is a good choice.

#### Add tags

Leave empty.

#### Select project

Leave as the default.

#### Create Droplet

Hit this button to create the droplet.

## 2. Get domain

To access your ship easily from any device, it's necessary to have a domain
name. You can either buy one from a domain registrar like
[gandi.net](https://www.gandi.net/), [Namecheap](https://www.namecheap.com),
etc, or you can get a free subdomain from a site like
[freedns.afraid.org](https://freedns.afraid.org/).

In this guide, we'll walk through the second free option, but if you'd prefer
your own, you just need to add an A Record pointing to your droplet's public IP
address.

Go to [freedns.afraid.org](https://freedns.afraid.org/) and sign up. Once done,
log in and select the "Subdomains" option in the menu on the left. Choose to
add a new one, and you'll be presented with a screen like so:

![afraid.org subdomain add](https://media.urbit.org/operators/manual/running/hosting/afraid-domain-add.png)

You can put anything in the "Subdomain" field, but typically you'd put your
planet name. You can choose whichever domain option you'd like. In the
"Destination" field, you'll need to put the public IP address of your droplet,
which you can get from the dashboard on Digital Ocean.

Once you hit "Save", the configuration is complete:

![afraid.org subdomain created](https://media.urbit.org/operators/manual/running/hosting/afraid-domain-add.png)

## 3. Prepare for upload

{% callout %}

**Note**

This step is necessary if you already have a ship running locally and want to
move it to the cloud. If you don't, you can skip this step.

{% /callout %}

#### If you're using Port

If your planet is already running on Port from your local machine, follow these
steps to get it ready to deploy to your cloud-hosted server. If you're not using
Port, but are running your ship from the command line, skip this section and
refer to the [CLI instructions](#if-you're-running-from-the-command-line) below instead.

Shut down your local ship and export it:

- In port, first click `"Home"` in the bottom left corner of the home page.
  ![landscape screenshot](https://media.urbit.org/operators/manual/running/hosting/landscape-screenshot.png)
- Then, click `"Manage"` next to the planet you want to upload to the cloud.
  ![port manage screenshot](https://media.urbit.org/operators/manual/running/hosting/port-manage-screenshot.jpg)
- Finally, click `"Export"`, and make note of the location in which you export
  your archived planet so that you can use it in the next step.
  ![port eject screenshot](https://media.urbit.org/operators/manual/running/hosting/port-eject-screenshot.jpg)

#### If you're running from the command line

If you're running your ship locally in the command line, follow these steps to
get it ready to deploy to your cloud-hosted server. If you're using Port rather
than the command line, ignore this section and refer to the [Port
instructions](#if-you're-using-port) above instead.

- In the Dojo, use either `"CTRL + D"` or `|exit` to shut down your ship.
- Archive your ship by running `tar cvzf riclen-tinlyr.tar.gz
  ~/path/to/your/pier`, replacing `riclen-tinlyr` with your own ship name and
  `~/path/to/your/pier` with the location of your pier.

## 4. Connect to the server

#### Create an SSH alias

To make connecting simple, you can add an alias to `~/.ssh/config` on your local
machine. Open `~/.ssh/config` in an editor (you may need to create it if the
file doesn't exist), and add the following to the bottom of the file (replacing
the ship name and IP address with your own):

``` {% copy=true %}
Host riclen-tinlyr
  HostName 161.35.148.247
  User urbit
  IdentityFile ~/.ssh/riclen-tinlyr
  IdentitiesOnly yes
```

#### Upload your pier

Here you'll upload the pier you archived previously. If you didn't previously have
a ship running locally and instead want to boot a new planet you've obtained,
skip this step and refer to the [key file upload instructions](#upload-your-key-file)
below instead.

Replace `riclen-tinlyr.tar.gz` with the archive you made
previously, and `riclen-tinlyr` with the Host you set in `~/.ssh/config` above:

```bash {% copy=true %}
scp riclen-tinlyr.tar.gz riclen-tinlyr:
```

It may take a while to upload if your pier is large and/or your internet is
slow.

#### Upload your key file

If you had an existing ship running locally which you want to upload to the
server, you can ignore this step and refer to the [pier upload
instructions](#upload-your-pier) above instead.

If you have obtained a planet and want to boot it for the first time, you'll
need to upload its key file to the server. These instructions assume you've
received an invite. If you've got a planet by another method, you can also login
to [Bridge](https://bridge.urbit.org) and download the key file from there.

If you've received a planet invite via email or a claim link like
`https://bridge.urbit.org/#labfur-batteg-dapnex-binsup-riclen-tinlyr`, open it
in a browser and you should see a page like the following:

![claim planet screenshot](https://media.urbit.org/operators/manual/running/hosting/claim-planet.png)

If you hit "Claim", it'll bring you here:

![download passport
screenshot](https://media.urbit.org/operators/manual/running/hosting/download-passport.png)

Hit "Download Backup (Passport)" and it'll have you download a file called
`riclen-tinlyr-passport.zip` (but with your own planet rather than
`riclen-tinlyr`).

Unzip the file with:

```bash {% copy=true %}
unzip ~/path/to/download/folder/riclen-tinlyr-passport.zip
```

It'll create a folder called `riclen-tinlyr-passport` which will contain three files:

- `riclen-tinlyr-1.key`
- `riclen-tinlyr-Management Proxy.png`
- `riclen-tinlyr-Master Ticket.png`

You can physically print out the two `.png` files and store them in a safe and
secure location. Importantly, you should ensure the *master ticket* (which will
look something like `~tarnes-pilryd-dassed-sogsul`) is securely and safely
stored. If anyone gains access to the master ticket they'll have ownership and
control of your Urbit ID, and if you lose it you'll irreversibly lose ownership
and control of your Urbit ID.

The next screen on the claim page will ask you to re-enter the master ticket to
ensure you've recorded it accurately, and then the claim process is complete.
Once you've securely, physically backed up the master ticket and the `.png`
passports, it's a good idea to delete the `riclen-tinlyr-passport.zip` file and
the two `.png` files, so if someone gains access to your computer, your Urbit ID
will be safe.

This will leave only the `riclen-tinlyr-1.key` file. The key file contains your
planet's private keys, which are necessary to boot it up for the first time.
You'll need to copy that file to the server with the following command (again,
replacing `riclen-tinlyr` with your own planet and host):

```bash {% copy=true %}
scp riclen-tinlyr-passport/riclen-tinlyr-1.key riclen-tinlyr:
```

Note: you should keep the `riclen-tinlyr-1.key` until you've completed this
guide and your ship is booted to be sure it was copied successfully, but
afterwards you should also delete that file for security.

#### Finish server configuration

Once you've either uploaded your pier or uploaded your key file as the case may
be, you can connect to your server (replacing `riclen-tinlyr` with your Host):

```bash {% copy=true %}
ssh riclen-tinlyr
```

You'll be taken to the shell on your server. In order to complete the domain
name setup, you need to edit the config file of the `caddy` reverse-proxy
web-server. Run the following two commands in the droplet's shell (replacing the
domain with the one you chose previously):

```bash {% copy=true %}
echo -e "riclen-tinlyr.crabdance.com \n  reverse_proxy 127.0.0.1:8080" | sudo tee /etc/caddy/Caddyfile > /dev/null
sudo systemctl enable --now caddy
sudo systemctl restart caddy
```

## 5. Boot your ship

#### If you've uploaded an existing pier

If you uploaded an existing archived pier like `riclen-tinlyr.tar.gz`, follow
these instructions. If you're booting a new planet for the first time and
uploaded a key file, ignore these and follow the [instructions for booting a new
planet](#if-booting-a-new-planet-from-a-key-file) below.

In the previous section you ssh'd into the server and configured Caddy. In the same
ssh session, extract the pier archive you previously uploaded (replacing
`riclen-tinlyr` with the correct name):

```bash {% copy=true %}
tar xvzf riclen-tinlyr.tar.gz && rm riclen-tinlyr.tar.gz
```

You'll now have a folder called `riclen-tinlyr`, which is your pier. Urbit is
best run in a tmux or screen session so it's easy to keep it running when
you disconnect. In this case we'll use tmux, which has already been installed
by the setup script.

Run tmux:

```bash {% copy=true %}
tmux
```

You should now be in tmux. First, dock your ship:

```bash {% copy=true %}
./urbit dock riclen-tinlyr
```

That will copy the `urbit` runtime inside the pier, so you can now delete the
separate binary:

```bash {% copy=true %}
rm urbit
```

Now you can boot your ship, specifying the Ames UDP port which was configured in
the firewall by the setup script:

```bash {% copy=true %}
./riclen-tinlyr/.run --http-port 8080 -p 34543
```

It'll take a few moments to boot, and then your ship should be running like
normal and you'll be at the usual Dojo prompt. If you haven't previously noted
your web login code, you'll need to run `+code` in the Dojo and copy it. Then,
you can disconnect from the tmux session by hitting `CTRL+b d` (that is, you
hit `CTRL+b`, release it, and then hit `d`). This will disconnect you from
tmux and take you back to the usual shell, but it'll keep running in the
background. If you want to get back to the Dojo again, you can reattach the
tmux session with:

```bash {% copy=true %}
tmux a
```

Finally, you can disconnect from the ssh session completely by hitting `CTRL+d`.

#### If booting a new planet from a key file

If you uploaded a key file like `riclen-tinlyr-1.key` and are booting a new
planet, follow these instructions. If you uploaded the archive of an existing
pier, follow the [instructions for booting an existing ship](#if-you've-uploaded-an-existing-pier)
above.

In the previous section you ssh'd into the server and configured Caddy. In the same
ssh session, start tmux:

```bash {% copy=true}
tmux
```

You should now be in tmux. Boot a new ship with the following command,
specifying the ship name and key file, as well as the Ames port that was
previously opened in the firewall by the setup script:

```bash {% copy=true %}
./urbit -w riclen-tinlyr -k riclen-tinlyr-1.key -p 34543
```

It may take several minutes to boot the new ship. Eventually, it'll take you to
the Dojo (Urbit's shell) and show a prompt like `~riclen-tinlyr:dojo>`. Once
booted, shut the ship down again by typing `|exit` in the Dojo. After it quits,
it should print something like "docked successfully", which means the binary has
been copied inside the pier. This means you can delete the separate binary:

```bash {% copy=true %}
rm urbit
```

The key file is only needed when you first boot the ship, so it's good practice
to delete it after first boot:

```bash {% copy=true %}
rm riclen-tinlyr-1.key
```
Now you can start your ship back up again with the following:

```bash {% copy=true %}
./riclen-tinlyr/.run --http-port 8080 -p 34543
```

After a few moments it'll be back at the Dojo prompt again. In order to login to
the web interface, you need to get the web login code. Run the following in the
Dojo:

``` {% copy-true %}
+code
```

It'll spit out something like `ropnys-batwyd-nossyt-mapwet`. That's your web
login code, you can copy that and save it in a password manager or similar. Note
that the web login code is separate from the master ticket.

You can now disconnect from the tmux session by hitting `CTRL+b d` (that is, you
hit `CTRL+b`, release it, and then hit `d`). You'll be taken back to the
ordinary shell, but the ship will still be running in the background. If you
want to get back to the Dojo again, you can reattach the tmux session with:

```bash {% copy=true %}
tmux a
```

Finally, you can disconnect from the ssh session completely by hitting `CTRL+d`.


## 6. Log in to Landscape

The server configuration should now be complete, and you can access Landscape in
the browser. Navigate to the domain you configured previously, in this case
`riclen-tinlyr.crabdance.com`. You should see the Landscape login screen:

![landscape login screen](https://media.urbit.org/operators/manual/running/hosting/landscape-login.png)

Before logging in, check that the URL in the browser begins with `https`, and
that it has a lock icon or similar next to it. This means Caddy has successfully
configured its SSL certificates. If there's no lock and you're at `http://...`
(without the `s`), Caddy has not yet setup the certificates. You may need to
give it some time and try again. Otherwise, enter the web login code you
previously got with the `+code` command in the Dojo, and you'll be taken to your
ship's homescreen.

Your ship is now running in the cloud, and you can access it from any device by
visiting its URL.
