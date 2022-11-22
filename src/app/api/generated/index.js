const {
  linkTypeMap,
  createClient: createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} = require('@genql/runtime')
var typeMap = linkTypeMap(require('./types.cjs'))

var version = '2.10.0'
assertSameVersion(version)

module.exports.version = version

module.exports.createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: 'http://localhost:8080/v1/graphql',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

module.exports.enumburnsConstraint = {
  burns_pkey: 'burns_pkey',
}

module.exports.enumburnsSelectColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  epoch_id: 'epoch_id',
  id: 'id',
  original_amount: 'original_amount',
  regift_percent: 'regift_percent',
  tokens_burnt: 'tokens_burnt',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

module.exports.enumburnsUpdateColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  epoch_id: 'epoch_id',
  id: 'id',
  original_amount: 'original_amount',
  regift_percent: 'regift_percent',
  tokens_burnt: 'tokens_burnt',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

module.exports.enumcircleApiKeysConstraint = {
  circle_api_keys_pkey: 'circle_api_keys_pkey',
}

module.exports.enumcircleApiKeysSelectColumn = {
  circle_id: 'circle_id',
  create_contributions: 'create_contributions',
  create_vouches: 'create_vouches',
  created_at: 'created_at',
  created_by: 'created_by',
  hash: 'hash',
  name: 'name',
  read_circle: 'read_circle',
  read_contributions: 'read_contributions',
  read_discord: 'read_discord',
  read_epochs: 'read_epochs',
  read_member_profiles: 'read_member_profiles',
  read_nominees: 'read_nominees',
  read_pending_token_gifts: 'read_pending_token_gifts',
  update_circle: 'update_circle',
  update_pending_token_gifts: 'update_pending_token_gifts',
}

module.exports.enumcircleApiKeysUpdateColumn = {
  circle_id: 'circle_id',
  create_contributions: 'create_contributions',
  create_vouches: 'create_vouches',
  created_at: 'created_at',
  created_by: 'created_by',
  hash: 'hash',
  name: 'name',
  read_circle: 'read_circle',
  read_contributions: 'read_contributions',
  read_discord: 'read_discord',
  read_epochs: 'read_epochs',
  read_member_profiles: 'read_member_profiles',
  read_nominees: 'read_nominees',
  read_pending_token_gifts: 'read_pending_token_gifts',
  update_circle: 'update_circle',
  update_pending_token_gifts: 'update_pending_token_gifts',
}

module.exports.enumcircleIntegrationsConstraint = {
  circle_integrations_pkey: 'circle_integrations_pkey',
}

module.exports.enumcircleIntegrationsSelectColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  data: 'data',
  id: 'id',
  name: 'name',
  type: 'type',
  updated_at: 'updated_at',
}

module.exports.enumcircleIntegrationsUpdateColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  data: 'data',
  id: 'id',
  name: 'name',
  type: 'type',
  updated_at: 'updated_at',
}

module.exports.enumcircleMetadataConstraint = {
  circle_metadata_pkey: 'circle_metadata_pkey',
}

module.exports.enumcircleMetadataSelectColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  id: 'id',
  json: 'json',
  updated_at: 'updated_at',
}

module.exports.enumcircleMetadataUpdateColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  id: 'id',
  json: 'json',
  updated_at: 'updated_at',
}

module.exports.enumcirclePrivateSelectColumn = {
  circle_id: 'circle_id',
  discord_webhook: 'discord_webhook',
}

module.exports.enumcircleShareTokensConstraint = {
  circle_share_token_pkey: 'circle_share_token_pkey',
  circle_share_token_uuid_key: 'circle_share_token_uuid_key',
}

module.exports.enumcircleShareTokensSelectColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  type: 'type',
  updated_at: 'updated_at',
  uuid: 'uuid',
}

module.exports.enumcircleShareTokensUpdateColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  type: 'type',
  updated_at: 'updated_at',
  uuid: 'uuid',
}

module.exports.enumcirclesConstraint = {
  circles_pkey: 'circles_pkey',
}

module.exports.enumcirclesSelectColumn = {
  alloc_text: 'alloc_text',
  auto_opt_out: 'auto_opt_out',
  contact: 'contact',
  created_at: 'created_at',
  default_opt_in: 'default_opt_in',
  deleted_at: 'deleted_at',
  discord_webhook: 'discord_webhook',
  fixed_payment_token_type: 'fixed_payment_token_type',
  fixed_payment_vault_id: 'fixed_payment_vault_id',
  id: 'id',
  is_verified: 'is_verified',
  logo: 'logo',
  min_vouches: 'min_vouches',
  name: 'name',
  nomination_days_limit: 'nomination_days_limit',
  only_giver_vouch: 'only_giver_vouch',
  organization_id: 'organization_id',
  show_pending_gives: 'show_pending_gives',
  team_sel_text: 'team_sel_text',
  team_selection: 'team_selection',
  telegram_id: 'telegram_id',
  token_name: 'token_name',
  updated_at: 'updated_at',
  vouching: 'vouching',
  vouching_text: 'vouching_text',
}

module.exports.enumcirclesUpdateColumn = {
  alloc_text: 'alloc_text',
  auto_opt_out: 'auto_opt_out',
  contact: 'contact',
  created_at: 'created_at',
  default_opt_in: 'default_opt_in',
  deleted_at: 'deleted_at',
  discord_webhook: 'discord_webhook',
  fixed_payment_token_type: 'fixed_payment_token_type',
  fixed_payment_vault_id: 'fixed_payment_vault_id',
  id: 'id',
  is_verified: 'is_verified',
  logo: 'logo',
  min_vouches: 'min_vouches',
  name: 'name',
  nomination_days_limit: 'nomination_days_limit',
  only_giver_vouch: 'only_giver_vouch',
  organization_id: 'organization_id',
  show_pending_gives: 'show_pending_gives',
  team_sel_text: 'team_sel_text',
  team_selection: 'team_selection',
  telegram_id: 'telegram_id',
  token_name: 'token_name',
  updated_at: 'updated_at',
  vouching: 'vouching',
  vouching_text: 'vouching_text',
}

module.exports.enumclaimsConstraint = {
  claims_pkey: 'claims_pkey',
}

module.exports.enumclaimsSelectColumn = {
  address: 'address',
  amount: 'amount',
  created_at: 'created_at',
  distribution_id: 'distribution_id',
  id: 'id',
  index: 'index',
  new_amount: 'new_amount',
  profile_id: 'profile_id',
  proof: 'proof',
  txHash: 'txHash',
  updated_at: 'updated_at',
}

module.exports.enumclaimsUpdateColumn = {
  address: 'address',
  amount: 'amount',
  created_at: 'created_at',
  distribution_id: 'distribution_id',
  id: 'id',
  index: 'index',
  new_amount: 'new_amount',
  profile_id: 'profile_id',
  proof: 'proof',
  txHash: 'txHash',
  updated_at: 'updated_at',
}

module.exports.enumcontributionsConstraint = {
  contributions_pkey: 'contributions_pkey',
}

module.exports.enumcontributionsSelectColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  created_with_api_key_hash: 'created_with_api_key_hash',
  datetime_created: 'datetime_created',
  deleted_at: 'deleted_at',
  description: 'description',
  id: 'id',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

module.exports.enumcontributionsUpdateColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  created_with_api_key_hash: 'created_with_api_key_hash',
  datetime_created: 'datetime_created',
  deleted_at: 'deleted_at',
  description: 'description',
  id: 'id',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

module.exports.enumcursorOrdering = {
  ASC: 'ASC',
  DESC: 'DESC',
}

module.exports.enumdiscordRolesCirclesConstraint = {
  roles_circles_circle_id_key: 'roles_circles_circle_id_key',
  roles_circles_pkey: 'roles_circles_pkey',
}

module.exports.enumdiscordRolesCirclesSelectColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  id: 'id',
  role: 'role',
  updated_at: 'updated_at',
}

module.exports.enumdiscordRolesCirclesUpdateColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  id: 'id',
  role: 'role',
  updated_at: 'updated_at',
}

module.exports.enumdiscordUsersConstraint = {
  users_pkey: 'users_pkey',
  users_profile_id_key: 'users_profile_id_key',
  users_user_snowflake_key: 'users_user_snowflake_key',
}

module.exports.enumdiscordUsersSelectColumn = {
  created_at: 'created_at',
  id: 'id',
  profile_id: 'profile_id',
  updated_at: 'updated_at',
  user_snowflake: 'user_snowflake',
}

module.exports.enumdiscordUsersUpdateColumn = {
  created_at: 'created_at',
  id: 'id',
  profile_id: 'profile_id',
  updated_at: 'updated_at',
  user_snowflake: 'user_snowflake',
}

module.exports.enumdistributionsConstraint = {
  distributions_pkey: 'distributions_pkey',
}

module.exports.enumdistributionsSelectColumn = {
  created_at: 'created_at',
  created_by: 'created_by',
  distribution_epoch_id: 'distribution_epoch_id',
  distribution_json: 'distribution_json',
  distribution_type: 'distribution_type',
  epoch_id: 'epoch_id',
  fixed_amount: 'fixed_amount',
  gift_amount: 'gift_amount',
  id: 'id',
  merkle_root: 'merkle_root',
  total_amount: 'total_amount',
  tx_hash: 'tx_hash',
  updated_at: 'updated_at',
  vault_id: 'vault_id',
}

module.exports.enumdistributionsUpdateColumn = {
  created_at: 'created_at',
  created_by: 'created_by',
  distribution_epoch_id: 'distribution_epoch_id',
  distribution_json: 'distribution_json',
  distribution_type: 'distribution_type',
  epoch_id: 'epoch_id',
  fixed_amount: 'fixed_amount',
  gift_amount: 'gift_amount',
  id: 'id',
  merkle_root: 'merkle_root',
  total_amount: 'total_amount',
  tx_hash: 'tx_hash',
  updated_at: 'updated_at',
  vault_id: 'vault_id',
}

module.exports.enumepochsConstraint = {
  epoches_pkey: 'epoches_pkey',
}

module.exports.enumepochsSelectColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  days: 'days',
  description: 'description',
  end_date: 'end_date',
  ended: 'ended',
  grant: 'grant',
  id: 'id',
  notified_before_end: 'notified_before_end',
  notified_end: 'notified_end',
  notified_start: 'notified_start',
  number: 'number',
  regift_days: 'regift_days',
  repeat: 'repeat',
  repeat_day_of_month: 'repeat_day_of_month',
  start_date: 'start_date',
  updated_at: 'updated_at',
}

module.exports.enumepochsUpdateColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  days: 'days',
  description: 'description',
  end_date: 'end_date',
  ended: 'ended',
  grant: 'grant',
  id: 'id',
  notified_before_end: 'notified_before_end',
  notified_end: 'notified_end',
  notified_start: 'notified_start',
  number: 'number',
  regift_days: 'regift_days',
  repeat: 'repeat',
  repeat_day_of_month: 'repeat_day_of_month',
  start_date: 'start_date',
  updated_at: 'updated_at',
}

module.exports.enumgiftPrivateSelectColumn = {
  gift_id: 'gift_id',
  note: 'note',
  recipient_id: 'recipient_id',
  sender_id: 'sender_id',
}

module.exports.enumhistoriesConstraint = {
  histories_pkey: 'histories_pkey',
}

module.exports.enumhistoriesSelectColumn = {
  bio: 'bio',
  circle_id: 'circle_id',
  created_at: 'created_at',
  epoch_id: 'epoch_id',
  id: 'id',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

module.exports.enumhistoriesUpdateColumn = {
  bio: 'bio',
  circle_id: 'circle_id',
  created_at: 'created_at',
  epoch_id: 'epoch_id',
  id: 'id',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

module.exports.enuminteractionEventsConstraint = {
  interaction_events_pkey: 'interaction_events_pkey',
}

module.exports.enuminteractionEventsSelectColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  data: 'data',
  event_subtype: 'event_subtype',
  event_type: 'event_type',
  id: 'id',
  org_id: 'org_id',
  profile_id: 'profile_id',
  updated_at: 'updated_at',
}

module.exports.enuminteractionEventsUpdateColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  data: 'data',
  event_subtype: 'event_subtype',
  event_type: 'event_type',
  id: 'id',
  org_id: 'org_id',
  profile_id: 'profile_id',
  updated_at: 'updated_at',
}

module.exports.enumnomineesConstraint = {
  nominees_pkey: 'nominees_pkey',
}

module.exports.enumnomineesSelectColumn = {
  address: 'address',
  circle_id: 'circle_id',
  created_at: 'created_at',
  description: 'description',
  ended: 'ended',
  expiry_date: 'expiry_date',
  id: 'id',
  name: 'name',
  nominated_by_user_id: 'nominated_by_user_id',
  nominated_date: 'nominated_date',
  updated_at: 'updated_at',
  user_id: 'user_id',
  vouches_required: 'vouches_required',
}

module.exports.enumnomineesUpdateColumn = {
  address: 'address',
  circle_id: 'circle_id',
  created_at: 'created_at',
  description: 'description',
  ended: 'ended',
  expiry_date: 'expiry_date',
  id: 'id',
  name: 'name',
  nominated_by_user_id: 'nominated_by_user_id',
  nominated_date: 'nominated_date',
  updated_at: 'updated_at',
  user_id: 'user_id',
  vouches_required: 'vouches_required',
}

module.exports.enumorderBy = {
  asc: 'asc',
  asc_nulls_first: 'asc_nulls_first',
  asc_nulls_last: 'asc_nulls_last',
  desc: 'desc',
  desc_nulls_first: 'desc_nulls_first',
  desc_nulls_last: 'desc_nulls_last',
}

module.exports.enumorganizationsConstraint = {
  organizations_pkey: 'organizations_pkey',
}

module.exports.enumorganizationsSelectColumn = {
  created_at: 'created_at',
  created_by: 'created_by',
  id: 'id',
  is_verified: 'is_verified',
  logo: 'logo',
  name: 'name',
  sample: 'sample',
  telegram_id: 'telegram_id',
  updated_at: 'updated_at',
}

module.exports.enumorganizationsUpdateColumn = {
  created_at: 'created_at',
  created_by: 'created_by',
  id: 'id',
  is_verified: 'is_verified',
  logo: 'logo',
  name: 'name',
  sample: 'sample',
  telegram_id: 'telegram_id',
  updated_at: 'updated_at',
}

module.exports.enumpendingGiftPrivateSelectColumn = {
  gift_id: 'gift_id',
  note: 'note',
  recipient_id: 'recipient_id',
  sender_id: 'sender_id',
}

module.exports.enumpendingTokenGiftsConstraint = {
  pending_token_gifts_pkey: 'pending_token_gifts_pkey',
  pending_token_gifts_sender_id_recipient_id_epoch_id_key:
    'pending_token_gifts_sender_id_recipient_id_epoch_id_key',
}

module.exports.enumpendingTokenGiftsSelectColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  dts_created: 'dts_created',
  epoch_id: 'epoch_id',
  id: 'id',
  note: 'note',
  recipient_address: 'recipient_address',
  recipient_id: 'recipient_id',
  sender_address: 'sender_address',
  sender_id: 'sender_id',
  tokens: 'tokens',
  updated_at: 'updated_at',
}

module.exports.enumpendingTokenGiftsUpdateColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  dts_created: 'dts_created',
  epoch_id: 'epoch_id',
  id: 'id',
  note: 'note',
  recipient_address: 'recipient_address',
  recipient_id: 'recipient_id',
  sender_address: 'sender_address',
  sender_id: 'sender_id',
  tokens: 'tokens',
  updated_at: 'updated_at',
}

module.exports.enumpendingVaultTransactionsConstraint = {
  pending_vault_transactions_pkey: 'pending_vault_transactions_pkey',
}

module.exports.enumpendingVaultTransactionsSelectColumn = {
  chain_id: 'chain_id',
  claim_id: 'claim_id',
  created_at: 'created_at',
  created_by: 'created_by',
  distribution_id: 'distribution_id',
  org_id: 'org_id',
  tx_hash: 'tx_hash',
  tx_type: 'tx_type',
}

module.exports.enumpendingVaultTransactionsUpdateColumn = {
  chain_id: 'chain_id',
  claim_id: 'claim_id',
  created_at: 'created_at',
  created_by: 'created_by',
  distribution_id: 'distribution_id',
  org_id: 'org_id',
  tx_hash: 'tx_hash',
  tx_type: 'tx_type',
}

module.exports.enumpersonalAccessTokensConstraint = {
  personal_access_tokens_pkey: 'personal_access_tokens_pkey',
  personal_access_tokens_token_key: 'personal_access_tokens_token_key',
}

module.exports.enumpersonalAccessTokensSelectColumn = {
  abilities: 'abilities',
  created_at: 'created_at',
  id: 'id',
  last_used_at: 'last_used_at',
  name: 'name',
  token: 'token',
  tokenable_id: 'tokenable_id',
  tokenable_type: 'tokenable_type',
  updated_at: 'updated_at',
}

module.exports.enumpersonalAccessTokensUpdateColumn = {
  abilities: 'abilities',
  created_at: 'created_at',
  id: 'id',
  last_used_at: 'last_used_at',
  name: 'name',
  token: 'token',
  tokenable_id: 'tokenable_id',
  tokenable_type: 'tokenable_type',
  updated_at: 'updated_at',
}

module.exports.enumprofilesConstraint = {
  profiles_address_key: 'profiles_address_key',
  profiles_name_key: 'profiles_name_key',
  profiles_pkey: 'profiles_pkey',
}

module.exports.enumprofilesSelectColumn = {
  address: 'address',
  ann_power: 'ann_power',
  avatar: 'avatar',
  background: 'background',
  bio: 'bio',
  chat_id: 'chat_id',
  created_at: 'created_at',
  discord_username: 'discord_username',
  github_username: 'github_username',
  id: 'id',
  medium_username: 'medium_username',
  name: 'name',
  skills: 'skills',
  telegram_username: 'telegram_username',
  twitter_username: 'twitter_username',
  updated_at: 'updated_at',
  website: 'website',
}

module.exports.enumprofilesUpdateColumn = {
  address: 'address',
  ann_power: 'ann_power',
  avatar: 'avatar',
  background: 'background',
  bio: 'bio',
  chat_id: 'chat_id',
  created_at: 'created_at',
  discord_username: 'discord_username',
  github_username: 'github_username',
  id: 'id',
  medium_username: 'medium_username',
  name: 'name',
  skills: 'skills',
  telegram_username: 'telegram_username',
  twitter_username: 'twitter_username',
  updated_at: 'updated_at',
  website: 'website',
}

module.exports.enumteammatesConstraint = {
  teammates_pkey: 'teammates_pkey',
  teammates_user_id_team_mate_id_key: 'teammates_user_id_team_mate_id_key',
}

module.exports.enumteammatesSelectColumn = {
  created_at: 'created_at',
  id: 'id',
  team_mate_id: 'team_mate_id',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

module.exports.enumteammatesUpdateColumn = {
  created_at: 'created_at',
  id: 'id',
  team_mate_id: 'team_mate_id',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

module.exports.enumtokenGiftsConstraint = {
  token_gifts_pkey: 'token_gifts_pkey',
}

module.exports.enumtokenGiftsSelectColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  dts_created: 'dts_created',
  epoch_id: 'epoch_id',
  id: 'id',
  note: 'note',
  recipient_address: 'recipient_address',
  recipient_id: 'recipient_id',
  sender_address: 'sender_address',
  sender_id: 'sender_id',
  tokens: 'tokens',
  updated_at: 'updated_at',
}

module.exports.enumtokenGiftsUpdateColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  dts_created: 'dts_created',
  epoch_id: 'epoch_id',
  id: 'id',
  note: 'note',
  recipient_address: 'recipient_address',
  recipient_id: 'recipient_id',
  sender_address: 'sender_address',
  sender_id: 'sender_id',
  tokens: 'tokens',
  updated_at: 'updated_at',
}

module.exports.enumuserPrivateSelectColumn = {
  circle_id: 'circle_id',
  fixed_payment_amount: 'fixed_payment_amount',
  fixed_payment_token_type: 'fixed_payment_token_type',
  user_id: 'user_id',
}

module.exports.enumusersConstraint = {
  users_address_circle_id_deleted_at_key:
    'users_address_circle_id_deleted_at_key',
  users_pkey: 'users_pkey',
}

module.exports.enumusersSelectColumn = {
  address: 'address',
  bio: 'bio',
  circle_id: 'circle_id',
  created_at: 'created_at',
  deleted_at: 'deleted_at',
  entrance: 'entrance',
  epoch_first_visit: 'epoch_first_visit',
  fixed_non_receiver: 'fixed_non_receiver',
  fixed_payment_amount: 'fixed_payment_amount',
  give_token_received: 'give_token_received',
  give_token_remaining: 'give_token_remaining',
  id: 'id',
  name: 'name',
  non_giver: 'non_giver',
  non_receiver: 'non_receiver',
  role: 'role',
  starting_tokens: 'starting_tokens',
  updated_at: 'updated_at',
}

module.exports.enumusersUpdateColumn = {
  address: 'address',
  bio: 'bio',
  circle_id: 'circle_id',
  created_at: 'created_at',
  deleted_at: 'deleted_at',
  entrance: 'entrance',
  epoch_first_visit: 'epoch_first_visit',
  fixed_non_receiver: 'fixed_non_receiver',
  fixed_payment_amount: 'fixed_payment_amount',
  give_token_received: 'give_token_received',
  give_token_remaining: 'give_token_remaining',
  id: 'id',
  name: 'name',
  non_giver: 'non_giver',
  non_receiver: 'non_receiver',
  role: 'role',
  starting_tokens: 'starting_tokens',
  updated_at: 'updated_at',
}

module.exports.enumvaultTransactionsConstraint = {
  vault_transactions_pkey: 'vault_transactions_pkey',
}

module.exports.enumvaultTransactionsSelectColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  created_by: 'created_by',
  distribution_id: 'distribution_id',
  id: 'id',
  tx_hash: 'tx_hash',
  tx_type: 'tx_type',
  updated_at: 'updated_at',
  vault_id: 'vault_id',
}

module.exports.enumvaultTransactionsUpdateColumn = {
  circle_id: 'circle_id',
  created_at: 'created_at',
  created_by: 'created_by',
  distribution_id: 'distribution_id',
  id: 'id',
  tx_hash: 'tx_hash',
  tx_type: 'tx_type',
  updated_at: 'updated_at',
  vault_id: 'vault_id',
}

module.exports.enumvaultTxTypesConstraint = {
  vault_tx_types_pkey: 'vault_tx_types_pkey',
}

module.exports.enumvaultTxTypesEnum = {
  Claim: 'Claim',
  Deposit: 'Deposit',
  Distribution: 'Distribution',
  Vault_Deploy: 'Vault_Deploy',
  Withdraw: 'Withdraw',
}

module.exports.enumvaultTxTypesSelectColumn = {
  comment: 'comment',
  value: 'value',
}

module.exports.enumvaultTxTypesUpdateColumn = {
  comment: 'comment',
  value: 'value',
}

module.exports.enumvaultsConstraint = {
  vaults_pkey: 'vaults_pkey',
  vaults_vault_address_key: 'vaults_vault_address_key',
}

module.exports.enumvaultsSelectColumn = {
  chain_id: 'chain_id',
  created_at: 'created_at',
  created_by: 'created_by',
  decimals: 'decimals',
  deployment_block: 'deployment_block',
  id: 'id',
  org_id: 'org_id',
  simple_token_address: 'simple_token_address',
  symbol: 'symbol',
  token_address: 'token_address',
  updated_at: 'updated_at',
  vault_address: 'vault_address',
}

module.exports.enumvaultsUpdateColumn = {
  chain_id: 'chain_id',
  created_at: 'created_at',
  created_by: 'created_by',
  decimals: 'decimals',
  deployment_block: 'deployment_block',
  id: 'id',
  org_id: 'org_id',
  simple_token_address: 'simple_token_address',
  symbol: 'symbol',
  token_address: 'token_address',
  updated_at: 'updated_at',
  vault_address: 'vault_address',
}

module.exports.enumvouchesConstraint = {
  vouches_pkey: 'vouches_pkey',
}

module.exports.enumvouchesSelectColumn = {
  created_at: 'created_at',
  id: 'id',
  nominee_id: 'nominee_id',
  updated_at: 'updated_at',
  voucher_id: 'voucher_id',
}

module.exports.enumvouchesUpdateColumn = {
  created_at: 'created_at',
  id: 'id',
  nominee_id: 'nominee_id',
  updated_at: 'updated_at',
  voucher_id: 'voucher_id',
}

module.exports.generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
module.exports.generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
module.exports.generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
module.exports.everything = {
  __scalar: true,
}

var schemaExports = require('./guards.cjs')
for (var k in schemaExports) {
  module.exports[k] = schemaExports[k]
}
