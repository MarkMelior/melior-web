declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_ALERT_MESSAGE: string
    /** Версия приложения, проброшенная из package.json */
    NEXT_PUBLIC_APP_VERSION: string
    NEXT_PUBLIC_YOUTUBE_ID?: string
    YOUTUBE_API_KEY: string
  }
}

type DeepPartial<T> = T extends object
  ? {
    [P in keyof T]?: DeepPartial<T[P]>;
  }
  : T;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends object ? DeepStringify<T[K]> : string;
};
