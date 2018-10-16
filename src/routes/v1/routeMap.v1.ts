import ApiURL from '@constants/ApiURL';
import * as AdminAction from './adminAction';
import * as UserAction from './userAction';
import * as DefinitionAction from './definitionAction';
import * as CommentAction from './commentAction';
import * as VoteAction from './voteAction';
import HttpMethod from '@constants/HttpMethod';

export default [
  {
    action: AdminAction.postAdminSeed,
    method: HttpMethod.GET,
    path: ApiURL.ADMIN_SEED,
  },
  {
    action: UserAction.postUserNew,
    method: HttpMethod.POST,
    path: ApiURL.USER_NEW,
  },
  {
    action: UserAction.postSessionNew,
    method: HttpMethod.POST,
    path: ApiURL.SESSION_NEW,
  },
  {
    action: DefinitionAction.postDefinitionNew,
    method: HttpMethod.POST,
    path: ApiURL.DEFINITION_NEW,
  },
  {
    action: DefinitionAction.postDefinitions,
    method: HttpMethod.POST,
    path: ApiURL.DEFINITIONS,
  },
  {
    action: DefinitionAction.postDefinitionsDefinitionid,
    method: HttpMethod.POST,
    path: ApiURL.DEFINITIONS_$DEFINITIONID,
  },
  {
    action: CommentAction.postCommentNew,
    method: HttpMethod.POST,
    path: ApiURL.COMMENT_NEW,
  },
  {
    action: CommentAction.postComments,
    method: HttpMethod.POST,
    path: ApiURL.COMMENTS,
  },
  {
    action: VoteAction.upVote,
    method: HttpMethod.POST,
    path: ApiURL.VOTE_UP,
  },
  {
    action: VoteAction.downVote,
    method: HttpMethod.POST,
    path: ApiURL.VOTE_DOWN,
  },
];
