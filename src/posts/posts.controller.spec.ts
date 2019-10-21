import { Test, TestingModule } from '@nestjs/testing';

import { PostsController } from './posts.controller';

describe('Posts Controller', () => {
  let postsController: PostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
    }).compile();

    postsController = module.get<PostsController>(PostsController);
  });

  it.todo('should be defined');
});
