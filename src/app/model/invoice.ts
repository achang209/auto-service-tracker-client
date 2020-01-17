import { ServiceProvider } from './service-provider';

export class Invoice {
    id: number;
    date: string;
    mileage: number;
    serviceProvider: ServiceProvider;
    servicePerformed: string;
    filePath: string;
}
