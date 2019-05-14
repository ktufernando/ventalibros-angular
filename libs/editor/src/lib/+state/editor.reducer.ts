import { ArticleData } from '@angular-ngrx-nx-realworld-example-app/api';

import { EditorAction, EditorActionsType } from './editor.actions';

export interface Editor {
  article: ArticleData;
}

export interface EditorState {
  readonly editor: Editor;
}

export const editorInitialState: Editor = {
  article: {
    slug: '',
    title: '',
    description: '',
    body: '',
    tagList: [],
    createdAt: '',
    updatedAt: '',
    favorited: false,
    images: [],
    favoritesCount: 0,
    author: {
      name: '',
      image: ''
    }
  }
};

export function editorReducer(state: Editor, action: EditorAction): Editor {
  switch (action.type) {
    case EditorActionsType.LOAD_ARTICLE_SUCCESS: {
      return { ...state, article: action.payload };
    }
    case EditorActionsType.LOAD_ARTICLE_FAIL:
    case EditorActionsType.INITIALIZE_ARTICLE: {
      return editorInitialState;
    }
    default: {
      return state;
    }
  }
}
