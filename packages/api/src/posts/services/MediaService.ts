import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ICreateMediaDTO, IMediaForResponse } from "../dto/MediaDTOs";
import { Media } from "../entities/Media";
import * as cryptoRandomString from "crypto-random-string";

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private readonly mediaRepository: Repository<Media>
  ) {}

  async findAllForPost(postID: string): Promise<IMediaForResponse[]> {
    const media = await this.mediaRepository.find({ postID });
    return media.map(singleMedia => {
      const { id, src, alt, type } = singleMedia;
      return { id, src, alt, type };
    });
  }

  async create(postID: string, media: ICreateMediaDTO) {
    const id = cryptoRandomString({ length: 16 });
    await this.mediaRepository.insert({ ...media, postID, id });
  }
}
