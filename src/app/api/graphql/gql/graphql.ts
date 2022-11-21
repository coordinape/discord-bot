/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  json: any;
  jsonb: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

export type AdminUpdateUserInput = {
  address: Scalars['String'];
  circle_id: Scalars['Int'];
  fixed_non_receiver?: InputMaybe<Scalars['Boolean']>;
  fixed_payment_amount?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  new_address?: InputMaybe<Scalars['String']>;
  non_giver?: InputMaybe<Scalars['Boolean']>;
  non_receiver?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['Int']>;
  starting_tokens?: InputMaybe<Scalars['Int']>;
};

export type Allocation = {
  note: Scalars['String'];
  recipient_id: Scalars['Int'];
  tokens: Scalars['Int'];
};

export type AllocationCsvInput = {
  circle_id: Scalars['Int'];
  epoch?: InputMaybe<Scalars['Int']>;
  epoch_id?: InputMaybe<Scalars['Int']>;
  form_gift_amount?: InputMaybe<Scalars['Float']>;
  gift_token_symbol?: InputMaybe<Scalars['String']>;
  grant?: InputMaybe<Scalars['Float']>;
};

export type AllocationCsvResponse = {
  __typename?: 'AllocationCsvResponse';
  file: Scalars['String'];
};

export type Allocations = {
  allocations?: InputMaybe<Array<Allocation>>;
  circle_id: Scalars['Int'];
  user_id?: InputMaybe<Scalars['Int']>;
};

export type AllocationsResponse = {
  __typename?: 'AllocationsResponse';
  user?: Maybe<Users>;
  user_id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type ConfirmationResponse = {
  __typename?: 'ConfirmationResponse';
  success: Scalars['Boolean'];
};

export type CoordinapeInput = {
  circle_id: Scalars['Int'];
};

export type CreateCircleInput = {
  circle_name: Scalars['String'];
  contact?: InputMaybe<Scalars['String']>;
  image_data_base64?: InputMaybe<Scalars['String']>;
  organization_id?: InputMaybe<Scalars['Int']>;
  organization_name?: InputMaybe<Scalars['String']>;
  user_name: Scalars['String'];
};

export type CreateCircleResponse = {
  __typename?: 'CreateCircleResponse';
  circle?: Maybe<Circles>;
  id: Scalars['Int'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
};


export type CreateCircleResponseUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type CreateCircleResponseUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type CreateEpochInput = {
  circle_id: Scalars['Int'];
  days: Scalars['Int'];
  grant?: InputMaybe<Scalars['Float']>;
  repeat: Scalars['Int'];
  start_date: Scalars['timestamptz'];
};

export type CreateNomineeInput = {
  address: Scalars['String'];
  circle_id: Scalars['Int'];
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CreateNomineeResponse = {
  __typename?: 'CreateNomineeResponse';
  id?: Maybe<Scalars['Int']>;
  nominee?: Maybe<Nominees>;
};

export type CreateUserInput = {
  address: Scalars['String'];
  circle_id: Scalars['Int'];
  fixed_non_receiver?: InputMaybe<Scalars['Boolean']>;
  fixed_payment_amount?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  non_giver?: InputMaybe<Scalars['Boolean']>;
  non_receiver?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['Int']>;
  starting_tokens?: InputMaybe<Scalars['Int']>;
};

export type CreateUserWithTokenInput = {
  name: Scalars['String'];
  token: Scalars['String'];
};

export type CreateUsersInput = {
  circle_id: Scalars['Int'];
  users: Array<InputMaybe<UserObj>>;
};

export type CreateVaultInput = {
  chain_id: Scalars['Int'];
  deployment_block: Scalars['Int'];
  org_id: Scalars['Int'];
  tx_hash: Scalars['String'];
  vault_address: Scalars['String'];
};

export type DeleteCircleInput = {
  circle_id: Scalars['Int'];
};

export type DeleteContributionInput = {
  contribution_id: Scalars['Int'];
};

export type DeleteEpochInput = {
  circle_id: Scalars['Int'];
  id: Scalars['Int'];
};

export type DeleteEpochResponse = {
  __typename?: 'DeleteEpochResponse';
  success: Scalars['Boolean'];
};

export type DeleteUserInput = {
  address: Scalars['String'];
  circle_id: Scalars['Int'];
};

export type EpochResponse = {
  __typename?: 'EpochResponse';
  epoch?: Maybe<Epochs>;
  id: Scalars['ID'];
};

export type GenerateApiKeyInput = {
  circle_id: Scalars['Int'];
  create_vouches?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  read_circle?: InputMaybe<Scalars['Boolean']>;
  read_discord?: InputMaybe<Scalars['Boolean']>;
  read_epochs?: InputMaybe<Scalars['Boolean']>;
  read_member_profiles?: InputMaybe<Scalars['Boolean']>;
  read_nominees?: InputMaybe<Scalars['Boolean']>;
  read_pending_token_gifts?: InputMaybe<Scalars['Boolean']>;
  update_circle?: InputMaybe<Scalars['Boolean']>;
  update_pending_token_gifts?: InputMaybe<Scalars['Boolean']>;
};

export type GenerateApiKeyResponse = {
  __typename?: 'GenerateApiKeyResponse';
  api_key: Scalars['String'];
  circleApiKey?: Maybe<Circle_Api_Keys>;
  hash: Scalars['String'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type LinkDiscordUserInput = {
  discord_id: Scalars['String'];
};

export type LinkDiscordUserResponse = {
  __typename?: 'LinkDiscordUserResponse';
  id: Scalars['Int'];
  linkDiscordUser_DiscordUser?: Maybe<Discord_Users>;
};

export type LogVaultTxInput = {
  amount?: InputMaybe<Scalars['Float']>;
  circle_id?: InputMaybe<Scalars['Int']>;
  distribution_id?: InputMaybe<Scalars['Int']>;
  org_id?: InputMaybe<Scalars['Int']>;
  symbol?: InputMaybe<Scalars['String']>;
  tx_hash: Scalars['String'];
  tx_type: Scalars['String'];
  vault_id: Scalars['Int'];
};

export type LogVaultTxResponse = {
  __typename?: 'LogVaultTxResponse';
  id: Scalars['ID'];
  vault_tx_return_object?: Maybe<Vault_Transactions>;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  id?: Maybe<Scalars['Int']>;
  profile?: Maybe<Profiles>;
};

export type MarkClaimedInput = {
  claim_id: Scalars['Int'];
  tx_hash: Scalars['String'];
};

export type MarkClaimedOutput = {
  __typename?: 'MarkClaimedOutput';
  ids: Array<Scalars['Int']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type UpdateCircleInput = {
  alloc_text?: InputMaybe<Scalars['String']>;
  auto_opt_out?: InputMaybe<Scalars['Boolean']>;
  circle_id: Scalars['Int'];
  default_opt_in?: InputMaybe<Scalars['Boolean']>;
  discord_webhook?: InputMaybe<Scalars['String']>;
  fixed_payment_token_type?: InputMaybe<Scalars['String']>;
  fixed_payment_vault_id?: InputMaybe<Scalars['Int']>;
  min_vouches?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nomination_days_limit?: InputMaybe<Scalars['Int']>;
  only_giver_vouch?: InputMaybe<Scalars['Boolean']>;
  team_sel_text?: InputMaybe<Scalars['String']>;
  team_selection?: InputMaybe<Scalars['Boolean']>;
  token_name?: InputMaybe<Scalars['String']>;
  update_webhook?: InputMaybe<Scalars['Boolean']>;
  vouching?: InputMaybe<Scalars['Boolean']>;
  vouching_text?: InputMaybe<Scalars['String']>;
};

export type UpdateCircleOutput = {
  __typename?: 'UpdateCircleOutput';
  circle?: Maybe<Circles>;
  id: Scalars['Int'];
};

export type UpdateCircleResponse = {
  __typename?: 'UpdateCircleResponse';
  circle?: Maybe<Circles>;
  id: Scalars['Int'];
};

export type UpdateContributionInput = {
  datetime_created: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['Int'];
};

export type UpdateContributionResponse = {
  __typename?: 'UpdateContributionResponse';
  id: Scalars['ID'];
  updateContribution_Contribution?: Maybe<Contributions>;
};

export type UpdateEpochInput = {
  circle_id: Scalars['Int'];
  days: Scalars['Int'];
  grant?: InputMaybe<Scalars['Float']>;
  id: Scalars['Int'];
  repeat: Scalars['Int'];
  start_date: Scalars['timestamptz'];
};

export type UpdateOrgResponse = {
  __typename?: 'UpdateOrgResponse';
  id: Scalars['Int'];
  org?: Maybe<Organizations>;
};

export type UpdateProfileResponse = {
  __typename?: 'UpdateProfileResponse';
  id: Scalars['Int'];
  profile?: Maybe<Profiles>;
};

export type UpdateTeammatesInput = {
  circle_id: Scalars['Int'];
  teammates: Array<InputMaybe<Scalars['Int']>>;
};

export type UpdateTeammatesResponse = {
  __typename?: 'UpdateTeammatesResponse';
  user?: Maybe<Users>;
  user_id: Scalars['ID'];
};

export type UpdateUserInput = {
  bio?: InputMaybe<Scalars['String']>;
  circle_id: Scalars['Int'];
  epoch_first_visit?: InputMaybe<Scalars['Boolean']>;
  non_receiver?: InputMaybe<Scalars['Boolean']>;
};

export type UploadCircleImageInput = {
  circle_id: Scalars['Int'];
  image_data_base64: Scalars['String'];
};

export type UploadImageInput = {
  image_data_base64: Scalars['String'];
};

export type UploadOrgImageInput = {
  image_data_base64: Scalars['String'];
  org_id: Scalars['Int'];
};

export type UserObj = {
  address: Scalars['String'];
  entrance?: InputMaybe<Scalars['String']>;
  fixed_non_receiver?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  non_giver?: InputMaybe<Scalars['Boolean']>;
  non_receiver?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['Int']>;
  starting_tokens?: InputMaybe<Scalars['Int']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  UserResponse?: Maybe<Users>;
  id: Scalars['ID'];
};

export type VaultResponse = {
  __typename?: 'VaultResponse';
  id: Scalars['ID'];
  vault?: Maybe<Vaults>;
};

export type VouchInput = {
  nominee_id: Scalars['Int'];
};

export type VouchOutput = {
  __typename?: 'VouchOutput';
  id: Scalars['Int'];
  nominee?: Maybe<Nominees>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "burns" */
export type Burns = {
  __typename?: 'burns';
  /** An object relationship */
  circle: Circles;
  circle_id: Scalars['bigint'];
  created_at: Scalars['timestamp'];
  /** An object relationship */
  epoch: Epochs;
  epoch_id: Scalars['bigint'];
  id: Scalars['bigint'];
  original_amount: Scalars['Int'];
  regift_percent: Scalars['Int'];
  tokens_burnt: Scalars['Int'];
  updated_at: Scalars['timestamp'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['bigint'];
};

/** aggregated selection of "burns" */
export type Burns_Aggregate = {
  __typename?: 'burns_aggregate';
  aggregate?: Maybe<Burns_Aggregate_Fields>;
  nodes: Array<Burns>;
};

/** aggregate fields of "burns" */
export type Burns_Aggregate_Fields = {
  __typename?: 'burns_aggregate_fields';
  avg?: Maybe<Burns_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Burns_Max_Fields>;
  min?: Maybe<Burns_Min_Fields>;
  stddev?: Maybe<Burns_Stddev_Fields>;
  stddev_pop?: Maybe<Burns_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Burns_Stddev_Samp_Fields>;
  sum?: Maybe<Burns_Sum_Fields>;
  var_pop?: Maybe<Burns_Var_Pop_Fields>;
  var_samp?: Maybe<Burns_Var_Samp_Fields>;
  variance?: Maybe<Burns_Variance_Fields>;
};


/** aggregate fields of "burns" */
export type Burns_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Burns_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "burns" */
export type Burns_Aggregate_Order_By = {
  avg?: InputMaybe<Burns_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Burns_Max_Order_By>;
  min?: InputMaybe<Burns_Min_Order_By>;
  stddev?: InputMaybe<Burns_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Burns_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Burns_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Burns_Sum_Order_By>;
  var_pop?: InputMaybe<Burns_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Burns_Var_Samp_Order_By>;
  variance?: InputMaybe<Burns_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "burns" */
export type Burns_Arr_Rel_Insert_Input = {
  data: Array<Burns_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Burns_On_Conflict>;
};

/** aggregate avg on columns */
export type Burns_Avg_Fields = {
  __typename?: 'burns_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  original_amount?: Maybe<Scalars['Float']>;
  regift_percent?: Maybe<Scalars['Float']>;
  tokens_burnt?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "burns" */
export type Burns_Avg_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_amount?: InputMaybe<Order_By>;
  regift_percent?: InputMaybe<Order_By>;
  tokens_burnt?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "burns". All fields are combined with a logical 'AND'. */
export type Burns_Bool_Exp = {
  _and?: InputMaybe<Array<Burns_Bool_Exp>>;
  _not?: InputMaybe<Burns_Bool_Exp>;
  _or?: InputMaybe<Array<Burns_Bool_Exp>>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  epoch?: InputMaybe<Epochs_Bool_Exp>;
  epoch_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  original_amount?: InputMaybe<Int_Comparison_Exp>;
  regift_percent?: InputMaybe<Int_Comparison_Exp>;
  tokens_burnt?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "burns" */
export enum Burns_Constraint {
  /** unique or primary key constraint on columns "id" */
  BurnsPkey = 'burns_pkey'
}

/** input type for incrementing numeric columns in table "burns" */
export type Burns_Inc_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  epoch_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  original_amount?: InputMaybe<Scalars['Int']>;
  regift_percent?: InputMaybe<Scalars['Int']>;
  tokens_burnt?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "burns" */
export type Burns_Insert_Input = {
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  epoch?: InputMaybe<Epochs_Obj_Rel_Insert_Input>;
  epoch_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  original_amount?: InputMaybe<Scalars['Int']>;
  regift_percent?: InputMaybe<Scalars['Int']>;
  tokens_burnt?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Burns_Max_Fields = {
  __typename?: 'burns_max_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamp']>;
  epoch_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  original_amount?: Maybe<Scalars['Int']>;
  regift_percent?: Maybe<Scalars['Int']>;
  tokens_burnt?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "burns" */
export type Burns_Max_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_amount?: InputMaybe<Order_By>;
  regift_percent?: InputMaybe<Order_By>;
  tokens_burnt?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Burns_Min_Fields = {
  __typename?: 'burns_min_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamp']>;
  epoch_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  original_amount?: Maybe<Scalars['Int']>;
  regift_percent?: Maybe<Scalars['Int']>;
  tokens_burnt?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "burns" */
export type Burns_Min_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_amount?: InputMaybe<Order_By>;
  regift_percent?: InputMaybe<Order_By>;
  tokens_burnt?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "burns" */
export type Burns_Mutation_Response = {
  __typename?: 'burns_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Burns>;
};

/** on_conflict condition type for table "burns" */
export type Burns_On_Conflict = {
  constraint: Burns_Constraint;
  update_columns?: Array<Burns_Update_Column>;
  where?: InputMaybe<Burns_Bool_Exp>;
};

/** Ordering options when selecting data from "burns". */
export type Burns_Order_By = {
  circle?: InputMaybe<Circles_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  epoch?: InputMaybe<Epochs_Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_amount?: InputMaybe<Order_By>;
  regift_percent?: InputMaybe<Order_By>;
  tokens_burnt?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: burns */
export type Burns_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "burns" */
export enum Burns_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EpochId = 'epoch_id',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalAmount = 'original_amount',
  /** column name */
  RegiftPercent = 'regift_percent',
  /** column name */
  TokensBurnt = 'tokens_burnt',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "burns" */
export type Burns_Set_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  epoch_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  original_amount?: InputMaybe<Scalars['Int']>;
  regift_percent?: InputMaybe<Scalars['Int']>;
  tokens_burnt?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Burns_Stddev_Fields = {
  __typename?: 'burns_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  original_amount?: Maybe<Scalars['Float']>;
  regift_percent?: Maybe<Scalars['Float']>;
  tokens_burnt?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "burns" */
export type Burns_Stddev_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_amount?: InputMaybe<Order_By>;
  regift_percent?: InputMaybe<Order_By>;
  tokens_burnt?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Burns_Stddev_Pop_Fields = {
  __typename?: 'burns_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  original_amount?: Maybe<Scalars['Float']>;
  regift_percent?: Maybe<Scalars['Float']>;
  tokens_burnt?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "burns" */
export type Burns_Stddev_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_amount?: InputMaybe<Order_By>;
  regift_percent?: InputMaybe<Order_By>;
  tokens_burnt?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Burns_Stddev_Samp_Fields = {
  __typename?: 'burns_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  original_amount?: Maybe<Scalars['Float']>;
  regift_percent?: Maybe<Scalars['Float']>;
  tokens_burnt?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "burns" */
export type Burns_Stddev_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_amount?: InputMaybe<Order_By>;
  regift_percent?: InputMaybe<Order_By>;
  tokens_burnt?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "burns" */
export type Burns_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Burns_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Burns_Stream_Cursor_Value_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  epoch_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  original_amount?: InputMaybe<Scalars['Int']>;
  regift_percent?: InputMaybe<Scalars['Int']>;
  tokens_burnt?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Burns_Sum_Fields = {
  __typename?: 'burns_sum_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  epoch_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  original_amount?: Maybe<Scalars['Int']>;
  regift_percent?: Maybe<Scalars['Int']>;
  tokens_burnt?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "burns" */
export type Burns_Sum_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_amount?: InputMaybe<Order_By>;
  regift_percent?: InputMaybe<Order_By>;
  tokens_burnt?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "burns" */
export enum Burns_Update_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EpochId = 'epoch_id',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalAmount = 'original_amount',
  /** column name */
  RegiftPercent = 'regift_percent',
  /** column name */
  TokensBurnt = 'tokens_burnt',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Burns_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Burns_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Burns_Set_Input>;
  where: Burns_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Burns_Var_Pop_Fields = {
  __typename?: 'burns_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  original_amount?: Maybe<Scalars['Float']>;
  regift_percent?: Maybe<Scalars['Float']>;
  tokens_burnt?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "burns" */
export type Burns_Var_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_amount?: InputMaybe<Order_By>;
  regift_percent?: InputMaybe<Order_By>;
  tokens_burnt?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Burns_Var_Samp_Fields = {
  __typename?: 'burns_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  original_amount?: Maybe<Scalars['Float']>;
  regift_percent?: Maybe<Scalars['Float']>;
  tokens_burnt?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "burns" */
export type Burns_Var_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_amount?: InputMaybe<Order_By>;
  regift_percent?: InputMaybe<Order_By>;
  tokens_burnt?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Burns_Variance_Fields = {
  __typename?: 'burns_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  original_amount?: Maybe<Scalars['Float']>;
  regift_percent?: Maybe<Scalars['Float']>;
  tokens_burnt?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "burns" */
export type Burns_Variance_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_amount?: InputMaybe<Order_By>;
  regift_percent?: InputMaybe<Order_By>;
  tokens_burnt?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Circle-scoped API keys with user defined permissions to allow third parties to authenticate to Coordinape's GraphQL API. */
export type Circle_Api_Keys = {
  __typename?: 'circle_api_keys';
  /** An object relationship */
  circle: Circles;
  circle_id: Scalars['bigint'];
  create_contributions: Scalars['Boolean'];
  create_vouches: Scalars['Boolean'];
  /** An object relationship */
  createdByUser: Users;
  created_at: Scalars['timestamptz'];
  created_by: Scalars['bigint'];
  hash: Scalars['String'];
  name: Scalars['String'];
  read_circle: Scalars['Boolean'];
  read_contributions: Scalars['Boolean'];
  read_discord: Scalars['Boolean'];
  read_epochs: Scalars['Boolean'];
  read_member_profiles: Scalars['Boolean'];
  read_nominees: Scalars['Boolean'];
  read_pending_token_gifts: Scalars['Boolean'];
  update_circle: Scalars['Boolean'];
  update_pending_token_gifts: Scalars['Boolean'];
};

/** aggregated selection of "circle_api_keys" */
export type Circle_Api_Keys_Aggregate = {
  __typename?: 'circle_api_keys_aggregate';
  aggregate?: Maybe<Circle_Api_Keys_Aggregate_Fields>;
  nodes: Array<Circle_Api_Keys>;
};

/** aggregate fields of "circle_api_keys" */
export type Circle_Api_Keys_Aggregate_Fields = {
  __typename?: 'circle_api_keys_aggregate_fields';
  avg?: Maybe<Circle_Api_Keys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Circle_Api_Keys_Max_Fields>;
  min?: Maybe<Circle_Api_Keys_Min_Fields>;
  stddev?: Maybe<Circle_Api_Keys_Stddev_Fields>;
  stddev_pop?: Maybe<Circle_Api_Keys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Circle_Api_Keys_Stddev_Samp_Fields>;
  sum?: Maybe<Circle_Api_Keys_Sum_Fields>;
  var_pop?: Maybe<Circle_Api_Keys_Var_Pop_Fields>;
  var_samp?: Maybe<Circle_Api_Keys_Var_Samp_Fields>;
  variance?: Maybe<Circle_Api_Keys_Variance_Fields>;
};


/** aggregate fields of "circle_api_keys" */
export type Circle_Api_Keys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Circle_Api_Keys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "circle_api_keys" */
export type Circle_Api_Keys_Aggregate_Order_By = {
  avg?: InputMaybe<Circle_Api_Keys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Circle_Api_Keys_Max_Order_By>;
  min?: InputMaybe<Circle_Api_Keys_Min_Order_By>;
  stddev?: InputMaybe<Circle_Api_Keys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Circle_Api_Keys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Circle_Api_Keys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Circle_Api_Keys_Sum_Order_By>;
  var_pop?: InputMaybe<Circle_Api_Keys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Circle_Api_Keys_Var_Samp_Order_By>;
  variance?: InputMaybe<Circle_Api_Keys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "circle_api_keys" */
export type Circle_Api_Keys_Arr_Rel_Insert_Input = {
  data: Array<Circle_Api_Keys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Circle_Api_Keys_On_Conflict>;
};

/** aggregate avg on columns */
export type Circle_Api_Keys_Avg_Fields = {
  __typename?: 'circle_api_keys_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "circle_api_keys" */
export type Circle_Api_Keys_Avg_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "circle_api_keys". All fields are combined with a logical 'AND'. */
export type Circle_Api_Keys_Bool_Exp = {
  _and?: InputMaybe<Array<Circle_Api_Keys_Bool_Exp>>;
  _not?: InputMaybe<Circle_Api_Keys_Bool_Exp>;
  _or?: InputMaybe<Array<Circle_Api_Keys_Bool_Exp>>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_id?: InputMaybe<Bigint_Comparison_Exp>;
  create_contributions?: InputMaybe<Boolean_Comparison_Exp>;
  create_vouches?: InputMaybe<Boolean_Comparison_Exp>;
  createdByUser?: InputMaybe<Users_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Bigint_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  read_circle?: InputMaybe<Boolean_Comparison_Exp>;
  read_contributions?: InputMaybe<Boolean_Comparison_Exp>;
  read_discord?: InputMaybe<Boolean_Comparison_Exp>;
  read_epochs?: InputMaybe<Boolean_Comparison_Exp>;
  read_member_profiles?: InputMaybe<Boolean_Comparison_Exp>;
  read_nominees?: InputMaybe<Boolean_Comparison_Exp>;
  read_pending_token_gifts?: InputMaybe<Boolean_Comparison_Exp>;
  update_circle?: InputMaybe<Boolean_Comparison_Exp>;
  update_pending_token_gifts?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "circle_api_keys" */
export enum Circle_Api_Keys_Constraint {
  /** unique or primary key constraint on columns "hash" */
  CircleApiKeysPkey = 'circle_api_keys_pkey'
}

/** input type for incrementing numeric columns in table "circle_api_keys" */
export type Circle_Api_Keys_Inc_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_by?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "circle_api_keys" */
export type Circle_Api_Keys_Insert_Input = {
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['bigint']>;
  create_contributions?: InputMaybe<Scalars['Boolean']>;
  create_vouches?: InputMaybe<Scalars['Boolean']>;
  createdByUser?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  hash?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  read_circle?: InputMaybe<Scalars['Boolean']>;
  read_contributions?: InputMaybe<Scalars['Boolean']>;
  read_discord?: InputMaybe<Scalars['Boolean']>;
  read_epochs?: InputMaybe<Scalars['Boolean']>;
  read_member_profiles?: InputMaybe<Scalars['Boolean']>;
  read_nominees?: InputMaybe<Scalars['Boolean']>;
  read_pending_token_gifts?: InputMaybe<Scalars['Boolean']>;
  update_circle?: InputMaybe<Scalars['Boolean']>;
  update_pending_token_gifts?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Circle_Api_Keys_Max_Fields = {
  __typename?: 'circle_api_keys_max_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['bigint']>;
  hash?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "circle_api_keys" */
export type Circle_Api_Keys_Max_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Circle_Api_Keys_Min_Fields = {
  __typename?: 'circle_api_keys_min_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['bigint']>;
  hash?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "circle_api_keys" */
export type Circle_Api_Keys_Min_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "circle_api_keys" */
export type Circle_Api_Keys_Mutation_Response = {
  __typename?: 'circle_api_keys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Circle_Api_Keys>;
};

/** input type for inserting object relation for remote table "circle_api_keys" */
export type Circle_Api_Keys_Obj_Rel_Insert_Input = {
  data: Circle_Api_Keys_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Circle_Api_Keys_On_Conflict>;
};

/** on_conflict condition type for table "circle_api_keys" */
export type Circle_Api_Keys_On_Conflict = {
  constraint: Circle_Api_Keys_Constraint;
  update_columns?: Array<Circle_Api_Keys_Update_Column>;
  where?: InputMaybe<Circle_Api_Keys_Bool_Exp>;
};

/** Ordering options when selecting data from "circle_api_keys". */
export type Circle_Api_Keys_Order_By = {
  circle?: InputMaybe<Circles_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  create_contributions?: InputMaybe<Order_By>;
  create_vouches?: InputMaybe<Order_By>;
  createdByUser?: InputMaybe<Users_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  read_circle?: InputMaybe<Order_By>;
  read_contributions?: InputMaybe<Order_By>;
  read_discord?: InputMaybe<Order_By>;
  read_epochs?: InputMaybe<Order_By>;
  read_member_profiles?: InputMaybe<Order_By>;
  read_nominees?: InputMaybe<Order_By>;
  read_pending_token_gifts?: InputMaybe<Order_By>;
  update_circle?: InputMaybe<Order_By>;
  update_pending_token_gifts?: InputMaybe<Order_By>;
};

/** primary key columns input for table: circle_api_keys */
export type Circle_Api_Keys_Pk_Columns_Input = {
  hash: Scalars['String'];
};

/** select columns of table "circle_api_keys" */
export enum Circle_Api_Keys_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreateContributions = 'create_contributions',
  /** column name */
  CreateVouches = 'create_vouches',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Hash = 'hash',
  /** column name */
  Name = 'name',
  /** column name */
  ReadCircle = 'read_circle',
  /** column name */
  ReadContributions = 'read_contributions',
  /** column name */
  ReadDiscord = 'read_discord',
  /** column name */
  ReadEpochs = 'read_epochs',
  /** column name */
  ReadMemberProfiles = 'read_member_profiles',
  /** column name */
  ReadNominees = 'read_nominees',
  /** column name */
  ReadPendingTokenGifts = 'read_pending_token_gifts',
  /** column name */
  UpdateCircle = 'update_circle',
  /** column name */
  UpdatePendingTokenGifts = 'update_pending_token_gifts'
}

/** input type for updating data in table "circle_api_keys" */
export type Circle_Api_Keys_Set_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  create_contributions?: InputMaybe<Scalars['Boolean']>;
  create_vouches?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  hash?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  read_circle?: InputMaybe<Scalars['Boolean']>;
  read_contributions?: InputMaybe<Scalars['Boolean']>;
  read_discord?: InputMaybe<Scalars['Boolean']>;
  read_epochs?: InputMaybe<Scalars['Boolean']>;
  read_member_profiles?: InputMaybe<Scalars['Boolean']>;
  read_nominees?: InputMaybe<Scalars['Boolean']>;
  read_pending_token_gifts?: InputMaybe<Scalars['Boolean']>;
  update_circle?: InputMaybe<Scalars['Boolean']>;
  update_pending_token_gifts?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Circle_Api_Keys_Stddev_Fields = {
  __typename?: 'circle_api_keys_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "circle_api_keys" */
export type Circle_Api_Keys_Stddev_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Circle_Api_Keys_Stddev_Pop_Fields = {
  __typename?: 'circle_api_keys_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "circle_api_keys" */
export type Circle_Api_Keys_Stddev_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Circle_Api_Keys_Stddev_Samp_Fields = {
  __typename?: 'circle_api_keys_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "circle_api_keys" */
export type Circle_Api_Keys_Stddev_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "circle_api_keys" */
export type Circle_Api_Keys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Circle_Api_Keys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Circle_Api_Keys_Stream_Cursor_Value_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  create_contributions?: InputMaybe<Scalars['Boolean']>;
  create_vouches?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  hash?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  read_circle?: InputMaybe<Scalars['Boolean']>;
  read_contributions?: InputMaybe<Scalars['Boolean']>;
  read_discord?: InputMaybe<Scalars['Boolean']>;
  read_epochs?: InputMaybe<Scalars['Boolean']>;
  read_member_profiles?: InputMaybe<Scalars['Boolean']>;
  read_nominees?: InputMaybe<Scalars['Boolean']>;
  read_pending_token_gifts?: InputMaybe<Scalars['Boolean']>;
  update_circle?: InputMaybe<Scalars['Boolean']>;
  update_pending_token_gifts?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Circle_Api_Keys_Sum_Fields = {
  __typename?: 'circle_api_keys_sum_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_by?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "circle_api_keys" */
export type Circle_Api_Keys_Sum_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
};

/** update columns of table "circle_api_keys" */
export enum Circle_Api_Keys_Update_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreateContributions = 'create_contributions',
  /** column name */
  CreateVouches = 'create_vouches',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Hash = 'hash',
  /** column name */
  Name = 'name',
  /** column name */
  ReadCircle = 'read_circle',
  /** column name */
  ReadContributions = 'read_contributions',
  /** column name */
  ReadDiscord = 'read_discord',
  /** column name */
  ReadEpochs = 'read_epochs',
  /** column name */
  ReadMemberProfiles = 'read_member_profiles',
  /** column name */
  ReadNominees = 'read_nominees',
  /** column name */
  ReadPendingTokenGifts = 'read_pending_token_gifts',
  /** column name */
  UpdateCircle = 'update_circle',
  /** column name */
  UpdatePendingTokenGifts = 'update_pending_token_gifts'
}

export type Circle_Api_Keys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Circle_Api_Keys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Circle_Api_Keys_Set_Input>;
  where: Circle_Api_Keys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Circle_Api_Keys_Var_Pop_Fields = {
  __typename?: 'circle_api_keys_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "circle_api_keys" */
export type Circle_Api_Keys_Var_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Circle_Api_Keys_Var_Samp_Fields = {
  __typename?: 'circle_api_keys_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "circle_api_keys" */
export type Circle_Api_Keys_Var_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Circle_Api_Keys_Variance_Fields = {
  __typename?: 'circle_api_keys_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "circle_api_keys" */
export type Circle_Api_Keys_Variance_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
};

/** columns and relationships of "circle_integrations" */
export type Circle_Integrations = {
  __typename?: 'circle_integrations';
  /** An object relationship */
  circle: Circles;
  circle_id: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  data: Scalars['json'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "circle_integrations" */
export type Circle_IntegrationsDataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "circle_integrations" */
export type Circle_Integrations_Aggregate = {
  __typename?: 'circle_integrations_aggregate';
  aggregate?: Maybe<Circle_Integrations_Aggregate_Fields>;
  nodes: Array<Circle_Integrations>;
};

/** aggregate fields of "circle_integrations" */
export type Circle_Integrations_Aggregate_Fields = {
  __typename?: 'circle_integrations_aggregate_fields';
  avg?: Maybe<Circle_Integrations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Circle_Integrations_Max_Fields>;
  min?: Maybe<Circle_Integrations_Min_Fields>;
  stddev?: Maybe<Circle_Integrations_Stddev_Fields>;
  stddev_pop?: Maybe<Circle_Integrations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Circle_Integrations_Stddev_Samp_Fields>;
  sum?: Maybe<Circle_Integrations_Sum_Fields>;
  var_pop?: Maybe<Circle_Integrations_Var_Pop_Fields>;
  var_samp?: Maybe<Circle_Integrations_Var_Samp_Fields>;
  variance?: Maybe<Circle_Integrations_Variance_Fields>;
};


/** aggregate fields of "circle_integrations" */
export type Circle_Integrations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Circle_Integrations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "circle_integrations" */
export type Circle_Integrations_Aggregate_Order_By = {
  avg?: InputMaybe<Circle_Integrations_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Circle_Integrations_Max_Order_By>;
  min?: InputMaybe<Circle_Integrations_Min_Order_By>;
  stddev?: InputMaybe<Circle_Integrations_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Circle_Integrations_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Circle_Integrations_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Circle_Integrations_Sum_Order_By>;
  var_pop?: InputMaybe<Circle_Integrations_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Circle_Integrations_Var_Samp_Order_By>;
  variance?: InputMaybe<Circle_Integrations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "circle_integrations" */
export type Circle_Integrations_Arr_Rel_Insert_Input = {
  data: Array<Circle_Integrations_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Circle_Integrations_On_Conflict>;
};

/** aggregate avg on columns */
export type Circle_Integrations_Avg_Fields = {
  __typename?: 'circle_integrations_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "circle_integrations" */
export type Circle_Integrations_Avg_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "circle_integrations". All fields are combined with a logical 'AND'. */
export type Circle_Integrations_Bool_Exp = {
  _and?: InputMaybe<Array<Circle_Integrations_Bool_Exp>>;
  _not?: InputMaybe<Circle_Integrations_Bool_Exp>;
  _or?: InputMaybe<Array<Circle_Integrations_Bool_Exp>>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Json_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "circle_integrations" */
export enum Circle_Integrations_Constraint {
  /** unique or primary key constraint on columns "id" */
  CircleIntegrationsPkey = 'circle_integrations_pkey'
}

/** input type for incrementing numeric columns in table "circle_integrations" */
export type Circle_Integrations_Inc_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "circle_integrations" */
export type Circle_Integrations_Insert_Input = {
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['json']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Circle_Integrations_Max_Fields = {
  __typename?: 'circle_integrations_max_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "circle_integrations" */
export type Circle_Integrations_Max_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Circle_Integrations_Min_Fields = {
  __typename?: 'circle_integrations_min_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "circle_integrations" */
export type Circle_Integrations_Min_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "circle_integrations" */
export type Circle_Integrations_Mutation_Response = {
  __typename?: 'circle_integrations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Circle_Integrations>;
};

/** on_conflict condition type for table "circle_integrations" */
export type Circle_Integrations_On_Conflict = {
  constraint: Circle_Integrations_Constraint;
  update_columns?: Array<Circle_Integrations_Update_Column>;
  where?: InputMaybe<Circle_Integrations_Bool_Exp>;
};

/** Ordering options when selecting data from "circle_integrations". */
export type Circle_Integrations_Order_By = {
  circle?: InputMaybe<Circles_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: circle_integrations */
export type Circle_Integrations_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "circle_integrations" */
export enum Circle_Integrations_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "circle_integrations" */
export type Circle_Integrations_Set_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['json']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Circle_Integrations_Stddev_Fields = {
  __typename?: 'circle_integrations_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "circle_integrations" */
export type Circle_Integrations_Stddev_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Circle_Integrations_Stddev_Pop_Fields = {
  __typename?: 'circle_integrations_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "circle_integrations" */
export type Circle_Integrations_Stddev_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Circle_Integrations_Stddev_Samp_Fields = {
  __typename?: 'circle_integrations_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "circle_integrations" */
export type Circle_Integrations_Stddev_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "circle_integrations" */
export type Circle_Integrations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Circle_Integrations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Circle_Integrations_Stream_Cursor_Value_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['json']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Circle_Integrations_Sum_Fields = {
  __typename?: 'circle_integrations_sum_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "circle_integrations" */
export type Circle_Integrations_Sum_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "circle_integrations" */
export enum Circle_Integrations_Update_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Circle_Integrations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Circle_Integrations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Circle_Integrations_Set_Input>;
  where: Circle_Integrations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Circle_Integrations_Var_Pop_Fields = {
  __typename?: 'circle_integrations_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "circle_integrations" */
export type Circle_Integrations_Var_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Circle_Integrations_Var_Samp_Fields = {
  __typename?: 'circle_integrations_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "circle_integrations" */
export type Circle_Integrations_Var_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Circle_Integrations_Variance_Fields = {
  __typename?: 'circle_integrations_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "circle_integrations" */
export type Circle_Integrations_Variance_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "circle_metadata" */
export type Circle_Metadata = {
  __typename?: 'circle_metadata';
  /** An object relationship */
  circle: Circles;
  circle_id: Scalars['bigint'];
  created_at: Scalars['timestamp'];
  id: Scalars['bigint'];
  json?: Maybe<Scalars['json']>;
  updated_at: Scalars['timestamp'];
};


/** columns and relationships of "circle_metadata" */
export type Circle_MetadataJsonArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "circle_metadata" */
export type Circle_Metadata_Aggregate = {
  __typename?: 'circle_metadata_aggregate';
  aggregate?: Maybe<Circle_Metadata_Aggregate_Fields>;
  nodes: Array<Circle_Metadata>;
};

/** aggregate fields of "circle_metadata" */
export type Circle_Metadata_Aggregate_Fields = {
  __typename?: 'circle_metadata_aggregate_fields';
  avg?: Maybe<Circle_Metadata_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Circle_Metadata_Max_Fields>;
  min?: Maybe<Circle_Metadata_Min_Fields>;
  stddev?: Maybe<Circle_Metadata_Stddev_Fields>;
  stddev_pop?: Maybe<Circle_Metadata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Circle_Metadata_Stddev_Samp_Fields>;
  sum?: Maybe<Circle_Metadata_Sum_Fields>;
  var_pop?: Maybe<Circle_Metadata_Var_Pop_Fields>;
  var_samp?: Maybe<Circle_Metadata_Var_Samp_Fields>;
  variance?: Maybe<Circle_Metadata_Variance_Fields>;
};


/** aggregate fields of "circle_metadata" */
export type Circle_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Circle_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "circle_metadata" */
export type Circle_Metadata_Aggregate_Order_By = {
  avg?: InputMaybe<Circle_Metadata_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Circle_Metadata_Max_Order_By>;
  min?: InputMaybe<Circle_Metadata_Min_Order_By>;
  stddev?: InputMaybe<Circle_Metadata_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Circle_Metadata_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Circle_Metadata_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Circle_Metadata_Sum_Order_By>;
  var_pop?: InputMaybe<Circle_Metadata_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Circle_Metadata_Var_Samp_Order_By>;
  variance?: InputMaybe<Circle_Metadata_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "circle_metadata" */
export type Circle_Metadata_Arr_Rel_Insert_Input = {
  data: Array<Circle_Metadata_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Circle_Metadata_On_Conflict>;
};

/** aggregate avg on columns */
export type Circle_Metadata_Avg_Fields = {
  __typename?: 'circle_metadata_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "circle_metadata" */
export type Circle_Metadata_Avg_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "circle_metadata". All fields are combined with a logical 'AND'. */
export type Circle_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Circle_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Circle_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Circle_Metadata_Bool_Exp>>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  json?: InputMaybe<Json_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "circle_metadata" */
export enum Circle_Metadata_Constraint {
  /** unique or primary key constraint on columns "id" */
  CircleMetadataPkey = 'circle_metadata_pkey'
}

/** input type for incrementing numeric columns in table "circle_metadata" */
export type Circle_Metadata_Inc_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "circle_metadata" */
export type Circle_Metadata_Insert_Input = {
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  json?: InputMaybe<Scalars['json']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Circle_Metadata_Max_Fields = {
  __typename?: 'circle_metadata_max_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "circle_metadata" */
export type Circle_Metadata_Max_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Circle_Metadata_Min_Fields = {
  __typename?: 'circle_metadata_min_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "circle_metadata" */
export type Circle_Metadata_Min_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "circle_metadata" */
export type Circle_Metadata_Mutation_Response = {
  __typename?: 'circle_metadata_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Circle_Metadata>;
};

/** on_conflict condition type for table "circle_metadata" */
export type Circle_Metadata_On_Conflict = {
  constraint: Circle_Metadata_Constraint;
  update_columns?: Array<Circle_Metadata_Update_Column>;
  where?: InputMaybe<Circle_Metadata_Bool_Exp>;
};

/** Ordering options when selecting data from "circle_metadata". */
export type Circle_Metadata_Order_By = {
  circle?: InputMaybe<Circles_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  json?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: circle_metadata */
export type Circle_Metadata_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "circle_metadata" */
export enum Circle_Metadata_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "circle_metadata" */
export type Circle_Metadata_Set_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  json?: InputMaybe<Scalars['json']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Circle_Metadata_Stddev_Fields = {
  __typename?: 'circle_metadata_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "circle_metadata" */
export type Circle_Metadata_Stddev_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Circle_Metadata_Stddev_Pop_Fields = {
  __typename?: 'circle_metadata_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "circle_metadata" */
export type Circle_Metadata_Stddev_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Circle_Metadata_Stddev_Samp_Fields = {
  __typename?: 'circle_metadata_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "circle_metadata" */
export type Circle_Metadata_Stddev_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "circle_metadata" */
export type Circle_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Circle_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Circle_Metadata_Stream_Cursor_Value_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  json?: InputMaybe<Scalars['json']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Circle_Metadata_Sum_Fields = {
  __typename?: 'circle_metadata_sum_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "circle_metadata" */
export type Circle_Metadata_Sum_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "circle_metadata" */
export enum Circle_Metadata_Update_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Circle_Metadata_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Circle_Metadata_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Circle_Metadata_Set_Input>;
  where: Circle_Metadata_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Circle_Metadata_Var_Pop_Fields = {
  __typename?: 'circle_metadata_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "circle_metadata" */
export type Circle_Metadata_Var_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Circle_Metadata_Var_Samp_Fields = {
  __typename?: 'circle_metadata_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "circle_metadata" */
export type Circle_Metadata_Var_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Circle_Metadata_Variance_Fields = {
  __typename?: 'circle_metadata_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "circle_metadata" */
export type Circle_Metadata_Variance_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "circle_private" */
export type Circle_Private = {
  __typename?: 'circle_private';
  /** An object relationship */
  circle?: Maybe<Circles>;
  circle_id?: Maybe<Scalars['bigint']>;
  discord_webhook?: Maybe<Scalars['String']>;
};

/** aggregated selection of "circle_private" */
export type Circle_Private_Aggregate = {
  __typename?: 'circle_private_aggregate';
  aggregate?: Maybe<Circle_Private_Aggregate_Fields>;
  nodes: Array<Circle_Private>;
};

/** aggregate fields of "circle_private" */
export type Circle_Private_Aggregate_Fields = {
  __typename?: 'circle_private_aggregate_fields';
  avg?: Maybe<Circle_Private_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Circle_Private_Max_Fields>;
  min?: Maybe<Circle_Private_Min_Fields>;
  stddev?: Maybe<Circle_Private_Stddev_Fields>;
  stddev_pop?: Maybe<Circle_Private_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Circle_Private_Stddev_Samp_Fields>;
  sum?: Maybe<Circle_Private_Sum_Fields>;
  var_pop?: Maybe<Circle_Private_Var_Pop_Fields>;
  var_samp?: Maybe<Circle_Private_Var_Samp_Fields>;
  variance?: Maybe<Circle_Private_Variance_Fields>;
};


/** aggregate fields of "circle_private" */
export type Circle_Private_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Circle_Private_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Circle_Private_Avg_Fields = {
  __typename?: 'circle_private_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "circle_private". All fields are combined with a logical 'AND'. */
export type Circle_Private_Bool_Exp = {
  _and?: InputMaybe<Array<Circle_Private_Bool_Exp>>;
  _not?: InputMaybe<Circle_Private_Bool_Exp>;
  _or?: InputMaybe<Array<Circle_Private_Bool_Exp>>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_id?: InputMaybe<Bigint_Comparison_Exp>;
  discord_webhook?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "circle_private" */
export type Circle_Private_Inc_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "circle_private" */
export type Circle_Private_Insert_Input = {
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['bigint']>;
  discord_webhook?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Circle_Private_Max_Fields = {
  __typename?: 'circle_private_max_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  discord_webhook?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Circle_Private_Min_Fields = {
  __typename?: 'circle_private_min_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  discord_webhook?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "circle_private" */
export type Circle_Private_Mutation_Response = {
  __typename?: 'circle_private_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Circle_Private>;
};

/** input type for inserting object relation for remote table "circle_private" */
export type Circle_Private_Obj_Rel_Insert_Input = {
  data: Circle_Private_Insert_Input;
};

/** Ordering options when selecting data from "circle_private". */
export type Circle_Private_Order_By = {
  circle?: InputMaybe<Circles_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  discord_webhook?: InputMaybe<Order_By>;
};

/** select columns of table "circle_private" */
export enum Circle_Private_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  DiscordWebhook = 'discord_webhook'
}

/** input type for updating data in table "circle_private" */
export type Circle_Private_Set_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  discord_webhook?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Circle_Private_Stddev_Fields = {
  __typename?: 'circle_private_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Circle_Private_Stddev_Pop_Fields = {
  __typename?: 'circle_private_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Circle_Private_Stddev_Samp_Fields = {
  __typename?: 'circle_private_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "circle_private" */
export type Circle_Private_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Circle_Private_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Circle_Private_Stream_Cursor_Value_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  discord_webhook?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Circle_Private_Sum_Fields = {
  __typename?: 'circle_private_sum_fields';
  circle_id?: Maybe<Scalars['bigint']>;
};

export type Circle_Private_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Circle_Private_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Circle_Private_Set_Input>;
  where: Circle_Private_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Circle_Private_Var_Pop_Fields = {
  __typename?: 'circle_private_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Circle_Private_Var_Samp_Fields = {
  __typename?: 'circle_private_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Circle_Private_Variance_Fields = {
  __typename?: 'circle_private_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "circle_share_tokens" */
export type Circle_Share_Tokens = {
  __typename?: 'circle_share_tokens';
  /** An object relationship */
  circle: Circles;
  circle_id: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  type: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "circle_share_tokens" */
export type Circle_Share_Tokens_Aggregate = {
  __typename?: 'circle_share_tokens_aggregate';
  aggregate?: Maybe<Circle_Share_Tokens_Aggregate_Fields>;
  nodes: Array<Circle_Share_Tokens>;
};

/** aggregate fields of "circle_share_tokens" */
export type Circle_Share_Tokens_Aggregate_Fields = {
  __typename?: 'circle_share_tokens_aggregate_fields';
  avg?: Maybe<Circle_Share_Tokens_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Circle_Share_Tokens_Max_Fields>;
  min?: Maybe<Circle_Share_Tokens_Min_Fields>;
  stddev?: Maybe<Circle_Share_Tokens_Stddev_Fields>;
  stddev_pop?: Maybe<Circle_Share_Tokens_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Circle_Share_Tokens_Stddev_Samp_Fields>;
  sum?: Maybe<Circle_Share_Tokens_Sum_Fields>;
  var_pop?: Maybe<Circle_Share_Tokens_Var_Pop_Fields>;
  var_samp?: Maybe<Circle_Share_Tokens_Var_Samp_Fields>;
  variance?: Maybe<Circle_Share_Tokens_Variance_Fields>;
};


/** aggregate fields of "circle_share_tokens" */
export type Circle_Share_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Circle_Share_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Circle_Share_Tokens_Avg_Fields = {
  __typename?: 'circle_share_tokens_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "circle_share_tokens". All fields are combined with a logical 'AND'. */
export type Circle_Share_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Circle_Share_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Circle_Share_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Circle_Share_Tokens_Bool_Exp>>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "circle_share_tokens" */
export enum Circle_Share_Tokens_Constraint {
  /** unique or primary key constraint on columns "type", "circle_id" */
  CircleShareTokenPkey = 'circle_share_token_pkey',
  /** unique or primary key constraint on columns "uuid" */
  CircleShareTokenUuidKey = 'circle_share_token_uuid_key'
}

/** input type for incrementing numeric columns in table "circle_share_tokens" */
export type Circle_Share_Tokens_Inc_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  type?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "circle_share_tokens" */
export type Circle_Share_Tokens_Insert_Input = {
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  type?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Circle_Share_Tokens_Max_Fields = {
  __typename?: 'circle_share_tokens_max_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Circle_Share_Tokens_Min_Fields = {
  __typename?: 'circle_share_tokens_min_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "circle_share_tokens" */
export type Circle_Share_Tokens_Mutation_Response = {
  __typename?: 'circle_share_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Circle_Share_Tokens>;
};

/** on_conflict condition type for table "circle_share_tokens" */
export type Circle_Share_Tokens_On_Conflict = {
  constraint: Circle_Share_Tokens_Constraint;
  update_columns?: Array<Circle_Share_Tokens_Update_Column>;
  where?: InputMaybe<Circle_Share_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "circle_share_tokens". */
export type Circle_Share_Tokens_Order_By = {
  circle?: InputMaybe<Circles_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: circle_share_tokens */
export type Circle_Share_Tokens_Pk_Columns_Input = {
  circle_id: Scalars['bigint'];
  type: Scalars['Int'];
};

/** select columns of table "circle_share_tokens" */
export enum Circle_Share_Tokens_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "circle_share_tokens" */
export type Circle_Share_Tokens_Set_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  type?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Circle_Share_Tokens_Stddev_Fields = {
  __typename?: 'circle_share_tokens_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Circle_Share_Tokens_Stddev_Pop_Fields = {
  __typename?: 'circle_share_tokens_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Circle_Share_Tokens_Stddev_Samp_Fields = {
  __typename?: 'circle_share_tokens_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "circle_share_tokens" */
export type Circle_Share_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Circle_Share_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Circle_Share_Tokens_Stream_Cursor_Value_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  type?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Circle_Share_Tokens_Sum_Fields = {
  __typename?: 'circle_share_tokens_sum_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  type?: Maybe<Scalars['Int']>;
};

/** update columns of table "circle_share_tokens" */
export enum Circle_Share_Tokens_Update_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid'
}

export type Circle_Share_Tokens_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Circle_Share_Tokens_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Circle_Share_Tokens_Set_Input>;
  where: Circle_Share_Tokens_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Circle_Share_Tokens_Var_Pop_Fields = {
  __typename?: 'circle_share_tokens_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Circle_Share_Tokens_Var_Samp_Fields = {
  __typename?: 'circle_share_tokens_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Circle_Share_Tokens_Variance_Fields = {
  __typename?: 'circle_share_tokens_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "circles" */
export type Circles = {
  __typename?: 'circles';
  alloc_text?: Maybe<Scalars['String']>;
  /** An array relationship */
  api_keys: Array<Circle_Api_Keys>;
  /** An aggregate relationship */
  api_keys_aggregate: Circle_Api_Keys_Aggregate;
  auto_opt_out: Scalars['Boolean'];
  /** An array relationship */
  burns: Array<Burns>;
  /** An aggregate relationship */
  burns_aggregate: Burns_Aggregate;
  /** An array relationship */
  circle_metadata: Array<Circle_Metadata>;
  /** An aggregate relationship */
  circle_metadata_aggregate: Circle_Metadata_Aggregate;
  /** An object relationship */
  circle_private?: Maybe<Circle_Private>;
  contact?: Maybe<Scalars['String']>;
  /** An array relationship */
  contributions: Array<Contributions>;
  /** An aggregate relationship */
  contributions_aggregate: Contributions_Aggregate;
  created_at: Scalars['timestamp'];
  default_opt_in: Scalars['Boolean'];
  deleted_at?: Maybe<Scalars['timestamp']>;
  discord_webhook?: Maybe<Scalars['String']>;
  /** An array relationship */
  epochs: Array<Epochs>;
  /** An aggregate relationship */
  epochs_aggregate: Epochs_Aggregate;
  fixed_payment_token_type?: Maybe<Scalars['String']>;
  fixed_payment_vault_id?: Maybe<Scalars['Int']>;
  id: Scalars['bigint'];
  /** An array relationship */
  integrations: Array<Circle_Integrations>;
  /** An aggregate relationship */
  integrations_aggregate: Circle_Integrations_Aggregate;
  is_verified: Scalars['Boolean'];
  logo?: Maybe<Scalars['String']>;
  min_vouches: Scalars['Int'];
  name: Scalars['String'];
  nomination_days_limit: Scalars['Int'];
  /** An array relationship */
  nominees: Array<Nominees>;
  /** An aggregate relationship */
  nominees_aggregate: Nominees_Aggregate;
  only_giver_vouch: Scalars['Boolean'];
  /** An object relationship */
  organization: Organizations;
  organization_id: Scalars['Int'];
  /** An array relationship */
  pending_token_gifts: Array<Pending_Token_Gifts>;
  /** An aggregate relationship */
  pending_token_gifts_aggregate: Pending_Token_Gifts_Aggregate;
  team_sel_text?: Maybe<Scalars['String']>;
  team_selection: Scalars['Boolean'];
  telegram_id?: Maybe<Scalars['String']>;
  /** An array relationship */
  token_gifts: Array<Token_Gifts>;
  /** An aggregate relationship */
  token_gifts_aggregate: Token_Gifts_Aggregate;
  token_name: Scalars['String'];
  updated_at: Scalars['timestamp'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** An array relationship */
  vault_transactions: Array<Vault_Transactions>;
  /** An aggregate relationship */
  vault_transactions_aggregate: Vault_Transactions_Aggregate;
  vouching: Scalars['Boolean'];
  vouching_text?: Maybe<Scalars['String']>;
};


/** columns and relationships of "circles" */
export type CirclesApi_KeysArgs = {
  distinct_on?: InputMaybe<Array<Circle_Api_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Api_Keys_Order_By>>;
  where?: InputMaybe<Circle_Api_Keys_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesApi_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Api_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Api_Keys_Order_By>>;
  where?: InputMaybe<Circle_Api_Keys_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesBurnsArgs = {
  distinct_on?: InputMaybe<Array<Burns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Burns_Order_By>>;
  where?: InputMaybe<Burns_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesBurns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Burns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Burns_Order_By>>;
  where?: InputMaybe<Burns_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesCircle_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Circle_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Metadata_Order_By>>;
  where?: InputMaybe<Circle_Metadata_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesCircle_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Metadata_Order_By>>;
  where?: InputMaybe<Circle_Metadata_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesContributionsArgs = {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesContributions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesEpochsArgs = {
  distinct_on?: InputMaybe<Array<Epochs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Epochs_Order_By>>;
  where?: InputMaybe<Epochs_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesEpochs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Epochs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Epochs_Order_By>>;
  where?: InputMaybe<Epochs_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<Circle_Integrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Integrations_Order_By>>;
  where?: InputMaybe<Circle_Integrations_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesIntegrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Integrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Integrations_Order_By>>;
  where?: InputMaybe<Circle_Integrations_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesNomineesArgs = {
  distinct_on?: InputMaybe<Array<Nominees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nominees_Order_By>>;
  where?: InputMaybe<Nominees_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesNominees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nominees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nominees_Order_By>>;
  where?: InputMaybe<Nominees_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesPending_Token_GiftsArgs = {
  distinct_on?: InputMaybe<Array<Pending_Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Token_Gifts_Order_By>>;
  where?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesPending_Token_Gifts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pending_Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Token_Gifts_Order_By>>;
  where?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesToken_GiftsArgs = {
  distinct_on?: InputMaybe<Array<Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Gifts_Order_By>>;
  where?: InputMaybe<Token_Gifts_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesToken_Gifts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Gifts_Order_By>>;
  where?: InputMaybe<Token_Gifts_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesVault_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Transactions_Order_By>>;
  where?: InputMaybe<Vault_Transactions_Bool_Exp>;
};


/** columns and relationships of "circles" */
export type CirclesVault_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Transactions_Order_By>>;
  where?: InputMaybe<Vault_Transactions_Bool_Exp>;
};

/** aggregated selection of "circles" */
export type Circles_Aggregate = {
  __typename?: 'circles_aggregate';
  aggregate?: Maybe<Circles_Aggregate_Fields>;
  nodes: Array<Circles>;
};

/** aggregate fields of "circles" */
export type Circles_Aggregate_Fields = {
  __typename?: 'circles_aggregate_fields';
  avg?: Maybe<Circles_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Circles_Max_Fields>;
  min?: Maybe<Circles_Min_Fields>;
  stddev?: Maybe<Circles_Stddev_Fields>;
  stddev_pop?: Maybe<Circles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Circles_Stddev_Samp_Fields>;
  sum?: Maybe<Circles_Sum_Fields>;
  var_pop?: Maybe<Circles_Var_Pop_Fields>;
  var_samp?: Maybe<Circles_Var_Samp_Fields>;
  variance?: Maybe<Circles_Variance_Fields>;
};


/** aggregate fields of "circles" */
export type Circles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Circles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "circles" */
export type Circles_Aggregate_Order_By = {
  avg?: InputMaybe<Circles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Circles_Max_Order_By>;
  min?: InputMaybe<Circles_Min_Order_By>;
  stddev?: InputMaybe<Circles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Circles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Circles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Circles_Sum_Order_By>;
  var_pop?: InputMaybe<Circles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Circles_Var_Samp_Order_By>;
  variance?: InputMaybe<Circles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "circles" */
export type Circles_Arr_Rel_Insert_Input = {
  data: Array<Circles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Circles_On_Conflict>;
};

/** aggregate avg on columns */
export type Circles_Avg_Fields = {
  __typename?: 'circles_avg_fields';
  fixed_payment_vault_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  min_vouches?: Maybe<Scalars['Float']>;
  nomination_days_limit?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "circles" */
export type Circles_Avg_Order_By = {
  fixed_payment_vault_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  min_vouches?: InputMaybe<Order_By>;
  nomination_days_limit?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "circles". All fields are combined with a logical 'AND'. */
export type Circles_Bool_Exp = {
  _and?: InputMaybe<Array<Circles_Bool_Exp>>;
  _not?: InputMaybe<Circles_Bool_Exp>;
  _or?: InputMaybe<Array<Circles_Bool_Exp>>;
  alloc_text?: InputMaybe<String_Comparison_Exp>;
  api_keys?: InputMaybe<Circle_Api_Keys_Bool_Exp>;
  auto_opt_out?: InputMaybe<Boolean_Comparison_Exp>;
  burns?: InputMaybe<Burns_Bool_Exp>;
  circle_metadata?: InputMaybe<Circle_Metadata_Bool_Exp>;
  circle_private?: InputMaybe<Circle_Private_Bool_Exp>;
  contact?: InputMaybe<String_Comparison_Exp>;
  contributions?: InputMaybe<Contributions_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  default_opt_in?: InputMaybe<Boolean_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  discord_webhook?: InputMaybe<String_Comparison_Exp>;
  epochs?: InputMaybe<Epochs_Bool_Exp>;
  fixed_payment_token_type?: InputMaybe<String_Comparison_Exp>;
  fixed_payment_vault_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  integrations?: InputMaybe<Circle_Integrations_Bool_Exp>;
  is_verified?: InputMaybe<Boolean_Comparison_Exp>;
  logo?: InputMaybe<String_Comparison_Exp>;
  min_vouches?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nomination_days_limit?: InputMaybe<Int_Comparison_Exp>;
  nominees?: InputMaybe<Nominees_Bool_Exp>;
  only_giver_vouch?: InputMaybe<Boolean_Comparison_Exp>;
  organization?: InputMaybe<Organizations_Bool_Exp>;
  organization_id?: InputMaybe<Int_Comparison_Exp>;
  pending_token_gifts?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
  team_sel_text?: InputMaybe<String_Comparison_Exp>;
  team_selection?: InputMaybe<Boolean_Comparison_Exp>;
  telegram_id?: InputMaybe<String_Comparison_Exp>;
  token_gifts?: InputMaybe<Token_Gifts_Bool_Exp>;
  token_name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  vault_transactions?: InputMaybe<Vault_Transactions_Bool_Exp>;
  vouching?: InputMaybe<Boolean_Comparison_Exp>;
  vouching_text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "circles" */
export enum Circles_Constraint {
  /** unique or primary key constraint on columns "id" */
  CirclesPkey = 'circles_pkey'
}

/** input type for incrementing numeric columns in table "circles" */
export type Circles_Inc_Input = {
  fixed_payment_vault_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  min_vouches?: InputMaybe<Scalars['Int']>;
  nomination_days_limit?: InputMaybe<Scalars['Int']>;
  organization_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "circles" */
export type Circles_Insert_Input = {
  alloc_text?: InputMaybe<Scalars['String']>;
  api_keys?: InputMaybe<Circle_Api_Keys_Arr_Rel_Insert_Input>;
  auto_opt_out?: InputMaybe<Scalars['Boolean']>;
  burns?: InputMaybe<Burns_Arr_Rel_Insert_Input>;
  circle_metadata?: InputMaybe<Circle_Metadata_Arr_Rel_Insert_Input>;
  circle_private?: InputMaybe<Circle_Private_Obj_Rel_Insert_Input>;
  contact?: InputMaybe<Scalars['String']>;
  contributions?: InputMaybe<Contributions_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  default_opt_in?: InputMaybe<Scalars['Boolean']>;
  deleted_at?: InputMaybe<Scalars['timestamp']>;
  discord_webhook?: InputMaybe<Scalars['String']>;
  epochs?: InputMaybe<Epochs_Arr_Rel_Insert_Input>;
  fixed_payment_token_type?: InputMaybe<Scalars['String']>;
  fixed_payment_vault_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  integrations?: InputMaybe<Circle_Integrations_Arr_Rel_Insert_Input>;
  is_verified?: InputMaybe<Scalars['Boolean']>;
  logo?: InputMaybe<Scalars['String']>;
  min_vouches?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nomination_days_limit?: InputMaybe<Scalars['Int']>;
  nominees?: InputMaybe<Nominees_Arr_Rel_Insert_Input>;
  only_giver_vouch?: InputMaybe<Scalars['Boolean']>;
  organization?: InputMaybe<Organizations_Obj_Rel_Insert_Input>;
  organization_id?: InputMaybe<Scalars['Int']>;
  pending_token_gifts?: InputMaybe<Pending_Token_Gifts_Arr_Rel_Insert_Input>;
  team_sel_text?: InputMaybe<Scalars['String']>;
  team_selection?: InputMaybe<Scalars['Boolean']>;
  telegram_id?: InputMaybe<Scalars['String']>;
  token_gifts?: InputMaybe<Token_Gifts_Arr_Rel_Insert_Input>;
  token_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  vault_transactions?: InputMaybe<Vault_Transactions_Arr_Rel_Insert_Input>;
  vouching?: InputMaybe<Scalars['Boolean']>;
  vouching_text?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Circles_Max_Fields = {
  __typename?: 'circles_max_fields';
  alloc_text?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  deleted_at?: Maybe<Scalars['timestamp']>;
  discord_webhook?: Maybe<Scalars['String']>;
  fixed_payment_token_type?: Maybe<Scalars['String']>;
  fixed_payment_vault_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  logo?: Maybe<Scalars['String']>;
  min_vouches?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nomination_days_limit?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  team_sel_text?: Maybe<Scalars['String']>;
  telegram_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  vouching_text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "circles" */
export type Circles_Max_Order_By = {
  alloc_text?: InputMaybe<Order_By>;
  contact?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  discord_webhook?: InputMaybe<Order_By>;
  fixed_payment_token_type?: InputMaybe<Order_By>;
  fixed_payment_vault_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  min_vouches?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nomination_days_limit?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  team_sel_text?: InputMaybe<Order_By>;
  telegram_id?: InputMaybe<Order_By>;
  token_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vouching_text?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Circles_Min_Fields = {
  __typename?: 'circles_min_fields';
  alloc_text?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  deleted_at?: Maybe<Scalars['timestamp']>;
  discord_webhook?: Maybe<Scalars['String']>;
  fixed_payment_token_type?: Maybe<Scalars['String']>;
  fixed_payment_vault_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  logo?: Maybe<Scalars['String']>;
  min_vouches?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  nomination_days_limit?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
  team_sel_text?: Maybe<Scalars['String']>;
  telegram_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  vouching_text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "circles" */
export type Circles_Min_Order_By = {
  alloc_text?: InputMaybe<Order_By>;
  contact?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  discord_webhook?: InputMaybe<Order_By>;
  fixed_payment_token_type?: InputMaybe<Order_By>;
  fixed_payment_vault_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  min_vouches?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nomination_days_limit?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  team_sel_text?: InputMaybe<Order_By>;
  telegram_id?: InputMaybe<Order_By>;
  token_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vouching_text?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "circles" */
export type Circles_Mutation_Response = {
  __typename?: 'circles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Circles>;
};

/** input type for inserting object relation for remote table "circles" */
export type Circles_Obj_Rel_Insert_Input = {
  data: Circles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Circles_On_Conflict>;
};

/** on_conflict condition type for table "circles" */
export type Circles_On_Conflict = {
  constraint: Circles_Constraint;
  update_columns?: Array<Circles_Update_Column>;
  where?: InputMaybe<Circles_Bool_Exp>;
};

/** Ordering options when selecting data from "circles". */
export type Circles_Order_By = {
  alloc_text?: InputMaybe<Order_By>;
  api_keys_aggregate?: InputMaybe<Circle_Api_Keys_Aggregate_Order_By>;
  auto_opt_out?: InputMaybe<Order_By>;
  burns_aggregate?: InputMaybe<Burns_Aggregate_Order_By>;
  circle_metadata_aggregate?: InputMaybe<Circle_Metadata_Aggregate_Order_By>;
  circle_private?: InputMaybe<Circle_Private_Order_By>;
  contact?: InputMaybe<Order_By>;
  contributions_aggregate?: InputMaybe<Contributions_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  default_opt_in?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  discord_webhook?: InputMaybe<Order_By>;
  epochs_aggregate?: InputMaybe<Epochs_Aggregate_Order_By>;
  fixed_payment_token_type?: InputMaybe<Order_By>;
  fixed_payment_vault_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  integrations_aggregate?: InputMaybe<Circle_Integrations_Aggregate_Order_By>;
  is_verified?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  min_vouches?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nomination_days_limit?: InputMaybe<Order_By>;
  nominees_aggregate?: InputMaybe<Nominees_Aggregate_Order_By>;
  only_giver_vouch?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organizations_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  pending_token_gifts_aggregate?: InputMaybe<Pending_Token_Gifts_Aggregate_Order_By>;
  team_sel_text?: InputMaybe<Order_By>;
  team_selection?: InputMaybe<Order_By>;
  telegram_id?: InputMaybe<Order_By>;
  token_gifts_aggregate?: InputMaybe<Token_Gifts_Aggregate_Order_By>;
  token_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  vault_transactions_aggregate?: InputMaybe<Vault_Transactions_Aggregate_Order_By>;
  vouching?: InputMaybe<Order_By>;
  vouching_text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: circles */
export type Circles_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "circles" */
export enum Circles_Select_Column {
  /** column name */
  AllocText = 'alloc_text',
  /** column name */
  AutoOptOut = 'auto_opt_out',
  /** column name */
  Contact = 'contact',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultOptIn = 'default_opt_in',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DiscordWebhook = 'discord_webhook',
  /** column name */
  FixedPaymentTokenType = 'fixed_payment_token_type',
  /** column name */
  FixedPaymentVaultId = 'fixed_payment_vault_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsVerified = 'is_verified',
  /** column name */
  Logo = 'logo',
  /** column name */
  MinVouches = 'min_vouches',
  /** column name */
  Name = 'name',
  /** column name */
  NominationDaysLimit = 'nomination_days_limit',
  /** column name */
  OnlyGiverVouch = 'only_giver_vouch',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  TeamSelText = 'team_sel_text',
  /** column name */
  TeamSelection = 'team_selection',
  /** column name */
  TelegramId = 'telegram_id',
  /** column name */
  TokenName = 'token_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Vouching = 'vouching',
  /** column name */
  VouchingText = 'vouching_text'
}

/** input type for updating data in table "circles" */
export type Circles_Set_Input = {
  alloc_text?: InputMaybe<Scalars['String']>;
  auto_opt_out?: InputMaybe<Scalars['Boolean']>;
  contact?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  default_opt_in?: InputMaybe<Scalars['Boolean']>;
  deleted_at?: InputMaybe<Scalars['timestamp']>;
  discord_webhook?: InputMaybe<Scalars['String']>;
  fixed_payment_token_type?: InputMaybe<Scalars['String']>;
  fixed_payment_vault_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  is_verified?: InputMaybe<Scalars['Boolean']>;
  logo?: InputMaybe<Scalars['String']>;
  min_vouches?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nomination_days_limit?: InputMaybe<Scalars['Int']>;
  only_giver_vouch?: InputMaybe<Scalars['Boolean']>;
  organization_id?: InputMaybe<Scalars['Int']>;
  team_sel_text?: InputMaybe<Scalars['String']>;
  team_selection?: InputMaybe<Scalars['Boolean']>;
  telegram_id?: InputMaybe<Scalars['String']>;
  token_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  vouching?: InputMaybe<Scalars['Boolean']>;
  vouching_text?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Circles_Stddev_Fields = {
  __typename?: 'circles_stddev_fields';
  fixed_payment_vault_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  min_vouches?: Maybe<Scalars['Float']>;
  nomination_days_limit?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "circles" */
export type Circles_Stddev_Order_By = {
  fixed_payment_vault_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  min_vouches?: InputMaybe<Order_By>;
  nomination_days_limit?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Circles_Stddev_Pop_Fields = {
  __typename?: 'circles_stddev_pop_fields';
  fixed_payment_vault_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  min_vouches?: Maybe<Scalars['Float']>;
  nomination_days_limit?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "circles" */
export type Circles_Stddev_Pop_Order_By = {
  fixed_payment_vault_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  min_vouches?: InputMaybe<Order_By>;
  nomination_days_limit?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Circles_Stddev_Samp_Fields = {
  __typename?: 'circles_stddev_samp_fields';
  fixed_payment_vault_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  min_vouches?: Maybe<Scalars['Float']>;
  nomination_days_limit?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "circles" */
export type Circles_Stddev_Samp_Order_By = {
  fixed_payment_vault_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  min_vouches?: InputMaybe<Order_By>;
  nomination_days_limit?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "circles" */
export type Circles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Circles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Circles_Stream_Cursor_Value_Input = {
  alloc_text?: InputMaybe<Scalars['String']>;
  auto_opt_out?: InputMaybe<Scalars['Boolean']>;
  contact?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  default_opt_in?: InputMaybe<Scalars['Boolean']>;
  deleted_at?: InputMaybe<Scalars['timestamp']>;
  discord_webhook?: InputMaybe<Scalars['String']>;
  fixed_payment_token_type?: InputMaybe<Scalars['String']>;
  fixed_payment_vault_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  is_verified?: InputMaybe<Scalars['Boolean']>;
  logo?: InputMaybe<Scalars['String']>;
  min_vouches?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nomination_days_limit?: InputMaybe<Scalars['Int']>;
  only_giver_vouch?: InputMaybe<Scalars['Boolean']>;
  organization_id?: InputMaybe<Scalars['Int']>;
  team_sel_text?: InputMaybe<Scalars['String']>;
  team_selection?: InputMaybe<Scalars['Boolean']>;
  telegram_id?: InputMaybe<Scalars['String']>;
  token_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  vouching?: InputMaybe<Scalars['Boolean']>;
  vouching_text?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Circles_Sum_Fields = {
  __typename?: 'circles_sum_fields';
  fixed_payment_vault_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  min_vouches?: Maybe<Scalars['Int']>;
  nomination_days_limit?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "circles" */
export type Circles_Sum_Order_By = {
  fixed_payment_vault_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  min_vouches?: InputMaybe<Order_By>;
  nomination_days_limit?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** update columns of table "circles" */
export enum Circles_Update_Column {
  /** column name */
  AllocText = 'alloc_text',
  /** column name */
  AutoOptOut = 'auto_opt_out',
  /** column name */
  Contact = 'contact',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultOptIn = 'default_opt_in',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DiscordWebhook = 'discord_webhook',
  /** column name */
  FixedPaymentTokenType = 'fixed_payment_token_type',
  /** column name */
  FixedPaymentVaultId = 'fixed_payment_vault_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsVerified = 'is_verified',
  /** column name */
  Logo = 'logo',
  /** column name */
  MinVouches = 'min_vouches',
  /** column name */
  Name = 'name',
  /** column name */
  NominationDaysLimit = 'nomination_days_limit',
  /** column name */
  OnlyGiverVouch = 'only_giver_vouch',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  TeamSelText = 'team_sel_text',
  /** column name */
  TeamSelection = 'team_selection',
  /** column name */
  TelegramId = 'telegram_id',
  /** column name */
  TokenName = 'token_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Vouching = 'vouching',
  /** column name */
  VouchingText = 'vouching_text'
}

export type Circles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Circles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Circles_Set_Input>;
  where: Circles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Circles_Var_Pop_Fields = {
  __typename?: 'circles_var_pop_fields';
  fixed_payment_vault_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  min_vouches?: Maybe<Scalars['Float']>;
  nomination_days_limit?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "circles" */
export type Circles_Var_Pop_Order_By = {
  fixed_payment_vault_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  min_vouches?: InputMaybe<Order_By>;
  nomination_days_limit?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Circles_Var_Samp_Fields = {
  __typename?: 'circles_var_samp_fields';
  fixed_payment_vault_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  min_vouches?: Maybe<Scalars['Float']>;
  nomination_days_limit?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "circles" */
export type Circles_Var_Samp_Order_By = {
  fixed_payment_vault_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  min_vouches?: InputMaybe<Order_By>;
  nomination_days_limit?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Circles_Variance_Fields = {
  __typename?: 'circles_variance_fields';
  fixed_payment_vault_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  min_vouches?: Maybe<Scalars['Float']>;
  nomination_days_limit?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "circles" */
export type Circles_Variance_Order_By = {
  fixed_payment_vault_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  min_vouches?: InputMaybe<Order_By>;
  nomination_days_limit?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "claims" */
export type Claims = {
  __typename?: 'claims';
  address: Scalars['String'];
  amount: Scalars['numeric'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  distribution: Distributions;
  distribution_id: Scalars['bigint'];
  id: Scalars['bigint'];
  index: Scalars['bigint'];
  new_amount: Scalars['numeric'];
  /** An object relationship */
  profile?: Maybe<Profiles>;
  profile_id: Scalars['bigint'];
  proof: Scalars['String'];
  txHash?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "claims" */
export type Claims_Aggregate = {
  __typename?: 'claims_aggregate';
  aggregate?: Maybe<Claims_Aggregate_Fields>;
  nodes: Array<Claims>;
};

/** aggregate fields of "claims" */
export type Claims_Aggregate_Fields = {
  __typename?: 'claims_aggregate_fields';
  avg?: Maybe<Claims_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Claims_Max_Fields>;
  min?: Maybe<Claims_Min_Fields>;
  stddev?: Maybe<Claims_Stddev_Fields>;
  stddev_pop?: Maybe<Claims_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Claims_Stddev_Samp_Fields>;
  sum?: Maybe<Claims_Sum_Fields>;
  var_pop?: Maybe<Claims_Var_Pop_Fields>;
  var_samp?: Maybe<Claims_Var_Samp_Fields>;
  variance?: Maybe<Claims_Variance_Fields>;
};


/** aggregate fields of "claims" */
export type Claims_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Claims_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "claims" */
export type Claims_Aggregate_Order_By = {
  avg?: InputMaybe<Claims_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Claims_Max_Order_By>;
  min?: InputMaybe<Claims_Min_Order_By>;
  stddev?: InputMaybe<Claims_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Claims_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Claims_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Claims_Sum_Order_By>;
  var_pop?: InputMaybe<Claims_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Claims_Var_Samp_Order_By>;
  variance?: InputMaybe<Claims_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "claims" */
export type Claims_Arr_Rel_Insert_Input = {
  data: Array<Claims_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Claims_On_Conflict>;
};

/** aggregate avg on columns */
export type Claims_Avg_Fields = {
  __typename?: 'claims_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  new_amount?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "claims" */
export type Claims_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  new_amount?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "claims". All fields are combined with a logical 'AND'. */
export type Claims_Bool_Exp = {
  _and?: InputMaybe<Array<Claims_Bool_Exp>>;
  _not?: InputMaybe<Claims_Bool_Exp>;
  _or?: InputMaybe<Array<Claims_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  distribution?: InputMaybe<Distributions_Bool_Exp>;
  distribution_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  index?: InputMaybe<Bigint_Comparison_Exp>;
  new_amount?: InputMaybe<Numeric_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  profile_id?: InputMaybe<Bigint_Comparison_Exp>;
  proof?: InputMaybe<String_Comparison_Exp>;
  txHash?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "claims" */
export enum Claims_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClaimsPkey = 'claims_pkey'
}

/** input type for incrementing numeric columns in table "claims" */
export type Claims_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  distribution_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  index?: InputMaybe<Scalars['bigint']>;
  new_amount?: InputMaybe<Scalars['numeric']>;
  profile_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "claims" */
export type Claims_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  distribution?: InputMaybe<Distributions_Obj_Rel_Insert_Input>;
  distribution_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  index?: InputMaybe<Scalars['bigint']>;
  new_amount?: InputMaybe<Scalars['numeric']>;
  profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
  profile_id?: InputMaybe<Scalars['bigint']>;
  proof?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Claims_Max_Fields = {
  __typename?: 'claims_max_fields';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  distribution_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  new_amount?: Maybe<Scalars['numeric']>;
  profile_id?: Maybe<Scalars['bigint']>;
  proof?: Maybe<Scalars['String']>;
  txHash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "claims" */
export type Claims_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  new_amount?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  proof?: InputMaybe<Order_By>;
  txHash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Claims_Min_Fields = {
  __typename?: 'claims_min_fields';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  distribution_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  new_amount?: Maybe<Scalars['numeric']>;
  profile_id?: Maybe<Scalars['bigint']>;
  proof?: Maybe<Scalars['String']>;
  txHash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "claims" */
export type Claims_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  new_amount?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  proof?: InputMaybe<Order_By>;
  txHash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "claims" */
export type Claims_Mutation_Response = {
  __typename?: 'claims_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Claims>;
};

/** on_conflict condition type for table "claims" */
export type Claims_On_Conflict = {
  constraint: Claims_Constraint;
  update_columns?: Array<Claims_Update_Column>;
  where?: InputMaybe<Claims_Bool_Exp>;
};

/** Ordering options when selecting data from "claims". */
export type Claims_Order_By = {
  address?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  distribution?: InputMaybe<Distributions_Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  new_amount?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  profile_id?: InputMaybe<Order_By>;
  proof?: InputMaybe<Order_By>;
  txHash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: claims */
export type Claims_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "claims" */
export enum Claims_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DistributionId = 'distribution_id',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  NewAmount = 'new_amount',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  Proof = 'proof',
  /** column name */
  TxHash = 'txHash',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "claims" */
export type Claims_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  distribution_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  index?: InputMaybe<Scalars['bigint']>;
  new_amount?: InputMaybe<Scalars['numeric']>;
  profile_id?: InputMaybe<Scalars['bigint']>;
  proof?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Claims_Stddev_Fields = {
  __typename?: 'claims_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  new_amount?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "claims" */
export type Claims_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  new_amount?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Claims_Stddev_Pop_Fields = {
  __typename?: 'claims_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  new_amount?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "claims" */
export type Claims_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  new_amount?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Claims_Stddev_Samp_Fields = {
  __typename?: 'claims_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  new_amount?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "claims" */
export type Claims_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  new_amount?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "claims" */
export type Claims_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Claims_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Claims_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  distribution_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  index?: InputMaybe<Scalars['bigint']>;
  new_amount?: InputMaybe<Scalars['numeric']>;
  profile_id?: InputMaybe<Scalars['bigint']>;
  proof?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Claims_Sum_Fields = {
  __typename?: 'claims_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  distribution_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  new_amount?: Maybe<Scalars['numeric']>;
  profile_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "claims" */
export type Claims_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  new_amount?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** update columns of table "claims" */
export enum Claims_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DistributionId = 'distribution_id',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  NewAmount = 'new_amount',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  Proof = 'proof',
  /** column name */
  TxHash = 'txHash',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Claims_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Claims_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Claims_Set_Input>;
  where: Claims_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Claims_Var_Pop_Fields = {
  __typename?: 'claims_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  new_amount?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "claims" */
export type Claims_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  new_amount?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Claims_Var_Samp_Fields = {
  __typename?: 'claims_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  new_amount?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "claims" */
export type Claims_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  new_amount?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Claims_Variance_Fields = {
  __typename?: 'claims_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  new_amount?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "claims" */
export type Claims_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  new_amount?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "contributions" */
export type Contributions = {
  __typename?: 'contributions';
  /** An object relationship */
  circle: Circles;
  circle_id: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  created_with_api_key?: Maybe<Circle_Api_Keys>;
  created_with_api_key_hash?: Maybe<Scalars['String']>;
  datetime_created: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  id: Scalars['bigint'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['bigint'];
};

/** aggregated selection of "contributions" */
export type Contributions_Aggregate = {
  __typename?: 'contributions_aggregate';
  aggregate?: Maybe<Contributions_Aggregate_Fields>;
  nodes: Array<Contributions>;
};

/** aggregate fields of "contributions" */
export type Contributions_Aggregate_Fields = {
  __typename?: 'contributions_aggregate_fields';
  avg?: Maybe<Contributions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Contributions_Max_Fields>;
  min?: Maybe<Contributions_Min_Fields>;
  stddev?: Maybe<Contributions_Stddev_Fields>;
  stddev_pop?: Maybe<Contributions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contributions_Stddev_Samp_Fields>;
  sum?: Maybe<Contributions_Sum_Fields>;
  var_pop?: Maybe<Contributions_Var_Pop_Fields>;
  var_samp?: Maybe<Contributions_Var_Samp_Fields>;
  variance?: Maybe<Contributions_Variance_Fields>;
};


/** aggregate fields of "contributions" */
export type Contributions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contributions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contributions" */
export type Contributions_Aggregate_Order_By = {
  avg?: InputMaybe<Contributions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Contributions_Max_Order_By>;
  min?: InputMaybe<Contributions_Min_Order_By>;
  stddev?: InputMaybe<Contributions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Contributions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Contributions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Contributions_Sum_Order_By>;
  var_pop?: InputMaybe<Contributions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Contributions_Var_Samp_Order_By>;
  variance?: InputMaybe<Contributions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "contributions" */
export type Contributions_Arr_Rel_Insert_Input = {
  data: Array<Contributions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Contributions_On_Conflict>;
};

/** aggregate avg on columns */
export type Contributions_Avg_Fields = {
  __typename?: 'contributions_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "contributions" */
export type Contributions_Avg_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "contributions". All fields are combined with a logical 'AND'. */
export type Contributions_Bool_Exp = {
  _and?: InputMaybe<Array<Contributions_Bool_Exp>>;
  _not?: InputMaybe<Contributions_Bool_Exp>;
  _or?: InputMaybe<Array<Contributions_Bool_Exp>>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_with_api_key?: InputMaybe<Circle_Api_Keys_Bool_Exp>;
  created_with_api_key_hash?: InputMaybe<String_Comparison_Exp>;
  datetime_created?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "contributions" */
export enum Contributions_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContributionsPkey = 'contributions_pkey'
}

/** input type for incrementing numeric columns in table "contributions" */
export type Contributions_Inc_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "contributions" */
export type Contributions_Insert_Input = {
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_with_api_key?: InputMaybe<Circle_Api_Keys_Obj_Rel_Insert_Input>;
  created_with_api_key_hash?: InputMaybe<Scalars['String']>;
  datetime_created?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Contributions_Max_Fields = {
  __typename?: 'contributions_max_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_with_api_key_hash?: Maybe<Scalars['String']>;
  datetime_created?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "contributions" */
export type Contributions_Max_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_with_api_key_hash?: InputMaybe<Order_By>;
  datetime_created?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Contributions_Min_Fields = {
  __typename?: 'contributions_min_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_with_api_key_hash?: Maybe<Scalars['String']>;
  datetime_created?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "contributions" */
export type Contributions_Min_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_with_api_key_hash?: InputMaybe<Order_By>;
  datetime_created?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "contributions" */
export type Contributions_Mutation_Response = {
  __typename?: 'contributions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Contributions>;
};

/** on_conflict condition type for table "contributions" */
export type Contributions_On_Conflict = {
  constraint: Contributions_Constraint;
  update_columns?: Array<Contributions_Update_Column>;
  where?: InputMaybe<Contributions_Bool_Exp>;
};

/** Ordering options when selecting data from "contributions". */
export type Contributions_Order_By = {
  circle?: InputMaybe<Circles_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_with_api_key?: InputMaybe<Circle_Api_Keys_Order_By>;
  created_with_api_key_hash?: InputMaybe<Order_By>;
  datetime_created?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contributions */
export type Contributions_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "contributions" */
export enum Contributions_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedWithApiKeyHash = 'created_with_api_key_hash',
  /** column name */
  DatetimeCreated = 'datetime_created',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "contributions" */
export type Contributions_Set_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_with_api_key_hash?: InputMaybe<Scalars['String']>;
  datetime_created?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Contributions_Stddev_Fields = {
  __typename?: 'contributions_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "contributions" */
export type Contributions_Stddev_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Contributions_Stddev_Pop_Fields = {
  __typename?: 'contributions_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "contributions" */
export type Contributions_Stddev_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Contributions_Stddev_Samp_Fields = {
  __typename?: 'contributions_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "contributions" */
export type Contributions_Stddev_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "contributions" */
export type Contributions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contributions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contributions_Stream_Cursor_Value_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_with_api_key_hash?: InputMaybe<Scalars['String']>;
  datetime_created?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Contributions_Sum_Fields = {
  __typename?: 'contributions_sum_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "contributions" */
export type Contributions_Sum_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "contributions" */
export enum Contributions_Update_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedWithApiKeyHash = 'created_with_api_key_hash',
  /** column name */
  DatetimeCreated = 'datetime_created',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Contributions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Contributions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contributions_Set_Input>;
  where: Contributions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Contributions_Var_Pop_Fields = {
  __typename?: 'contributions_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "contributions" */
export type Contributions_Var_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Contributions_Var_Samp_Fields = {
  __typename?: 'contributions_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "contributions" */
export type Contributions_Var_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Contributions_Variance_Fields = {
  __typename?: 'contributions_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "contributions" */
export type Contributions_Variance_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** link a discord role to a circle  to control membership of the circle */
export type Discord_Roles_Circles = {
  __typename?: 'discord_roles_circles';
  /** An object relationship */
  circle: Circles;
  circle_id: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  role: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "discord.roles_circles" */
export type Discord_Roles_Circles_Aggregate = {
  __typename?: 'discord_roles_circles_aggregate';
  aggregate?: Maybe<Discord_Roles_Circles_Aggregate_Fields>;
  nodes: Array<Discord_Roles_Circles>;
};

/** aggregate fields of "discord.roles_circles" */
export type Discord_Roles_Circles_Aggregate_Fields = {
  __typename?: 'discord_roles_circles_aggregate_fields';
  avg?: Maybe<Discord_Roles_Circles_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Discord_Roles_Circles_Max_Fields>;
  min?: Maybe<Discord_Roles_Circles_Min_Fields>;
  stddev?: Maybe<Discord_Roles_Circles_Stddev_Fields>;
  stddev_pop?: Maybe<Discord_Roles_Circles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Discord_Roles_Circles_Stddev_Samp_Fields>;
  sum?: Maybe<Discord_Roles_Circles_Sum_Fields>;
  var_pop?: Maybe<Discord_Roles_Circles_Var_Pop_Fields>;
  var_samp?: Maybe<Discord_Roles_Circles_Var_Samp_Fields>;
  variance?: Maybe<Discord_Roles_Circles_Variance_Fields>;
};


/** aggregate fields of "discord.roles_circles" */
export type Discord_Roles_Circles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Discord_Roles_Circles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Discord_Roles_Circles_Avg_Fields = {
  __typename?: 'discord_roles_circles_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "discord.roles_circles". All fields are combined with a logical 'AND'. */
export type Discord_Roles_Circles_Bool_Exp = {
  _and?: InputMaybe<Array<Discord_Roles_Circles_Bool_Exp>>;
  _not?: InputMaybe<Discord_Roles_Circles_Bool_Exp>;
  _or?: InputMaybe<Array<Discord_Roles_Circles_Bool_Exp>>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "discord.roles_circles" */
export enum Discord_Roles_Circles_Constraint {
  /** unique or primary key constraint on columns "circle_id" */
  RolesCirclesCircleIdKey = 'roles_circles_circle_id_key',
  /** unique or primary key constraint on columns "id" */
  RolesCirclesPkey = 'roles_circles_pkey'
}

/** input type for incrementing numeric columns in table "discord.roles_circles" */
export type Discord_Roles_Circles_Inc_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "discord.roles_circles" */
export type Discord_Roles_Circles_Insert_Input = {
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  role?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Discord_Roles_Circles_Max_Fields = {
  __typename?: 'discord_roles_circles_max_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Discord_Roles_Circles_Min_Fields = {
  __typename?: 'discord_roles_circles_min_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "discord.roles_circles" */
export type Discord_Roles_Circles_Mutation_Response = {
  __typename?: 'discord_roles_circles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Discord_Roles_Circles>;
};

/** on_conflict condition type for table "discord.roles_circles" */
export type Discord_Roles_Circles_On_Conflict = {
  constraint: Discord_Roles_Circles_Constraint;
  update_columns?: Array<Discord_Roles_Circles_Update_Column>;
  where?: InputMaybe<Discord_Roles_Circles_Bool_Exp>;
};

/** Ordering options when selecting data from "discord.roles_circles". */
export type Discord_Roles_Circles_Order_By = {
  circle?: InputMaybe<Circles_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: discord.roles_circles */
export type Discord_Roles_Circles_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "discord.roles_circles" */
export enum Discord_Roles_Circles_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "discord.roles_circles" */
export type Discord_Roles_Circles_Set_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  role?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Discord_Roles_Circles_Stddev_Fields = {
  __typename?: 'discord_roles_circles_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Discord_Roles_Circles_Stddev_Pop_Fields = {
  __typename?: 'discord_roles_circles_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Discord_Roles_Circles_Stddev_Samp_Fields = {
  __typename?: 'discord_roles_circles_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "discord_roles_circles" */
export type Discord_Roles_Circles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Discord_Roles_Circles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Discord_Roles_Circles_Stream_Cursor_Value_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  role?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Discord_Roles_Circles_Sum_Fields = {
  __typename?: 'discord_roles_circles_sum_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "discord.roles_circles" */
export enum Discord_Roles_Circles_Update_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Discord_Roles_Circles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Discord_Roles_Circles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Discord_Roles_Circles_Set_Input>;
  where: Discord_Roles_Circles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Discord_Roles_Circles_Var_Pop_Fields = {
  __typename?: 'discord_roles_circles_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Discord_Roles_Circles_Var_Samp_Fields = {
  __typename?: 'discord_roles_circles_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Discord_Roles_Circles_Variance_Fields = {
  __typename?: 'discord_roles_circles_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** link discord user ids to coordinape profiles 1:1 */
export type Discord_Users = {
  __typename?: 'discord_users';
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  /** An object relationship */
  profile: Profiles;
  profile_id: Scalars['bigint'];
  updated_at: Scalars['timestamptz'];
  user_snowflake: Scalars['String'];
};

/** aggregated selection of "discord.users" */
export type Discord_Users_Aggregate = {
  __typename?: 'discord_users_aggregate';
  aggregate?: Maybe<Discord_Users_Aggregate_Fields>;
  nodes: Array<Discord_Users>;
};

/** aggregate fields of "discord.users" */
export type Discord_Users_Aggregate_Fields = {
  __typename?: 'discord_users_aggregate_fields';
  avg?: Maybe<Discord_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Discord_Users_Max_Fields>;
  min?: Maybe<Discord_Users_Min_Fields>;
  stddev?: Maybe<Discord_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Discord_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Discord_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Discord_Users_Sum_Fields>;
  var_pop?: Maybe<Discord_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Discord_Users_Var_Samp_Fields>;
  variance?: Maybe<Discord_Users_Variance_Fields>;
};


/** aggregate fields of "discord.users" */
export type Discord_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Discord_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Discord_Users_Avg_Fields = {
  __typename?: 'discord_users_avg_fields';
  id?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "discord.users". All fields are combined with a logical 'AND'. */
export type Discord_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Discord_Users_Bool_Exp>>;
  _not?: InputMaybe<Discord_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Discord_Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  profile_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_snowflake?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "discord.users" */
export enum Discord_Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "profile_id" */
  UsersProfileIdKey = 'users_profile_id_key',
  /** unique or primary key constraint on columns "user_snowflake" */
  UsersUserSnowflakeKey = 'users_user_snowflake_key'
}

/** input type for incrementing numeric columns in table "discord.users" */
export type Discord_Users_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  profile_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "discord.users" */
export type Discord_Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
  profile_id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_snowflake?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Discord_Users_Max_Fields = {
  __typename?: 'discord_users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  profile_id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_snowflake?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Discord_Users_Min_Fields = {
  __typename?: 'discord_users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  profile_id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_snowflake?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "discord.users" */
export type Discord_Users_Mutation_Response = {
  __typename?: 'discord_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Discord_Users>;
};

/** on_conflict condition type for table "discord.users" */
export type Discord_Users_On_Conflict = {
  constraint: Discord_Users_Constraint;
  update_columns?: Array<Discord_Users_Update_Column>;
  where?: InputMaybe<Discord_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "discord.users". */
export type Discord_Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_snowflake?: InputMaybe<Order_By>;
};

/** primary key columns input for table: discord.users */
export type Discord_Users_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "discord.users" */
export enum Discord_Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserSnowflake = 'user_snowflake'
}

/** input type for updating data in table "discord.users" */
export type Discord_Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  profile_id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_snowflake?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Discord_Users_Stddev_Fields = {
  __typename?: 'discord_users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Discord_Users_Stddev_Pop_Fields = {
  __typename?: 'discord_users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Discord_Users_Stddev_Samp_Fields = {
  __typename?: 'discord_users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "discord_users" */
export type Discord_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Discord_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Discord_Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  profile_id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_snowflake?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Discord_Users_Sum_Fields = {
  __typename?: 'discord_users_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  profile_id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "discord.users" */
export enum Discord_Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserSnowflake = 'user_snowflake'
}

export type Discord_Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Discord_Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Discord_Users_Set_Input>;
  where: Discord_Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Discord_Users_Var_Pop_Fields = {
  __typename?: 'discord_users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Discord_Users_Var_Samp_Fields = {
  __typename?: 'discord_users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Discord_Users_Variance_Fields = {
  __typename?: 'discord_users_variance_fields';
  id?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** Vault Distributions */
export type Distributions = {
  __typename?: 'distributions';
  /** An array relationship */
  claims: Array<Claims>;
  /** An aggregate relationship */
  claims_aggregate: Claims_Aggregate;
  created_at: Scalars['timestamp'];
  created_by: Scalars['bigint'];
  distribution_epoch_id?: Maybe<Scalars['bigint']>;
  distribution_json: Scalars['jsonb'];
  distribution_type: Scalars['Int'];
  /** An object relationship */
  epoch: Epochs;
  epoch_id: Scalars['bigint'];
  fixed_amount: Scalars['numeric'];
  gift_amount: Scalars['numeric'];
  id: Scalars['bigint'];
  merkle_root?: Maybe<Scalars['String']>;
  /** An object relationship */
  profile: Profiles;
  total_amount: Scalars['String'];
  tx_hash?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamp'];
  /** An object relationship */
  vault: Vaults;
  vault_id: Scalars['bigint'];
  /** An array relationship */
  vault_transactions: Array<Vault_Transactions>;
  /** An aggregate relationship */
  vault_transactions_aggregate: Vault_Transactions_Aggregate;
};


/** Vault Distributions */
export type DistributionsClaimsArgs = {
  distinct_on?: InputMaybe<Array<Claims_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Claims_Order_By>>;
  where?: InputMaybe<Claims_Bool_Exp>;
};


/** Vault Distributions */
export type DistributionsClaims_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Claims_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Claims_Order_By>>;
  where?: InputMaybe<Claims_Bool_Exp>;
};


/** Vault Distributions */
export type DistributionsDistribution_JsonArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** Vault Distributions */
export type DistributionsVault_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Transactions_Order_By>>;
  where?: InputMaybe<Vault_Transactions_Bool_Exp>;
};


/** Vault Distributions */
export type DistributionsVault_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Transactions_Order_By>>;
  where?: InputMaybe<Vault_Transactions_Bool_Exp>;
};

/** aggregated selection of "distributions" */
export type Distributions_Aggregate = {
  __typename?: 'distributions_aggregate';
  aggregate?: Maybe<Distributions_Aggregate_Fields>;
  nodes: Array<Distributions>;
};

/** aggregate fields of "distributions" */
export type Distributions_Aggregate_Fields = {
  __typename?: 'distributions_aggregate_fields';
  avg?: Maybe<Distributions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Distributions_Max_Fields>;
  min?: Maybe<Distributions_Min_Fields>;
  stddev?: Maybe<Distributions_Stddev_Fields>;
  stddev_pop?: Maybe<Distributions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Distributions_Stddev_Samp_Fields>;
  sum?: Maybe<Distributions_Sum_Fields>;
  var_pop?: Maybe<Distributions_Var_Pop_Fields>;
  var_samp?: Maybe<Distributions_Var_Samp_Fields>;
  variance?: Maybe<Distributions_Variance_Fields>;
};


/** aggregate fields of "distributions" */
export type Distributions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Distributions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "distributions" */
export type Distributions_Aggregate_Order_By = {
  avg?: InputMaybe<Distributions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Distributions_Max_Order_By>;
  min?: InputMaybe<Distributions_Min_Order_By>;
  stddev?: InputMaybe<Distributions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Distributions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Distributions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Distributions_Sum_Order_By>;
  var_pop?: InputMaybe<Distributions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Distributions_Var_Samp_Order_By>;
  variance?: InputMaybe<Distributions_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Distributions_Append_Input = {
  distribution_json?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "distributions" */
export type Distributions_Arr_Rel_Insert_Input = {
  data: Array<Distributions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Distributions_On_Conflict>;
};

/** aggregate avg on columns */
export type Distributions_Avg_Fields = {
  __typename?: 'distributions_avg_fields';
  created_by?: Maybe<Scalars['Float']>;
  distribution_epoch_id?: Maybe<Scalars['Float']>;
  distribution_type?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  fixed_amount?: Maybe<Scalars['Float']>;
  gift_amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vault_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "distributions" */
export type Distributions_Avg_Order_By = {
  created_by?: InputMaybe<Order_By>;
  distribution_epoch_id?: InputMaybe<Order_By>;
  distribution_type?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  fixed_amount?: InputMaybe<Order_By>;
  gift_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "distributions". All fields are combined with a logical 'AND'. */
export type Distributions_Bool_Exp = {
  _and?: InputMaybe<Array<Distributions_Bool_Exp>>;
  _not?: InputMaybe<Distributions_Bool_Exp>;
  _or?: InputMaybe<Array<Distributions_Bool_Exp>>;
  claims?: InputMaybe<Claims_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by?: InputMaybe<Bigint_Comparison_Exp>;
  distribution_epoch_id?: InputMaybe<Bigint_Comparison_Exp>;
  distribution_json?: InputMaybe<Jsonb_Comparison_Exp>;
  distribution_type?: InputMaybe<Int_Comparison_Exp>;
  epoch?: InputMaybe<Epochs_Bool_Exp>;
  epoch_id?: InputMaybe<Bigint_Comparison_Exp>;
  fixed_amount?: InputMaybe<Numeric_Comparison_Exp>;
  gift_amount?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  merkle_root?: InputMaybe<String_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  total_amount?: InputMaybe<String_Comparison_Exp>;
  tx_hash?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  vault?: InputMaybe<Vaults_Bool_Exp>;
  vault_id?: InputMaybe<Bigint_Comparison_Exp>;
  vault_transactions?: InputMaybe<Vault_Transactions_Bool_Exp>;
};

/** unique or primary key constraints on table "distributions" */
export enum Distributions_Constraint {
  /** unique or primary key constraint on columns "id" */
  DistributionsPkey = 'distributions_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Distributions_Delete_At_Path_Input = {
  distribution_json?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Distributions_Delete_Elem_Input = {
  distribution_json?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Distributions_Delete_Key_Input = {
  distribution_json?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "distributions" */
export type Distributions_Inc_Input = {
  created_by?: InputMaybe<Scalars['bigint']>;
  distribution_epoch_id?: InputMaybe<Scalars['bigint']>;
  distribution_type?: InputMaybe<Scalars['Int']>;
  epoch_id?: InputMaybe<Scalars['bigint']>;
  fixed_amount?: InputMaybe<Scalars['numeric']>;
  gift_amount?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['bigint']>;
  vault_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "distributions" */
export type Distributions_Insert_Input = {
  claims?: InputMaybe<Claims_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  distribution_epoch_id?: InputMaybe<Scalars['bigint']>;
  distribution_json?: InputMaybe<Scalars['jsonb']>;
  distribution_type?: InputMaybe<Scalars['Int']>;
  epoch?: InputMaybe<Epochs_Obj_Rel_Insert_Input>;
  epoch_id?: InputMaybe<Scalars['bigint']>;
  fixed_amount?: InputMaybe<Scalars['numeric']>;
  gift_amount?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['bigint']>;
  merkle_root?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
  total_amount?: InputMaybe<Scalars['String']>;
  tx_hash?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  vault?: InputMaybe<Vaults_Obj_Rel_Insert_Input>;
  vault_id?: InputMaybe<Scalars['bigint']>;
  vault_transactions?: InputMaybe<Vault_Transactions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Distributions_Max_Fields = {
  __typename?: 'distributions_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  created_by?: Maybe<Scalars['bigint']>;
  distribution_epoch_id?: Maybe<Scalars['bigint']>;
  distribution_type?: Maybe<Scalars['Int']>;
  epoch_id?: Maybe<Scalars['bigint']>;
  fixed_amount?: Maybe<Scalars['numeric']>;
  gift_amount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['bigint']>;
  merkle_root?: Maybe<Scalars['String']>;
  total_amount?: Maybe<Scalars['String']>;
  tx_hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  vault_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "distributions" */
export type Distributions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  distribution_epoch_id?: InputMaybe<Order_By>;
  distribution_type?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  fixed_amount?: InputMaybe<Order_By>;
  gift_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  merkle_root?: InputMaybe<Order_By>;
  total_amount?: InputMaybe<Order_By>;
  tx_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Distributions_Min_Fields = {
  __typename?: 'distributions_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  created_by?: Maybe<Scalars['bigint']>;
  distribution_epoch_id?: Maybe<Scalars['bigint']>;
  distribution_type?: Maybe<Scalars['Int']>;
  epoch_id?: Maybe<Scalars['bigint']>;
  fixed_amount?: Maybe<Scalars['numeric']>;
  gift_amount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['bigint']>;
  merkle_root?: Maybe<Scalars['String']>;
  total_amount?: Maybe<Scalars['String']>;
  tx_hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  vault_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "distributions" */
export type Distributions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  distribution_epoch_id?: InputMaybe<Order_By>;
  distribution_type?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  fixed_amount?: InputMaybe<Order_By>;
  gift_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  merkle_root?: InputMaybe<Order_By>;
  total_amount?: InputMaybe<Order_By>;
  tx_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "distributions" */
export type Distributions_Mutation_Response = {
  __typename?: 'distributions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Distributions>;
};

/** input type for inserting object relation for remote table "distributions" */
export type Distributions_Obj_Rel_Insert_Input = {
  data: Distributions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Distributions_On_Conflict>;
};

/** on_conflict condition type for table "distributions" */
export type Distributions_On_Conflict = {
  constraint: Distributions_Constraint;
  update_columns?: Array<Distributions_Update_Column>;
  where?: InputMaybe<Distributions_Bool_Exp>;
};

/** Ordering options when selecting data from "distributions". */
export type Distributions_Order_By = {
  claims_aggregate?: InputMaybe<Claims_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  distribution_epoch_id?: InputMaybe<Order_By>;
  distribution_json?: InputMaybe<Order_By>;
  distribution_type?: InputMaybe<Order_By>;
  epoch?: InputMaybe<Epochs_Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  fixed_amount?: InputMaybe<Order_By>;
  gift_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  merkle_root?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  total_amount?: InputMaybe<Order_By>;
  tx_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vault?: InputMaybe<Vaults_Order_By>;
  vault_id?: InputMaybe<Order_By>;
  vault_transactions_aggregate?: InputMaybe<Vault_Transactions_Aggregate_Order_By>;
};

/** primary key columns input for table: distributions */
export type Distributions_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Distributions_Prepend_Input = {
  distribution_json?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "distributions" */
export enum Distributions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DistributionEpochId = 'distribution_epoch_id',
  /** column name */
  DistributionJson = 'distribution_json',
  /** column name */
  DistributionType = 'distribution_type',
  /** column name */
  EpochId = 'epoch_id',
  /** column name */
  FixedAmount = 'fixed_amount',
  /** column name */
  GiftAmount = 'gift_amount',
  /** column name */
  Id = 'id',
  /** column name */
  MerkleRoot = 'merkle_root',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  TxHash = 'tx_hash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VaultId = 'vault_id'
}

/** input type for updating data in table "distributions" */
export type Distributions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  distribution_epoch_id?: InputMaybe<Scalars['bigint']>;
  distribution_json?: InputMaybe<Scalars['jsonb']>;
  distribution_type?: InputMaybe<Scalars['Int']>;
  epoch_id?: InputMaybe<Scalars['bigint']>;
  fixed_amount?: InputMaybe<Scalars['numeric']>;
  gift_amount?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['bigint']>;
  merkle_root?: InputMaybe<Scalars['String']>;
  total_amount?: InputMaybe<Scalars['String']>;
  tx_hash?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  vault_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Distributions_Stddev_Fields = {
  __typename?: 'distributions_stddev_fields';
  created_by?: Maybe<Scalars['Float']>;
  distribution_epoch_id?: Maybe<Scalars['Float']>;
  distribution_type?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  fixed_amount?: Maybe<Scalars['Float']>;
  gift_amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vault_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "distributions" */
export type Distributions_Stddev_Order_By = {
  created_by?: InputMaybe<Order_By>;
  distribution_epoch_id?: InputMaybe<Order_By>;
  distribution_type?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  fixed_amount?: InputMaybe<Order_By>;
  gift_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Distributions_Stddev_Pop_Fields = {
  __typename?: 'distributions_stddev_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  distribution_epoch_id?: Maybe<Scalars['Float']>;
  distribution_type?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  fixed_amount?: Maybe<Scalars['Float']>;
  gift_amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vault_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "distributions" */
export type Distributions_Stddev_Pop_Order_By = {
  created_by?: InputMaybe<Order_By>;
  distribution_epoch_id?: InputMaybe<Order_By>;
  distribution_type?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  fixed_amount?: InputMaybe<Order_By>;
  gift_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Distributions_Stddev_Samp_Fields = {
  __typename?: 'distributions_stddev_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  distribution_epoch_id?: Maybe<Scalars['Float']>;
  distribution_type?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  fixed_amount?: Maybe<Scalars['Float']>;
  gift_amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vault_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "distributions" */
export type Distributions_Stddev_Samp_Order_By = {
  created_by?: InputMaybe<Order_By>;
  distribution_epoch_id?: InputMaybe<Order_By>;
  distribution_type?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  fixed_amount?: InputMaybe<Order_By>;
  gift_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "distributions" */
export type Distributions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Distributions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Distributions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  distribution_epoch_id?: InputMaybe<Scalars['bigint']>;
  distribution_json?: InputMaybe<Scalars['jsonb']>;
  distribution_type?: InputMaybe<Scalars['Int']>;
  epoch_id?: InputMaybe<Scalars['bigint']>;
  fixed_amount?: InputMaybe<Scalars['numeric']>;
  gift_amount?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['bigint']>;
  merkle_root?: InputMaybe<Scalars['String']>;
  total_amount?: InputMaybe<Scalars['String']>;
  tx_hash?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  vault_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Distributions_Sum_Fields = {
  __typename?: 'distributions_sum_fields';
  created_by?: Maybe<Scalars['bigint']>;
  distribution_epoch_id?: Maybe<Scalars['bigint']>;
  distribution_type?: Maybe<Scalars['Int']>;
  epoch_id?: Maybe<Scalars['bigint']>;
  fixed_amount?: Maybe<Scalars['numeric']>;
  gift_amount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['bigint']>;
  vault_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "distributions" */
export type Distributions_Sum_Order_By = {
  created_by?: InputMaybe<Order_By>;
  distribution_epoch_id?: InputMaybe<Order_By>;
  distribution_type?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  fixed_amount?: InputMaybe<Order_By>;
  gift_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** update columns of table "distributions" */
export enum Distributions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DistributionEpochId = 'distribution_epoch_id',
  /** column name */
  DistributionJson = 'distribution_json',
  /** column name */
  DistributionType = 'distribution_type',
  /** column name */
  EpochId = 'epoch_id',
  /** column name */
  FixedAmount = 'fixed_amount',
  /** column name */
  GiftAmount = 'gift_amount',
  /** column name */
  Id = 'id',
  /** column name */
  MerkleRoot = 'merkle_root',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  TxHash = 'tx_hash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VaultId = 'vault_id'
}

export type Distributions_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Distributions_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Distributions_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Distributions_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Distributions_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Distributions_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Distributions_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Distributions_Set_Input>;
  where: Distributions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Distributions_Var_Pop_Fields = {
  __typename?: 'distributions_var_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  distribution_epoch_id?: Maybe<Scalars['Float']>;
  distribution_type?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  fixed_amount?: Maybe<Scalars['Float']>;
  gift_amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vault_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "distributions" */
export type Distributions_Var_Pop_Order_By = {
  created_by?: InputMaybe<Order_By>;
  distribution_epoch_id?: InputMaybe<Order_By>;
  distribution_type?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  fixed_amount?: InputMaybe<Order_By>;
  gift_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Distributions_Var_Samp_Fields = {
  __typename?: 'distributions_var_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  distribution_epoch_id?: Maybe<Scalars['Float']>;
  distribution_type?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  fixed_amount?: Maybe<Scalars['Float']>;
  gift_amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vault_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "distributions" */
export type Distributions_Var_Samp_Order_By = {
  created_by?: InputMaybe<Order_By>;
  distribution_epoch_id?: InputMaybe<Order_By>;
  distribution_type?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  fixed_amount?: InputMaybe<Order_By>;
  gift_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Distributions_Variance_Fields = {
  __typename?: 'distributions_variance_fields';
  created_by?: Maybe<Scalars['Float']>;
  distribution_epoch_id?: Maybe<Scalars['Float']>;
  distribution_type?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  fixed_amount?: Maybe<Scalars['Float']>;
  gift_amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vault_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "distributions" */
export type Distributions_Variance_Order_By = {
  created_by?: InputMaybe<Order_By>;
  distribution_epoch_id?: InputMaybe<Order_By>;
  distribution_type?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  fixed_amount?: InputMaybe<Order_By>;
  gift_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "epoches" */
export type Epochs = {
  __typename?: 'epochs';
  /** An array relationship */
  burns: Array<Burns>;
  /** An aggregate relationship */
  burns_aggregate: Burns_Aggregate;
  /** An object relationship */
  circle?: Maybe<Circles>;
  circle_id: Scalars['Int'];
  created_at: Scalars['timestamp'];
  days?: Maybe<Scalars['Int']>;
  /** An array relationship */
  distributions: Array<Distributions>;
  /** An aggregate relationship */
  distributions_aggregate: Distributions_Aggregate;
  end_date: Scalars['timestamptz'];
  ended: Scalars['Boolean'];
  /** An array relationship */
  epoch_pending_token_gifts: Array<Pending_Token_Gifts>;
  /** An aggregate relationship */
  epoch_pending_token_gifts_aggregate: Pending_Token_Gifts_Aggregate;
  grant: Scalars['numeric'];
  id: Scalars['bigint'];
  notified_before_end?: Maybe<Scalars['timestamp']>;
  notified_end?: Maybe<Scalars['timestamp']>;
  notified_start?: Maybe<Scalars['timestamp']>;
  number?: Maybe<Scalars['Int']>;
  regift_days: Scalars['Int'];
  repeat: Scalars['Int'];
  repeat_day_of_month: Scalars['Int'];
  start_date: Scalars['timestamptz'];
  /** An array relationship */
  token_gifts: Array<Token_Gifts>;
  /** An aggregate relationship */
  token_gifts_aggregate: Token_Gifts_Aggregate;
  updated_at: Scalars['timestamp'];
};


/** columns and relationships of "epoches" */
export type EpochsBurnsArgs = {
  distinct_on?: InputMaybe<Array<Burns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Burns_Order_By>>;
  where?: InputMaybe<Burns_Bool_Exp>;
};


/** columns and relationships of "epoches" */
export type EpochsBurns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Burns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Burns_Order_By>>;
  where?: InputMaybe<Burns_Bool_Exp>;
};


/** columns and relationships of "epoches" */
export type EpochsDistributionsArgs = {
  distinct_on?: InputMaybe<Array<Distributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distributions_Order_By>>;
  where?: InputMaybe<Distributions_Bool_Exp>;
};


/** columns and relationships of "epoches" */
export type EpochsDistributions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distributions_Order_By>>;
  where?: InputMaybe<Distributions_Bool_Exp>;
};


/** columns and relationships of "epoches" */
export type EpochsEpoch_Pending_Token_GiftsArgs = {
  distinct_on?: InputMaybe<Array<Pending_Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Token_Gifts_Order_By>>;
  where?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
};


/** columns and relationships of "epoches" */
export type EpochsEpoch_Pending_Token_Gifts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pending_Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Token_Gifts_Order_By>>;
  where?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
};


/** columns and relationships of "epoches" */
export type EpochsToken_GiftsArgs = {
  distinct_on?: InputMaybe<Array<Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Gifts_Order_By>>;
  where?: InputMaybe<Token_Gifts_Bool_Exp>;
};


/** columns and relationships of "epoches" */
export type EpochsToken_Gifts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Gifts_Order_By>>;
  where?: InputMaybe<Token_Gifts_Bool_Exp>;
};

/** aggregated selection of "epoches" */
export type Epochs_Aggregate = {
  __typename?: 'epochs_aggregate';
  aggregate?: Maybe<Epochs_Aggregate_Fields>;
  nodes: Array<Epochs>;
};

/** aggregate fields of "epoches" */
export type Epochs_Aggregate_Fields = {
  __typename?: 'epochs_aggregate_fields';
  avg?: Maybe<Epochs_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Epochs_Max_Fields>;
  min?: Maybe<Epochs_Min_Fields>;
  stddev?: Maybe<Epochs_Stddev_Fields>;
  stddev_pop?: Maybe<Epochs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Epochs_Stddev_Samp_Fields>;
  sum?: Maybe<Epochs_Sum_Fields>;
  var_pop?: Maybe<Epochs_Var_Pop_Fields>;
  var_samp?: Maybe<Epochs_Var_Samp_Fields>;
  variance?: Maybe<Epochs_Variance_Fields>;
};


/** aggregate fields of "epoches" */
export type Epochs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Epochs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "epoches" */
export type Epochs_Aggregate_Order_By = {
  avg?: InputMaybe<Epochs_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Epochs_Max_Order_By>;
  min?: InputMaybe<Epochs_Min_Order_By>;
  stddev?: InputMaybe<Epochs_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Epochs_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Epochs_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Epochs_Sum_Order_By>;
  var_pop?: InputMaybe<Epochs_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Epochs_Var_Samp_Order_By>;
  variance?: InputMaybe<Epochs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "epoches" */
export type Epochs_Arr_Rel_Insert_Input = {
  data: Array<Epochs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Epochs_On_Conflict>;
};

/** aggregate avg on columns */
export type Epochs_Avg_Fields = {
  __typename?: 'epochs_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  days?: Maybe<Scalars['Float']>;
  grant?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  regift_days?: Maybe<Scalars['Float']>;
  repeat?: Maybe<Scalars['Float']>;
  repeat_day_of_month?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "epoches" */
export type Epochs_Avg_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  days?: InputMaybe<Order_By>;
  grant?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  regift_days?: InputMaybe<Order_By>;
  repeat?: InputMaybe<Order_By>;
  repeat_day_of_month?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "epoches". All fields are combined with a logical 'AND'. */
export type Epochs_Bool_Exp = {
  _and?: InputMaybe<Array<Epochs_Bool_Exp>>;
  _not?: InputMaybe<Epochs_Bool_Exp>;
  _or?: InputMaybe<Array<Epochs_Bool_Exp>>;
  burns?: InputMaybe<Burns_Bool_Exp>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  days?: InputMaybe<Int_Comparison_Exp>;
  distributions?: InputMaybe<Distributions_Bool_Exp>;
  end_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  ended?: InputMaybe<Boolean_Comparison_Exp>;
  epoch_pending_token_gifts?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
  grant?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  notified_before_end?: InputMaybe<Timestamp_Comparison_Exp>;
  notified_end?: InputMaybe<Timestamp_Comparison_Exp>;
  notified_start?: InputMaybe<Timestamp_Comparison_Exp>;
  number?: InputMaybe<Int_Comparison_Exp>;
  regift_days?: InputMaybe<Int_Comparison_Exp>;
  repeat?: InputMaybe<Int_Comparison_Exp>;
  repeat_day_of_month?: InputMaybe<Int_Comparison_Exp>;
  start_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  token_gifts?: InputMaybe<Token_Gifts_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "epoches" */
export enum Epochs_Constraint {
  /** unique or primary key constraint on columns "id" */
  EpochesPkey = 'epoches_pkey'
}

/** input type for incrementing numeric columns in table "epoches" */
export type Epochs_Inc_Input = {
  circle_id?: InputMaybe<Scalars['Int']>;
  days?: InputMaybe<Scalars['Int']>;
  grant?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['bigint']>;
  number?: InputMaybe<Scalars['Int']>;
  regift_days?: InputMaybe<Scalars['Int']>;
  repeat?: InputMaybe<Scalars['Int']>;
  repeat_day_of_month?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "epoches" */
export type Epochs_Insert_Input = {
  burns?: InputMaybe<Burns_Arr_Rel_Insert_Input>;
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  days?: InputMaybe<Scalars['Int']>;
  distributions?: InputMaybe<Distributions_Arr_Rel_Insert_Input>;
  end_date?: InputMaybe<Scalars['timestamptz']>;
  ended?: InputMaybe<Scalars['Boolean']>;
  epoch_pending_token_gifts?: InputMaybe<Pending_Token_Gifts_Arr_Rel_Insert_Input>;
  grant?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['bigint']>;
  notified_before_end?: InputMaybe<Scalars['timestamp']>;
  notified_end?: InputMaybe<Scalars['timestamp']>;
  notified_start?: InputMaybe<Scalars['timestamp']>;
  number?: InputMaybe<Scalars['Int']>;
  regift_days?: InputMaybe<Scalars['Int']>;
  repeat?: InputMaybe<Scalars['Int']>;
  repeat_day_of_month?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['timestamptz']>;
  token_gifts?: InputMaybe<Token_Gifts_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Epochs_Max_Fields = {
  __typename?: 'epochs_max_fields';
  circle_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  days?: Maybe<Scalars['Int']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  grant?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['bigint']>;
  notified_before_end?: Maybe<Scalars['timestamp']>;
  notified_end?: Maybe<Scalars['timestamp']>;
  notified_start?: Maybe<Scalars['timestamp']>;
  number?: Maybe<Scalars['Int']>;
  regift_days?: Maybe<Scalars['Int']>;
  repeat?: Maybe<Scalars['Int']>;
  repeat_day_of_month?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "epoches" */
export type Epochs_Max_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  days?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  grant?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notified_before_end?: InputMaybe<Order_By>;
  notified_end?: InputMaybe<Order_By>;
  notified_start?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  regift_days?: InputMaybe<Order_By>;
  repeat?: InputMaybe<Order_By>;
  repeat_day_of_month?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Epochs_Min_Fields = {
  __typename?: 'epochs_min_fields';
  circle_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  days?: Maybe<Scalars['Int']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  grant?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['bigint']>;
  notified_before_end?: Maybe<Scalars['timestamp']>;
  notified_end?: Maybe<Scalars['timestamp']>;
  notified_start?: Maybe<Scalars['timestamp']>;
  number?: Maybe<Scalars['Int']>;
  regift_days?: Maybe<Scalars['Int']>;
  repeat?: Maybe<Scalars['Int']>;
  repeat_day_of_month?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "epoches" */
export type Epochs_Min_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  days?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  grant?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notified_before_end?: InputMaybe<Order_By>;
  notified_end?: InputMaybe<Order_By>;
  notified_start?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  regift_days?: InputMaybe<Order_By>;
  repeat?: InputMaybe<Order_By>;
  repeat_day_of_month?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "epoches" */
export type Epochs_Mutation_Response = {
  __typename?: 'epochs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Epochs>;
};

/** input type for inserting object relation for remote table "epoches" */
export type Epochs_Obj_Rel_Insert_Input = {
  data: Epochs_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Epochs_On_Conflict>;
};

/** on_conflict condition type for table "epoches" */
export type Epochs_On_Conflict = {
  constraint: Epochs_Constraint;
  update_columns?: Array<Epochs_Update_Column>;
  where?: InputMaybe<Epochs_Bool_Exp>;
};

/** Ordering options when selecting data from "epoches". */
export type Epochs_Order_By = {
  burns_aggregate?: InputMaybe<Burns_Aggregate_Order_By>;
  circle?: InputMaybe<Circles_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  days?: InputMaybe<Order_By>;
  distributions_aggregate?: InputMaybe<Distributions_Aggregate_Order_By>;
  end_date?: InputMaybe<Order_By>;
  ended?: InputMaybe<Order_By>;
  epoch_pending_token_gifts_aggregate?: InputMaybe<Pending_Token_Gifts_Aggregate_Order_By>;
  grant?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notified_before_end?: InputMaybe<Order_By>;
  notified_end?: InputMaybe<Order_By>;
  notified_start?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  regift_days?: InputMaybe<Order_By>;
  repeat?: InputMaybe<Order_By>;
  repeat_day_of_month?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  token_gifts_aggregate?: InputMaybe<Token_Gifts_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: epoches */
export type Epochs_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "epoches" */
export enum Epochs_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Days = 'days',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Ended = 'ended',
  /** column name */
  Grant = 'grant',
  /** column name */
  Id = 'id',
  /** column name */
  NotifiedBeforeEnd = 'notified_before_end',
  /** column name */
  NotifiedEnd = 'notified_end',
  /** column name */
  NotifiedStart = 'notified_start',
  /** column name */
  Number = 'number',
  /** column name */
  RegiftDays = 'regift_days',
  /** column name */
  Repeat = 'repeat',
  /** column name */
  RepeatDayOfMonth = 'repeat_day_of_month',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "epoches" */
export type Epochs_Set_Input = {
  circle_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  days?: InputMaybe<Scalars['Int']>;
  end_date?: InputMaybe<Scalars['timestamptz']>;
  ended?: InputMaybe<Scalars['Boolean']>;
  grant?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['bigint']>;
  notified_before_end?: InputMaybe<Scalars['timestamp']>;
  notified_end?: InputMaybe<Scalars['timestamp']>;
  notified_start?: InputMaybe<Scalars['timestamp']>;
  number?: InputMaybe<Scalars['Int']>;
  regift_days?: InputMaybe<Scalars['Int']>;
  repeat?: InputMaybe<Scalars['Int']>;
  repeat_day_of_month?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Epochs_Stddev_Fields = {
  __typename?: 'epochs_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  days?: Maybe<Scalars['Float']>;
  grant?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  regift_days?: Maybe<Scalars['Float']>;
  repeat?: Maybe<Scalars['Float']>;
  repeat_day_of_month?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "epoches" */
export type Epochs_Stddev_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  days?: InputMaybe<Order_By>;
  grant?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  regift_days?: InputMaybe<Order_By>;
  repeat?: InputMaybe<Order_By>;
  repeat_day_of_month?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Epochs_Stddev_Pop_Fields = {
  __typename?: 'epochs_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  days?: Maybe<Scalars['Float']>;
  grant?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  regift_days?: Maybe<Scalars['Float']>;
  repeat?: Maybe<Scalars['Float']>;
  repeat_day_of_month?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "epoches" */
export type Epochs_Stddev_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  days?: InputMaybe<Order_By>;
  grant?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  regift_days?: InputMaybe<Order_By>;
  repeat?: InputMaybe<Order_By>;
  repeat_day_of_month?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Epochs_Stddev_Samp_Fields = {
  __typename?: 'epochs_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  days?: Maybe<Scalars['Float']>;
  grant?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  regift_days?: Maybe<Scalars['Float']>;
  repeat?: Maybe<Scalars['Float']>;
  repeat_day_of_month?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "epoches" */
export type Epochs_Stddev_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  days?: InputMaybe<Order_By>;
  grant?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  regift_days?: InputMaybe<Order_By>;
  repeat?: InputMaybe<Order_By>;
  repeat_day_of_month?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "epochs" */
export type Epochs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Epochs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Epochs_Stream_Cursor_Value_Input = {
  circle_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  days?: InputMaybe<Scalars['Int']>;
  end_date?: InputMaybe<Scalars['timestamptz']>;
  ended?: InputMaybe<Scalars['Boolean']>;
  grant?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['bigint']>;
  notified_before_end?: InputMaybe<Scalars['timestamp']>;
  notified_end?: InputMaybe<Scalars['timestamp']>;
  notified_start?: InputMaybe<Scalars['timestamp']>;
  number?: InputMaybe<Scalars['Int']>;
  regift_days?: InputMaybe<Scalars['Int']>;
  repeat?: InputMaybe<Scalars['Int']>;
  repeat_day_of_month?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Epochs_Sum_Fields = {
  __typename?: 'epochs_sum_fields';
  circle_id?: Maybe<Scalars['Int']>;
  days?: Maybe<Scalars['Int']>;
  grant?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['bigint']>;
  number?: Maybe<Scalars['Int']>;
  regift_days?: Maybe<Scalars['Int']>;
  repeat?: Maybe<Scalars['Int']>;
  repeat_day_of_month?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "epoches" */
export type Epochs_Sum_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  days?: InputMaybe<Order_By>;
  grant?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  regift_days?: InputMaybe<Order_By>;
  repeat?: InputMaybe<Order_By>;
  repeat_day_of_month?: InputMaybe<Order_By>;
};

/** update columns of table "epoches" */
export enum Epochs_Update_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Days = 'days',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Ended = 'ended',
  /** column name */
  Grant = 'grant',
  /** column name */
  Id = 'id',
  /** column name */
  NotifiedBeforeEnd = 'notified_before_end',
  /** column name */
  NotifiedEnd = 'notified_end',
  /** column name */
  NotifiedStart = 'notified_start',
  /** column name */
  Number = 'number',
  /** column name */
  RegiftDays = 'regift_days',
  /** column name */
  Repeat = 'repeat',
  /** column name */
  RepeatDayOfMonth = 'repeat_day_of_month',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Epochs_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Epochs_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Epochs_Set_Input>;
  where: Epochs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Epochs_Var_Pop_Fields = {
  __typename?: 'epochs_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  days?: Maybe<Scalars['Float']>;
  grant?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  regift_days?: Maybe<Scalars['Float']>;
  repeat?: Maybe<Scalars['Float']>;
  repeat_day_of_month?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "epoches" */
export type Epochs_Var_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  days?: InputMaybe<Order_By>;
  grant?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  regift_days?: InputMaybe<Order_By>;
  repeat?: InputMaybe<Order_By>;
  repeat_day_of_month?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Epochs_Var_Samp_Fields = {
  __typename?: 'epochs_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  days?: Maybe<Scalars['Float']>;
  grant?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  regift_days?: Maybe<Scalars['Float']>;
  repeat?: Maybe<Scalars['Float']>;
  repeat_day_of_month?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "epoches" */
export type Epochs_Var_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  days?: InputMaybe<Order_By>;
  grant?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  regift_days?: InputMaybe<Order_By>;
  repeat?: InputMaybe<Order_By>;
  repeat_day_of_month?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Epochs_Variance_Fields = {
  __typename?: 'epochs_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  days?: Maybe<Scalars['Float']>;
  grant?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  regift_days?: Maybe<Scalars['Float']>;
  repeat?: Maybe<Scalars['Float']>;
  repeat_day_of_month?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "epoches" */
export type Epochs_Variance_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  days?: InputMaybe<Order_By>;
  grant?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  regift_days?: InputMaybe<Order_By>;
  repeat?: InputMaybe<Order_By>;
  repeat_day_of_month?: InputMaybe<Order_By>;
};

/** columns and relationships of "gift_private" */
export type Gift_Private = {
  __typename?: 'gift_private';
  gift_id?: Maybe<Scalars['bigint']>;
  note?: Maybe<Scalars['String']>;
  /** An object relationship */
  recipient?: Maybe<Users>;
  recipient_id?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  sender?: Maybe<Users>;
  sender_id?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "gift_private" */
export type Gift_Private_Aggregate = {
  __typename?: 'gift_private_aggregate';
  aggregate?: Maybe<Gift_Private_Aggregate_Fields>;
  nodes: Array<Gift_Private>;
};

/** aggregate fields of "gift_private" */
export type Gift_Private_Aggregate_Fields = {
  __typename?: 'gift_private_aggregate_fields';
  avg?: Maybe<Gift_Private_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Gift_Private_Max_Fields>;
  min?: Maybe<Gift_Private_Min_Fields>;
  stddev?: Maybe<Gift_Private_Stddev_Fields>;
  stddev_pop?: Maybe<Gift_Private_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gift_Private_Stddev_Samp_Fields>;
  sum?: Maybe<Gift_Private_Sum_Fields>;
  var_pop?: Maybe<Gift_Private_Var_Pop_Fields>;
  var_samp?: Maybe<Gift_Private_Var_Samp_Fields>;
  variance?: Maybe<Gift_Private_Variance_Fields>;
};


/** aggregate fields of "gift_private" */
export type Gift_Private_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gift_Private_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Gift_Private_Avg_Fields = {
  __typename?: 'gift_private_avg_fields';
  gift_id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "gift_private". All fields are combined with a logical 'AND'. */
export type Gift_Private_Bool_Exp = {
  _and?: InputMaybe<Array<Gift_Private_Bool_Exp>>;
  _not?: InputMaybe<Gift_Private_Bool_Exp>;
  _or?: InputMaybe<Array<Gift_Private_Bool_Exp>>;
  gift_id?: InputMaybe<Bigint_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  recipient?: InputMaybe<Users_Bool_Exp>;
  recipient_id?: InputMaybe<Bigint_Comparison_Exp>;
  sender?: InputMaybe<Users_Bool_Exp>;
  sender_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "gift_private" */
export type Gift_Private_Inc_Input = {
  gift_id?: InputMaybe<Scalars['bigint']>;
  recipient_id?: InputMaybe<Scalars['bigint']>;
  sender_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "gift_private" */
export type Gift_Private_Insert_Input = {
  gift_id?: InputMaybe<Scalars['bigint']>;
  note?: InputMaybe<Scalars['String']>;
  recipient?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  recipient_id?: InputMaybe<Scalars['bigint']>;
  sender?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  sender_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Gift_Private_Max_Fields = {
  __typename?: 'gift_private_max_fields';
  gift_id?: Maybe<Scalars['bigint']>;
  note?: Maybe<Scalars['String']>;
  recipient_id?: Maybe<Scalars['bigint']>;
  sender_id?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Gift_Private_Min_Fields = {
  __typename?: 'gift_private_min_fields';
  gift_id?: Maybe<Scalars['bigint']>;
  note?: Maybe<Scalars['String']>;
  recipient_id?: Maybe<Scalars['bigint']>;
  sender_id?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "gift_private" */
export type Gift_Private_Mutation_Response = {
  __typename?: 'gift_private_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gift_Private>;
};

/** input type for inserting object relation for remote table "gift_private" */
export type Gift_Private_Obj_Rel_Insert_Input = {
  data: Gift_Private_Insert_Input;
};

/** Ordering options when selecting data from "gift_private". */
export type Gift_Private_Order_By = {
  gift_id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  recipient?: InputMaybe<Users_Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Users_Order_By>;
  sender_id?: InputMaybe<Order_By>;
};

/** select columns of table "gift_private" */
export enum Gift_Private_Select_Column {
  /** column name */
  GiftId = 'gift_id',
  /** column name */
  Note = 'note',
  /** column name */
  RecipientId = 'recipient_id',
  /** column name */
  SenderId = 'sender_id'
}

/** input type for updating data in table "gift_private" */
export type Gift_Private_Set_Input = {
  gift_id?: InputMaybe<Scalars['bigint']>;
  note?: InputMaybe<Scalars['String']>;
  recipient_id?: InputMaybe<Scalars['bigint']>;
  sender_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Gift_Private_Stddev_Fields = {
  __typename?: 'gift_private_stddev_fields';
  gift_id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Gift_Private_Stddev_Pop_Fields = {
  __typename?: 'gift_private_stddev_pop_fields';
  gift_id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Gift_Private_Stddev_Samp_Fields = {
  __typename?: 'gift_private_stddev_samp_fields';
  gift_id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "gift_private" */
export type Gift_Private_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Gift_Private_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gift_Private_Stream_Cursor_Value_Input = {
  gift_id?: InputMaybe<Scalars['bigint']>;
  note?: InputMaybe<Scalars['String']>;
  recipient_id?: InputMaybe<Scalars['bigint']>;
  sender_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Gift_Private_Sum_Fields = {
  __typename?: 'gift_private_sum_fields';
  gift_id?: Maybe<Scalars['bigint']>;
  recipient_id?: Maybe<Scalars['bigint']>;
  sender_id?: Maybe<Scalars['bigint']>;
};

export type Gift_Private_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Gift_Private_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Gift_Private_Set_Input>;
  where: Gift_Private_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Gift_Private_Var_Pop_Fields = {
  __typename?: 'gift_private_var_pop_fields';
  gift_id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Gift_Private_Var_Samp_Fields = {
  __typename?: 'gift_private_var_samp_fields';
  gift_id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Gift_Private_Variance_Fields = {
  __typename?: 'gift_private_variance_fields';
  gift_id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "histories" */
export type Histories = {
  __typename?: 'histories';
  bio?: Maybe<Scalars['String']>;
  /** An object relationship */
  circle?: Maybe<Circles>;
  circle_id: Scalars['Int'];
  created_at: Scalars['timestamp'];
  /** An object relationship */
  epoch?: Maybe<Epochs>;
  epoch_id: Scalars['Int'];
  id: Scalars['bigint'];
  updated_at: Scalars['timestamp'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id: Scalars['Int'];
};

/** aggregated selection of "histories" */
export type Histories_Aggregate = {
  __typename?: 'histories_aggregate';
  aggregate?: Maybe<Histories_Aggregate_Fields>;
  nodes: Array<Histories>;
};

/** aggregate fields of "histories" */
export type Histories_Aggregate_Fields = {
  __typename?: 'histories_aggregate_fields';
  avg?: Maybe<Histories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Histories_Max_Fields>;
  min?: Maybe<Histories_Min_Fields>;
  stddev?: Maybe<Histories_Stddev_Fields>;
  stddev_pop?: Maybe<Histories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Histories_Stddev_Samp_Fields>;
  sum?: Maybe<Histories_Sum_Fields>;
  var_pop?: Maybe<Histories_Var_Pop_Fields>;
  var_samp?: Maybe<Histories_Var_Samp_Fields>;
  variance?: Maybe<Histories_Variance_Fields>;
};


/** aggregate fields of "histories" */
export type Histories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Histories_Avg_Fields = {
  __typename?: 'histories_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "histories". All fields are combined with a logical 'AND'. */
export type Histories_Bool_Exp = {
  _and?: InputMaybe<Array<Histories_Bool_Exp>>;
  _not?: InputMaybe<Histories_Bool_Exp>;
  _or?: InputMaybe<Array<Histories_Bool_Exp>>;
  bio?: InputMaybe<String_Comparison_Exp>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  epoch?: InputMaybe<Epochs_Bool_Exp>;
  epoch_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "histories" */
export enum Histories_Constraint {
  /** unique or primary key constraint on columns "id" */
  HistoriesPkey = 'histories_pkey'
}

/** input type for incrementing numeric columns in table "histories" */
export type Histories_Inc_Input = {
  circle_id?: InputMaybe<Scalars['Int']>;
  epoch_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "histories" */
export type Histories_Insert_Input = {
  bio?: InputMaybe<Scalars['String']>;
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  epoch?: InputMaybe<Epochs_Obj_Rel_Insert_Input>;
  epoch_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Histories_Max_Fields = {
  __typename?: 'histories_max_fields';
  bio?: Maybe<Scalars['String']>;
  circle_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  epoch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Histories_Min_Fields = {
  __typename?: 'histories_min_fields';
  bio?: Maybe<Scalars['String']>;
  circle_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  epoch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "histories" */
export type Histories_Mutation_Response = {
  __typename?: 'histories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Histories>;
};

/** on_conflict condition type for table "histories" */
export type Histories_On_Conflict = {
  constraint: Histories_Constraint;
  update_columns?: Array<Histories_Update_Column>;
  where?: InputMaybe<Histories_Bool_Exp>;
};

/** Ordering options when selecting data from "histories". */
export type Histories_Order_By = {
  bio?: InputMaybe<Order_By>;
  circle?: InputMaybe<Circles_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  epoch?: InputMaybe<Epochs_Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: histories */
export type Histories_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "histories" */
export enum Histories_Select_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EpochId = 'epoch_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "histories" */
export type Histories_Set_Input = {
  bio?: InputMaybe<Scalars['String']>;
  circle_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  epoch_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Histories_Stddev_Fields = {
  __typename?: 'histories_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Histories_Stddev_Pop_Fields = {
  __typename?: 'histories_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Histories_Stddev_Samp_Fields = {
  __typename?: 'histories_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "histories" */
export type Histories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Histories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Histories_Stream_Cursor_Value_Input = {
  bio?: InputMaybe<Scalars['String']>;
  circle_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  epoch_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Histories_Sum_Fields = {
  __typename?: 'histories_sum_fields';
  circle_id?: Maybe<Scalars['Int']>;
  epoch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "histories" */
export enum Histories_Update_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EpochId = 'epoch_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Histories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Histories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Histories_Set_Input>;
  where: Histories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Histories_Var_Pop_Fields = {
  __typename?: 'histories_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Histories_Var_Samp_Fields = {
  __typename?: 'histories_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Histories_Variance_Fields = {
  __typename?: 'histories_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "interaction_events" */
export type Interaction_Events = {
  __typename?: 'interaction_events';
  /** An object relationship */
  circle?: Maybe<Circles>;
  circle_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  data?: Maybe<Scalars['jsonb']>;
  event_subtype?: Maybe<Scalars['String']>;
  event_type: Scalars['String'];
  id: Scalars['Int'];
  org_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  organization?: Maybe<Organizations>;
  /** An object relationship */
  profile?: Maybe<Profiles>;
  profile_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "interaction_events" */
export type Interaction_EventsDataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "interaction_events" */
export type Interaction_Events_Aggregate = {
  __typename?: 'interaction_events_aggregate';
  aggregate?: Maybe<Interaction_Events_Aggregate_Fields>;
  nodes: Array<Interaction_Events>;
};

/** aggregate fields of "interaction_events" */
export type Interaction_Events_Aggregate_Fields = {
  __typename?: 'interaction_events_aggregate_fields';
  avg?: Maybe<Interaction_Events_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Interaction_Events_Max_Fields>;
  min?: Maybe<Interaction_Events_Min_Fields>;
  stddev?: Maybe<Interaction_Events_Stddev_Fields>;
  stddev_pop?: Maybe<Interaction_Events_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Interaction_Events_Stddev_Samp_Fields>;
  sum?: Maybe<Interaction_Events_Sum_Fields>;
  var_pop?: Maybe<Interaction_Events_Var_Pop_Fields>;
  var_samp?: Maybe<Interaction_Events_Var_Samp_Fields>;
  variance?: Maybe<Interaction_Events_Variance_Fields>;
};


/** aggregate fields of "interaction_events" */
export type Interaction_Events_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Interaction_Events_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Interaction_Events_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Interaction_Events_Avg_Fields = {
  __typename?: 'interaction_events_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "interaction_events". All fields are combined with a logical 'AND'. */
export type Interaction_Events_Bool_Exp = {
  _and?: InputMaybe<Array<Interaction_Events_Bool_Exp>>;
  _not?: InputMaybe<Interaction_Events_Bool_Exp>;
  _or?: InputMaybe<Array<Interaction_Events_Bool_Exp>>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  event_subtype?: InputMaybe<String_Comparison_Exp>;
  event_type?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  org_id?: InputMaybe<Int_Comparison_Exp>;
  organization?: InputMaybe<Organizations_Bool_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  profile_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "interaction_events" */
export enum Interaction_Events_Constraint {
  /** unique or primary key constraint on columns "id" */
  InteractionEventsPkey = 'interaction_events_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Interaction_Events_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Interaction_Events_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Interaction_Events_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "interaction_events" */
export type Interaction_Events_Inc_Input = {
  circle_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  org_id?: InputMaybe<Scalars['Int']>;
  profile_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "interaction_events" */
export type Interaction_Events_Insert_Input = {
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['jsonb']>;
  event_subtype?: InputMaybe<Scalars['String']>;
  event_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  org_id?: InputMaybe<Scalars['Int']>;
  organization?: InputMaybe<Organizations_Obj_Rel_Insert_Input>;
  profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
  profile_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Interaction_Events_Max_Fields = {
  __typename?: 'interaction_events_max_fields';
  circle_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_subtype?: Maybe<Scalars['String']>;
  event_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  org_id?: Maybe<Scalars['Int']>;
  profile_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Interaction_Events_Min_Fields = {
  __typename?: 'interaction_events_min_fields';
  circle_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_subtype?: Maybe<Scalars['String']>;
  event_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  org_id?: Maybe<Scalars['Int']>;
  profile_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "interaction_events" */
export type Interaction_Events_Mutation_Response = {
  __typename?: 'interaction_events_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Interaction_Events>;
};

/** on_conflict condition type for table "interaction_events" */
export type Interaction_Events_On_Conflict = {
  constraint: Interaction_Events_Constraint;
  update_columns?: Array<Interaction_Events_Update_Column>;
  where?: InputMaybe<Interaction_Events_Bool_Exp>;
};

/** Ordering options when selecting data from "interaction_events". */
export type Interaction_Events_Order_By = {
  circle?: InputMaybe<Circles_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  event_subtype?: InputMaybe<Order_By>;
  event_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organizations_Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: interaction_events */
export type Interaction_Events_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Interaction_Events_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "interaction_events" */
export enum Interaction_Events_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  EventSubtype = 'event_subtype',
  /** column name */
  EventType = 'event_type',
  /** column name */
  Id = 'id',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "interaction_events" */
export type Interaction_Events_Set_Input = {
  circle_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['jsonb']>;
  event_subtype?: InputMaybe<Scalars['String']>;
  event_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  org_id?: InputMaybe<Scalars['Int']>;
  profile_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Interaction_Events_Stddev_Fields = {
  __typename?: 'interaction_events_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Interaction_Events_Stddev_Pop_Fields = {
  __typename?: 'interaction_events_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Interaction_Events_Stddev_Samp_Fields = {
  __typename?: 'interaction_events_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "interaction_events" */
export type Interaction_Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Interaction_Events_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Interaction_Events_Stream_Cursor_Value_Input = {
  circle_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['jsonb']>;
  event_subtype?: InputMaybe<Scalars['String']>;
  event_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  org_id?: InputMaybe<Scalars['Int']>;
  profile_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Interaction_Events_Sum_Fields = {
  __typename?: 'interaction_events_sum_fields';
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  org_id?: Maybe<Scalars['Int']>;
  profile_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "interaction_events" */
export enum Interaction_Events_Update_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  EventSubtype = 'event_subtype',
  /** column name */
  EventType = 'event_type',
  /** column name */
  Id = 'id',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Interaction_Events_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Interaction_Events_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Interaction_Events_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Interaction_Events_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Interaction_Events_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Interaction_Events_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Interaction_Events_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Interaction_Events_Set_Input>;
  where: Interaction_Events_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Interaction_Events_Var_Pop_Fields = {
  __typename?: 'interaction_events_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Interaction_Events_Var_Samp_Fields = {
  __typename?: 'interaction_events_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Interaction_Events_Variance_Fields = {
  __typename?: 'interaction_events_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
  profile_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']>;
  _gt?: InputMaybe<Scalars['json']>;
  _gte?: InputMaybe<Scalars['json']>;
  _in?: InputMaybe<Array<Scalars['json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['json']>;
  _lte?: InputMaybe<Scalars['json']>;
  _neq?: InputMaybe<Scalars['json']>;
  _nin?: InputMaybe<Array<Scalars['json']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  adminUpdateUser?: Maybe<UserResponse>;
  allocationCsv?: Maybe<AllocationCsvResponse>;
  createCircle?: Maybe<CreateCircleResponse>;
  createEpoch?: Maybe<EpochResponse>;
  createNominee?: Maybe<CreateNomineeResponse>;
  createUser?: Maybe<UserResponse>;
  createUserWithToken?: Maybe<UserResponse>;
  createUsers?: Maybe<Array<Maybe<UserResponse>>>;
  createVault?: Maybe<VaultResponse>;
  /** Log offchain information for vault transactions */
  createVaultTx?: Maybe<LogVaultTxResponse>;
  deleteCircle?: Maybe<ConfirmationResponse>;
  deleteContribution?: Maybe<ConfirmationResponse>;
  deleteEpoch?: Maybe<DeleteEpochResponse>;
  deleteUser?: Maybe<ConfirmationResponse>;
  /** delete data from the table: "burns" */
  delete_burns?: Maybe<Burns_Mutation_Response>;
  /** delete single row from the table: "burns" */
  delete_burns_by_pk?: Maybe<Burns>;
  /** delete data from the table: "circle_api_keys" */
  delete_circle_api_keys?: Maybe<Circle_Api_Keys_Mutation_Response>;
  /** delete single row from the table: "circle_api_keys" */
  delete_circle_api_keys_by_pk?: Maybe<Circle_Api_Keys>;
  /** delete data from the table: "circle_integrations" */
  delete_circle_integrations?: Maybe<Circle_Integrations_Mutation_Response>;
  /** delete single row from the table: "circle_integrations" */
  delete_circle_integrations_by_pk?: Maybe<Circle_Integrations>;
  /** delete data from the table: "circle_metadata" */
  delete_circle_metadata?: Maybe<Circle_Metadata_Mutation_Response>;
  /** delete single row from the table: "circle_metadata" */
  delete_circle_metadata_by_pk?: Maybe<Circle_Metadata>;
  /** delete data from the table: "circle_private" */
  delete_circle_private?: Maybe<Circle_Private_Mutation_Response>;
  /** delete data from the table: "circle_share_tokens" */
  delete_circle_share_tokens?: Maybe<Circle_Share_Tokens_Mutation_Response>;
  /** delete single row from the table: "circle_share_tokens" */
  delete_circle_share_tokens_by_pk?: Maybe<Circle_Share_Tokens>;
  /** delete data from the table: "circles" */
  delete_circles?: Maybe<Circles_Mutation_Response>;
  /** delete single row from the table: "circles" */
  delete_circles_by_pk?: Maybe<Circles>;
  /** delete data from the table: "claims" */
  delete_claims?: Maybe<Claims_Mutation_Response>;
  /** delete single row from the table: "claims" */
  delete_claims_by_pk?: Maybe<Claims>;
  /** delete data from the table: "contributions" */
  delete_contributions?: Maybe<Contributions_Mutation_Response>;
  /** delete single row from the table: "contributions" */
  delete_contributions_by_pk?: Maybe<Contributions>;
  /** delete data from the table: "discord.roles_circles" */
  delete_discord_roles_circles?: Maybe<Discord_Roles_Circles_Mutation_Response>;
  /** delete single row from the table: "discord.roles_circles" */
  delete_discord_roles_circles_by_pk?: Maybe<Discord_Roles_Circles>;
  /** delete data from the table: "discord.users" */
  delete_discord_users?: Maybe<Discord_Users_Mutation_Response>;
  /** delete single row from the table: "discord.users" */
  delete_discord_users_by_pk?: Maybe<Discord_Users>;
  /** delete data from the table: "distributions" */
  delete_distributions?: Maybe<Distributions_Mutation_Response>;
  /** delete single row from the table: "distributions" */
  delete_distributions_by_pk?: Maybe<Distributions>;
  /** delete data from the table: "epoches" */
  delete_epochs?: Maybe<Epochs_Mutation_Response>;
  /** delete single row from the table: "epoches" */
  delete_epochs_by_pk?: Maybe<Epochs>;
  /** delete data from the table: "gift_private" */
  delete_gift_private?: Maybe<Gift_Private_Mutation_Response>;
  /** delete data from the table: "histories" */
  delete_histories?: Maybe<Histories_Mutation_Response>;
  /** delete single row from the table: "histories" */
  delete_histories_by_pk?: Maybe<Histories>;
  /** delete data from the table: "interaction_events" */
  delete_interaction_events?: Maybe<Interaction_Events_Mutation_Response>;
  /** delete single row from the table: "interaction_events" */
  delete_interaction_events_by_pk?: Maybe<Interaction_Events>;
  /** delete data from the table: "nominees" */
  delete_nominees?: Maybe<Nominees_Mutation_Response>;
  /** delete single row from the table: "nominees" */
  delete_nominees_by_pk?: Maybe<Nominees>;
  /** delete data from the table: "organizations" */
  delete_organizations?: Maybe<Organizations_Mutation_Response>;
  /** delete single row from the table: "organizations" */
  delete_organizations_by_pk?: Maybe<Organizations>;
  /** delete data from the table: "pending_gift_private" */
  delete_pending_gift_private?: Maybe<Pending_Gift_Private_Mutation_Response>;
  /** delete data from the table: "pending_token_gifts" */
  delete_pending_token_gifts?: Maybe<Pending_Token_Gifts_Mutation_Response>;
  /** delete single row from the table: "pending_token_gifts" */
  delete_pending_token_gifts_by_pk?: Maybe<Pending_Token_Gifts>;
  /** delete data from the table: "pending_vault_transactions" */
  delete_pending_vault_transactions?: Maybe<Pending_Vault_Transactions_Mutation_Response>;
  /** delete single row from the table: "pending_vault_transactions" */
  delete_pending_vault_transactions_by_pk?: Maybe<Pending_Vault_Transactions>;
  /** delete data from the table: "personal_access_tokens" */
  delete_personal_access_tokens?: Maybe<Personal_Access_Tokens_Mutation_Response>;
  /** delete single row from the table: "personal_access_tokens" */
  delete_personal_access_tokens_by_pk?: Maybe<Personal_Access_Tokens>;
  /** delete data from the table: "profiles" */
  delete_profiles?: Maybe<Profiles_Mutation_Response>;
  /** delete single row from the table: "profiles" */
  delete_profiles_by_pk?: Maybe<Profiles>;
  /** delete data from the table: "teammates" */
  delete_teammates?: Maybe<Teammates_Mutation_Response>;
  /** delete single row from the table: "teammates" */
  delete_teammates_by_pk?: Maybe<Teammates>;
  /** delete data from the table: "token_gifts" */
  delete_token_gifts?: Maybe<Token_Gifts_Mutation_Response>;
  /** delete single row from the table: "token_gifts" */
  delete_token_gifts_by_pk?: Maybe<Token_Gifts>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "vault_transactions" */
  delete_vault_transactions?: Maybe<Vault_Transactions_Mutation_Response>;
  /** delete single row from the table: "vault_transactions" */
  delete_vault_transactions_by_pk?: Maybe<Vault_Transactions>;
  /** delete data from the table: "vault_tx_types" */
  delete_vault_tx_types?: Maybe<Vault_Tx_Types_Mutation_Response>;
  /** delete single row from the table: "vault_tx_types" */
  delete_vault_tx_types_by_pk?: Maybe<Vault_Tx_Types>;
  /** delete data from the table: "vaults" */
  delete_vaults?: Maybe<Vaults_Mutation_Response>;
  /** delete single row from the table: "vaults" */
  delete_vaults_by_pk?: Maybe<Vaults>;
  /** delete data from the table: "vouches" */
  delete_vouches?: Maybe<Vouches_Mutation_Response>;
  /** delete single row from the table: "vouches" */
  delete_vouches_by_pk?: Maybe<Vouches>;
  /** Generates an API key for a circle */
  generateApiKey?: Maybe<GenerateApiKeyResponse>;
  /** insert data into the table: "burns" */
  insert_burns?: Maybe<Burns_Mutation_Response>;
  /** insert a single row into the table: "burns" */
  insert_burns_one?: Maybe<Burns>;
  /** insert data into the table: "circle_api_keys" */
  insert_circle_api_keys?: Maybe<Circle_Api_Keys_Mutation_Response>;
  /** insert a single row into the table: "circle_api_keys" */
  insert_circle_api_keys_one?: Maybe<Circle_Api_Keys>;
  /** insert data into the table: "circle_integrations" */
  insert_circle_integrations?: Maybe<Circle_Integrations_Mutation_Response>;
  /** insert a single row into the table: "circle_integrations" */
  insert_circle_integrations_one?: Maybe<Circle_Integrations>;
  /** insert data into the table: "circle_metadata" */
  insert_circle_metadata?: Maybe<Circle_Metadata_Mutation_Response>;
  /** insert a single row into the table: "circle_metadata" */
  insert_circle_metadata_one?: Maybe<Circle_Metadata>;
  /** insert data into the table: "circle_private" */
  insert_circle_private?: Maybe<Circle_Private_Mutation_Response>;
  /** insert a single row into the table: "circle_private" */
  insert_circle_private_one?: Maybe<Circle_Private>;
  /** insert data into the table: "circle_share_tokens" */
  insert_circle_share_tokens?: Maybe<Circle_Share_Tokens_Mutation_Response>;
  /** insert a single row into the table: "circle_share_tokens" */
  insert_circle_share_tokens_one?: Maybe<Circle_Share_Tokens>;
  /** insert data into the table: "circles" */
  insert_circles?: Maybe<Circles_Mutation_Response>;
  /** insert a single row into the table: "circles" */
  insert_circles_one?: Maybe<Circles>;
  /** insert data into the table: "claims" */
  insert_claims?: Maybe<Claims_Mutation_Response>;
  /** insert a single row into the table: "claims" */
  insert_claims_one?: Maybe<Claims>;
  /** insert data into the table: "contributions" */
  insert_contributions?: Maybe<Contributions_Mutation_Response>;
  /** insert a single row into the table: "contributions" */
  insert_contributions_one?: Maybe<Contributions>;
  /** insert data into the table: "discord.roles_circles" */
  insert_discord_roles_circles?: Maybe<Discord_Roles_Circles_Mutation_Response>;
  /** insert a single row into the table: "discord.roles_circles" */
  insert_discord_roles_circles_one?: Maybe<Discord_Roles_Circles>;
  /** insert data into the table: "discord.users" */
  insert_discord_users?: Maybe<Discord_Users_Mutation_Response>;
  /** insert a single row into the table: "discord.users" */
  insert_discord_users_one?: Maybe<Discord_Users>;
  /** insert data into the table: "distributions" */
  insert_distributions?: Maybe<Distributions_Mutation_Response>;
  /** insert a single row into the table: "distributions" */
  insert_distributions_one?: Maybe<Distributions>;
  /** insert data into the table: "epoches" */
  insert_epochs?: Maybe<Epochs_Mutation_Response>;
  /** insert a single row into the table: "epoches" */
  insert_epochs_one?: Maybe<Epochs>;
  /** insert data into the table: "gift_private" */
  insert_gift_private?: Maybe<Gift_Private_Mutation_Response>;
  /** insert a single row into the table: "gift_private" */
  insert_gift_private_one?: Maybe<Gift_Private>;
  /** insert data into the table: "histories" */
  insert_histories?: Maybe<Histories_Mutation_Response>;
  /** insert a single row into the table: "histories" */
  insert_histories_one?: Maybe<Histories>;
  /** insert data into the table: "interaction_events" */
  insert_interaction_events?: Maybe<Interaction_Events_Mutation_Response>;
  /** insert a single row into the table: "interaction_events" */
  insert_interaction_events_one?: Maybe<Interaction_Events>;
  /** insert data into the table: "nominees" */
  insert_nominees?: Maybe<Nominees_Mutation_Response>;
  /** insert a single row into the table: "nominees" */
  insert_nominees_one?: Maybe<Nominees>;
  /** insert data into the table: "organizations" */
  insert_organizations?: Maybe<Organizations_Mutation_Response>;
  /** insert a single row into the table: "organizations" */
  insert_organizations_one?: Maybe<Organizations>;
  /** insert data into the table: "pending_gift_private" */
  insert_pending_gift_private?: Maybe<Pending_Gift_Private_Mutation_Response>;
  /** insert a single row into the table: "pending_gift_private" */
  insert_pending_gift_private_one?: Maybe<Pending_Gift_Private>;
  /** insert data into the table: "pending_token_gifts" */
  insert_pending_token_gifts?: Maybe<Pending_Token_Gifts_Mutation_Response>;
  /** insert a single row into the table: "pending_token_gifts" */
  insert_pending_token_gifts_one?: Maybe<Pending_Token_Gifts>;
  /** insert data into the table: "pending_vault_transactions" */
  insert_pending_vault_transactions?: Maybe<Pending_Vault_Transactions_Mutation_Response>;
  /** insert a single row into the table: "pending_vault_transactions" */
  insert_pending_vault_transactions_one?: Maybe<Pending_Vault_Transactions>;
  /** insert data into the table: "personal_access_tokens" */
  insert_personal_access_tokens?: Maybe<Personal_Access_Tokens_Mutation_Response>;
  /** insert a single row into the table: "personal_access_tokens" */
  insert_personal_access_tokens_one?: Maybe<Personal_Access_Tokens>;
  /** insert data into the table: "profiles" */
  insert_profiles?: Maybe<Profiles_Mutation_Response>;
  /** insert a single row into the table: "profiles" */
  insert_profiles_one?: Maybe<Profiles>;
  /** insert data into the table: "teammates" */
  insert_teammates?: Maybe<Teammates_Mutation_Response>;
  /** insert a single row into the table: "teammates" */
  insert_teammates_one?: Maybe<Teammates>;
  /** insert data into the table: "token_gifts" */
  insert_token_gifts?: Maybe<Token_Gifts_Mutation_Response>;
  /** insert a single row into the table: "token_gifts" */
  insert_token_gifts_one?: Maybe<Token_Gifts>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "vault_transactions" */
  insert_vault_transactions?: Maybe<Vault_Transactions_Mutation_Response>;
  /** insert a single row into the table: "vault_transactions" */
  insert_vault_transactions_one?: Maybe<Vault_Transactions>;
  /** insert data into the table: "vault_tx_types" */
  insert_vault_tx_types?: Maybe<Vault_Tx_Types_Mutation_Response>;
  /** insert a single row into the table: "vault_tx_types" */
  insert_vault_tx_types_one?: Maybe<Vault_Tx_Types>;
  /** insert data into the table: "vaults" */
  insert_vaults?: Maybe<Vaults_Mutation_Response>;
  /** insert a single row into the table: "vaults" */
  insert_vaults_one?: Maybe<Vaults>;
  /** insert data into the table: "vouches" */
  insert_vouches?: Maybe<Vouches_Mutation_Response>;
  /** insert a single row into the table: "vouches" */
  insert_vouches_one?: Maybe<Vouches>;
  /** allow authenticated users to link a discord account to their profile */
  linkDiscordUser?: Maybe<LinkDiscordUserResponse>;
  logoutUser?: Maybe<LogoutResponse>;
  markClaimed?: Maybe<MarkClaimedOutput>;
  restoreCoordinape?: Maybe<ConfirmationResponse>;
  updateAllocations?: Maybe<AllocationsResponse>;
  updateCircle?: Maybe<UpdateCircleOutput>;
  /** users can modify contributions and update their dates. */
  updateContribution?: Maybe<UpdateContributionResponse>;
  updateEpoch?: Maybe<EpochResponse>;
  updateTeammates?: Maybe<UpdateTeammatesResponse>;
  /** Update own user */
  updateUser?: Maybe<UserResponse>;
  /** update data of the table: "burns" */
  update_burns?: Maybe<Burns_Mutation_Response>;
  /** update single row of the table: "burns" */
  update_burns_by_pk?: Maybe<Burns>;
  /** update multiples rows of table: "burns" */
  update_burns_many?: Maybe<Array<Maybe<Burns_Mutation_Response>>>;
  /** update data of the table: "circle_api_keys" */
  update_circle_api_keys?: Maybe<Circle_Api_Keys_Mutation_Response>;
  /** update single row of the table: "circle_api_keys" */
  update_circle_api_keys_by_pk?: Maybe<Circle_Api_Keys>;
  /** update multiples rows of table: "circle_api_keys" */
  update_circle_api_keys_many?: Maybe<Array<Maybe<Circle_Api_Keys_Mutation_Response>>>;
  /** update data of the table: "circle_integrations" */
  update_circle_integrations?: Maybe<Circle_Integrations_Mutation_Response>;
  /** update single row of the table: "circle_integrations" */
  update_circle_integrations_by_pk?: Maybe<Circle_Integrations>;
  /** update multiples rows of table: "circle_integrations" */
  update_circle_integrations_many?: Maybe<Array<Maybe<Circle_Integrations_Mutation_Response>>>;
  /** update data of the table: "circle_metadata" */
  update_circle_metadata?: Maybe<Circle_Metadata_Mutation_Response>;
  /** update single row of the table: "circle_metadata" */
  update_circle_metadata_by_pk?: Maybe<Circle_Metadata>;
  /** update multiples rows of table: "circle_metadata" */
  update_circle_metadata_many?: Maybe<Array<Maybe<Circle_Metadata_Mutation_Response>>>;
  /** update data of the table: "circle_private" */
  update_circle_private?: Maybe<Circle_Private_Mutation_Response>;
  /** update multiples rows of table: "circle_private" */
  update_circle_private_many?: Maybe<Array<Maybe<Circle_Private_Mutation_Response>>>;
  /** update data of the table: "circle_share_tokens" */
  update_circle_share_tokens?: Maybe<Circle_Share_Tokens_Mutation_Response>;
  /** update single row of the table: "circle_share_tokens" */
  update_circle_share_tokens_by_pk?: Maybe<Circle_Share_Tokens>;
  /** update multiples rows of table: "circle_share_tokens" */
  update_circle_share_tokens_many?: Maybe<Array<Maybe<Circle_Share_Tokens_Mutation_Response>>>;
  /** update data of the table: "circles" */
  update_circles?: Maybe<Circles_Mutation_Response>;
  /** update single row of the table: "circles" */
  update_circles_by_pk?: Maybe<Circles>;
  /** update multiples rows of table: "circles" */
  update_circles_many?: Maybe<Array<Maybe<Circles_Mutation_Response>>>;
  /** update data of the table: "claims" */
  update_claims?: Maybe<Claims_Mutation_Response>;
  /** update single row of the table: "claims" */
  update_claims_by_pk?: Maybe<Claims>;
  /** update multiples rows of table: "claims" */
  update_claims_many?: Maybe<Array<Maybe<Claims_Mutation_Response>>>;
  /** update data of the table: "contributions" */
  update_contributions?: Maybe<Contributions_Mutation_Response>;
  /** update single row of the table: "contributions" */
  update_contributions_by_pk?: Maybe<Contributions>;
  /** update multiples rows of table: "contributions" */
  update_contributions_many?: Maybe<Array<Maybe<Contributions_Mutation_Response>>>;
  /** update data of the table: "discord.roles_circles" */
  update_discord_roles_circles?: Maybe<Discord_Roles_Circles_Mutation_Response>;
  /** update single row of the table: "discord.roles_circles" */
  update_discord_roles_circles_by_pk?: Maybe<Discord_Roles_Circles>;
  /** update multiples rows of table: "discord.roles_circles" */
  update_discord_roles_circles_many?: Maybe<Array<Maybe<Discord_Roles_Circles_Mutation_Response>>>;
  /** update data of the table: "discord.users" */
  update_discord_users?: Maybe<Discord_Users_Mutation_Response>;
  /** update single row of the table: "discord.users" */
  update_discord_users_by_pk?: Maybe<Discord_Users>;
  /** update multiples rows of table: "discord.users" */
  update_discord_users_many?: Maybe<Array<Maybe<Discord_Users_Mutation_Response>>>;
  /** update data of the table: "distributions" */
  update_distributions?: Maybe<Distributions_Mutation_Response>;
  /** update single row of the table: "distributions" */
  update_distributions_by_pk?: Maybe<Distributions>;
  /** update multiples rows of table: "distributions" */
  update_distributions_many?: Maybe<Array<Maybe<Distributions_Mutation_Response>>>;
  /** update data of the table: "epoches" */
  update_epochs?: Maybe<Epochs_Mutation_Response>;
  /** update single row of the table: "epoches" */
  update_epochs_by_pk?: Maybe<Epochs>;
  /** update multiples rows of table: "epoches" */
  update_epochs_many?: Maybe<Array<Maybe<Epochs_Mutation_Response>>>;
  /** update data of the table: "gift_private" */
  update_gift_private?: Maybe<Gift_Private_Mutation_Response>;
  /** update multiples rows of table: "gift_private" */
  update_gift_private_many?: Maybe<Array<Maybe<Gift_Private_Mutation_Response>>>;
  /** update data of the table: "histories" */
  update_histories?: Maybe<Histories_Mutation_Response>;
  /** update single row of the table: "histories" */
  update_histories_by_pk?: Maybe<Histories>;
  /** update multiples rows of table: "histories" */
  update_histories_many?: Maybe<Array<Maybe<Histories_Mutation_Response>>>;
  /** update data of the table: "interaction_events" */
  update_interaction_events?: Maybe<Interaction_Events_Mutation_Response>;
  /** update single row of the table: "interaction_events" */
  update_interaction_events_by_pk?: Maybe<Interaction_Events>;
  /** update multiples rows of table: "interaction_events" */
  update_interaction_events_many?: Maybe<Array<Maybe<Interaction_Events_Mutation_Response>>>;
  /** update data of the table: "nominees" */
  update_nominees?: Maybe<Nominees_Mutation_Response>;
  /** update single row of the table: "nominees" */
  update_nominees_by_pk?: Maybe<Nominees>;
  /** update multiples rows of table: "nominees" */
  update_nominees_many?: Maybe<Array<Maybe<Nominees_Mutation_Response>>>;
  /** update data of the table: "organizations" */
  update_organizations?: Maybe<Organizations_Mutation_Response>;
  /** update single row of the table: "organizations" */
  update_organizations_by_pk?: Maybe<Organizations>;
  /** update multiples rows of table: "organizations" */
  update_organizations_many?: Maybe<Array<Maybe<Organizations_Mutation_Response>>>;
  /** update data of the table: "pending_gift_private" */
  update_pending_gift_private?: Maybe<Pending_Gift_Private_Mutation_Response>;
  /** update multiples rows of table: "pending_gift_private" */
  update_pending_gift_private_many?: Maybe<Array<Maybe<Pending_Gift_Private_Mutation_Response>>>;
  /** update data of the table: "pending_token_gifts" */
  update_pending_token_gifts?: Maybe<Pending_Token_Gifts_Mutation_Response>;
  /** update single row of the table: "pending_token_gifts" */
  update_pending_token_gifts_by_pk?: Maybe<Pending_Token_Gifts>;
  /** update multiples rows of table: "pending_token_gifts" */
  update_pending_token_gifts_many?: Maybe<Array<Maybe<Pending_Token_Gifts_Mutation_Response>>>;
  /** update data of the table: "pending_vault_transactions" */
  update_pending_vault_transactions?: Maybe<Pending_Vault_Transactions_Mutation_Response>;
  /** update single row of the table: "pending_vault_transactions" */
  update_pending_vault_transactions_by_pk?: Maybe<Pending_Vault_Transactions>;
  /** update multiples rows of table: "pending_vault_transactions" */
  update_pending_vault_transactions_many?: Maybe<Array<Maybe<Pending_Vault_Transactions_Mutation_Response>>>;
  /** update data of the table: "personal_access_tokens" */
  update_personal_access_tokens?: Maybe<Personal_Access_Tokens_Mutation_Response>;
  /** update single row of the table: "personal_access_tokens" */
  update_personal_access_tokens_by_pk?: Maybe<Personal_Access_Tokens>;
  /** update multiples rows of table: "personal_access_tokens" */
  update_personal_access_tokens_many?: Maybe<Array<Maybe<Personal_Access_Tokens_Mutation_Response>>>;
  /** update data of the table: "profiles" */
  update_profiles?: Maybe<Profiles_Mutation_Response>;
  /** update single row of the table: "profiles" */
  update_profiles_by_pk?: Maybe<Profiles>;
  /** update multiples rows of table: "profiles" */
  update_profiles_many?: Maybe<Array<Maybe<Profiles_Mutation_Response>>>;
  /** update data of the table: "teammates" */
  update_teammates?: Maybe<Teammates_Mutation_Response>;
  /** update single row of the table: "teammates" */
  update_teammates_by_pk?: Maybe<Teammates>;
  /** update multiples rows of table: "teammates" */
  update_teammates_many?: Maybe<Array<Maybe<Teammates_Mutation_Response>>>;
  /** update data of the table: "token_gifts" */
  update_token_gifts?: Maybe<Token_Gifts_Mutation_Response>;
  /** update single row of the table: "token_gifts" */
  update_token_gifts_by_pk?: Maybe<Token_Gifts>;
  /** update multiples rows of table: "token_gifts" */
  update_token_gifts_many?: Maybe<Array<Maybe<Token_Gifts_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "vault_transactions" */
  update_vault_transactions?: Maybe<Vault_Transactions_Mutation_Response>;
  /** update single row of the table: "vault_transactions" */
  update_vault_transactions_by_pk?: Maybe<Vault_Transactions>;
  /** update multiples rows of table: "vault_transactions" */
  update_vault_transactions_many?: Maybe<Array<Maybe<Vault_Transactions_Mutation_Response>>>;
  /** update data of the table: "vault_tx_types" */
  update_vault_tx_types?: Maybe<Vault_Tx_Types_Mutation_Response>;
  /** update single row of the table: "vault_tx_types" */
  update_vault_tx_types_by_pk?: Maybe<Vault_Tx_Types>;
  /** update multiples rows of table: "vault_tx_types" */
  update_vault_tx_types_many?: Maybe<Array<Maybe<Vault_Tx_Types_Mutation_Response>>>;
  /** update data of the table: "vaults" */
  update_vaults?: Maybe<Vaults_Mutation_Response>;
  /** update single row of the table: "vaults" */
  update_vaults_by_pk?: Maybe<Vaults>;
  /** update multiples rows of table: "vaults" */
  update_vaults_many?: Maybe<Array<Maybe<Vaults_Mutation_Response>>>;
  /** update data of the table: "vouches" */
  update_vouches?: Maybe<Vouches_Mutation_Response>;
  /** update single row of the table: "vouches" */
  update_vouches_by_pk?: Maybe<Vouches>;
  /** update multiples rows of table: "vouches" */
  update_vouches_many?: Maybe<Array<Maybe<Vouches_Mutation_Response>>>;
  uploadCircleLogo?: Maybe<UpdateCircleResponse>;
  uploadOrgLogo?: Maybe<UpdateOrgResponse>;
  uploadProfileAvatar?: Maybe<UpdateProfileResponse>;
  uploadProfileBackground?: Maybe<UpdateProfileResponse>;
  vouch?: Maybe<VouchOutput>;
};


/** mutation root */
export type Mutation_RootAdminUpdateUserArgs = {
  payload: AdminUpdateUserInput;
};


/** mutation root */
export type Mutation_RootAllocationCsvArgs = {
  payload: AllocationCsvInput;
};


/** mutation root */
export type Mutation_RootCreateCircleArgs = {
  payload: CreateCircleInput;
};


/** mutation root */
export type Mutation_RootCreateEpochArgs = {
  payload: CreateEpochInput;
};


/** mutation root */
export type Mutation_RootCreateNomineeArgs = {
  payload: CreateNomineeInput;
};


/** mutation root */
export type Mutation_RootCreateUserArgs = {
  payload: CreateUserInput;
};


/** mutation root */
export type Mutation_RootCreateUserWithTokenArgs = {
  payload: CreateUserWithTokenInput;
};


/** mutation root */
export type Mutation_RootCreateUsersArgs = {
  payload: CreateUsersInput;
};


/** mutation root */
export type Mutation_RootCreateVaultArgs = {
  payload: CreateVaultInput;
};


/** mutation root */
export type Mutation_RootCreateVaultTxArgs = {
  payload: LogVaultTxInput;
};


/** mutation root */
export type Mutation_RootDeleteCircleArgs = {
  payload: DeleteCircleInput;
};


/** mutation root */
export type Mutation_RootDeleteContributionArgs = {
  payload: DeleteContributionInput;
};


/** mutation root */
export type Mutation_RootDeleteEpochArgs = {
  payload: DeleteEpochInput;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  payload: DeleteUserInput;
};


/** mutation root */
export type Mutation_RootDelete_BurnsArgs = {
  where: Burns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Burns_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Circle_Api_KeysArgs = {
  where: Circle_Api_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Circle_Api_Keys_By_PkArgs = {
  hash: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Circle_IntegrationsArgs = {
  where: Circle_Integrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Circle_Integrations_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Circle_MetadataArgs = {
  where: Circle_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Circle_Metadata_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Circle_PrivateArgs = {
  where: Circle_Private_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Circle_Share_TokensArgs = {
  where: Circle_Share_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Circle_Share_Tokens_By_PkArgs = {
  circle_id: Scalars['bigint'];
  type: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CirclesArgs = {
  where: Circles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Circles_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_ClaimsArgs = {
  where: Claims_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Claims_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_ContributionsArgs = {
  where: Contributions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contributions_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Discord_Roles_CirclesArgs = {
  where: Discord_Roles_Circles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Discord_Roles_Circles_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Discord_UsersArgs = {
  where: Discord_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Discord_Users_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_DistributionsArgs = {
  where: Distributions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Distributions_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_EpochsArgs = {
  where: Epochs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Epochs_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Gift_PrivateArgs = {
  where: Gift_Private_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_HistoriesArgs = {
  where: Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Histories_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Interaction_EventsArgs = {
  where: Interaction_Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Interaction_Events_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_NomineesArgs = {
  where: Nominees_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nominees_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_OrganizationsArgs = {
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organizations_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Pending_Gift_PrivateArgs = {
  where: Pending_Gift_Private_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pending_Token_GiftsArgs = {
  where: Pending_Token_Gifts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pending_Token_Gifts_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Pending_Vault_TransactionsArgs = {
  where: Pending_Vault_Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pending_Vault_Transactions_By_PkArgs = {
  tx_hash: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Personal_Access_TokensArgs = {
  where: Personal_Access_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Personal_Access_Tokens_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_ProfilesArgs = {
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profiles_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_TeammatesArgs = {
  where: Teammates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Teammates_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Token_GiftsArgs = {
  where: Token_Gifts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Token_Gifts_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Vault_TransactionsArgs = {
  where: Vault_Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vault_Transactions_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Vault_Tx_TypesArgs = {
  where: Vault_Tx_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vault_Tx_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_VaultsArgs = {
  where: Vaults_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vaults_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_VouchesArgs = {
  where: Vouches_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vouches_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootGenerateApiKeyArgs = {
  payload: GenerateApiKeyInput;
};


/** mutation root */
export type Mutation_RootInsert_BurnsArgs = {
  objects: Array<Burns_Insert_Input>;
  on_conflict?: InputMaybe<Burns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Burns_OneArgs = {
  object: Burns_Insert_Input;
  on_conflict?: InputMaybe<Burns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_Api_KeysArgs = {
  objects: Array<Circle_Api_Keys_Insert_Input>;
  on_conflict?: InputMaybe<Circle_Api_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_Api_Keys_OneArgs = {
  object: Circle_Api_Keys_Insert_Input;
  on_conflict?: InputMaybe<Circle_Api_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_IntegrationsArgs = {
  objects: Array<Circle_Integrations_Insert_Input>;
  on_conflict?: InputMaybe<Circle_Integrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_Integrations_OneArgs = {
  object: Circle_Integrations_Insert_Input;
  on_conflict?: InputMaybe<Circle_Integrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_MetadataArgs = {
  objects: Array<Circle_Metadata_Insert_Input>;
  on_conflict?: InputMaybe<Circle_Metadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_Metadata_OneArgs = {
  object: Circle_Metadata_Insert_Input;
  on_conflict?: InputMaybe<Circle_Metadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_PrivateArgs = {
  objects: Array<Circle_Private_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_Private_OneArgs = {
  object: Circle_Private_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Circle_Share_TokensArgs = {
  objects: Array<Circle_Share_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Circle_Share_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_Share_Tokens_OneArgs = {
  object: Circle_Share_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Circle_Share_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CirclesArgs = {
  objects: Array<Circles_Insert_Input>;
  on_conflict?: InputMaybe<Circles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circles_OneArgs = {
  object: Circles_Insert_Input;
  on_conflict?: InputMaybe<Circles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ClaimsArgs = {
  objects: Array<Claims_Insert_Input>;
  on_conflict?: InputMaybe<Claims_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Claims_OneArgs = {
  object: Claims_Insert_Input;
  on_conflict?: InputMaybe<Claims_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContributionsArgs = {
  objects: Array<Contributions_Insert_Input>;
  on_conflict?: InputMaybe<Contributions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contributions_OneArgs = {
  object: Contributions_Insert_Input;
  on_conflict?: InputMaybe<Contributions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Discord_Roles_CirclesArgs = {
  objects: Array<Discord_Roles_Circles_Insert_Input>;
  on_conflict?: InputMaybe<Discord_Roles_Circles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Discord_Roles_Circles_OneArgs = {
  object: Discord_Roles_Circles_Insert_Input;
  on_conflict?: InputMaybe<Discord_Roles_Circles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Discord_UsersArgs = {
  objects: Array<Discord_Users_Insert_Input>;
  on_conflict?: InputMaybe<Discord_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Discord_Users_OneArgs = {
  object: Discord_Users_Insert_Input;
  on_conflict?: InputMaybe<Discord_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DistributionsArgs = {
  objects: Array<Distributions_Insert_Input>;
  on_conflict?: InputMaybe<Distributions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Distributions_OneArgs = {
  object: Distributions_Insert_Input;
  on_conflict?: InputMaybe<Distributions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EpochsArgs = {
  objects: Array<Epochs_Insert_Input>;
  on_conflict?: InputMaybe<Epochs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Epochs_OneArgs = {
  object: Epochs_Insert_Input;
  on_conflict?: InputMaybe<Epochs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gift_PrivateArgs = {
  objects: Array<Gift_Private_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Gift_Private_OneArgs = {
  object: Gift_Private_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_HistoriesArgs = {
  objects: Array<Histories_Insert_Input>;
  on_conflict?: InputMaybe<Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Histories_OneArgs = {
  object: Histories_Insert_Input;
  on_conflict?: InputMaybe<Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Interaction_EventsArgs = {
  objects: Array<Interaction_Events_Insert_Input>;
  on_conflict?: InputMaybe<Interaction_Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Interaction_Events_OneArgs = {
  object: Interaction_Events_Insert_Input;
  on_conflict?: InputMaybe<Interaction_Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NomineesArgs = {
  objects: Array<Nominees_Insert_Input>;
  on_conflict?: InputMaybe<Nominees_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nominees_OneArgs = {
  object: Nominees_Insert_Input;
  on_conflict?: InputMaybe<Nominees_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganizationsArgs = {
  objects: Array<Organizations_Insert_Input>;
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organizations_OneArgs = {
  object: Organizations_Insert_Input;
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pending_Gift_PrivateArgs = {
  objects: Array<Pending_Gift_Private_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Pending_Gift_Private_OneArgs = {
  object: Pending_Gift_Private_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Pending_Token_GiftsArgs = {
  objects: Array<Pending_Token_Gifts_Insert_Input>;
  on_conflict?: InputMaybe<Pending_Token_Gifts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pending_Token_Gifts_OneArgs = {
  object: Pending_Token_Gifts_Insert_Input;
  on_conflict?: InputMaybe<Pending_Token_Gifts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pending_Vault_TransactionsArgs = {
  objects: Array<Pending_Vault_Transactions_Insert_Input>;
  on_conflict?: InputMaybe<Pending_Vault_Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pending_Vault_Transactions_OneArgs = {
  object: Pending_Vault_Transactions_Insert_Input;
  on_conflict?: InputMaybe<Pending_Vault_Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Personal_Access_TokensArgs = {
  objects: Array<Personal_Access_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Personal_Access_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Personal_Access_Tokens_OneArgs = {
  object: Personal_Access_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Personal_Access_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProfilesArgs = {
  objects: Array<Profiles_Insert_Input>;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profiles_OneArgs = {
  object: Profiles_Insert_Input;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeammatesArgs = {
  objects: Array<Teammates_Insert_Input>;
  on_conflict?: InputMaybe<Teammates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Teammates_OneArgs = {
  object: Teammates_Insert_Input;
  on_conflict?: InputMaybe<Teammates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_GiftsArgs = {
  objects: Array<Token_Gifts_Insert_Input>;
  on_conflict?: InputMaybe<Token_Gifts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_Gifts_OneArgs = {
  object: Token_Gifts_Insert_Input;
  on_conflict?: InputMaybe<Token_Gifts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vault_TransactionsArgs = {
  objects: Array<Vault_Transactions_Insert_Input>;
  on_conflict?: InputMaybe<Vault_Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vault_Transactions_OneArgs = {
  object: Vault_Transactions_Insert_Input;
  on_conflict?: InputMaybe<Vault_Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vault_Tx_TypesArgs = {
  objects: Array<Vault_Tx_Types_Insert_Input>;
  on_conflict?: InputMaybe<Vault_Tx_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vault_Tx_Types_OneArgs = {
  object: Vault_Tx_Types_Insert_Input;
  on_conflict?: InputMaybe<Vault_Tx_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VaultsArgs = {
  objects: Array<Vaults_Insert_Input>;
  on_conflict?: InputMaybe<Vaults_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vaults_OneArgs = {
  object: Vaults_Insert_Input;
  on_conflict?: InputMaybe<Vaults_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VouchesArgs = {
  objects: Array<Vouches_Insert_Input>;
  on_conflict?: InputMaybe<Vouches_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vouches_OneArgs = {
  object: Vouches_Insert_Input;
  on_conflict?: InputMaybe<Vouches_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLinkDiscordUserArgs = {
  payload: LinkDiscordUserInput;
};


/** mutation root */
export type Mutation_RootMarkClaimedArgs = {
  payload: MarkClaimedInput;
};


/** mutation root */
export type Mutation_RootRestoreCoordinapeArgs = {
  payload: CoordinapeInput;
};


/** mutation root */
export type Mutation_RootUpdateAllocationsArgs = {
  payload: Allocations;
};


/** mutation root */
export type Mutation_RootUpdateCircleArgs = {
  payload: UpdateCircleInput;
};


/** mutation root */
export type Mutation_RootUpdateContributionArgs = {
  payload: UpdateContributionInput;
};


/** mutation root */
export type Mutation_RootUpdateEpochArgs = {
  payload: UpdateEpochInput;
};


/** mutation root */
export type Mutation_RootUpdateTeammatesArgs = {
  payload: UpdateTeammatesInput;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  payload: UpdateUserInput;
};


/** mutation root */
export type Mutation_RootUpdate_BurnsArgs = {
  _inc?: InputMaybe<Burns_Inc_Input>;
  _set?: InputMaybe<Burns_Set_Input>;
  where: Burns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Burns_By_PkArgs = {
  _inc?: InputMaybe<Burns_Inc_Input>;
  _set?: InputMaybe<Burns_Set_Input>;
  pk_columns: Burns_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Burns_ManyArgs = {
  updates: Array<Burns_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Api_KeysArgs = {
  _inc?: InputMaybe<Circle_Api_Keys_Inc_Input>;
  _set?: InputMaybe<Circle_Api_Keys_Set_Input>;
  where: Circle_Api_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Api_Keys_By_PkArgs = {
  _inc?: InputMaybe<Circle_Api_Keys_Inc_Input>;
  _set?: InputMaybe<Circle_Api_Keys_Set_Input>;
  pk_columns: Circle_Api_Keys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Api_Keys_ManyArgs = {
  updates: Array<Circle_Api_Keys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_IntegrationsArgs = {
  _inc?: InputMaybe<Circle_Integrations_Inc_Input>;
  _set?: InputMaybe<Circle_Integrations_Set_Input>;
  where: Circle_Integrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Integrations_By_PkArgs = {
  _inc?: InputMaybe<Circle_Integrations_Inc_Input>;
  _set?: InputMaybe<Circle_Integrations_Set_Input>;
  pk_columns: Circle_Integrations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Integrations_ManyArgs = {
  updates: Array<Circle_Integrations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_MetadataArgs = {
  _inc?: InputMaybe<Circle_Metadata_Inc_Input>;
  _set?: InputMaybe<Circle_Metadata_Set_Input>;
  where: Circle_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Metadata_By_PkArgs = {
  _inc?: InputMaybe<Circle_Metadata_Inc_Input>;
  _set?: InputMaybe<Circle_Metadata_Set_Input>;
  pk_columns: Circle_Metadata_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Metadata_ManyArgs = {
  updates: Array<Circle_Metadata_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_PrivateArgs = {
  _inc?: InputMaybe<Circle_Private_Inc_Input>;
  _set?: InputMaybe<Circle_Private_Set_Input>;
  where: Circle_Private_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Private_ManyArgs = {
  updates: Array<Circle_Private_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Share_TokensArgs = {
  _inc?: InputMaybe<Circle_Share_Tokens_Inc_Input>;
  _set?: InputMaybe<Circle_Share_Tokens_Set_Input>;
  where: Circle_Share_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Share_Tokens_By_PkArgs = {
  _inc?: InputMaybe<Circle_Share_Tokens_Inc_Input>;
  _set?: InputMaybe<Circle_Share_Tokens_Set_Input>;
  pk_columns: Circle_Share_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Share_Tokens_ManyArgs = {
  updates: Array<Circle_Share_Tokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CirclesArgs = {
  _inc?: InputMaybe<Circles_Inc_Input>;
  _set?: InputMaybe<Circles_Set_Input>;
  where: Circles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Circles_By_PkArgs = {
  _inc?: InputMaybe<Circles_Inc_Input>;
  _set?: InputMaybe<Circles_Set_Input>;
  pk_columns: Circles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Circles_ManyArgs = {
  updates: Array<Circles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ClaimsArgs = {
  _inc?: InputMaybe<Claims_Inc_Input>;
  _set?: InputMaybe<Claims_Set_Input>;
  where: Claims_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Claims_By_PkArgs = {
  _inc?: InputMaybe<Claims_Inc_Input>;
  _set?: InputMaybe<Claims_Set_Input>;
  pk_columns: Claims_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Claims_ManyArgs = {
  updates: Array<Claims_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ContributionsArgs = {
  _inc?: InputMaybe<Contributions_Inc_Input>;
  _set?: InputMaybe<Contributions_Set_Input>;
  where: Contributions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contributions_By_PkArgs = {
  _inc?: InputMaybe<Contributions_Inc_Input>;
  _set?: InputMaybe<Contributions_Set_Input>;
  pk_columns: Contributions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contributions_ManyArgs = {
  updates: Array<Contributions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Discord_Roles_CirclesArgs = {
  _inc?: InputMaybe<Discord_Roles_Circles_Inc_Input>;
  _set?: InputMaybe<Discord_Roles_Circles_Set_Input>;
  where: Discord_Roles_Circles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Discord_Roles_Circles_By_PkArgs = {
  _inc?: InputMaybe<Discord_Roles_Circles_Inc_Input>;
  _set?: InputMaybe<Discord_Roles_Circles_Set_Input>;
  pk_columns: Discord_Roles_Circles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Discord_Roles_Circles_ManyArgs = {
  updates: Array<Discord_Roles_Circles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Discord_UsersArgs = {
  _inc?: InputMaybe<Discord_Users_Inc_Input>;
  _set?: InputMaybe<Discord_Users_Set_Input>;
  where: Discord_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Discord_Users_By_PkArgs = {
  _inc?: InputMaybe<Discord_Users_Inc_Input>;
  _set?: InputMaybe<Discord_Users_Set_Input>;
  pk_columns: Discord_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Discord_Users_ManyArgs = {
  updates: Array<Discord_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DistributionsArgs = {
  _append?: InputMaybe<Distributions_Append_Input>;
  _delete_at_path?: InputMaybe<Distributions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Distributions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Distributions_Delete_Key_Input>;
  _inc?: InputMaybe<Distributions_Inc_Input>;
  _prepend?: InputMaybe<Distributions_Prepend_Input>;
  _set?: InputMaybe<Distributions_Set_Input>;
  where: Distributions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Distributions_By_PkArgs = {
  _append?: InputMaybe<Distributions_Append_Input>;
  _delete_at_path?: InputMaybe<Distributions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Distributions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Distributions_Delete_Key_Input>;
  _inc?: InputMaybe<Distributions_Inc_Input>;
  _prepend?: InputMaybe<Distributions_Prepend_Input>;
  _set?: InputMaybe<Distributions_Set_Input>;
  pk_columns: Distributions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Distributions_ManyArgs = {
  updates: Array<Distributions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EpochsArgs = {
  _inc?: InputMaybe<Epochs_Inc_Input>;
  _set?: InputMaybe<Epochs_Set_Input>;
  where: Epochs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Epochs_By_PkArgs = {
  _inc?: InputMaybe<Epochs_Inc_Input>;
  _set?: InputMaybe<Epochs_Set_Input>;
  pk_columns: Epochs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Epochs_ManyArgs = {
  updates: Array<Epochs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Gift_PrivateArgs = {
  _inc?: InputMaybe<Gift_Private_Inc_Input>;
  _set?: InputMaybe<Gift_Private_Set_Input>;
  where: Gift_Private_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gift_Private_ManyArgs = {
  updates: Array<Gift_Private_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_HistoriesArgs = {
  _inc?: InputMaybe<Histories_Inc_Input>;
  _set?: InputMaybe<Histories_Set_Input>;
  where: Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Histories_By_PkArgs = {
  _inc?: InputMaybe<Histories_Inc_Input>;
  _set?: InputMaybe<Histories_Set_Input>;
  pk_columns: Histories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Histories_ManyArgs = {
  updates: Array<Histories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Interaction_EventsArgs = {
  _append?: InputMaybe<Interaction_Events_Append_Input>;
  _delete_at_path?: InputMaybe<Interaction_Events_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Interaction_Events_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Interaction_Events_Delete_Key_Input>;
  _inc?: InputMaybe<Interaction_Events_Inc_Input>;
  _prepend?: InputMaybe<Interaction_Events_Prepend_Input>;
  _set?: InputMaybe<Interaction_Events_Set_Input>;
  where: Interaction_Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Interaction_Events_By_PkArgs = {
  _append?: InputMaybe<Interaction_Events_Append_Input>;
  _delete_at_path?: InputMaybe<Interaction_Events_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Interaction_Events_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Interaction_Events_Delete_Key_Input>;
  _inc?: InputMaybe<Interaction_Events_Inc_Input>;
  _prepend?: InputMaybe<Interaction_Events_Prepend_Input>;
  _set?: InputMaybe<Interaction_Events_Set_Input>;
  pk_columns: Interaction_Events_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Interaction_Events_ManyArgs = {
  updates: Array<Interaction_Events_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_NomineesArgs = {
  _inc?: InputMaybe<Nominees_Inc_Input>;
  _set?: InputMaybe<Nominees_Set_Input>;
  where: Nominees_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nominees_By_PkArgs = {
  _inc?: InputMaybe<Nominees_Inc_Input>;
  _set?: InputMaybe<Nominees_Set_Input>;
  pk_columns: Nominees_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nominees_ManyArgs = {
  updates: Array<Nominees_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationsArgs = {
  _inc?: InputMaybe<Organizations_Inc_Input>;
  _set?: InputMaybe<Organizations_Set_Input>;
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organizations_By_PkArgs = {
  _inc?: InputMaybe<Organizations_Inc_Input>;
  _set?: InputMaybe<Organizations_Set_Input>;
  pk_columns: Organizations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organizations_ManyArgs = {
  updates: Array<Organizations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Pending_Gift_PrivateArgs = {
  _inc?: InputMaybe<Pending_Gift_Private_Inc_Input>;
  _set?: InputMaybe<Pending_Gift_Private_Set_Input>;
  where: Pending_Gift_Private_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pending_Gift_Private_ManyArgs = {
  updates: Array<Pending_Gift_Private_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Pending_Token_GiftsArgs = {
  _inc?: InputMaybe<Pending_Token_Gifts_Inc_Input>;
  _set?: InputMaybe<Pending_Token_Gifts_Set_Input>;
  where: Pending_Token_Gifts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pending_Token_Gifts_By_PkArgs = {
  _inc?: InputMaybe<Pending_Token_Gifts_Inc_Input>;
  _set?: InputMaybe<Pending_Token_Gifts_Set_Input>;
  pk_columns: Pending_Token_Gifts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pending_Token_Gifts_ManyArgs = {
  updates: Array<Pending_Token_Gifts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Pending_Vault_TransactionsArgs = {
  _inc?: InputMaybe<Pending_Vault_Transactions_Inc_Input>;
  _set?: InputMaybe<Pending_Vault_Transactions_Set_Input>;
  where: Pending_Vault_Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pending_Vault_Transactions_By_PkArgs = {
  _inc?: InputMaybe<Pending_Vault_Transactions_Inc_Input>;
  _set?: InputMaybe<Pending_Vault_Transactions_Set_Input>;
  pk_columns: Pending_Vault_Transactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pending_Vault_Transactions_ManyArgs = {
  updates: Array<Pending_Vault_Transactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Personal_Access_TokensArgs = {
  _inc?: InputMaybe<Personal_Access_Tokens_Inc_Input>;
  _set?: InputMaybe<Personal_Access_Tokens_Set_Input>;
  where: Personal_Access_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Personal_Access_Tokens_By_PkArgs = {
  _inc?: InputMaybe<Personal_Access_Tokens_Inc_Input>;
  _set?: InputMaybe<Personal_Access_Tokens_Set_Input>;
  pk_columns: Personal_Access_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Personal_Access_Tokens_ManyArgs = {
  updates: Array<Personal_Access_Tokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProfilesArgs = {
  _inc?: InputMaybe<Profiles_Inc_Input>;
  _set?: InputMaybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_By_PkArgs = {
  _inc?: InputMaybe<Profiles_Inc_Input>;
  _set?: InputMaybe<Profiles_Set_Input>;
  pk_columns: Profiles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_ManyArgs = {
  updates: Array<Profiles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TeammatesArgs = {
  _inc?: InputMaybe<Teammates_Inc_Input>;
  _set?: InputMaybe<Teammates_Set_Input>;
  where: Teammates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Teammates_By_PkArgs = {
  _inc?: InputMaybe<Teammates_Inc_Input>;
  _set?: InputMaybe<Teammates_Set_Input>;
  pk_columns: Teammates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Teammates_ManyArgs = {
  updates: Array<Teammates_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Token_GiftsArgs = {
  _inc?: InputMaybe<Token_Gifts_Inc_Input>;
  _set?: InputMaybe<Token_Gifts_Set_Input>;
  where: Token_Gifts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Gifts_By_PkArgs = {
  _inc?: InputMaybe<Token_Gifts_Inc_Input>;
  _set?: InputMaybe<Token_Gifts_Set_Input>;
  pk_columns: Token_Gifts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Gifts_ManyArgs = {
  updates: Array<Token_Gifts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vault_TransactionsArgs = {
  _inc?: InputMaybe<Vault_Transactions_Inc_Input>;
  _set?: InputMaybe<Vault_Transactions_Set_Input>;
  where: Vault_Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vault_Transactions_By_PkArgs = {
  _inc?: InputMaybe<Vault_Transactions_Inc_Input>;
  _set?: InputMaybe<Vault_Transactions_Set_Input>;
  pk_columns: Vault_Transactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vault_Transactions_ManyArgs = {
  updates: Array<Vault_Transactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vault_Tx_TypesArgs = {
  _set?: InputMaybe<Vault_Tx_Types_Set_Input>;
  where: Vault_Tx_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vault_Tx_Types_By_PkArgs = {
  _set?: InputMaybe<Vault_Tx_Types_Set_Input>;
  pk_columns: Vault_Tx_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vault_Tx_Types_ManyArgs = {
  updates: Array<Vault_Tx_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VaultsArgs = {
  _inc?: InputMaybe<Vaults_Inc_Input>;
  _set?: InputMaybe<Vaults_Set_Input>;
  where: Vaults_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vaults_By_PkArgs = {
  _inc?: InputMaybe<Vaults_Inc_Input>;
  _set?: InputMaybe<Vaults_Set_Input>;
  pk_columns: Vaults_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vaults_ManyArgs = {
  updates: Array<Vaults_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VouchesArgs = {
  _inc?: InputMaybe<Vouches_Inc_Input>;
  _set?: InputMaybe<Vouches_Set_Input>;
  where: Vouches_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vouches_By_PkArgs = {
  _inc?: InputMaybe<Vouches_Inc_Input>;
  _set?: InputMaybe<Vouches_Set_Input>;
  pk_columns: Vouches_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vouches_ManyArgs = {
  updates: Array<Vouches_Updates>;
};


/** mutation root */
export type Mutation_RootUploadCircleLogoArgs = {
  payload: UploadCircleImageInput;
};


/** mutation root */
export type Mutation_RootUploadOrgLogoArgs = {
  payload: UploadOrgImageInput;
};


/** mutation root */
export type Mutation_RootUploadProfileAvatarArgs = {
  payload: UploadImageInput;
};


/** mutation root */
export type Mutation_RootUploadProfileBackgroundArgs = {
  payload: UploadImageInput;
};


/** mutation root */
export type Mutation_RootVouchArgs = {
  payload: VouchInput;
};

/** columns and relationships of "nominees" */
export type Nominees = {
  __typename?: 'nominees';
  address: Scalars['String'];
  /** An object relationship */
  circle?: Maybe<Circles>;
  circle_id: Scalars['Int'];
  created_at: Scalars['timestamp'];
  description: Scalars['String'];
  ended: Scalars['Boolean'];
  expiry_date: Scalars['timestamp'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  nominated_by_user_id: Scalars['Int'];
  nominated_date: Scalars['date'];
  /** An array relationship */
  nominations: Array<Vouches>;
  /** An aggregate relationship */
  nominations_aggregate: Vouches_Aggregate;
  /** An object relationship */
  nominator?: Maybe<Users>;
  updated_at: Scalars['timestamp'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['Int']>;
  vouches_required: Scalars['Int'];
};


/** columns and relationships of "nominees" */
export type NomineesNominationsArgs = {
  distinct_on?: InputMaybe<Array<Vouches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vouches_Order_By>>;
  where?: InputMaybe<Vouches_Bool_Exp>;
};


/** columns and relationships of "nominees" */
export type NomineesNominations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vouches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vouches_Order_By>>;
  where?: InputMaybe<Vouches_Bool_Exp>;
};

/** aggregated selection of "nominees" */
export type Nominees_Aggregate = {
  __typename?: 'nominees_aggregate';
  aggregate?: Maybe<Nominees_Aggregate_Fields>;
  nodes: Array<Nominees>;
};

/** aggregate fields of "nominees" */
export type Nominees_Aggregate_Fields = {
  __typename?: 'nominees_aggregate_fields';
  avg?: Maybe<Nominees_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nominees_Max_Fields>;
  min?: Maybe<Nominees_Min_Fields>;
  stddev?: Maybe<Nominees_Stddev_Fields>;
  stddev_pop?: Maybe<Nominees_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nominees_Stddev_Samp_Fields>;
  sum?: Maybe<Nominees_Sum_Fields>;
  var_pop?: Maybe<Nominees_Var_Pop_Fields>;
  var_samp?: Maybe<Nominees_Var_Samp_Fields>;
  variance?: Maybe<Nominees_Variance_Fields>;
};


/** aggregate fields of "nominees" */
export type Nominees_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nominees_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nominees" */
export type Nominees_Aggregate_Order_By = {
  avg?: InputMaybe<Nominees_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nominees_Max_Order_By>;
  min?: InputMaybe<Nominees_Min_Order_By>;
  stddev?: InputMaybe<Nominees_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nominees_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nominees_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nominees_Sum_Order_By>;
  var_pop?: InputMaybe<Nominees_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nominees_Var_Samp_Order_By>;
  variance?: InputMaybe<Nominees_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "nominees" */
export type Nominees_Arr_Rel_Insert_Input = {
  data: Array<Nominees_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Nominees_On_Conflict>;
};

/** aggregate avg on columns */
export type Nominees_Avg_Fields = {
  __typename?: 'nominees_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  nominated_by_user_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  vouches_required?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nominees" */
export type Nominees_Avg_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominated_by_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  vouches_required?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nominees". All fields are combined with a logical 'AND'. */
export type Nominees_Bool_Exp = {
  _and?: InputMaybe<Array<Nominees_Bool_Exp>>;
  _not?: InputMaybe<Nominees_Bool_Exp>;
  _or?: InputMaybe<Array<Nominees_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  ended?: InputMaybe<Boolean_Comparison_Exp>;
  expiry_date?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nominated_by_user_id?: InputMaybe<Int_Comparison_Exp>;
  nominated_date?: InputMaybe<Date_Comparison_Exp>;
  nominations?: InputMaybe<Vouches_Bool_Exp>;
  nominator?: InputMaybe<Users_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
  vouches_required?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "nominees" */
export enum Nominees_Constraint {
  /** unique or primary key constraint on columns "id" */
  NomineesPkey = 'nominees_pkey'
}

/** input type for incrementing numeric columns in table "nominees" */
export type Nominees_Inc_Input = {
  circle_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  nominated_by_user_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
  vouches_required?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "nominees" */
export type Nominees_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  ended?: InputMaybe<Scalars['Boolean']>;
  expiry_date?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  nominated_by_user_id?: InputMaybe<Scalars['Int']>;
  nominated_date?: InputMaybe<Scalars['date']>;
  nominations?: InputMaybe<Vouches_Arr_Rel_Insert_Input>;
  nominator?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']>;
  vouches_required?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Nominees_Max_Fields = {
  __typename?: 'nominees_max_fields';
  address?: Maybe<Scalars['String']>;
  circle_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  expiry_date?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  nominated_by_user_id?: Maybe<Scalars['Int']>;
  nominated_date?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
  vouches_required?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "nominees" */
export type Nominees_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  expiry_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nominated_by_user_id?: InputMaybe<Order_By>;
  nominated_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  vouches_required?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nominees_Min_Fields = {
  __typename?: 'nominees_min_fields';
  address?: Maybe<Scalars['String']>;
  circle_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  expiry_date?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  nominated_by_user_id?: Maybe<Scalars['Int']>;
  nominated_date?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
  vouches_required?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "nominees" */
export type Nominees_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  expiry_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nominated_by_user_id?: InputMaybe<Order_By>;
  nominated_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  vouches_required?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nominees" */
export type Nominees_Mutation_Response = {
  __typename?: 'nominees_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nominees>;
};

/** input type for inserting object relation for remote table "nominees" */
export type Nominees_Obj_Rel_Insert_Input = {
  data: Nominees_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Nominees_On_Conflict>;
};

/** on_conflict condition type for table "nominees" */
export type Nominees_On_Conflict = {
  constraint: Nominees_Constraint;
  update_columns?: Array<Nominees_Update_Column>;
  where?: InputMaybe<Nominees_Bool_Exp>;
};

/** Ordering options when selecting data from "nominees". */
export type Nominees_Order_By = {
  address?: InputMaybe<Order_By>;
  circle?: InputMaybe<Circles_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  ended?: InputMaybe<Order_By>;
  expiry_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nominated_by_user_id?: InputMaybe<Order_By>;
  nominated_date?: InputMaybe<Order_By>;
  nominations_aggregate?: InputMaybe<Vouches_Aggregate_Order_By>;
  nominator?: InputMaybe<Users_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  vouches_required?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nominees */
export type Nominees_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "nominees" */
export enum Nominees_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Ended = 'ended',
  /** column name */
  ExpiryDate = 'expiry_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NominatedByUserId = 'nominated_by_user_id',
  /** column name */
  NominatedDate = 'nominated_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VouchesRequired = 'vouches_required'
}

/** input type for updating data in table "nominees" */
export type Nominees_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  circle_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  ended?: InputMaybe<Scalars['Boolean']>;
  expiry_date?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  nominated_by_user_id?: InputMaybe<Scalars['Int']>;
  nominated_date?: InputMaybe<Scalars['date']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['Int']>;
  vouches_required?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Nominees_Stddev_Fields = {
  __typename?: 'nominees_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  nominated_by_user_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  vouches_required?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nominees" */
export type Nominees_Stddev_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominated_by_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  vouches_required?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nominees_Stddev_Pop_Fields = {
  __typename?: 'nominees_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  nominated_by_user_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  vouches_required?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nominees" */
export type Nominees_Stddev_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominated_by_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  vouches_required?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nominees_Stddev_Samp_Fields = {
  __typename?: 'nominees_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  nominated_by_user_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  vouches_required?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nominees" */
export type Nominees_Stddev_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominated_by_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  vouches_required?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "nominees" */
export type Nominees_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nominees_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nominees_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  circle_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  ended?: InputMaybe<Scalars['Boolean']>;
  expiry_date?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  nominated_by_user_id?: InputMaybe<Scalars['Int']>;
  nominated_date?: InputMaybe<Scalars['date']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['Int']>;
  vouches_required?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Nominees_Sum_Fields = {
  __typename?: 'nominees_sum_fields';
  circle_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  nominated_by_user_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  vouches_required?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "nominees" */
export type Nominees_Sum_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominated_by_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  vouches_required?: InputMaybe<Order_By>;
};

/** update columns of table "nominees" */
export enum Nominees_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Ended = 'ended',
  /** column name */
  ExpiryDate = 'expiry_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NominatedByUserId = 'nominated_by_user_id',
  /** column name */
  NominatedDate = 'nominated_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VouchesRequired = 'vouches_required'
}

export type Nominees_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nominees_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nominees_Set_Input>;
  where: Nominees_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nominees_Var_Pop_Fields = {
  __typename?: 'nominees_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  nominated_by_user_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  vouches_required?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nominees" */
export type Nominees_Var_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominated_by_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  vouches_required?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nominees_Var_Samp_Fields = {
  __typename?: 'nominees_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  nominated_by_user_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  vouches_required?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nominees" */
export type Nominees_Var_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominated_by_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  vouches_required?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nominees_Variance_Fields = {
  __typename?: 'nominees_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  nominated_by_user_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  vouches_required?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nominees" */
export type Nominees_Variance_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominated_by_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  vouches_required?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "organizations" */
export type Organizations = {
  __typename?: 'organizations';
  /** An array relationship */
  circles: Array<Circles>;
  /** An aggregate relationship */
  circles_aggregate: Circles_Aggregate;
  created_at: Scalars['timestamp'];
  id: Scalars['bigint'];
  is_verified: Scalars['Boolean'];
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** Indicates a test/sample/sandbox org */
  sandbox: Scalars['Boolean'];
  telegram_id?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamp'];
  /** An array relationship */
  vaults: Array<Vaults>;
  /** An aggregate relationship */
  vaults_aggregate: Vaults_Aggregate;
};


/** columns and relationships of "organizations" */
export type OrganizationsCirclesArgs = {
  distinct_on?: InputMaybe<Array<Circles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circles_Order_By>>;
  where?: InputMaybe<Circles_Bool_Exp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsCircles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circles_Order_By>>;
  where?: InputMaybe<Circles_Bool_Exp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsVaultsArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vaults_Order_By>>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsVaults_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vaults_Order_By>>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};

/** aggregated selection of "organizations" */
export type Organizations_Aggregate = {
  __typename?: 'organizations_aggregate';
  aggregate?: Maybe<Organizations_Aggregate_Fields>;
  nodes: Array<Organizations>;
};

/** aggregate fields of "organizations" */
export type Organizations_Aggregate_Fields = {
  __typename?: 'organizations_aggregate_fields';
  avg?: Maybe<Organizations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Organizations_Max_Fields>;
  min?: Maybe<Organizations_Min_Fields>;
  stddev?: Maybe<Organizations_Stddev_Fields>;
  stddev_pop?: Maybe<Organizations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organizations_Stddev_Samp_Fields>;
  sum?: Maybe<Organizations_Sum_Fields>;
  var_pop?: Maybe<Organizations_Var_Pop_Fields>;
  var_samp?: Maybe<Organizations_Var_Samp_Fields>;
  variance?: Maybe<Organizations_Variance_Fields>;
};


/** aggregate fields of "organizations" */
export type Organizations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organizations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Organizations_Avg_Fields = {
  __typename?: 'organizations_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "organizations". All fields are combined with a logical 'AND'. */
export type Organizations_Bool_Exp = {
  _and?: InputMaybe<Array<Organizations_Bool_Exp>>;
  _not?: InputMaybe<Organizations_Bool_Exp>;
  _or?: InputMaybe<Array<Organizations_Bool_Exp>>;
  circles?: InputMaybe<Circles_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_verified?: InputMaybe<Boolean_Comparison_Exp>;
  logo?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  sandbox?: InputMaybe<Boolean_Comparison_Exp>;
  telegram_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  vaults?: InputMaybe<Vaults_Bool_Exp>;
};

/** unique or primary key constraints on table "organizations" */
export enum Organizations_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationsPkey = 'organizations_pkey'
}

/** input type for incrementing numeric columns in table "organizations" */
export type Organizations_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "organizations" */
export type Organizations_Insert_Input = {
  circles?: InputMaybe<Circles_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  is_verified?: InputMaybe<Scalars['Boolean']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** Indicates a test/sample/sandbox org */
  sandbox?: InputMaybe<Scalars['Boolean']>;
  telegram_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  vaults?: InputMaybe<Vaults_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Organizations_Max_Fields = {
  __typename?: 'organizations_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['bigint']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  telegram_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Organizations_Min_Fields = {
  __typename?: 'organizations_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['bigint']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  telegram_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "organizations" */
export type Organizations_Mutation_Response = {
  __typename?: 'organizations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organizations>;
};

/** input type for inserting object relation for remote table "organizations" */
export type Organizations_Obj_Rel_Insert_Input = {
  data: Organizations_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};

/** on_conflict condition type for table "organizations" */
export type Organizations_On_Conflict = {
  constraint: Organizations_Constraint;
  update_columns?: Array<Organizations_Update_Column>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};

/** Ordering options when selecting data from "organizations". */
export type Organizations_Order_By = {
  circles_aggregate?: InputMaybe<Circles_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_verified?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  sandbox?: InputMaybe<Order_By>;
  telegram_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vaults_aggregate?: InputMaybe<Vaults_Aggregate_Order_By>;
};

/** primary key columns input for table: organizations */
export type Organizations_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "organizations" */
export enum Organizations_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsVerified = 'is_verified',
  /** column name */
  Logo = 'logo',
  /** column name */
  Name = 'name',
  /** column name */
  Sandbox = 'sandbox',
  /** column name */
  TelegramId = 'telegram_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "organizations" */
export type Organizations_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  is_verified?: InputMaybe<Scalars['Boolean']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** Indicates a test/sample/sandbox org */
  sandbox?: InputMaybe<Scalars['Boolean']>;
  telegram_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Organizations_Stddev_Fields = {
  __typename?: 'organizations_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Organizations_Stddev_Pop_Fields = {
  __typename?: 'organizations_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Organizations_Stddev_Samp_Fields = {
  __typename?: 'organizations_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "organizations" */
export type Organizations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organizations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organizations_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  is_verified?: InputMaybe<Scalars['Boolean']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** Indicates a test/sample/sandbox org */
  sandbox?: InputMaybe<Scalars['Boolean']>;
  telegram_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Organizations_Sum_Fields = {
  __typename?: 'organizations_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "organizations" */
export enum Organizations_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsVerified = 'is_verified',
  /** column name */
  Logo = 'logo',
  /** column name */
  Name = 'name',
  /** column name */
  Sandbox = 'sandbox',
  /** column name */
  TelegramId = 'telegram_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Organizations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Organizations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organizations_Set_Input>;
  where: Organizations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Organizations_Var_Pop_Fields = {
  __typename?: 'organizations_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Organizations_Var_Samp_Fields = {
  __typename?: 'organizations_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Organizations_Variance_Fields = {
  __typename?: 'organizations_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "pending_gift_private" */
export type Pending_Gift_Private = {
  __typename?: 'pending_gift_private';
  gift_id?: Maybe<Scalars['bigint']>;
  note?: Maybe<Scalars['String']>;
  /** An object relationship */
  recipient?: Maybe<Users>;
  recipient_id?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  sender?: Maybe<Users>;
  sender_id?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "pending_gift_private" */
export type Pending_Gift_Private_Aggregate = {
  __typename?: 'pending_gift_private_aggregate';
  aggregate?: Maybe<Pending_Gift_Private_Aggregate_Fields>;
  nodes: Array<Pending_Gift_Private>;
};

/** aggregate fields of "pending_gift_private" */
export type Pending_Gift_Private_Aggregate_Fields = {
  __typename?: 'pending_gift_private_aggregate_fields';
  avg?: Maybe<Pending_Gift_Private_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pending_Gift_Private_Max_Fields>;
  min?: Maybe<Pending_Gift_Private_Min_Fields>;
  stddev?: Maybe<Pending_Gift_Private_Stddev_Fields>;
  stddev_pop?: Maybe<Pending_Gift_Private_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pending_Gift_Private_Stddev_Samp_Fields>;
  sum?: Maybe<Pending_Gift_Private_Sum_Fields>;
  var_pop?: Maybe<Pending_Gift_Private_Var_Pop_Fields>;
  var_samp?: Maybe<Pending_Gift_Private_Var_Samp_Fields>;
  variance?: Maybe<Pending_Gift_Private_Variance_Fields>;
};


/** aggregate fields of "pending_gift_private" */
export type Pending_Gift_Private_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pending_Gift_Private_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Pending_Gift_Private_Avg_Fields = {
  __typename?: 'pending_gift_private_avg_fields';
  gift_id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "pending_gift_private". All fields are combined with a logical 'AND'. */
export type Pending_Gift_Private_Bool_Exp = {
  _and?: InputMaybe<Array<Pending_Gift_Private_Bool_Exp>>;
  _not?: InputMaybe<Pending_Gift_Private_Bool_Exp>;
  _or?: InputMaybe<Array<Pending_Gift_Private_Bool_Exp>>;
  gift_id?: InputMaybe<Bigint_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  recipient?: InputMaybe<Users_Bool_Exp>;
  recipient_id?: InputMaybe<Bigint_Comparison_Exp>;
  sender?: InputMaybe<Users_Bool_Exp>;
  sender_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "pending_gift_private" */
export type Pending_Gift_Private_Inc_Input = {
  gift_id?: InputMaybe<Scalars['bigint']>;
  recipient_id?: InputMaybe<Scalars['bigint']>;
  sender_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "pending_gift_private" */
export type Pending_Gift_Private_Insert_Input = {
  gift_id?: InputMaybe<Scalars['bigint']>;
  note?: InputMaybe<Scalars['String']>;
  recipient?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  recipient_id?: InputMaybe<Scalars['bigint']>;
  sender?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  sender_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Pending_Gift_Private_Max_Fields = {
  __typename?: 'pending_gift_private_max_fields';
  gift_id?: Maybe<Scalars['bigint']>;
  note?: Maybe<Scalars['String']>;
  recipient_id?: Maybe<Scalars['bigint']>;
  sender_id?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Pending_Gift_Private_Min_Fields = {
  __typename?: 'pending_gift_private_min_fields';
  gift_id?: Maybe<Scalars['bigint']>;
  note?: Maybe<Scalars['String']>;
  recipient_id?: Maybe<Scalars['bigint']>;
  sender_id?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "pending_gift_private" */
export type Pending_Gift_Private_Mutation_Response = {
  __typename?: 'pending_gift_private_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pending_Gift_Private>;
};

/** input type for inserting object relation for remote table "pending_gift_private" */
export type Pending_Gift_Private_Obj_Rel_Insert_Input = {
  data: Pending_Gift_Private_Insert_Input;
};

/** Ordering options when selecting data from "pending_gift_private". */
export type Pending_Gift_Private_Order_By = {
  gift_id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  recipient?: InputMaybe<Users_Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Users_Order_By>;
  sender_id?: InputMaybe<Order_By>;
};

/** select columns of table "pending_gift_private" */
export enum Pending_Gift_Private_Select_Column {
  /** column name */
  GiftId = 'gift_id',
  /** column name */
  Note = 'note',
  /** column name */
  RecipientId = 'recipient_id',
  /** column name */
  SenderId = 'sender_id'
}

/** input type for updating data in table "pending_gift_private" */
export type Pending_Gift_Private_Set_Input = {
  gift_id?: InputMaybe<Scalars['bigint']>;
  note?: InputMaybe<Scalars['String']>;
  recipient_id?: InputMaybe<Scalars['bigint']>;
  sender_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Pending_Gift_Private_Stddev_Fields = {
  __typename?: 'pending_gift_private_stddev_fields';
  gift_id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Pending_Gift_Private_Stddev_Pop_Fields = {
  __typename?: 'pending_gift_private_stddev_pop_fields';
  gift_id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Pending_Gift_Private_Stddev_Samp_Fields = {
  __typename?: 'pending_gift_private_stddev_samp_fields';
  gift_id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "pending_gift_private" */
export type Pending_Gift_Private_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pending_Gift_Private_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pending_Gift_Private_Stream_Cursor_Value_Input = {
  gift_id?: InputMaybe<Scalars['bigint']>;
  note?: InputMaybe<Scalars['String']>;
  recipient_id?: InputMaybe<Scalars['bigint']>;
  sender_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Pending_Gift_Private_Sum_Fields = {
  __typename?: 'pending_gift_private_sum_fields';
  gift_id?: Maybe<Scalars['bigint']>;
  recipient_id?: Maybe<Scalars['bigint']>;
  sender_id?: Maybe<Scalars['bigint']>;
};

export type Pending_Gift_Private_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pending_Gift_Private_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pending_Gift_Private_Set_Input>;
  where: Pending_Gift_Private_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pending_Gift_Private_Var_Pop_Fields = {
  __typename?: 'pending_gift_private_var_pop_fields';
  gift_id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Pending_Gift_Private_Var_Samp_Fields = {
  __typename?: 'pending_gift_private_var_samp_fields';
  gift_id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Pending_Gift_Private_Variance_Fields = {
  __typename?: 'pending_gift_private_variance_fields';
  gift_id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

/** GIVE allocations made by circle members for the currently running epoch */
export type Pending_Token_Gifts = {
  __typename?: 'pending_token_gifts';
  /** An object relationship */
  circle: Circles;
  circle_id: Scalars['bigint'];
  created_at: Scalars['timestamp'];
  dts_created: Scalars['timestamp'];
  /** An object relationship */
  epoch?: Maybe<Epochs>;
  epoch_id: Scalars['Int'];
  /** An object relationship */
  gift_private?: Maybe<Pending_Gift_Private>;
  id: Scalars['bigint'];
  note?: Maybe<Scalars['String']>;
  /** An object relationship */
  recipient: Users;
  recipient_address: Scalars['String'];
  recipient_id: Scalars['bigint'];
  /** An object relationship */
  sender: Users;
  sender_address: Scalars['String'];
  sender_id: Scalars['bigint'];
  tokens: Scalars['Int'];
  updated_at: Scalars['timestamp'];
};

/** aggregated selection of "pending_token_gifts" */
export type Pending_Token_Gifts_Aggregate = {
  __typename?: 'pending_token_gifts_aggregate';
  aggregate?: Maybe<Pending_Token_Gifts_Aggregate_Fields>;
  nodes: Array<Pending_Token_Gifts>;
};

/** aggregate fields of "pending_token_gifts" */
export type Pending_Token_Gifts_Aggregate_Fields = {
  __typename?: 'pending_token_gifts_aggregate_fields';
  avg?: Maybe<Pending_Token_Gifts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pending_Token_Gifts_Max_Fields>;
  min?: Maybe<Pending_Token_Gifts_Min_Fields>;
  stddev?: Maybe<Pending_Token_Gifts_Stddev_Fields>;
  stddev_pop?: Maybe<Pending_Token_Gifts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pending_Token_Gifts_Stddev_Samp_Fields>;
  sum?: Maybe<Pending_Token_Gifts_Sum_Fields>;
  var_pop?: Maybe<Pending_Token_Gifts_Var_Pop_Fields>;
  var_samp?: Maybe<Pending_Token_Gifts_Var_Samp_Fields>;
  variance?: Maybe<Pending_Token_Gifts_Variance_Fields>;
};


/** aggregate fields of "pending_token_gifts" */
export type Pending_Token_Gifts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pending_Token_Gifts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pending_token_gifts" */
export type Pending_Token_Gifts_Aggregate_Order_By = {
  avg?: InputMaybe<Pending_Token_Gifts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pending_Token_Gifts_Max_Order_By>;
  min?: InputMaybe<Pending_Token_Gifts_Min_Order_By>;
  stddev?: InputMaybe<Pending_Token_Gifts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pending_Token_Gifts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pending_Token_Gifts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pending_Token_Gifts_Sum_Order_By>;
  var_pop?: InputMaybe<Pending_Token_Gifts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pending_Token_Gifts_Var_Samp_Order_By>;
  variance?: InputMaybe<Pending_Token_Gifts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pending_token_gifts" */
export type Pending_Token_Gifts_Arr_Rel_Insert_Input = {
  data: Array<Pending_Token_Gifts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Pending_Token_Gifts_On_Conflict>;
};

/** aggregate avg on columns */
export type Pending_Token_Gifts_Avg_Fields = {
  __typename?: 'pending_token_gifts_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "pending_token_gifts" */
export type Pending_Token_Gifts_Avg_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pending_token_gifts". All fields are combined with a logical 'AND'. */
export type Pending_Token_Gifts_Bool_Exp = {
  _and?: InputMaybe<Array<Pending_Token_Gifts_Bool_Exp>>;
  _not?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
  _or?: InputMaybe<Array<Pending_Token_Gifts_Bool_Exp>>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  dts_created?: InputMaybe<Timestamp_Comparison_Exp>;
  epoch?: InputMaybe<Epochs_Bool_Exp>;
  epoch_id?: InputMaybe<Int_Comparison_Exp>;
  gift_private?: InputMaybe<Pending_Gift_Private_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  recipient?: InputMaybe<Users_Bool_Exp>;
  recipient_address?: InputMaybe<String_Comparison_Exp>;
  recipient_id?: InputMaybe<Bigint_Comparison_Exp>;
  sender?: InputMaybe<Users_Bool_Exp>;
  sender_address?: InputMaybe<String_Comparison_Exp>;
  sender_id?: InputMaybe<Bigint_Comparison_Exp>;
  tokens?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "pending_token_gifts" */
export enum Pending_Token_Gifts_Constraint {
  /** unique or primary key constraint on columns "id" */
  PendingTokenGiftsPkey = 'pending_token_gifts_pkey',
  /** unique or primary key constraint on columns "recipient_id", "sender_id", "epoch_id" */
  PendingTokenGiftsSenderIdRecipientIdEpochIdKey = 'pending_token_gifts_sender_id_recipient_id_epoch_id_key'
}

/** input type for incrementing numeric columns in table "pending_token_gifts" */
export type Pending_Token_Gifts_Inc_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  epoch_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  recipient_id?: InputMaybe<Scalars['bigint']>;
  sender_id?: InputMaybe<Scalars['bigint']>;
  tokens?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "pending_token_gifts" */
export type Pending_Token_Gifts_Insert_Input = {
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  dts_created?: InputMaybe<Scalars['timestamp']>;
  epoch?: InputMaybe<Epochs_Obj_Rel_Insert_Input>;
  epoch_id?: InputMaybe<Scalars['Int']>;
  gift_private?: InputMaybe<Pending_Gift_Private_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']>;
  note?: InputMaybe<Scalars['String']>;
  recipient?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  recipient_address?: InputMaybe<Scalars['String']>;
  recipient_id?: InputMaybe<Scalars['bigint']>;
  sender?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  sender_address?: InputMaybe<Scalars['String']>;
  sender_id?: InputMaybe<Scalars['bigint']>;
  tokens?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Pending_Token_Gifts_Max_Fields = {
  __typename?: 'pending_token_gifts_max_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamp']>;
  dts_created?: Maybe<Scalars['timestamp']>;
  epoch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  note?: Maybe<Scalars['String']>;
  recipient_address?: Maybe<Scalars['String']>;
  recipient_id?: Maybe<Scalars['bigint']>;
  sender_address?: Maybe<Scalars['String']>;
  sender_id?: Maybe<Scalars['bigint']>;
  tokens?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "pending_token_gifts" */
export type Pending_Token_Gifts_Max_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dts_created?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  recipient_address?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_address?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pending_Token_Gifts_Min_Fields = {
  __typename?: 'pending_token_gifts_min_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamp']>;
  dts_created?: Maybe<Scalars['timestamp']>;
  epoch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  note?: Maybe<Scalars['String']>;
  recipient_address?: Maybe<Scalars['String']>;
  recipient_id?: Maybe<Scalars['bigint']>;
  sender_address?: Maybe<Scalars['String']>;
  sender_id?: Maybe<Scalars['bigint']>;
  tokens?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "pending_token_gifts" */
export type Pending_Token_Gifts_Min_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dts_created?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  recipient_address?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_address?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pending_token_gifts" */
export type Pending_Token_Gifts_Mutation_Response = {
  __typename?: 'pending_token_gifts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pending_Token_Gifts>;
};

/** on_conflict condition type for table "pending_token_gifts" */
export type Pending_Token_Gifts_On_Conflict = {
  constraint: Pending_Token_Gifts_Constraint;
  update_columns?: Array<Pending_Token_Gifts_Update_Column>;
  where?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
};

/** Ordering options when selecting data from "pending_token_gifts". */
export type Pending_Token_Gifts_Order_By = {
  circle?: InputMaybe<Circles_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dts_created?: InputMaybe<Order_By>;
  epoch?: InputMaybe<Epochs_Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  gift_private?: InputMaybe<Pending_Gift_Private_Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  recipient?: InputMaybe<Users_Order_By>;
  recipient_address?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Users_Order_By>;
  sender_address?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pending_token_gifts */
export type Pending_Token_Gifts_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "pending_token_gifts" */
export enum Pending_Token_Gifts_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DtsCreated = 'dts_created',
  /** column name */
  EpochId = 'epoch_id',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  RecipientAddress = 'recipient_address',
  /** column name */
  RecipientId = 'recipient_id',
  /** column name */
  SenderAddress = 'sender_address',
  /** column name */
  SenderId = 'sender_id',
  /** column name */
  Tokens = 'tokens',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "pending_token_gifts" */
export type Pending_Token_Gifts_Set_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  dts_created?: InputMaybe<Scalars['timestamp']>;
  epoch_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  note?: InputMaybe<Scalars['String']>;
  recipient_address?: InputMaybe<Scalars['String']>;
  recipient_id?: InputMaybe<Scalars['bigint']>;
  sender_address?: InputMaybe<Scalars['String']>;
  sender_id?: InputMaybe<Scalars['bigint']>;
  tokens?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Pending_Token_Gifts_Stddev_Fields = {
  __typename?: 'pending_token_gifts_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "pending_token_gifts" */
export type Pending_Token_Gifts_Stddev_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pending_Token_Gifts_Stddev_Pop_Fields = {
  __typename?: 'pending_token_gifts_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "pending_token_gifts" */
export type Pending_Token_Gifts_Stddev_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pending_Token_Gifts_Stddev_Samp_Fields = {
  __typename?: 'pending_token_gifts_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "pending_token_gifts" */
export type Pending_Token_Gifts_Stddev_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "pending_token_gifts" */
export type Pending_Token_Gifts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pending_Token_Gifts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pending_Token_Gifts_Stream_Cursor_Value_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  dts_created?: InputMaybe<Scalars['timestamp']>;
  epoch_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  note?: InputMaybe<Scalars['String']>;
  recipient_address?: InputMaybe<Scalars['String']>;
  recipient_id?: InputMaybe<Scalars['bigint']>;
  sender_address?: InputMaybe<Scalars['String']>;
  sender_id?: InputMaybe<Scalars['bigint']>;
  tokens?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Pending_Token_Gifts_Sum_Fields = {
  __typename?: 'pending_token_gifts_sum_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  epoch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  recipient_id?: Maybe<Scalars['bigint']>;
  sender_id?: Maybe<Scalars['bigint']>;
  tokens?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "pending_token_gifts" */
export type Pending_Token_Gifts_Sum_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** update columns of table "pending_token_gifts" */
export enum Pending_Token_Gifts_Update_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DtsCreated = 'dts_created',
  /** column name */
  EpochId = 'epoch_id',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  RecipientAddress = 'recipient_address',
  /** column name */
  RecipientId = 'recipient_id',
  /** column name */
  SenderAddress = 'sender_address',
  /** column name */
  SenderId = 'sender_id',
  /** column name */
  Tokens = 'tokens',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Pending_Token_Gifts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pending_Token_Gifts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pending_Token_Gifts_Set_Input>;
  where: Pending_Token_Gifts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pending_Token_Gifts_Var_Pop_Fields = {
  __typename?: 'pending_token_gifts_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "pending_token_gifts" */
export type Pending_Token_Gifts_Var_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pending_Token_Gifts_Var_Samp_Fields = {
  __typename?: 'pending_token_gifts_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "pending_token_gifts" */
export type Pending_Token_Gifts_Var_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Pending_Token_Gifts_Variance_Fields = {
  __typename?: 'pending_token_gifts_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "pending_token_gifts" */
export type Pending_Token_Gifts_Variance_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** stores app-specific context to aid in the recovery of incomplete transactions */
export type Pending_Vault_Transactions = {
  __typename?: 'pending_vault_transactions';
  chain_id: Scalars['Int'];
  claim_id?: Maybe<Scalars['bigint']>;
  created_at: Scalars['timestamp'];
  created_by: Scalars['bigint'];
  /** An object relationship */
  distribution?: Maybe<Distributions>;
  distribution_id?: Maybe<Scalars['bigint']>;
  org_id?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  organization?: Maybe<Organizations>;
  /** An object relationship */
  profile: Profiles;
  tx_hash: Scalars['String'];
  tx_type: Vault_Tx_Types_Enum;
  /** An object relationship */
  vault_tx_type: Vault_Tx_Types;
};

/** aggregated selection of "pending_vault_transactions" */
export type Pending_Vault_Transactions_Aggregate = {
  __typename?: 'pending_vault_transactions_aggregate';
  aggregate?: Maybe<Pending_Vault_Transactions_Aggregate_Fields>;
  nodes: Array<Pending_Vault_Transactions>;
};

/** aggregate fields of "pending_vault_transactions" */
export type Pending_Vault_Transactions_Aggregate_Fields = {
  __typename?: 'pending_vault_transactions_aggregate_fields';
  avg?: Maybe<Pending_Vault_Transactions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pending_Vault_Transactions_Max_Fields>;
  min?: Maybe<Pending_Vault_Transactions_Min_Fields>;
  stddev?: Maybe<Pending_Vault_Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Pending_Vault_Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pending_Vault_Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Pending_Vault_Transactions_Sum_Fields>;
  var_pop?: Maybe<Pending_Vault_Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Pending_Vault_Transactions_Var_Samp_Fields>;
  variance?: Maybe<Pending_Vault_Transactions_Variance_Fields>;
};


/** aggregate fields of "pending_vault_transactions" */
export type Pending_Vault_Transactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pending_Vault_Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Pending_Vault_Transactions_Avg_Fields = {
  __typename?: 'pending_vault_transactions_avg_fields';
  chain_id?: Maybe<Scalars['Float']>;
  claim_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "pending_vault_transactions". All fields are combined with a logical 'AND'. */
export type Pending_Vault_Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Pending_Vault_Transactions_Bool_Exp>>;
  _not?: InputMaybe<Pending_Vault_Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Pending_Vault_Transactions_Bool_Exp>>;
  chain_id?: InputMaybe<Int_Comparison_Exp>;
  claim_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by?: InputMaybe<Bigint_Comparison_Exp>;
  distribution?: InputMaybe<Distributions_Bool_Exp>;
  distribution_id?: InputMaybe<Bigint_Comparison_Exp>;
  org_id?: InputMaybe<Bigint_Comparison_Exp>;
  organization?: InputMaybe<Organizations_Bool_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  tx_hash?: InputMaybe<String_Comparison_Exp>;
  tx_type?: InputMaybe<Vault_Tx_Types_Enum_Comparison_Exp>;
  vault_tx_type?: InputMaybe<Vault_Tx_Types_Bool_Exp>;
};

/** unique or primary key constraints on table "pending_vault_transactions" */
export enum Pending_Vault_Transactions_Constraint {
  /** unique or primary key constraint on columns "tx_hash" */
  PendingVaultTransactionsPkey = 'pending_vault_transactions_pkey'
}

/** input type for incrementing numeric columns in table "pending_vault_transactions" */
export type Pending_Vault_Transactions_Inc_Input = {
  chain_id?: InputMaybe<Scalars['Int']>;
  claim_id?: InputMaybe<Scalars['bigint']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  distribution_id?: InputMaybe<Scalars['bigint']>;
  org_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "pending_vault_transactions" */
export type Pending_Vault_Transactions_Insert_Input = {
  chain_id?: InputMaybe<Scalars['Int']>;
  claim_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  distribution?: InputMaybe<Distributions_Obj_Rel_Insert_Input>;
  distribution_id?: InputMaybe<Scalars['bigint']>;
  org_id?: InputMaybe<Scalars['bigint']>;
  organization?: InputMaybe<Organizations_Obj_Rel_Insert_Input>;
  profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
  tx_hash?: InputMaybe<Scalars['String']>;
  tx_type?: InputMaybe<Vault_Tx_Types_Enum>;
  vault_tx_type?: InputMaybe<Vault_Tx_Types_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Pending_Vault_Transactions_Max_Fields = {
  __typename?: 'pending_vault_transactions_max_fields';
  chain_id?: Maybe<Scalars['Int']>;
  claim_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamp']>;
  created_by?: Maybe<Scalars['bigint']>;
  distribution_id?: Maybe<Scalars['bigint']>;
  org_id?: Maybe<Scalars['bigint']>;
  tx_hash?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Pending_Vault_Transactions_Min_Fields = {
  __typename?: 'pending_vault_transactions_min_fields';
  chain_id?: Maybe<Scalars['Int']>;
  claim_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamp']>;
  created_by?: Maybe<Scalars['bigint']>;
  distribution_id?: Maybe<Scalars['bigint']>;
  org_id?: Maybe<Scalars['bigint']>;
  tx_hash?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "pending_vault_transactions" */
export type Pending_Vault_Transactions_Mutation_Response = {
  __typename?: 'pending_vault_transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pending_Vault_Transactions>;
};

/** on_conflict condition type for table "pending_vault_transactions" */
export type Pending_Vault_Transactions_On_Conflict = {
  constraint: Pending_Vault_Transactions_Constraint;
  update_columns?: Array<Pending_Vault_Transactions_Update_Column>;
  where?: InputMaybe<Pending_Vault_Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "pending_vault_transactions". */
export type Pending_Vault_Transactions_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  claim_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  distribution?: InputMaybe<Distributions_Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organizations_Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  tx_hash?: InputMaybe<Order_By>;
  tx_type?: InputMaybe<Order_By>;
  vault_tx_type?: InputMaybe<Vault_Tx_Types_Order_By>;
};

/** primary key columns input for table: pending_vault_transactions */
export type Pending_Vault_Transactions_Pk_Columns_Input = {
  tx_hash: Scalars['String'];
};

/** select columns of table "pending_vault_transactions" */
export enum Pending_Vault_Transactions_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  ClaimId = 'claim_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DistributionId = 'distribution_id',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  TxHash = 'tx_hash',
  /** column name */
  TxType = 'tx_type'
}

/** input type for updating data in table "pending_vault_transactions" */
export type Pending_Vault_Transactions_Set_Input = {
  chain_id?: InputMaybe<Scalars['Int']>;
  claim_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  distribution_id?: InputMaybe<Scalars['bigint']>;
  org_id?: InputMaybe<Scalars['bigint']>;
  tx_hash?: InputMaybe<Scalars['String']>;
  tx_type?: InputMaybe<Vault_Tx_Types_Enum>;
};

/** aggregate stddev on columns */
export type Pending_Vault_Transactions_Stddev_Fields = {
  __typename?: 'pending_vault_transactions_stddev_fields';
  chain_id?: Maybe<Scalars['Float']>;
  claim_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Pending_Vault_Transactions_Stddev_Pop_Fields = {
  __typename?: 'pending_vault_transactions_stddev_pop_fields';
  chain_id?: Maybe<Scalars['Float']>;
  claim_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Pending_Vault_Transactions_Stddev_Samp_Fields = {
  __typename?: 'pending_vault_transactions_stddev_samp_fields';
  chain_id?: Maybe<Scalars['Float']>;
  claim_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "pending_vault_transactions" */
export type Pending_Vault_Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pending_Vault_Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pending_Vault_Transactions_Stream_Cursor_Value_Input = {
  chain_id?: InputMaybe<Scalars['Int']>;
  claim_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  distribution_id?: InputMaybe<Scalars['bigint']>;
  org_id?: InputMaybe<Scalars['bigint']>;
  tx_hash?: InputMaybe<Scalars['String']>;
  tx_type?: InputMaybe<Vault_Tx_Types_Enum>;
};

/** aggregate sum on columns */
export type Pending_Vault_Transactions_Sum_Fields = {
  __typename?: 'pending_vault_transactions_sum_fields';
  chain_id?: Maybe<Scalars['Int']>;
  claim_id?: Maybe<Scalars['bigint']>;
  created_by?: Maybe<Scalars['bigint']>;
  distribution_id?: Maybe<Scalars['bigint']>;
  org_id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "pending_vault_transactions" */
export enum Pending_Vault_Transactions_Update_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  ClaimId = 'claim_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DistributionId = 'distribution_id',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  TxHash = 'tx_hash',
  /** column name */
  TxType = 'tx_type'
}

export type Pending_Vault_Transactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pending_Vault_Transactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pending_Vault_Transactions_Set_Input>;
  where: Pending_Vault_Transactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pending_Vault_Transactions_Var_Pop_Fields = {
  __typename?: 'pending_vault_transactions_var_pop_fields';
  chain_id?: Maybe<Scalars['Float']>;
  claim_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Pending_Vault_Transactions_Var_Samp_Fields = {
  __typename?: 'pending_vault_transactions_var_samp_fields';
  chain_id?: Maybe<Scalars['Float']>;
  claim_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Pending_Vault_Transactions_Variance_Fields = {
  __typename?: 'pending_vault_transactions_variance_fields';
  chain_id?: Maybe<Scalars['Float']>;
  claim_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "personal_access_tokens" */
export type Personal_Access_Tokens = {
  __typename?: 'personal_access_tokens';
  abilities?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamp'];
  id: Scalars['bigint'];
  last_used_at?: Maybe<Scalars['timestamp']>;
  name: Scalars['String'];
  /** An object relationship */
  profile?: Maybe<Profiles>;
  token: Scalars['String'];
  tokenable_id: Scalars['bigint'];
  tokenable_type: Scalars['String'];
  updated_at: Scalars['timestamp'];
};

/** aggregated selection of "personal_access_tokens" */
export type Personal_Access_Tokens_Aggregate = {
  __typename?: 'personal_access_tokens_aggregate';
  aggregate?: Maybe<Personal_Access_Tokens_Aggregate_Fields>;
  nodes: Array<Personal_Access_Tokens>;
};

/** aggregate fields of "personal_access_tokens" */
export type Personal_Access_Tokens_Aggregate_Fields = {
  __typename?: 'personal_access_tokens_aggregate_fields';
  avg?: Maybe<Personal_Access_Tokens_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Personal_Access_Tokens_Max_Fields>;
  min?: Maybe<Personal_Access_Tokens_Min_Fields>;
  stddev?: Maybe<Personal_Access_Tokens_Stddev_Fields>;
  stddev_pop?: Maybe<Personal_Access_Tokens_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Personal_Access_Tokens_Stddev_Samp_Fields>;
  sum?: Maybe<Personal_Access_Tokens_Sum_Fields>;
  var_pop?: Maybe<Personal_Access_Tokens_Var_Pop_Fields>;
  var_samp?: Maybe<Personal_Access_Tokens_Var_Samp_Fields>;
  variance?: Maybe<Personal_Access_Tokens_Variance_Fields>;
};


/** aggregate fields of "personal_access_tokens" */
export type Personal_Access_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Personal_Access_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Personal_Access_Tokens_Avg_Fields = {
  __typename?: 'personal_access_tokens_avg_fields';
  id?: Maybe<Scalars['Float']>;
  tokenable_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "personal_access_tokens". All fields are combined with a logical 'AND'. */
export type Personal_Access_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Personal_Access_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Personal_Access_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Personal_Access_Tokens_Bool_Exp>>;
  abilities?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  last_used_at?: InputMaybe<Timestamp_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  tokenable_id?: InputMaybe<Bigint_Comparison_Exp>;
  tokenable_type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "personal_access_tokens" */
export enum Personal_Access_Tokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  PersonalAccessTokensPkey = 'personal_access_tokens_pkey',
  /** unique or primary key constraint on columns "token" */
  PersonalAccessTokensTokenKey = 'personal_access_tokens_token_key'
}

/** input type for incrementing numeric columns in table "personal_access_tokens" */
export type Personal_Access_Tokens_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  tokenable_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "personal_access_tokens" */
export type Personal_Access_Tokens_Insert_Input = {
  abilities?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  last_used_at?: InputMaybe<Scalars['timestamp']>;
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
  token?: InputMaybe<Scalars['String']>;
  tokenable_id?: InputMaybe<Scalars['bigint']>;
  tokenable_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Personal_Access_Tokens_Max_Fields = {
  __typename?: 'personal_access_tokens_max_fields';
  abilities?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['bigint']>;
  last_used_at?: Maybe<Scalars['timestamp']>;
  name?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  tokenable_id?: Maybe<Scalars['bigint']>;
  tokenable_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Personal_Access_Tokens_Min_Fields = {
  __typename?: 'personal_access_tokens_min_fields';
  abilities?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['bigint']>;
  last_used_at?: Maybe<Scalars['timestamp']>;
  name?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  tokenable_id?: Maybe<Scalars['bigint']>;
  tokenable_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "personal_access_tokens" */
export type Personal_Access_Tokens_Mutation_Response = {
  __typename?: 'personal_access_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Personal_Access_Tokens>;
};

/** on_conflict condition type for table "personal_access_tokens" */
export type Personal_Access_Tokens_On_Conflict = {
  constraint: Personal_Access_Tokens_Constraint;
  update_columns?: Array<Personal_Access_Tokens_Update_Column>;
  where?: InputMaybe<Personal_Access_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "personal_access_tokens". */
export type Personal_Access_Tokens_Order_By = {
  abilities?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_used_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  token?: InputMaybe<Order_By>;
  tokenable_id?: InputMaybe<Order_By>;
  tokenable_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: personal_access_tokens */
export type Personal_Access_Tokens_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "personal_access_tokens" */
export enum Personal_Access_Tokens_Select_Column {
  /** column name */
  Abilities = 'abilities',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastUsedAt = 'last_used_at',
  /** column name */
  Name = 'name',
  /** column name */
  Token = 'token',
  /** column name */
  TokenableId = 'tokenable_id',
  /** column name */
  TokenableType = 'tokenable_type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "personal_access_tokens" */
export type Personal_Access_Tokens_Set_Input = {
  abilities?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  last_used_at?: InputMaybe<Scalars['timestamp']>;
  name?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  tokenable_id?: InputMaybe<Scalars['bigint']>;
  tokenable_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Personal_Access_Tokens_Stddev_Fields = {
  __typename?: 'personal_access_tokens_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  tokenable_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Personal_Access_Tokens_Stddev_Pop_Fields = {
  __typename?: 'personal_access_tokens_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  tokenable_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Personal_Access_Tokens_Stddev_Samp_Fields = {
  __typename?: 'personal_access_tokens_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  tokenable_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "personal_access_tokens" */
export type Personal_Access_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Personal_Access_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Personal_Access_Tokens_Stream_Cursor_Value_Input = {
  abilities?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  last_used_at?: InputMaybe<Scalars['timestamp']>;
  name?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  tokenable_id?: InputMaybe<Scalars['bigint']>;
  tokenable_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Personal_Access_Tokens_Sum_Fields = {
  __typename?: 'personal_access_tokens_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  tokenable_id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "personal_access_tokens" */
export enum Personal_Access_Tokens_Update_Column {
  /** column name */
  Abilities = 'abilities',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastUsedAt = 'last_used_at',
  /** column name */
  Name = 'name',
  /** column name */
  Token = 'token',
  /** column name */
  TokenableId = 'tokenable_id',
  /** column name */
  TokenableType = 'tokenable_type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Personal_Access_Tokens_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Personal_Access_Tokens_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Personal_Access_Tokens_Set_Input>;
  where: Personal_Access_Tokens_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Personal_Access_Tokens_Var_Pop_Fields = {
  __typename?: 'personal_access_tokens_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  tokenable_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Personal_Access_Tokens_Var_Samp_Fields = {
  __typename?: 'personal_access_tokens_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  tokenable_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Personal_Access_Tokens_Variance_Fields = {
  __typename?: 'personal_access_tokens_variance_fields';
  id?: Maybe<Scalars['Float']>;
  tokenable_id?: Maybe<Scalars['Float']>;
};

/** Coordinape user accounts that can belong to one or many circles via the relationship to the users table */
export type Profiles = {
  __typename?: 'profiles';
  address: Scalars['String'];
  ann_power: Scalars['Boolean'];
  avatar?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  chat_id?: Maybe<Scalars['String']>;
  /** An array relationship */
  claims: Array<Claims>;
  /** An aggregate relationship */
  claims_aggregate: Claims_Aggregate;
  created_at: Scalars['timestamp'];
  discord_username?: Maybe<Scalars['String']>;
  /** An array relationship */
  distributions: Array<Distributions>;
  /** An aggregate relationship */
  distributions_aggregate: Distributions_Aggregate;
  github_username?: Maybe<Scalars['String']>;
  id: Scalars['bigint'];
  medium_username?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['String']>;
  telegram_username?: Maybe<Scalars['String']>;
  twitter_username?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamp'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** An array relationship */
  vault_transactions: Array<Vault_Transactions>;
  /** An aggregate relationship */
  vault_transactions_aggregate: Vault_Transactions_Aggregate;
  /** An array relationship */
  vaults: Array<Vaults>;
  /** An aggregate relationship */
  vaults_aggregate: Vaults_Aggregate;
  website?: Maybe<Scalars['String']>;
};


/** Coordinape user accounts that can belong to one or many circles via the relationship to the users table */
export type ProfilesClaimsArgs = {
  distinct_on?: InputMaybe<Array<Claims_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Claims_Order_By>>;
  where?: InputMaybe<Claims_Bool_Exp>;
};


/** Coordinape user accounts that can belong to one or many circles via the relationship to the users table */
export type ProfilesClaims_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Claims_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Claims_Order_By>>;
  where?: InputMaybe<Claims_Bool_Exp>;
};


/** Coordinape user accounts that can belong to one or many circles via the relationship to the users table */
export type ProfilesDistributionsArgs = {
  distinct_on?: InputMaybe<Array<Distributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distributions_Order_By>>;
  where?: InputMaybe<Distributions_Bool_Exp>;
};


/** Coordinape user accounts that can belong to one or many circles via the relationship to the users table */
export type ProfilesDistributions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distributions_Order_By>>;
  where?: InputMaybe<Distributions_Bool_Exp>;
};


/** Coordinape user accounts that can belong to one or many circles via the relationship to the users table */
export type ProfilesUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Coordinape user accounts that can belong to one or many circles via the relationship to the users table */
export type ProfilesUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Coordinape user accounts that can belong to one or many circles via the relationship to the users table */
export type ProfilesVault_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Transactions_Order_By>>;
  where?: InputMaybe<Vault_Transactions_Bool_Exp>;
};


/** Coordinape user accounts that can belong to one or many circles via the relationship to the users table */
export type ProfilesVault_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Transactions_Order_By>>;
  where?: InputMaybe<Vault_Transactions_Bool_Exp>;
};


/** Coordinape user accounts that can belong to one or many circles via the relationship to the users table */
export type ProfilesVaultsArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vaults_Order_By>>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};


/** Coordinape user accounts that can belong to one or many circles via the relationship to the users table */
export type ProfilesVaults_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vaults_Order_By>>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};

/** aggregated selection of "profiles" */
export type Profiles_Aggregate = {
  __typename?: 'profiles_aggregate';
  aggregate?: Maybe<Profiles_Aggregate_Fields>;
  nodes: Array<Profiles>;
};

/** aggregate fields of "profiles" */
export type Profiles_Aggregate_Fields = {
  __typename?: 'profiles_aggregate_fields';
  avg?: Maybe<Profiles_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Profiles_Max_Fields>;
  min?: Maybe<Profiles_Min_Fields>;
  stddev?: Maybe<Profiles_Stddev_Fields>;
  stddev_pop?: Maybe<Profiles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profiles_Stddev_Samp_Fields>;
  sum?: Maybe<Profiles_Sum_Fields>;
  var_pop?: Maybe<Profiles_Var_Pop_Fields>;
  var_samp?: Maybe<Profiles_Var_Samp_Fields>;
  variance?: Maybe<Profiles_Variance_Fields>;
};


/** aggregate fields of "profiles" */
export type Profiles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Profiles_Avg_Fields = {
  __typename?: 'profiles_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  _and?: InputMaybe<Array<Profiles_Bool_Exp>>;
  _not?: InputMaybe<Profiles_Bool_Exp>;
  _or?: InputMaybe<Array<Profiles_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  ann_power?: InputMaybe<Boolean_Comparison_Exp>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  background?: InputMaybe<String_Comparison_Exp>;
  bio?: InputMaybe<String_Comparison_Exp>;
  chat_id?: InputMaybe<String_Comparison_Exp>;
  claims?: InputMaybe<Claims_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  discord_username?: InputMaybe<String_Comparison_Exp>;
  distributions?: InputMaybe<Distributions_Bool_Exp>;
  github_username?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  medium_username?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  skills?: InputMaybe<String_Comparison_Exp>;
  telegram_username?: InputMaybe<String_Comparison_Exp>;
  twitter_username?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  vault_transactions?: InputMaybe<Vault_Transactions_Bool_Exp>;
  vaults?: InputMaybe<Vaults_Bool_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "profiles" */
export enum Profiles_Constraint {
  /** unique or primary key constraint on columns "address" */
  ProfilesAddressKey = 'profiles_address_key',
  /** unique or primary key constraint on columns "name" */
  ProfilesNameKey = 'profiles_name_key',
  /** unique or primary key constraint on columns "id" */
  ProfilesPkey = 'profiles_pkey'
}

/** input type for incrementing numeric columns in table "profiles" */
export type Profiles_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "profiles" */
export type Profiles_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  ann_power?: InputMaybe<Scalars['Boolean']>;
  avatar?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  chat_id?: InputMaybe<Scalars['String']>;
  claims?: InputMaybe<Claims_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  discord_username?: InputMaybe<Scalars['String']>;
  distributions?: InputMaybe<Distributions_Arr_Rel_Insert_Input>;
  github_username?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  medium_username?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Scalars['String']>;
  telegram_username?: InputMaybe<Scalars['String']>;
  twitter_username?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  vault_transactions?: InputMaybe<Vault_Transactions_Arr_Rel_Insert_Input>;
  vaults?: InputMaybe<Vaults_Arr_Rel_Insert_Input>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Profiles_Max_Fields = {
  __typename?: 'profiles_max_fields';
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  chat_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  discord_username?: Maybe<Scalars['String']>;
  github_username?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  medium_username?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['String']>;
  telegram_username?: Maybe<Scalars['String']>;
  twitter_username?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Profiles_Min_Fields = {
  __typename?: 'profiles_min_fields';
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  chat_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  discord_username?: Maybe<Scalars['String']>;
  github_username?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  medium_username?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  skills?: Maybe<Scalars['String']>;
  telegram_username?: Maybe<Scalars['String']>;
  twitter_username?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  website?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "profiles" */
export type Profiles_Mutation_Response = {
  __typename?: 'profiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Profiles>;
};

/** input type for inserting object relation for remote table "profiles" */
export type Profiles_Obj_Rel_Insert_Input = {
  data: Profiles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};

/** on_conflict condition type for table "profiles" */
export type Profiles_On_Conflict = {
  constraint: Profiles_Constraint;
  update_columns?: Array<Profiles_Update_Column>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

/** Ordering options when selecting data from "profiles". */
export type Profiles_Order_By = {
  address?: InputMaybe<Order_By>;
  ann_power?: InputMaybe<Order_By>;
  avatar?: InputMaybe<Order_By>;
  background?: InputMaybe<Order_By>;
  bio?: InputMaybe<Order_By>;
  chat_id?: InputMaybe<Order_By>;
  claims_aggregate?: InputMaybe<Claims_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  discord_username?: InputMaybe<Order_By>;
  distributions_aggregate?: InputMaybe<Distributions_Aggregate_Order_By>;
  github_username?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  medium_username?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  skills?: InputMaybe<Order_By>;
  telegram_username?: InputMaybe<Order_By>;
  twitter_username?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  vault_transactions_aggregate?: InputMaybe<Vault_Transactions_Aggregate_Order_By>;
  vaults_aggregate?: InputMaybe<Vaults_Aggregate_Order_By>;
  website?: InputMaybe<Order_By>;
};

/** primary key columns input for table: profiles */
export type Profiles_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "profiles" */
export enum Profiles_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AnnPower = 'ann_power',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Background = 'background',
  /** column name */
  Bio = 'bio',
  /** column name */
  ChatId = 'chat_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscordUsername = 'discord_username',
  /** column name */
  GithubUsername = 'github_username',
  /** column name */
  Id = 'id',
  /** column name */
  MediumUsername = 'medium_username',
  /** column name */
  Name = 'name',
  /** column name */
  Skills = 'skills',
  /** column name */
  TelegramUsername = 'telegram_username',
  /** column name */
  TwitterUsername = 'twitter_username',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "profiles" */
export type Profiles_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  ann_power?: InputMaybe<Scalars['Boolean']>;
  avatar?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  chat_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  discord_username?: InputMaybe<Scalars['String']>;
  github_username?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  medium_username?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Scalars['String']>;
  telegram_username?: InputMaybe<Scalars['String']>;
  twitter_username?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Profiles_Stddev_Fields = {
  __typename?: 'profiles_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Profiles_Stddev_Pop_Fields = {
  __typename?: 'profiles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Profiles_Stddev_Samp_Fields = {
  __typename?: 'profiles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "profiles" */
export type Profiles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Profiles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Profiles_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  ann_power?: InputMaybe<Scalars['Boolean']>;
  avatar?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  chat_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  discord_username?: InputMaybe<Scalars['String']>;
  github_username?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  medium_username?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Scalars['String']>;
  telegram_username?: InputMaybe<Scalars['String']>;
  twitter_username?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Profiles_Sum_Fields = {
  __typename?: 'profiles_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "profiles" */
export enum Profiles_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AnnPower = 'ann_power',
  /** column name */
  Avatar = 'avatar',
  /** column name */
  Background = 'background',
  /** column name */
  Bio = 'bio',
  /** column name */
  ChatId = 'chat_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DiscordUsername = 'discord_username',
  /** column name */
  GithubUsername = 'github_username',
  /** column name */
  Id = 'id',
  /** column name */
  MediumUsername = 'medium_username',
  /** column name */
  Name = 'name',
  /** column name */
  Skills = 'skills',
  /** column name */
  TelegramUsername = 'telegram_username',
  /** column name */
  TwitterUsername = 'twitter_username',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Website = 'website'
}

export type Profiles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Profiles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Profiles_Var_Pop_Fields = {
  __typename?: 'profiles_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Profiles_Var_Samp_Fields = {
  __typename?: 'profiles_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Profiles_Variance_Fields = {
  __typename?: 'profiles_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  burns: Array<Burns>;
  /** An aggregate relationship */
  burns_aggregate: Burns_Aggregate;
  /** fetch data from the table: "burns" using primary key columns */
  burns_by_pk?: Maybe<Burns>;
  /** An array relationship */
  circle_api_keys: Array<Circle_Api_Keys>;
  /** An aggregate relationship */
  circle_api_keys_aggregate: Circle_Api_Keys_Aggregate;
  /** fetch data from the table: "circle_api_keys" using primary key columns */
  circle_api_keys_by_pk?: Maybe<Circle_Api_Keys>;
  /** fetch data from the table: "circle_integrations" */
  circle_integrations: Array<Circle_Integrations>;
  /** fetch aggregated fields from the table: "circle_integrations" */
  circle_integrations_aggregate: Circle_Integrations_Aggregate;
  /** fetch data from the table: "circle_integrations" using primary key columns */
  circle_integrations_by_pk?: Maybe<Circle_Integrations>;
  /** An array relationship */
  circle_metadata: Array<Circle_Metadata>;
  /** An aggregate relationship */
  circle_metadata_aggregate: Circle_Metadata_Aggregate;
  /** fetch data from the table: "circle_metadata" using primary key columns */
  circle_metadata_by_pk?: Maybe<Circle_Metadata>;
  /** fetch data from the table: "circle_private" */
  circle_private: Array<Circle_Private>;
  /** fetch aggregated fields from the table: "circle_private" */
  circle_private_aggregate: Circle_Private_Aggregate;
  /** fetch data from the table: "circle_share_tokens" */
  circle_share_tokens: Array<Circle_Share_Tokens>;
  /** fetch aggregated fields from the table: "circle_share_tokens" */
  circle_share_tokens_aggregate: Circle_Share_Tokens_Aggregate;
  /** fetch data from the table: "circle_share_tokens" using primary key columns */
  circle_share_tokens_by_pk?: Maybe<Circle_Share_Tokens>;
  /** An array relationship */
  circles: Array<Circles>;
  /** An aggregate relationship */
  circles_aggregate: Circles_Aggregate;
  /** fetch data from the table: "circles" using primary key columns */
  circles_by_pk?: Maybe<Circles>;
  /** An array relationship */
  claims: Array<Claims>;
  /** An aggregate relationship */
  claims_aggregate: Claims_Aggregate;
  /** fetch data from the table: "claims" using primary key columns */
  claims_by_pk?: Maybe<Claims>;
  /** An array relationship */
  contributions: Array<Contributions>;
  /** An aggregate relationship */
  contributions_aggregate: Contributions_Aggregate;
  /** fetch data from the table: "contributions" using primary key columns */
  contributions_by_pk?: Maybe<Contributions>;
  /** fetch data from the table: "discord.roles_circles" */
  discord_roles_circles: Array<Discord_Roles_Circles>;
  /** fetch aggregated fields from the table: "discord.roles_circles" */
  discord_roles_circles_aggregate: Discord_Roles_Circles_Aggregate;
  /** fetch data from the table: "discord.roles_circles" using primary key columns */
  discord_roles_circles_by_pk?: Maybe<Discord_Roles_Circles>;
  /** fetch data from the table: "discord.users" */
  discord_users: Array<Discord_Users>;
  /** fetch aggregated fields from the table: "discord.users" */
  discord_users_aggregate: Discord_Users_Aggregate;
  /** fetch data from the table: "discord.users" using primary key columns */
  discord_users_by_pk?: Maybe<Discord_Users>;
  /** An array relationship */
  distributions: Array<Distributions>;
  /** An aggregate relationship */
  distributions_aggregate: Distributions_Aggregate;
  /** fetch data from the table: "distributions" using primary key columns */
  distributions_by_pk?: Maybe<Distributions>;
  /** An array relationship */
  epochs: Array<Epochs>;
  /** An aggregate relationship */
  epochs_aggregate: Epochs_Aggregate;
  /** fetch data from the table: "epoches" using primary key columns */
  epochs_by_pk?: Maybe<Epochs>;
  /** fetch data from the table: "gift_private" */
  gift_private: Array<Gift_Private>;
  /** fetch aggregated fields from the table: "gift_private" */
  gift_private_aggregate: Gift_Private_Aggregate;
  /** fetch data from the table: "histories" */
  histories: Array<Histories>;
  /** fetch aggregated fields from the table: "histories" */
  histories_aggregate: Histories_Aggregate;
  /** fetch data from the table: "histories" using primary key columns */
  histories_by_pk?: Maybe<Histories>;
  /** fetch data from the table: "interaction_events" */
  interaction_events: Array<Interaction_Events>;
  /** fetch aggregated fields from the table: "interaction_events" */
  interaction_events_aggregate: Interaction_Events_Aggregate;
  /** fetch data from the table: "interaction_events" using primary key columns */
  interaction_events_by_pk?: Maybe<Interaction_Events>;
  /** An array relationship */
  nominees: Array<Nominees>;
  /** An aggregate relationship */
  nominees_aggregate: Nominees_Aggregate;
  /** fetch data from the table: "nominees" using primary key columns */
  nominees_by_pk?: Maybe<Nominees>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table: "pending_gift_private" */
  pending_gift_private: Array<Pending_Gift_Private>;
  /** fetch aggregated fields from the table: "pending_gift_private" */
  pending_gift_private_aggregate: Pending_Gift_Private_Aggregate;
  /** An array relationship */
  pending_token_gifts: Array<Pending_Token_Gifts>;
  /** An aggregate relationship */
  pending_token_gifts_aggregate: Pending_Token_Gifts_Aggregate;
  /** fetch data from the table: "pending_token_gifts" using primary key columns */
  pending_token_gifts_by_pk?: Maybe<Pending_Token_Gifts>;
  /** fetch data from the table: "pending_vault_transactions" */
  pending_vault_transactions: Array<Pending_Vault_Transactions>;
  /** fetch aggregated fields from the table: "pending_vault_transactions" */
  pending_vault_transactions_aggregate: Pending_Vault_Transactions_Aggregate;
  /** fetch data from the table: "pending_vault_transactions" using primary key columns */
  pending_vault_transactions_by_pk?: Maybe<Pending_Vault_Transactions>;
  /** fetch data from the table: "personal_access_tokens" */
  personal_access_tokens: Array<Personal_Access_Tokens>;
  /** fetch aggregated fields from the table: "personal_access_tokens" */
  personal_access_tokens_aggregate: Personal_Access_Tokens_Aggregate;
  /** fetch data from the table: "personal_access_tokens" using primary key columns */
  personal_access_tokens_by_pk?: Maybe<Personal_Access_Tokens>;
  price_per_share: Scalars['Float'];
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** An array relationship */
  teammates: Array<Teammates>;
  /** An aggregate relationship */
  teammates_aggregate: Teammates_Aggregate;
  /** fetch data from the table: "teammates" using primary key columns */
  teammates_by_pk?: Maybe<Teammates>;
  /** An array relationship */
  token_gifts: Array<Token_Gifts>;
  /** An aggregate relationship */
  token_gifts_aggregate: Token_Gifts_Aggregate;
  /** fetch data from the table: "token_gifts" using primary key columns */
  token_gifts_by_pk?: Maybe<Token_Gifts>;
  /** fetch data from the table: "user_private" */
  user_private: Array<User_Private>;
  /** fetch aggregated fields from the table: "user_private" */
  user_private_aggregate: User_Private_Aggregate;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  vault_transactions: Array<Vault_Transactions>;
  /** An aggregate relationship */
  vault_transactions_aggregate: Vault_Transactions_Aggregate;
  /** fetch data from the table: "vault_transactions" using primary key columns */
  vault_transactions_by_pk?: Maybe<Vault_Transactions>;
  /** fetch data from the table: "vault_tx_types" */
  vault_tx_types: Array<Vault_Tx_Types>;
  /** fetch aggregated fields from the table: "vault_tx_types" */
  vault_tx_types_aggregate: Vault_Tx_Types_Aggregate;
  /** fetch data from the table: "vault_tx_types" using primary key columns */
  vault_tx_types_by_pk?: Maybe<Vault_Tx_Types>;
  /** An array relationship */
  vaults: Array<Vaults>;
  /** An aggregate relationship */
  vaults_aggregate: Vaults_Aggregate;
  /** fetch data from the table: "vaults" using primary key columns */
  vaults_by_pk?: Maybe<Vaults>;
  /** An array relationship */
  vouches: Array<Vouches>;
  /** An aggregate relationship */
  vouches_aggregate: Vouches_Aggregate;
  /** fetch data from the table: "vouches" using primary key columns */
  vouches_by_pk?: Maybe<Vouches>;
};


export type Query_RootBurnsArgs = {
  distinct_on?: InputMaybe<Array<Burns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Burns_Order_By>>;
  where?: InputMaybe<Burns_Bool_Exp>;
};


export type Query_RootBurns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Burns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Burns_Order_By>>;
  where?: InputMaybe<Burns_Bool_Exp>;
};


export type Query_RootBurns_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootCircle_Api_KeysArgs = {
  distinct_on?: InputMaybe<Array<Circle_Api_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Api_Keys_Order_By>>;
  where?: InputMaybe<Circle_Api_Keys_Bool_Exp>;
};


export type Query_RootCircle_Api_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Api_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Api_Keys_Order_By>>;
  where?: InputMaybe<Circle_Api_Keys_Bool_Exp>;
};


export type Query_RootCircle_Api_Keys_By_PkArgs = {
  hash: Scalars['String'];
};


export type Query_RootCircle_IntegrationsArgs = {
  distinct_on?: InputMaybe<Array<Circle_Integrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Integrations_Order_By>>;
  where?: InputMaybe<Circle_Integrations_Bool_Exp>;
};


export type Query_RootCircle_Integrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Integrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Integrations_Order_By>>;
  where?: InputMaybe<Circle_Integrations_Bool_Exp>;
};


export type Query_RootCircle_Integrations_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootCircle_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Circle_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Metadata_Order_By>>;
  where?: InputMaybe<Circle_Metadata_Bool_Exp>;
};


export type Query_RootCircle_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Metadata_Order_By>>;
  where?: InputMaybe<Circle_Metadata_Bool_Exp>;
};


export type Query_RootCircle_Metadata_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootCircle_PrivateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Private_Order_By>>;
  where?: InputMaybe<Circle_Private_Bool_Exp>;
};


export type Query_RootCircle_Private_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Private_Order_By>>;
  where?: InputMaybe<Circle_Private_Bool_Exp>;
};


export type Query_RootCircle_Share_TokensArgs = {
  distinct_on?: InputMaybe<Array<Circle_Share_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Share_Tokens_Order_By>>;
  where?: InputMaybe<Circle_Share_Tokens_Bool_Exp>;
};


export type Query_RootCircle_Share_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Share_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Share_Tokens_Order_By>>;
  where?: InputMaybe<Circle_Share_Tokens_Bool_Exp>;
};


export type Query_RootCircle_Share_Tokens_By_PkArgs = {
  circle_id: Scalars['bigint'];
  type: Scalars['Int'];
};


export type Query_RootCirclesArgs = {
  distinct_on?: InputMaybe<Array<Circles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circles_Order_By>>;
  where?: InputMaybe<Circles_Bool_Exp>;
};


export type Query_RootCircles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circles_Order_By>>;
  where?: InputMaybe<Circles_Bool_Exp>;
};


export type Query_RootCircles_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootClaimsArgs = {
  distinct_on?: InputMaybe<Array<Claims_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Claims_Order_By>>;
  where?: InputMaybe<Claims_Bool_Exp>;
};


export type Query_RootClaims_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Claims_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Claims_Order_By>>;
  where?: InputMaybe<Claims_Bool_Exp>;
};


export type Query_RootClaims_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootContributionsArgs = {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
};


export type Query_RootContributions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
};


export type Query_RootContributions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootDiscord_Roles_CirclesArgs = {
  distinct_on?: InputMaybe<Array<Discord_Roles_Circles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Discord_Roles_Circles_Order_By>>;
  where?: InputMaybe<Discord_Roles_Circles_Bool_Exp>;
};


export type Query_RootDiscord_Roles_Circles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Discord_Roles_Circles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Discord_Roles_Circles_Order_By>>;
  where?: InputMaybe<Discord_Roles_Circles_Bool_Exp>;
};


export type Query_RootDiscord_Roles_Circles_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootDiscord_UsersArgs = {
  distinct_on?: InputMaybe<Array<Discord_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Discord_Users_Order_By>>;
  where?: InputMaybe<Discord_Users_Bool_Exp>;
};


export type Query_RootDiscord_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Discord_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Discord_Users_Order_By>>;
  where?: InputMaybe<Discord_Users_Bool_Exp>;
};


export type Query_RootDiscord_Users_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootDistributionsArgs = {
  distinct_on?: InputMaybe<Array<Distributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distributions_Order_By>>;
  where?: InputMaybe<Distributions_Bool_Exp>;
};


export type Query_RootDistributions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distributions_Order_By>>;
  where?: InputMaybe<Distributions_Bool_Exp>;
};


export type Query_RootDistributions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootEpochsArgs = {
  distinct_on?: InputMaybe<Array<Epochs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Epochs_Order_By>>;
  where?: InputMaybe<Epochs_Bool_Exp>;
};


export type Query_RootEpochs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Epochs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Epochs_Order_By>>;
  where?: InputMaybe<Epochs_Bool_Exp>;
};


export type Query_RootEpochs_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootGift_PrivateArgs = {
  distinct_on?: InputMaybe<Array<Gift_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gift_Private_Order_By>>;
  where?: InputMaybe<Gift_Private_Bool_Exp>;
};


export type Query_RootGift_Private_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gift_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gift_Private_Order_By>>;
  where?: InputMaybe<Gift_Private_Bool_Exp>;
};


export type Query_RootHistoriesArgs = {
  distinct_on?: InputMaybe<Array<Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Histories_Order_By>>;
  where?: InputMaybe<Histories_Bool_Exp>;
};


export type Query_RootHistories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Histories_Order_By>>;
  where?: InputMaybe<Histories_Bool_Exp>;
};


export type Query_RootHistories_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootInteraction_EventsArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Interaction_Events_Order_By>>;
  where?: InputMaybe<Interaction_Events_Bool_Exp>;
};


export type Query_RootInteraction_Events_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Interaction_Events_Order_By>>;
  where?: InputMaybe<Interaction_Events_Bool_Exp>;
};


export type Query_RootInteraction_Events_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootNomineesArgs = {
  distinct_on?: InputMaybe<Array<Nominees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nominees_Order_By>>;
  where?: InputMaybe<Nominees_Bool_Exp>;
};


export type Query_RootNominees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nominees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nominees_Order_By>>;
  where?: InputMaybe<Nominees_Bool_Exp>;
};


export type Query_RootNominees_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizations_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootPending_Gift_PrivateArgs = {
  distinct_on?: InputMaybe<Array<Pending_Gift_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Gift_Private_Order_By>>;
  where?: InputMaybe<Pending_Gift_Private_Bool_Exp>;
};


export type Query_RootPending_Gift_Private_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pending_Gift_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Gift_Private_Order_By>>;
  where?: InputMaybe<Pending_Gift_Private_Bool_Exp>;
};


export type Query_RootPending_Token_GiftsArgs = {
  distinct_on?: InputMaybe<Array<Pending_Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Token_Gifts_Order_By>>;
  where?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
};


export type Query_RootPending_Token_Gifts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pending_Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Token_Gifts_Order_By>>;
  where?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
};


export type Query_RootPending_Token_Gifts_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootPending_Vault_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Pending_Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Vault_Transactions_Order_By>>;
  where?: InputMaybe<Pending_Vault_Transactions_Bool_Exp>;
};


export type Query_RootPending_Vault_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pending_Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Vault_Transactions_Order_By>>;
  where?: InputMaybe<Pending_Vault_Transactions_Bool_Exp>;
};


export type Query_RootPending_Vault_Transactions_By_PkArgs = {
  tx_hash: Scalars['String'];
};


export type Query_RootPersonal_Access_TokensArgs = {
  distinct_on?: InputMaybe<Array<Personal_Access_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Personal_Access_Tokens_Order_By>>;
  where?: InputMaybe<Personal_Access_Tokens_Bool_Exp>;
};


export type Query_RootPersonal_Access_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personal_Access_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Personal_Access_Tokens_Order_By>>;
  where?: InputMaybe<Personal_Access_Tokens_Bool_Exp>;
};


export type Query_RootPersonal_Access_Tokens_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootPrice_Per_ShareArgs = {
  chain_id: Scalars['Int'];
  token_address?: InputMaybe<Scalars['String']>;
};


export type Query_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootTeammatesArgs = {
  distinct_on?: InputMaybe<Array<Teammates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teammates_Order_By>>;
  where?: InputMaybe<Teammates_Bool_Exp>;
};


export type Query_RootTeammates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teammates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teammates_Order_By>>;
  where?: InputMaybe<Teammates_Bool_Exp>;
};


export type Query_RootTeammates_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootToken_GiftsArgs = {
  distinct_on?: InputMaybe<Array<Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Gifts_Order_By>>;
  where?: InputMaybe<Token_Gifts_Bool_Exp>;
};


export type Query_RootToken_Gifts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Gifts_Order_By>>;
  where?: InputMaybe<Token_Gifts_Bool_Exp>;
};


export type Query_RootToken_Gifts_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootUser_PrivateArgs = {
  distinct_on?: InputMaybe<Array<User_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Private_Order_By>>;
  where?: InputMaybe<User_Private_Bool_Exp>;
};


export type Query_RootUser_Private_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Private_Order_By>>;
  where?: InputMaybe<User_Private_Bool_Exp>;
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootVault_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Transactions_Order_By>>;
  where?: InputMaybe<Vault_Transactions_Bool_Exp>;
};


export type Query_RootVault_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Transactions_Order_By>>;
  where?: InputMaybe<Vault_Transactions_Bool_Exp>;
};


export type Query_RootVault_Transactions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootVault_Tx_TypesArgs = {
  distinct_on?: InputMaybe<Array<Vault_Tx_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Tx_Types_Order_By>>;
  where?: InputMaybe<Vault_Tx_Types_Bool_Exp>;
};


export type Query_RootVault_Tx_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vault_Tx_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Tx_Types_Order_By>>;
  where?: InputMaybe<Vault_Tx_Types_Bool_Exp>;
};


export type Query_RootVault_Tx_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootVaultsArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vaults_Order_By>>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};


export type Query_RootVaults_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vaults_Order_By>>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};


export type Query_RootVaults_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootVouchesArgs = {
  distinct_on?: InputMaybe<Array<Vouches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vouches_Order_By>>;
  where?: InputMaybe<Vouches_Bool_Exp>;
};


export type Query_RootVouches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vouches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vouches_Order_By>>;
  where?: InputMaybe<Vouches_Bool_Exp>;
};


export type Query_RootVouches_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  burns: Array<Burns>;
  /** An aggregate relationship */
  burns_aggregate: Burns_Aggregate;
  /** fetch data from the table: "burns" using primary key columns */
  burns_by_pk?: Maybe<Burns>;
  /** fetch data from the table in a streaming manner : "burns" */
  burns_stream: Array<Burns>;
  /** An array relationship */
  circle_api_keys: Array<Circle_Api_Keys>;
  /** An aggregate relationship */
  circle_api_keys_aggregate: Circle_Api_Keys_Aggregate;
  /** fetch data from the table: "circle_api_keys" using primary key columns */
  circle_api_keys_by_pk?: Maybe<Circle_Api_Keys>;
  /** fetch data from the table in a streaming manner : "circle_api_keys" */
  circle_api_keys_stream: Array<Circle_Api_Keys>;
  /** fetch data from the table: "circle_integrations" */
  circle_integrations: Array<Circle_Integrations>;
  /** fetch aggregated fields from the table: "circle_integrations" */
  circle_integrations_aggregate: Circle_Integrations_Aggregate;
  /** fetch data from the table: "circle_integrations" using primary key columns */
  circle_integrations_by_pk?: Maybe<Circle_Integrations>;
  /** fetch data from the table in a streaming manner : "circle_integrations" */
  circle_integrations_stream: Array<Circle_Integrations>;
  /** An array relationship */
  circle_metadata: Array<Circle_Metadata>;
  /** An aggregate relationship */
  circle_metadata_aggregate: Circle_Metadata_Aggregate;
  /** fetch data from the table: "circle_metadata" using primary key columns */
  circle_metadata_by_pk?: Maybe<Circle_Metadata>;
  /** fetch data from the table in a streaming manner : "circle_metadata" */
  circle_metadata_stream: Array<Circle_Metadata>;
  /** fetch data from the table: "circle_private" */
  circle_private: Array<Circle_Private>;
  /** fetch aggregated fields from the table: "circle_private" */
  circle_private_aggregate: Circle_Private_Aggregate;
  /** fetch data from the table in a streaming manner : "circle_private" */
  circle_private_stream: Array<Circle_Private>;
  /** fetch data from the table: "circle_share_tokens" */
  circle_share_tokens: Array<Circle_Share_Tokens>;
  /** fetch aggregated fields from the table: "circle_share_tokens" */
  circle_share_tokens_aggregate: Circle_Share_Tokens_Aggregate;
  /** fetch data from the table: "circle_share_tokens" using primary key columns */
  circle_share_tokens_by_pk?: Maybe<Circle_Share_Tokens>;
  /** fetch data from the table in a streaming manner : "circle_share_tokens" */
  circle_share_tokens_stream: Array<Circle_Share_Tokens>;
  /** An array relationship */
  circles: Array<Circles>;
  /** An aggregate relationship */
  circles_aggregate: Circles_Aggregate;
  /** fetch data from the table: "circles" using primary key columns */
  circles_by_pk?: Maybe<Circles>;
  /** fetch data from the table in a streaming manner : "circles" */
  circles_stream: Array<Circles>;
  /** An array relationship */
  claims: Array<Claims>;
  /** An aggregate relationship */
  claims_aggregate: Claims_Aggregate;
  /** fetch data from the table: "claims" using primary key columns */
  claims_by_pk?: Maybe<Claims>;
  /** fetch data from the table in a streaming manner : "claims" */
  claims_stream: Array<Claims>;
  /** An array relationship */
  contributions: Array<Contributions>;
  /** An aggregate relationship */
  contributions_aggregate: Contributions_Aggregate;
  /** fetch data from the table: "contributions" using primary key columns */
  contributions_by_pk?: Maybe<Contributions>;
  /** fetch data from the table in a streaming manner : "contributions" */
  contributions_stream: Array<Contributions>;
  /** fetch data from the table: "discord.roles_circles" */
  discord_roles_circles: Array<Discord_Roles_Circles>;
  /** fetch aggregated fields from the table: "discord.roles_circles" */
  discord_roles_circles_aggregate: Discord_Roles_Circles_Aggregate;
  /** fetch data from the table: "discord.roles_circles" using primary key columns */
  discord_roles_circles_by_pk?: Maybe<Discord_Roles_Circles>;
  /** fetch data from the table in a streaming manner : "discord.roles_circles" */
  discord_roles_circles_stream: Array<Discord_Roles_Circles>;
  /** fetch data from the table: "discord.users" */
  discord_users: Array<Discord_Users>;
  /** fetch aggregated fields from the table: "discord.users" */
  discord_users_aggregate: Discord_Users_Aggregate;
  /** fetch data from the table: "discord.users" using primary key columns */
  discord_users_by_pk?: Maybe<Discord_Users>;
  /** fetch data from the table in a streaming manner : "discord.users" */
  discord_users_stream: Array<Discord_Users>;
  /** An array relationship */
  distributions: Array<Distributions>;
  /** An aggregate relationship */
  distributions_aggregate: Distributions_Aggregate;
  /** fetch data from the table: "distributions" using primary key columns */
  distributions_by_pk?: Maybe<Distributions>;
  /** fetch data from the table in a streaming manner : "distributions" */
  distributions_stream: Array<Distributions>;
  /** An array relationship */
  epochs: Array<Epochs>;
  /** An aggregate relationship */
  epochs_aggregate: Epochs_Aggregate;
  /** fetch data from the table: "epoches" using primary key columns */
  epochs_by_pk?: Maybe<Epochs>;
  /** fetch data from the table in a streaming manner : "epoches" */
  epochs_stream: Array<Epochs>;
  /** fetch data from the table: "gift_private" */
  gift_private: Array<Gift_Private>;
  /** fetch aggregated fields from the table: "gift_private" */
  gift_private_aggregate: Gift_Private_Aggregate;
  /** fetch data from the table in a streaming manner : "gift_private" */
  gift_private_stream: Array<Gift_Private>;
  /** fetch data from the table: "histories" */
  histories: Array<Histories>;
  /** fetch aggregated fields from the table: "histories" */
  histories_aggregate: Histories_Aggregate;
  /** fetch data from the table: "histories" using primary key columns */
  histories_by_pk?: Maybe<Histories>;
  /** fetch data from the table in a streaming manner : "histories" */
  histories_stream: Array<Histories>;
  /** fetch data from the table: "interaction_events" */
  interaction_events: Array<Interaction_Events>;
  /** fetch aggregated fields from the table: "interaction_events" */
  interaction_events_aggregate: Interaction_Events_Aggregate;
  /** fetch data from the table: "interaction_events" using primary key columns */
  interaction_events_by_pk?: Maybe<Interaction_Events>;
  /** fetch data from the table in a streaming manner : "interaction_events" */
  interaction_events_stream: Array<Interaction_Events>;
  /** An array relationship */
  nominees: Array<Nominees>;
  /** An aggregate relationship */
  nominees_aggregate: Nominees_Aggregate;
  /** fetch data from the table: "nominees" using primary key columns */
  nominees_by_pk?: Maybe<Nominees>;
  /** fetch data from the table in a streaming manner : "nominees" */
  nominees_stream: Array<Nominees>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table in a streaming manner : "organizations" */
  organizations_stream: Array<Organizations>;
  /** fetch data from the table: "pending_gift_private" */
  pending_gift_private: Array<Pending_Gift_Private>;
  /** fetch aggregated fields from the table: "pending_gift_private" */
  pending_gift_private_aggregate: Pending_Gift_Private_Aggregate;
  /** fetch data from the table in a streaming manner : "pending_gift_private" */
  pending_gift_private_stream: Array<Pending_Gift_Private>;
  /** An array relationship */
  pending_token_gifts: Array<Pending_Token_Gifts>;
  /** An aggregate relationship */
  pending_token_gifts_aggregate: Pending_Token_Gifts_Aggregate;
  /** fetch data from the table: "pending_token_gifts" using primary key columns */
  pending_token_gifts_by_pk?: Maybe<Pending_Token_Gifts>;
  /** fetch data from the table in a streaming manner : "pending_token_gifts" */
  pending_token_gifts_stream: Array<Pending_Token_Gifts>;
  /** fetch data from the table: "pending_vault_transactions" */
  pending_vault_transactions: Array<Pending_Vault_Transactions>;
  /** fetch aggregated fields from the table: "pending_vault_transactions" */
  pending_vault_transactions_aggregate: Pending_Vault_Transactions_Aggregate;
  /** fetch data from the table: "pending_vault_transactions" using primary key columns */
  pending_vault_transactions_by_pk?: Maybe<Pending_Vault_Transactions>;
  /** fetch data from the table in a streaming manner : "pending_vault_transactions" */
  pending_vault_transactions_stream: Array<Pending_Vault_Transactions>;
  /** fetch data from the table: "personal_access_tokens" */
  personal_access_tokens: Array<Personal_Access_Tokens>;
  /** fetch aggregated fields from the table: "personal_access_tokens" */
  personal_access_tokens_aggregate: Personal_Access_Tokens_Aggregate;
  /** fetch data from the table: "personal_access_tokens" using primary key columns */
  personal_access_tokens_by_pk?: Maybe<Personal_Access_Tokens>;
  /** fetch data from the table in a streaming manner : "personal_access_tokens" */
  personal_access_tokens_stream: Array<Personal_Access_Tokens>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table in a streaming manner : "profiles" */
  profiles_stream: Array<Profiles>;
  /** An array relationship */
  teammates: Array<Teammates>;
  /** An aggregate relationship */
  teammates_aggregate: Teammates_Aggregate;
  /** fetch data from the table: "teammates" using primary key columns */
  teammates_by_pk?: Maybe<Teammates>;
  /** fetch data from the table in a streaming manner : "teammates" */
  teammates_stream: Array<Teammates>;
  /** An array relationship */
  token_gifts: Array<Token_Gifts>;
  /** An aggregate relationship */
  token_gifts_aggregate: Token_Gifts_Aggregate;
  /** fetch data from the table: "token_gifts" using primary key columns */
  token_gifts_by_pk?: Maybe<Token_Gifts>;
  /** fetch data from the table in a streaming manner : "token_gifts" */
  token_gifts_stream: Array<Token_Gifts>;
  /** fetch data from the table: "user_private" */
  user_private: Array<User_Private>;
  /** fetch aggregated fields from the table: "user_private" */
  user_private_aggregate: User_Private_Aggregate;
  /** fetch data from the table in a streaming manner : "user_private" */
  user_private_stream: Array<User_Private>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner : "users" */
  users_stream: Array<Users>;
  /** An array relationship */
  vault_transactions: Array<Vault_Transactions>;
  /** An aggregate relationship */
  vault_transactions_aggregate: Vault_Transactions_Aggregate;
  /** fetch data from the table: "vault_transactions" using primary key columns */
  vault_transactions_by_pk?: Maybe<Vault_Transactions>;
  /** fetch data from the table in a streaming manner : "vault_transactions" */
  vault_transactions_stream: Array<Vault_Transactions>;
  /** fetch data from the table: "vault_tx_types" */
  vault_tx_types: Array<Vault_Tx_Types>;
  /** fetch aggregated fields from the table: "vault_tx_types" */
  vault_tx_types_aggregate: Vault_Tx_Types_Aggregate;
  /** fetch data from the table: "vault_tx_types" using primary key columns */
  vault_tx_types_by_pk?: Maybe<Vault_Tx_Types>;
  /** fetch data from the table in a streaming manner : "vault_tx_types" */
  vault_tx_types_stream: Array<Vault_Tx_Types>;
  /** An array relationship */
  vaults: Array<Vaults>;
  /** An aggregate relationship */
  vaults_aggregate: Vaults_Aggregate;
  /** fetch data from the table: "vaults" using primary key columns */
  vaults_by_pk?: Maybe<Vaults>;
  /** fetch data from the table in a streaming manner : "vaults" */
  vaults_stream: Array<Vaults>;
  /** An array relationship */
  vouches: Array<Vouches>;
  /** An aggregate relationship */
  vouches_aggregate: Vouches_Aggregate;
  /** fetch data from the table: "vouches" using primary key columns */
  vouches_by_pk?: Maybe<Vouches>;
  /** fetch data from the table in a streaming manner : "vouches" */
  vouches_stream: Array<Vouches>;
};


export type Subscription_RootBurnsArgs = {
  distinct_on?: InputMaybe<Array<Burns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Burns_Order_By>>;
  where?: InputMaybe<Burns_Bool_Exp>;
};


export type Subscription_RootBurns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Burns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Burns_Order_By>>;
  where?: InputMaybe<Burns_Bool_Exp>;
};


export type Subscription_RootBurns_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootBurns_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Burns_Stream_Cursor_Input>>;
  where?: InputMaybe<Burns_Bool_Exp>;
};


export type Subscription_RootCircle_Api_KeysArgs = {
  distinct_on?: InputMaybe<Array<Circle_Api_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Api_Keys_Order_By>>;
  where?: InputMaybe<Circle_Api_Keys_Bool_Exp>;
};


export type Subscription_RootCircle_Api_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Api_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Api_Keys_Order_By>>;
  where?: InputMaybe<Circle_Api_Keys_Bool_Exp>;
};


export type Subscription_RootCircle_Api_Keys_By_PkArgs = {
  hash: Scalars['String'];
};


export type Subscription_RootCircle_Api_Keys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Circle_Api_Keys_Stream_Cursor_Input>>;
  where?: InputMaybe<Circle_Api_Keys_Bool_Exp>;
};


export type Subscription_RootCircle_IntegrationsArgs = {
  distinct_on?: InputMaybe<Array<Circle_Integrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Integrations_Order_By>>;
  where?: InputMaybe<Circle_Integrations_Bool_Exp>;
};


export type Subscription_RootCircle_Integrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Integrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Integrations_Order_By>>;
  where?: InputMaybe<Circle_Integrations_Bool_Exp>;
};


export type Subscription_RootCircle_Integrations_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootCircle_Integrations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Circle_Integrations_Stream_Cursor_Input>>;
  where?: InputMaybe<Circle_Integrations_Bool_Exp>;
};


export type Subscription_RootCircle_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Circle_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Metadata_Order_By>>;
  where?: InputMaybe<Circle_Metadata_Bool_Exp>;
};


export type Subscription_RootCircle_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Metadata_Order_By>>;
  where?: InputMaybe<Circle_Metadata_Bool_Exp>;
};


export type Subscription_RootCircle_Metadata_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootCircle_Metadata_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Circle_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Circle_Metadata_Bool_Exp>;
};


export type Subscription_RootCircle_PrivateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Private_Order_By>>;
  where?: InputMaybe<Circle_Private_Bool_Exp>;
};


export type Subscription_RootCircle_Private_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Private_Order_By>>;
  where?: InputMaybe<Circle_Private_Bool_Exp>;
};


export type Subscription_RootCircle_Private_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Circle_Private_Stream_Cursor_Input>>;
  where?: InputMaybe<Circle_Private_Bool_Exp>;
};


export type Subscription_RootCircle_Share_TokensArgs = {
  distinct_on?: InputMaybe<Array<Circle_Share_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Share_Tokens_Order_By>>;
  where?: InputMaybe<Circle_Share_Tokens_Bool_Exp>;
};


export type Subscription_RootCircle_Share_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Share_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Share_Tokens_Order_By>>;
  where?: InputMaybe<Circle_Share_Tokens_Bool_Exp>;
};


export type Subscription_RootCircle_Share_Tokens_By_PkArgs = {
  circle_id: Scalars['bigint'];
  type: Scalars['Int'];
};


export type Subscription_RootCircle_Share_Tokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Circle_Share_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Circle_Share_Tokens_Bool_Exp>;
};


export type Subscription_RootCirclesArgs = {
  distinct_on?: InputMaybe<Array<Circles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circles_Order_By>>;
  where?: InputMaybe<Circles_Bool_Exp>;
};


export type Subscription_RootCircles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circles_Order_By>>;
  where?: InputMaybe<Circles_Bool_Exp>;
};


export type Subscription_RootCircles_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootCircles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Circles_Stream_Cursor_Input>>;
  where?: InputMaybe<Circles_Bool_Exp>;
};


export type Subscription_RootClaimsArgs = {
  distinct_on?: InputMaybe<Array<Claims_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Claims_Order_By>>;
  where?: InputMaybe<Claims_Bool_Exp>;
};


export type Subscription_RootClaims_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Claims_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Claims_Order_By>>;
  where?: InputMaybe<Claims_Bool_Exp>;
};


export type Subscription_RootClaims_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootClaims_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Claims_Stream_Cursor_Input>>;
  where?: InputMaybe<Claims_Bool_Exp>;
};


export type Subscription_RootContributionsArgs = {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
};


export type Subscription_RootContributions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
};


export type Subscription_RootContributions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootContributions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Contributions_Stream_Cursor_Input>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
};


export type Subscription_RootDiscord_Roles_CirclesArgs = {
  distinct_on?: InputMaybe<Array<Discord_Roles_Circles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Discord_Roles_Circles_Order_By>>;
  where?: InputMaybe<Discord_Roles_Circles_Bool_Exp>;
};


export type Subscription_RootDiscord_Roles_Circles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Discord_Roles_Circles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Discord_Roles_Circles_Order_By>>;
  where?: InputMaybe<Discord_Roles_Circles_Bool_Exp>;
};


export type Subscription_RootDiscord_Roles_Circles_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootDiscord_Roles_Circles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Discord_Roles_Circles_Stream_Cursor_Input>>;
  where?: InputMaybe<Discord_Roles_Circles_Bool_Exp>;
};


export type Subscription_RootDiscord_UsersArgs = {
  distinct_on?: InputMaybe<Array<Discord_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Discord_Users_Order_By>>;
  where?: InputMaybe<Discord_Users_Bool_Exp>;
};


export type Subscription_RootDiscord_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Discord_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Discord_Users_Order_By>>;
  where?: InputMaybe<Discord_Users_Bool_Exp>;
};


export type Subscription_RootDiscord_Users_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootDiscord_Users_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Discord_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Discord_Users_Bool_Exp>;
};


export type Subscription_RootDistributionsArgs = {
  distinct_on?: InputMaybe<Array<Distributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distributions_Order_By>>;
  where?: InputMaybe<Distributions_Bool_Exp>;
};


export type Subscription_RootDistributions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distributions_Order_By>>;
  where?: InputMaybe<Distributions_Bool_Exp>;
};


export type Subscription_RootDistributions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootDistributions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Distributions_Stream_Cursor_Input>>;
  where?: InputMaybe<Distributions_Bool_Exp>;
};


export type Subscription_RootEpochsArgs = {
  distinct_on?: InputMaybe<Array<Epochs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Epochs_Order_By>>;
  where?: InputMaybe<Epochs_Bool_Exp>;
};


export type Subscription_RootEpochs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Epochs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Epochs_Order_By>>;
  where?: InputMaybe<Epochs_Bool_Exp>;
};


export type Subscription_RootEpochs_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootEpochs_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Epochs_Stream_Cursor_Input>>;
  where?: InputMaybe<Epochs_Bool_Exp>;
};


export type Subscription_RootGift_PrivateArgs = {
  distinct_on?: InputMaybe<Array<Gift_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gift_Private_Order_By>>;
  where?: InputMaybe<Gift_Private_Bool_Exp>;
};


export type Subscription_RootGift_Private_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gift_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gift_Private_Order_By>>;
  where?: InputMaybe<Gift_Private_Bool_Exp>;
};


export type Subscription_RootGift_Private_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Gift_Private_Stream_Cursor_Input>>;
  where?: InputMaybe<Gift_Private_Bool_Exp>;
};


export type Subscription_RootHistoriesArgs = {
  distinct_on?: InputMaybe<Array<Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Histories_Order_By>>;
  where?: InputMaybe<Histories_Bool_Exp>;
};


export type Subscription_RootHistories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Histories_Order_By>>;
  where?: InputMaybe<Histories_Bool_Exp>;
};


export type Subscription_RootHistories_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootHistories_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Histories_Stream_Cursor_Input>>;
  where?: InputMaybe<Histories_Bool_Exp>;
};


export type Subscription_RootInteraction_EventsArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Interaction_Events_Order_By>>;
  where?: InputMaybe<Interaction_Events_Bool_Exp>;
};


export type Subscription_RootInteraction_Events_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Interaction_Events_Order_By>>;
  where?: InputMaybe<Interaction_Events_Bool_Exp>;
};


export type Subscription_RootInteraction_Events_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInteraction_Events_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Interaction_Events_Stream_Cursor_Input>>;
  where?: InputMaybe<Interaction_Events_Bool_Exp>;
};


export type Subscription_RootNomineesArgs = {
  distinct_on?: InputMaybe<Array<Nominees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nominees_Order_By>>;
  where?: InputMaybe<Nominees_Bool_Exp>;
};


export type Subscription_RootNominees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nominees_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nominees_Order_By>>;
  where?: InputMaybe<Nominees_Bool_Exp>;
};


export type Subscription_RootNominees_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootNominees_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Nominees_Stream_Cursor_Input>>;
  where?: InputMaybe<Nominees_Bool_Exp>;
};


export type Subscription_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizations_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootOrganizations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Organizations_Stream_Cursor_Input>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootPending_Gift_PrivateArgs = {
  distinct_on?: InputMaybe<Array<Pending_Gift_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Gift_Private_Order_By>>;
  where?: InputMaybe<Pending_Gift_Private_Bool_Exp>;
};


export type Subscription_RootPending_Gift_Private_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pending_Gift_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Gift_Private_Order_By>>;
  where?: InputMaybe<Pending_Gift_Private_Bool_Exp>;
};


export type Subscription_RootPending_Gift_Private_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Pending_Gift_Private_Stream_Cursor_Input>>;
  where?: InputMaybe<Pending_Gift_Private_Bool_Exp>;
};


export type Subscription_RootPending_Token_GiftsArgs = {
  distinct_on?: InputMaybe<Array<Pending_Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Token_Gifts_Order_By>>;
  where?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
};


export type Subscription_RootPending_Token_Gifts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pending_Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Token_Gifts_Order_By>>;
  where?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
};


export type Subscription_RootPending_Token_Gifts_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootPending_Token_Gifts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Pending_Token_Gifts_Stream_Cursor_Input>>;
  where?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
};


export type Subscription_RootPending_Vault_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Pending_Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Vault_Transactions_Order_By>>;
  where?: InputMaybe<Pending_Vault_Transactions_Bool_Exp>;
};


export type Subscription_RootPending_Vault_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pending_Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Vault_Transactions_Order_By>>;
  where?: InputMaybe<Pending_Vault_Transactions_Bool_Exp>;
};


export type Subscription_RootPending_Vault_Transactions_By_PkArgs = {
  tx_hash: Scalars['String'];
};


export type Subscription_RootPending_Vault_Transactions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Pending_Vault_Transactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Pending_Vault_Transactions_Bool_Exp>;
};


export type Subscription_RootPersonal_Access_TokensArgs = {
  distinct_on?: InputMaybe<Array<Personal_Access_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Personal_Access_Tokens_Order_By>>;
  where?: InputMaybe<Personal_Access_Tokens_Bool_Exp>;
};


export type Subscription_RootPersonal_Access_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personal_Access_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Personal_Access_Tokens_Order_By>>;
  where?: InputMaybe<Personal_Access_Tokens_Bool_Exp>;
};


export type Subscription_RootPersonal_Access_Tokens_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootPersonal_Access_Tokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Personal_Access_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Personal_Access_Tokens_Bool_Exp>;
};


export type Subscription_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootProfiles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Profiles_Stream_Cursor_Input>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootTeammatesArgs = {
  distinct_on?: InputMaybe<Array<Teammates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teammates_Order_By>>;
  where?: InputMaybe<Teammates_Bool_Exp>;
};


export type Subscription_RootTeammates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teammates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teammates_Order_By>>;
  where?: InputMaybe<Teammates_Bool_Exp>;
};


export type Subscription_RootTeammates_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootTeammates_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Teammates_Stream_Cursor_Input>>;
  where?: InputMaybe<Teammates_Bool_Exp>;
};


export type Subscription_RootToken_GiftsArgs = {
  distinct_on?: InputMaybe<Array<Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Gifts_Order_By>>;
  where?: InputMaybe<Token_Gifts_Bool_Exp>;
};


export type Subscription_RootToken_Gifts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Gifts_Order_By>>;
  where?: InputMaybe<Token_Gifts_Bool_Exp>;
};


export type Subscription_RootToken_Gifts_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootToken_Gifts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Token_Gifts_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Gifts_Bool_Exp>;
};


export type Subscription_RootUser_PrivateArgs = {
  distinct_on?: InputMaybe<Array<User_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Private_Order_By>>;
  where?: InputMaybe<User_Private_Bool_Exp>;
};


export type Subscription_RootUser_Private_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Private_Order_By>>;
  where?: InputMaybe<User_Private_Bool_Exp>;
};


export type Subscription_RootUser_Private_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Private_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Private_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVault_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Transactions_Order_By>>;
  where?: InputMaybe<Vault_Transactions_Bool_Exp>;
};


export type Subscription_RootVault_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Transactions_Order_By>>;
  where?: InputMaybe<Vault_Transactions_Bool_Exp>;
};


export type Subscription_RootVault_Transactions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootVault_Transactions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vault_Transactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Vault_Transactions_Bool_Exp>;
};


export type Subscription_RootVault_Tx_TypesArgs = {
  distinct_on?: InputMaybe<Array<Vault_Tx_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Tx_Types_Order_By>>;
  where?: InputMaybe<Vault_Tx_Types_Bool_Exp>;
};


export type Subscription_RootVault_Tx_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vault_Tx_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Tx_Types_Order_By>>;
  where?: InputMaybe<Vault_Tx_Types_Bool_Exp>;
};


export type Subscription_RootVault_Tx_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootVault_Tx_Types_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vault_Tx_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Vault_Tx_Types_Bool_Exp>;
};


export type Subscription_RootVaultsArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vaults_Order_By>>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};


export type Subscription_RootVaults_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vaults_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vaults_Order_By>>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};


export type Subscription_RootVaults_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootVaults_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vaults_Stream_Cursor_Input>>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};


export type Subscription_RootVouchesArgs = {
  distinct_on?: InputMaybe<Array<Vouches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vouches_Order_By>>;
  where?: InputMaybe<Vouches_Bool_Exp>;
};


export type Subscription_RootVouches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vouches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vouches_Order_By>>;
  where?: InputMaybe<Vouches_Bool_Exp>;
};


export type Subscription_RootVouches_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootVouches_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vouches_Stream_Cursor_Input>>;
  where?: InputMaybe<Vouches_Bool_Exp>;
};

/** columns and relationships of "teammates" */
export type Teammates = {
  __typename?: 'teammates';
  created_at: Scalars['timestamp'];
  id: Scalars['bigint'];
  team_mate_id: Scalars['Int'];
  /** An object relationship */
  teammate?: Maybe<Users>;
  updated_at: Scalars['timestamp'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id: Scalars['Int'];
};

/** aggregated selection of "teammates" */
export type Teammates_Aggregate = {
  __typename?: 'teammates_aggregate';
  aggregate?: Maybe<Teammates_Aggregate_Fields>;
  nodes: Array<Teammates>;
};

/** aggregate fields of "teammates" */
export type Teammates_Aggregate_Fields = {
  __typename?: 'teammates_aggregate_fields';
  avg?: Maybe<Teammates_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Teammates_Max_Fields>;
  min?: Maybe<Teammates_Min_Fields>;
  stddev?: Maybe<Teammates_Stddev_Fields>;
  stddev_pop?: Maybe<Teammates_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Teammates_Stddev_Samp_Fields>;
  sum?: Maybe<Teammates_Sum_Fields>;
  var_pop?: Maybe<Teammates_Var_Pop_Fields>;
  var_samp?: Maybe<Teammates_Var_Samp_Fields>;
  variance?: Maybe<Teammates_Variance_Fields>;
};


/** aggregate fields of "teammates" */
export type Teammates_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Teammates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "teammates" */
export type Teammates_Aggregate_Order_By = {
  avg?: InputMaybe<Teammates_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Teammates_Max_Order_By>;
  min?: InputMaybe<Teammates_Min_Order_By>;
  stddev?: InputMaybe<Teammates_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Teammates_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Teammates_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Teammates_Sum_Order_By>;
  var_pop?: InputMaybe<Teammates_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Teammates_Var_Samp_Order_By>;
  variance?: InputMaybe<Teammates_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "teammates" */
export type Teammates_Arr_Rel_Insert_Input = {
  data: Array<Teammates_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Teammates_On_Conflict>;
};

/** aggregate avg on columns */
export type Teammates_Avg_Fields = {
  __typename?: 'teammates_avg_fields';
  id?: Maybe<Scalars['Float']>;
  team_mate_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "teammates" */
export type Teammates_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  team_mate_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "teammates". All fields are combined with a logical 'AND'. */
export type Teammates_Bool_Exp = {
  _and?: InputMaybe<Array<Teammates_Bool_Exp>>;
  _not?: InputMaybe<Teammates_Bool_Exp>;
  _or?: InputMaybe<Array<Teammates_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  team_mate_id?: InputMaybe<Int_Comparison_Exp>;
  teammate?: InputMaybe<Users_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "teammates" */
export enum Teammates_Constraint {
  /** unique or primary key constraint on columns "id" */
  TeammatesPkey = 'teammates_pkey',
  /** unique or primary key constraint on columns "team_mate_id", "user_id" */
  TeammatesUserIdTeamMateIdKey = 'teammates_user_id_team_mate_id_key'
}

/** input type for incrementing numeric columns in table "teammates" */
export type Teammates_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  team_mate_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "teammates" */
export type Teammates_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  team_mate_id?: InputMaybe<Scalars['Int']>;
  teammate?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Teammates_Max_Fields = {
  __typename?: 'teammates_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['bigint']>;
  team_mate_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "teammates" */
export type Teammates_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_mate_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Teammates_Min_Fields = {
  __typename?: 'teammates_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['bigint']>;
  team_mate_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "teammates" */
export type Teammates_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_mate_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "teammates" */
export type Teammates_Mutation_Response = {
  __typename?: 'teammates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Teammates>;
};

/** on_conflict condition type for table "teammates" */
export type Teammates_On_Conflict = {
  constraint: Teammates_Constraint;
  update_columns?: Array<Teammates_Update_Column>;
  where?: InputMaybe<Teammates_Bool_Exp>;
};

/** Ordering options when selecting data from "teammates". */
export type Teammates_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_mate_id?: InputMaybe<Order_By>;
  teammate?: InputMaybe<Users_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: teammates */
export type Teammates_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "teammates" */
export enum Teammates_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TeamMateId = 'team_mate_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "teammates" */
export type Teammates_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  team_mate_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Teammates_Stddev_Fields = {
  __typename?: 'teammates_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  team_mate_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "teammates" */
export type Teammates_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  team_mate_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Teammates_Stddev_Pop_Fields = {
  __typename?: 'teammates_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  team_mate_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "teammates" */
export type Teammates_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  team_mate_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Teammates_Stddev_Samp_Fields = {
  __typename?: 'teammates_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  team_mate_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "teammates" */
export type Teammates_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  team_mate_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "teammates" */
export type Teammates_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Teammates_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Teammates_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  team_mate_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Teammates_Sum_Fields = {
  __typename?: 'teammates_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  team_mate_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "teammates" */
export type Teammates_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  team_mate_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "teammates" */
export enum Teammates_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TeamMateId = 'team_mate_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Teammates_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Teammates_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Teammates_Set_Input>;
  where: Teammates_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Teammates_Var_Pop_Fields = {
  __typename?: 'teammates_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  team_mate_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "teammates" */
export type Teammates_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  team_mate_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Teammates_Var_Samp_Fields = {
  __typename?: 'teammates_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  team_mate_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "teammates" */
export type Teammates_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  team_mate_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Teammates_Variance_Fields = {
  __typename?: 'teammates_variance_fields';
  id?: Maybe<Scalars['Float']>;
  team_mate_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "teammates" */
export type Teammates_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  team_mate_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** GIVE allocations made by circle members for completed epochs */
export type Token_Gifts = {
  __typename?: 'token_gifts';
  /** An object relationship */
  circle: Circles;
  circle_id: Scalars['bigint'];
  created_at: Scalars['timestamp'];
  dts_created: Scalars['timestamp'];
  /** An object relationship */
  epoch: Epochs;
  epoch_id: Scalars['Int'];
  /** An object relationship */
  gift_private?: Maybe<Gift_Private>;
  id: Scalars['bigint'];
  note?: Maybe<Scalars['String']>;
  /** An object relationship */
  recipient: Users;
  recipient_address: Scalars['String'];
  recipient_id: Scalars['bigint'];
  /** An object relationship */
  sender: Users;
  sender_address: Scalars['String'];
  sender_id: Scalars['bigint'];
  tokens: Scalars['Int'];
  updated_at: Scalars['timestamp'];
};

/** aggregated selection of "token_gifts" */
export type Token_Gifts_Aggregate = {
  __typename?: 'token_gifts_aggregate';
  aggregate?: Maybe<Token_Gifts_Aggregate_Fields>;
  nodes: Array<Token_Gifts>;
};

/** aggregate fields of "token_gifts" */
export type Token_Gifts_Aggregate_Fields = {
  __typename?: 'token_gifts_aggregate_fields';
  avg?: Maybe<Token_Gifts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Gifts_Max_Fields>;
  min?: Maybe<Token_Gifts_Min_Fields>;
  stddev?: Maybe<Token_Gifts_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Gifts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Gifts_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Gifts_Sum_Fields>;
  var_pop?: Maybe<Token_Gifts_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Gifts_Var_Samp_Fields>;
  variance?: Maybe<Token_Gifts_Variance_Fields>;
};


/** aggregate fields of "token_gifts" */
export type Token_Gifts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Gifts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_gifts" */
export type Token_Gifts_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Gifts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Gifts_Max_Order_By>;
  min?: InputMaybe<Token_Gifts_Min_Order_By>;
  stddev?: InputMaybe<Token_Gifts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Gifts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Gifts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Gifts_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Gifts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Gifts_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Gifts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "token_gifts" */
export type Token_Gifts_Arr_Rel_Insert_Input = {
  data: Array<Token_Gifts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Token_Gifts_On_Conflict>;
};

/** aggregate avg on columns */
export type Token_Gifts_Avg_Fields = {
  __typename?: 'token_gifts_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "token_gifts" */
export type Token_Gifts_Avg_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_gifts". All fields are combined with a logical 'AND'. */
export type Token_Gifts_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Gifts_Bool_Exp>>;
  _not?: InputMaybe<Token_Gifts_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Gifts_Bool_Exp>>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  dts_created?: InputMaybe<Timestamp_Comparison_Exp>;
  epoch?: InputMaybe<Epochs_Bool_Exp>;
  epoch_id?: InputMaybe<Int_Comparison_Exp>;
  gift_private?: InputMaybe<Gift_Private_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  recipient?: InputMaybe<Users_Bool_Exp>;
  recipient_address?: InputMaybe<String_Comparison_Exp>;
  recipient_id?: InputMaybe<Bigint_Comparison_Exp>;
  sender?: InputMaybe<Users_Bool_Exp>;
  sender_address?: InputMaybe<String_Comparison_Exp>;
  sender_id?: InputMaybe<Bigint_Comparison_Exp>;
  tokens?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "token_gifts" */
export enum Token_Gifts_Constraint {
  /** unique or primary key constraint on columns "id" */
  TokenGiftsPkey = 'token_gifts_pkey'
}

/** input type for incrementing numeric columns in table "token_gifts" */
export type Token_Gifts_Inc_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  epoch_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  recipient_id?: InputMaybe<Scalars['bigint']>;
  sender_id?: InputMaybe<Scalars['bigint']>;
  tokens?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "token_gifts" */
export type Token_Gifts_Insert_Input = {
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  dts_created?: InputMaybe<Scalars['timestamp']>;
  epoch?: InputMaybe<Epochs_Obj_Rel_Insert_Input>;
  epoch_id?: InputMaybe<Scalars['Int']>;
  gift_private?: InputMaybe<Gift_Private_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']>;
  note?: InputMaybe<Scalars['String']>;
  recipient?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  recipient_address?: InputMaybe<Scalars['String']>;
  recipient_id?: InputMaybe<Scalars['bigint']>;
  sender?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  sender_address?: InputMaybe<Scalars['String']>;
  sender_id?: InputMaybe<Scalars['bigint']>;
  tokens?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Token_Gifts_Max_Fields = {
  __typename?: 'token_gifts_max_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamp']>;
  dts_created?: Maybe<Scalars['timestamp']>;
  epoch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  note?: Maybe<Scalars['String']>;
  recipient_address?: Maybe<Scalars['String']>;
  recipient_id?: Maybe<Scalars['bigint']>;
  sender_address?: Maybe<Scalars['String']>;
  sender_id?: Maybe<Scalars['bigint']>;
  tokens?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "token_gifts" */
export type Token_Gifts_Max_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dts_created?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  recipient_address?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_address?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Gifts_Min_Fields = {
  __typename?: 'token_gifts_min_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamp']>;
  dts_created?: Maybe<Scalars['timestamp']>;
  epoch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  note?: Maybe<Scalars['String']>;
  recipient_address?: Maybe<Scalars['String']>;
  recipient_id?: Maybe<Scalars['bigint']>;
  sender_address?: Maybe<Scalars['String']>;
  sender_id?: Maybe<Scalars['bigint']>;
  tokens?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "token_gifts" */
export type Token_Gifts_Min_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dts_created?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  recipient_address?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_address?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "token_gifts" */
export type Token_Gifts_Mutation_Response = {
  __typename?: 'token_gifts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Token_Gifts>;
};

/** on_conflict condition type for table "token_gifts" */
export type Token_Gifts_On_Conflict = {
  constraint: Token_Gifts_Constraint;
  update_columns?: Array<Token_Gifts_Update_Column>;
  where?: InputMaybe<Token_Gifts_Bool_Exp>;
};

/** Ordering options when selecting data from "token_gifts". */
export type Token_Gifts_Order_By = {
  circle?: InputMaybe<Circles_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dts_created?: InputMaybe<Order_By>;
  epoch?: InputMaybe<Epochs_Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  gift_private?: InputMaybe<Gift_Private_Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  recipient?: InputMaybe<Users_Order_By>;
  recipient_address?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Users_Order_By>;
  sender_address?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: token_gifts */
export type Token_Gifts_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "token_gifts" */
export enum Token_Gifts_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DtsCreated = 'dts_created',
  /** column name */
  EpochId = 'epoch_id',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  RecipientAddress = 'recipient_address',
  /** column name */
  RecipientId = 'recipient_id',
  /** column name */
  SenderAddress = 'sender_address',
  /** column name */
  SenderId = 'sender_id',
  /** column name */
  Tokens = 'tokens',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "token_gifts" */
export type Token_Gifts_Set_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  dts_created?: InputMaybe<Scalars['timestamp']>;
  epoch_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  note?: InputMaybe<Scalars['String']>;
  recipient_address?: InputMaybe<Scalars['String']>;
  recipient_id?: InputMaybe<Scalars['bigint']>;
  sender_address?: InputMaybe<Scalars['String']>;
  sender_id?: InputMaybe<Scalars['bigint']>;
  tokens?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Token_Gifts_Stddev_Fields = {
  __typename?: 'token_gifts_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "token_gifts" */
export type Token_Gifts_Stddev_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Gifts_Stddev_Pop_Fields = {
  __typename?: 'token_gifts_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "token_gifts" */
export type Token_Gifts_Stddev_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Gifts_Stddev_Samp_Fields = {
  __typename?: 'token_gifts_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "token_gifts" */
export type Token_Gifts_Stddev_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "token_gifts" */
export type Token_Gifts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Gifts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Gifts_Stream_Cursor_Value_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  dts_created?: InputMaybe<Scalars['timestamp']>;
  epoch_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  note?: InputMaybe<Scalars['String']>;
  recipient_address?: InputMaybe<Scalars['String']>;
  recipient_id?: InputMaybe<Scalars['bigint']>;
  sender_address?: InputMaybe<Scalars['String']>;
  sender_id?: InputMaybe<Scalars['bigint']>;
  tokens?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Token_Gifts_Sum_Fields = {
  __typename?: 'token_gifts_sum_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  epoch_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  recipient_id?: Maybe<Scalars['bigint']>;
  sender_id?: Maybe<Scalars['bigint']>;
  tokens?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "token_gifts" */
export type Token_Gifts_Sum_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** update columns of table "token_gifts" */
export enum Token_Gifts_Update_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DtsCreated = 'dts_created',
  /** column name */
  EpochId = 'epoch_id',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  RecipientAddress = 'recipient_address',
  /** column name */
  RecipientId = 'recipient_id',
  /** column name */
  SenderAddress = 'sender_address',
  /** column name */
  SenderId = 'sender_id',
  /** column name */
  Tokens = 'tokens',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Token_Gifts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Token_Gifts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Token_Gifts_Set_Input>;
  where: Token_Gifts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Token_Gifts_Var_Pop_Fields = {
  __typename?: 'token_gifts_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "token_gifts" */
export type Token_Gifts_Var_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Gifts_Var_Samp_Fields = {
  __typename?: 'token_gifts_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "token_gifts" */
export type Token_Gifts_Var_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Gifts_Variance_Fields = {
  __typename?: 'token_gifts_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  epoch_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recipient_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "token_gifts" */
export type Token_Gifts_Variance_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  epoch_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  sender_id?: InputMaybe<Order_By>;
  tokens?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_private" */
export type User_Private = {
  __typename?: 'user_private';
  /** An object relationship */
  circle?: Maybe<Circles>;
  circle_id?: Maybe<Scalars['bigint']>;
  fixed_payment_amount?: Maybe<Scalars['numeric']>;
  fixed_payment_token_type?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "user_private" */
export type User_Private_Aggregate = {
  __typename?: 'user_private_aggregate';
  aggregate?: Maybe<User_Private_Aggregate_Fields>;
  nodes: Array<User_Private>;
};

/** aggregate fields of "user_private" */
export type User_Private_Aggregate_Fields = {
  __typename?: 'user_private_aggregate_fields';
  avg?: Maybe<User_Private_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Private_Max_Fields>;
  min?: Maybe<User_Private_Min_Fields>;
  stddev?: Maybe<User_Private_Stddev_Fields>;
  stddev_pop?: Maybe<User_Private_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Private_Stddev_Samp_Fields>;
  sum?: Maybe<User_Private_Sum_Fields>;
  var_pop?: Maybe<User_Private_Var_Pop_Fields>;
  var_samp?: Maybe<User_Private_Var_Samp_Fields>;
  variance?: Maybe<User_Private_Variance_Fields>;
};


/** aggregate fields of "user_private" */
export type User_Private_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Private_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Private_Avg_Fields = {
  __typename?: 'user_private_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  fixed_payment_amount?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user_private". All fields are combined with a logical 'AND'. */
export type User_Private_Bool_Exp = {
  _and?: InputMaybe<Array<User_Private_Bool_Exp>>;
  _not?: InputMaybe<User_Private_Bool_Exp>;
  _or?: InputMaybe<Array<User_Private_Bool_Exp>>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_id?: InputMaybe<Bigint_Comparison_Exp>;
  fixed_payment_amount?: InputMaybe<Numeric_Comparison_Exp>;
  fixed_payment_token_type?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for inserting data into table "user_private" */
export type User_Private_Insert_Input = {
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['bigint']>;
  fixed_payment_amount?: InputMaybe<Scalars['numeric']>;
  fixed_payment_token_type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type User_Private_Max_Fields = {
  __typename?: 'user_private_max_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  fixed_payment_amount?: Maybe<Scalars['numeric']>;
  fixed_payment_token_type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type User_Private_Min_Fields = {
  __typename?: 'user_private_min_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  fixed_payment_amount?: Maybe<Scalars['numeric']>;
  fixed_payment_token_type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting object relation for remote table "user_private" */
export type User_Private_Obj_Rel_Insert_Input = {
  data: User_Private_Insert_Input;
};

/** Ordering options when selecting data from "user_private". */
export type User_Private_Order_By = {
  circle?: InputMaybe<Circles_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  fixed_payment_amount?: InputMaybe<Order_By>;
  fixed_payment_token_type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "user_private" */
export enum User_Private_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  FixedPaymentAmount = 'fixed_payment_amount',
  /** column name */
  FixedPaymentTokenType = 'fixed_payment_token_type',
  /** column name */
  UserId = 'user_id'
}

/** aggregate stddev on columns */
export type User_Private_Stddev_Fields = {
  __typename?: 'user_private_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  fixed_payment_amount?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Private_Stddev_Pop_Fields = {
  __typename?: 'user_private_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  fixed_payment_amount?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Private_Stddev_Samp_Fields = {
  __typename?: 'user_private_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  fixed_payment_amount?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "user_private" */
export type User_Private_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Private_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Private_Stream_Cursor_Value_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  fixed_payment_amount?: InputMaybe<Scalars['numeric']>;
  fixed_payment_token_type?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type User_Private_Sum_Fields = {
  __typename?: 'user_private_sum_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  fixed_payment_amount?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type User_Private_Var_Pop_Fields = {
  __typename?: 'user_private_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  fixed_payment_amount?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Private_Var_Samp_Fields = {
  __typename?: 'user_private_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  fixed_payment_amount?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Private_Variance_Fields = {
  __typename?: 'user_private_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  fixed_payment_amount?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** Members of a circle */
export type Users = {
  __typename?: 'users';
  address: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  /** An array relationship */
  burns: Array<Burns>;
  /** An aggregate relationship */
  burns_aggregate: Burns_Aggregate;
  /** An object relationship */
  circle: Circles;
  /** An array relationship */
  circle_api_keys: Array<Circle_Api_Keys>;
  /** An aggregate relationship */
  circle_api_keys_aggregate: Circle_Api_Keys_Aggregate;
  circle_id: Scalars['bigint'];
  /** An array relationship */
  contributions: Array<Contributions>;
  /** An aggregate relationship */
  contributions_aggregate: Contributions_Aggregate;
  created_at: Scalars['timestamp'];
  deleted_at?: Maybe<Scalars['timestamp']>;
  entrance?: Maybe<Scalars['String']>;
  epoch_first_visit: Scalars['Boolean'];
  fixed_non_receiver: Scalars['Boolean'];
  fixed_payment_amount: Scalars['numeric'];
  give_token_received: Scalars['Int'];
  give_token_remaining: Scalars['Int'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  non_giver: Scalars['Boolean'];
  non_receiver: Scalars['Boolean'];
  /** An array relationship */
  pending_received_gifts: Array<Pending_Token_Gifts>;
  /** An aggregate relationship */
  pending_received_gifts_aggregate: Pending_Token_Gifts_Aggregate;
  /** An array relationship */
  pending_sent_gifts: Array<Pending_Token_Gifts>;
  /** An aggregate relationship */
  pending_sent_gifts_aggregate: Pending_Token_Gifts_Aggregate;
  /** An object relationship */
  profile: Profiles;
  /** An array relationship */
  received_gifts: Array<Token_Gifts>;
  /** An aggregate relationship */
  received_gifts_aggregate: Token_Gifts_Aggregate;
  role: Scalars['Int'];
  /** An array relationship */
  sent_gifts: Array<Token_Gifts>;
  /** An aggregate relationship */
  sent_gifts_aggregate: Token_Gifts_Aggregate;
  starting_tokens: Scalars['Int'];
  /** An array relationship */
  teammates: Array<Teammates>;
  /** An aggregate relationship */
  teammates_aggregate: Teammates_Aggregate;
  updated_at: Scalars['timestamp'];
  /** An object relationship */
  user_private?: Maybe<User_Private>;
  /** An array relationship */
  vouches: Array<Vouches>;
  /** An aggregate relationship */
  vouches_aggregate: Vouches_Aggregate;
};


/** Members of a circle */
export type UsersBurnsArgs = {
  distinct_on?: InputMaybe<Array<Burns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Burns_Order_By>>;
  where?: InputMaybe<Burns_Bool_Exp>;
};


/** Members of a circle */
export type UsersBurns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Burns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Burns_Order_By>>;
  where?: InputMaybe<Burns_Bool_Exp>;
};


/** Members of a circle */
export type UsersCircle_Api_KeysArgs = {
  distinct_on?: InputMaybe<Array<Circle_Api_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Api_Keys_Order_By>>;
  where?: InputMaybe<Circle_Api_Keys_Bool_Exp>;
};


/** Members of a circle */
export type UsersCircle_Api_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Api_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Circle_Api_Keys_Order_By>>;
  where?: InputMaybe<Circle_Api_Keys_Bool_Exp>;
};


/** Members of a circle */
export type UsersContributionsArgs = {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
};


/** Members of a circle */
export type UsersContributions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
};


/** Members of a circle */
export type UsersPending_Received_GiftsArgs = {
  distinct_on?: InputMaybe<Array<Pending_Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Token_Gifts_Order_By>>;
  where?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
};


/** Members of a circle */
export type UsersPending_Received_Gifts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pending_Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Token_Gifts_Order_By>>;
  where?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
};


/** Members of a circle */
export type UsersPending_Sent_GiftsArgs = {
  distinct_on?: InputMaybe<Array<Pending_Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Token_Gifts_Order_By>>;
  where?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
};


/** Members of a circle */
export type UsersPending_Sent_Gifts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pending_Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pending_Token_Gifts_Order_By>>;
  where?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
};


/** Members of a circle */
export type UsersReceived_GiftsArgs = {
  distinct_on?: InputMaybe<Array<Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Gifts_Order_By>>;
  where?: InputMaybe<Token_Gifts_Bool_Exp>;
};


/** Members of a circle */
export type UsersReceived_Gifts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Gifts_Order_By>>;
  where?: InputMaybe<Token_Gifts_Bool_Exp>;
};


/** Members of a circle */
export type UsersSent_GiftsArgs = {
  distinct_on?: InputMaybe<Array<Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Gifts_Order_By>>;
  where?: InputMaybe<Token_Gifts_Bool_Exp>;
};


/** Members of a circle */
export type UsersSent_Gifts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Gifts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Gifts_Order_By>>;
  where?: InputMaybe<Token_Gifts_Bool_Exp>;
};


/** Members of a circle */
export type UsersTeammatesArgs = {
  distinct_on?: InputMaybe<Array<Teammates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teammates_Order_By>>;
  where?: InputMaybe<Teammates_Bool_Exp>;
};


/** Members of a circle */
export type UsersTeammates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teammates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Teammates_Order_By>>;
  where?: InputMaybe<Teammates_Bool_Exp>;
};


/** Members of a circle */
export type UsersVouchesArgs = {
  distinct_on?: InputMaybe<Array<Vouches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vouches_Order_By>>;
  where?: InputMaybe<Vouches_Bool_Exp>;
};


/** Members of a circle */
export type UsersVouches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vouches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vouches_Order_By>>;
  where?: InputMaybe<Vouches_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: InputMaybe<Users_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
  stddev?: InputMaybe<Users_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Users_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Users_Sum_Order_By>;
  var_pop?: InputMaybe<Users_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Users_Var_Samp_Order_By>;
  variance?: InputMaybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  fixed_payment_amount?: Maybe<Scalars['Float']>;
  give_token_received?: Maybe<Scalars['Float']>;
  give_token_remaining?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  starting_tokens?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  fixed_payment_amount?: InputMaybe<Order_By>;
  give_token_received?: InputMaybe<Order_By>;
  give_token_remaining?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  starting_tokens?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  bio?: InputMaybe<String_Comparison_Exp>;
  burns?: InputMaybe<Burns_Bool_Exp>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_api_keys?: InputMaybe<Circle_Api_Keys_Bool_Exp>;
  circle_id?: InputMaybe<Bigint_Comparison_Exp>;
  contributions?: InputMaybe<Contributions_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  entrance?: InputMaybe<String_Comparison_Exp>;
  epoch_first_visit?: InputMaybe<Boolean_Comparison_Exp>;
  fixed_non_receiver?: InputMaybe<Boolean_Comparison_Exp>;
  fixed_payment_amount?: InputMaybe<Numeric_Comparison_Exp>;
  give_token_received?: InputMaybe<Int_Comparison_Exp>;
  give_token_remaining?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  non_giver?: InputMaybe<Boolean_Comparison_Exp>;
  non_receiver?: InputMaybe<Boolean_Comparison_Exp>;
  pending_received_gifts?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
  pending_sent_gifts?: InputMaybe<Pending_Token_Gifts_Bool_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  received_gifts?: InputMaybe<Token_Gifts_Bool_Exp>;
  role?: InputMaybe<Int_Comparison_Exp>;
  sent_gifts?: InputMaybe<Token_Gifts_Bool_Exp>;
  starting_tokens?: InputMaybe<Int_Comparison_Exp>;
  teammates?: InputMaybe<Teammates_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_private?: InputMaybe<User_Private_Bool_Exp>;
  vouches?: InputMaybe<Vouches_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "address", "circle_id", "deleted_at" */
  UsersAddressCircleIdDeletedAtKey = 'users_address_circle_id_deleted_at_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  fixed_payment_amount?: InputMaybe<Scalars['numeric']>;
  give_token_received?: InputMaybe<Scalars['Int']>;
  give_token_remaining?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  role?: InputMaybe<Scalars['Int']>;
  starting_tokens?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  burns?: InputMaybe<Burns_Arr_Rel_Insert_Input>;
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_api_keys?: InputMaybe<Circle_Api_Keys_Arr_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['bigint']>;
  contributions?: InputMaybe<Contributions_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  deleted_at?: InputMaybe<Scalars['timestamp']>;
  entrance?: InputMaybe<Scalars['String']>;
  epoch_first_visit?: InputMaybe<Scalars['Boolean']>;
  fixed_non_receiver?: InputMaybe<Scalars['Boolean']>;
  fixed_payment_amount?: InputMaybe<Scalars['numeric']>;
  give_token_received?: InputMaybe<Scalars['Int']>;
  give_token_remaining?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  non_giver?: InputMaybe<Scalars['Boolean']>;
  non_receiver?: InputMaybe<Scalars['Boolean']>;
  pending_received_gifts?: InputMaybe<Pending_Token_Gifts_Arr_Rel_Insert_Input>;
  pending_sent_gifts?: InputMaybe<Pending_Token_Gifts_Arr_Rel_Insert_Input>;
  profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
  received_gifts?: InputMaybe<Token_Gifts_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars['Int']>;
  sent_gifts?: InputMaybe<Token_Gifts_Arr_Rel_Insert_Input>;
  starting_tokens?: InputMaybe<Scalars['Int']>;
  teammates?: InputMaybe<Teammates_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_private?: InputMaybe<User_Private_Obj_Rel_Insert_Input>;
  vouches?: InputMaybe<Vouches_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  address?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamp']>;
  deleted_at?: Maybe<Scalars['timestamp']>;
  entrance?: Maybe<Scalars['String']>;
  fixed_payment_amount?: Maybe<Scalars['numeric']>;
  give_token_received?: Maybe<Scalars['Int']>;
  give_token_remaining?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['Int']>;
  starting_tokens?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  bio?: InputMaybe<Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  entrance?: InputMaybe<Order_By>;
  fixed_payment_amount?: InputMaybe<Order_By>;
  give_token_received?: InputMaybe<Order_By>;
  give_token_remaining?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  starting_tokens?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  address?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamp']>;
  deleted_at?: Maybe<Scalars['timestamp']>;
  entrance?: Maybe<Scalars['String']>;
  fixed_payment_amount?: Maybe<Scalars['numeric']>;
  give_token_received?: Maybe<Scalars['Int']>;
  give_token_remaining?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['Int']>;
  starting_tokens?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  bio?: InputMaybe<Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  entrance?: InputMaybe<Order_By>;
  fixed_payment_amount?: InputMaybe<Order_By>;
  give_token_received?: InputMaybe<Order_By>;
  give_token_remaining?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  starting_tokens?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  address?: InputMaybe<Order_By>;
  bio?: InputMaybe<Order_By>;
  burns_aggregate?: InputMaybe<Burns_Aggregate_Order_By>;
  circle?: InputMaybe<Circles_Order_By>;
  circle_api_keys_aggregate?: InputMaybe<Circle_Api_Keys_Aggregate_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  contributions_aggregate?: InputMaybe<Contributions_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  entrance?: InputMaybe<Order_By>;
  epoch_first_visit?: InputMaybe<Order_By>;
  fixed_non_receiver?: InputMaybe<Order_By>;
  fixed_payment_amount?: InputMaybe<Order_By>;
  give_token_received?: InputMaybe<Order_By>;
  give_token_remaining?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  non_giver?: InputMaybe<Order_By>;
  non_receiver?: InputMaybe<Order_By>;
  pending_received_gifts_aggregate?: InputMaybe<Pending_Token_Gifts_Aggregate_Order_By>;
  pending_sent_gifts_aggregate?: InputMaybe<Pending_Token_Gifts_Aggregate_Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  received_gifts_aggregate?: InputMaybe<Token_Gifts_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
  sent_gifts_aggregate?: InputMaybe<Token_Gifts_Aggregate_Order_By>;
  starting_tokens?: InputMaybe<Order_By>;
  teammates_aggregate?: InputMaybe<Teammates_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_private?: InputMaybe<User_Private_Order_By>;
  vouches_aggregate?: InputMaybe<Vouches_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Bio = 'bio',
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Entrance = 'entrance',
  /** column name */
  EpochFirstVisit = 'epoch_first_visit',
  /** column name */
  FixedNonReceiver = 'fixed_non_receiver',
  /** column name */
  FixedPaymentAmount = 'fixed_payment_amount',
  /** column name */
  GiveTokenReceived = 'give_token_received',
  /** column name */
  GiveTokenRemaining = 'give_token_remaining',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NonGiver = 'non_giver',
  /** column name */
  NonReceiver = 'non_receiver',
  /** column name */
  Role = 'role',
  /** column name */
  StartingTokens = 'starting_tokens',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  deleted_at?: InputMaybe<Scalars['timestamp']>;
  entrance?: InputMaybe<Scalars['String']>;
  epoch_first_visit?: InputMaybe<Scalars['Boolean']>;
  fixed_non_receiver?: InputMaybe<Scalars['Boolean']>;
  fixed_payment_amount?: InputMaybe<Scalars['numeric']>;
  give_token_received?: InputMaybe<Scalars['Int']>;
  give_token_remaining?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  non_giver?: InputMaybe<Scalars['Boolean']>;
  non_receiver?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['Int']>;
  starting_tokens?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  fixed_payment_amount?: Maybe<Scalars['Float']>;
  give_token_received?: Maybe<Scalars['Float']>;
  give_token_remaining?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  starting_tokens?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  fixed_payment_amount?: InputMaybe<Order_By>;
  give_token_received?: InputMaybe<Order_By>;
  give_token_remaining?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  starting_tokens?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  fixed_payment_amount?: Maybe<Scalars['Float']>;
  give_token_received?: Maybe<Scalars['Float']>;
  give_token_remaining?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  starting_tokens?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  fixed_payment_amount?: InputMaybe<Order_By>;
  give_token_received?: InputMaybe<Order_By>;
  give_token_remaining?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  starting_tokens?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  fixed_payment_amount?: Maybe<Scalars['Float']>;
  give_token_received?: Maybe<Scalars['Float']>;
  give_token_remaining?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  starting_tokens?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  fixed_payment_amount?: InputMaybe<Order_By>;
  give_token_received?: InputMaybe<Order_By>;
  give_token_remaining?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  starting_tokens?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  deleted_at?: InputMaybe<Scalars['timestamp']>;
  entrance?: InputMaybe<Scalars['String']>;
  epoch_first_visit?: InputMaybe<Scalars['Boolean']>;
  fixed_non_receiver?: InputMaybe<Scalars['Boolean']>;
  fixed_payment_amount?: InputMaybe<Scalars['numeric']>;
  give_token_received?: InputMaybe<Scalars['Int']>;
  give_token_remaining?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  non_giver?: InputMaybe<Scalars['Boolean']>;
  non_receiver?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['Int']>;
  starting_tokens?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  fixed_payment_amount?: Maybe<Scalars['numeric']>;
  give_token_received?: Maybe<Scalars['Int']>;
  give_token_remaining?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  role?: Maybe<Scalars['Int']>;
  starting_tokens?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  fixed_payment_amount?: InputMaybe<Order_By>;
  give_token_received?: InputMaybe<Order_By>;
  give_token_remaining?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  starting_tokens?: InputMaybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Bio = 'bio',
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Entrance = 'entrance',
  /** column name */
  EpochFirstVisit = 'epoch_first_visit',
  /** column name */
  FixedNonReceiver = 'fixed_non_receiver',
  /** column name */
  FixedPaymentAmount = 'fixed_payment_amount',
  /** column name */
  GiveTokenReceived = 'give_token_received',
  /** column name */
  GiveTokenRemaining = 'give_token_remaining',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NonGiver = 'non_giver',
  /** column name */
  NonReceiver = 'non_receiver',
  /** column name */
  Role = 'role',
  /** column name */
  StartingTokens = 'starting_tokens',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  fixed_payment_amount?: Maybe<Scalars['Float']>;
  give_token_received?: Maybe<Scalars['Float']>;
  give_token_remaining?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  starting_tokens?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  fixed_payment_amount?: InputMaybe<Order_By>;
  give_token_received?: InputMaybe<Order_By>;
  give_token_remaining?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  starting_tokens?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  fixed_payment_amount?: Maybe<Scalars['Float']>;
  give_token_received?: Maybe<Scalars['Float']>;
  give_token_remaining?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  starting_tokens?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  fixed_payment_amount?: InputMaybe<Order_By>;
  give_token_received?: InputMaybe<Order_By>;
  give_token_remaining?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  starting_tokens?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  fixed_payment_amount?: Maybe<Scalars['Float']>;
  give_token_received?: Maybe<Scalars['Float']>;
  give_token_remaining?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  starting_tokens?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  fixed_payment_amount?: InputMaybe<Order_By>;
  give_token_received?: InputMaybe<Order_By>;
  give_token_remaining?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  starting_tokens?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "vault_transactions" */
export type Vault_Transactions = {
  __typename?: 'vault_transactions';
  /** An object relationship */
  circle?: Maybe<Circles>;
  circle_id?: Maybe<Scalars['bigint']>;
  created_at: Scalars['timestamp'];
  created_by?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  distribution?: Maybe<Distributions>;
  distribution_id?: Maybe<Scalars['bigint']>;
  id: Scalars['bigint'];
  /** An object relationship */
  profile?: Maybe<Profiles>;
  tx_hash: Scalars['String'];
  tx_type: Vault_Tx_Types_Enum;
  updated_at: Scalars['timestamp'];
  /** An object relationship */
  vault: Vaults;
  vault_id: Scalars['bigint'];
  /** An object relationship */
  vault_tx_type: Vault_Tx_Types;
};

/** aggregated selection of "vault_transactions" */
export type Vault_Transactions_Aggregate = {
  __typename?: 'vault_transactions_aggregate';
  aggregate?: Maybe<Vault_Transactions_Aggregate_Fields>;
  nodes: Array<Vault_Transactions>;
};

/** aggregate fields of "vault_transactions" */
export type Vault_Transactions_Aggregate_Fields = {
  __typename?: 'vault_transactions_aggregate_fields';
  avg?: Maybe<Vault_Transactions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vault_Transactions_Max_Fields>;
  min?: Maybe<Vault_Transactions_Min_Fields>;
  stddev?: Maybe<Vault_Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Vault_Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vault_Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Vault_Transactions_Sum_Fields>;
  var_pop?: Maybe<Vault_Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Vault_Transactions_Var_Samp_Fields>;
  variance?: Maybe<Vault_Transactions_Variance_Fields>;
};


/** aggregate fields of "vault_transactions" */
export type Vault_Transactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vault_Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vault_transactions" */
export type Vault_Transactions_Aggregate_Order_By = {
  avg?: InputMaybe<Vault_Transactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vault_Transactions_Max_Order_By>;
  min?: InputMaybe<Vault_Transactions_Min_Order_By>;
  stddev?: InputMaybe<Vault_Transactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vault_Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vault_Transactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vault_Transactions_Sum_Order_By>;
  var_pop?: InputMaybe<Vault_Transactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vault_Transactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Vault_Transactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vault_transactions" */
export type Vault_Transactions_Arr_Rel_Insert_Input = {
  data: Array<Vault_Transactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vault_Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Vault_Transactions_Avg_Fields = {
  __typename?: 'vault_transactions_avg_fields';
  circle_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vault_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vault_transactions" */
export type Vault_Transactions_Avg_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vault_transactions". All fields are combined with a logical 'AND'. */
export type Vault_Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Vault_Transactions_Bool_Exp>>;
  _not?: InputMaybe<Vault_Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Vault_Transactions_Bool_Exp>>;
  circle?: InputMaybe<Circles_Bool_Exp>;
  circle_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by?: InputMaybe<Bigint_Comparison_Exp>;
  distribution?: InputMaybe<Distributions_Bool_Exp>;
  distribution_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  tx_hash?: InputMaybe<String_Comparison_Exp>;
  tx_type?: InputMaybe<Vault_Tx_Types_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  vault?: InputMaybe<Vaults_Bool_Exp>;
  vault_id?: InputMaybe<Bigint_Comparison_Exp>;
  vault_tx_type?: InputMaybe<Vault_Tx_Types_Bool_Exp>;
};

/** unique or primary key constraints on table "vault_transactions" */
export enum Vault_Transactions_Constraint {
  /** unique or primary key constraint on columns "id" */
  VaultTransactionsPkey = 'vault_transactions_pkey'
}

/** input type for incrementing numeric columns in table "vault_transactions" */
export type Vault_Transactions_Inc_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  distribution_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  vault_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "vault_transactions" */
export type Vault_Transactions_Insert_Input = {
  circle?: InputMaybe<Circles_Obj_Rel_Insert_Input>;
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  distribution?: InputMaybe<Distributions_Obj_Rel_Insert_Input>;
  distribution_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
  tx_hash?: InputMaybe<Scalars['String']>;
  tx_type?: InputMaybe<Vault_Tx_Types_Enum>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  vault?: InputMaybe<Vaults_Obj_Rel_Insert_Input>;
  vault_id?: InputMaybe<Scalars['bigint']>;
  vault_tx_type?: InputMaybe<Vault_Tx_Types_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Vault_Transactions_Max_Fields = {
  __typename?: 'vault_transactions_max_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamp']>;
  created_by?: Maybe<Scalars['bigint']>;
  distribution_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  tx_hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  vault_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "vault_transactions" */
export type Vault_Transactions_Max_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tx_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vault_Transactions_Min_Fields = {
  __typename?: 'vault_transactions_min_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamp']>;
  created_by?: Maybe<Scalars['bigint']>;
  distribution_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  tx_hash?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  vault_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "vault_transactions" */
export type Vault_Transactions_Min_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tx_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vault_transactions" */
export type Vault_Transactions_Mutation_Response = {
  __typename?: 'vault_transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vault_Transactions>;
};

/** on_conflict condition type for table "vault_transactions" */
export type Vault_Transactions_On_Conflict = {
  constraint: Vault_Transactions_Constraint;
  update_columns?: Array<Vault_Transactions_Update_Column>;
  where?: InputMaybe<Vault_Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "vault_transactions". */
export type Vault_Transactions_Order_By = {
  circle?: InputMaybe<Circles_Order_By>;
  circle_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  distribution?: InputMaybe<Distributions_Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  tx_hash?: InputMaybe<Order_By>;
  tx_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vault?: InputMaybe<Vaults_Order_By>;
  vault_id?: InputMaybe<Order_By>;
  vault_tx_type?: InputMaybe<Vault_Tx_Types_Order_By>;
};

/** primary key columns input for table: vault_transactions */
export type Vault_Transactions_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "vault_transactions" */
export enum Vault_Transactions_Select_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DistributionId = 'distribution_id',
  /** column name */
  Id = 'id',
  /** column name */
  TxHash = 'tx_hash',
  /** column name */
  TxType = 'tx_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VaultId = 'vault_id'
}

/** input type for updating data in table "vault_transactions" */
export type Vault_Transactions_Set_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  distribution_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  tx_hash?: InputMaybe<Scalars['String']>;
  tx_type?: InputMaybe<Vault_Tx_Types_Enum>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  vault_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Vault_Transactions_Stddev_Fields = {
  __typename?: 'vault_transactions_stddev_fields';
  circle_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vault_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vault_transactions" */
export type Vault_Transactions_Stddev_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vault_Transactions_Stddev_Pop_Fields = {
  __typename?: 'vault_transactions_stddev_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vault_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vault_transactions" */
export type Vault_Transactions_Stddev_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vault_Transactions_Stddev_Samp_Fields = {
  __typename?: 'vault_transactions_stddev_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vault_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vault_transactions" */
export type Vault_Transactions_Stddev_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vault_transactions" */
export type Vault_Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vault_Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vault_Transactions_Stream_Cursor_Value_Input = {
  circle_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  distribution_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  tx_hash?: InputMaybe<Scalars['String']>;
  tx_type?: InputMaybe<Vault_Tx_Types_Enum>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  vault_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Vault_Transactions_Sum_Fields = {
  __typename?: 'vault_transactions_sum_fields';
  circle_id?: Maybe<Scalars['bigint']>;
  created_by?: Maybe<Scalars['bigint']>;
  distribution_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  vault_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "vault_transactions" */
export type Vault_Transactions_Sum_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** update columns of table "vault_transactions" */
export enum Vault_Transactions_Update_Column {
  /** column name */
  CircleId = 'circle_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DistributionId = 'distribution_id',
  /** column name */
  Id = 'id',
  /** column name */
  TxHash = 'tx_hash',
  /** column name */
  TxType = 'tx_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VaultId = 'vault_id'
}

export type Vault_Transactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vault_Transactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vault_Transactions_Set_Input>;
  where: Vault_Transactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vault_Transactions_Var_Pop_Fields = {
  __typename?: 'vault_transactions_var_pop_fields';
  circle_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vault_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vault_transactions" */
export type Vault_Transactions_Var_Pop_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vault_Transactions_Var_Samp_Fields = {
  __typename?: 'vault_transactions_var_samp_fields';
  circle_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vault_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vault_transactions" */
export type Vault_Transactions_Var_Samp_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vault_Transactions_Variance_Fields = {
  __typename?: 'vault_transactions_variance_fields';
  circle_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  distribution_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  vault_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vault_transactions" */
export type Vault_Transactions_Variance_Order_By = {
  circle_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  distribution_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  vault_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "vault_tx_types" */
export type Vault_Tx_Types = {
  __typename?: 'vault_tx_types';
  comment?: Maybe<Scalars['String']>;
  value: Scalars['String'];
  /** An array relationship */
  vault_transactions: Array<Vault_Transactions>;
  /** An aggregate relationship */
  vault_transactions_aggregate: Vault_Transactions_Aggregate;
};


/** columns and relationships of "vault_tx_types" */
export type Vault_Tx_TypesVault_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Transactions_Order_By>>;
  where?: InputMaybe<Vault_Transactions_Bool_Exp>;
};


/** columns and relationships of "vault_tx_types" */
export type Vault_Tx_TypesVault_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Transactions_Order_By>>;
  where?: InputMaybe<Vault_Transactions_Bool_Exp>;
};

/** aggregated selection of "vault_tx_types" */
export type Vault_Tx_Types_Aggregate = {
  __typename?: 'vault_tx_types_aggregate';
  aggregate?: Maybe<Vault_Tx_Types_Aggregate_Fields>;
  nodes: Array<Vault_Tx_Types>;
};

/** aggregate fields of "vault_tx_types" */
export type Vault_Tx_Types_Aggregate_Fields = {
  __typename?: 'vault_tx_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Vault_Tx_Types_Max_Fields>;
  min?: Maybe<Vault_Tx_Types_Min_Fields>;
};


/** aggregate fields of "vault_tx_types" */
export type Vault_Tx_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vault_Tx_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "vault_tx_types". All fields are combined with a logical 'AND'. */
export type Vault_Tx_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Vault_Tx_Types_Bool_Exp>>;
  _not?: InputMaybe<Vault_Tx_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Vault_Tx_Types_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
  vault_transactions?: InputMaybe<Vault_Transactions_Bool_Exp>;
};

/** unique or primary key constraints on table "vault_tx_types" */
export enum Vault_Tx_Types_Constraint {
  /** unique or primary key constraint on columns "value" */
  VaultTxTypesPkey = 'vault_tx_types_pkey'
}

export enum Vault_Tx_Types_Enum {
  Claim = 'Claim',
  Deposit = 'Deposit',
  Distribution = 'Distribution',
  /** Deployment of new vault onchain */
  VaultDeploy = 'Vault_Deploy',
  Withdraw = 'Withdraw'
}

/** Boolean expression to compare columns of type "vault_tx_types_enum". All fields are combined with logical 'AND'. */
export type Vault_Tx_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Vault_Tx_Types_Enum>;
  _in?: InputMaybe<Array<Vault_Tx_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Vault_Tx_Types_Enum>;
  _nin?: InputMaybe<Array<Vault_Tx_Types_Enum>>;
};

/** input type for inserting data into table "vault_tx_types" */
export type Vault_Tx_Types_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  vault_transactions?: InputMaybe<Vault_Transactions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Vault_Tx_Types_Max_Fields = {
  __typename?: 'vault_tx_types_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Vault_Tx_Types_Min_Fields = {
  __typename?: 'vault_tx_types_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "vault_tx_types" */
export type Vault_Tx_Types_Mutation_Response = {
  __typename?: 'vault_tx_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vault_Tx_Types>;
};

/** input type for inserting object relation for remote table "vault_tx_types" */
export type Vault_Tx_Types_Obj_Rel_Insert_Input = {
  data: Vault_Tx_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vault_Tx_Types_On_Conflict>;
};

/** on_conflict condition type for table "vault_tx_types" */
export type Vault_Tx_Types_On_Conflict = {
  constraint: Vault_Tx_Types_Constraint;
  update_columns?: Array<Vault_Tx_Types_Update_Column>;
  where?: InputMaybe<Vault_Tx_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "vault_tx_types". */
export type Vault_Tx_Types_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  vault_transactions_aggregate?: InputMaybe<Vault_Transactions_Aggregate_Order_By>;
};

/** primary key columns input for table: vault_tx_types */
export type Vault_Tx_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "vault_tx_types" */
export enum Vault_Tx_Types_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "vault_tx_types" */
export type Vault_Tx_Types_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "vault_tx_types" */
export type Vault_Tx_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vault_Tx_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vault_Tx_Types_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "vault_tx_types" */
export enum Vault_Tx_Types_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Vault_Tx_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vault_Tx_Types_Set_Input>;
  where: Vault_Tx_Types_Bool_Exp;
};

/** columns and relationships of "vaults" */
export type Vaults = {
  __typename?: 'vaults';
  chain_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['bigint'];
  decimals: Scalars['Int'];
  deployment_block: Scalars['bigint'];
  /** An array relationship */
  distributions: Array<Distributions>;
  /** An aggregate relationship */
  distributions_aggregate: Distributions_Aggregate;
  id: Scalars['bigint'];
  org_id: Scalars['bigint'];
  /** An object relationship */
  organization: Organizations;
  price_per_share: Scalars['Float'];
  /** An object relationship */
  profile: Profiles;
  simple_token_address: Scalars['String'];
  symbol: Scalars['String'];
  token_address: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  vault_address: Scalars['String'];
  /** An array relationship */
  vault_transactions: Array<Vault_Transactions>;
  /** An aggregate relationship */
  vault_transactions_aggregate: Vault_Transactions_Aggregate;
};


/** columns and relationships of "vaults" */
export type VaultsDistributionsArgs = {
  distinct_on?: InputMaybe<Array<Distributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distributions_Order_By>>;
  where?: InputMaybe<Distributions_Bool_Exp>;
};


/** columns and relationships of "vaults" */
export type VaultsDistributions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distributions_Order_By>>;
  where?: InputMaybe<Distributions_Bool_Exp>;
};


/** columns and relationships of "vaults" */
export type VaultsVault_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Transactions_Order_By>>;
  where?: InputMaybe<Vault_Transactions_Bool_Exp>;
};


/** columns and relationships of "vaults" */
export type VaultsVault_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vault_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vault_Transactions_Order_By>>;
  where?: InputMaybe<Vault_Transactions_Bool_Exp>;
};

/** aggregated selection of "vaults" */
export type Vaults_Aggregate = {
  __typename?: 'vaults_aggregate';
  aggregate?: Maybe<Vaults_Aggregate_Fields>;
  nodes: Array<Vaults>;
};

/** aggregate fields of "vaults" */
export type Vaults_Aggregate_Fields = {
  __typename?: 'vaults_aggregate_fields';
  avg?: Maybe<Vaults_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vaults_Max_Fields>;
  min?: Maybe<Vaults_Min_Fields>;
  stddev?: Maybe<Vaults_Stddev_Fields>;
  stddev_pop?: Maybe<Vaults_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vaults_Stddev_Samp_Fields>;
  sum?: Maybe<Vaults_Sum_Fields>;
  var_pop?: Maybe<Vaults_Var_Pop_Fields>;
  var_samp?: Maybe<Vaults_Var_Samp_Fields>;
  variance?: Maybe<Vaults_Variance_Fields>;
};


/** aggregate fields of "vaults" */
export type Vaults_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vaults_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vaults" */
export type Vaults_Aggregate_Order_By = {
  avg?: InputMaybe<Vaults_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vaults_Max_Order_By>;
  min?: InputMaybe<Vaults_Min_Order_By>;
  stddev?: InputMaybe<Vaults_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vaults_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vaults_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vaults_Sum_Order_By>;
  var_pop?: InputMaybe<Vaults_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vaults_Var_Samp_Order_By>;
  variance?: InputMaybe<Vaults_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vaults" */
export type Vaults_Arr_Rel_Insert_Input = {
  data: Array<Vaults_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vaults_On_Conflict>;
};

/** aggregate avg on columns */
export type Vaults_Avg_Fields = {
  __typename?: 'vaults_avg_fields';
  chain_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
  deployment_block?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vaults" */
export type Vaults_Avg_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  deployment_block?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vaults". All fields are combined with a logical 'AND'. */
export type Vaults_Bool_Exp = {
  _and?: InputMaybe<Array<Vaults_Bool_Exp>>;
  _not?: InputMaybe<Vaults_Bool_Exp>;
  _or?: InputMaybe<Array<Vaults_Bool_Exp>>;
  chain_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Bigint_Comparison_Exp>;
  decimals?: InputMaybe<Int_Comparison_Exp>;
  deployment_block?: InputMaybe<Bigint_Comparison_Exp>;
  distributions?: InputMaybe<Distributions_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  org_id?: InputMaybe<Bigint_Comparison_Exp>;
  organization?: InputMaybe<Organizations_Bool_Exp>;
  profile?: InputMaybe<Profiles_Bool_Exp>;
  simple_token_address?: InputMaybe<String_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  token_address?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vault_address?: InputMaybe<String_Comparison_Exp>;
  vault_transactions?: InputMaybe<Vault_Transactions_Bool_Exp>;
};

/** unique or primary key constraints on table "vaults" */
export enum Vaults_Constraint {
  /** unique or primary key constraint on columns "id" */
  VaultsPkey = 'vaults_pkey',
  /** unique or primary key constraint on columns "vault_address" */
  VaultsVaultAddressKey = 'vaults_vault_address_key'
}

/** input type for incrementing numeric columns in table "vaults" */
export type Vaults_Inc_Input = {
  chain_id?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  decimals?: InputMaybe<Scalars['Int']>;
  deployment_block?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  org_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "vaults" */
export type Vaults_Insert_Input = {
  chain_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  decimals?: InputMaybe<Scalars['Int']>;
  deployment_block?: InputMaybe<Scalars['bigint']>;
  distributions?: InputMaybe<Distributions_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']>;
  org_id?: InputMaybe<Scalars['bigint']>;
  organization?: InputMaybe<Organizations_Obj_Rel_Insert_Input>;
  profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
  simple_token_address?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  token_address?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vault_address?: InputMaybe<Scalars['String']>;
  vault_transactions?: InputMaybe<Vault_Transactions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Vaults_Max_Fields = {
  __typename?: 'vaults_max_fields';
  chain_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['bigint']>;
  decimals?: Maybe<Scalars['Int']>;
  deployment_block?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  org_id?: Maybe<Scalars['bigint']>;
  simple_token_address?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  token_address?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vault_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "vaults" */
export type Vaults_Max_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  deployment_block?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
  simple_token_address?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  token_address?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vault_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vaults_Min_Fields = {
  __typename?: 'vaults_min_fields';
  chain_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['bigint']>;
  decimals?: Maybe<Scalars['Int']>;
  deployment_block?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  org_id?: Maybe<Scalars['bigint']>;
  simple_token_address?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  token_address?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vault_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "vaults" */
export type Vaults_Min_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  deployment_block?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
  simple_token_address?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  token_address?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vault_address?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vaults" */
export type Vaults_Mutation_Response = {
  __typename?: 'vaults_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vaults>;
};

/** input type for inserting object relation for remote table "vaults" */
export type Vaults_Obj_Rel_Insert_Input = {
  data: Vaults_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vaults_On_Conflict>;
};

/** on_conflict condition type for table "vaults" */
export type Vaults_On_Conflict = {
  constraint: Vaults_Constraint;
  update_columns?: Array<Vaults_Update_Column>;
  where?: InputMaybe<Vaults_Bool_Exp>;
};

/** Ordering options when selecting data from "vaults". */
export type Vaults_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  deployment_block?: InputMaybe<Order_By>;
  distributions_aggregate?: InputMaybe<Distributions_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organizations_Order_By>;
  profile?: InputMaybe<Profiles_Order_By>;
  simple_token_address?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  token_address?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vault_address?: InputMaybe<Order_By>;
  vault_transactions_aggregate?: InputMaybe<Vault_Transactions_Aggregate_Order_By>;
};

/** primary key columns input for table: vaults */
export type Vaults_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "vaults" */
export enum Vaults_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  DeploymentBlock = 'deployment_block',
  /** column name */
  Id = 'id',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  SimpleTokenAddress = 'simple_token_address',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  TokenAddress = 'token_address',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VaultAddress = 'vault_address'
}

/** input type for updating data in table "vaults" */
export type Vaults_Set_Input = {
  chain_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  decimals?: InputMaybe<Scalars['Int']>;
  deployment_block?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  org_id?: InputMaybe<Scalars['bigint']>;
  simple_token_address?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  token_address?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vault_address?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Vaults_Stddev_Fields = {
  __typename?: 'vaults_stddev_fields';
  chain_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
  deployment_block?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vaults" */
export type Vaults_Stddev_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  deployment_block?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vaults_Stddev_Pop_Fields = {
  __typename?: 'vaults_stddev_pop_fields';
  chain_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
  deployment_block?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vaults" */
export type Vaults_Stddev_Pop_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  deployment_block?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vaults_Stddev_Samp_Fields = {
  __typename?: 'vaults_stddev_samp_fields';
  chain_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
  deployment_block?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vaults" */
export type Vaults_Stddev_Samp_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  deployment_block?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vaults" */
export type Vaults_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vaults_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vaults_Stream_Cursor_Value_Input = {
  chain_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['bigint']>;
  decimals?: InputMaybe<Scalars['Int']>;
  deployment_block?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  org_id?: InputMaybe<Scalars['bigint']>;
  simple_token_address?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  token_address?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vault_address?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Vaults_Sum_Fields = {
  __typename?: 'vaults_sum_fields';
  chain_id?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['bigint']>;
  decimals?: Maybe<Scalars['Int']>;
  deployment_block?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  org_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "vaults" */
export type Vaults_Sum_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  deployment_block?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
};

/** update columns of table "vaults" */
export enum Vaults_Update_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  DeploymentBlock = 'deployment_block',
  /** column name */
  Id = 'id',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  SimpleTokenAddress = 'simple_token_address',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  TokenAddress = 'token_address',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VaultAddress = 'vault_address'
}

export type Vaults_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vaults_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vaults_Set_Input>;
  where: Vaults_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vaults_Var_Pop_Fields = {
  __typename?: 'vaults_var_pop_fields';
  chain_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
  deployment_block?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vaults" */
export type Vaults_Var_Pop_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  deployment_block?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vaults_Var_Samp_Fields = {
  __typename?: 'vaults_var_samp_fields';
  chain_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
  deployment_block?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vaults" */
export type Vaults_Var_Samp_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  deployment_block?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vaults_Variance_Fields = {
  __typename?: 'vaults_variance_fields';
  chain_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
  deployment_block?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  org_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vaults" */
export type Vaults_Variance_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  deployment_block?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "vouches" */
export type Vouches = {
  __typename?: 'vouches';
  created_at: Scalars['timestamp'];
  id: Scalars['bigint'];
  /** An object relationship */
  nominee?: Maybe<Nominees>;
  nominee_id: Scalars['Int'];
  updated_at: Scalars['timestamp'];
  /** An object relationship */
  voucher?: Maybe<Users>;
  voucher_id: Scalars['Int'];
};

/** aggregated selection of "vouches" */
export type Vouches_Aggregate = {
  __typename?: 'vouches_aggregate';
  aggregate?: Maybe<Vouches_Aggregate_Fields>;
  nodes: Array<Vouches>;
};

/** aggregate fields of "vouches" */
export type Vouches_Aggregate_Fields = {
  __typename?: 'vouches_aggregate_fields';
  avg?: Maybe<Vouches_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vouches_Max_Fields>;
  min?: Maybe<Vouches_Min_Fields>;
  stddev?: Maybe<Vouches_Stddev_Fields>;
  stddev_pop?: Maybe<Vouches_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vouches_Stddev_Samp_Fields>;
  sum?: Maybe<Vouches_Sum_Fields>;
  var_pop?: Maybe<Vouches_Var_Pop_Fields>;
  var_samp?: Maybe<Vouches_Var_Samp_Fields>;
  variance?: Maybe<Vouches_Variance_Fields>;
};


/** aggregate fields of "vouches" */
export type Vouches_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vouches_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vouches" */
export type Vouches_Aggregate_Order_By = {
  avg?: InputMaybe<Vouches_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vouches_Max_Order_By>;
  min?: InputMaybe<Vouches_Min_Order_By>;
  stddev?: InputMaybe<Vouches_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vouches_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vouches_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vouches_Sum_Order_By>;
  var_pop?: InputMaybe<Vouches_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vouches_Var_Samp_Order_By>;
  variance?: InputMaybe<Vouches_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vouches" */
export type Vouches_Arr_Rel_Insert_Input = {
  data: Array<Vouches_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vouches_On_Conflict>;
};

/** aggregate avg on columns */
export type Vouches_Avg_Fields = {
  __typename?: 'vouches_avg_fields';
  id?: Maybe<Scalars['Float']>;
  nominee_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vouches" */
export type Vouches_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  nominee_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vouches". All fields are combined with a logical 'AND'. */
export type Vouches_Bool_Exp = {
  _and?: InputMaybe<Array<Vouches_Bool_Exp>>;
  _not?: InputMaybe<Vouches_Bool_Exp>;
  _or?: InputMaybe<Array<Vouches_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  nominee?: InputMaybe<Nominees_Bool_Exp>;
  nominee_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  voucher?: InputMaybe<Users_Bool_Exp>;
  voucher_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "vouches" */
export enum Vouches_Constraint {
  /** unique or primary key constraint on columns "id" */
  VouchesPkey = 'vouches_pkey'
}

/** input type for incrementing numeric columns in table "vouches" */
export type Vouches_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  nominee_id?: InputMaybe<Scalars['Int']>;
  voucher_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vouches" */
export type Vouches_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  nominee?: InputMaybe<Nominees_Obj_Rel_Insert_Input>;
  nominee_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  voucher?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  voucher_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Vouches_Max_Fields = {
  __typename?: 'vouches_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['bigint']>;
  nominee_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  voucher_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "vouches" */
export type Vouches_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominee_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vouches_Min_Fields = {
  __typename?: 'vouches_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['bigint']>;
  nominee_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  voucher_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "vouches" */
export type Vouches_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominee_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vouches" */
export type Vouches_Mutation_Response = {
  __typename?: 'vouches_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vouches>;
};

/** on_conflict condition type for table "vouches" */
export type Vouches_On_Conflict = {
  constraint: Vouches_Constraint;
  update_columns?: Array<Vouches_Update_Column>;
  where?: InputMaybe<Vouches_Bool_Exp>;
};

/** Ordering options when selecting data from "vouches". */
export type Vouches_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nominee?: InputMaybe<Nominees_Order_By>;
  nominee_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  voucher?: InputMaybe<Users_Order_By>;
  voucher_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vouches */
export type Vouches_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "vouches" */
export enum Vouches_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NomineeId = 'nominee_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VoucherId = 'voucher_id'
}

/** input type for updating data in table "vouches" */
export type Vouches_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  nominee_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  voucher_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Vouches_Stddev_Fields = {
  __typename?: 'vouches_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  nominee_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vouches" */
export type Vouches_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  nominee_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vouches_Stddev_Pop_Fields = {
  __typename?: 'vouches_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  nominee_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vouches" */
export type Vouches_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  nominee_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vouches_Stddev_Samp_Fields = {
  __typename?: 'vouches_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  nominee_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vouches" */
export type Vouches_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  nominee_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vouches" */
export type Vouches_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vouches_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vouches_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  nominee_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  voucher_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Vouches_Sum_Fields = {
  __typename?: 'vouches_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  nominee_id?: Maybe<Scalars['Int']>;
  voucher_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vouches" */
export type Vouches_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  nominee_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
};

/** update columns of table "vouches" */
export enum Vouches_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NomineeId = 'nominee_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VoucherId = 'voucher_id'
}

export type Vouches_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vouches_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vouches_Set_Input>;
  where: Vouches_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vouches_Var_Pop_Fields = {
  __typename?: 'vouches_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  nominee_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vouches" */
export type Vouches_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  nominee_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vouches_Var_Samp_Fields = {
  __typename?: 'vouches_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  nominee_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vouches" */
export type Vouches_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  nominee_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vouches_Variance_Fields = {
  __typename?: 'vouches_variance_fields';
  id?: Maybe<Scalars['Float']>;
  nominee_id?: Maybe<Scalars['Float']>;
  voucher_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vouches" */
export type Vouches_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  nominee_id?: InputMaybe<Order_By>;
  voucher_id?: InputMaybe<Order_By>;
};

export type GetCirclesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCirclesQuery = { __typename?: 'query_root', circles: Array<{ __typename?: 'circles', id: any, name: string, users: Array<{ __typename?: 'users', address: string, name: string, role: number }> }> };

export type GetDiscordUsersQueryVariables = Exact<{
  userSnowflake: Scalars['String'];
}>;


export type GetDiscordUsersQuery = { __typename?: 'query_root', discord_users: Array<{ __typename?: 'discord_users', id: any, user_snowflake: string }> };

export type GetInitQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInitQuery = { __typename?: 'query_root', organizations: Array<{ __typename?: 'organizations', id: any, name: string, circles: Array<{ __typename?: 'circles', id: any, name: string }> }> };

export type GetOrganizationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrganizationsQuery = { __typename?: 'query_root', organizations: Array<{ __typename?: 'organizations', id: any, name: string }> };


export const GetCirclesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCircles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"circles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<GetCirclesQuery, GetCirclesQueryVariables>;
export const GetDiscordUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDiscordUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userSnowflake"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"discord_users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_snowflake"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userSnowflake"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_snowflake"}}]}}]}}]} as unknown as DocumentNode<GetDiscordUsersQuery, GetDiscordUsersQueryVariables>;
export const GetInitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getInit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"circles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetInitQuery, GetInitQueryVariables>;
export const GetOrganizationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOrganizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetOrganizationsQuery, GetOrganizationsQueryVariables>;