export interface BlogPost {
    id: string;
    slug: string;
    body: string;
    collection: string;
    data: {
        title: string;
        slug: string;
        description: string;
        preview: string;
        readingTime: string;
        pubDate: Date;
        bannerImage?: Date;
    };
}
