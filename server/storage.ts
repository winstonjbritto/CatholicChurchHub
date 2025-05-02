import { 
  users, type User, type InsertUser,
  churches, type Church, type InsertChurch,
  masses, type Mass, type InsertMass,
  locations, type Location, type InsertLocation,
  languages, type Language, type InsertLanguage
} from "@shared/schema";
import { DatabaseStorage } from './DatabaseStorage';

// Interface for storage operations
export interface IStorage {
  // User operations (preserved from original)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Church operations
  getAllChurches(): Promise<Church[]>;
  getChurch(id: number): Promise<Church | undefined>;
  getChurchesByLocation(city: string, state: string): Promise<Church[]>;
  getChurchesByZipCode(zipCode: string): Promise<Church[]>;
  searchChurches(query: string): Promise<Church[]>;
  createChurch(church: InsertChurch): Promise<Church>;
  
  // Mass operations
  getMassesByChurch(churchId: number): Promise<Mass[]>;
  getMassesByChurchAndDay(churchId: number, dayOfWeek: number): Promise<Mass[]>;
  getMassesByChurchAndDate(churchId: number, date: string): Promise<Mass[]>;
  getMassesByLanguage(language: string): Promise<Mass[]>;
  createMass(mass: InsertMass): Promise<Mass>;
  
  // Location operations
  getAllLocations(): Promise<Location[]>;
  getLocation(id: number): Promise<Location | undefined>;
  createLocation(location: InsertLocation): Promise<Location>;
  
  // Language operations
  getAllLanguages(): Promise<Language[]>;
  getLanguage(id: number): Promise<Language | undefined>;
  createLanguage(language: InsertLanguage): Promise<Language>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  // Storage collections
  private users: Map<number, User>;
  private churches: Map<number, Church>;
  private masses: Map<number, Mass>;
  private locations: Map<number, Location>;
  private languages: Map<number, Language>;
  
  // ID counters
  private userIdCounter: number;
  private churchIdCounter: number;
  private massIdCounter: number;
  private locationIdCounter: number;
  private languageIdCounter: number;
  
  constructor() {
    // Initialize storage
    this.users = new Map();
    this.churches = new Map();
    this.masses = new Map();
    this.locations = new Map();
    this.languages = new Map();
    
    // Initialize counters
    this.userIdCounter = 1;
    this.churchIdCounter = 1;
    this.massIdCounter = 1;
    this.locationIdCounter = 1;
    this.languageIdCounter = 1;
    
    // Seed initial data
    this.seedData();
  }
  
  // User methods (preserved from original)
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }
  
  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }
  
  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Church methods
  async getAllChurches(): Promise<Church[]> {
    return Array.from(this.churches.values());
  }
  
  async getChurch(id: number): Promise<Church | undefined> {
    return this.churches.get(id);
  }
  
  async getChurchesByLocation(city: string, state: string): Promise<Church[]> {
    return Array.from(this.churches.values()).filter(
      (church) => church.city.toLowerCase() === city.toLowerCase() &&
                  church.state.toLowerCase() === state.toLowerCase()
    );
  }
  
  async getChurchesByZipCode(zipCode: string): Promise<Church[]> {
    return Array.from(this.churches.values()).filter(
      (church) => church.zipCode === zipCode
    );
  }
  
  async searchChurches(query: string): Promise<Church[]> {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.churches.values()).filter(
      (church) => church.name.toLowerCase().includes(lowerQuery) ||
                  church.city.toLowerCase().includes(lowerQuery) ||
                  church.state.toLowerCase().includes(lowerQuery) ||
                  church.description?.toLowerCase().includes(lowerQuery)
    );
  }
  
  async createChurch(insertChurch: InsertChurch): Promise<Church> {
    const id = this.churchIdCounter++;
    const church: Church = { ...insertChurch, id };
    this.churches.set(id, church);
    
    // Update location church count if it exists
    const location = Array.from(this.locations.values()).find(
      loc => loc.name.toLowerCase() === church.city.toLowerCase()
    );
    
    if (location) {
      const updatedLocation = {
        ...location,
        churchCount: location.churchCount + 1
      };
      this.locations.set(location.id, updatedLocation);
    }
    
    return church;
  }
  
  // Mass methods
  async getMassesByChurch(churchId: number): Promise<Mass[]> {
    return Array.from(this.masses.values()).filter(
      (mass) => mass.churchId === churchId
    );
  }
  
  async getMassesByChurchAndDay(churchId: number, dayOfWeek: number): Promise<Mass[]> {
    return Array.from(this.masses.values()).filter(
      (mass) => mass.churchId === churchId && mass.dayOfWeek === dayOfWeek
    );
  }
  
  async getMassesByChurchAndDate(churchId: number, date: string): Promise<Mass[]> {
    return Array.from(this.masses.values()).filter(
      (mass) => mass.churchId === churchId && 
                (mass.date === date || mass.date === undefined || mass.date === null)
    );
  }
  
  async getMassesByLanguage(language: string): Promise<Mass[]> {
    return Array.from(this.masses.values()).filter(
      (mass) => mass.language.toLowerCase() === language.toLowerCase()
    );
  }
  
  async createMass(insertMass: InsertMass): Promise<Mass> {
    const id = this.massIdCounter++;
    const mass: Mass = { ...insertMass, id };
    this.masses.set(id, mass);
    return mass;
  }
  
  // Location methods
  async getAllLocations(): Promise<Location[]> {
    return Array.from(this.locations.values());
  }
  
  async getLocation(id: number): Promise<Location | undefined> {
    return this.locations.get(id);
  }
  
  async createLocation(insertLocation: InsertLocation): Promise<Location> {
    const id = this.locationIdCounter++;
    const location: Location = { ...insertLocation, id };
    this.locations.set(id, location);
    return location;
  }
  
  // Language methods
  async getAllLanguages(): Promise<Language[]> {
    return Array.from(this.languages.values());
  }
  
  async getLanguage(id: number): Promise<Language | undefined> {
    return this.languages.get(id);
  }
  
  async createLanguage(insertLanguage: InsertLanguage): Promise<Language> {
    const id = this.languageIdCounter++;
    const language: Language = { ...insertLanguage, id };
    this.languages.set(id, language);
    return language;
  }
  
  // Seed initial data
  private seedData() {
    // Seed languages
    const languages: InsertLanguage[] = [
      { name: 'English', code: 'en' },
      { name: 'Spanish', code: 'es' },
      { name: 'Latin', code: 'la' },
      { name: 'Polish', code: 'pl' },
      { name: 'Vietnamese', code: 'vi' },
      { name: 'Italian', code: 'it' },
      { name: 'French', code: 'fr' },
      { name: 'Portuguese', code: 'pt' },
      { name: 'Filipino', code: 'fil' }
    ];
    
    languages.forEach(lang => this.createLanguage(lang));
    
    // Seed locations
    const locations: InsertLocation[] = [
      { name: 'New York', state: 'NY', imageUrl: 'https://images.unsplash.com/photo-1502104034360-73176bb1e92e', churchCount: 42 },
      { name: 'Chicago', state: 'IL', imageUrl: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46', churchCount: 36 },
      { name: 'Los Angeles', state: 'CA', imageUrl: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad', churchCount: 28 },
      { name: 'Boston', state: 'MA', imageUrl: 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d', churchCount: 24 },
      { name: 'San Francisco', state: 'CA', imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29', churchCount: 18 },
      { name: 'Miami', state: 'FL', imageUrl: 'https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3', churchCount: 22 },
      { name: 'Washington', state: 'DC', imageUrl: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9', churchCount: 15 },
      { name: 'Philadelphia', state: 'PA', imageUrl: 'https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3', churchCount: 19 }
    ];
    
    locations.forEach(location => this.createLocation(location));
    
    // Seed churches
    const churches: InsertChurch[] = [
      {
        name: "St. Patrick's Cathedral",
        address: "5th Ave, New York, NY 10022",
        city: "New York",
        state: "NY",
        zipCode: "10022",
        latitude: "40.7586",
        longitude: "-73.9762",
        phone: "(212) 753-2261",
        email: "info@saintpatrickscathedral.org",
        website: "https://saintpatrickscathedral.org",
        description: "St. Patrick's Cathedral is the largest decorated Neo-Gothic-style Catholic cathedral in North America.",
        yearEstablished: 1878,
        imageUrl: "https://images.unsplash.com/photo-1550340499-a6c60c554998",
        isHistoric: true,
        hasConfession: true,
        confessionHours: "Monday-Friday: 7:30-8:30 AM, 12:00-1:15 PM, 5:00-5:30 PM",
        rating: "4.8"
      },
      {
        name: "Basilica of the National Shrine",
        address: "400 Michigan Ave NE, Washington, DC 20017",
        city: "Washington",
        state: "DC",
        zipCode: "20017",
        latitude: "38.9333",
        longitude: "-77.0002",
        phone: "(202) 526-8300",
        email: "info@nationalshrine.org",
        website: "https://www.nationalshrine.org",
        description: "The Basilica of the National Shrine of the Immaculate Conception is the largest Roman Catholic church in the United States and North America.",
        yearEstablished: 1920,
        imageUrl: "https://images.unsplash.com/photo-1548690596-f1722c190938",
        isHistoric: true,
        hasConfession: true,
        confessionHours: "Monday-Saturday: 10:00 AM-12:00 PM, 2:00-5:00 PM",
        rating: "4.9"
      },
      {
        name: "Cathedral of St. Mary",
        address: "1111 Gough St, San Francisco, CA 94109",
        city: "San Francisco",
        state: "CA",
        zipCode: "94109",
        latitude: "37.7836",
        longitude: "-122.4257",
        phone: "(415) 567-2020",
        email: "info@stmaryscathedral.org",
        website: "https://www.stmaryscathedral.org",
        description: "The Cathedral of Saint Mary of the Assumption, also known as Saint Mary's Cathedral, is the principal church of the Roman Catholic Archdiocese of San Francisco.",
        yearEstablished: 1891,
        imageUrl: "https://images.unsplash.com/photo-1519562990232-888b5de22e35",
        isHistoric: true,
        hasConfession: true,
        confessionHours: "Wed-Fri: 11:00 AM - 12:00 PM, Saturday: 3:30 PM - 5:00 PM",
        rating: "4.7"
      },
      {
        name: "Holy Name Cathedral",
        address: "735 N State St, Chicago, IL 60654",
        city: "Chicago",
        state: "IL",
        zipCode: "60654",
        latitude: "41.8961",
        longitude: "-87.6289",
        phone: "(312) 787-8040",
        email: "info@holynamecathedral.org",
        website: "https://holynamecathedral.org",
        description: "Holy Name Cathedral is the seat of the Archdiocese of Chicago, one of the largest Roman Catholic dioceses in the United States.",
        yearEstablished: 1874,
        imageUrl: "https://images.unsplash.com/photo-1543968996-ee822b8176ba",
        isHistoric: true,
        hasConfession: true,
        confessionHours: "Monday-Friday: 7:30-7:50 AM, 11:15-11:50 AM, Saturday: 3:00-5:00 PM",
        rating: "4.6"
      },
      {
        name: "Cathedral of Our Lady of the Angels",
        address: "555 W Temple St, Los Angeles, CA 90012",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90012",
        latitude: "34.0581",
        longitude: "-118.2455",
        phone: "(213) 680-5200",
        email: "info@olacathedral.org",
        website: "https://www.olacathedral.org",
        description: "The Cathedral of Our Lady of the Angels serves as the mother church for the Archdiocese of Los Angeles.",
        yearEstablished: 2002,
        imageUrl: "https://images.unsplash.com/photo-1515404929826-76fff9fef6fe",
        isHistoric: false,
        hasConfession: true,
        confessionHours: "Monday-Friday: 11:00 AM - 12:00 PM, Saturday: 9:00-10:00 AM, 3:00-4:00 PM",
        rating: "4.5"
      },
      {
        name: "Cathedral of the Holy Cross",
        address: "1400 Washington St, Boston, MA 02118",
        city: "Boston",
        state: "MA",
        zipCode: "02118",
        latitude: "42.3387",
        longitude: "-71.0710",
        phone: "(617) 542-5682",
        email: "info@holycrossboston.com",
        website: "https://holycrossboston.com",
        description: "The Cathedral of the Holy Cross is the mother church of the Roman Catholic Archdiocese of Boston.",
        yearEstablished: 1875,
        imageUrl: "https://images.unsplash.com/photo-154135567230-8ada335d782e",
        isHistoric: true,
        hasConfession: true,
        confessionHours: "Wednesday: 6:30-8:00 PM, Saturday: 9:30-12:00 PM",
        rating: "4.7"
      }
    ];
    
    churches.forEach(church => this.createChurch(church));
    
    // Seed masses
    // For St. Patrick's Cathedral
    const stPatricksMasses: InsertMass[] = [
      { churchId: 1, dayOfWeek: 0, time: "07:00", language: "English", priestName: "Fr. Michael", description: "Sunday Mass" },
      { churchId: 1, dayOfWeek: 0, time: "08:00", language: "English", priestName: "Fr. James", description: "Sunday Mass" },
      { churchId: 1, dayOfWeek: 0, time: "10:15", language: "English", priestName: "Fr. Thomas", description: "Sunday High Mass" },
      { churchId: 1, dayOfWeek: 0, time: "12:00", language: "English", priestName: "Fr. William", description: "Sunday Mass" },
      { churchId: 1, dayOfWeek: 0, time: "17:30", language: "English", priestName: "Fr. Robert", description: "Sunday Evening Mass" },
      { churchId: 1, dayOfWeek: 1, time: "07:00", language: "English", priestName: "Fr. Michael", description: "Weekday Mass" },
      { churchId: 1, dayOfWeek: 1, time: "12:00", language: "English", priestName: "Fr. James", description: "Weekday Mass" },
      { churchId: 1, dayOfWeek: 1, time: "17:30", language: "English", priestName: "Fr. Thomas", description: "Weekday Evening Mass" },
      { churchId: 1, dayOfWeek: 2, time: "07:00", language: "English", priestName: "Fr. William", description: "Weekday Mass" },
      { churchId: 1, dayOfWeek: 2, time: "12:00", language: "English", priestName: "Fr. Robert", description: "Weekday Mass" },
      { churchId: 1, dayOfWeek: 2, time: "17:30", language: "English", priestName: "Fr. Michael", description: "Weekday Evening Mass" }
    ];
    
    // For Basilica of the National Shrine
    const basilicaMasses: InsertMass[] = [
      { churchId: 2, dayOfWeek: 0, time: "07:30", language: "English", priestName: "Fr. David", description: "Sunday Mass" },
      { churchId: 2, dayOfWeek: 0, time: "09:00", language: "English", priestName: "Fr. Joseph", description: "Sunday Mass" },
      { churchId: 2, dayOfWeek: 0, time: "10:30", language: "English", priestName: "Fr. Patrick", description: "Sunday High Mass" },
      { churchId: 2, dayOfWeek: 0, time: "12:30", language: "Spanish", priestName: "Fr. Carlos", description: "Spanish Sunday Mass", isSpecial: true },
      { churchId: 2, dayOfWeek: 0, time: "16:30", language: "English", priestName: "Fr. Andrew", description: "Sunday Evening Mass" },
      { churchId: 2, dayOfWeek: 1, time: "07:30", language: "English", priestName: "Fr. David", description: "Weekday Mass" },
      { churchId: 2, dayOfWeek: 1, time: "12:10", language: "English", priestName: "Fr. Joseph", description: "Weekday Mass" },
      { churchId: 2, dayOfWeek: 1, time: "17:15", language: "English", priestName: "Fr. Patrick", description: "Weekday Evening Mass" }
    ];
    
    // For Cathedral of St. Mary
    const stMaryMasses: InsertMass[] = [
      { churchId: 3, dayOfWeek: 0, time: "08:00", language: "English", priestName: "Fr. Richard", description: "Sunday Mass" },
      { churchId: 3, dayOfWeek: 0, time: "10:00", language: "English", priestName: "Fr. George", description: "Sunday Family Mass" },
      { churchId: 3, dayOfWeek: 0, time: "12:00", language: "English", priestName: "Fr. Daniel", description: "Sunday Mass" },
      { churchId: 3, dayOfWeek: 0, time: "18:30", language: "Spanish", priestName: "Fr. Carlos", description: "Spanish Sunday Mass", isSpecial: true },
      { churchId: 3, dayOfWeek: 1, time: "08:00", language: "English", priestName: "Fr. Richard", description: "Weekday Mass" },
      { churchId: 3, dayOfWeek: 1, time: "12:00", language: "English", priestName: "Fr. George", description: "Weekday Mass" },
      { churchId: 3, dayOfWeek: 2, time: "08:00", language: "English", priestName: "Fr. Daniel", description: "Weekday Mass" },
      { churchId: 3, dayOfWeek: 2, time: "12:00", language: "English", priestName: "Fr. Richard", description: "Weekday Mass" }
    ];
    
    // Add masses for all churches
    stPatricksMasses.forEach(mass => this.createMass(mass));
    basilicaMasses.forEach(mass => this.createMass(mass));
    stMaryMasses.forEach(mass => this.createMass(mass));
    
    // Add masses for other churches - Holy Name Cathedral
    const holyNameMasses: InsertMass[] = [
      { churchId: 4, dayOfWeek: 0, time: "07:00", language: "English", priestName: "Fr. Matthew", description: "Sunday Mass" },
      { churchId: 4, dayOfWeek: 0, time: "09:30", language: "English", priestName: "Fr. Anthony", description: "Sunday Mass" },
      { churchId: 4, dayOfWeek: 0, time: "11:00", language: "English", priestName: "Fr. Christopher", description: "Sunday High Mass" },
      { churchId: 4, dayOfWeek: 0, time: "17:00", language: "English", priestName: "Fr. Matthew", description: "Sunday Evening Mass" },
      { churchId: 4, dayOfWeek: 1, time: "06:30", language: "English", priestName: "Fr. Anthony", description: "Weekday Mass" },
      { churchId: 4, dayOfWeek: 1, time: "12:10", language: "English", priestName: "Fr. Christopher", description: "Weekday Mass" }
    ];
    
    // Cathedral of Our Lady of the Angels
    const ladyOfAngelsMasses: InsertMass[] = [
      { churchId: 5, dayOfWeek: 0, time: "08:00", language: "English", priestName: "Fr. Mark", description: "Sunday Mass" },
      { churchId: 5, dayOfWeek: 0, time: "10:00", language: "English", priestName: "Fr. Timothy", description: "Sunday Mass" },
      { churchId: 5, dayOfWeek: 0, time: "12:30", language: "Spanish", priestName: "Fr. Juan", description: "Spanish Sunday Mass", isSpecial: true },
      { churchId: 5, dayOfWeek: 0, time: "16:00", language: "Vietnamese", priestName: "Fr. Nguyen", description: "Vietnamese Sunday Mass", isSpecial: true },
      { churchId: 5, dayOfWeek: 1, time: "07:00", language: "English", priestName: "Fr. Mark", description: "Weekday Mass" },
      { churchId: 5, dayOfWeek: 1, time: "12:10", language: "English", priestName: "Fr. Timothy", description: "Weekday Mass" }
    ];
    
    // Cathedral of the Holy Cross
    const holyCrossMasses: InsertMass[] = [
      { churchId: 6, dayOfWeek: 0, time: "08:00", language: "English", priestName: "Fr. Paul", description: "Sunday Mass" },
      { churchId: 6, dayOfWeek: 0, time: "09:30", language: "Spanish", priestName: "Fr. Miguel", description: "Spanish Sunday Mass", isSpecial: true },
      { churchId: 6, dayOfWeek: 0, time: "11:30", language: "English", priestName: "Fr. Peter", description: "Sunday High Mass" },
      { churchId: 6, dayOfWeek: 0, time: "17:00", language: "English", priestName: "Fr. Philip", description: "Sunday Evening Mass" },
      { churchId: 6, dayOfWeek: 1, time: "07:00", language: "English", priestName: "Fr. Paul", description: "Weekday Mass" },
      { churchId: 6, dayOfWeek: 1, time: "12:10", language: "English", priestName: "Fr. Peter", description: "Weekday Mass" }
    ];
    
    holyNameMasses.forEach(mass => this.createMass(mass));
    ladyOfAngelsMasses.forEach(mass => this.createMass(mass));
    holyCrossMasses.forEach(mass => this.createMass(mass));
  }
}

// Use the DatabaseStorage instance
import { DatabaseStorage as DbStorage } from './DatabaseStorage';
export const storage = new DbStorage();
