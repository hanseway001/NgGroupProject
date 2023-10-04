export interface Movie {
    id: string;
    title: string;
    overview: string;
    poster: string;
    budget?: number;
    popularity?: number;
    backdrop_path?: string;
    release_date?: string;
    runtime?: string
}
