import { db } from '../server/db';
import { 
  users, 
  churches, 
  masses, 
  locations, 
  languages,
  type InsertChurch,
  type InsertMass,
  type InsertLocation,
  type InsertLanguage
} from '../shared/schema';

async function initDb() {
  console.log('Initializing database...');
  
  // Seed languages
  console.log('Seeding languages...');
  const seedLanguages: InsertLanguage[] = [
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
  
  for (const lang of seedLanguages) {
    try {
      await db.insert(languages).values(lang);
    } catch (error) {
      console.error(`Error seeding language ${lang.name}:`, error);
    }
  }

  // Seed locations
  console.log('Seeding locations...');
  const seedLocations: InsertLocation[] = [
    { name: 'New York', state: 'NY', imageUrl: 'https://images.unsplash.com/photo-1502104034360-73176bb1e92e', churchCount: 42 },
    { name: 'Chicago', state: 'IL', imageUrl: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46', churchCount: 36 },
    { name: 'Los Angeles', state: 'CA', imageUrl: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad', churchCount: 28 },
    { name: 'Boston', state: 'MA', imageUrl: 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d', churchCount: 24 },
    { name: 'San Francisco', state: 'CA', imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29', churchCount: 18 },
    { name: 'Miami', state: 'FL', imageUrl: 'https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3', churchCount: 22 },
    { name: 'Washington', state: 'DC', imageUrl: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9', churchCount: 15 },
    { name: 'Philadelphia', state: 'PA', imageUrl: 'https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3', churchCount: 19 }
  ];
  
  for (const location of seedLocations) {
    try {
      await db.insert(locations).values(location);
    } catch (error) {
      console.error(`Error seeding location ${location.name}:`, error);
    }
  }

  // Seed churches
  console.log('Seeding churches...');
  const seedChurches: InsertChurch[] = [
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
      imageUrl: "https://images.unsplash.com/photo-1541135198597-500ab531da58",
      isHistoric: true,
      hasConfession: true,
      confessionHours: "Wednesday: 6:30-8:00 PM, Saturday: 9:30-12:00 PM",
      rating: "4.7"
    }
  ];

  let churchIds: Record<string, number> = {};
  
  for (const church of seedChurches) {
    try {
      const [insertedChurch] = await db.insert(churches).values(church).returning({ id: churches.id, name: churches.name });
      churchIds[insertedChurch.name] = insertedChurch.id;
      console.log(`Added church: ${insertedChurch.name} with ID: ${insertedChurch.id}`);
    } catch (error) {
      console.error(`Error seeding church ${church.name}:`, error);
    }
  }

  // Seed masses
  console.log('Seeding masses...');
  
  // St. Patrick's masses
  if (churchIds["St. Patrick's Cathedral"]) {
    const stPatricksId = churchIds["St. Patrick's Cathedral"];
    const stPatricksMasses: InsertMass[] = [
      { churchId: stPatricksId, dayOfWeek: 0, time: "07:00", language: "English", priestName: "Fr. Michael", description: "Sunday Mass" },
      { churchId: stPatricksId, dayOfWeek: 0, time: "08:00", language: "English", priestName: "Fr. James", description: "Sunday Mass" },
      { churchId: stPatricksId, dayOfWeek: 0, time: "10:15", language: "English", priestName: "Fr. Thomas", description: "Sunday High Mass" },
      { churchId: stPatricksId, dayOfWeek: 0, time: "12:00", language: "English", priestName: "Fr. William", description: "Sunday Mass" },
      { churchId: stPatricksId, dayOfWeek: 0, time: "17:30", language: "English", priestName: "Fr. Robert", description: "Sunday Evening Mass" },
      { churchId: stPatricksId, dayOfWeek: 1, time: "07:00", language: "English", priestName: "Fr. Michael", description: "Weekday Mass" },
      { churchId: stPatricksId, dayOfWeek: 1, time: "12:00", language: "English", priestName: "Fr. James", description: "Weekday Mass" },
      { churchId: stPatricksId, dayOfWeek: 1, time: "17:30", language: "English", priestName: "Fr. Thomas", description: "Weekday Evening Mass" },
    ];
    
    for (const mass of stPatricksMasses) {
      try {
        await db.insert(masses).values(mass);
      } catch (error) {
        console.error(`Error seeding mass for ${mass.churchId}:`, error);
      }
    }
  }
  
  // Basilica masses
  if (churchIds["Basilica of the National Shrine"]) {
    const basilicaId = churchIds["Basilica of the National Shrine"];
    const basilicaMasses: InsertMass[] = [
      { churchId: basilicaId, dayOfWeek: 0, time: "07:30", language: "English", priestName: "Fr. David", description: "Sunday Mass" },
      { churchId: basilicaId, dayOfWeek: 0, time: "09:00", language: "English", priestName: "Fr. Joseph", description: "Sunday Mass" },
      { churchId: basilicaId, dayOfWeek: 0, time: "10:30", language: "English", priestName: "Fr. Patrick", description: "Sunday High Mass" },
      { churchId: basilicaId, dayOfWeek: 0, time: "12:30", language: "Spanish", priestName: "Fr. Carlos", description: "Spanish Sunday Mass", isSpecial: true },
      { churchId: basilicaId, dayOfWeek: 0, time: "16:30", language: "English", priestName: "Fr. Andrew", description: "Sunday Evening Mass" },
    ];
    
    for (const mass of basilicaMasses) {
      try {
        await db.insert(masses).values(mass);
      } catch (error) {
        console.error(`Error seeding mass for ${mass.churchId}:`, error);
      }
    }
  }
  
  // St Mary masses
  if (churchIds["Cathedral of St. Mary"]) {
    const stMaryId = churchIds["Cathedral of St. Mary"];
    const stMaryMasses: InsertMass[] = [
      { churchId: stMaryId, dayOfWeek: 0, time: "08:00", language: "English", priestName: "Fr. John", description: "Sunday Mass" },
      { churchId: stMaryId, dayOfWeek: 0, time: "09:30", language: "Spanish", priestName: "Fr. Miguel", description: "Spanish Sunday Mass" },
      { churchId: stMaryId, dayOfWeek: 0, time: "11:00", language: "English", priestName: "Fr. Peter", description: "Sunday High Mass" },
      { churchId: stMaryId, dayOfWeek: 0, time: "13:00", language: "Vietnamese", priestName: "Fr. Nguyen", description: "Vietnamese Sunday Mass", isSpecial: true },
      { churchId: stMaryId, dayOfWeek: 0, time: "17:30", language: "English", priestName: "Fr. John", description: "Sunday Evening Mass" },
    ];
    
    for (const mass of stMaryMasses) {
      try {
        await db.insert(masses).values(mass);
      } catch (error) {
        console.error(`Error seeding mass for ${mass.churchId}:`, error);
      }
    }
  }
  
  console.log('Database initialization complete!');
}

// Run the initialization
initDb()
  .then(() => {
    console.log('Successfully initialized the database');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error initializing database:', error);
    process.exit(1);
  });