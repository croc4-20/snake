interface NodeModule {
  hot?: {
    accept(callback?: () => void): void;
    dispose(callback?: () => void): void;
  };
}

declare const module: NodeModule;