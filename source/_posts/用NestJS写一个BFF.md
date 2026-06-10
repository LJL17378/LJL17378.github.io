---
title: 从 NestJS 入门写一个简单的 BFF 层来做数据清洗
---
# 从 NestJS 入门写一个简单的 BFF 层来做数据清洗
## 前言
在国内目前的互联网大厂中，后端基本上没有 `JS` 的容身之地，基本上用的都是 `GO` 和 `JAVA`，那么我们再去学习使用 `JS` 进行后端开发还有什么意义呢？一个比较重要的点就是拓宽我们的技术视野，可以去接触一下后端开发相关的知识和概念，不再把自己的认知只局限在前端并且增强自己的核心竞争力，还能得到一个**全栈开发者**名头。那我学习 `JS` 后端难道就完全没有用武之地了吗？其实在个人项目和一些创业公司里面还是可以用得上的，而且还有一个比较重要的场景，当后端提供的接口无用的字段太多，或者实现一个页面需要调用好多个接口的时候（简单来说就是后端可以提供的接口不够好用而且没法改）就会需要前端团队自己去维护一个**BFF 层(Backend for Frontend)**，这是最核心的战场，我们也不再做过多介绍了，接下来直接学习如果使用 `NestJS` 去开发一个 BFF 层吧。
## 快速开始
我们选择一个数据源作为后端已经写好的接口，我们这里使用[JSONPlaceholder](https://jsonplaceholder.typicode.com/)作为数据源，我们接下来会使用到`https://jsonplaceholder.typicode.com/users`接口和`https://jsonplaceholder.typicode.com/posts?userId=1`接口
项目创建：
全局安装 Nest CLI
```bash
npm i -g @nestjs/cli
```
初始化新项目
```bash
nest new bff-demo
```
启动项目
```bash
cd bff-demo
npm run start:dev
```
此时项目应当已经成功跑起来了，简单说明一下项目的结构
- `main.ts`是入口文件，用来创建应用实例，监听 3000 端口。
- `app.module.ts`是根模块，用来管理子模。
- `app.controller.ts`是控制器，用于定义路由 (如 GET /)，负责接收请求。
- `app.service.ts`是具体服务，用来写具体业务逻辑 (如返回 "Hello World")。
- `app.controller.spec.ts`是测试文件，先不用管
## 数据清洗
我们在浏览器窗口发一下请求看一下返回的结构：
```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]
```
我们先明确好几点任务：
- 请求上游的 User 接口。
- 扁平化：把嵌套的 `address.city` 提取出来
- 重命名：把 `username` 改成 `nickname`
- 剔除：删除掉无用的经纬度数据
### 创建模块
在项目根目录运行以下命令
```bash
nest g resource user
```
我们此时选择`REST API`和创建`CURD`示例
此时在`/src`目录下会新建一个名为`user`的文件夹
#### 目录结构
此时我们再来看一下`user`的目录结构
- `user.module.ts`：模块文件
- `user.controller.ts`：控制器
- `user.service.ts`：服务（写业务逻辑的地方）。
- `user.service.sepc.ts`：测试文件
- `dto/`：数据传输对象（用来定义请求参数的类型，比如“创建用户需要传什么字段”）。
- `entities/`：实体（通常对应数据库表结构，但在 BFF 里我们可以用来定义返回给前端的结构也就是给前端看的视图）。
### 依赖安装
```bash
npm i --save @nestjs/axios axios
npm install class-transformer class-validator
```
### 代码编写
#### 模块依赖配置
以下代码可以先cv进去记得在 `user.module.ts` 导入 `HttpModule`
```ts
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  // ...
})
```
#### Entity
```ts
/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment */
import { Exclude, Expose, Transform } from 'class-transformer';

@Exclude()
export class UserEntity {
  constructor(partial: any) {
    Object.assign(this, partial);
  }

  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  @Transform(({ obj }: { obj: any }) => obj.username)
  nickname: string;

  @Expose()
  email: string;

  @Expose()
  @Transform(({ obj }: { obj: any }) => obj.website)
  website: string;

  @Expose()
  @Transform(({ obj }: { obj: any }) => {
    return obj.address
      ? `${obj.address.city}, ${obj.address.street}`
      : 'Unknown';
  })
  location: string;

  @Expose()
  @Transform(({ obj }: { obj: any }) => obj.company?.name)
  companyName: string;
}
```
#### Srevice
```ts
/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<UserEntity[]> {
    const { data } = await firstValueFrom(
      this.httpService.get('https://jsonplaceholder.typicode.com/users'),
    );

    // 直接透传，简单粗暴
    return data.map((rawUser) => new UserEntity(rawUser));
  }

  async findOne(id: number): Promise<UserEntity> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        ),
      );
      return new UserEntity(data);
    } catch (error) {
      throw new NotFoundException(`User with ID ${id} not found` + error);
    }
  }
}
```
#### Controller
```ts
// src/user/user.controller.ts
import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  // ParseIntPipe 确保传进来的 id 是数字，不是 "abc"
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }
}
```
#### 装饰器（Decorators）
你可能会好奇这些带有`@`的东西到底是什么，如果你有`JAVA`背景的话就该发现其实这些和`Spring Boot`里的注解高度相似，我就先简单介绍一下会用到的装饰器。

|  装饰器   | 作用  |
|  ----  | ----  |
| `@Expose()`  | 暴露字段。只有加了它的字段才会返回给前端（配合 `@Exclude` 类级别使用时）。 |
| `@Exclude()` | 隐藏字段。通常放在 Class 头上，表示“默认全隐藏，谁有 Expose 谁才显示”。 |
| `@Transform()` | 自定义转换逻辑，把 A 变成 B。比如可以扁平化嵌套对象、把 `status: 1` 变成 `已完成` 等 |
|`@Controller`|作为路由前缀，例如`@Controller('user')`就是告诉NextJS但凡是以 `/user` 开头的请求，都在这里处理。|
|`@Get`,`@Post`等用来定义请求方法的的装饰器|定义具体的请求方法和子路径，用来处理|
|`@Injectable`|帮忙进行依赖注入，当在`Service`前加上这个就不需要自己在`Controller`中自己手动初始化|
|`@UseInterceptors`|本质是一个拦截器，主要工作在请求进来之前和响应出去之前的时候，就比如说Service层拿到数据之后在响应之前会根据响应的实体类来检查`@Exclude`和`@Expose`标签，把不该带的东西扣下，只放行干净的数据|
|`@Type()`|类型转换。告诉 class-transformer 这个嵌套对象的具体类型，否则会被当成普通 Object。方便拦截和清洗数据，你会在后面的数据聚合部分能看到|
#### 避坑
拦截器 (`ClassSerializerInterceptor`) 生效的前提是：你返回的必须是“类的实例”，而不是普通的 JS 对象。
- 错误写法
```ts
// Service
async findAll() {
  const { data } = await http.get(...);
  return data; // 👈 这里返回的是普通 JSON 对象 (Plain Object)
}
```
此时拦截器认为这不是Entity，直接原样返回，数据清洗失败
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "email": "Sincere@april.biz",
  "website": "hildegard.org",
  "username": "Bret",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```
- 正确写法
```ts
// Service
async findAll() {
  const { data } = await http.get(...);
  // 👇 必须用 new 变成实例，或者用 plainToInstance 方法
  return data.map(user => new UserEntity(user)); 
}
```
此时的响应 belike:
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "nickname": "Bret",
  "email": "Sincere@april.biz",
  "website": "hildegard.org",
  "location": "Gwenborough, Kulas Light",
  "companyName": "Romaguera-Crona"
}
```
#### 一些说明
你可能很奇怪 `firstValueFrom` 这玩意到底是干什么用的，简单来说，`firstValueFrom` 是 `RxJS` 库提供的一个工具函数，它的作用是：

把一个 `Observable`（可观察对象/流）转换成一个 `Promise`。

在 `NestJS` 中，这通常是为了让你能用更舒服的 `async / await` 语法来写代码。
这里只了解，看一下这个更为舒服的写法是什么样的：
```ts
// 加上 async/await，代码逻辑像同步代码一样清晰
async findAll() {
  const { data } = await firstValueFrom(
    this.httpService.get('...') // 这里原本是 Observable
  );
  return data; // 直接返回数据，Controller 也能直接拿到
}
```
你可能好奇这段注释是干什么用的
```json
/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment */
```
这是防止 `eslint` 报错的，我偷懒不想写 `UserRawData` 接口来表述返回的原始结构了，直接上 `any`
#### 清理效果
```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "nickname": "Bret",
    "email": "Sincere@april.biz",
    "website": "hildegard.org",
    "location": "Gwenborough, Kulas Light",
    "companyName": "Romaguera-Crona"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "nickname": "Antonette",
    "email": "Shanna@melissa.tv",
    "website": "anastasia.net",
    "location": "Wisokyburgh, Victor Plains",
    "companyName": "Deckow-Crist"
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "nickname": "Samantha",
    "email": "Nathan@yesenia.net",
    "website": "ramiro.info",
    "location": "McKenziehaven, Douglas Extension",
    "companyName": "Romaguera-Jacobson"
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "nickname": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "website": "kale.biz",
    "location": "South Elvis, Hoeger Mall",
    "companyName": "Robel-Corkery"
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "nickname": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "website": "demarco.info",
    "location": "Roscoeview, Skiles Walks",
    "companyName": "Keebler LLC"
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "nickname": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "website": "ola.org",
    "location": "South Christy, Norberto Crossing",
    "companyName": "Considine-Lockman"
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "nickname": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "website": "elvis.io",
    "location": "Howemouth, Rex Trail",
    "companyName": "Johns Group"
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "nickname": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "website": "jacynthe.com",
    "location": "Aliyaview, Ellsworth Summit",
    "companyName": "Abernathy Group"
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "nickname": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "website": "conrad.com",
    "location": "Bartholomebury, Dayna Park",
    "companyName": "Yost and Sons"
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "nickname": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "website": "ambrose.net",
    "location": "Lebsackbury, Kattie Turnpike",
    "companyName": "Hoeger LLC"
  }
]
```
## 数据聚合
我们先给自己确定一个新目标，在查询`/user/1`的时候不仅要查询到用户信息还要查询到对应的所有帖子的信息，这本来是需要调用好几个接口的，而且一般的后端基本上都不会这么写的，但是为了方便前端用，不要在前端写太多复杂的非 `UI` 逻辑，就只能前端自己写一个`BFF`层了
### 创建模块
创建 `src/user/entities/post.entity.ts`
### 代码编写
#### Entity
post.entity.ts
```ts
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class PostEntity {
  constructor(partial: any) {
    Object.assign(this, partial);
  }

  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  body: string;
}
```
user.entity.ts
```ts
// 👇 1. 引入 Type 和 PostEntity
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { PostEntity } from './post.entity';

@Exclude()
export class UserEntity {
  constructor(partial: any) {
    Object.assign(this, partial);
  }

  // ... (之前的 id, name, location 等字段保持不变) ...

  @Expose()
  id: number;
  
  @Expose()
  name: string;

  // ... (省略中间的代码) ...

  /**
   * 👇👇👇 新增的聚合字段 👇👇👇
   */
  @Expose()
  // 核心知识点：
  // 只有告诉 class-transformer 这个数组里装的是 PostEntity，
  // 它才会去执行 PostEntity 里的 @Exclude 规则。
  // 否则，它会把 posts 当作普通 JSON 原样返回，不过滤字段。
  @Type(() => PostEntity) 
  posts: PostEntity[];
}
```
修改`UserEntity`
#### Serivce
此时我们可以发送**并发**请求
```ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { UserEntity } from './entities/user.entity';
// import { PostEntity } from './entities/post.entity'; // 实际上在这里不需要直接引用，Entity层处理好了

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  async findOne(id: number): Promise<UserEntity> {
    // 1. 定义两个请求，但暂时不加 await
    // 这里的思路是：先把"订单"写好，还没发出去
    const userObservable = this.httpService.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const postsObservable = this.httpService.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );

    try {
      // 2. 🚀 并发执行：Promise.all
      // 这就像你一边让微波炉热饭，一边用烧水壶烧水。两个动作同时进行。
      // 如果不用 Promise.all 而是写两个 await，就是热完饭再烧水，慢一倍。
      const [userRes, postsRes] = await Promise.all([
        firstValueFrom(userObservable), // 取用户
        firstValueFrom(postsObservable) // 取帖子
      ]);

      // 3. 拼装数据
      // userRes.data 是用户信息对象
      // postsRes.data 是帖子数组
      const rawUser = userRes.data;
      const rawPosts = postsRes.data;

      // 手动把帖子塞进用户对象里
      // 注意：这里我们构造了一个临时的聚合对象
      const aggregatedData = {
        ...rawUser,     // 把用户字段铺开
        posts: rawPosts // 把帖子数组塞进去
      };

      // 4. 这里的 new UserEntity 
      // 会自动处理 user 的字段，同时根据 @Type 处理 posts 的字段
      return new UserEntity(aggregatedData);

    } catch (error) {
      console.error(error); // 打印错误方便调试
      throw new NotFoundException(`User or Posts fetching failed for ID ${id}`);
    }
  }

  // findAll 保持不变...
  async findAll() { ... }
}
```
#### 聚合效果
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "nickname": "Bret",
  "email": "Sincere@april.biz",
  "website": "hildegard.org",
  "location": "Gwenborough, Kulas Light",
  "companyName": "Romaguera-Crona",
  "posts": [
    {
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      "id": 6,
      "title": "dolorem eum magni eos aperiam quia",
      "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
      "id": 7,
      "title": "magnam facilis autem",
      "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
      "id": 8,
      "title": "dolorem dolore est ipsam",
      "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
      "id": 9,
      "title": "nesciunt iure omnis dolorem tempora et accusantium",
      "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
      "id": 10,
      "title": "optio molestias id quia eum",
      "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    }
  ]
}
```
## 全局拦截器
如果每一个 Controller 都加上 `@UseInterceptors(ClassSerializerInterceptor)` 是否会有些累赘？（虽然在你使用cli创建模块的时候已经自动带上了），而且万一忘记写了怎么办？那要怎么做呢，那干脆在`main.ts`里面加上全局的`安检`吧
如下：
```ts
// src/main.ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 👇 开启全局拦截器，以后 Controller 头上不用写了
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen(3000);
}
```
恭喜你，目前你已经学会怎么用 `NestJS` 去写一个简单的 `BFF` 层，恭喜你离一个高贵的前端开发者更近了一步！！！