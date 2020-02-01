export interface Message {
  message: string;
}

export interface DataMessage<T> extends Message {
  data: T[];
}
