interface NodeModule {
  hot: {
    dispose: any;
    accept: any;
  };
}

interface NodeProcess {
  env: any;
}

declare const process: NodeProcess;
declare const module: NodeModule;
declare var module: {
  hot?: {
    accept(callback?: () => void): void;
  };
};
