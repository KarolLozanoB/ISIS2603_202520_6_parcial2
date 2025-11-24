import { Tracks } from "../tracks/Tracks";

export class Albums{
    id: number;
    spotify_id: string;
    name: string;
    year: string;
    image:string;
    loved: boolean;
    tracks: Tracks[]

    constructor(id: number, spotify_id: string, name: string, year: string, image: string, loved: boolean, tracks: Tracks[]) {
        this.id = id;
        this.spotify_id = spotify_id;
        this.name = name;
        this.year = year;
        this.image = image;
        this.loved = loved;
        this.tracks = tracks;
    }
}