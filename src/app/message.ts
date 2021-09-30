export class Message {
  constructor(
    public name: string,
    public text: string,
    public messageId = Date.now()
  ) {}
}
