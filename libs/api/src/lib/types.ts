export interface Profile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
  loading: boolean;
}

export interface ArticleComment {
  id: number;
  body: string;
  createdAt: string;
  author: Profile;
}

export interface ArticleData {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
  images: string[];
}

export interface Author {
  name: string;
  image: String
}

export interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}
