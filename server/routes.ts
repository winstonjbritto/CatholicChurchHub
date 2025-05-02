import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Prefix all API routes with /api
  const apiRouter = app.route('/api');
  
  // Churches endpoints
  app.get('/api/churches', async (req, res) => {
    try {
      // Get query parameters for filtering
      const { query, city, state, zipCode } = req.query;
      
      let churches;
      
      // Apply filters if provided
      if (query) {
        churches = await storage.searchChurches(query as string);
      } else if (city && state) {
        churches = await storage.getChurchesByLocation(city as string, state as string);
      } else if (zipCode) {
        churches = await storage.getChurchesByZipCode(zipCode as string);
      } else {
        churches = await storage.getAllChurches();
      }
      
      res.json(churches);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch churches" });
    }
  });
  
  app.get('/api/churches/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const church = await storage.getChurch(id);
      
      if (!church) {
        return res.status(404).json({ error: "Church not found" });
      }
      
      res.json(church);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch church details" });
    }
  });
  
  // Masses endpoints
  app.get('/api/churches/:id/masses', async (req, res) => {
    try {
      const churchId = parseInt(req.params.id);
      const { day, date } = req.query;
      
      let masses;
      
      if (day !== undefined) {
        const dayOfWeek = parseInt(day as string);
        masses = await storage.getMassesByChurchAndDay(churchId, dayOfWeek);
      } else if (date) {
        masses = await storage.getMassesByChurchAndDate(churchId, date as string);
      } else {
        masses = await storage.getMassesByChurch(churchId);
      }
      
      res.json(masses);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch masses" });
    }
  });
  
  app.get('/api/masses/language/:language', async (req, res) => {
    try {
      const { language } = req.params;
      const masses = await storage.getMassesByLanguage(language);
      res.json(masses);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch masses by language" });
    }
  });
  
  // Locations endpoints
  app.get('/api/locations', async (req, res) => {
    try {
      const locations = await storage.getAllLocations();
      res.json(locations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch locations" });
    }
  });
  
  app.get('/api/locations/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const location = await storage.getLocation(id);
      
      if (!location) {
        return res.status(404).json({ error: "Location not found" });
      }
      
      res.json(location);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch location details" });
    }
  });
  
  // Languages endpoints
  app.get('/api/languages', async (req, res) => {
    try {
      const languages = await storage.getAllLanguages();
      res.json(languages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch languages" });
    }
  });

  // Current Mass Endpoint - Get masses for today (current day of week)
  app.get('/api/masses/today', async (req, res) => {
    try {
      const churches = await storage.getAllChurches();
      const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
      
      const churchesWithTodayMasses = await Promise.all(
        churches.map(async (church) => {
          const masses = await storage.getMassesByChurchAndDay(church.id, today);
          return {
            ...church,
            todayMasses: masses
          };
        })
      );
      
      // Filter only churches that have masses today
      const filteredChurches = churchesWithTodayMasses.filter(
        church => church.todayMasses.length > 0
      );
      
      res.json(filteredChurches);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch today's masses" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
