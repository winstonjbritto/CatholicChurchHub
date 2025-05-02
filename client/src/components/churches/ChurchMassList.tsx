import { useState } from "react";
import { Mass } from "@/types";
import { formatTime, getDayName, getTodayDayOfWeek, isTimePassed } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ChurchMassListProps {
  masses: Mass[];
  churchId: number;
  viewType?: "today" | "week" | "calendar";
}

export default function ChurchMassList({ masses, churchId, viewType = "today" }: ChurchMassListProps) {
  const [activeTab, setActiveTab] = useState<string>(viewType);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  const today = getTodayDayOfWeek();
  
  // Group masses by day
  const massesByDay = masses.reduce((acc, mass) => {
    const day = mass.dayOfWeek;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(mass);
    return acc;
  }, {} as Record<number, Mass[]>);
  
  // Sort masses by time
  Object.keys(massesByDay).forEach(day => {
    massesByDay[Number(day)].sort((a, b) => {
      return a.time.localeCompare(b.time);
    });
  });
  
  // Get today's masses
  const todayMasses = massesByDay[today] || [];
  
  // Filter past masses for today
  const upcomingTodayMasses = todayMasses.filter(mass => !isTimePassed(mass.time));
  const pastTodayMasses = todayMasses.filter(mass => isTimePassed(mass.time));
  
  // Create calendar dates array (days with masses)
  const daysWithMasses = Object.keys(massesByDay).map(day => {
    const date = new Date();
    const dayDiff = Number(day) - today;
    date.setDate(date.getDate() + dayDiff + (dayDiff < 0 ? 7 : 0)); // Handle wrapping to next week
    return date;
  });
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mass Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>
          
          <TabsContent value="today">
            {todayMasses.length > 0 ? (
              <div className="space-y-4">
                {upcomingTodayMasses.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-neutral-500 mb-2">Upcoming Today</h3>
                    <div className="space-y-3">
                      {upcomingTodayMasses.map((mass) => (
                        <MassItem key={mass.id} mass={mass} />
                      ))}
                    </div>
                  </div>
                )}
                
                {pastTodayMasses.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-neutral-500 mb-2">Earlier Today</h3>
                    <div className="space-y-3">
                      {pastTodayMasses.map((mass) => (
                        <MassItem key={mass.id} mass={mass} isPast />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-neutral-500">No masses scheduled for today</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="week">
            <div className="space-y-4">
              {Array.from({ length: 7 }).map((_, index) => {
                const dayIndex = (today + index) % 7;
                const dayMasses = massesByDay[dayIndex] || [];
                const isToday = index === 0;
                
                return (
                  <div key={dayIndex}>
                    <h3 className={`text-sm font-medium mb-2 ${isToday ? 'text-primary' : 'text-neutral-500'}`}>
                      {isToday ? 'Today' : getDayName(dayIndex)}
                    </h3>
                    
                    {dayMasses.length > 0 ? (
                      <div className="space-y-3">
                        {dayMasses.map((mass) => (
                          <MassItem key={mass.id} mass={mass} isPast={isToday && isTimePassed(mass.time)} />
                        ))}
                      </div>
                    ) : (
                      <p className="text-neutral-500 text-sm py-1">No masses scheduled</p>
                    )}
                  </div>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="calendar">
            <div className="flex flex-col items-center">
              <Calendar 
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                massesOnDays={daysWithMasses}
                className="rounded-md border"
              />
              
              {selectedDate && (
                <div className="w-full mt-6">
                  <h3 className="text-sm font-medium text-neutral-500 mb-2">
                    Masses for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                  </h3>
                  
                  {/* Get masses for selected day of week */}
                  {(() => {
                    const dayOfWeek = selectedDate.getDay();
                    const dayMasses = massesByDay[dayOfWeek] || [];
                    
                    if (dayMasses.length > 0) {
                      return (
                        <div className="space-y-3">
                          {dayMasses.map((mass) => (
                            <MassItem 
                              key={mass.id} 
                              mass={mass} 
                              isPast={selectedDate.toDateString() === new Date().toDateString() && isTimePassed(mass.time)} 
                            />
                          ))}
                        </div>
                      );
                    } else {
                      return (
                        <p className="text-neutral-500">No masses scheduled for this day</p>
                      );
                    }
                  })()}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-4">
          <Button variant="link" className="text-primary hover:text-primary-dark text-sm p-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
              <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
            </svg>
            View full calendar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

interface MassItemProps {
  mass: Mass;
  isPast?: boolean;
}

function MassItem({ mass, isPast = false }: MassItemProps) {
  return (
    <div className={`flex items-center justify-between p-2 bg-white rounded border-l-4 ${
      isPast 
        ? 'border-neutral-300 opacity-60' 
        : mass.isSpecial 
          ? 'border-accent' 
          : 'border-primary'
    }`}>
      <div>
        <p className="font-bold">{formatTime(mass.time)}</p>
        <p className="text-sm text-neutral-600">
          {mass.language} • {mass.priestName || 'Celebrant'}
        </p>
      </div>
      <span className={`text-xs px-2 py-1 rounded ${
        mass.isSpecial 
          ? 'bg-accent bg-opacity-10 text-accent' 
          : 'bg-neutral-100 text-neutral-700'
      }`}>
        {mass.isSpecial ? 'Special' : 'Regular'}
      </span>
    </div>
  );
}
