declare const Hooks: {
  once(hook: string, callback: (...args: unknown[]) => void): void;
  on(hook: string, callback: (...args: unknown[]) => void): void;
};

declare const game: {
  settings: {
    get(moduleId: string, key: string): unknown;
    register<T extends boolean | string | number>(
      moduleId: string,
      key: string,
      data: {
        name: string;
        hint: string;
        scope: "client" | "world";
        config: boolean;
        type: BooleanConstructor | StringConstructor | NumberConstructor;
        default: T;
        onChange?: (value: T) => void;
      }
    ): void;
  };
};

declare const foundry: {
  utils: {
    randomID(): string;
  };
};
