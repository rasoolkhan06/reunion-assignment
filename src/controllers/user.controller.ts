interface PingResponse {
    message: string;
}

export default class UserController {
    async getMessage(): Promise<PingResponse> {
        return {
            message: "pong",
        };
    }
}
