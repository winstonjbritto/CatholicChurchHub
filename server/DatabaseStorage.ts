import { 
  users, type User, type InsertUser,
  churches, type Church, type InsertChurch,
  masses, type Mass, type InsertMass,
  locations, type Location, type InsertLocation,
  languages, type Language, type InsertLanguage
} from "@shared/schema";
import { db } from './db';
import { eq, and, like, or, desc, isNull } from 'drizzle-orm';
import { IStorage } from './storage';

// Database storage implementation
export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }
  
  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }
  
  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // Church operations
  async getAllChurches(): Promise<Church[]> {
    return await db.select().from(churches);
  }
  
  async getChurch(id: number): Promise<Church | undefined> {
    const [church] = await db.select().from(churches).where(eq(churches.id, id));
    return church;
  }
  
  async getChurchesByLocation(city: string, state: string): Promise<Church[]> {
    return await db.select().from(churches)
      .where(
        and(
          eq(churches.city, city),
          eq(churches.state, state)
        )
      );
  }
  
  async getChurchesByZipCode(zipCode: string): Promise<Church[]> {
    return await db.select().from(churches).where(eq(churches.zipCode, zipCode));
  }
  
  async searchChurches(query: string): Promise<Church[]> {
    const searchPattern = `%${query.toLowerCase()}%`;
    return await db.select().from(churches)
      .where(
        or(
          like(churches.name, searchPattern),
          like(churches.address, searchPattern),
          like(churches.city, searchPattern),
          like(churches.state, searchPattern),
          like(churches.zipCode, searchPattern)
        )
      );
  }
  
  async createChurch(insertChurch: InsertChurch): Promise<Church> {
    const [church] = await db.insert(churches).values(insertChurch).returning();
    return church;
  }
  
  // Mass operations
  async getMassesByChurch(churchId: number): Promise<Mass[]> {
    return await db.select().from(masses)
      .where(eq(masses.churchId, churchId))
      .orderBy(masses.dayOfWeek, masses.time);
  }
  
  async getMassesByChurchAndDay(churchId: number, dayOfWeek: number): Promise<Mass[]> {
    return await db.select().from(masses)
      .where(
        and(
          eq(masses.churchId, churchId),
          eq(masses.dayOfWeek, dayOfWeek)
        )
      )
      .orderBy(masses.time);
  }
  
  async getMassesByChurchAndDate(churchId: number, date: string): Promise<Mass[]> {
    // First get masses with specific dates
    const specificDateMasses = await db.select().from(masses)
      .where(
        and(
          eq(masses.churchId, churchId),
          eq(masses.date, date)
        )
      );
      
    // Now get regular masses for this day of week
    // Parse the date string (YYYY-MM-DD) to get day of week
    const dayOfWeek = new Date(date).getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    const regularMasses = await db.select().from(masses)
      .where(
        and(
          eq(masses.churchId, churchId),
          eq(masses.dayOfWeek, dayOfWeek),
          isNull(masses.date)
        )
      );
    
    // Combine and sort results
    return [...specificDateMasses, ...regularMasses].sort((a, b) => {
      return a.time.localeCompare(b.time);
    });
  }
  
  async getMassesByLanguage(language: string): Promise<Mass[]> {
    return await db.select().from(masses)
      .where(eq(masses.language, language));
  }
  
  async createMass(insertMass: InsertMass): Promise<Mass> {
    const [mass] = await db.insert(masses).values(insertMass).returning();
    return mass;
  }
  
  // Location operations
  async getAllLocations(): Promise<Location[]> {
    return await db.select().from(locations);
  }
  
  async getLocation(id: number): Promise<Location | undefined> {
    const [location] = await db.select().from(locations).where(eq(locations.id, id));
    return location;
  }
  
  async createLocation(insertLocation: InsertLocation): Promise<Location> {
    const [location] = await db.insert(locations).values(insertLocation).returning();
    return location;
  }
  
  // Language operations
  async getAllLanguages(): Promise<Language[]> {
    return await db.select().from(languages);
  }
  
  async getLanguage(id: number): Promise<Language | undefined> {
    const [language] = await db.select().from(languages).where(eq(languages.id, id));
    return language;
  }
  
  async createLanguage(insertLanguage: InsertLanguage): Promise<Language> {
    const [language] = await db.insert(languages).values(insertLanguage).returning();
    return language;
  }
}