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
@oclif/plugin-test-core-v2/0.2.22 linux-x64 node-v22.23.2
$ corev2 --help [COMMAND]
USAGE
  $ corev2 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`corev2 core-v2 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`](#corev2-core-v2-optionalarg-defaultarg-defaultfnarg)
* [`corev2 help [COMMAND]`](#corev2-help-command)
* [`corev2 plugins`](#corev2-plugins)
* [`corev2 plugins:inspect PLUGIN...`](#corev2-pluginsinspect-plugin)
* [`corev2 plugins install PLUGIN`](#corev2-plugins-install-plugin)
* [`corev2 plugins link PATH`](#corev2-plugins-link-path)
* [`corev2 plugins reset`](#corev2-plugins-reset)
* [`corev2 plugins uninstall [PLUGIN]`](#corev2-plugins-uninstall-plugin)
* [`corev2 plugins update`](#corev2-plugins-update)

## `corev2 core-v2 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`

```
USAGE
  $ corev2 core-v2 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG] [--json] [--optionalString <value>]
    [--defaultString <value>] [--defaultFnString <value>]

FLAGS
  --defaultFnString=<value>  [default: async fn default]
  --defaultString=<value>    [default: simple string default]
  --optionalString=<value>

GLOBAL FLAGS
  --json  Format output as json.
```

_See code: [src/commands/core-v2.ts](https://github.com/oclif/plugin-test-core-v2/blob/0.2.22/src/commands/core-v2.ts)_

## `corev2 help [COMMAND]`

Display help for corev2.

```
USAGE
  $ corev2 help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for corev2.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/7.0.0/src/commands/help.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/7.0.1/src/commands/plugins/index.ts)_

## `corev2 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ corev2 plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ corev2 plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/7.0.1/src/commands/plugins/inspect.ts)_

## `corev2 plugins install PLUGIN`

Installs a plugin into corev2.

```
USAGE
  $ corev2 plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into corev2.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the COREV2_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the COREV2_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ corev2 plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ corev2 plugins install myplugin

  Install a plugin from a github url.

    $ corev2 plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ corev2 plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/7.0.1/src/commands/plugins/install.ts)_

## `corev2 plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ corev2 plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ corev2 plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/7.0.1/src/commands/plugins/link.ts)_

## `corev2 plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ corev2 plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/7.0.1/src/commands/plugins/reset.ts)_

## `corev2 plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ corev2 plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ corev2 plugins unlink
  $ corev2 plugins remove

EXAMPLES
  $ corev2 plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/7.0.1/src/commands/plugins/uninstall.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/7.0.1/src/commands/plugins/update.ts)_
<!-- commandsstop -->
