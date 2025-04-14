import { Field, ID, InputType, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true, length: 2 })
  code!: string;

  @Field()
  @Column({ length: 100 })
  name!: string;

  @Field()
  @Column()
  emoji!: string;

  @Field()
  @Column({ length: 100 })
  continentName!: string;

  @Field()
  @Column({ length: 2 })
  continentCode!: string;
}

@InputType()
export class CountryCreateInput {
  @Field()
  code!: string;

  @Field()
  name!: string;

  @Field()
  emoji!: string;

  @Field()
  continentName!: string;

  @Field()
  continentCode!: string;
}
