# Yarn

### Install yarn:

```bash
corepack enable #Enable Corepack
yarn set version stable #Install latest version of Yarn
yarn install #Install dependencies
```

### Upgrade dependencies across whole project

```bash
yarn up
```

### Install dependencies:

```bash
yarn install
```

### Start dev server:

```bash
yarn dev
```

### Deploy:

```bash
yarn run deploy
```

# Prettier

### Install Prettier locally:

```bash
yarn add --dev --exact prettier
```

### Create empty config file:

```bash
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```

### Format all files with Prettier:

```bash
yarn prettier . --write
```

### Check formatting:

```bash
yarn prettier . --check
```


### Other
```bash
yarn create next-app # Must have Yarn installed globally
```