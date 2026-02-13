const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;
const BASE_URL = "https://api.pexels.com";

export interface PexelsPhoto {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    src: {
        original: string;
        large2x: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
    };
    alt: string;
}

export interface PexelsVideo {
    id: number;
    width: number;
    height: number;
    url: string;
    image: string;
    duration: number;
    video_files: {
        id: number;
        quality: "hd" | "sd";
        file_type: string;
        width: number;
        height: number;
        link: string;
    }[];
    video_pictures: {
        id: number;
        picture: string;
        nr: number;
    }[];
}

export async function searchPhotos(query: string, perPage = 1): Promise<PexelsPhoto[]> {
    if (!PEXELS_API_KEY) {
        console.warn("Pexels API key is missing");
        return [];
    }

    try {
        const response = await fetch(`${BASE_URL}/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`, {
            headers: {
                Authorization: PEXELS_API_KEY,
            },
        });

        if (!response.ok) {
            throw new Error(`Pexels API error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.photos;
    } catch (error) {
        console.error("Error searching Pexels photos:", error);
        return [];
    }
}

export async function searchVideos(query: string, perPage = 1): Promise<PexelsVideo[]> {
    if (!PEXELS_API_KEY) {
        console.warn("Pexels API key is missing");
        return [];
    }

    try {
        const response = await fetch(`${BASE_URL}/videos/search?query=${encodeURIComponent(query)}&per_page=${perPage}`, {
            headers: {
                Authorization: PEXELS_API_KEY,
            },
        });

        if (!response.ok) {
            throw new Error(`Pexels API error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.videos;
    } catch (error) {
        console.error("Error searching Pexels videos:", error);
        return [];
    }
}
