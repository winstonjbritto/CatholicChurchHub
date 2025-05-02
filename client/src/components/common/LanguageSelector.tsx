import { useState } from "react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Globe } from "lucide-react";

// Available languages
const LANGUAGES = [
  "English",
  "Spanish",
  "Latin",
  "Polish",
  "Vietnamese",
  "Italian",
  "French",
  "Portuguese",
  "Filipino"
];

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export default function LanguageSelector({ 
  currentLanguage, 
  onLanguageChange 
}: LanguageSelectorProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleSelectLanguage = (language: string) => {
    onLanguageChange(language);
    setIsDialogOpen(false);
  };
  
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          className="flex items-center text-sm font-medium text-neutral-700 hover:text-primary"
        >
          <Globe className="h-4 w-4 mr-2" />
          <span>{currentLanguage}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[300px]">
        <DialogHeader>
          <DialogTitle>Select Language</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-1 max-h-[300px] overflow-y-auto py-2">
          {LANGUAGES.map((language) => (
            <Button
              key={language}
              variant="ghost"
              className={`w-full justify-start text-left ${
                language === currentLanguage ? 'bg-primary/10 text-primary' : ''
              }`}
              onClick={() => handleSelectLanguage(language)}
            >
              {language}
              {language === currentLanguage && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-auto">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
              )}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
