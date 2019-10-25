import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';

import { PostsService } from './posts.service';
import { Post } from '../entities/post.entity';
import { async } from 'rxjs/internal/scheduler/async';

describe('PostsService', () => {
  let service: PostsService;
  let repository: Repository<Post>;

  const testId = new ObjectID('5dae3b35f869f63048619cb9');

  const testPost: Post = {
    id: testId,
    name: 'test post name',
    contents: 'test contents for post',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService,
        {
          provide: getRepositoryToken(Post),
          useClass: Repository,
        }],
    }).compile();

    service = module.get<PostsService>(PostsService);
    repository = module.get<Repository<Post>>(getRepositoryToken(Post));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return post(s) for findAll', async () => {
    jest.spyOn(repository, 'find').mockResolvedValueOnce([testPost]);
    expect(await service.getAll()).toEqual([testPost]);
  });

  it('should return the correct post with findByOne', async () => {
    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(testPost);
    expect(await service.getById(testId)).toEqual(testPost);
  });
});
