import { CreateBlipTopicDto } from "./ceate-blip-topic-dto";

export class CreateBlipDto {

    title: string;
    content: string;
    topics: [CreateBlipTopicDto];
    userId: number;
    timestamp: string;

}