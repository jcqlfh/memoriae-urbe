import type { Place } from './Place';

export interface Profile {
	user: { name: string; email: string };
	places: Place[];
}
