// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import {
  MessageArchiveResponse,
  MessageEditParams,
  MessageEditResponse,
  MessageListParams,
  MessageListResponse,
  MessageRetrieveResponse,
  MessageSendParams,
  MessageSendResponse,
  Messages,
} from './messages';
import * as CommentsAPI from './comments/comments';
import {
  CommentDeleteResponse,
  CommentListParams,
  CommentListResponse,
  CommentPrivateReplyParams,
  CommentPrivateReplyResponse,
  CommentReplyParams,
  CommentReplyResponse,
  CommentRetrieveParams,
  CommentRetrieveResponse,
  Comments,
} from './comments/comments';
import * as ReviewsAPI from './reviews/reviews';
import { ReviewListParams, ReviewListResponse, Reviews } from './reviews/reviews';

export class Inbox extends APIResource {
  comments: CommentsAPI.Comments = new CommentsAPI.Comments(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  reviews: ReviewsAPI.Reviews = new ReviewsAPI.Reviews(this._client);
}

Inbox.Comments = Comments;
Inbox.Messages = Messages;
Inbox.Reviews = Reviews;

export declare namespace Inbox {
  export {
    Comments as Comments,
    type CommentRetrieveResponse as CommentRetrieveResponse,
    type CommentListResponse as CommentListResponse,
    type CommentDeleteResponse as CommentDeleteResponse,
    type CommentPrivateReplyResponse as CommentPrivateReplyResponse,
    type CommentReplyResponse as CommentReplyResponse,
    type CommentRetrieveParams as CommentRetrieveParams,
    type CommentListParams as CommentListParams,
    type CommentPrivateReplyParams as CommentPrivateReplyParams,
    type CommentReplyParams as CommentReplyParams,
  };

  export {
    Messages as Messages,
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageListResponse as MessageListResponse,
    type MessageArchiveResponse as MessageArchiveResponse,
    type MessageEditResponse as MessageEditResponse,
    type MessageSendResponse as MessageSendResponse,
    type MessageListParams as MessageListParams,
    type MessageEditParams as MessageEditParams,
    type MessageSendParams as MessageSendParams,
  };

  export {
    Reviews as Reviews,
    type ReviewListResponse as ReviewListResponse,
    type ReviewListParams as ReviewListParams,
  };
}
