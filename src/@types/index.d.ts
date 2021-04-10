declare module '*.png';
declare module '*.svg';

type ReactNavigationTransactionContext = {
  // ...
  data: {
    route: {
      name: string;
      key: string;
      params: {
        [key: string]: any;
      };
      /** Will be true if this is not the first time this screen with this key has been seen before. */
      hasBeenSeen: boolean;
    };
    previousRoute: {
      name: string;
      key: string;
      params: {
        [key: string]: any;
      };
    } | null;
  };
};
