export interface StoreAction {
  readonly type: string;
  readonly payload?: any;
}

export type DispatchAction = (action: StoreAction) => any;

/* Book List */
export interface Book {
  readonly id: number;
  readonly author_id: number;
  readonly title: string;
  readonly author: string;
  readonly url: string;
  readonly url_small: string;
}

export interface BookListState {
  readonly list?: Book[];
  readonly pending: boolean;
  readonly error?: Error;
}

export interface BookState {
  readonly pending?: boolean;
  readonly id: number;
  readonly title: string;
  readonly isbn: number;
  readonly image_url: string;
  readonly year: number;
  readonly description: string;
  readonly rating: number;
  readonly pages: number;
  readonly author_id: number;
  readonly author: string;
  readonly author_image_url: string;
  readonly similar_books?: Book[];
  readonly error?: Error;
}
