export interface INoteDTO {
  _id: string;
  content: string;
  version: string;
  createdAt: Date;
  updatedAt: Date;
}

export default class Note {
  private readonly _id: string;
  private readonly content: string;
  private readonly version: string;
  private readonly createdAt: Date;

  constructor(dto: INoteDTO) {
    this._id = dto._id;
    this.content = dto.content;
    this.version = dto.version;
    this.createdAt = dto.createdAt;
  }

  get ID(): string {
    return this._id;
  }

  get Content(): string {
    return this.content;
  }

  get Version(): string {
    return this.version;
  }

  get CreatedAt(): Date {
    return this.createdAt;
  }
}
