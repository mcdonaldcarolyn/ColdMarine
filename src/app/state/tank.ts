import { Log } from './log';

export interface Tank {
    tankNumber: number;
    name: string;
    description: string;
    numberOfPumps: number;
    hasBackwash: boolean;
    hasSkimmer: boolean;
    hasBags: boolean;
    logs: Log[];
}