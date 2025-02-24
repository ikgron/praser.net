# For installing yarn:
#Enable Corepack:
corepack enable

# Update yarn to latest version:
yarn set version stable
yarn install

# Upgrade dependencies across whole project:
yarn up


# Install dependencies:
yarn install

# Start dev server: 
yarn run dev

# Deploy:
yarn run deploy


# Install Prettier locally:
yarn add --dev --exact prettier

# Format all files with Prettier:
yarn prettier . --write

# Check formatting:
yarn prettier . --check