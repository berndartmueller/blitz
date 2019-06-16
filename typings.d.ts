declare var Gator;
declare var ActiveXObject;

declare var System: SystemJS;

interface SystemJS {
  import: (path?: string) => Promise<any>;
}

declare interface Window {
}

declare var ENV;

interface ProcessEnv {
  [key: string]: string | undefined;
}
