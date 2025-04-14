# 🌍 Checkpoint 14/04/2025

## ⚙️ Installation

```bash
git clone git@github.com:L0Bot/Checkpoint_140425.git
cd Checkpoint_140425
npm install
```

## 📂 Démarrer l’API

```bash
npm run dev
```

L'API sera disponible ici :  
👉 [http://localhost:4000](http://localhost:4000)

## 🌱 Seed de la base (ajoute 50 pays automatiquement)

```bash
npm run seed
```

## Requêtes GraphQL

### Mutation (1)

#### 1. `addCountry`

> Enregistre un nouveau pays dans la base (avec code, nom, emoji, continentName, continentCode)

```graphql
mutation CreateCountry {
  addCountry(
    data: {
      code: "FR"
      name: "France"
      emoji: "🇫🇷"
      continentName: "Europe"
      continentCode: "EU"
    }
  ) {
    id
    name
    code
    emoji
    continentName
    continentCode
  }
}
```

### Queries (3)

#### 2. `getAllCountries`

> Renvoie tous les pays, avec `code`, `name` et `emoji`

```graphql
query GetAllCountries {
  getAllCountries {
    code
    name
    emoji
  }
}
```

#### 3. `getCountryByCode`

> Prend en paramètre un `code` et renvoie le pays correspondant

```graphql
query GetCountryByCode {
  getCountryByCode(code: "FR") {
    code
    name
    emoji
    continentName
    continentCode
  }
}
```

#### 4. `getCountriesByContinentCode`

> Prend en paramètre un `continentCode` et renvoie les pays correspondants

```graphql
query GetCountriesByContinentCode {
  getCountriesByContinentCode(continentCode: "EU") {
    code
    name
    emoji
  }
}
```
