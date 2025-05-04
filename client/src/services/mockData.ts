import { Church, Mass, Location, Language } from "@/types";
import { getTodayDayOfWeek, isTimePassed } from "@/lib/utils";

// Mock languages available for masses
export const mockLanguages: Language[] = [
  { id: 1, name: "English", code: "en" },
  { id: 2, name: "Spanish", code: "es" },
  { id: 3, name: "Latin", code: "la" },
  { id: 4, name: "Polish", code: "pl" },
  { id: 5, name: "Italian", code: "it" },
  { id: 6, name: "French", code: "fr" },
  { id: 7, name: "Portuguese", code: "pt" },
  { id: 8, name: "Vietnamese", code: "vi" },
  { id: 9, name: "Korean", code: "ko" },
  { id: 10, name: "Tagalog", code: "tl" }
];

// Mock locations (cities/regions)
export const mockLocations: Location[] = [
  { 
    id: 1, 
    name: "New York", 
    state: "NY", 
    imageUrl: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9yayUyMGNhdGhvbGljJTIwY2h1cmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    churchCount: 124
  },
  { 
    id: 2, 
    name: "Los Angeles", 
    state: "CA", 
    imageUrl: "https://images.unsplash.com/photo-1489528792647-46ec39027556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9zJTIwYW5nZWxlcyUyMGNhdGhvbGljJTIwY2h1cmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    churchCount: 86
  },
  { 
    id: 3, 
    name: "Chicago", 
    state: "IL", 
    imageUrl: "https://images.unsplash.com/photo-1501702580495-ec0f3562e7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2FnbyUyMGNhdGhvbGljJTIwY2h1cmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    churchCount: 78
  },
  { 
    id: 4, 
    name: "Boston", 
    state: "MA", 
    imageUrl: "https://images.unsplash.com/photo-1569644744397-67de0c62524c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9zdG9uJTIwY2F0aG9saWMlMjBjaHVyY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    churchCount: 65
  },
  { 
    id: 5, 
    name: "Philadelphia", 
    state: "PA", 
    imageUrl: "https://images.unsplash.com/photo-1544961371-516024bb8f9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhpbGFkZWxwaGlhJTIwY2F0aG9saWMlMjBjaHVyY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    churchCount: 57
  },
  { 
    id: 6, 
    name: "Miami", 
    state: "FL", 
    imageUrl: "https://images.unsplash.com/photo-1574564320771-411b63d8d18d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWlhbWklMjBjYXRob2xpYyUyMGNodXJjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    churchCount: 48
  },
  { 
    id: 7, 
    name: "San Francisco", 
    state: "CA", 
    imageUrl: "https://images.unsplash.com/photo-1551191446-e5c7cbee2b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuJTIwZnJhbmNpc2NvJTIwY2F0aG9saWMlMjBjaHVyY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    churchCount: 42
  },
  { 
    id: 8, 
    name: "San Antonio", 
    state: "TX", 
    imageUrl: "https://images.unsplash.com/photo-1525630558331-067123dj7b3q?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuJTIwYW50b25pbyUyMGNodXJjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    churchCount: 39
  }
];

// Mock churches
export const mockChurches: Church[] = [
  {
    id: 1,
    name: "St. Patrick's Cathedral",
    address: "5th Ave, New York, NY 10022",
    city: "New York",
    state: "NY",
    zipCode: "10022",
    latitude: "40.7586",
    longitude: "-73.9762",
    phone: "(212) 753-2261",
    email: "info@stpatrickscathedral.org",
    website: "https://saintpatrickscathedral.org/",
    description: "St. Patrick's Cathedral is the largest decorated Neo-Gothic-style Catholic cathedral in North America. It is the seat of the archbishop of the Roman Catholic Archdiocese of New York.",
    yearEstablished: 1878,
    imageUrl: "https://images.unsplash.com/photo-1527324688151-0e627063f2b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3QlMjBwYXRyaWNrJTIwY2F0aGVkcmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    isHistoric: true,
    hasConfession: true,
    confessionHours: "Monday-Friday: 7:30 AM - 8:30 AM, 12:00 PM - 1:00 PM, 4:00 PM - 5:00 PM; Saturday-Sunday: 3:00 PM - 5:00 PM",
    rating: "4.8"
  },
  {
    id: 2,
    name: "Basilica of the National Shrine",
    address: "400 Michigan Ave NE, Washington, DC 20017",
    city: "Washington",
    state: "DC",
    zipCode: "20017",
    latitude: "38.9333",
    longitude: "-77.0004",
    phone: "(202) 526-8300",
    email: "info@nationalshrine.org",
    website: "https://www.nationalshrine.org/",
    description: "The Basilica of the National Shrine of the Immaculate Conception is the largest Roman Catholic church in the United States and North America, and is one of the ten largest churches in the world.",
    yearEstablished: 1920,
    imageUrl: "https://images.unsplash.com/photo-1548759806-821ba4664b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFzaWxpY2ElMjBuYXRpb25hbCUyMHNocmluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    isHistoric: true,
    hasConfession: true,
    confessionHours: "Monday-Saturday: 7:45 AM - 8:15 AM, 10:00 AM - 12:00 PM, 3:00 PM - 5:00 PM; Sunday: 1:30 PM - 3:00 PM",
    rating: "4.9"
  },
  {
    id: 3,
    name: "Cathedral of Our Lady of the Angels",
    address: "555 W Temple St, Los Angeles, CA 90012",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90012",
    latitude: "34.0581",
    longitude: "-118.2467",
    phone: "(213) 680-5200",
    email: "info@olacathedral.org",
    website: "https://www.olacathedral.org/",
    description: "The Cathedral of Our Lady of the Angels, consecrated in 2002, serves as the mother church for the Archdiocese of Los Angeles. It is known for its postmodern architecture and contemporary art.",
    yearEstablished: 2002,
    imageUrl: "https://images.unsplash.com/photo-1523997596732-56d3099b6e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0aGVkcmFsJTIwb2YlMjBvdXIlMjBsYWR5JTIwb2YlMjB0aGUlMjBhbmdlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    isHistoric: false,
    hasConfession: true,
    confessionHours: "Tuesday-Friday: 11:00 AM - 12:00 PM; Saturday: 3:00 PM - 5:00 PM",
    rating: "4.6"
  },
  {
    id: 4,
    name: "Holy Name Cathedral",
    address: "735 N State St, Chicago, IL 60654",
    city: "Chicago",
    state: "IL",
    zipCode: "60654",
    latitude: "41.8962",
    longitude: "-87.6274",
    phone: "(312) 787-8040",
    email: "info@holynamecathedral.org",
    website: "https://holynamecathedral.org/",
    description: "Holy Name Cathedral is the seat of the Archdiocese of Chicago. The cathedral was built to replace the previous cathedral, which was destroyed in the Great Chicago Fire of 1871.",
    yearEstablished: 1875,
    imageUrl: "https://images.unsplash.com/photo-1551958219-acbc608c676b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9seSUyMG5hbWUlMjBjYXRoZWRyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    isHistoric: true,
    hasConfession: true,
    confessionHours: "Monday-Friday: 7:30 AM - 8:15 AM, 12:00 PM - 12:45 PM; Saturday: 9:00 AM - 12:00 PM",
    rating: "4.7"
  },
  {
    id: 5,
    name: "Cathedral of St. Matthew the Apostle",
    address: "1725 Rhode Island Ave NW, Washington, DC 20036",
    city: "Washington",
    state: "DC",
    zipCode: "20036",
    latitude: "38.9070",
    longitude: "-77.0415",
    phone: "(202) 347-3215",
    email: "info@stmatthewscathedral.org",
    website: "https://www.stmatthewscathedral.org/",
    description: "The Cathedral of St. Matthew the Apostle is notable as the site of the annual Red Mass and the funeral Mass of John F. Kennedy. It is named for Saint Matthew the Apostle, the patron saint of civil servants.",
    yearEstablished: 1895,
    imageUrl: "https://images.unsplash.com/photo-1548820780-84962e138940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0aGVkcmFsJTIwb2YlMjBzdCUyMG1hdHRoZXd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    isHistoric: true,
    hasConfession: true,
    confessionHours: "Monday-Friday: 11:00 AM - 12:00 PM; Saturday: 4:00 PM - 5:00 PM",
    rating: "4.7"
  },
  {
    id: 6,
    name: "St. Mary's Cathedral (Basilica)",
    address: "1111 Gough St, San Francisco, CA 94109",
    city: "San Francisco",
    state: "CA",
    zipCode: "94109",
    latitude: "37.7834",
    longitude: "-122.4248",
    phone: "(415) 567-2020",
    email: "info@stmarycathedralsf.org",
    website: "https://www.stmarycathedralsf.org/",
    description: "The Cathedral of Saint Mary of the Assumption, also known as Saint Mary's Cathedral, is the principal church of the Roman Catholic Archdiocese of San Francisco. Its modern design features a 190-foot-tall saddle roof.",
    yearEstablished: 1971,
    imageUrl: "https://images.unsplash.com/photo-1516633630673-67bbad747022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3QlMjBtYXJ5JTIwY2F0aGVkcmFsJTIwc2FuJTIwZnJhbmNpc2NvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    isHistoric: false,
    hasConfession: true,
    confessionHours: "Monday-Friday: 12:00 PM - 1:00 PM; Saturday: 3:00 PM - 5:00 PM",
    rating: "4.5"
  },
  {
    id: 7,
    name: "St. Louis Cathedral",
    address: "615 Pere Antoine Alley, New Orleans, LA 70116",
    city: "New Orleans",
    state: "LA",
    zipCode: "70116",
    latitude: "29.9577",
    longitude: "-90.0635",
    phone: "(504) 525-9585",
    email: "info@stlouiscathedral.org",
    website: "https://www.stlouiscathedral.org/",
    description: "St. Louis Cathedral is the oldest cathedral in what would become the United States, first built in 1718 and rebuilt twice after a hurricane and fire. The current structure dates from 1850.",
    yearEstablished: 1850,
    imageUrl: "https://images.unsplash.com/photo-1549405330-b362aea13e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3QlMjBsb3VpcyUyMGNhdGhlZHJhbCUyMG5ldyUyMG9ybGVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    isHistoric: true,
    hasConfession: true,
    confessionHours: "Tuesday-Saturday: 11:30 AM - 12:00 PM; Saturday: 3:00 PM - 3:45 PM",
    rating: "4.8"
  },
  {
    id: 8,
    name: "Cathedral of the Holy Cross",
    address: "1400 Washington St, Boston, MA 02118",
    city: "Boston",
    state: "MA",
    zipCode: "02118",
    latitude: "42.3383",
    longitude: "-71.0726",
    phone: "(617) 542-5682",
    email: "info@holycrossboston.com",
    website: "https://holycrossboston.com/",
    description: "The Cathedral of the Holy Cross is the mother church for the Roman Catholic Archdiocese of Boston. It was designed by Patrick Keely and built between 1866 and 1875.",
    yearEstablished: 1875,
    imageUrl: "https://images.unsplash.com/photo-1555941983-b5f2a33180aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0aGVkcmFsJTIwb2YlMjB0aGUlMjBob2x5JTIwY3Jvc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    isHistoric: true,
    hasConfession: true,
    confessionHours: "Wednesday: 6:30 PM - 8:00 PM; Saturday: 3:00 PM - 3:45 PM",
    rating: "4.6"
  }
];

// Mock masses
export const mockMasses: Mass[] = [
  // Sunday masses (dayOfWeek = 0)
  { id: 1, churchId: 1, dayOfWeek: 0, time: "07:00", language: "English" },
  { id: 2, churchId: 1, dayOfWeek: 0, time: "09:00", language: "English" },
  { id: 3, churchId: 1, dayOfWeek: 0, time: "10:30", language: "English" },
  { id: 4, churchId: 1, dayOfWeek: 0, time: "12:00", language: "English" },
  { id: 5, churchId: 1, dayOfWeek: 0, time: "17:30", language: "Spanish" },
  
  { id: 6, churchId: 2, dayOfWeek: 0, time: "08:00", language: "English" },
  { id: 7, churchId: 2, dayOfWeek: 0, time: "10:00", language: "English" },
  { id: 8, churchId: 2, dayOfWeek: 0, time: "12:30", language: "Spanish" },
  { id: 9, churchId: 2, dayOfWeek: 0, time: "16:30", language: "English" },
  
  { id: 10, churchId: 3, dayOfWeek: 0, time: "08:00", language: "English" },
  { id: 11, churchId: 3, dayOfWeek: 0, time: "10:00", language: "Spanish" },
  { id: 12, churchId: 3, dayOfWeek: 0, time: "12:00", language: "English" },
  { id: 13, churchId: 3, dayOfWeek: 0, time: "15:00", language: "Vietnamese" },
  { id: 14, churchId: 3, dayOfWeek: 0, time: "17:30", language: "English" },
  
  // Monday masses (dayOfWeek = 1)
  { id: 15, churchId: 1, dayOfWeek: 1, time: "07:00", language: "English" },
  { id: 16, churchId: 1, dayOfWeek: 1, time: "12:10", language: "English" },
  { id: 17, churchId: 1, dayOfWeek: 1, time: "17:30", language: "English" },
  
  { id: 18, churchId: 2, dayOfWeek: 1, time: "07:30", language: "English" },
  { id: 19, churchId: 2, dayOfWeek: 1, time: "12:00", language: "English" },
  { id: 20, churchId: 2, dayOfWeek: 1, time: "17:00", language: "English" },
  
  { id: 21, churchId: 3, dayOfWeek: 1, time: "07:00", language: "English" },
  { id: 22, churchId: 3, dayOfWeek: 1, time: "12:10", language: "English" },
  
  // Tuesday masses (dayOfWeek = 2)
  { id: 23, churchId: 1, dayOfWeek: 2, time: "07:00", language: "English" },
  { id: 24, churchId: 1, dayOfWeek: 2, time: "12:10", language: "English" },
  { id: 25, churchId: 1, dayOfWeek: 2, time: "17:30", language: "English" },
  
  { id: 26, churchId: 2, dayOfWeek: 2, time: "07:30", language: "English" },
  { id: 27, churchId: 2, dayOfWeek: 2, time: "12:00", language: "English" },
  { id: 28, churchId: 2, dayOfWeek: 2, time: "17:00", language: "Latin" },
  
  { id: 29, churchId: 3, dayOfWeek: 2, time: "07:00", language: "English" },
  { id: 30, churchId: 3, dayOfWeek: 2, time: "12:10", language: "Spanish" },
  
  // Wednesday masses (dayOfWeek = 3)
  { id: 31, churchId: 1, dayOfWeek: 3, time: "07:00", language: "English" },
  { id: 32, churchId: 1, dayOfWeek: 3, time: "12:10", language: "English" },
  { id: 33, churchId: 1, dayOfWeek: 3, time: "17:30", language: "Spanish" },
  
  { id: 34, churchId: 2, dayOfWeek: 3, time: "07:30", language: "English" },
  { id: 35, churchId: 2, dayOfWeek: 3, time: "12:00", language: "English" },
  { id: 36, churchId: 2, dayOfWeek: 3, time: "17:00", language: "English" },
  
  { id: 37, churchId: 3, dayOfWeek: 3, time: "07:00", language: "English" },
  { id: 38, churchId: 3, dayOfWeek: 3, time: "12:10", language: "English" },
  
  // Thursday masses (dayOfWeek = 4)
  { id: 39, churchId: 1, dayOfWeek: 4, time: "07:00", language: "English" },
  { id: 40, churchId: 1, dayOfWeek: 4, time: "12:10", language: "English" },
  { id: 41, churchId: 1, dayOfWeek: 4, time: "17:30", language: "English" },
  
  { id: 42, churchId: 2, dayOfWeek: 4, time: "07:30", language: "English" },
  { id: 43, churchId: 2, dayOfWeek: 4, time: "12:00", language: "English" },
  { id: 44, churchId: 2, dayOfWeek: 4, time: "17:00", language: "English" },
  
  { id: 45, churchId: 3, dayOfWeek: 4, time: "07:00", language: "English" },
  { id: 46, churchId: 3, dayOfWeek: 4, time: "12:10", language: "Spanish" },
  
  // Friday masses (dayOfWeek = 5)
  { id: 47, churchId: 1, dayOfWeek: 5, time: "07:00", language: "English" },
  { id: 48, churchId: 1, dayOfWeek: 5, time: "12:10", language: "English" },
  { id: 49, churchId: 1, dayOfWeek: 5, time: "17:30", language: "English" },
  
  { id: 50, churchId: 2, dayOfWeek: 5, time: "07:30", language: "English" },
  { id: 51, churchId: 2, dayOfWeek: 5, time: "12:00", language: "English" },
  { id: 52, churchId: 2, dayOfWeek: 5, time: "17:00", language: "English" },
  
  { id: 53, churchId: 3, dayOfWeek: 5, time: "07:00", language: "English" },
  { id: 54, churchId: 3, dayOfWeek: 5, time: "12:10", language: "English" },
  
  // Saturday masses (dayOfWeek = 6)
  { id: 55, churchId: 1, dayOfWeek: 6, time: "08:00", language: "English" },
  { id: 56, churchId: 1, dayOfWeek: 6, time: "12:10", language: "English" },
  { id: 57, churchId: 1, dayOfWeek: 6, time: "17:30", language: "English", isSpecial: true, description: "Vigil Mass" },
  
  { id: 58, churchId: 2, dayOfWeek: 6, time: "08:00", language: "English" },
  { id: 59, churchId: 2, dayOfWeek: 6, time: "12:00", language: "English" },
  { id: 60, churchId: 2, dayOfWeek: 6, time: "17:30", language: "Spanish", isSpecial: true, description: "Vigil Mass" },
  
  { id: 61, churchId: 3, dayOfWeek: 6, time: "08:00", language: "English" },
  { id: 62, churchId: 3, dayOfWeek: 6, time: "17:00", language: "English", isSpecial: true, description: "Vigil Mass" },
  { id: 63, churchId: 3, dayOfWeek: 6, time: "19:00", language: "Spanish", isSpecial: true, description: "Vigil Mass" }
];

// Helper functions to retrieve filtered data
export function getTodaysMasses(): Mass[] {
  const today = getTodayDayOfWeek();
  return mockMasses
    .filter(mass => mass.dayOfWeek === today)
    .sort((a, b) => {
      // Sort by time, with passed masses at the end
      const aPassed = isTimePassed(a.time);
      const bPassed = isTimePassed(b.time);
      
      if (aPassed && !bPassed) return 1;
      if (!aPassed && bPassed) return -1;
      
      return a.time.localeCompare(b.time);
    });
}

export function getMassesByChurch(churchId: number): Mass[] {
  return mockMasses
    .filter(mass => mass.churchId === churchId)
    .sort((a, b) => {
      // Sort by day of week and then by time
      if (a.dayOfWeek !== b.dayOfWeek) {
        return a.dayOfWeek - b.dayOfWeek;
      }
      return a.time.localeCompare(b.time);
    });
}

export function getMassesByChurchAndDay(churchId: number, dayOfWeek: number): Mass[] {
  return mockMasses
    .filter(mass => mass.churchId === churchId && mass.dayOfWeek === dayOfWeek)
    .sort((a, b) => a.time.localeCompare(b.time));
}

export function searchChurches(query: string): Church[] {
  if (!query) return mockChurches;
  
  const lowerQuery = query.toLowerCase();
  
  // Special case for "today" query - return churches with today's masses
  if (lowerQuery === "today" || lowerQuery.includes("today")) {
    const todayMasses = getTodaysMasses();
    const churchIds = new Set(todayMasses.map(mass => mass.churchId));
    return mockChurches.filter(church => churchIds.has(church.id));
  }
  
  // Special case for confession query
  if (lowerQuery === "confession" || lowerQuery.includes("confession")) {
    return mockChurches.filter(church => church.hasConfession);
  }
  
  // Search by multiple fields
  return mockChurches.filter(church => {
    const nameMatch = church.name.toLowerCase().includes(lowerQuery);
    const cityMatch = church.city.toLowerCase().includes(lowerQuery);
    const addressMatch = church.address.toLowerCase().includes(lowerQuery);
    const descriptionMatch = church.description?.toLowerCase().includes(lowerQuery);
    
    return nameMatch || cityMatch || addressMatch || descriptionMatch;
  });
}

export function getChurchesByLocation(city: string, state: string): Church[] {
  const lowerCity = city.toLowerCase();
  const lowerState = state.toLowerCase();
  
  return mockChurches.filter(church => {
    const cityMatch = church.city.toLowerCase().includes(lowerCity);
    const stateMatch = church.state.toLowerCase() === lowerState;
    
    return cityMatch && stateMatch;
  });
}

export function getChurchById(id: number): Church | undefined {
  return mockChurches.find(church => church.id === id);
}