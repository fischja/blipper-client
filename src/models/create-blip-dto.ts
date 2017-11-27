export class CreateBlipDto {

    title: string;
    content: string;
    topics: [{ name: string }];
    userId: number;
    timestamp: string;

}