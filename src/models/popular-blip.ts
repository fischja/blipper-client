import { PopularTopic } from "./popular-topic";

export class PopularBlip {
    blipId: number;
    title: string;
    content: string;
    timestamp: string;
    likes: number;
    dislikes: number;
    views: number;
    topics: PopularTopic[];
    user: {
        userId: number;
        username: string;
    }
}