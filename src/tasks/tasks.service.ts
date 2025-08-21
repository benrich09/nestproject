// src/tasks/tasks.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [{ id: 1, title: 'Learn NestJS', done: false }];

  findAll() {
    return this.tasks;
  }

  create(task: { title: string }) {
    const newTask = { id: Date.now(), title: task.title, done: false };
    this.tasks.push(newTask);
    return newTask;
  }
}
