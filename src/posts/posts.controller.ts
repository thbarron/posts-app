import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostDto } from './posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {
  }

  @Get()
  getAllPosts() {
    return this.postService.getAll();
  }

  @Post()
  addPost(@Body() data: PostDto) {
    return this.postService.create(data);
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postService.getById(id);
  }

  @Put(':id')
  updatePost(@Param('id') id: string, @Body() data: Partial<PostDto>) {
    return this.postService.update(id, data);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postService.delete(id);
  }


}
