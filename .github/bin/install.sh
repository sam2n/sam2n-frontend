#!/bin/bash

# Verify installation
echo "npm version $(npm --version)"

# Install Angular CLI
npm install -g "@angular/cli@$ANGULAR_CLI_VERSION"

# Set ng PATH
export PATH="$HOME/.npm-global/bin:$PATH"

# Verify Angular CLI installation
echo "ng version $(ng version)"
