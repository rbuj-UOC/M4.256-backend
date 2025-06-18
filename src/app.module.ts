import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'blog-uoc-project',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrationsRun: true,
      logging: true,
      migrations: ['dist/migrations/**/*{.ts,.js}'],
      cli: {
        migrationsDir: './migrations',
      },
      keepConnectionAlive: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    CategoriesModule,
    PostsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
