# instagram-clone

Monorepo structure:
>
     ├── web          # Instagram web frontend
     ├── ui           # Reusable components
     ├── api          # Instagram backend
     ├── mobile?      # Native app (Maybe in future)
 >

## Installation and development
Clone repository, install dependencies.
```
git clone https://github.com/Skona27/instagram-clone.git
cd instagram-clone
yarn install
cd packages
```
cd into specific directory:
### Web (frontend)
Scripts: 
```
yarn dev        # For development
yarn build      # Production
yarn start      #  --||--
yarn test:tsc   # Typescript compilation
``` 

### API (backend)
Scripts: 
```
yarn dev        # For development
``` 