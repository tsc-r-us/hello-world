# TSC "R" Us
Typescript starting point.

## Getting start
Click `Use this template`.

Clone the repo down and install the depenedencies:
```
npm install
```

Then start writing typescript and compile for use with Node v10.x/v12.x+.

### Build
Build Typescript:
```
npm run build
```

### Watch
Watch for changes and have Typescript build automagically:
```
npm run watch
```

### Use ts-node
You can run new files through ts-node without installing globally:
```
npm run ts-node -- src/index.ts
```
Or install globally:
```
npm i -g ts-node
```
and use it directly:
```
ts-node src/index.ts
```
**NOTE:** This may result in different versions globally vs locally.