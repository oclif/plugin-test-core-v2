oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @oclif/plugin-test-core-v2
$ corev2 COMMAND
running command...
$ corev2 (--version)
@oclif/plugin-test-core-v2/0.0.0 darwin-arm64 node-v18.15.0
$ corev2 --help [COMMAND]
USAGE
  $ corev2 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`corev2 hello PERSON`](#corev2-hello-person)
* [`corev2 hello world`](#corev2-hello-world)
* [`corev2 help [COMMANDS]`](#corev2-help-commands)
* [`corev2 plugins`](#corev2-plugins)
* [`corev2 plugins:install PLUGIN...`](#corev2-pluginsinstall-plugin)
* [`corev2 plugins:inspect PLUGIN...`](#corev2-pluginsinspect-plugin)
* [`corev2 plugins:install PLUGIN...`](#corev2-pluginsinstall-plugin-1)
* [`corev2 plugins:link PLUGIN`](#corev2-pluginslink-plugin)
* [`corev2 plugins:uninstall PLUGIN...`](#corev2-pluginsuninstall-plugin)
* [`corev2 plugins:uninstall PLUGIN...`](#corev2-pluginsuninstall-plugin-1)
* [`corev2 plugins:uninstall PLUGIN...`](#corev2-pluginsuninstall-plugin-2)
* [`corev2 plugins update`](#corev2-plugins-update)

## `corev2 hello PERSON`

Say hello

```
USAGE
  $ corev2 hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/oclif/plugin-test-core-v2/blob/v0.0.0/dist/commands/hello/index.ts)_

## `corev2 hello world`

Say hello world

```
USAGE
  $ corev2 hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ corev2 hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/oclif/plugin-test-core-v2/blob/v0.0.0/dist/commands/hello/world.ts)_

## `corev2 help [COMMANDS]`

Display help for corev2.

```
USAGE
  $ corev2 help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for corev2.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.19/src/commands/help.ts)_

## `corev2 plugins`

List installed plugins.

```
USAGE
  $ corev2 plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ corev2 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/index.ts)_

## `corev2 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ corev2 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ corev2 plugins add

EXAMPLES
  $ corev2 plugins:install myplugin 

  $ corev2 plugins:install https://github.com/someuser/someplugin

  $ corev2 plugins:install someuser/someplugin
```

## `corev2 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ corev2 plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ corev2 plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/inspect.ts)_

## `corev2 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ corev2 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ corev2 plugins add

EXAMPLES
  $ corev2 plugins:install myplugin 

  $ corev2 plugins:install https://github.com/someuser/someplugin

  $ corev2 plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/install.ts)_

## `corev2 plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ corev2 plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ corev2 plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/link.ts)_

## `corev2 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ corev2 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ corev2 plugins unlink
  $ corev2 plugins remove
```

## `corev2 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ corev2 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ corev2 plugins unlink
  $ corev2 plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/uninstall.ts)_

## `corev2 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ corev2 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ corev2 plugins unlink
  $ corev2 plugins remove
```

## `corev2 plugins update`

Update installed plugins.

```
USAGE
  $ corev2 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/update.ts)_
<!-- commandsstop -->
