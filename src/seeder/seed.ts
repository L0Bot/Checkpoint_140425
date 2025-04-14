import "reflect-metadata";
import { AppDataSource } from "../config/data-source";
import { Country } from "../entities/Country";
import { countries } from "./countries";

const seed = async () => {
  await AppDataSource.initialize();
  for (const countryData of countries) {
    const exists = await Country.findOneBy({ code: countryData.code });
    if (!exists) {
      const country = Country.create(countryData as Partial<Country>);
      await country.save();
    }
  }
  console.log("✅ Countries seeded.");
  process.exit();
};

seed();
