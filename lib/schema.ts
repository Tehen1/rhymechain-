import { integer, pgTable, serial, text, timestamp, varchar, boolean, decimal } from "drizzle-orm/pg-core"

export const artists = pgTable("artists", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  countryCode: varchar("country_code", { length: 2 }).notNull(),
  bio: text("bio"),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
})

export const cardRarities = pgTable("card_rarities", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  description: text("description"),
  colorHex: varchar("color_hex", { length: 7 }).notNull(),
  dropRate: decimal("drop_rate").notNull(),
})

export const cards = pgTable("cards", {
  id: serial("id").primaryKey(),
  artistId: integer("artist_id").references(() => artists.id),
  name: varchar("name", { length: 100 }).notNull(),
  rarityId: integer("rarity_id").references(() => cardRarities.id),
  imageUrl: text("image_url").notNull(),
  flowStat: integer("flow_stat").notNull(),
  lyricsStat: integer("lyrics_stat").notNull(),
  impactStat: integer("impact_stat").notNull(),
  power: integer("power"),
  isPremium: boolean("is_premium").default(false),
  createdAt: timestamp("created_at").defaultNow(),
})

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  walletAddress: varchar("wallet_address", { length: 42 }).notNull().unique(),
  username: varchar("username", { length: 50 }).unique(),
  email: varchar("email", { length: 100 }).unique(),
  createdAt: timestamp("created_at").defaultNow(),
})

export const userCards = pgTable("user_cards", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  cardId: integer("card_id").references(() => cards.id),
  acquiredAt: timestamp("acquired_at").defaultNow(),
  transactionHash: varchar("transaction_hash", { length: 66 }),
})

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description"),
  eventDate: timestamp("event_date").notNull(),
  location: varchar("location", { length: 100 }),
  isVirtual: boolean("is_virtual").default(false),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
})

export const cardDrops = pgTable("card_drops", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description"),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  totalSupply: integer("total_supply").notNull(),
  priceInRhyme: decimal("price_in_rhyme").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
})

export const transactions = pgTable("transactions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  cardId: integer("card_id").references(() => cards.id),
  transactionType: varchar("transaction_type", { length: 20 }).notNull(),
  amountInRhyme: decimal("amount_in_rhyme").notNull(),
  transactionHash: varchar("transaction_hash", { length: 66 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
})

// Types for our schema
export type Artist = typeof artists.$inferSelect
export type Card = typeof cards.$inferSelect
export type CardRarity = typeof cardRarities.$inferSelect
export type Event = typeof events.$inferSelect
export type CardDrop = typeof cardDrops.$inferSelect
