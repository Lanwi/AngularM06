import { Post } from './models/post';
import { IdGeneratorUtils } from './utils/id-generator.utils';

export const POSTS: Post[] = [
  {
    _id: IdGeneratorUtils.uuidv4(),
    title: "Angular Material",
    link: "https://material.angular.io/",
    description: "Material Design components for Angular",
    icon: null
  },
  {
    _id: IdGeneratorUtils.uuidv4(),
    title: "Framework CSS Bulma",
    link: "https://bulma.io/",
    description: null,
    icon: null
  },
  {
    _id: IdGeneratorUtils.uuidv4(),
    title: "Framework TailwindCSS",
    link: "https://tailwindcss.com/",
    description: null,
    icon: null
  },
  {
    _id: IdGeneratorUtils.uuidv4(),
    title: "NgBootstrap",
    link: "https://ng-bootstrap.github.io/#/home",
    description: "Reactive State for Angular",
    icon: null
  },
  {
    _id: IdGeneratorUtils.uuidv4(),
    title: "NGRX",
    link: "https://ngrx.io/",
    description: null,
    icon: null
  },
  {
    _id: IdGeneratorUtils.uuidv4(),
    title: "Ionic",
    link: "https://ionicframework.com/",
    description: "One codebase. Any platform. Now in Angular",
    icon: null
  }
];
