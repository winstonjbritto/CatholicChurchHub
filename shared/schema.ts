import { pgTable, text, serial, integer, boolean, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema - retained from original file
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Church schema
export const churches = pgTable("churches", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zipCode: text("zip_code").notNull(),
  latitude: text("latitude"),
  longitude: text("longitude"),
  phone: text("phone"),
  email: text("email"),
  website: text("website"),
  description: text("description"),
  yearEstablished: integer("year_established"),
  imageUrl: text("image_url"),
  isHistoric: boolean("is_historic").default(false),
  hasConfession: boolean("has_confession").default(false),
  confessionHours: text("confession_hours"),
  rating: text("rating"),
});

// Mass schema
export const masses = pgTable("masses", {
  id: serial("id").primaryKey(),
  churchId: integer("church_id").notNull(),
  dayOfWeek: integer("day_of_week").notNull(), // 0 = Sunday, 1 = Monday, etc.
  time: text("time").notNull(), // HH:MM format
  language: text("language").notNull().default("English"),
  isSpecial: boolean("is_special").default(false),
  priestName: text("priest_name"),
  description: text("description"),
  date: text("date"), // For special masses on specific dates (YYYY-MM-DD)
});

// Location schema (for popular locations)
export const locations = pgTable("locations", {
  id: serial("id").primaryKey(), 
  name: text("name").notNull(),
  state: text("state"),
  imageUrl: text("image_url"),
  churchCount: integer("church_count").default(0),
});

// Language schema
export const languages = pgTable("languages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  code: text("code").notNull().unique(),
});

// Insert schemas for each entity
export const insertChurchSchema = createInsertSchema(churches).omit({
  id: true
});

export const insertMassSchema = createInsertSchema(masses).omit({
  id: true
});

export const insertLocationSchema = createInsertSchema(locations).omit({
  id: true
});

export const insertLanguageSchema = createInsertSchema(languages).omit({
  id: true
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertChurch = z.infer<typeof insertChurchSchema>;
export type Church = typeof churches.$inferSelect;

export type InsertMass = z.infer<typeof insertMassSchema>;
export type Mass = typeof masses.$inferSelect;

export type InsertLocation = z.infer<typeof insertLocationSchema>;
export type Location = typeof locations.$inferSelect;

export type InsertLanguage = z.infer<typeof insertLanguageSchema>;
export type Language = typeof languages.$inferSelect;
