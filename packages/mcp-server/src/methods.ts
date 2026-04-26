// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
}

export const sdkMethods: SdkMethod[] = [{
  clientCallName: 'client.posts.create',
  fullyQualifiedName: 'posts.create',
  httpMethod: 'post',
  httpPath: '/v1/posts',
},{
  clientCallName: 'client.posts.retrieve',
  fullyQualifiedName: 'posts.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/posts/{id}',
},{
  clientCallName: 'client.posts.update',
  fullyQualifiedName: 'posts.update',
  httpMethod: 'patch',
  httpPath: '/v1/posts/{id}',
},{
  clientCallName: 'client.posts.list',
  fullyQualifiedName: 'posts.list',
  httpMethod: 'get',
  httpPath: '/v1/posts',
},{
  clientCallName: 'client.posts.delete',
  fullyQualifiedName: 'posts.delete',
  httpMethod: 'delete',
  httpPath: '/v1/posts/{id}',
},{
  clientCallName: 'client.posts.bulkCreate',
  fullyQualifiedName: 'posts.bulkCreate',
  httpMethod: 'post',
  httpPath: '/v1/posts/bulk',
},{
  clientCallName: 'client.posts.retry',
  fullyQualifiedName: 'posts.retry',
  httpMethod: 'post',
  httpPath: '/v1/posts/{id}/retry',
},{
  clientCallName: 'client.posts.unpublish',
  fullyQualifiedName: 'posts.unpublish',
  httpMethod: 'post',
  httpPath: '/v1/posts/{id}/unpublish',
},{
  clientCallName: 'client.posts.logs.retrieve',
  fullyQualifiedName: 'posts.logs.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/posts/{id}/logs',
},{
  clientCallName: 'client.posts.logs.list',
  fullyQualifiedName: 'posts.logs.list',
  httpMethod: 'get',
  httpPath: '/v1/posts/logs',
},{
  clientCallName: 'client.accounts.retrieve',
  fullyQualifiedName: 'accounts.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/accounts/{id}',
},{
  clientCallName: 'client.accounts.update',
  fullyQualifiedName: 'accounts.update',
  httpMethod: 'patch',
  httpPath: '/v1/accounts/{id}',
},{
  clientCallName: 'client.accounts.list',
  fullyQualifiedName: 'accounts.list',
  httpMethod: 'get',
  httpPath: '/v1/accounts',
},{
  clientCallName: 'client.accounts.delete',
  fullyQualifiedName: 'accounts.delete',
  httpMethod: 'delete',
  httpPath: '/v1/accounts/{id}',
},{
  clientCallName: 'client.accounts.health.retrieve',
  fullyQualifiedName: 'accounts.health.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/accounts/{id}/health',
},{
  clientCallName: 'client.accounts.health.list',
  fullyQualifiedName: 'accounts.health.list',
  httpMethod: 'get',
  httpPath: '/v1/accounts/health',
},{
  clientCallName: 'client.accounts.redditFlairs.retrieve',
  fullyQualifiedName: 'accounts.redditFlairs.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/accounts/{id}/reddit-flairs',
},{
  clientCallName: 'client.accounts.facebookPages.retrieve',
  fullyQualifiedName: 'accounts.facebookPages.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/accounts/{id}/facebook-pages',
},{
  clientCallName: 'client.accounts.facebookPages.setDefault',
  fullyQualifiedName: 'accounts.facebookPages.setDefault',
  httpMethod: 'put',
  httpPath: '/v1/accounts/{id}/facebook-pages',
},{
  clientCallName: 'client.accounts.linkedinOrganizations.retrieve',
  fullyQualifiedName: 'accounts.linkedinOrganizations.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/accounts/{id}/linkedin-organizations',
},{
  clientCallName: 'client.accounts.linkedinOrganizations.switchType',
  fullyQualifiedName: 'accounts.linkedinOrganizations.switchType',
  httpMethod: 'put',
  httpPath: '/v1/accounts/{id}/linkedin-organizations',
},{
  clientCallName: 'client.accounts.pinterestBoards.retrieve',
  fullyQualifiedName: 'accounts.pinterestBoards.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/accounts/{id}/pinterest-boards',
},{
  clientCallName: 'client.accounts.pinterestBoards.setDefault',
  fullyQualifiedName: 'accounts.pinterestBoards.setDefault',
  httpMethod: 'put',
  httpPath: '/v1/accounts/{id}/pinterest-boards',
},{
  clientCallName: 'client.accounts.redditSubreddits.retrieve',
  fullyQualifiedName: 'accounts.redditSubreddits.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/accounts/{id}/reddit-subreddits',
},{
  clientCallName: 'client.accounts.redditSubreddits.setDefault',
  fullyQualifiedName: 'accounts.redditSubreddits.setDefault',
  httpMethod: 'put',
  httpPath: '/v1/accounts/{id}/reddit-subreddits',
},{
  clientCallName: 'client.accounts.gmbLocations.retrieve',
  fullyQualifiedName: 'accounts.gmbLocations.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/accounts/{id}/gmb-locations',
},{
  clientCallName: 'client.accounts.gmbLocations.setDefault',
  fullyQualifiedName: 'accounts.gmbLocations.setDefault',
  httpMethod: 'put',
  httpPath: '/v1/accounts/{id}/gmb-locations',
},{
  clientCallName: 'client.media.retrieve',
  fullyQualifiedName: 'media.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/media/{id}',
},{
  clientCallName: 'client.media.delete',
  fullyQualifiedName: 'media.delete',
  httpMethod: 'delete',
  httpPath: '/v1/media/{id}',
},{
  clientCallName: 'client.media.getPresignURL',
  fullyQualifiedName: 'media.getPresignURL',
  httpMethod: 'post',
  httpPath: '/v1/media/presign',
},{
  clientCallName: 'client.media.upload',
  fullyQualifiedName: 'media.upload',
  httpMethod: 'post',
  httpPath: '/v1/media/upload',
},{
  clientCallName: 'client.webhooks.create',
  fullyQualifiedName: 'webhooks.create',
  httpMethod: 'post',
  httpPath: '/v1/webhooks',
},{
  clientCallName: 'client.webhooks.update',
  fullyQualifiedName: 'webhooks.update',
  httpMethod: 'patch',
  httpPath: '/v1/webhooks/{id}',
},{
  clientCallName: 'client.webhooks.list',
  fullyQualifiedName: 'webhooks.list',
  httpMethod: 'get',
  httpPath: '/v1/webhooks',
},{
  clientCallName: 'client.webhooks.delete',
  fullyQualifiedName: 'webhooks.delete',
  httpMethod: 'delete',
  httpPath: '/v1/webhooks/{id}',
},{
  clientCallName: 'client.webhooks.listLogs',
  fullyQualifiedName: 'webhooks.listLogs',
  httpMethod: 'get',
  httpPath: '/v1/webhooks/logs',
},{
  clientCallName: 'client.webhooks.sendTest',
  fullyQualifiedName: 'webhooks.sendTest',
  httpMethod: 'post',
  httpPath: '/v1/webhooks/test',
},{
  clientCallName: 'client.apiKeys.create',
  fullyQualifiedName: 'apiKeys.create',
  httpMethod: 'post',
  httpPath: '/v1/api-keys',
},{
  clientCallName: 'client.apiKeys.list',
  fullyQualifiedName: 'apiKeys.list',
  httpMethod: 'get',
  httpPath: '/v1/api-keys',
},{
  clientCallName: 'client.apiKeys.delete',
  fullyQualifiedName: 'apiKeys.delete',
  httpMethod: 'delete',
  httpPath: '/v1/api-keys/{id}',
},{
  clientCallName: 'client.usage.retrieve',
  fullyQualifiedName: 'usage.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/usage',
},{
  clientCallName: 'client.connect.completeOAuthCallback',
  fullyQualifiedName: 'connect.completeOAuthCallback',
  httpMethod: 'post',
  httpPath: '/v1/connect/{platform}',
},{
  clientCallName: 'client.connect.createBlueskyConnection',
  fullyQualifiedName: 'connect.createBlueskyConnection',
  httpMethod: 'post',
  httpPath: '/v1/connect/bluesky',
},{
  clientCallName: 'client.connect.fetchPendingData',
  fullyQualifiedName: 'connect.fetchPendingData',
  httpMethod: 'get',
  httpPath: '/v1/connect/pending-data',
},{
  clientCallName: 'client.connect.startOAuthFlow',
  fullyQualifiedName: 'connect.startOAuthFlow',
  httpMethod: 'get',
  httpPath: '/v1/connect/{platform}',
},{
  clientCallName: 'client.connect.telegram.connectDirectly',
  fullyQualifiedName: 'connect.telegram.connectDirectly',
  httpMethod: 'post',
  httpPath: '/v1/connect/telegram/direct',
},{
  clientCallName: 'client.connect.telegram.initiateConnection',
  fullyQualifiedName: 'connect.telegram.initiateConnection',
  httpMethod: 'post',
  httpPath: '/v1/connect/telegram',
},{
  clientCallName: 'client.connect.telegram.pollConnectionStatus',
  fullyQualifiedName: 'connect.telegram.pollConnectionStatus',
  httpMethod: 'get',
  httpPath: '/v1/connect/telegram',
},{
  clientCallName: 'client.connect.whatsapp.completeEmbeddedSignup',
  fullyQualifiedName: 'connect.whatsapp.completeEmbeddedSignup',
  httpMethod: 'post',
  httpPath: '/v1/connect/whatsapp/embedded-signup',
},{
  clientCallName: 'client.connect.whatsapp.connectViaCredentials',
  fullyQualifiedName: 'connect.whatsapp.connectViaCredentials',
  httpMethod: 'post',
  httpPath: '/v1/connect/whatsapp/credentials',
},{
  clientCallName: 'client.connect.whatsapp.getSDKConfig',
  fullyQualifiedName: 'connect.whatsapp.getSDKConfig',
  httpMethod: 'get',
  httpPath: '/v1/connect/whatsapp/sdk-config',
},{
  clientCallName: 'client.connect.facebook.pages.list',
  fullyQualifiedName: 'connect.facebook.pages.list',
  httpMethod: 'get',
  httpPath: '/v1/connect/facebook/pages',
},{
  clientCallName: 'client.connect.facebook.pages.select',
  fullyQualifiedName: 'connect.facebook.pages.select',
  httpMethod: 'post',
  httpPath: '/v1/connect/facebook/pages',
},{
  clientCallName: 'client.connect.linkedin.organizations.list',
  fullyQualifiedName: 'connect.linkedin.organizations.list',
  httpMethod: 'get',
  httpPath: '/v1/connect/linkedin/organizations',
},{
  clientCallName: 'client.connect.linkedin.organizations.select',
  fullyQualifiedName: 'connect.linkedin.organizations.select',
  httpMethod: 'post',
  httpPath: '/v1/connect/linkedin/organizations',
},{
  clientCallName: 'client.connect.pinterest.boards.list',
  fullyQualifiedName: 'connect.pinterest.boards.list',
  httpMethod: 'get',
  httpPath: '/v1/connect/pinterest/boards',
},{
  clientCallName: 'client.connect.pinterest.boards.select',
  fullyQualifiedName: 'connect.pinterest.boards.select',
  httpMethod: 'post',
  httpPath: '/v1/connect/pinterest/boards',
},{
  clientCallName: 'client.connect.googlebusiness.locations.list',
  fullyQualifiedName: 'connect.googlebusiness.locations.list',
  httpMethod: 'get',
  httpPath: '/v1/connect/googlebusiness/locations',
},{
  clientCallName: 'client.connect.googlebusiness.locations.select',
  fullyQualifiedName: 'connect.googlebusiness.locations.select',
  httpMethod: 'post',
  httpPath: '/v1/connect/googlebusiness/locations',
},{
  clientCallName: 'client.connect.snapchat.profiles.list',
  fullyQualifiedName: 'connect.snapchat.profiles.list',
  httpMethod: 'get',
  httpPath: '/v1/connect/snapchat/profiles',
},{
  clientCallName: 'client.connect.snapchat.profiles.select',
  fullyQualifiedName: 'connect.snapchat.profiles.select',
  httpMethod: 'post',
  httpPath: '/v1/connect/snapchat/profiles',
},{
  clientCallName: 'client.connections.listLogs',
  fullyQualifiedName: 'connections.listLogs',
  httpMethod: 'get',
  httpPath: '/v1/connections/logs',
},{
  clientCallName: 'client.analytics.retrieve',
  fullyQualifiedName: 'analytics.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/analytics',
},{
  clientCallName: 'client.analytics.getBestTime',
  fullyQualifiedName: 'analytics.getBestTime',
  httpMethod: 'get',
  httpPath: '/v1/analytics/best-time',
},{
  clientCallName: 'client.analytics.getContentDecay',
  fullyQualifiedName: 'analytics.getContentDecay',
  httpMethod: 'get',
  httpPath: '/v1/analytics/content-decay',
},{
  clientCallName: 'client.analytics.getPostTimeline',
  fullyQualifiedName: 'analytics.getPostTimeline',
  httpMethod: 'get',
  httpPath: '/v1/analytics/post-timeline',
},{
  clientCallName: 'client.analytics.getPostingFrequency',
  fullyQualifiedName: 'analytics.getPostingFrequency',
  httpMethod: 'get',
  httpPath: '/v1/analytics/posting-frequency',
},{
  clientCallName: 'client.analytics.listDailyMetrics',
  fullyQualifiedName: 'analytics.listDailyMetrics',
  httpMethod: 'get',
  httpPath: '/v1/analytics/daily-metrics',
},{
  clientCallName: 'client.analytics.youtube.getDailyViews',
  fullyQualifiedName: 'analytics.youtube.getDailyViews',
  httpMethod: 'get',
  httpPath: '/v1/analytics/youtube/daily-views',
},{
  clientCallName: 'client.tools.validate.checkPostLength',
  fullyQualifiedName: 'tools.validate.checkPostLength',
  httpMethod: 'post',
  httpPath: '/v1/tools/validate/post-length',
},{
  clientCallName: 'client.tools.validate.retrieveSubreddit',
  fullyQualifiedName: 'tools.validate.retrieveSubreddit',
  httpMethod: 'get',
  httpPath: '/v1/tools/validate/subreddit',
},{
  clientCallName: 'client.tools.validate.validateMedia',
  fullyQualifiedName: 'tools.validate.validateMedia',
  httpMethod: 'post',
  httpPath: '/v1/tools/validate/media',
},{
  clientCallName: 'client.tools.validate.validatePost',
  fullyQualifiedName: 'tools.validate.validatePost',
  httpMethod: 'post',
  httpPath: '/v1/tools/validate/post',
},{
  clientCallName: 'client.tools.instagram.checkHashtagSafety',
  fullyQualifiedName: 'tools.instagram.checkHashtagSafety',
  httpMethod: 'post',
  httpPath: '/v1/tools/instagram/hashtag-checker',
},{
  clientCallName: 'client.queue.getNextSlot',
  fullyQualifiedName: 'queue.getNextSlot',
  httpMethod: 'get',
  httpPath: '/v1/queue/next-slot',
},{
  clientCallName: 'client.queue.preview',
  fullyQualifiedName: 'queue.preview',
  httpMethod: 'get',
  httpPath: '/v1/queue/preview',
},{
  clientCallName: 'client.queue.slots.create',
  fullyQualifiedName: 'queue.slots.create',
  httpMethod: 'post',
  httpPath: '/v1/queue/slots',
},{
  clientCallName: 'client.queue.slots.update',
  fullyQualifiedName: 'queue.slots.update',
  httpMethod: 'put',
  httpPath: '/v1/queue/slots',
},{
  clientCallName: 'client.queue.slots.list',
  fullyQualifiedName: 'queue.slots.list',
  httpMethod: 'get',
  httpPath: '/v1/queue/slots',
},{
  clientCallName: 'client.queue.slots.delete',
  fullyQualifiedName: 'queue.slots.delete',
  httpMethod: 'delete',
  httpPath: '/v1/queue/slots',
},{
  clientCallName: 'client.twitter.retweet.create',
  fullyQualifiedName: 'twitter.retweet.create',
  httpMethod: 'post',
  httpPath: '/v1/twitter/retweet',
},{
  clientCallName: 'client.twitter.retweet.undo',
  fullyQualifiedName: 'twitter.retweet.undo',
  httpMethod: 'delete',
  httpPath: '/v1/twitter/retweet',
},{
  clientCallName: 'client.twitter.bookmark.create',
  fullyQualifiedName: 'twitter.bookmark.create',
  httpMethod: 'post',
  httpPath: '/v1/twitter/bookmark',
},{
  clientCallName: 'client.twitter.bookmark.remove',
  fullyQualifiedName: 'twitter.bookmark.remove',
  httpMethod: 'delete',
  httpPath: '/v1/twitter/bookmark',
},{
  clientCallName: 'client.twitter.follow.create',
  fullyQualifiedName: 'twitter.follow.create',
  httpMethod: 'post',
  httpPath: '/v1/twitter/follow',
},{
  clientCallName: 'client.twitter.follow.unfollow',
  fullyQualifiedName: 'twitter.follow.unfollow',
  httpMethod: 'delete',
  httpPath: '/v1/twitter/follow',
},{
  clientCallName: 'client.inbox.comments.retrieve',
  fullyQualifiedName: 'inbox.comments.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/inbox/comments/{post_id}',
},{
  clientCallName: 'client.inbox.comments.list',
  fullyQualifiedName: 'inbox.comments.list',
  httpMethod: 'get',
  httpPath: '/v1/inbox/comments',
},{
  clientCallName: 'client.inbox.comments.delete',
  fullyQualifiedName: 'inbox.comments.delete',
  httpMethod: 'delete',
  httpPath: '/v1/inbox/comments/{comment_id}',
},{
  clientCallName: 'client.inbox.comments.privateReply',
  fullyQualifiedName: 'inbox.comments.privateReply',
  httpMethod: 'post',
  httpPath: '/v1/inbox/comments/{comment_id}/private-reply',
},{
  clientCallName: 'client.inbox.comments.reply',
  fullyQualifiedName: 'inbox.comments.reply',
  httpMethod: 'post',
  httpPath: '/v1/inbox/comments/{post_id}/reply',
},{
  clientCallName: 'client.inbox.comments.hide.create',
  fullyQualifiedName: 'inbox.comments.hide.create',
  httpMethod: 'post',
  httpPath: '/v1/inbox/comments/{comment_id}/hide',
},{
  clientCallName: 'client.inbox.comments.hide.delete',
  fullyQualifiedName: 'inbox.comments.hide.delete',
  httpMethod: 'delete',
  httpPath: '/v1/inbox/comments/{comment_id}/hide',
},{
  clientCallName: 'client.inbox.comments.like.create',
  fullyQualifiedName: 'inbox.comments.like.create',
  httpMethod: 'post',
  httpPath: '/v1/inbox/comments/{comment_id}/like',
},{
  clientCallName: 'client.inbox.comments.like.delete',
  fullyQualifiedName: 'inbox.comments.like.delete',
  httpMethod: 'delete',
  httpPath: '/v1/inbox/comments/{comment_id}/like',
},{
  clientCallName: 'client.inbox.reviews.list',
  fullyQualifiedName: 'inbox.reviews.list',
  httpMethod: 'get',
  httpPath: '/v1/inbox/reviews',
},{
  clientCallName: 'client.inbox.reviews.reply.create',
  fullyQualifiedName: 'inbox.reviews.reply.create',
  httpMethod: 'post',
  httpPath: '/v1/inbox/reviews/{review_id}/reply',
},{
  clientCallName: 'client.inbox.reviews.reply.delete',
  fullyQualifiedName: 'inbox.reviews.reply.delete',
  httpMethod: 'delete',
  httpPath: '/v1/inbox/reviews/{review_id}/reply',
},{
  clientCallName: 'client.reddit.getFeed',
  fullyQualifiedName: 'reddit.getFeed',
  httpMethod: 'get',
  httpPath: '/v1/reddit/feed',
},{
  clientCallName: 'client.reddit.search',
  fullyQualifiedName: 'reddit.search',
  httpMethod: 'get',
  httpPath: '/v1/reddit/search',
},{
  clientCallName: 'client.whatsapp.bulkSend',
  fullyQualifiedName: 'whatsapp.bulkSend',
  httpMethod: 'post',
  httpPath: '/v1/whatsapp/bulk-send',
},{
  clientCallName: 'client.whatsapp.listPhoneNumbers',
  fullyQualifiedName: 'whatsapp.listPhoneNumbers',
  httpMethod: 'get',
  httpPath: '/v1/whatsapp/phone-numbers',
},{
  clientCallName: 'client.whatsapp.broadcasts.create',
  fullyQualifiedName: 'whatsapp.broadcasts.create',
  httpMethod: 'post',
  httpPath: '/v1/whatsapp/broadcasts',
},{
  clientCallName: 'client.whatsapp.broadcasts.retrieve',
  fullyQualifiedName: 'whatsapp.broadcasts.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/whatsapp/broadcasts/{broadcast_id}',
},{
  clientCallName: 'client.whatsapp.broadcasts.list',
  fullyQualifiedName: 'whatsapp.broadcasts.list',
  httpMethod: 'get',
  httpPath: '/v1/whatsapp/broadcasts',
},{
  clientCallName: 'client.whatsapp.broadcasts.delete',
  fullyQualifiedName: 'whatsapp.broadcasts.delete',
  httpMethod: 'delete',
  httpPath: '/v1/whatsapp/broadcasts/{broadcast_id}',
},{
  clientCallName: 'client.whatsapp.broadcasts.schedule',
  fullyQualifiedName: 'whatsapp.broadcasts.schedule',
  httpMethod: 'post',
  httpPath: '/v1/whatsapp/broadcasts/{broadcast_id}/schedule',
},{
  clientCallName: 'client.whatsapp.broadcasts.send',
  fullyQualifiedName: 'whatsapp.broadcasts.send',
  httpMethod: 'post',
  httpPath: '/v1/whatsapp/broadcasts/{broadcast_id}/send',
},{
  clientCallName: 'client.whatsapp.templates.create',
  fullyQualifiedName: 'whatsapp.templates.create',
  httpMethod: 'post',
  httpPath: '/v1/whatsapp/templates',
},{
  clientCallName: 'client.whatsapp.templates.retrieve',
  fullyQualifiedName: 'whatsapp.templates.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/whatsapp/templates/{template_name}',
},{
  clientCallName: 'client.whatsapp.templates.list',
  fullyQualifiedName: 'whatsapp.templates.list',
  httpMethod: 'get',
  httpPath: '/v1/whatsapp/templates',
},{
  clientCallName: 'client.whatsapp.templates.delete',
  fullyQualifiedName: 'whatsapp.templates.delete',
  httpMethod: 'delete',
  httpPath: '/v1/whatsapp/templates/{template_name}',
},{
  clientCallName: 'client.whatsapp.businessProfile.retrieve',
  fullyQualifiedName: 'whatsapp.businessProfile.retrieve',
  httpMethod: 'get',
  httpPath: '/v1/whatsapp/business-profile',
},{
  clientCallName: 'client.whatsapp.businessProfile.update',
  fullyQualifiedName: 'whatsapp.businessProfile.update',
  httpMethod: 'put',
  httpPath: '/v1/whatsapp/business-profile',
}];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods.filter((method) => method.httpMethod === 'get').forEach(
        (method) => allowedMethodsSet.add(method)
      );
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(`Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`);
        }
      });

      sdkMethods.filter((method) =>
          allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName))
        ).forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(`Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`);
      }
    });

    allowedMethods = allowedMethods.filter((method) =>
      !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName))
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
