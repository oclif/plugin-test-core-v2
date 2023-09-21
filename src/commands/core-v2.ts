import {Args, Command, Flags, Interfaces} from '@oclif/core'

type Result = {
  args: Interfaces.InferredArgs<typeof CoreV2.args>
  flags: Interfaces.InferredFlags<typeof CoreV2.flags>
}

export default class CoreV2 extends Command {
  static flags = {
    optionalString: Flags.string(),
    defaultString: Flags.string({
      default: 'simple string default',
    }),
    defaultFnString: Flags.string({
      default: async () => Promise.resolve('async fn default'),
    }),
  }

  static args = {
    optionalArg: Args.string(),
    defaultArg: Args.string({
      default: 'simple string default',
    }),
    defaultFnArg: Args.string({
      default: async () => Promise.resolve('async fn default'),
    }),
  }

  static enableJsonFlag = true

  async run(): Promise<Result> {
    const {args, flags} = await this.parse(CoreV2)
    this.log(`hello I am a CJS plugin from ${this.config.root}!`)
    return {args, flags}
  }
}
