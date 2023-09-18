import {Command} from '@oclif/core'

export default class CoreV2 extends Command {
  public async run(): Promise<void> {
    this.log(`hello I am an @oclif/core@v2 plugin from ${this.config.root}!`)
  }
}
