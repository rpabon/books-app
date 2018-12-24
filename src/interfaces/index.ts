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
  readonly list: Book[];
  readonly pending: boolean;
  readonly error?: Error;
}
