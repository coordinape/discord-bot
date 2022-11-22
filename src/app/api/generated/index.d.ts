import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import {
  query_rootRequest,
  query_rootPromiseChain,
  query_root,
  mutation_rootRequest,
  mutation_rootPromiseChain,
  mutation_root,
  subscription_rootRequest,
  subscription_rootObservableChain,
  subscription_root,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends query_rootRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<query_root, R>>

  mutation<R extends mutation_rootRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<mutation_root, R>>

  subscription<R extends subscription_rootRequest>(
    request: R & { __name?: string },
  ): Observable<FieldsSelection<subscription_root, R>>

  chain: {
    query: query_rootPromiseChain

    mutation: mutation_rootPromiseChain

    subscription: subscription_rootObservableChain
  }
}

export type QueryResult<fields extends query_rootRequest> = FieldsSelection<
  query_root,
  fields
>

export declare const generateQueryOp: (
  fields: query_rootRequest & { __name?: string },
) => GraphqlOperation
export type MutationResult<
  fields extends mutation_rootRequest
> = FieldsSelection<mutation_root, fields>

export declare const generateMutationOp: (
  fields: mutation_rootRequest & { __name?: string },
) => GraphqlOperation
export type SubscriptionResult<
  fields extends subscription_rootRequest
> = FieldsSelection<subscription_root, fields>

export declare const generateSubscriptionOp: (
  fields: subscription_rootRequest & { __name?: string },
) => GraphqlOperation

export declare const enumburnsConstraint: {
  readonly burns_pkey: 'burns_pkey'
}

export declare const enumburnsSelectColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly epoch_id: 'epoch_id'
  readonly id: 'id'
  readonly original_amount: 'original_amount'
  readonly regift_percent: 'regift_percent'
  readonly tokens_burnt: 'tokens_burnt'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enumburnsUpdateColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly epoch_id: 'epoch_id'
  readonly id: 'id'
  readonly original_amount: 'original_amount'
  readonly regift_percent: 'regift_percent'
  readonly tokens_burnt: 'tokens_burnt'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enumcircleApiKeysConstraint: {
  readonly circle_api_keys_pkey: 'circle_api_keys_pkey'
}

export declare const enumcircleApiKeysSelectColumn: {
  readonly circle_id: 'circle_id'
  readonly create_contributions: 'create_contributions'
  readonly create_vouches: 'create_vouches'
  readonly created_at: 'created_at'
  readonly created_by: 'created_by'
  readonly hash: 'hash'
  readonly name: 'name'
  readonly read_circle: 'read_circle'
  readonly read_contributions: 'read_contributions'
  readonly read_discord: 'read_discord'
  readonly read_epochs: 'read_epochs'
  readonly read_member_profiles: 'read_member_profiles'
  readonly read_nominees: 'read_nominees'
  readonly read_pending_token_gifts: 'read_pending_token_gifts'
  readonly update_circle: 'update_circle'
  readonly update_pending_token_gifts: 'update_pending_token_gifts'
}

export declare const enumcircleApiKeysUpdateColumn: {
  readonly circle_id: 'circle_id'
  readonly create_contributions: 'create_contributions'
  readonly create_vouches: 'create_vouches'
  readonly created_at: 'created_at'
  readonly created_by: 'created_by'
  readonly hash: 'hash'
  readonly name: 'name'
  readonly read_circle: 'read_circle'
  readonly read_contributions: 'read_contributions'
  readonly read_discord: 'read_discord'
  readonly read_epochs: 'read_epochs'
  readonly read_member_profiles: 'read_member_profiles'
  readonly read_nominees: 'read_nominees'
  readonly read_pending_token_gifts: 'read_pending_token_gifts'
  readonly update_circle: 'update_circle'
  readonly update_pending_token_gifts: 'update_pending_token_gifts'
}

export declare const enumcircleIntegrationsConstraint: {
  readonly circle_integrations_pkey: 'circle_integrations_pkey'
}

export declare const enumcircleIntegrationsSelectColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly data: 'data'
  readonly id: 'id'
  readonly name: 'name'
  readonly type: 'type'
  readonly updated_at: 'updated_at'
}

export declare const enumcircleIntegrationsUpdateColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly data: 'data'
  readonly id: 'id'
  readonly name: 'name'
  readonly type: 'type'
  readonly updated_at: 'updated_at'
}

export declare const enumcircleMetadataConstraint: {
  readonly circle_metadata_pkey: 'circle_metadata_pkey'
}

export declare const enumcircleMetadataSelectColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly json: 'json'
  readonly updated_at: 'updated_at'
}

export declare const enumcircleMetadataUpdateColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly json: 'json'
  readonly updated_at: 'updated_at'
}

export declare const enumcirclePrivateSelectColumn: {
  readonly circle_id: 'circle_id'
  readonly discord_webhook: 'discord_webhook'
}

export declare const enumcircleShareTokensConstraint: {
  readonly circle_share_token_pkey: 'circle_share_token_pkey'
  readonly circle_share_token_uuid_key: 'circle_share_token_uuid_key'
}

export declare const enumcircleShareTokensSelectColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly type: 'type'
  readonly updated_at: 'updated_at'
  readonly uuid: 'uuid'
}

export declare const enumcircleShareTokensUpdateColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly type: 'type'
  readonly updated_at: 'updated_at'
  readonly uuid: 'uuid'
}

export declare const enumcirclesConstraint: {
  readonly circles_pkey: 'circles_pkey'
}

export declare const enumcirclesSelectColumn: {
  readonly alloc_text: 'alloc_text'
  readonly auto_opt_out: 'auto_opt_out'
  readonly contact: 'contact'
  readonly created_at: 'created_at'
  readonly default_opt_in: 'default_opt_in'
  readonly deleted_at: 'deleted_at'
  readonly discord_webhook: 'discord_webhook'
  readonly fixed_payment_token_type: 'fixed_payment_token_type'
  readonly fixed_payment_vault_id: 'fixed_payment_vault_id'
  readonly id: 'id'
  readonly is_verified: 'is_verified'
  readonly logo: 'logo'
  readonly min_vouches: 'min_vouches'
  readonly name: 'name'
  readonly nomination_days_limit: 'nomination_days_limit'
  readonly only_giver_vouch: 'only_giver_vouch'
  readonly organization_id: 'organization_id'
  readonly show_pending_gives: 'show_pending_gives'
  readonly team_sel_text: 'team_sel_text'
  readonly team_selection: 'team_selection'
  readonly telegram_id: 'telegram_id'
  readonly token_name: 'token_name'
  readonly updated_at: 'updated_at'
  readonly vouching: 'vouching'
  readonly vouching_text: 'vouching_text'
}

export declare const enumcirclesUpdateColumn: {
  readonly alloc_text: 'alloc_text'
  readonly auto_opt_out: 'auto_opt_out'
  readonly contact: 'contact'
  readonly created_at: 'created_at'
  readonly default_opt_in: 'default_opt_in'
  readonly deleted_at: 'deleted_at'
  readonly discord_webhook: 'discord_webhook'
  readonly fixed_payment_token_type: 'fixed_payment_token_type'
  readonly fixed_payment_vault_id: 'fixed_payment_vault_id'
  readonly id: 'id'
  readonly is_verified: 'is_verified'
  readonly logo: 'logo'
  readonly min_vouches: 'min_vouches'
  readonly name: 'name'
  readonly nomination_days_limit: 'nomination_days_limit'
  readonly only_giver_vouch: 'only_giver_vouch'
  readonly organization_id: 'organization_id'
  readonly show_pending_gives: 'show_pending_gives'
  readonly team_sel_text: 'team_sel_text'
  readonly team_selection: 'team_selection'
  readonly telegram_id: 'telegram_id'
  readonly token_name: 'token_name'
  readonly updated_at: 'updated_at'
  readonly vouching: 'vouching'
  readonly vouching_text: 'vouching_text'
}

export declare const enumclaimsConstraint: {
  readonly claims_pkey: 'claims_pkey'
}

export declare const enumclaimsSelectColumn: {
  readonly address: 'address'
  readonly amount: 'amount'
  readonly created_at: 'created_at'
  readonly distribution_id: 'distribution_id'
  readonly id: 'id'
  readonly index: 'index'
  readonly new_amount: 'new_amount'
  readonly profile_id: 'profile_id'
  readonly proof: 'proof'
  readonly txHash: 'txHash'
  readonly updated_at: 'updated_at'
}

export declare const enumclaimsUpdateColumn: {
  readonly address: 'address'
  readonly amount: 'amount'
  readonly created_at: 'created_at'
  readonly distribution_id: 'distribution_id'
  readonly id: 'id'
  readonly index: 'index'
  readonly new_amount: 'new_amount'
  readonly profile_id: 'profile_id'
  readonly proof: 'proof'
  readonly txHash: 'txHash'
  readonly updated_at: 'updated_at'
}

export declare const enumcontributionsConstraint: {
  readonly contributions_pkey: 'contributions_pkey'
}

export declare const enumcontributionsSelectColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly created_with_api_key_hash: 'created_with_api_key_hash'
  readonly datetime_created: 'datetime_created'
  readonly deleted_at: 'deleted_at'
  readonly description: 'description'
  readonly id: 'id'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enumcontributionsUpdateColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly created_with_api_key_hash: 'created_with_api_key_hash'
  readonly datetime_created: 'datetime_created'
  readonly deleted_at: 'deleted_at'
  readonly description: 'description'
  readonly id: 'id'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enumcursorOrdering: {
  readonly ASC: 'ASC'
  readonly DESC: 'DESC'
}

export declare const enumdiscordRolesCirclesConstraint: {
  readonly roles_circles_circle_id_key: 'roles_circles_circle_id_key'
  readonly roles_circles_pkey: 'roles_circles_pkey'
}

export declare const enumdiscordRolesCirclesSelectColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly role: 'role'
  readonly updated_at: 'updated_at'
}

export declare const enumdiscordRolesCirclesUpdateColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly role: 'role'
  readonly updated_at: 'updated_at'
}

export declare const enumdiscordUsersConstraint: {
  readonly users_pkey: 'users_pkey'
  readonly users_profile_id_key: 'users_profile_id_key'
  readonly users_user_snowflake_key: 'users_user_snowflake_key'
}

export declare const enumdiscordUsersSelectColumn: {
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly profile_id: 'profile_id'
  readonly updated_at: 'updated_at'
  readonly user_snowflake: 'user_snowflake'
}

export declare const enumdiscordUsersUpdateColumn: {
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly profile_id: 'profile_id'
  readonly updated_at: 'updated_at'
  readonly user_snowflake: 'user_snowflake'
}

export declare const enumdistributionsConstraint: {
  readonly distributions_pkey: 'distributions_pkey'
}

export declare const enumdistributionsSelectColumn: {
  readonly created_at: 'created_at'
  readonly created_by: 'created_by'
  readonly distribution_epoch_id: 'distribution_epoch_id'
  readonly distribution_json: 'distribution_json'
  readonly distribution_type: 'distribution_type'
  readonly epoch_id: 'epoch_id'
  readonly fixed_amount: 'fixed_amount'
  readonly gift_amount: 'gift_amount'
  readonly id: 'id'
  readonly merkle_root: 'merkle_root'
  readonly total_amount: 'total_amount'
  readonly tx_hash: 'tx_hash'
  readonly updated_at: 'updated_at'
  readonly vault_id: 'vault_id'
}

export declare const enumdistributionsUpdateColumn: {
  readonly created_at: 'created_at'
  readonly created_by: 'created_by'
  readonly distribution_epoch_id: 'distribution_epoch_id'
  readonly distribution_json: 'distribution_json'
  readonly distribution_type: 'distribution_type'
  readonly epoch_id: 'epoch_id'
  readonly fixed_amount: 'fixed_amount'
  readonly gift_amount: 'gift_amount'
  readonly id: 'id'
  readonly merkle_root: 'merkle_root'
  readonly total_amount: 'total_amount'
  readonly tx_hash: 'tx_hash'
  readonly updated_at: 'updated_at'
  readonly vault_id: 'vault_id'
}

export declare const enumepochsConstraint: {
  readonly epoches_pkey: 'epoches_pkey'
}

export declare const enumepochsSelectColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly days: 'days'
  readonly description: 'description'
  readonly end_date: 'end_date'
  readonly ended: 'ended'
  readonly grant: 'grant'
  readonly id: 'id'
  readonly notified_before_end: 'notified_before_end'
  readonly notified_end: 'notified_end'
  readonly notified_start: 'notified_start'
  readonly number: 'number'
  readonly regift_days: 'regift_days'
  readonly repeat: 'repeat'
  readonly repeat_day_of_month: 'repeat_day_of_month'
  readonly start_date: 'start_date'
  readonly updated_at: 'updated_at'
}

export declare const enumepochsUpdateColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly days: 'days'
  readonly description: 'description'
  readonly end_date: 'end_date'
  readonly ended: 'ended'
  readonly grant: 'grant'
  readonly id: 'id'
  readonly notified_before_end: 'notified_before_end'
  readonly notified_end: 'notified_end'
  readonly notified_start: 'notified_start'
  readonly number: 'number'
  readonly regift_days: 'regift_days'
  readonly repeat: 'repeat'
  readonly repeat_day_of_month: 'repeat_day_of_month'
  readonly start_date: 'start_date'
  readonly updated_at: 'updated_at'
}

export declare const enumgiftPrivateSelectColumn: {
  readonly gift_id: 'gift_id'
  readonly note: 'note'
  readonly recipient_id: 'recipient_id'
  readonly sender_id: 'sender_id'
}

export declare const enumhistoriesConstraint: {
  readonly histories_pkey: 'histories_pkey'
}

export declare const enumhistoriesSelectColumn: {
  readonly bio: 'bio'
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly epoch_id: 'epoch_id'
  readonly id: 'id'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enumhistoriesUpdateColumn: {
  readonly bio: 'bio'
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly epoch_id: 'epoch_id'
  readonly id: 'id'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enuminteractionEventsConstraint: {
  readonly interaction_events_pkey: 'interaction_events_pkey'
}

export declare const enuminteractionEventsSelectColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly data: 'data'
  readonly event_subtype: 'event_subtype'
  readonly event_type: 'event_type'
  readonly id: 'id'
  readonly org_id: 'org_id'
  readonly profile_id: 'profile_id'
  readonly updated_at: 'updated_at'
}

export declare const enuminteractionEventsUpdateColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly data: 'data'
  readonly event_subtype: 'event_subtype'
  readonly event_type: 'event_type'
  readonly id: 'id'
  readonly org_id: 'org_id'
  readonly profile_id: 'profile_id'
  readonly updated_at: 'updated_at'
}

export declare const enumnomineesConstraint: {
  readonly nominees_pkey: 'nominees_pkey'
}

export declare const enumnomineesSelectColumn: {
  readonly address: 'address'
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly description: 'description'
  readonly ended: 'ended'
  readonly expiry_date: 'expiry_date'
  readonly id: 'id'
  readonly name: 'name'
  readonly nominated_by_user_id: 'nominated_by_user_id'
  readonly nominated_date: 'nominated_date'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
  readonly vouches_required: 'vouches_required'
}

export declare const enumnomineesUpdateColumn: {
  readonly address: 'address'
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly description: 'description'
  readonly ended: 'ended'
  readonly expiry_date: 'expiry_date'
  readonly id: 'id'
  readonly name: 'name'
  readonly nominated_by_user_id: 'nominated_by_user_id'
  readonly nominated_date: 'nominated_date'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
  readonly vouches_required: 'vouches_required'
}

export declare const enumorderBy: {
  readonly asc: 'asc'
  readonly asc_nulls_first: 'asc_nulls_first'
  readonly asc_nulls_last: 'asc_nulls_last'
  readonly desc: 'desc'
  readonly desc_nulls_first: 'desc_nulls_first'
  readonly desc_nulls_last: 'desc_nulls_last'
}

export declare const enumorganizationsConstraint: {
  readonly organizations_pkey: 'organizations_pkey'
}

export declare const enumorganizationsSelectColumn: {
  readonly created_at: 'created_at'
  readonly created_by: 'created_by'
  readonly id: 'id'
  readonly is_verified: 'is_verified'
  readonly logo: 'logo'
  readonly name: 'name'
  readonly sample: 'sample'
  readonly telegram_id: 'telegram_id'
  readonly updated_at: 'updated_at'
}

export declare const enumorganizationsUpdateColumn: {
  readonly created_at: 'created_at'
  readonly created_by: 'created_by'
  readonly id: 'id'
  readonly is_verified: 'is_verified'
  readonly logo: 'logo'
  readonly name: 'name'
  readonly sample: 'sample'
  readonly telegram_id: 'telegram_id'
  readonly updated_at: 'updated_at'
}

export declare const enumpendingGiftPrivateSelectColumn: {
  readonly gift_id: 'gift_id'
  readonly note: 'note'
  readonly recipient_id: 'recipient_id'
  readonly sender_id: 'sender_id'
}

export declare const enumpendingTokenGiftsConstraint: {
  readonly pending_token_gifts_pkey: 'pending_token_gifts_pkey'
  readonly pending_token_gifts_sender_id_recipient_id_epoch_id_key: 'pending_token_gifts_sender_id_recipient_id_epoch_id_key'
}

export declare const enumpendingTokenGiftsSelectColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly dts_created: 'dts_created'
  readonly epoch_id: 'epoch_id'
  readonly id: 'id'
  readonly note: 'note'
  readonly recipient_address: 'recipient_address'
  readonly recipient_id: 'recipient_id'
  readonly sender_address: 'sender_address'
  readonly sender_id: 'sender_id'
  readonly tokens: 'tokens'
  readonly updated_at: 'updated_at'
}

export declare const enumpendingTokenGiftsUpdateColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly dts_created: 'dts_created'
  readonly epoch_id: 'epoch_id'
  readonly id: 'id'
  readonly note: 'note'
  readonly recipient_address: 'recipient_address'
  readonly recipient_id: 'recipient_id'
  readonly sender_address: 'sender_address'
  readonly sender_id: 'sender_id'
  readonly tokens: 'tokens'
  readonly updated_at: 'updated_at'
}

export declare const enumpendingVaultTransactionsConstraint: {
  readonly pending_vault_transactions_pkey: 'pending_vault_transactions_pkey'
}

export declare const enumpendingVaultTransactionsSelectColumn: {
  readonly chain_id: 'chain_id'
  readonly claim_id: 'claim_id'
  readonly created_at: 'created_at'
  readonly created_by: 'created_by'
  readonly distribution_id: 'distribution_id'
  readonly org_id: 'org_id'
  readonly tx_hash: 'tx_hash'
  readonly tx_type: 'tx_type'
}

export declare const enumpendingVaultTransactionsUpdateColumn: {
  readonly chain_id: 'chain_id'
  readonly claim_id: 'claim_id'
  readonly created_at: 'created_at'
  readonly created_by: 'created_by'
  readonly distribution_id: 'distribution_id'
  readonly org_id: 'org_id'
  readonly tx_hash: 'tx_hash'
  readonly tx_type: 'tx_type'
}

export declare const enumpersonalAccessTokensConstraint: {
  readonly personal_access_tokens_pkey: 'personal_access_tokens_pkey'
  readonly personal_access_tokens_token_key: 'personal_access_tokens_token_key'
}

export declare const enumpersonalAccessTokensSelectColumn: {
  readonly abilities: 'abilities'
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly last_used_at: 'last_used_at'
  readonly name: 'name'
  readonly token: 'token'
  readonly tokenable_id: 'tokenable_id'
  readonly tokenable_type: 'tokenable_type'
  readonly updated_at: 'updated_at'
}

export declare const enumpersonalAccessTokensUpdateColumn: {
  readonly abilities: 'abilities'
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly last_used_at: 'last_used_at'
  readonly name: 'name'
  readonly token: 'token'
  readonly tokenable_id: 'tokenable_id'
  readonly tokenable_type: 'tokenable_type'
  readonly updated_at: 'updated_at'
}

export declare const enumprofilesConstraint: {
  readonly profiles_address_key: 'profiles_address_key'
  readonly profiles_name_key: 'profiles_name_key'
  readonly profiles_pkey: 'profiles_pkey'
}

export declare const enumprofilesSelectColumn: {
  readonly address: 'address'
  readonly ann_power: 'ann_power'
  readonly avatar: 'avatar'
  readonly background: 'background'
  readonly bio: 'bio'
  readonly chat_id: 'chat_id'
  readonly created_at: 'created_at'
  readonly discord_username: 'discord_username'
  readonly github_username: 'github_username'
  readonly id: 'id'
  readonly medium_username: 'medium_username'
  readonly name: 'name'
  readonly skills: 'skills'
  readonly telegram_username: 'telegram_username'
  readonly twitter_username: 'twitter_username'
  readonly updated_at: 'updated_at'
  readonly website: 'website'
}

export declare const enumprofilesUpdateColumn: {
  readonly address: 'address'
  readonly ann_power: 'ann_power'
  readonly avatar: 'avatar'
  readonly background: 'background'
  readonly bio: 'bio'
  readonly chat_id: 'chat_id'
  readonly created_at: 'created_at'
  readonly discord_username: 'discord_username'
  readonly github_username: 'github_username'
  readonly id: 'id'
  readonly medium_username: 'medium_username'
  readonly name: 'name'
  readonly skills: 'skills'
  readonly telegram_username: 'telegram_username'
  readonly twitter_username: 'twitter_username'
  readonly updated_at: 'updated_at'
  readonly website: 'website'
}

export declare const enumteammatesConstraint: {
  readonly teammates_pkey: 'teammates_pkey'
  readonly teammates_user_id_team_mate_id_key: 'teammates_user_id_team_mate_id_key'
}

export declare const enumteammatesSelectColumn: {
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly team_mate_id: 'team_mate_id'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enumteammatesUpdateColumn: {
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly team_mate_id: 'team_mate_id'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enumtokenGiftsConstraint: {
  readonly token_gifts_pkey: 'token_gifts_pkey'
}

export declare const enumtokenGiftsSelectColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly dts_created: 'dts_created'
  readonly epoch_id: 'epoch_id'
  readonly id: 'id'
  readonly note: 'note'
  readonly recipient_address: 'recipient_address'
  readonly recipient_id: 'recipient_id'
  readonly sender_address: 'sender_address'
  readonly sender_id: 'sender_id'
  readonly tokens: 'tokens'
  readonly updated_at: 'updated_at'
}

export declare const enumtokenGiftsUpdateColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly dts_created: 'dts_created'
  readonly epoch_id: 'epoch_id'
  readonly id: 'id'
  readonly note: 'note'
  readonly recipient_address: 'recipient_address'
  readonly recipient_id: 'recipient_id'
  readonly sender_address: 'sender_address'
  readonly sender_id: 'sender_id'
  readonly tokens: 'tokens'
  readonly updated_at: 'updated_at'
}

export declare const enumuserPrivateSelectColumn: {
  readonly circle_id: 'circle_id'
  readonly fixed_payment_amount: 'fixed_payment_amount'
  readonly fixed_payment_token_type: 'fixed_payment_token_type'
  readonly user_id: 'user_id'
}

export declare const enumusersConstraint: {
  readonly users_address_circle_id_deleted_at_key: 'users_address_circle_id_deleted_at_key'
  readonly users_pkey: 'users_pkey'
}

export declare const enumusersSelectColumn: {
  readonly address: 'address'
  readonly bio: 'bio'
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly deleted_at: 'deleted_at'
  readonly entrance: 'entrance'
  readonly epoch_first_visit: 'epoch_first_visit'
  readonly fixed_non_receiver: 'fixed_non_receiver'
  readonly fixed_payment_amount: 'fixed_payment_amount'
  readonly give_token_received: 'give_token_received'
  readonly give_token_remaining: 'give_token_remaining'
  readonly id: 'id'
  readonly name: 'name'
  readonly non_giver: 'non_giver'
  readonly non_receiver: 'non_receiver'
  readonly role: 'role'
  readonly starting_tokens: 'starting_tokens'
  readonly updated_at: 'updated_at'
}

export declare const enumusersUpdateColumn: {
  readonly address: 'address'
  readonly bio: 'bio'
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly deleted_at: 'deleted_at'
  readonly entrance: 'entrance'
  readonly epoch_first_visit: 'epoch_first_visit'
  readonly fixed_non_receiver: 'fixed_non_receiver'
  readonly fixed_payment_amount: 'fixed_payment_amount'
  readonly give_token_received: 'give_token_received'
  readonly give_token_remaining: 'give_token_remaining'
  readonly id: 'id'
  readonly name: 'name'
  readonly non_giver: 'non_giver'
  readonly non_receiver: 'non_receiver'
  readonly role: 'role'
  readonly starting_tokens: 'starting_tokens'
  readonly updated_at: 'updated_at'
}

export declare const enumvaultTransactionsConstraint: {
  readonly vault_transactions_pkey: 'vault_transactions_pkey'
}

export declare const enumvaultTransactionsSelectColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly created_by: 'created_by'
  readonly distribution_id: 'distribution_id'
  readonly id: 'id'
  readonly tx_hash: 'tx_hash'
  readonly tx_type: 'tx_type'
  readonly updated_at: 'updated_at'
  readonly vault_id: 'vault_id'
}

export declare const enumvaultTransactionsUpdateColumn: {
  readonly circle_id: 'circle_id'
  readonly created_at: 'created_at'
  readonly created_by: 'created_by'
  readonly distribution_id: 'distribution_id'
  readonly id: 'id'
  readonly tx_hash: 'tx_hash'
  readonly tx_type: 'tx_type'
  readonly updated_at: 'updated_at'
  readonly vault_id: 'vault_id'
}

export declare const enumvaultTxTypesConstraint: {
  readonly vault_tx_types_pkey: 'vault_tx_types_pkey'
}

export declare const enumvaultTxTypesEnum: {
  readonly Claim: 'Claim'
  readonly Deposit: 'Deposit'
  readonly Distribution: 'Distribution'
  readonly Vault_Deploy: 'Vault_Deploy'
  readonly Withdraw: 'Withdraw'
}

export declare const enumvaultTxTypesSelectColumn: {
  readonly comment: 'comment'
  readonly value: 'value'
}

export declare const enumvaultTxTypesUpdateColumn: {
  readonly comment: 'comment'
  readonly value: 'value'
}

export declare const enumvaultsConstraint: {
  readonly vaults_pkey: 'vaults_pkey'
  readonly vaults_vault_address_key: 'vaults_vault_address_key'
}

export declare const enumvaultsSelectColumn: {
  readonly chain_id: 'chain_id'
  readonly created_at: 'created_at'
  readonly created_by: 'created_by'
  readonly decimals: 'decimals'
  readonly deployment_block: 'deployment_block'
  readonly id: 'id'
  readonly org_id: 'org_id'
  readonly simple_token_address: 'simple_token_address'
  readonly symbol: 'symbol'
  readonly token_address: 'token_address'
  readonly updated_at: 'updated_at'
  readonly vault_address: 'vault_address'
}

export declare const enumvaultsUpdateColumn: {
  readonly chain_id: 'chain_id'
  readonly created_at: 'created_at'
  readonly created_by: 'created_by'
  readonly decimals: 'decimals'
  readonly deployment_block: 'deployment_block'
  readonly id: 'id'
  readonly org_id: 'org_id'
  readonly simple_token_address: 'simple_token_address'
  readonly symbol: 'symbol'
  readonly token_address: 'token_address'
  readonly updated_at: 'updated_at'
  readonly vault_address: 'vault_address'
}

export declare const enumvouchesConstraint: {
  readonly vouches_pkey: 'vouches_pkey'
}

export declare const enumvouchesSelectColumn: {
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly nominee_id: 'nominee_id'
  readonly updated_at: 'updated_at'
  readonly voucher_id: 'voucher_id'
}

export declare const enumvouchesUpdateColumn: {
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly nominee_id: 'nominee_id'
  readonly updated_at: 'updated_at'
  readonly voucher_id: 'voucher_id'
}
