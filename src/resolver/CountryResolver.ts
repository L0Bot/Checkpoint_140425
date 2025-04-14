import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country, CountryCreateInput } from "../entities/Country";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async getAllCountries(): Promise<Country[]> {
    return await Country.find();
  }

  @Query(() => Country, { nullable: true })
  async getCountryByCode(@Arg("code") code: string): Promise<Country | null> {
    return await Country.findOneBy({ code });
  }

  @Query(() => [Country])
  async getCountriesByContinentCode(
    @Arg("continentCode") continentCode: string
  ): Promise<Country[]> {
    return await Country.findBy({ continentCode });
  }

  @Mutation(() => Country)
  async addCountry(@Arg("data") data: CountryCreateInput): Promise<Country> {
    const { code, name, emoji, continentName, continentCode } = data;

    if (code.length !== 2 || code !== code.toUpperCase()) {
      throw new Error("Country code must be 2 uppercase letters (e.g., FR).");
    }

    if (!/^[\u{1F1E6}-\u{1F1FF}]{2}$/u.test(emoji)) {
      throw new Error("Emoji must be a valid flag emoji (🇫🇷, 🇧🇪...).");
    }

    if (
      continentCode.length !== 2 ||
      continentCode !== continentCode.toUpperCase()
    ) {
      throw new Error("Continent code must be 2 uppercase letters (e.g., EU).");
    }

    const existing = await Country.findOneBy({ code });
    if (existing) {
      throw new Error(`Country with code "${code}" already exists.`);
    }

    const country = Country.create({
      code,
      name,
      emoji,
      continentName,
      continentCode,
    });

    await country.save();
    return country;
  }
}
