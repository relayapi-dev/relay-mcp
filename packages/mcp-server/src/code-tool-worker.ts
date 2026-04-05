// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import path from 'node:path';
import util from 'node:util';
import Fuse from 'fuse.js';
import ts from 'typescript';
import { WorkerOutput } from './code-tool-types';
import { Relay, ClientOptions } from '@relayapi/mcp';

async function tseval(code: string) {
  return import('data:application/typescript;charset=utf-8;base64,' + Buffer.from(code).toString('base64'));
}

function getRunFunctionSource(code: string): {
  type: 'declaration' | 'expression';
  client: string | undefined;
  code: string;
} | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter();

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return {
          type: 'declaration',
          client: statement.parameters[0]?.name.getText(),
          code: printer.printNode(ts.EmitHint.Unspecified, statement.body!, sourceFile),
        };
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.name.text === 'run' &&
          // Check if it's initialized with a function
          declaration.initializer &&
          (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
        ) {
          return {
            type: 'expression',
            client: declaration.initializer.parameters[0]?.name.getText(),
            code: printer.printNode(ts.EmitHint.Unspecified, declaration.initializer, sourceFile),
          };
        }
      }
    }
  }

  return null;
}

function getTSDiagnostics(code: string): string[] {
  const functionSource = getRunFunctionSource(code)!;
  const codeWithImport = [
    'import { Relay } from "@relayapi/mcp";',
    functionSource.type === 'declaration' ?
      `async function run(${functionSource.client}: Relay)`
    : `const run: (${functionSource.client}: Relay) => Promise<unknown> =`,
    functionSource.code,
  ].join('\n');
  const sourcePath = path.resolve('code.ts');
  const ast = ts.createSourceFile(sourcePath, codeWithImport, ts.ScriptTarget.Latest, true);
  const options = ts.getDefaultCompilerOptions();
  options.target = ts.ScriptTarget.Latest;
  options.module = ts.ModuleKind.NodeNext;
  options.moduleResolution = ts.ModuleResolutionKind.NodeNext;
  const host = ts.createCompilerHost(options, true);
  const newHost: typeof host = {
    ...host,
    getSourceFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return ast;
      }
      return host.getSourceFile(...args);
    },
    readFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return codeWithImport;
      }
      return host.readFile(...args);
    },
    fileExists: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return true;
      }
      return host.fileExists(...args);
    },
  };
  const program = ts.createProgram({
    options,
    rootNames: [sourcePath],
    host: newHost,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program, ast);
  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
    if (!d.file || !d.start) return `- ${message}`;
    const { line: lineNumber } = ts.getLineAndCharacterOfPosition(d.file, d.start);
    const line = codeWithImport.split('\n').at(lineNumber)?.trim();
    return line ? `- ${message}\n    ${line}` : `- ${message}`;
  });
}

const fuse = new Fuse(
  [
    'client.posts.bulkCreate',
    'client.posts.create',
    'client.posts.delete',
    'client.posts.list',
    'client.posts.retrieve',
    'client.posts.retry',
    'client.posts.unpublish',
    'client.posts.update',
    'client.posts.logs.list',
    'client.posts.logs.retrieve',
    'client.accounts.delete',
    'client.accounts.list',
    'client.accounts.retrieve',
    'client.accounts.update',
    'client.accounts.health.list',
    'client.accounts.health.retrieve',
    'client.accounts.redditFlairs.retrieve',
    'client.accounts.facebookPages.retrieve',
    'client.accounts.facebookPages.setDefault',
    'client.accounts.linkedinOrganizations.retrieve',
    'client.accounts.linkedinOrganizations.switchType',
    'client.accounts.pinterestBoards.retrieve',
    'client.accounts.pinterestBoards.setDefault',
    'client.accounts.redditSubreddits.retrieve',
    'client.accounts.redditSubreddits.setDefault',
    'client.accounts.gmbLocations.retrieve',
    'client.accounts.gmbLocations.setDefault',
    'client.media.delete',
    'client.media.getPresignURL',
    'client.media.retrieve',
    'client.media.upload',
    'client.webhooks.create',
    'client.webhooks.delete',
    'client.webhooks.list',
    'client.webhooks.listLogs',
    'client.webhooks.sendTest',
    'client.webhooks.update',
    'client.apiKeys.create',
    'client.apiKeys.delete',
    'client.apiKeys.list',
    'client.usage.retrieve',
    'client.connect.completeOAuthCallback',
    'client.connect.createBlueskyConnection',
    'client.connect.fetchPendingData',
    'client.connect.startOAuthFlow',
    'client.connect.telegram.connectDirectly',
    'client.connect.telegram.initiateConnection',
    'client.connect.telegram.pollConnectionStatus',
    'client.connect.whatsapp.completeEmbeddedSignup',
    'client.connect.whatsapp.connectViaCredentials',
    'client.connect.whatsapp.getSDKConfig',
    'client.connect.facebook.pages.list',
    'client.connect.facebook.pages.select',
    'client.connect.linkedin.organizations.list',
    'client.connect.linkedin.organizations.select',
    'client.connect.pinterest.boards.list',
    'client.connect.pinterest.boards.select',
    'client.connect.googlebusiness.locations.list',
    'client.connect.googlebusiness.locations.select',
    'client.connect.snapchat.profiles.list',
    'client.connect.snapchat.profiles.select',
    'client.connections.listLogs',
    'client.analytics.getBestTime',
    'client.analytics.getContentDecay',
    'client.analytics.getPostTimeline',
    'client.analytics.getPostingFrequency',
    'client.analytics.listDailyMetrics',
    'client.analytics.retrieve',
    'client.analytics.youtube.getDailyViews',
    'client.tools.validate.checkPostLength',
    'client.tools.validate.retrieveSubreddit',
    'client.tools.validate.validateMedia',
    'client.tools.validate.validatePost',
    'client.tools.instagram.checkHashtagSafety',
    'client.queue.getNextSlot',
    'client.queue.preview',
    'client.queue.slots.create',
    'client.queue.slots.delete',
    'client.queue.slots.list',
    'client.queue.slots.update',
    'client.twitter.retweet.create',
    'client.twitter.retweet.undo',
    'client.twitter.bookmark.create',
    'client.twitter.bookmark.remove',
    'client.twitter.follow.create',
    'client.twitter.follow.unfollow',
    'client.inbox.comments.delete',
    'client.inbox.comments.list',
    'client.inbox.comments.privateReply',
    'client.inbox.comments.reply',
    'client.inbox.comments.retrieve',
    'client.inbox.comments.hide.create',
    'client.inbox.comments.hide.delete',
    'client.inbox.comments.like.create',
    'client.inbox.comments.like.delete',
    'client.inbox.reviews.list',
    'client.inbox.reviews.reply.create',
    'client.inbox.reviews.reply.delete',
    'client.reddit.getFeed',
    'client.reddit.search',
    'client.whatsapp.bulkSend',
    'client.whatsapp.listPhoneNumbers',
    'client.whatsapp.broadcasts.create',
    'client.whatsapp.broadcasts.delete',
    'client.whatsapp.broadcasts.list',
    'client.whatsapp.broadcasts.retrieve',
    'client.whatsapp.broadcasts.schedule',
    'client.whatsapp.broadcasts.send',
    'client.whatsapp.templates.create',
    'client.whatsapp.templates.delete',
    'client.whatsapp.templates.list',
    'client.whatsapp.templates.retrieve',
    'client.whatsapp.contacts.bulkOperations',
    'client.whatsapp.contacts.create',
    'client.whatsapp.contacts.delete',
    'client.whatsapp.contacts.import',
    'client.whatsapp.contacts.list',
    'client.whatsapp.contacts.retrieve',
    'client.whatsapp.groups.create',
    'client.whatsapp.groups.delete',
    'client.whatsapp.groups.list',
    'client.whatsapp.businessProfile.retrieve',
    'client.whatsapp.businessProfile.update',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const message = error.name ? `${error.name}: ${error.message}` : error.message;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as { opts: ClientOptions; code: string };

  const runFunctionSource = code ? getRunFunctionSource(code) : null;
  if (!runFunctionSource) {
    const message =
      code ?
        'The code is missing a top-level `run` function.'
      : 'The code argument is missing. Provide one containing a top-level `run` function.';
    return Response.json(
      {
        is_error: true,
        result: `${message} Write code within this template:\n\n\`\`\`\nasync function run(client) {\n  // Fill this out\n}\n\`\`\``,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const diagnostics = getTSDiagnostics(code);
  if (diagnostics.length > 0) {
    return Response.json(
      {
        is_error: true,
        result: `The code contains TypeScript diagnostics:\n${diagnostics.join('\n')}`,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new Relay({
    ...opts,
  });

  const log_lines: string[] = [];
  const err_lines: string[] = [];
  const originalConsole = globalThis.console;
  globalThis.console = {
    ...originalConsole,
    log: (...args: unknown[]) => {
      log_lines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      err_lines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    run_ = (await tseval(`${code}\nexport default run;`)).default;
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      is_error: false,
      result,
      log_lines,
      err_lines,
    } satisfies WorkerOutput);
  } catch (e) {
    return Response.json(
      {
        is_error: true,
        result: parseError(code, e),
        log_lines,
        err_lines,
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  } finally {
    globalThis.console = originalConsole;
  }
};

export default { fetch };
