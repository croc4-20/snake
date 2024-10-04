declare namespace NodeJS {
  interface Module {
    hot?: {
      accept(dependencies?: string | string[], callback?: () => void): void;
      dispose(callback: () => void): void;
    };
  }
}