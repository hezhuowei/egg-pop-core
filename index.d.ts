import "egg";
import popCore = require("@alicloud/pop-core");
declare module "egg" {
  interface Application {
    popCore: popCore;
  }
  interface EggAppConfig {
    popCore: {
      client?: popCore.Config;
      clients?: { [key: string]: popCore.Config };
      default?: popCore.Config;
    };
  }
}
