#!/bin/bash
# Deploy golfcartins-landing to Hostinger via FTP
# Usage: FTP_PASS=xxx bash deploy.sh
HOST="ftp.hostinger.com"
USER="tt@usicna.com"
REMOTE_DIR="/public_html"
LOCAL_DIR="./public"

lftp -u "$USER,$FTP_PASS" "$HOST" << EOF
set ftp:ssl-allow yes
mirror --reverse --delete --verbose "$LOCAL_DIR" "$REMOTE_DIR"
bye
EOF
