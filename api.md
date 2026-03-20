# Posts

Types:

- <code><a href="./src/resources/posts/posts.ts">PostCreateResponse</a></code>
- <code><a href="./src/resources/posts/posts.ts">PostRetrieveResponse</a></code>
- <code><a href="./src/resources/posts/posts.ts">PostUpdateResponse</a></code>
- <code><a href="./src/resources/posts/posts.ts">PostListResponse</a></code>
- <code><a href="./src/resources/posts/posts.ts">PostBulkCreateResponse</a></code>
- <code><a href="./src/resources/posts/posts.ts">PostRetryResponse</a></code>
- <code><a href="./src/resources/posts/posts.ts">PostUnpublishResponse</a></code>

Methods:

- <code title="post /v1/posts">client.posts.<a href="./src/resources/posts/posts.ts">create</a>({ ...params }) -> PostCreateResponse</code>
- <code title="get /v1/posts/{id}">client.posts.<a href="./src/resources/posts/posts.ts">retrieve</a>(id) -> PostRetrieveResponse</code>
- <code title="patch /v1/posts/{id}">client.posts.<a href="./src/resources/posts/posts.ts">update</a>(id, { ...params }) -> PostUpdateResponse</code>
- <code title="get /v1/posts">client.posts.<a href="./src/resources/posts/posts.ts">list</a>({ ...params }) -> PostListResponse</code>
- <code title="delete /v1/posts/{id}">client.posts.<a href="./src/resources/posts/posts.ts">delete</a>(id) -> void</code>
- <code title="post /v1/posts/bulk">client.posts.<a href="./src/resources/posts/posts.ts">bulkCreate</a>({ ...params }) -> PostBulkCreateResponse</code>
- <code title="post /v1/posts/{id}/retry">client.posts.<a href="./src/resources/posts/posts.ts">retry</a>(id) -> PostRetryResponse</code>
- <code title="post /v1/posts/{id}/unpublish">client.posts.<a href="./src/resources/posts/posts.ts">unpublish</a>(id) -> PostUnpublishResponse</code>

## Logs

Types:

- <code><a href="./src/resources/posts/logs.ts">LogRetrieveResponse</a></code>
- <code><a href="./src/resources/posts/logs.ts">LogListResponse</a></code>

Methods:

- <code title="get /v1/posts/{id}/logs">client.posts.logs.<a href="./src/resources/posts/logs.ts">retrieve</a>(id) -> LogRetrieveResponse</code>
- <code title="get /v1/posts/logs">client.posts.logs.<a href="./src/resources/posts/logs.ts">list</a>({ ...params }) -> LogListResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountListResponse</a></code>

Methods:

- <code title="get /v1/accounts/{id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrieve</a>(id) -> AccountRetrieveResponse</code>
- <code title="patch /v1/accounts/{id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">update</a>(id, { ...params }) -> AccountUpdateResponse</code>
- <code title="get /v1/accounts">client.accounts.<a href="./src/resources/accounts/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="delete /v1/accounts/{id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">delete</a>(id) -> void</code>

## Health

Types:

- <code><a href="./src/resources/accounts/health.ts">HealthRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/health.ts">HealthListResponse</a></code>

Methods:

- <code title="get /v1/accounts/{id}/health">client.accounts.health.<a href="./src/resources/accounts/health.ts">retrieve</a>(id) -> HealthRetrieveResponse</code>
- <code title="get /v1/accounts/health">client.accounts.health.<a href="./src/resources/accounts/health.ts">list</a>() -> HealthListResponse</code>

## RedditFlairs

Types:

- <code><a href="./src/resources/accounts/reddit-flairs.ts">RedditFlairRetrieveResponse</a></code>

Methods:

- <code title="get /v1/accounts/{id}/reddit-flairs">client.accounts.redditFlairs.<a href="./src/resources/accounts/reddit-flairs.ts">retrieve</a>(id, { ...params }) -> RedditFlairRetrieveResponse</code>

## FacebookPages

Types:

- <code><a href="./src/resources/accounts/facebook-pages.ts">FacebookPageRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/facebook-pages.ts">FacebookPageSetDefaultResponse</a></code>

Methods:

- <code title="get /v1/accounts/{id}/facebook-pages">client.accounts.facebookPages.<a href="./src/resources/accounts/facebook-pages.ts">retrieve</a>(id) -> FacebookPageRetrieveResponse</code>
- <code title="put /v1/accounts/{id}/facebook-pages">client.accounts.facebookPages.<a href="./src/resources/accounts/facebook-pages.ts">setDefault</a>(id, { ...params }) -> FacebookPageSetDefaultResponse</code>

## LinkedinOrganizations

Types:

- <code><a href="./src/resources/accounts/linkedin-organizations.ts">LinkedinOrganizationRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/linkedin-organizations.ts">LinkedinOrganizationSwitchTypeResponse</a></code>

Methods:

- <code title="get /v1/accounts/{id}/linkedin-organizations">client.accounts.linkedinOrganizations.<a href="./src/resources/accounts/linkedin-organizations.ts">retrieve</a>(id) -> LinkedinOrganizationRetrieveResponse</code>
- <code title="put /v1/accounts/{id}/linkedin-organizations">client.accounts.linkedinOrganizations.<a href="./src/resources/accounts/linkedin-organizations.ts">switchType</a>(id, { ...params }) -> LinkedinOrganizationSwitchTypeResponse</code>

## PinterestBoards

Types:

- <code><a href="./src/resources/accounts/pinterest-boards.ts">PinterestBoardRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/pinterest-boards.ts">PinterestBoardSetDefaultResponse</a></code>

Methods:

- <code title="get /v1/accounts/{id}/pinterest-boards">client.accounts.pinterestBoards.<a href="./src/resources/accounts/pinterest-boards.ts">retrieve</a>(id) -> PinterestBoardRetrieveResponse</code>
- <code title="put /v1/accounts/{id}/pinterest-boards">client.accounts.pinterestBoards.<a href="./src/resources/accounts/pinterest-boards.ts">setDefault</a>(id, { ...params }) -> PinterestBoardSetDefaultResponse</code>

## RedditSubreddits

Types:

- <code><a href="./src/resources/accounts/reddit-subreddits.ts">RedditSubredditRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/reddit-subreddits.ts">RedditSubredditSetDefaultResponse</a></code>

Methods:

- <code title="get /v1/accounts/{id}/reddit-subreddits">client.accounts.redditSubreddits.<a href="./src/resources/accounts/reddit-subreddits.ts">retrieve</a>(id) -> RedditSubredditRetrieveResponse</code>
- <code title="put /v1/accounts/{id}/reddit-subreddits">client.accounts.redditSubreddits.<a href="./src/resources/accounts/reddit-subreddits.ts">setDefault</a>(id, { ...params }) -> RedditSubredditSetDefaultResponse</code>

## GmbLocations

Types:

- <code><a href="./src/resources/accounts/gmb-locations.ts">GmbLocationRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/gmb-locations.ts">GmbLocationSetDefaultResponse</a></code>

Methods:

- <code title="get /v1/accounts/{id}/gmb-locations">client.accounts.gmbLocations.<a href="./src/resources/accounts/gmb-locations.ts">retrieve</a>(id) -> GmbLocationRetrieveResponse</code>
- <code title="put /v1/accounts/{id}/gmb-locations">client.accounts.gmbLocations.<a href="./src/resources/accounts/gmb-locations.ts">setDefault</a>(id, { ...params }) -> GmbLocationSetDefaultResponse</code>

# Media

Types:

- <code><a href="./src/resources/media.ts">MediaRetrieveResponse</a></code>
- <code><a href="./src/resources/media.ts">MediaGetPresignURLResponse</a></code>
- <code><a href="./src/resources/media.ts">MediaUploadResponse</a></code>

Methods:

- <code title="get /v1/media/{id}">client.media.<a href="./src/resources/media.ts">retrieve</a>(id) -> MediaRetrieveResponse</code>
- <code title="delete /v1/media/{id}">client.media.<a href="./src/resources/media.ts">delete</a>(id) -> void</code>
- <code title="post /v1/media/presign">client.media.<a href="./src/resources/media.ts">getPresignURL</a>({ ...params }) -> MediaGetPresignURLResponse</code>
- <code title="post /v1/media/upload">client.media.<a href="./src/resources/media.ts">upload</a>(body, { ...params }) -> MediaUploadResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookListLogsResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookSendTestResponse</a></code>

Methods:

- <code title="post /v1/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="patch /v1/webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">update</a>(id, { ...params }) -> WebhookUpdateResponse</code>
- <code title="get /v1/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">list</a>({ ...params }) -> WebhookListResponse</code>
- <code title="delete /v1/webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">delete</a>(id) -> void</code>
- <code title="get /v1/webhooks/logs">client.webhooks.<a href="./src/resources/webhooks.ts">listLogs</a>({ ...params }) -> WebhookListLogsResponse</code>
- <code title="post /v1/webhooks/test">client.webhooks.<a href="./src/resources/webhooks.ts">sendTest</a>({ ...params }) -> WebhookSendTestResponse</code>

# APIKeys

Types:

- <code><a href="./src/resources/api-keys.ts">APIKeyCreateResponse</a></code>
- <code><a href="./src/resources/api-keys.ts">APIKeyListResponse</a></code>

Methods:

- <code title="post /v1/api-keys">client.apiKeys.<a href="./src/resources/api-keys.ts">create</a>({ ...params }) -> APIKeyCreateResponse</code>
- <code title="get /v1/api-keys">client.apiKeys.<a href="./src/resources/api-keys.ts">list</a>({ ...params }) -> APIKeyListResponse</code>
- <code title="delete /v1/api-keys/{id}">client.apiKeys.<a href="./src/resources/api-keys.ts">delete</a>(id) -> void</code>

# Usage

Types:

- <code><a href="./src/resources/usage.ts">UsageRetrieveResponse</a></code>

Methods:

- <code title="get /v1/usage">client.usage.<a href="./src/resources/usage.ts">retrieve</a>() -> UsageRetrieveResponse</code>

# AccountGroups

Types:

- <code><a href="./src/resources/account-groups.ts">AccountGroupCreateResponse</a></code>
- <code><a href="./src/resources/account-groups.ts">AccountGroupUpdateResponse</a></code>
- <code><a href="./src/resources/account-groups.ts">AccountGroupListResponse</a></code>

Methods:

- <code title="post /v1/account-groups">client.accountGroups.<a href="./src/resources/account-groups.ts">create</a>({ ...params }) -> AccountGroupCreateResponse</code>
- <code title="put /v1/account-groups/{id}">client.accountGroups.<a href="./src/resources/account-groups.ts">update</a>(id, { ...params }) -> AccountGroupUpdateResponse</code>
- <code title="get /v1/account-groups">client.accountGroups.<a href="./src/resources/account-groups.ts">list</a>() -> AccountGroupListResponse</code>
- <code title="delete /v1/account-groups/{id}">client.accountGroups.<a href="./src/resources/account-groups.ts">delete</a>(id) -> void</code>

# Connect

Types:

- <code><a href="./src/resources/connect/connect.ts">ConnectCompleteOAuthCallbackResponse</a></code>
- <code><a href="./src/resources/connect/connect.ts">ConnectCreateBlueskyConnectionResponse</a></code>
- <code><a href="./src/resources/connect/connect.ts">ConnectFetchPendingDataResponse</a></code>
- <code><a href="./src/resources/connect/connect.ts">ConnectStartOAuthFlowResponse</a></code>

Methods:

- <code title="post /v1/connect/{platform}">client.connect.<a href="./src/resources/connect/connect.ts">completeOAuthCallback</a>(platform, { ...params }) -> ConnectCompleteOAuthCallbackResponse</code>
- <code title="post /v1/connect/bluesky">client.connect.<a href="./src/resources/connect/connect.ts">createBlueskyConnection</a>({ ...params }) -> ConnectCreateBlueskyConnectionResponse</code>
- <code title="get /v1/connect/pending-data">client.connect.<a href="./src/resources/connect/connect.ts">fetchPendingData</a>({ ...params }) -> ConnectFetchPendingDataResponse</code>
- <code title="get /v1/connect/{platform}">client.connect.<a href="./src/resources/connect/connect.ts">startOAuthFlow</a>(platform, { ...params }) -> ConnectStartOAuthFlowResponse</code>

## Telegram

Types:

- <code><a href="./src/resources/connect/telegram.ts">TelegramConnectDirectlyResponse</a></code>
- <code><a href="./src/resources/connect/telegram.ts">TelegramInitiateConnectionResponse</a></code>
- <code><a href="./src/resources/connect/telegram.ts">TelegramPollConnectionStatusResponse</a></code>

Methods:

- <code title="post /v1/connect/telegram/direct">client.connect.telegram.<a href="./src/resources/connect/telegram.ts">connectDirectly</a>({ ...params }) -> TelegramConnectDirectlyResponse</code>
- <code title="post /v1/connect/telegram">client.connect.telegram.<a href="./src/resources/connect/telegram.ts">initiateConnection</a>() -> TelegramInitiateConnectionResponse</code>
- <code title="get /v1/connect/telegram">client.connect.telegram.<a href="./src/resources/connect/telegram.ts">pollConnectionStatus</a>({ ...params }) -> TelegramPollConnectionStatusResponse</code>

## Whatsapp

Types:

- <code><a href="./src/resources/connect/whatsapp.ts">WhatsappCompleteEmbeddedSignupResponse</a></code>
- <code><a href="./src/resources/connect/whatsapp.ts">WhatsappConnectViaCredentialsResponse</a></code>
- <code><a href="./src/resources/connect/whatsapp.ts">WhatsappGetSDKConfigResponse</a></code>

Methods:

- <code title="post /v1/connect/whatsapp/embedded-signup">client.connect.whatsapp.<a href="./src/resources/connect/whatsapp.ts">completeEmbeddedSignup</a>({ ...params }) -> WhatsappCompleteEmbeddedSignupResponse</code>
- <code title="post /v1/connect/whatsapp/credentials">client.connect.whatsapp.<a href="./src/resources/connect/whatsapp.ts">connectViaCredentials</a>({ ...params }) -> WhatsappConnectViaCredentialsResponse</code>
- <code title="get /v1/connect/whatsapp/sdk-config">client.connect.whatsapp.<a href="./src/resources/connect/whatsapp.ts">getSDKConfig</a>() -> WhatsappGetSDKConfigResponse</code>

## Facebook

### Pages

Types:

- <code><a href="./src/resources/connect/facebook/pages.ts">PageListResponse</a></code>
- <code><a href="./src/resources/connect/facebook/pages.ts">PageSelectResponse</a></code>

Methods:

- <code title="get /v1/connect/facebook/pages">client.connect.facebook.pages.<a href="./src/resources/connect/facebook/pages.ts">list</a>() -> PageListResponse</code>
- <code title="post /v1/connect/facebook/pages">client.connect.facebook.pages.<a href="./src/resources/connect/facebook/pages.ts">select</a>({ ...params }) -> PageSelectResponse</code>

## Linkedin

### Organizations

Types:

- <code><a href="./src/resources/connect/linkedin/organizations.ts">OrganizationListResponse</a></code>
- <code><a href="./src/resources/connect/linkedin/organizations.ts">OrganizationSelectResponse</a></code>

Methods:

- <code title="get /v1/connect/linkedin/organizations">client.connect.linkedin.organizations.<a href="./src/resources/connect/linkedin/organizations.ts">list</a>() -> OrganizationListResponse</code>
- <code title="post /v1/connect/linkedin/organizations">client.connect.linkedin.organizations.<a href="./src/resources/connect/linkedin/organizations.ts">select</a>({ ...params }) -> OrganizationSelectResponse</code>

## Pinterest

### Boards

Types:

- <code><a href="./src/resources/connect/pinterest/boards.ts">BoardListResponse</a></code>
- <code><a href="./src/resources/connect/pinterest/boards.ts">BoardSelectResponse</a></code>

Methods:

- <code title="get /v1/connect/pinterest/boards">client.connect.pinterest.boards.<a href="./src/resources/connect/pinterest/boards.ts">list</a>() -> BoardListResponse</code>
- <code title="post /v1/connect/pinterest/boards">client.connect.pinterest.boards.<a href="./src/resources/connect/pinterest/boards.ts">select</a>({ ...params }) -> BoardSelectResponse</code>

## Googlebusiness

### Locations

Types:

- <code><a href="./src/resources/connect/googlebusiness/locations.ts">LocationListResponse</a></code>
- <code><a href="./src/resources/connect/googlebusiness/locations.ts">LocationSelectResponse</a></code>

Methods:

- <code title="get /v1/connect/googlebusiness/locations">client.connect.googlebusiness.locations.<a href="./src/resources/connect/googlebusiness/locations.ts">list</a>() -> LocationListResponse</code>
- <code title="post /v1/connect/googlebusiness/locations">client.connect.googlebusiness.locations.<a href="./src/resources/connect/googlebusiness/locations.ts">select</a>({ ...params }) -> LocationSelectResponse</code>

## Snapchat

### Profiles

Types:

- <code><a href="./src/resources/connect/snapchat/profiles.ts">ProfileListResponse</a></code>
- <code><a href="./src/resources/connect/snapchat/profiles.ts">ProfileSelectResponse</a></code>

Methods:

- <code title="get /v1/connect/snapchat/profiles">client.connect.snapchat.profiles.<a href="./src/resources/connect/snapchat/profiles.ts">list</a>() -> ProfileListResponse</code>
- <code title="post /v1/connect/snapchat/profiles">client.connect.snapchat.profiles.<a href="./src/resources/connect/snapchat/profiles.ts">select</a>({ ...params }) -> ProfileSelectResponse</code>

# Connections

Types:

- <code><a href="./src/resources/connections.ts">ConnectionListLogsResponse</a></code>

Methods:

- <code title="get /v1/connections/logs">client.connections.<a href="./src/resources/connections.ts">listLogs</a>({ ...params }) -> ConnectionListLogsResponse</code>

# Analytics

Types:

- <code><a href="./src/resources/analytics/analytics.ts">AnalyticsRetrieveResponse</a></code>
- <code><a href="./src/resources/analytics/analytics.ts">AnalyticsGetBestTimeResponse</a></code>
- <code><a href="./src/resources/analytics/analytics.ts">AnalyticsGetContentDecayResponse</a></code>
- <code><a href="./src/resources/analytics/analytics.ts">AnalyticsGetPostTimelineResponse</a></code>
- <code><a href="./src/resources/analytics/analytics.ts">AnalyticsGetPostingFrequencyResponse</a></code>
- <code><a href="./src/resources/analytics/analytics.ts">AnalyticsListDailyMetricsResponse</a></code>

Methods:

- <code title="get /v1/analytics">client.analytics.<a href="./src/resources/analytics/analytics.ts">retrieve</a>({ ...params }) -> AnalyticsRetrieveResponse</code>
- <code title="get /v1/analytics/best-time">client.analytics.<a href="./src/resources/analytics/analytics.ts">getBestTime</a>({ ...params }) -> AnalyticsGetBestTimeResponse</code>
- <code title="get /v1/analytics/content-decay">client.analytics.<a href="./src/resources/analytics/analytics.ts">getContentDecay</a>({ ...params }) -> AnalyticsGetContentDecayResponse</code>
- <code title="get /v1/analytics/post-timeline">client.analytics.<a href="./src/resources/analytics/analytics.ts">getPostTimeline</a>({ ...params }) -> AnalyticsGetPostTimelineResponse</code>
- <code title="get /v1/analytics/posting-frequency">client.analytics.<a href="./src/resources/analytics/analytics.ts">getPostingFrequency</a>({ ...params }) -> AnalyticsGetPostingFrequencyResponse</code>
- <code title="get /v1/analytics/daily-metrics">client.analytics.<a href="./src/resources/analytics/analytics.ts">listDailyMetrics</a>({ ...params }) -> AnalyticsListDailyMetricsResponse</code>

## Youtube

Types:

- <code><a href="./src/resources/analytics/youtube.ts">YoutubeGetDailyViewsResponse</a></code>

Methods:

- <code title="get /v1/analytics/youtube/daily-views">client.analytics.youtube.<a href="./src/resources/analytics/youtube.ts">getDailyViews</a>({ ...params }) -> YoutubeGetDailyViewsResponse</code>

# Tools

## Validate

Types:

- <code><a href="./src/resources/tools/validate.ts">ValidateCheckPostLengthResponse</a></code>
- <code><a href="./src/resources/tools/validate.ts">ValidateRetrieveSubredditResponse</a></code>
- <code><a href="./src/resources/tools/validate.ts">ValidateValidateMediaResponse</a></code>
- <code><a href="./src/resources/tools/validate.ts">ValidateValidatePostResponse</a></code>

Methods:

- <code title="post /v1/tools/validate/post-length">client.tools.validate.<a href="./src/resources/tools/validate.ts">checkPostLength</a>({ ...params }) -> ValidateCheckPostLengthResponse</code>
- <code title="get /v1/tools/validate/subreddit">client.tools.validate.<a href="./src/resources/tools/validate.ts">retrieveSubreddit</a>({ ...params }) -> ValidateRetrieveSubredditResponse</code>
- <code title="post /v1/tools/validate/media">client.tools.validate.<a href="./src/resources/tools/validate.ts">validateMedia</a>({ ...params }) -> ValidateValidateMediaResponse</code>
- <code title="post /v1/tools/validate/post">client.tools.validate.<a href="./src/resources/tools/validate.ts">validatePost</a>({ ...params }) -> ValidateValidatePostResponse</code>

## Instagram

Types:

- <code><a href="./src/resources/tools/instagram.ts">InstagramCheckHashtagSafetyResponse</a></code>

Methods:

- <code title="post /v1/tools/instagram/hashtag-checker">client.tools.instagram.<a href="./src/resources/tools/instagram.ts">checkHashtagSafety</a>({ ...params }) -> InstagramCheckHashtagSafetyResponse</code>

# Queue

Types:

- <code><a href="./src/resources/queue/queue.ts">QueueGetNextSlotResponse</a></code>
- <code><a href="./src/resources/queue/queue.ts">QueuePreviewResponse</a></code>

Methods:

- <code title="get /v1/queue/next-slot">client.queue.<a href="./src/resources/queue/queue.ts">getNextSlot</a>() -> QueueGetNextSlotResponse</code>
- <code title="get /v1/queue/preview">client.queue.<a href="./src/resources/queue/queue.ts">preview</a>({ ...params }) -> QueuePreviewResponse</code>

## Slots

Types:

- <code><a href="./src/resources/queue/slots.ts">SlotCreateResponse</a></code>
- <code><a href="./src/resources/queue/slots.ts">SlotUpdateResponse</a></code>
- <code><a href="./src/resources/queue/slots.ts">SlotListResponse</a></code>

Methods:

- <code title="post /v1/queue/slots">client.queue.slots.<a href="./src/resources/queue/slots.ts">create</a>({ ...params }) -> SlotCreateResponse</code>
- <code title="put /v1/queue/slots">client.queue.slots.<a href="./src/resources/queue/slots.ts">update</a>({ ...params }) -> SlotUpdateResponse</code>
- <code title="get /v1/queue/slots">client.queue.slots.<a href="./src/resources/queue/slots.ts">list</a>() -> SlotListResponse</code>
- <code title="delete /v1/queue/slots">client.queue.slots.<a href="./src/resources/queue/slots.ts">delete</a>() -> void</code>

# Twitter

## Retweet

Types:

- <code><a href="./src/resources/twitter/retweet.ts">RetweetCreateResponse</a></code>
- <code><a href="./src/resources/twitter/retweet.ts">RetweetUndoResponse</a></code>

Methods:

- <code title="post /v1/twitter/retweet">client.twitter.retweet.<a href="./src/resources/twitter/retweet.ts">create</a>({ ...params }) -> RetweetCreateResponse</code>
- <code title="delete /v1/twitter/retweet">client.twitter.retweet.<a href="./src/resources/twitter/retweet.ts">undo</a>({ ...params }) -> RetweetUndoResponse</code>

## Bookmark

Types:

- <code><a href="./src/resources/twitter/bookmark.ts">BookmarkCreateResponse</a></code>
- <code><a href="./src/resources/twitter/bookmark.ts">BookmarkRemoveResponse</a></code>

Methods:

- <code title="post /v1/twitter/bookmark">client.twitter.bookmark.<a href="./src/resources/twitter/bookmark.ts">create</a>({ ...params }) -> BookmarkCreateResponse</code>
- <code title="delete /v1/twitter/bookmark">client.twitter.bookmark.<a href="./src/resources/twitter/bookmark.ts">remove</a>({ ...params }) -> BookmarkRemoveResponse</code>

## Follow

Types:

- <code><a href="./src/resources/twitter/follow.ts">FollowCreateResponse</a></code>
- <code><a href="./src/resources/twitter/follow.ts">FollowUnfollowResponse</a></code>

Methods:

- <code title="post /v1/twitter/follow">client.twitter.follow.<a href="./src/resources/twitter/follow.ts">create</a>({ ...params }) -> FollowCreateResponse</code>
- <code title="delete /v1/twitter/follow">client.twitter.follow.<a href="./src/resources/twitter/follow.ts">unfollow</a>({ ...params }) -> FollowUnfollowResponse</code>

# Inbox

## Comments

Types:

- <code><a href="./src/resources/inbox/comments/comments.ts">CommentRetrieveResponse</a></code>
- <code><a href="./src/resources/inbox/comments/comments.ts">CommentListResponse</a></code>
- <code><a href="./src/resources/inbox/comments/comments.ts">CommentDeleteResponse</a></code>
- <code><a href="./src/resources/inbox/comments/comments.ts">CommentPrivateReplyResponse</a></code>
- <code><a href="./src/resources/inbox/comments/comments.ts">CommentReplyResponse</a></code>

Methods:

- <code title="get /v1/inbox/comments/{post_id}">client.inbox.comments.<a href="./src/resources/inbox/comments/comments.ts">retrieve</a>(postID, { ...params }) -> CommentRetrieveResponse</code>
- <code title="get /v1/inbox/comments">client.inbox.comments.<a href="./src/resources/inbox/comments/comments.ts">list</a>({ ...params }) -> CommentListResponse</code>
- <code title="delete /v1/inbox/comments/{comment_id}">client.inbox.comments.<a href="./src/resources/inbox/comments/comments.ts">delete</a>(commentID) -> CommentDeleteResponse</code>
- <code title="post /v1/inbox/comments/{comment_id}/private-reply">client.inbox.comments.<a href="./src/resources/inbox/comments/comments.ts">privateReply</a>(commentID, { ...params }) -> CommentPrivateReplyResponse</code>
- <code title="post /v1/inbox/comments/{post_id}/reply">client.inbox.comments.<a href="./src/resources/inbox/comments/comments.ts">reply</a>(postID, { ...params }) -> CommentReplyResponse</code>

### Hide

Types:

- <code><a href="./src/resources/inbox/comments/hide.ts">HideCreateResponse</a></code>
- <code><a href="./src/resources/inbox/comments/hide.ts">HideDeleteResponse</a></code>

Methods:

- <code title="post /v1/inbox/comments/{comment_id}/hide">client.inbox.comments.hide.<a href="./src/resources/inbox/comments/hide.ts">create</a>(commentID) -> HideCreateResponse</code>
- <code title="delete /v1/inbox/comments/{comment_id}/hide">client.inbox.comments.hide.<a href="./src/resources/inbox/comments/hide.ts">delete</a>(commentID) -> HideDeleteResponse</code>

### Like

Types:

- <code><a href="./src/resources/inbox/comments/like.ts">LikeCreateResponse</a></code>
- <code><a href="./src/resources/inbox/comments/like.ts">LikeDeleteResponse</a></code>

Methods:

- <code title="post /v1/inbox/comments/{comment_id}/like">client.inbox.comments.like.<a href="./src/resources/inbox/comments/like.ts">create</a>(commentID) -> LikeCreateResponse</code>
- <code title="delete /v1/inbox/comments/{comment_id}/like">client.inbox.comments.like.<a href="./src/resources/inbox/comments/like.ts">delete</a>(commentID) -> LikeDeleteResponse</code>

## Messages

Types:

- <code><a href="./src/resources/inbox/messages.ts">MessageRetrieveResponse</a></code>
- <code><a href="./src/resources/inbox/messages.ts">MessageListResponse</a></code>
- <code><a href="./src/resources/inbox/messages.ts">MessageArchiveResponse</a></code>
- <code><a href="./src/resources/inbox/messages.ts">MessageEditResponse</a></code>
- <code><a href="./src/resources/inbox/messages.ts">MessageSendResponse</a></code>

Methods:

- <code title="get /v1/inbox/messages/{conversation_id}">client.inbox.messages.<a href="./src/resources/inbox/messages.ts">retrieve</a>(conversationID) -> MessageRetrieveResponse</code>
- <code title="get /v1/inbox/messages">client.inbox.messages.<a href="./src/resources/inbox/messages.ts">list</a>({ ...params }) -> MessageListResponse</code>
- <code title="put /v1/inbox/messages/{conversation_id}/archive">client.inbox.messages.<a href="./src/resources/inbox/messages.ts">archive</a>(conversationID) -> MessageArchiveResponse</code>
- <code title="patch /v1/inbox/messages/{conversation_id}/{message_id}">client.inbox.messages.<a href="./src/resources/inbox/messages.ts">edit</a>(messageID, { ...params }) -> MessageEditResponse</code>
- <code title="post /v1/inbox/messages/{conversation_id}">client.inbox.messages.<a href="./src/resources/inbox/messages.ts">send</a>(conversationID, { ...params }) -> MessageSendResponse</code>

## Reviews

Types:

- <code><a href="./src/resources/inbox/reviews/reviews.ts">ReviewListResponse</a></code>

Methods:

- <code title="get /v1/inbox/reviews">client.inbox.reviews.<a href="./src/resources/inbox/reviews/reviews.ts">list</a>({ ...params }) -> ReviewListResponse</code>

### Reply

Types:

- <code><a href="./src/resources/inbox/reviews/reply.ts">ReplyCreateResponse</a></code>
- <code><a href="./src/resources/inbox/reviews/reply.ts">ReplyDeleteResponse</a></code>

Methods:

- <code title="post /v1/inbox/reviews/{review_id}/reply">client.inbox.reviews.reply.<a href="./src/resources/inbox/reviews/reply.ts">create</a>(reviewID, { ...params }) -> ReplyCreateResponse</code>
- <code title="delete /v1/inbox/reviews/{review_id}/reply">client.inbox.reviews.reply.<a href="./src/resources/inbox/reviews/reply.ts">delete</a>(reviewID) -> ReplyDeleteResponse</code>

# Reddit

Types:

- <code><a href="./src/resources/reddit.ts">RedditGetFeedResponse</a></code>
- <code><a href="./src/resources/reddit.ts">RedditSearchResponse</a></code>

Methods:

- <code title="get /v1/reddit/feed">client.reddit.<a href="./src/resources/reddit.ts">getFeed</a>({ ...params }) -> RedditGetFeedResponse</code>
- <code title="get /v1/reddit/search">client.reddit.<a href="./src/resources/reddit.ts">search</a>({ ...params }) -> RedditSearchResponse</code>

# Whatsapp

Types:

- <code><a href="./src/resources/whatsapp/whatsapp.ts">WhatsappBulkSendResponse</a></code>
- <code><a href="./src/resources/whatsapp/whatsapp.ts">WhatsappListPhoneNumbersResponse</a></code>

Methods:

- <code title="post /v1/whatsapp/bulk-send">client.whatsapp.<a href="./src/resources/whatsapp/whatsapp.ts">bulkSend</a>({ ...params }) -> WhatsappBulkSendResponse</code>
- <code title="get /v1/whatsapp/phone-numbers">client.whatsapp.<a href="./src/resources/whatsapp/whatsapp.ts">listPhoneNumbers</a>({ ...params }) -> WhatsappListPhoneNumbersResponse</code>

## Broadcasts

Types:

- <code><a href="./src/resources/whatsapp/broadcasts.ts">BroadcastCreateResponse</a></code>
- <code><a href="./src/resources/whatsapp/broadcasts.ts">BroadcastRetrieveResponse</a></code>
- <code><a href="./src/resources/whatsapp/broadcasts.ts">BroadcastListResponse</a></code>
- <code><a href="./src/resources/whatsapp/broadcasts.ts">BroadcastScheduleResponse</a></code>
- <code><a href="./src/resources/whatsapp/broadcasts.ts">BroadcastSendResponse</a></code>

Methods:

- <code title="post /v1/whatsapp/broadcasts">client.whatsapp.broadcasts.<a href="./src/resources/whatsapp/broadcasts.ts">create</a>({ ...params }) -> BroadcastCreateResponse</code>
- <code title="get /v1/whatsapp/broadcasts/{broadcast_id}">client.whatsapp.broadcasts.<a href="./src/resources/whatsapp/broadcasts.ts">retrieve</a>(broadcastID) -> BroadcastRetrieveResponse</code>
- <code title="get /v1/whatsapp/broadcasts">client.whatsapp.broadcasts.<a href="./src/resources/whatsapp/broadcasts.ts">list</a>({ ...params }) -> BroadcastListResponse</code>
- <code title="delete /v1/whatsapp/broadcasts/{broadcast_id}">client.whatsapp.broadcasts.<a href="./src/resources/whatsapp/broadcasts.ts">delete</a>(broadcastID) -> void</code>
- <code title="post /v1/whatsapp/broadcasts/{broadcast_id}/schedule">client.whatsapp.broadcasts.<a href="./src/resources/whatsapp/broadcasts.ts">schedule</a>(broadcastID) -> BroadcastScheduleResponse</code>
- <code title="post /v1/whatsapp/broadcasts/{broadcast_id}/send">client.whatsapp.broadcasts.<a href="./src/resources/whatsapp/broadcasts.ts">send</a>(broadcastID) -> BroadcastSendResponse</code>

## Templates

Types:

- <code><a href="./src/resources/whatsapp/templates.ts">TemplateCreateResponse</a></code>
- <code><a href="./src/resources/whatsapp/templates.ts">TemplateRetrieveResponse</a></code>
- <code><a href="./src/resources/whatsapp/templates.ts">TemplateListResponse</a></code>

Methods:

- <code title="post /v1/whatsapp/templates">client.whatsapp.templates.<a href="./src/resources/whatsapp/templates.ts">create</a>({ ...params }) -> TemplateCreateResponse</code>
- <code title="get /v1/whatsapp/templates/{template_name}">client.whatsapp.templates.<a href="./src/resources/whatsapp/templates.ts">retrieve</a>(templateName, { ...params }) -> TemplateRetrieveResponse</code>
- <code title="get /v1/whatsapp/templates">client.whatsapp.templates.<a href="./src/resources/whatsapp/templates.ts">list</a>({ ...params }) -> TemplateListResponse</code>
- <code title="delete /v1/whatsapp/templates/{template_name}">client.whatsapp.templates.<a href="./src/resources/whatsapp/templates.ts">delete</a>(templateName, { ...params }) -> void</code>

## Contacts

Types:

- <code><a href="./src/resources/whatsapp/contacts.ts">ContactCreateResponse</a></code>
- <code><a href="./src/resources/whatsapp/contacts.ts">ContactRetrieveResponse</a></code>
- <code><a href="./src/resources/whatsapp/contacts.ts">ContactListResponse</a></code>
- <code><a href="./src/resources/whatsapp/contacts.ts">ContactBulkOperationsResponse</a></code>
- <code><a href="./src/resources/whatsapp/contacts.ts">ContactImportResponse</a></code>

Methods:

- <code title="post /v1/whatsapp/contacts">client.whatsapp.contacts.<a href="./src/resources/whatsapp/contacts.ts">create</a>({ ...params }) -> ContactCreateResponse</code>
- <code title="get /v1/whatsapp/contacts/{contact_id}">client.whatsapp.contacts.<a href="./src/resources/whatsapp/contacts.ts">retrieve</a>(contactID) -> ContactRetrieveResponse</code>
- <code title="get /v1/whatsapp/contacts">client.whatsapp.contacts.<a href="./src/resources/whatsapp/contacts.ts">list</a>({ ...params }) -> ContactListResponse</code>
- <code title="delete /v1/whatsapp/contacts/{contact_id}">client.whatsapp.contacts.<a href="./src/resources/whatsapp/contacts.ts">delete</a>(contactID) -> void</code>
- <code title="post /v1/whatsapp/contacts/bulk">client.whatsapp.contacts.<a href="./src/resources/whatsapp/contacts.ts">bulkOperations</a>({ ...params }) -> ContactBulkOperationsResponse</code>
- <code title="post /v1/whatsapp/contacts/import">client.whatsapp.contacts.<a href="./src/resources/whatsapp/contacts.ts">import</a>({ ...params }) -> ContactImportResponse</code>

## Groups

Types:

- <code><a href="./src/resources/whatsapp/groups.ts">GroupCreateResponse</a></code>
- <code><a href="./src/resources/whatsapp/groups.ts">GroupListResponse</a></code>

Methods:

- <code title="post /v1/whatsapp/groups">client.whatsapp.groups.<a href="./src/resources/whatsapp/groups.ts">create</a>({ ...params }) -> GroupCreateResponse</code>
- <code title="get /v1/whatsapp/groups">client.whatsapp.groups.<a href="./src/resources/whatsapp/groups.ts">list</a>({ ...params }) -> GroupListResponse</code>
- <code title="delete /v1/whatsapp/groups/{group_id}">client.whatsapp.groups.<a href="./src/resources/whatsapp/groups.ts">delete</a>(groupID) -> void</code>

## BusinessProfile

Types:

- <code><a href="./src/resources/whatsapp/business-profile.ts">BusinessProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/whatsapp/business-profile.ts">BusinessProfileUpdateResponse</a></code>

Methods:

- <code title="get /v1/whatsapp/business-profile">client.whatsapp.businessProfile.<a href="./src/resources/whatsapp/business-profile.ts">retrieve</a>({ ...params }) -> BusinessProfileRetrieveResponse</code>
- <code title="put /v1/whatsapp/business-profile">client.whatsapp.businessProfile.<a href="./src/resources/whatsapp/business-profile.ts">update</a>({ ...params }) -> BusinessProfileUpdateResponse</code>
