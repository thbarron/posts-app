import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Post } from '../entities/post.entity';
import { PostDto } from './posts.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) { }

  async getAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async create(data: PostDto) {
    const post = await this.postRepository.create(data);
    await this.postRepository.save(post);
    return post;
  }

  async getById(id: string) {
    return await this.postRepository.findOne(id);
  }

  async update(id: string, data: Partial<PostDto>) {
    await this.postRepository.update(id, data);
    return await this.postRepository.findOne(id);
  }

  async delete(id: string) {
    await this.postRepository.delete(id);
    return { deleted: true };
  }
}
