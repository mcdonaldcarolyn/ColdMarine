export interface Log {
    date: Date;
    temperature: number;
    backwash?: boolean;
    pumpsOn?: number;
    pumpsOff?: number;
    notes?: string;
    skimmer?: boolean;
    bags?: boolean;
    imageUrl?: string;
    ads?: string;
  }
  