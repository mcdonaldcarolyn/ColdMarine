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
    pump1?: boolean;
    pump2?: boolean;
    pump3?: boolean;
    pump4?: boolean;
}
