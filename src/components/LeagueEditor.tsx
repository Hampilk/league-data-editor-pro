
import React, { useState } from 'react';
import { ArrowLeft, Save, Upload, CircleAlert } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/ui/custom-input";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface LeagueEditorProps {
  onBack: () => void;
  league?: {
    name: string;
    season: string;
  };
}

const LeagueEditor = ({ onBack, league = { name: "Premier League", season: "2023-2024" } }: LeagueEditorProps) => {
  const [leagueData, setLeagueData] = useState(league);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLeagueData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      setFileUploaded(true);
      toast.success("File uploaded successfully");
    }
  };

  const handleSave = () => {
    toast.success("League data saved successfully");
  };

  return (
    <div className="relative overflow-hidden rounded-xl bg-[#0a0f14] border border-white/5 shadow-lg">
      {/* Background blur effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative p-6">
        <div className="space-y-6 animate-fadeIn">
          {/* Header with back button and save button */}
          <div className="flex items-center justify-between">
            <Button variant="outline" 
              className="bg-white/5 border-white/10 text-white hover:bg-white/10 gap-2"
              onClick={onBack}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Leagues
            </Button>
            
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white gap-2"
              onClick={handleSave}
            >
              <Save className="w-4 h-4" />
              Save
            </Button>
          </div>
          
          {/* League details form */}
          <div className="bg-black/20 rounded-xl p-6 space-y-6 border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="leagueName" className="text-gray-300 text-sm">League Name</label>
                <CustomInput 
                  id="leagueName"
                  name="name"
                  value={leagueData.name}
                  onChange={handleInputChange}
                  placeholder="Enter league name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="leagueSeason" className="text-gray-300 text-sm">Season</label>
                <CustomInput 
                  id="leagueSeason"
                  name="season"
                  value={leagueData.season}
                  onChange={handleInputChange}
                  placeholder="Enter season (e.g., 2023-24)"
                />
              </div>
            </div>
            
            {/* File upload section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-full sm:w-auto flex-grow">
                <label htmlFor="csv-upload" className="block text-gray-300 text-sm mb-2">Upload Matches Data (CSV)</label>
                <input 
                  id="csv-upload" 
                  type="file" 
                  accept=".csv"
                  className="hidden" 
                  onChange={handleFileChange}
                />
                <div className="flex items-center gap-3">
                  <Button 
                    variant="outline" 
                    className="bg-white/5 border-white/10 text-white hover:bg-white/10 gap-2"
                    onClick={() => document.getElementById('csv-upload')?.click()}
                  >
                    <Upload className="w-4 h-4" />
                    Choose CSV File
                  </Button>
                  <span className="text-sm text-gray-400">
                    {fileName ? fileName : "No file chosen"}
                  </span>
                </div>
              </div>
              
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white gap-2"
                onClick={handleSave}
                disabled={!fileUploaded}
              >
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
            </div>
          </div>
          
          {/* Tabs section */}
          <Tabs defaultValue="matches" className="w-full">
            <TabsList className="grid grid-cols-3 bg-black/20 w-full rounded-xl">
              <TabsTrigger 
                value="matches" 
                className="py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-black/20"
              >
                Matches
              </TabsTrigger>
              <TabsTrigger 
                value="standings" 
                className="py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-black/20"
              >
                Standings
              </TabsTrigger>
              <TabsTrigger 
                value="form" 
                className="py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-black/20"
              >
                Form
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="matches" className="p-0 mt-6">
              <div className="bg-black/20 rounded-xl p-8 text-center border border-white/5">
                <div className="flex flex-col items-center gap-3">
                  <CircleAlert className="w-8 h-8 text-gray-500" />
                  <p className="text-gray-400">No matches available for this league yet.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="standings" className="p-0 mt-6">
              {/* Standings content would go here */}
            </TabsContent>
            
            <TabsContent value="form" className="p-0 mt-6">
              {/* Form content would go here */}
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Top border gradient */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        {/* Bottom border gradient */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
    </div>
  );
};

export default LeagueEditor;
