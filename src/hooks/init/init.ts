import {Hook} from '@oclif/core'

const hook: Hook<'init'> = async function () {
  console.log('Greetings! from plugin-test-core-v2 init hook')
}

export default hook
