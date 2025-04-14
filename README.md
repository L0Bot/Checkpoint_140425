# Checkpoint 14/04/2025

Mutation d'ajout :

```graphql
mutation {
  addCountry(code: "FR", name: "France", emoji: "🇫🇷", continent: "EUROPE") {
    id
    name
  }
}
```

Requête pour tous les pays :

```graphql
query {
  getAllCountries {
    code
    name
    emoji
    continent
  }
}
```

Requête par code :

```graphql
query {
  getCountryByCode(code: "FR") {
    name
    emoji
    continent
  }
}
```

Requête par continent :

```graphql
query {
  getCountriesByContinent(continent: "EUROPE") {
    name
    emoji
  }
}
```
