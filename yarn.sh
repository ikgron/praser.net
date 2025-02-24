# Install dependencies:
yarn install

# Start dev server: 
yarn run dev

# Deploy:
yarn run deploy


# Install Prettier locally:
yarn add --dev --exact prettier

# Create empty config file:
node --eval "fs.writeFileSync('.prettierrc','{}\n')"

# Format all files with Prettier:
yarn prettier . --write

# Check formatting:
yarn prettier . --check