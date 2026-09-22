#!/bin/bash
#
# DISABLED ON PURPOSE — 2026-09-22.
#
# This repository is dead. The live golfcartins.com is built and deployed from
# a DIFFERENT repository: TTomlinson13/golfcartins-com.
#
# What this script used to do, and why it is disabled:
#
#   It ran an lftp mirror of this repo's ./public directory onto the Hostinger
#   web root with --delete. Mirroring with --delete removes everything at the
#   destination that is absent from the source. This repo's ./public contains a
#   SINGLE unfinished HTML file, so running it would have deleted the live site
#   and replaced it with that one page.
#
#   It also targeted /public_html — the main account's web root — rather than
#   the addon-domain path that actually serves golfcartins.com, so the blast
#   radius was not even limited to this domain.
#
# There is no safe way to "fix" this script, because the repo it deploys has no
# site in it. If you need to deploy golfcartins.com, use golfcartins-com.
#
echo "REFUSING TO RUN: this deploy script has been disabled." >&2
echo >&2
echo "  This repo is not the source of golfcartins.com." >&2
echo "  The live site is built from: TTomlinson13/golfcartins-com" >&2
echo >&2
echo "  Running the original script would have wiped the Hostinger web root." >&2
echo "  See README.md in this repo, and the notes at the top of this file." >&2
exit 1
