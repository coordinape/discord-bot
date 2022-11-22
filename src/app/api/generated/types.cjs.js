module.exports = {
    "scalars": [
        6,
        27,
        30,
        31,
        40,
        61,
        71,
        82,
        94,
        110,
        122,
        134,
        150,
        161,
        173,
        189,
        200,
        212,
        232,
        249,
        258,
        266,
        279,
        291,
        303,
        319,
        330,
        342,
        358,
        369,
        381,
        389,
        390,
        397,
        406,
        414,
        424,
        433,
        441,
        455,
        471,
        483,
        499,
        511,
        523,
        543,
        560,
        569,
        577,
        588,
        601,
        609,
        614,
        616,
        627,
        639,
        651,
        659,
        661,
        667,
        677,
        685,
        702,
        722,
        733,
        745,
        758,
        767,
        775,
        785,
        794,
        802,
        812,
        822,
        830,
        843,
        854,
        866,
        874,
        876,
        886,
        897,
        909,
        927,
        945,
        957,
        969,
        977,
        987,
        998,
        1010,
        1022,
        1023,
        1033,
        1037,
        1047,
        1059,
        1071,
        1087,
        1098,
        1110
    ],
    "types": {
        "AdminUpdateUserInput": {
            "address": [
                40
            ],
            "circle_id": [
                31
            ],
            "fixed_non_receiver": [
                6
            ],
            "fixed_payment_amount": [
                27
            ],
            "name": [
                40
            ],
            "new_address": [
                40
            ],
            "non_giver": [
                6
            ],
            "non_receiver": [
                6
            ],
            "role": [
                31
            ],
            "starting_tokens": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "Allocation": {
            "note": [
                40
            ],
            "recipient_id": [
                31
            ],
            "tokens": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "AllocationCsvInput": {
            "circle_id": [
                31
            ],
            "epoch": [
                31
            ],
            "epoch_id": [
                31
            ],
            "form_gift_amount": [
                27
            ],
            "gift_token_symbol": [
                40
            ],
            "grant": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "AllocationCsvResponse": {
            "file": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "Allocations": {
            "allocations": [
                1
            ],
            "circle_id": [
                31
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "AllocationsResponse": {
            "user": [
                937
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "Boolean": {},
        "Boolean_comparison_exp": {
            "_eq": [
                6
            ],
            "_gt": [
                6
            ],
            "_gte": [
                6
            ],
            "_in": [
                6
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                6
            ],
            "_lte": [
                6
            ],
            "_neq": [
                6
            ],
            "_nin": [
                6
            ],
            "__typename": [
                40
            ]
        },
        "ConfirmationResponse": {
            "success": [
                6
            ],
            "__typename": [
                40
            ]
        },
        "CoordinapeInput": {
            "circle_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "CreateCircleInput": {
            "circle_name": [
                40
            ],
            "contact": [
                40
            ],
            "image_data_base64": [
                40
            ],
            "organization_id": [
                31
            ],
            "organization_name": [
                40
            ],
            "user_name": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "CreateCircleResponse": {
            "circle": [
                271
            ],
            "id": [
                31
            ],
            "users": [
                937,
                {
                    "distinct_on": [
                        957,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        955,
                        "[users_order_by!]"
                    ],
                    "where": [
                        944
                    ]
                }
            ],
            "users_aggregate": [
                938,
                {
                    "distinct_on": [
                        957,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        955,
                        "[users_order_by!]"
                    ],
                    "where": [
                        944
                    ]
                }
            ],
            "__typename": [
                40
            ]
        },
        "CreateEpochInput": {
            "circle_id": [
                31
            ],
            "days": [
                31
            ],
            "grant": [
                27
            ],
            "repeat": [
                31
            ],
            "start_date": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "CreateNomineeInput": {
            "address": [
                40
            ],
            "circle_id": [
                31
            ],
            "description": [
                40
            ],
            "name": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "CreateNomineeResponse": {
            "id": [
                31
            ],
            "nominee": [
                619
            ],
            "__typename": [
                40
            ]
        },
        "CreateSampleCircleResponse": {
            "circle": [
                271
            ],
            "id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "CreateUserInput": {
            "address": [
                40
            ],
            "circle_id": [
                31
            ],
            "fixed_non_receiver": [
                6
            ],
            "fixed_payment_amount": [
                27
            ],
            "name": [
                40
            ],
            "non_giver": [
                6
            ],
            "non_receiver": [
                6
            ],
            "role": [
                31
            ],
            "starting_tokens": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "CreateUserWithTokenInput": {
            "name": [
                40
            ],
            "token": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "CreateUsersInput": {
            "circle_id": [
                31
            ],
            "users": [
                56
            ],
            "__typename": [
                40
            ]
        },
        "CreateVaultInput": {
            "chain_id": [
                31
            ],
            "deployment_block": [
                31
            ],
            "org_id": [
                31
            ],
            "tx_hash": [
                40
            ],
            "vault_address": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "DeleteCircleInput": {
            "circle_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "DeleteContributionInput": {
            "contribution_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "DeleteDiscordUserInput": {
            "user_snowflake": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "DeleteEpochInput": {
            "circle_id": [
                31
            ],
            "id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "DeleteEpochResponse": {
            "success": [
                6
            ],
            "__typename": [
                40
            ]
        },
        "DeleteUserInput": {
            "address": [
                40
            ],
            "circle_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "EpochResponse": {
            "epoch": [
                491
            ],
            "id": [
                30
            ],
            "__typename": [
                40
            ]
        },
        "Float": {},
        "GenerateApiKeyInput": {
            "circle_id": [
                31
            ],
            "create_contributions": [
                6
            ],
            "create_vouches": [
                6
            ],
            "name": [
                40
            ],
            "read_circle": [
                6
            ],
            "read_contributions": [
                6
            ],
            "read_discord": [
                6
            ],
            "read_epochs": [
                6
            ],
            "read_member_profiles": [
                6
            ],
            "read_nominees": [
                6
            ],
            "read_pending_token_gifts": [
                6
            ],
            "update_circle": [
                6
            ],
            "update_pending_token_gifts": [
                6
            ],
            "__typename": [
                40
            ]
        },
        "GenerateApiKeyResponse": {
            "api_key": [
                40
            ],
            "circleApiKey": [
                102
            ],
            "hash": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "ID": {},
        "Int": {},
        "Int_comparison_exp": {
            "_eq": [
                31
            ],
            "_gt": [
                31
            ],
            "_gte": [
                31
            ],
            "_in": [
                31
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                31
            ],
            "_lte": [
                31
            ],
            "_neq": [
                31
            ],
            "_nin": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "LinkDiscordUserInput": {
            "discord_id": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "LinkDiscordUserResponse": {
            "id": [
                31
            ],
            "linkDiscordUser_DiscordUser": [
                419
            ],
            "__typename": [
                40
            ]
        },
        "LogVaultTxInput": {
            "amount": [
                27
            ],
            "circle_id": [
                31
            ],
            "distribution_id": [
                31
            ],
            "org_id": [
                31
            ],
            "symbol": [
                40
            ],
            "tx_hash": [
                40
            ],
            "tx_type": [
                40
            ],
            "vault_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "LogVaultTxResponse": {
            "id": [
                30
            ],
            "vault_tx_return_object": [
                979
            ],
            "__typename": [
                40
            ]
        },
        "LogoutResponse": {
            "id": [
                31
            ],
            "profile": [
                807
            ],
            "__typename": [
                40
            ]
        },
        "MarkClaimedInput": {
            "claim_id": [
                31
            ],
            "tx_hash": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "MarkClaimedOutput": {
            "ids": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                40
            ],
            "_gt": [
                40
            ],
            "_gte": [
                40
            ],
            "_ilike": [
                40
            ],
            "_in": [
                40
            ],
            "_iregex": [
                40
            ],
            "_is_null": [
                6
            ],
            "_like": [
                40
            ],
            "_lt": [
                40
            ],
            "_lte": [
                40
            ],
            "_neq": [
                40
            ],
            "_nilike": [
                40
            ],
            "_nin": [
                40
            ],
            "_niregex": [
                40
            ],
            "_nlike": [
                40
            ],
            "_nregex": [
                40
            ],
            "_nsimilar": [
                40
            ],
            "_regex": [
                40
            ],
            "_similar": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "UpdateCircleInput": {
            "alloc_text": [
                40
            ],
            "auto_opt_out": [
                6
            ],
            "circle_id": [
                31
            ],
            "default_opt_in": [
                6
            ],
            "discord_webhook": [
                40
            ],
            "fixed_payment_token_type": [
                40
            ],
            "fixed_payment_vault_id": [
                31
            ],
            "min_vouches": [
                31
            ],
            "name": [
                40
            ],
            "nomination_days_limit": [
                31
            ],
            "only_giver_vouch": [
                6
            ],
            "team_sel_text": [
                40
            ],
            "team_selection": [
                6
            ],
            "token_name": [
                40
            ],
            "update_webhook": [
                6
            ],
            "vouching": [
                6
            ],
            "vouching_text": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "UpdateCircleOutput": {
            "circle": [
                271
            ],
            "id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "UpdateCircleResponse": {
            "circle": [
                271
            ],
            "id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "UpdateContributionInput": {
            "datetime_created": [
                876
            ],
            "description": [
                40
            ],
            "id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "UpdateContributionResponse": {
            "id": [
                30
            ],
            "updateContribution_Contribution": [
                350
            ],
            "__typename": [
                40
            ]
        },
        "UpdateEpochInput": {
            "circle_id": [
                31
            ],
            "days": [
                31
            ],
            "grant": [
                27
            ],
            "id": [
                31
            ],
            "repeat": [
                31
            ],
            "start_date": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "UpdateOrgResponse": {
            "id": [
                31
            ],
            "org": [
                662
            ],
            "__typename": [
                40
            ]
        },
        "UpdateProfileResponse": {
            "id": [
                31
            ],
            "profile": [
                807
            ],
            "__typename": [
                40
            ]
        },
        "UpdateTeammatesInput": {
            "circle_id": [
                31
            ],
            "teammates": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "UpdateTeammatesResponse": {
            "user": [
                937
            ],
            "user_id": [
                30
            ],
            "__typename": [
                40
            ]
        },
        "UpdateUserInput": {
            "bio": [
                40
            ],
            "circle_id": [
                31
            ],
            "epoch_first_visit": [
                6
            ],
            "non_receiver": [
                6
            ],
            "__typename": [
                40
            ]
        },
        "UploadCircleImageInput": {
            "circle_id": [
                31
            ],
            "image_data_base64": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "UploadImageInput": {
            "image_data_base64": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "UploadOrgImageInput": {
            "image_data_base64": [
                40
            ],
            "org_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "UserObj": {
            "address": [
                40
            ],
            "entrance": [
                40
            ],
            "fixed_non_receiver": [
                6
            ],
            "name": [
                40
            ],
            "non_giver": [
                6
            ],
            "non_receiver": [
                6
            ],
            "role": [
                31
            ],
            "starting_tokens": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "UserResponse": {
            "UserResponse": [
                937
            ],
            "id": [
                30
            ],
            "__typename": [
                40
            ]
        },
        "VaultResponse": {
            "id": [
                30
            ],
            "vault": [
                1039
            ],
            "__typename": [
                40
            ]
        },
        "VouchInput": {
            "nominee_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "VouchOutput": {
            "id": [
                31
            ],
            "nominee": [
                619
            ],
            "__typename": [
                40
            ]
        },
        "bigint": {},
        "bigint_comparison_exp": {
            "_eq": [
                61
            ],
            "_gt": [
                61
            ],
            "_gte": [
                61
            ],
            "_in": [
                61
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                61
            ],
            "_lte": [
                61
            ],
            "_neq": [
                61
            ],
            "_nin": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "burns": {
            "circle": [
                271
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "epoch": [
                491
            ],
            "epoch_id": [
                61
            ],
            "id": [
                61
            ],
            "original_amount": [
                31
            ],
            "regift_percent": [
                31
            ],
            "tokens_burnt": [
                31
            ],
            "updated_at": [
                874
            ],
            "user": [
                937
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "burns_aggregate": {
            "aggregate": [
                65
            ],
            "nodes": [
                63
            ],
            "__typename": [
                40
            ]
        },
        "burns_aggregate_fields": {
            "avg": [
                68
            ],
            "count": [
                31,
                {
                    "columns": [
                        82,
                        "[burns_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                74
            ],
            "min": [
                76
            ],
            "stddev": [
                84
            ],
            "stddev_pop": [
                86
            ],
            "stddev_samp": [
                88
            ],
            "sum": [
                92
            ],
            "var_pop": [
                96
            ],
            "var_samp": [
                98
            ],
            "variance": [
                100
            ],
            "__typename": [
                40
            ]
        },
        "burns_aggregate_order_by": {
            "avg": [
                69
            ],
            "count": [
                661
            ],
            "max": [
                75
            ],
            "min": [
                77
            ],
            "stddev": [
                85
            ],
            "stddev_pop": [
                87
            ],
            "stddev_samp": [
                89
            ],
            "sum": [
                93
            ],
            "var_pop": [
                97
            ],
            "var_samp": [
                99
            ],
            "variance": [
                101
            ],
            "__typename": [
                40
            ]
        },
        "burns_arr_rel_insert_input": {
            "data": [
                73
            ],
            "on_conflict": [
                79
            ],
            "__typename": [
                40
            ]
        },
        "burns_avg_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "original_amount": [
                27
            ],
            "regift_percent": [
                27
            ],
            "tokens_burnt": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "burns_avg_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "original_amount": [
                661
            ],
            "regift_percent": [
                661
            ],
            "tokens_burnt": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "burns_bool_exp": {
            "_and": [
                70
            ],
            "_not": [
                70
            ],
            "_or": [
                70
            ],
            "circle": [
                278
            ],
            "circle_id": [
                62
            ],
            "created_at": [
                875
            ],
            "epoch": [
                498
            ],
            "epoch_id": [
                62
            ],
            "id": [
                62
            ],
            "original_amount": [
                32
            ],
            "regift_percent": [
                32
            ],
            "tokens_burnt": [
                32
            ],
            "updated_at": [
                875
            ],
            "user": [
                944
            ],
            "user_id": [
                62
            ],
            "__typename": [
                40
            ]
        },
        "burns_constraint": {},
        "burns_inc_input": {
            "circle_id": [
                61
            ],
            "epoch_id": [
                61
            ],
            "id": [
                61
            ],
            "original_amount": [
                31
            ],
            "regift_percent": [
                31
            ],
            "tokens_burnt": [
                31
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "burns_insert_input": {
            "circle": [
                287
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "epoch": [
                507
            ],
            "epoch_id": [
                61
            ],
            "id": [
                61
            ],
            "original_amount": [
                31
            ],
            "regift_percent": [
                31
            ],
            "tokens_burnt": [
                31
            ],
            "updated_at": [
                874
            ],
            "user": [
                953
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "burns_max_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "epoch_id": [
                61
            ],
            "id": [
                61
            ],
            "original_amount": [
                31
            ],
            "regift_percent": [
                31
            ],
            "tokens_burnt": [
                31
            ],
            "updated_at": [
                874
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "burns_max_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "original_amount": [
                661
            ],
            "regift_percent": [
                661
            ],
            "tokens_burnt": [
                661
            ],
            "updated_at": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "burns_min_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "epoch_id": [
                61
            ],
            "id": [
                61
            ],
            "original_amount": [
                31
            ],
            "regift_percent": [
                31
            ],
            "tokens_burnt": [
                31
            ],
            "updated_at": [
                874
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "burns_min_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "original_amount": [
                661
            ],
            "regift_percent": [
                661
            ],
            "tokens_burnt": [
                661
            ],
            "updated_at": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "burns_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                63
            ],
            "__typename": [
                40
            ]
        },
        "burns_on_conflict": {
            "constraint": [
                71
            ],
            "update_columns": [
                94
            ],
            "where": [
                70
            ],
            "__typename": [
                40
            ]
        },
        "burns_order_by": {
            "circle": [
                289
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "epoch": [
                509
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "original_amount": [
                661
            ],
            "regift_percent": [
                661
            ],
            "tokens_burnt": [
                661
            ],
            "updated_at": [
                661
            ],
            "user": [
                955
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "burns_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "burns_select_column": {},
        "burns_set_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "epoch_id": [
                61
            ],
            "id": [
                61
            ],
            "original_amount": [
                31
            ],
            "regift_percent": [
                31
            ],
            "tokens_burnt": [
                31
            ],
            "updated_at": [
                874
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "burns_stddev_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "original_amount": [
                27
            ],
            "regift_percent": [
                27
            ],
            "tokens_burnt": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "burns_stddev_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "original_amount": [
                661
            ],
            "regift_percent": [
                661
            ],
            "tokens_burnt": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "burns_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "original_amount": [
                27
            ],
            "regift_percent": [
                27
            ],
            "tokens_burnt": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "burns_stddev_pop_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "original_amount": [
                661
            ],
            "regift_percent": [
                661
            ],
            "tokens_burnt": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "burns_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "original_amount": [
                27
            ],
            "regift_percent": [
                27
            ],
            "tokens_burnt": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "burns_stddev_samp_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "original_amount": [
                661
            ],
            "regift_percent": [
                661
            ],
            "tokens_burnt": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "burns_stream_cursor_input": {
            "initial_value": [
                91
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "burns_stream_cursor_value_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "epoch_id": [
                61
            ],
            "id": [
                61
            ],
            "original_amount": [
                31
            ],
            "regift_percent": [
                31
            ],
            "tokens_burnt": [
                31
            ],
            "updated_at": [
                874
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "burns_sum_fields": {
            "circle_id": [
                61
            ],
            "epoch_id": [
                61
            ],
            "id": [
                61
            ],
            "original_amount": [
                31
            ],
            "regift_percent": [
                31
            ],
            "tokens_burnt": [
                31
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "burns_sum_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "original_amount": [
                661
            ],
            "regift_percent": [
                661
            ],
            "tokens_burnt": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "burns_update_column": {},
        "burns_updates": {
            "_inc": [
                72
            ],
            "_set": [
                83
            ],
            "where": [
                70
            ],
            "__typename": [
                40
            ]
        },
        "burns_var_pop_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "original_amount": [
                27
            ],
            "regift_percent": [
                27
            ],
            "tokens_burnt": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "burns_var_pop_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "original_amount": [
                661
            ],
            "regift_percent": [
                661
            ],
            "tokens_burnt": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "burns_var_samp_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "original_amount": [
                27
            ],
            "regift_percent": [
                27
            ],
            "tokens_burnt": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "burns_var_samp_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "original_amount": [
                661
            ],
            "regift_percent": [
                661
            ],
            "tokens_burnt": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "burns_variance_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "original_amount": [
                27
            ],
            "regift_percent": [
                27
            ],
            "tokens_burnt": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "burns_variance_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "original_amount": [
                661
            ],
            "regift_percent": [
                661
            ],
            "tokens_burnt": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys": {
            "circle": [
                271
            ],
            "circle_id": [
                61
            ],
            "create_contributions": [
                6
            ],
            "create_vouches": [
                6
            ],
            "createdByUser": [
                937
            ],
            "created_at": [
                876
            ],
            "created_by": [
                61
            ],
            "hash": [
                40
            ],
            "name": [
                40
            ],
            "read_circle": [
                6
            ],
            "read_contributions": [
                6
            ],
            "read_discord": [
                6
            ],
            "read_epochs": [
                6
            ],
            "read_member_profiles": [
                6
            ],
            "read_nominees": [
                6
            ],
            "read_pending_token_gifts": [
                6
            ],
            "update_circle": [
                6
            ],
            "update_pending_token_gifts": [
                6
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_aggregate": {
            "aggregate": [
                104
            ],
            "nodes": [
                102
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_aggregate_fields": {
            "avg": [
                107
            ],
            "count": [
                31,
                {
                    "columns": [
                        122,
                        "[circle_api_keys_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                113
            ],
            "min": [
                115
            ],
            "stddev": [
                124
            ],
            "stddev_pop": [
                126
            ],
            "stddev_samp": [
                128
            ],
            "sum": [
                132
            ],
            "var_pop": [
                136
            ],
            "var_samp": [
                138
            ],
            "variance": [
                140
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_aggregate_order_by": {
            "avg": [
                108
            ],
            "count": [
                661
            ],
            "max": [
                114
            ],
            "min": [
                116
            ],
            "stddev": [
                125
            ],
            "stddev_pop": [
                127
            ],
            "stddev_samp": [
                129
            ],
            "sum": [
                133
            ],
            "var_pop": [
                137
            ],
            "var_samp": [
                139
            ],
            "variance": [
                141
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_arr_rel_insert_input": {
            "data": [
                112
            ],
            "on_conflict": [
                119
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_avg_fields": {
            "circle_id": [
                27
            ],
            "created_by": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_avg_order_by": {
            "circle_id": [
                661
            ],
            "created_by": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_bool_exp": {
            "_and": [
                109
            ],
            "_not": [
                109
            ],
            "_or": [
                109
            ],
            "circle": [
                278
            ],
            "circle_id": [
                62
            ],
            "create_contributions": [
                7
            ],
            "create_vouches": [
                7
            ],
            "createdByUser": [
                944
            ],
            "created_at": [
                877
            ],
            "created_by": [
                62
            ],
            "hash": [
                41
            ],
            "name": [
                41
            ],
            "read_circle": [
                7
            ],
            "read_contributions": [
                7
            ],
            "read_discord": [
                7
            ],
            "read_epochs": [
                7
            ],
            "read_member_profiles": [
                7
            ],
            "read_nominees": [
                7
            ],
            "read_pending_token_gifts": [
                7
            ],
            "update_circle": [
                7
            ],
            "update_pending_token_gifts": [
                7
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_constraint": {},
        "circle_api_keys_inc_input": {
            "circle_id": [
                61
            ],
            "created_by": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_insert_input": {
            "circle": [
                287
            ],
            "circle_id": [
                61
            ],
            "create_contributions": [
                6
            ],
            "create_vouches": [
                6
            ],
            "createdByUser": [
                953
            ],
            "created_at": [
                876
            ],
            "created_by": [
                61
            ],
            "hash": [
                40
            ],
            "name": [
                40
            ],
            "read_circle": [
                6
            ],
            "read_contributions": [
                6
            ],
            "read_discord": [
                6
            ],
            "read_epochs": [
                6
            ],
            "read_member_profiles": [
                6
            ],
            "read_nominees": [
                6
            ],
            "read_pending_token_gifts": [
                6
            ],
            "update_circle": [
                6
            ],
            "update_pending_token_gifts": [
                6
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_max_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "created_by": [
                61
            ],
            "hash": [
                40
            ],
            "name": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_max_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "created_by": [
                661
            ],
            "hash": [
                661
            ],
            "name": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_min_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "created_by": [
                61
            ],
            "hash": [
                40
            ],
            "name": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_min_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "created_by": [
                661
            ],
            "hash": [
                661
            ],
            "name": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                102
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_obj_rel_insert_input": {
            "data": [
                112
            ],
            "on_conflict": [
                119
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_on_conflict": {
            "constraint": [
                110
            ],
            "update_columns": [
                134
            ],
            "where": [
                109
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_order_by": {
            "circle": [
                289
            ],
            "circle_id": [
                661
            ],
            "create_contributions": [
                661
            ],
            "create_vouches": [
                661
            ],
            "createdByUser": [
                955
            ],
            "created_at": [
                661
            ],
            "created_by": [
                661
            ],
            "hash": [
                661
            ],
            "name": [
                661
            ],
            "read_circle": [
                661
            ],
            "read_contributions": [
                661
            ],
            "read_discord": [
                661
            ],
            "read_epochs": [
                661
            ],
            "read_member_profiles": [
                661
            ],
            "read_nominees": [
                661
            ],
            "read_pending_token_gifts": [
                661
            ],
            "update_circle": [
                661
            ],
            "update_pending_token_gifts": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_pk_columns_input": {
            "hash": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_select_column": {},
        "circle_api_keys_set_input": {
            "circle_id": [
                61
            ],
            "create_contributions": [
                6
            ],
            "create_vouches": [
                6
            ],
            "created_at": [
                876
            ],
            "created_by": [
                61
            ],
            "hash": [
                40
            ],
            "name": [
                40
            ],
            "read_circle": [
                6
            ],
            "read_contributions": [
                6
            ],
            "read_discord": [
                6
            ],
            "read_epochs": [
                6
            ],
            "read_member_profiles": [
                6
            ],
            "read_nominees": [
                6
            ],
            "read_pending_token_gifts": [
                6
            ],
            "update_circle": [
                6
            ],
            "update_pending_token_gifts": [
                6
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_stddev_fields": {
            "circle_id": [
                27
            ],
            "created_by": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_stddev_order_by": {
            "circle_id": [
                661
            ],
            "created_by": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "created_by": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_stddev_pop_order_by": {
            "circle_id": [
                661
            ],
            "created_by": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "created_by": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_stddev_samp_order_by": {
            "circle_id": [
                661
            ],
            "created_by": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_stream_cursor_input": {
            "initial_value": [
                131
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_stream_cursor_value_input": {
            "circle_id": [
                61
            ],
            "create_contributions": [
                6
            ],
            "create_vouches": [
                6
            ],
            "created_at": [
                876
            ],
            "created_by": [
                61
            ],
            "hash": [
                40
            ],
            "name": [
                40
            ],
            "read_circle": [
                6
            ],
            "read_contributions": [
                6
            ],
            "read_discord": [
                6
            ],
            "read_epochs": [
                6
            ],
            "read_member_profiles": [
                6
            ],
            "read_nominees": [
                6
            ],
            "read_pending_token_gifts": [
                6
            ],
            "update_circle": [
                6
            ],
            "update_pending_token_gifts": [
                6
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_sum_fields": {
            "circle_id": [
                61
            ],
            "created_by": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_sum_order_by": {
            "circle_id": [
                661
            ],
            "created_by": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_update_column": {},
        "circle_api_keys_updates": {
            "_inc": [
                111
            ],
            "_set": [
                123
            ],
            "where": [
                109
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_var_pop_fields": {
            "circle_id": [
                27
            ],
            "created_by": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_var_pop_order_by": {
            "circle_id": [
                661
            ],
            "created_by": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_var_samp_fields": {
            "circle_id": [
                27
            ],
            "created_by": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_var_samp_order_by": {
            "circle_id": [
                661
            ],
            "created_by": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_variance_fields": {
            "circle_id": [
                27
            ],
            "created_by": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_api_keys_variance_order_by": {
            "circle_id": [
                661
            ],
            "created_by": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations": {
            "circle": [
                271
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "data": [
                614,
                {
                    "path": [
                        40
                    ]
                }
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "type": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_aggregate": {
            "aggregate": [
                144
            ],
            "nodes": [
                142
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_aggregate_fields": {
            "avg": [
                147
            ],
            "count": [
                31,
                {
                    "columns": [
                        161,
                        "[circle_integrations_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                153
            ],
            "min": [
                155
            ],
            "stddev": [
                163
            ],
            "stddev_pop": [
                165
            ],
            "stddev_samp": [
                167
            ],
            "sum": [
                171
            ],
            "var_pop": [
                175
            ],
            "var_samp": [
                177
            ],
            "variance": [
                179
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_aggregate_order_by": {
            "avg": [
                148
            ],
            "count": [
                661
            ],
            "max": [
                154
            ],
            "min": [
                156
            ],
            "stddev": [
                164
            ],
            "stddev_pop": [
                166
            ],
            "stddev_samp": [
                168
            ],
            "sum": [
                172
            ],
            "var_pop": [
                176
            ],
            "var_samp": [
                178
            ],
            "variance": [
                180
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_arr_rel_insert_input": {
            "data": [
                152
            ],
            "on_conflict": [
                158
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_avg_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_avg_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_bool_exp": {
            "_and": [
                149
            ],
            "_not": [
                149
            ],
            "_or": [
                149
            ],
            "circle": [
                278
            ],
            "circle_id": [
                62
            ],
            "created_at": [
                877
            ],
            "data": [
                615
            ],
            "id": [
                62
            ],
            "name": [
                41
            ],
            "type": [
                41
            ],
            "updated_at": [
                877
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_constraint": {},
        "circle_integrations_inc_input": {
            "circle_id": [
                61
            ],
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_insert_input": {
            "circle": [
                287
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "data": [
                614
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "type": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_max_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "type": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_max_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "id": [
                661
            ],
            "name": [
                661
            ],
            "type": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_min_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "type": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_min_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "id": [
                661
            ],
            "name": [
                661
            ],
            "type": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                142
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_on_conflict": {
            "constraint": [
                150
            ],
            "update_columns": [
                173
            ],
            "where": [
                149
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_order_by": {
            "circle": [
                289
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "data": [
                661
            ],
            "id": [
                661
            ],
            "name": [
                661
            ],
            "type": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_select_column": {},
        "circle_integrations_set_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "data": [
                614
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "type": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_stddev_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_stddev_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_stddev_pop_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_stddev_samp_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_stream_cursor_input": {
            "initial_value": [
                170
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_stream_cursor_value_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "data": [
                614
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "type": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_sum_fields": {
            "circle_id": [
                61
            ],
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_sum_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_update_column": {},
        "circle_integrations_updates": {
            "_inc": [
                151
            ],
            "_set": [
                162
            ],
            "where": [
                149
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_var_pop_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_var_pop_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_var_samp_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_var_samp_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_variance_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_integrations_variance_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata": {
            "circle": [
                271
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "json": [
                614,
                {
                    "path": [
                        40
                    ]
                }
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_aggregate": {
            "aggregate": [
                183
            ],
            "nodes": [
                181
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_aggregate_fields": {
            "avg": [
                186
            ],
            "count": [
                31,
                {
                    "columns": [
                        200,
                        "[circle_metadata_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                192
            ],
            "min": [
                194
            ],
            "stddev": [
                202
            ],
            "stddev_pop": [
                204
            ],
            "stddev_samp": [
                206
            ],
            "sum": [
                210
            ],
            "var_pop": [
                214
            ],
            "var_samp": [
                216
            ],
            "variance": [
                218
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_aggregate_order_by": {
            "avg": [
                187
            ],
            "count": [
                661
            ],
            "max": [
                193
            ],
            "min": [
                195
            ],
            "stddev": [
                203
            ],
            "stddev_pop": [
                205
            ],
            "stddev_samp": [
                207
            ],
            "sum": [
                211
            ],
            "var_pop": [
                215
            ],
            "var_samp": [
                217
            ],
            "variance": [
                219
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_arr_rel_insert_input": {
            "data": [
                191
            ],
            "on_conflict": [
                197
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_avg_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_avg_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_bool_exp": {
            "_and": [
                188
            ],
            "_not": [
                188
            ],
            "_or": [
                188
            ],
            "circle": [
                278
            ],
            "circle_id": [
                62
            ],
            "created_at": [
                875
            ],
            "id": [
                62
            ],
            "json": [
                615
            ],
            "updated_at": [
                875
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_constraint": {},
        "circle_metadata_inc_input": {
            "circle_id": [
                61
            ],
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_insert_input": {
            "circle": [
                287
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "json": [
                614
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_max_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_max_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "id": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_min_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_min_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "id": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                181
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_on_conflict": {
            "constraint": [
                189
            ],
            "update_columns": [
                212
            ],
            "where": [
                188
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_order_by": {
            "circle": [
                289
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "id": [
                661
            ],
            "json": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_select_column": {},
        "circle_metadata_set_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "json": [
                614
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_stddev_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_stddev_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_stddev_pop_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_stddev_samp_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_stream_cursor_input": {
            "initial_value": [
                209
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_stream_cursor_value_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "json": [
                614
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_sum_fields": {
            "circle_id": [
                61
            ],
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_sum_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_update_column": {},
        "circle_metadata_updates": {
            "_inc": [
                190
            ],
            "_set": [
                201
            ],
            "where": [
                188
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_var_pop_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_var_pop_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_var_samp_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_var_samp_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_variance_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_metadata_variance_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_private": {
            "circle": [
                271
            ],
            "circle_id": [
                61
            ],
            "discord_webhook": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_aggregate": {
            "aggregate": [
                222
            ],
            "nodes": [
                220
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_aggregate_fields": {
            "avg": [
                223
            ],
            "count": [
                31,
                {
                    "columns": [
                        232,
                        "[circle_private_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                227
            ],
            "min": [
                228
            ],
            "stddev": [
                234
            ],
            "stddev_pop": [
                235
            ],
            "stddev_samp": [
                236
            ],
            "sum": [
                239
            ],
            "var_pop": [
                241
            ],
            "var_samp": [
                242
            ],
            "variance": [
                243
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_avg_fields": {
            "circle_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_bool_exp": {
            "_and": [
                224
            ],
            "_not": [
                224
            ],
            "_or": [
                224
            ],
            "circle": [
                278
            ],
            "circle_id": [
                62
            ],
            "discord_webhook": [
                41
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_inc_input": {
            "circle_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_insert_input": {
            "circle": [
                287
            ],
            "circle_id": [
                61
            ],
            "discord_webhook": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_max_fields": {
            "circle_id": [
                61
            ],
            "discord_webhook": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_min_fields": {
            "circle_id": [
                61
            ],
            "discord_webhook": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                220
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_obj_rel_insert_input": {
            "data": [
                226
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_order_by": {
            "circle": [
                289
            ],
            "circle_id": [
                661
            ],
            "discord_webhook": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_select_column": {},
        "circle_private_set_input": {
            "circle_id": [
                61
            ],
            "discord_webhook": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_stddev_fields": {
            "circle_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_stream_cursor_input": {
            "initial_value": [
                238
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_stream_cursor_value_input": {
            "circle_id": [
                61
            ],
            "discord_webhook": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_sum_fields": {
            "circle_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_updates": {
            "_inc": [
                225
            ],
            "_set": [
                233
            ],
            "where": [
                224
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_var_pop_fields": {
            "circle_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_var_samp_fields": {
            "circle_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_private_variance_fields": {
            "circle_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens": {
            "circle": [
                271
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "type": [
                31
            ],
            "updated_at": [
                876
            ],
            "uuid": [
                977
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_aggregate": {
            "aggregate": [
                246
            ],
            "nodes": [
                244
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_aggregate_fields": {
            "avg": [
                247
            ],
            "count": [
                31,
                {
                    "columns": [
                        258,
                        "[circle_share_tokens_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                252
            ],
            "min": [
                253
            ],
            "stddev": [
                260
            ],
            "stddev_pop": [
                261
            ],
            "stddev_samp": [
                262
            ],
            "sum": [
                265
            ],
            "var_pop": [
                268
            ],
            "var_samp": [
                269
            ],
            "variance": [
                270
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_avg_fields": {
            "circle_id": [
                27
            ],
            "type": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_bool_exp": {
            "_and": [
                248
            ],
            "_not": [
                248
            ],
            "_or": [
                248
            ],
            "circle": [
                278
            ],
            "circle_id": [
                62
            ],
            "created_at": [
                877
            ],
            "type": [
                32
            ],
            "updated_at": [
                877
            ],
            "uuid": [
                978
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_constraint": {},
        "circle_share_tokens_inc_input": {
            "circle_id": [
                61
            ],
            "type": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_insert_input": {
            "circle": [
                287
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "type": [
                31
            ],
            "updated_at": [
                876
            ],
            "uuid": [
                977
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_max_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "type": [
                31
            ],
            "updated_at": [
                876
            ],
            "uuid": [
                977
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_min_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "type": [
                31
            ],
            "updated_at": [
                876
            ],
            "uuid": [
                977
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                244
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_on_conflict": {
            "constraint": [
                249
            ],
            "update_columns": [
                266
            ],
            "where": [
                248
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_order_by": {
            "circle": [
                289
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "type": [
                661
            ],
            "updated_at": [
                661
            ],
            "uuid": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_pk_columns_input": {
            "circle_id": [
                61
            ],
            "type": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_select_column": {},
        "circle_share_tokens_set_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "type": [
                31
            ],
            "updated_at": [
                876
            ],
            "uuid": [
                977
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_stddev_fields": {
            "circle_id": [
                27
            ],
            "type": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "type": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "type": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_stream_cursor_input": {
            "initial_value": [
                264
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_stream_cursor_value_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "type": [
                31
            ],
            "updated_at": [
                876
            ],
            "uuid": [
                977
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_sum_fields": {
            "circle_id": [
                61
            ],
            "type": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_update_column": {},
        "circle_share_tokens_updates": {
            "_inc": [
                250
            ],
            "_set": [
                259
            ],
            "where": [
                248
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_var_pop_fields": {
            "circle_id": [
                27
            ],
            "type": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_var_samp_fields": {
            "circle_id": [
                27
            ],
            "type": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circle_share_tokens_variance_fields": {
            "circle_id": [
                27
            ],
            "type": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circles": {
            "alloc_text": [
                40
            ],
            "api_keys": [
                102,
                {
                    "distinct_on": [
                        122,
                        "[circle_api_keys_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        120,
                        "[circle_api_keys_order_by!]"
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "api_keys_aggregate": [
                103,
                {
                    "distinct_on": [
                        122,
                        "[circle_api_keys_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        120,
                        "[circle_api_keys_order_by!]"
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "auto_opt_out": [
                6
            ],
            "burns": [
                63,
                {
                    "distinct_on": [
                        82,
                        "[burns_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        80,
                        "[burns_order_by!]"
                    ],
                    "where": [
                        70
                    ]
                }
            ],
            "burns_aggregate": [
                64,
                {
                    "distinct_on": [
                        82,
                        "[burns_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        80,
                        "[burns_order_by!]"
                    ],
                    "where": [
                        70
                    ]
                }
            ],
            "circle_metadata": [
                181,
                {
                    "distinct_on": [
                        200,
                        "[circle_metadata_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        198,
                        "[circle_metadata_order_by!]"
                    ],
                    "where": [
                        188
                    ]
                }
            ],
            "circle_metadata_aggregate": [
                182,
                {
                    "distinct_on": [
                        200,
                        "[circle_metadata_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        198,
                        "[circle_metadata_order_by!]"
                    ],
                    "where": [
                        188
                    ]
                }
            ],
            "circle_private": [
                220
            ],
            "contact": [
                40
            ],
            "contributions": [
                350,
                {
                    "distinct_on": [
                        369,
                        "[contributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        367,
                        "[contributions_order_by!]"
                    ],
                    "where": [
                        357
                    ]
                }
            ],
            "contributions_aggregate": [
                351,
                {
                    "distinct_on": [
                        369,
                        "[contributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        367,
                        "[contributions_order_by!]"
                    ],
                    "where": [
                        357
                    ]
                }
            ],
            "created_at": [
                874
            ],
            "default_opt_in": [
                6
            ],
            "deleted_at": [
                874
            ],
            "discord_webhook": [
                40
            ],
            "epochs": [
                491,
                {
                    "distinct_on": [
                        511,
                        "[epochs_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        509,
                        "[epochs_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "epochs_aggregate": [
                492,
                {
                    "distinct_on": [
                        511,
                        "[epochs_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        509,
                        "[epochs_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "fixed_payment_token_type": [
                40
            ],
            "fixed_payment_vault_id": [
                31
            ],
            "id": [
                61
            ],
            "integrations": [
                142,
                {
                    "distinct_on": [
                        161,
                        "[circle_integrations_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        159,
                        "[circle_integrations_order_by!]"
                    ],
                    "where": [
                        149
                    ]
                }
            ],
            "integrations_aggregate": [
                143,
                {
                    "distinct_on": [
                        161,
                        "[circle_integrations_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        159,
                        "[circle_integrations_order_by!]"
                    ],
                    "where": [
                        149
                    ]
                }
            ],
            "is_verified": [
                6
            ],
            "logo": [
                40
            ],
            "min_vouches": [
                31
            ],
            "name": [
                40
            ],
            "nomination_days_limit": [
                31
            ],
            "nominees": [
                619,
                {
                    "distinct_on": [
                        639,
                        "[nominees_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        637,
                        "[nominees_order_by!]"
                    ],
                    "where": [
                        626
                    ]
                }
            ],
            "nominees_aggregate": [
                620,
                {
                    "distinct_on": [
                        639,
                        "[nominees_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        637,
                        "[nominees_order_by!]"
                    ],
                    "where": [
                        626
                    ]
                }
            ],
            "only_giver_vouch": [
                6
            ],
            "organization": [
                662
            ],
            "organization_id": [
                31
            ],
            "pending_token_gifts": [
                714,
                {
                    "distinct_on": [
                        733,
                        "[pending_token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        731,
                        "[pending_token_gifts_order_by!]"
                    ],
                    "where": [
                        721
                    ]
                }
            ],
            "pending_token_gifts_aggregate": [
                715,
                {
                    "distinct_on": [
                        733,
                        "[pending_token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        731,
                        "[pending_token_gifts_order_by!]"
                    ],
                    "where": [
                        721
                    ]
                }
            ],
            "show_pending_gives": [
                6
            ],
            "team_sel_text": [
                40
            ],
            "team_selection": [
                6
            ],
            "telegram_id": [
                40
            ],
            "token_gifts": [
                878,
                {
                    "distinct_on": [
                        897,
                        "[token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        895,
                        "[token_gifts_order_by!]"
                    ],
                    "where": [
                        885
                    ]
                }
            ],
            "token_gifts_aggregate": [
                879,
                {
                    "distinct_on": [
                        897,
                        "[token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        895,
                        "[token_gifts_order_by!]"
                    ],
                    "where": [
                        885
                    ]
                }
            ],
            "token_name": [
                40
            ],
            "updated_at": [
                874
            ],
            "users": [
                937,
                {
                    "distinct_on": [
                        957,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        955,
                        "[users_order_by!]"
                    ],
                    "where": [
                        944
                    ]
                }
            ],
            "users_aggregate": [
                938,
                {
                    "distinct_on": [
                        957,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        955,
                        "[users_order_by!]"
                    ],
                    "where": [
                        944
                    ]
                }
            ],
            "vault_transactions": [
                979,
                {
                    "distinct_on": [
                        998,
                        "[vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        996,
                        "[vault_transactions_order_by!]"
                    ],
                    "where": [
                        986
                    ]
                }
            ],
            "vault_transactions_aggregate": [
                980,
                {
                    "distinct_on": [
                        998,
                        "[vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        996,
                        "[vault_transactions_order_by!]"
                    ],
                    "where": [
                        986
                    ]
                }
            ],
            "vouching": [
                6
            ],
            "vouching_text": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "circles_aggregate": {
            "aggregate": [
                273
            ],
            "nodes": [
                271
            ],
            "__typename": [
                40
            ]
        },
        "circles_aggregate_fields": {
            "avg": [
                276
            ],
            "count": [
                31,
                {
                    "columns": [
                        291,
                        "[circles_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                282
            ],
            "min": [
                284
            ],
            "stddev": [
                293
            ],
            "stddev_pop": [
                295
            ],
            "stddev_samp": [
                297
            ],
            "sum": [
                301
            ],
            "var_pop": [
                305
            ],
            "var_samp": [
                307
            ],
            "variance": [
                309
            ],
            "__typename": [
                40
            ]
        },
        "circles_aggregate_order_by": {
            "avg": [
                277
            ],
            "count": [
                661
            ],
            "max": [
                283
            ],
            "min": [
                285
            ],
            "stddev": [
                294
            ],
            "stddev_pop": [
                296
            ],
            "stddev_samp": [
                298
            ],
            "sum": [
                302
            ],
            "var_pop": [
                306
            ],
            "var_samp": [
                308
            ],
            "variance": [
                310
            ],
            "__typename": [
                40
            ]
        },
        "circles_arr_rel_insert_input": {
            "data": [
                281
            ],
            "on_conflict": [
                288
            ],
            "__typename": [
                40
            ]
        },
        "circles_avg_fields": {
            "fixed_payment_vault_id": [
                27
            ],
            "id": [
                27
            ],
            "min_vouches": [
                27
            ],
            "nomination_days_limit": [
                27
            ],
            "organization_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circles_avg_order_by": {
            "fixed_payment_vault_id": [
                661
            ],
            "id": [
                661
            ],
            "min_vouches": [
                661
            ],
            "nomination_days_limit": [
                661
            ],
            "organization_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circles_bool_exp": {
            "_and": [
                278
            ],
            "_not": [
                278
            ],
            "_or": [
                278
            ],
            "alloc_text": [
                41
            ],
            "api_keys": [
                109
            ],
            "auto_opt_out": [
                7
            ],
            "burns": [
                70
            ],
            "circle_metadata": [
                188
            ],
            "circle_private": [
                224
            ],
            "contact": [
                41
            ],
            "contributions": [
                357
            ],
            "created_at": [
                875
            ],
            "default_opt_in": [
                7
            ],
            "deleted_at": [
                875
            ],
            "discord_webhook": [
                41
            ],
            "epochs": [
                498
            ],
            "fixed_payment_token_type": [
                41
            ],
            "fixed_payment_vault_id": [
                32
            ],
            "id": [
                62
            ],
            "integrations": [
                149
            ],
            "is_verified": [
                7
            ],
            "logo": [
                41
            ],
            "min_vouches": [
                32
            ],
            "name": [
                41
            ],
            "nomination_days_limit": [
                32
            ],
            "nominees": [
                626
            ],
            "only_giver_vouch": [
                7
            ],
            "organization": [
                666
            ],
            "organization_id": [
                32
            ],
            "pending_token_gifts": [
                721
            ],
            "show_pending_gives": [
                7
            ],
            "team_sel_text": [
                41
            ],
            "team_selection": [
                7
            ],
            "telegram_id": [
                41
            ],
            "token_gifts": [
                885
            ],
            "token_name": [
                41
            ],
            "updated_at": [
                875
            ],
            "users": [
                944
            ],
            "vault_transactions": [
                986
            ],
            "vouching": [
                7
            ],
            "vouching_text": [
                41
            ],
            "__typename": [
                40
            ]
        },
        "circles_constraint": {},
        "circles_inc_input": {
            "fixed_payment_vault_id": [
                31
            ],
            "id": [
                61
            ],
            "min_vouches": [
                31
            ],
            "nomination_days_limit": [
                31
            ],
            "organization_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "circles_insert_input": {
            "alloc_text": [
                40
            ],
            "api_keys": [
                106
            ],
            "auto_opt_out": [
                6
            ],
            "burns": [
                67
            ],
            "circle_metadata": [
                185
            ],
            "circle_private": [
                230
            ],
            "contact": [
                40
            ],
            "contributions": [
                354
            ],
            "created_at": [
                874
            ],
            "default_opt_in": [
                6
            ],
            "deleted_at": [
                874
            ],
            "discord_webhook": [
                40
            ],
            "epochs": [
                495
            ],
            "fixed_payment_token_type": [
                40
            ],
            "fixed_payment_vault_id": [
                31
            ],
            "id": [
                61
            ],
            "integrations": [
                146
            ],
            "is_verified": [
                6
            ],
            "logo": [
                40
            ],
            "min_vouches": [
                31
            ],
            "name": [
                40
            ],
            "nomination_days_limit": [
                31
            ],
            "nominees": [
                623
            ],
            "only_giver_vouch": [
                6
            ],
            "organization": [
                673
            ],
            "organization_id": [
                31
            ],
            "pending_token_gifts": [
                718
            ],
            "show_pending_gives": [
                6
            ],
            "team_sel_text": [
                40
            ],
            "team_selection": [
                6
            ],
            "telegram_id": [
                40
            ],
            "token_gifts": [
                882
            ],
            "token_name": [
                40
            ],
            "updated_at": [
                874
            ],
            "users": [
                941
            ],
            "vault_transactions": [
                983
            ],
            "vouching": [
                6
            ],
            "vouching_text": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "circles_max_fields": {
            "alloc_text": [
                40
            ],
            "contact": [
                40
            ],
            "created_at": [
                874
            ],
            "deleted_at": [
                874
            ],
            "discord_webhook": [
                40
            ],
            "fixed_payment_token_type": [
                40
            ],
            "fixed_payment_vault_id": [
                31
            ],
            "id": [
                61
            ],
            "logo": [
                40
            ],
            "min_vouches": [
                31
            ],
            "name": [
                40
            ],
            "nomination_days_limit": [
                31
            ],
            "organization_id": [
                31
            ],
            "team_sel_text": [
                40
            ],
            "telegram_id": [
                40
            ],
            "token_name": [
                40
            ],
            "updated_at": [
                874
            ],
            "vouching_text": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "circles_max_order_by": {
            "alloc_text": [
                661
            ],
            "contact": [
                661
            ],
            "created_at": [
                661
            ],
            "deleted_at": [
                661
            ],
            "discord_webhook": [
                661
            ],
            "fixed_payment_token_type": [
                661
            ],
            "fixed_payment_vault_id": [
                661
            ],
            "id": [
                661
            ],
            "logo": [
                661
            ],
            "min_vouches": [
                661
            ],
            "name": [
                661
            ],
            "nomination_days_limit": [
                661
            ],
            "organization_id": [
                661
            ],
            "team_sel_text": [
                661
            ],
            "telegram_id": [
                661
            ],
            "token_name": [
                661
            ],
            "updated_at": [
                661
            ],
            "vouching_text": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circles_min_fields": {
            "alloc_text": [
                40
            ],
            "contact": [
                40
            ],
            "created_at": [
                874
            ],
            "deleted_at": [
                874
            ],
            "discord_webhook": [
                40
            ],
            "fixed_payment_token_type": [
                40
            ],
            "fixed_payment_vault_id": [
                31
            ],
            "id": [
                61
            ],
            "logo": [
                40
            ],
            "min_vouches": [
                31
            ],
            "name": [
                40
            ],
            "nomination_days_limit": [
                31
            ],
            "organization_id": [
                31
            ],
            "team_sel_text": [
                40
            ],
            "telegram_id": [
                40
            ],
            "token_name": [
                40
            ],
            "updated_at": [
                874
            ],
            "vouching_text": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "circles_min_order_by": {
            "alloc_text": [
                661
            ],
            "contact": [
                661
            ],
            "created_at": [
                661
            ],
            "deleted_at": [
                661
            ],
            "discord_webhook": [
                661
            ],
            "fixed_payment_token_type": [
                661
            ],
            "fixed_payment_vault_id": [
                661
            ],
            "id": [
                661
            ],
            "logo": [
                661
            ],
            "min_vouches": [
                661
            ],
            "name": [
                661
            ],
            "nomination_days_limit": [
                661
            ],
            "organization_id": [
                661
            ],
            "team_sel_text": [
                661
            ],
            "telegram_id": [
                661
            ],
            "token_name": [
                661
            ],
            "updated_at": [
                661
            ],
            "vouching_text": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circles_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                271
            ],
            "__typename": [
                40
            ]
        },
        "circles_obj_rel_insert_input": {
            "data": [
                281
            ],
            "on_conflict": [
                288
            ],
            "__typename": [
                40
            ]
        },
        "circles_on_conflict": {
            "constraint": [
                279
            ],
            "update_columns": [
                303
            ],
            "where": [
                278
            ],
            "__typename": [
                40
            ]
        },
        "circles_order_by": {
            "alloc_text": [
                661
            ],
            "api_keys_aggregate": [
                105
            ],
            "auto_opt_out": [
                661
            ],
            "burns_aggregate": [
                66
            ],
            "circle_metadata_aggregate": [
                184
            ],
            "circle_private": [
                231
            ],
            "contact": [
                661
            ],
            "contributions_aggregate": [
                353
            ],
            "created_at": [
                661
            ],
            "default_opt_in": [
                661
            ],
            "deleted_at": [
                661
            ],
            "discord_webhook": [
                661
            ],
            "epochs_aggregate": [
                494
            ],
            "fixed_payment_token_type": [
                661
            ],
            "fixed_payment_vault_id": [
                661
            ],
            "id": [
                661
            ],
            "integrations_aggregate": [
                145
            ],
            "is_verified": [
                661
            ],
            "logo": [
                661
            ],
            "min_vouches": [
                661
            ],
            "name": [
                661
            ],
            "nomination_days_limit": [
                661
            ],
            "nominees_aggregate": [
                622
            ],
            "only_giver_vouch": [
                661
            ],
            "organization": [
                675
            ],
            "organization_id": [
                661
            ],
            "pending_token_gifts_aggregate": [
                717
            ],
            "show_pending_gives": [
                661
            ],
            "team_sel_text": [
                661
            ],
            "team_selection": [
                661
            ],
            "telegram_id": [
                661
            ],
            "token_gifts_aggregate": [
                881
            ],
            "token_name": [
                661
            ],
            "updated_at": [
                661
            ],
            "users_aggregate": [
                940
            ],
            "vault_transactions_aggregate": [
                982
            ],
            "vouching": [
                661
            ],
            "vouching_text": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circles_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "circles_select_column": {},
        "circles_set_input": {
            "alloc_text": [
                40
            ],
            "auto_opt_out": [
                6
            ],
            "contact": [
                40
            ],
            "created_at": [
                874
            ],
            "default_opt_in": [
                6
            ],
            "deleted_at": [
                874
            ],
            "discord_webhook": [
                40
            ],
            "fixed_payment_token_type": [
                40
            ],
            "fixed_payment_vault_id": [
                31
            ],
            "id": [
                61
            ],
            "is_verified": [
                6
            ],
            "logo": [
                40
            ],
            "min_vouches": [
                31
            ],
            "name": [
                40
            ],
            "nomination_days_limit": [
                31
            ],
            "only_giver_vouch": [
                6
            ],
            "organization_id": [
                31
            ],
            "show_pending_gives": [
                6
            ],
            "team_sel_text": [
                40
            ],
            "team_selection": [
                6
            ],
            "telegram_id": [
                40
            ],
            "token_name": [
                40
            ],
            "updated_at": [
                874
            ],
            "vouching": [
                6
            ],
            "vouching_text": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "circles_stddev_fields": {
            "fixed_payment_vault_id": [
                27
            ],
            "id": [
                27
            ],
            "min_vouches": [
                27
            ],
            "nomination_days_limit": [
                27
            ],
            "organization_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circles_stddev_order_by": {
            "fixed_payment_vault_id": [
                661
            ],
            "id": [
                661
            ],
            "min_vouches": [
                661
            ],
            "nomination_days_limit": [
                661
            ],
            "organization_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circles_stddev_pop_fields": {
            "fixed_payment_vault_id": [
                27
            ],
            "id": [
                27
            ],
            "min_vouches": [
                27
            ],
            "nomination_days_limit": [
                27
            ],
            "organization_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circles_stddev_pop_order_by": {
            "fixed_payment_vault_id": [
                661
            ],
            "id": [
                661
            ],
            "min_vouches": [
                661
            ],
            "nomination_days_limit": [
                661
            ],
            "organization_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circles_stddev_samp_fields": {
            "fixed_payment_vault_id": [
                27
            ],
            "id": [
                27
            ],
            "min_vouches": [
                27
            ],
            "nomination_days_limit": [
                27
            ],
            "organization_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circles_stddev_samp_order_by": {
            "fixed_payment_vault_id": [
                661
            ],
            "id": [
                661
            ],
            "min_vouches": [
                661
            ],
            "nomination_days_limit": [
                661
            ],
            "organization_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circles_stream_cursor_input": {
            "initial_value": [
                300
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "circles_stream_cursor_value_input": {
            "alloc_text": [
                40
            ],
            "auto_opt_out": [
                6
            ],
            "contact": [
                40
            ],
            "created_at": [
                874
            ],
            "default_opt_in": [
                6
            ],
            "deleted_at": [
                874
            ],
            "discord_webhook": [
                40
            ],
            "fixed_payment_token_type": [
                40
            ],
            "fixed_payment_vault_id": [
                31
            ],
            "id": [
                61
            ],
            "is_verified": [
                6
            ],
            "logo": [
                40
            ],
            "min_vouches": [
                31
            ],
            "name": [
                40
            ],
            "nomination_days_limit": [
                31
            ],
            "only_giver_vouch": [
                6
            ],
            "organization_id": [
                31
            ],
            "show_pending_gives": [
                6
            ],
            "team_sel_text": [
                40
            ],
            "team_selection": [
                6
            ],
            "telegram_id": [
                40
            ],
            "token_name": [
                40
            ],
            "updated_at": [
                874
            ],
            "vouching": [
                6
            ],
            "vouching_text": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "circles_sum_fields": {
            "fixed_payment_vault_id": [
                31
            ],
            "id": [
                61
            ],
            "min_vouches": [
                31
            ],
            "nomination_days_limit": [
                31
            ],
            "organization_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "circles_sum_order_by": {
            "fixed_payment_vault_id": [
                661
            ],
            "id": [
                661
            ],
            "min_vouches": [
                661
            ],
            "nomination_days_limit": [
                661
            ],
            "organization_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circles_update_column": {},
        "circles_updates": {
            "_inc": [
                280
            ],
            "_set": [
                292
            ],
            "where": [
                278
            ],
            "__typename": [
                40
            ]
        },
        "circles_var_pop_fields": {
            "fixed_payment_vault_id": [
                27
            ],
            "id": [
                27
            ],
            "min_vouches": [
                27
            ],
            "nomination_days_limit": [
                27
            ],
            "organization_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circles_var_pop_order_by": {
            "fixed_payment_vault_id": [
                661
            ],
            "id": [
                661
            ],
            "min_vouches": [
                661
            ],
            "nomination_days_limit": [
                661
            ],
            "organization_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circles_var_samp_fields": {
            "fixed_payment_vault_id": [
                27
            ],
            "id": [
                27
            ],
            "min_vouches": [
                27
            ],
            "nomination_days_limit": [
                27
            ],
            "organization_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circles_var_samp_order_by": {
            "fixed_payment_vault_id": [
                661
            ],
            "id": [
                661
            ],
            "min_vouches": [
                661
            ],
            "nomination_days_limit": [
                661
            ],
            "organization_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "circles_variance_fields": {
            "fixed_payment_vault_id": [
                27
            ],
            "id": [
                27
            ],
            "min_vouches": [
                27
            ],
            "nomination_days_limit": [
                27
            ],
            "organization_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "circles_variance_order_by": {
            "fixed_payment_vault_id": [
                661
            ],
            "id": [
                661
            ],
            "min_vouches": [
                661
            ],
            "nomination_days_limit": [
                661
            ],
            "organization_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "claims": {
            "address": [
                40
            ],
            "amount": [
                659
            ],
            "created_at": [
                876
            ],
            "distribution": [
                446
            ],
            "distribution_id": [
                61
            ],
            "id": [
                61
            ],
            "index": [
                61
            ],
            "new_amount": [
                659
            ],
            "profile": [
                807
            ],
            "profile_id": [
                61
            ],
            "proof": [
                40
            ],
            "txHash": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "claims_aggregate": {
            "aggregate": [
                313
            ],
            "nodes": [
                311
            ],
            "__typename": [
                40
            ]
        },
        "claims_aggregate_fields": {
            "avg": [
                316
            ],
            "count": [
                31,
                {
                    "columns": [
                        330,
                        "[claims_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                322
            ],
            "min": [
                324
            ],
            "stddev": [
                332
            ],
            "stddev_pop": [
                334
            ],
            "stddev_samp": [
                336
            ],
            "sum": [
                340
            ],
            "var_pop": [
                344
            ],
            "var_samp": [
                346
            ],
            "variance": [
                348
            ],
            "__typename": [
                40
            ]
        },
        "claims_aggregate_order_by": {
            "avg": [
                317
            ],
            "count": [
                661
            ],
            "max": [
                323
            ],
            "min": [
                325
            ],
            "stddev": [
                333
            ],
            "stddev_pop": [
                335
            ],
            "stddev_samp": [
                337
            ],
            "sum": [
                341
            ],
            "var_pop": [
                345
            ],
            "var_samp": [
                347
            ],
            "variance": [
                349
            ],
            "__typename": [
                40
            ]
        },
        "claims_arr_rel_insert_input": {
            "data": [
                321
            ],
            "on_conflict": [
                327
            ],
            "__typename": [
                40
            ]
        },
        "claims_avg_fields": {
            "amount": [
                27
            ],
            "distribution_id": [
                27
            ],
            "id": [
                27
            ],
            "index": [
                27
            ],
            "new_amount": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "claims_avg_order_by": {
            "amount": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "index": [
                661
            ],
            "new_amount": [
                661
            ],
            "profile_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "claims_bool_exp": {
            "_and": [
                318
            ],
            "_not": [
                318
            ],
            "_or": [
                318
            ],
            "address": [
                41
            ],
            "amount": [
                660
            ],
            "created_at": [
                877
            ],
            "distribution": [
                454
            ],
            "distribution_id": [
                62
            ],
            "id": [
                62
            ],
            "index": [
                62
            ],
            "new_amount": [
                660
            ],
            "profile": [
                811
            ],
            "profile_id": [
                62
            ],
            "proof": [
                41
            ],
            "txHash": [
                41
            ],
            "updated_at": [
                877
            ],
            "__typename": [
                40
            ]
        },
        "claims_constraint": {},
        "claims_inc_input": {
            "amount": [
                659
            ],
            "distribution_id": [
                61
            ],
            "id": [
                61
            ],
            "index": [
                61
            ],
            "new_amount": [
                659
            ],
            "profile_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "claims_insert_input": {
            "address": [
                40
            ],
            "amount": [
                659
            ],
            "created_at": [
                876
            ],
            "distribution": [
                466
            ],
            "distribution_id": [
                61
            ],
            "id": [
                61
            ],
            "index": [
                61
            ],
            "new_amount": [
                659
            ],
            "profile": [
                818
            ],
            "profile_id": [
                61
            ],
            "proof": [
                40
            ],
            "txHash": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "claims_max_fields": {
            "address": [
                40
            ],
            "amount": [
                659
            ],
            "created_at": [
                876
            ],
            "distribution_id": [
                61
            ],
            "id": [
                61
            ],
            "index": [
                61
            ],
            "new_amount": [
                659
            ],
            "profile_id": [
                61
            ],
            "proof": [
                40
            ],
            "txHash": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "claims_max_order_by": {
            "address": [
                661
            ],
            "amount": [
                661
            ],
            "created_at": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "index": [
                661
            ],
            "new_amount": [
                661
            ],
            "profile_id": [
                661
            ],
            "proof": [
                661
            ],
            "txHash": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "claims_min_fields": {
            "address": [
                40
            ],
            "amount": [
                659
            ],
            "created_at": [
                876
            ],
            "distribution_id": [
                61
            ],
            "id": [
                61
            ],
            "index": [
                61
            ],
            "new_amount": [
                659
            ],
            "profile_id": [
                61
            ],
            "proof": [
                40
            ],
            "txHash": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "claims_min_order_by": {
            "address": [
                661
            ],
            "amount": [
                661
            ],
            "created_at": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "index": [
                661
            ],
            "new_amount": [
                661
            ],
            "profile_id": [
                661
            ],
            "proof": [
                661
            ],
            "txHash": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "claims_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                311
            ],
            "__typename": [
                40
            ]
        },
        "claims_on_conflict": {
            "constraint": [
                319
            ],
            "update_columns": [
                342
            ],
            "where": [
                318
            ],
            "__typename": [
                40
            ]
        },
        "claims_order_by": {
            "address": [
                661
            ],
            "amount": [
                661
            ],
            "created_at": [
                661
            ],
            "distribution": [
                468
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "index": [
                661
            ],
            "new_amount": [
                661
            ],
            "profile": [
                820
            ],
            "profile_id": [
                661
            ],
            "proof": [
                661
            ],
            "txHash": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "claims_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "claims_select_column": {},
        "claims_set_input": {
            "address": [
                40
            ],
            "amount": [
                659
            ],
            "created_at": [
                876
            ],
            "distribution_id": [
                61
            ],
            "id": [
                61
            ],
            "index": [
                61
            ],
            "new_amount": [
                659
            ],
            "profile_id": [
                61
            ],
            "proof": [
                40
            ],
            "txHash": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "claims_stddev_fields": {
            "amount": [
                27
            ],
            "distribution_id": [
                27
            ],
            "id": [
                27
            ],
            "index": [
                27
            ],
            "new_amount": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "claims_stddev_order_by": {
            "amount": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "index": [
                661
            ],
            "new_amount": [
                661
            ],
            "profile_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "claims_stddev_pop_fields": {
            "amount": [
                27
            ],
            "distribution_id": [
                27
            ],
            "id": [
                27
            ],
            "index": [
                27
            ],
            "new_amount": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "claims_stddev_pop_order_by": {
            "amount": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "index": [
                661
            ],
            "new_amount": [
                661
            ],
            "profile_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "claims_stddev_samp_fields": {
            "amount": [
                27
            ],
            "distribution_id": [
                27
            ],
            "id": [
                27
            ],
            "index": [
                27
            ],
            "new_amount": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "claims_stddev_samp_order_by": {
            "amount": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "index": [
                661
            ],
            "new_amount": [
                661
            ],
            "profile_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "claims_stream_cursor_input": {
            "initial_value": [
                339
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "claims_stream_cursor_value_input": {
            "address": [
                40
            ],
            "amount": [
                659
            ],
            "created_at": [
                876
            ],
            "distribution_id": [
                61
            ],
            "id": [
                61
            ],
            "index": [
                61
            ],
            "new_amount": [
                659
            ],
            "profile_id": [
                61
            ],
            "proof": [
                40
            ],
            "txHash": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "claims_sum_fields": {
            "amount": [
                659
            ],
            "distribution_id": [
                61
            ],
            "id": [
                61
            ],
            "index": [
                61
            ],
            "new_amount": [
                659
            ],
            "profile_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "claims_sum_order_by": {
            "amount": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "index": [
                661
            ],
            "new_amount": [
                661
            ],
            "profile_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "claims_update_column": {},
        "claims_updates": {
            "_inc": [
                320
            ],
            "_set": [
                331
            ],
            "where": [
                318
            ],
            "__typename": [
                40
            ]
        },
        "claims_var_pop_fields": {
            "amount": [
                27
            ],
            "distribution_id": [
                27
            ],
            "id": [
                27
            ],
            "index": [
                27
            ],
            "new_amount": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "claims_var_pop_order_by": {
            "amount": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "index": [
                661
            ],
            "new_amount": [
                661
            ],
            "profile_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "claims_var_samp_fields": {
            "amount": [
                27
            ],
            "distribution_id": [
                27
            ],
            "id": [
                27
            ],
            "index": [
                27
            ],
            "new_amount": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "claims_var_samp_order_by": {
            "amount": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "index": [
                661
            ],
            "new_amount": [
                661
            ],
            "profile_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "claims_variance_fields": {
            "amount": [
                27
            ],
            "distribution_id": [
                27
            ],
            "id": [
                27
            ],
            "index": [
                27
            ],
            "new_amount": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "claims_variance_order_by": {
            "amount": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "index": [
                661
            ],
            "new_amount": [
                661
            ],
            "profile_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "contributions": {
            "circle": [
                271
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "created_with_api_key": [
                102
            ],
            "created_with_api_key_hash": [
                40
            ],
            "datetime_created": [
                876
            ],
            "deleted_at": [
                876
            ],
            "description": [
                40
            ],
            "id": [
                61
            ],
            "updated_at": [
                876
            ],
            "user": [
                937
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "contributions_aggregate": {
            "aggregate": [
                352
            ],
            "nodes": [
                350
            ],
            "__typename": [
                40
            ]
        },
        "contributions_aggregate_fields": {
            "avg": [
                355
            ],
            "count": [
                31,
                {
                    "columns": [
                        369,
                        "[contributions_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                361
            ],
            "min": [
                363
            ],
            "stddev": [
                371
            ],
            "stddev_pop": [
                373
            ],
            "stddev_samp": [
                375
            ],
            "sum": [
                379
            ],
            "var_pop": [
                383
            ],
            "var_samp": [
                385
            ],
            "variance": [
                387
            ],
            "__typename": [
                40
            ]
        },
        "contributions_aggregate_order_by": {
            "avg": [
                356
            ],
            "count": [
                661
            ],
            "max": [
                362
            ],
            "min": [
                364
            ],
            "stddev": [
                372
            ],
            "stddev_pop": [
                374
            ],
            "stddev_samp": [
                376
            ],
            "sum": [
                380
            ],
            "var_pop": [
                384
            ],
            "var_samp": [
                386
            ],
            "variance": [
                388
            ],
            "__typename": [
                40
            ]
        },
        "contributions_arr_rel_insert_input": {
            "data": [
                360
            ],
            "on_conflict": [
                366
            ],
            "__typename": [
                40
            ]
        },
        "contributions_avg_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "contributions_avg_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "contributions_bool_exp": {
            "_and": [
                357
            ],
            "_not": [
                357
            ],
            "_or": [
                357
            ],
            "circle": [
                278
            ],
            "circle_id": [
                62
            ],
            "created_at": [
                877
            ],
            "created_with_api_key": [
                109
            ],
            "created_with_api_key_hash": [
                41
            ],
            "datetime_created": [
                877
            ],
            "deleted_at": [
                877
            ],
            "description": [
                41
            ],
            "id": [
                62
            ],
            "updated_at": [
                877
            ],
            "user": [
                944
            ],
            "user_id": [
                62
            ],
            "__typename": [
                40
            ]
        },
        "contributions_constraint": {},
        "contributions_inc_input": {
            "circle_id": [
                61
            ],
            "id": [
                61
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "contributions_insert_input": {
            "circle": [
                287
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "created_with_api_key": [
                118
            ],
            "created_with_api_key_hash": [
                40
            ],
            "datetime_created": [
                876
            ],
            "deleted_at": [
                876
            ],
            "description": [
                40
            ],
            "id": [
                61
            ],
            "updated_at": [
                876
            ],
            "user": [
                953
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "contributions_max_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "created_with_api_key_hash": [
                40
            ],
            "datetime_created": [
                876
            ],
            "deleted_at": [
                876
            ],
            "description": [
                40
            ],
            "id": [
                61
            ],
            "updated_at": [
                876
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "contributions_max_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "created_with_api_key_hash": [
                661
            ],
            "datetime_created": [
                661
            ],
            "deleted_at": [
                661
            ],
            "description": [
                661
            ],
            "id": [
                661
            ],
            "updated_at": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "contributions_min_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "created_with_api_key_hash": [
                40
            ],
            "datetime_created": [
                876
            ],
            "deleted_at": [
                876
            ],
            "description": [
                40
            ],
            "id": [
                61
            ],
            "updated_at": [
                876
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "contributions_min_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "created_with_api_key_hash": [
                661
            ],
            "datetime_created": [
                661
            ],
            "deleted_at": [
                661
            ],
            "description": [
                661
            ],
            "id": [
                661
            ],
            "updated_at": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "contributions_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                350
            ],
            "__typename": [
                40
            ]
        },
        "contributions_on_conflict": {
            "constraint": [
                358
            ],
            "update_columns": [
                381
            ],
            "where": [
                357
            ],
            "__typename": [
                40
            ]
        },
        "contributions_order_by": {
            "circle": [
                289
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "created_with_api_key": [
                120
            ],
            "created_with_api_key_hash": [
                661
            ],
            "datetime_created": [
                661
            ],
            "deleted_at": [
                661
            ],
            "description": [
                661
            ],
            "id": [
                661
            ],
            "updated_at": [
                661
            ],
            "user": [
                955
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "contributions_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "contributions_select_column": {},
        "contributions_set_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "created_with_api_key_hash": [
                40
            ],
            "datetime_created": [
                876
            ],
            "deleted_at": [
                876
            ],
            "description": [
                40
            ],
            "id": [
                61
            ],
            "updated_at": [
                876
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "contributions_stddev_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "contributions_stddev_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "contributions_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "contributions_stddev_pop_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "contributions_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "contributions_stddev_samp_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "contributions_stream_cursor_input": {
            "initial_value": [
                378
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "contributions_stream_cursor_value_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "created_with_api_key_hash": [
                40
            ],
            "datetime_created": [
                876
            ],
            "deleted_at": [
                876
            ],
            "description": [
                40
            ],
            "id": [
                61
            ],
            "updated_at": [
                876
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "contributions_sum_fields": {
            "circle_id": [
                61
            ],
            "id": [
                61
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "contributions_sum_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "contributions_update_column": {},
        "contributions_updates": {
            "_inc": [
                359
            ],
            "_set": [
                370
            ],
            "where": [
                357
            ],
            "__typename": [
                40
            ]
        },
        "contributions_var_pop_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "contributions_var_pop_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "contributions_var_samp_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "contributions_var_samp_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "contributions_variance_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "contributions_variance_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "cursor_ordering": {},
        "date": {},
        "date_comparison_exp": {
            "_eq": [
                390
            ],
            "_gt": [
                390
            ],
            "_gte": [
                390
            ],
            "_in": [
                390
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                390
            ],
            "_lte": [
                390
            ],
            "_neq": [
                390
            ],
            "_nin": [
                390
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles": {
            "circle": [
                271
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "id": [
                61
            ],
            "role": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_aggregate": {
            "aggregate": [
                394
            ],
            "nodes": [
                392
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_aggregate_fields": {
            "avg": [
                395
            ],
            "count": [
                31,
                {
                    "columns": [
                        406,
                        "[discord_roles_circles_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                400
            ],
            "min": [
                401
            ],
            "stddev": [
                408
            ],
            "stddev_pop": [
                409
            ],
            "stddev_samp": [
                410
            ],
            "sum": [
                413
            ],
            "var_pop": [
                416
            ],
            "var_samp": [
                417
            ],
            "variance": [
                418
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_avg_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_bool_exp": {
            "_and": [
                396
            ],
            "_not": [
                396
            ],
            "_or": [
                396
            ],
            "circle": [
                278
            ],
            "circle_id": [
                62
            ],
            "created_at": [
                877
            ],
            "id": [
                62
            ],
            "role": [
                41
            ],
            "updated_at": [
                877
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_constraint": {},
        "discord_roles_circles_inc_input": {
            "circle_id": [
                61
            ],
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_insert_input": {
            "circle": [
                287
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "id": [
                61
            ],
            "role": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_max_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "id": [
                61
            ],
            "role": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_min_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "id": [
                61
            ],
            "role": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                392
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_on_conflict": {
            "constraint": [
                397
            ],
            "update_columns": [
                414
            ],
            "where": [
                396
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_order_by": {
            "circle": [
                289
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "id": [
                661
            ],
            "role": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_select_column": {},
        "discord_roles_circles_set_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "id": [
                61
            ],
            "role": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_stddev_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_stream_cursor_input": {
            "initial_value": [
                412
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_stream_cursor_value_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                876
            ],
            "id": [
                61
            ],
            "role": [
                40
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_sum_fields": {
            "circle_id": [
                61
            ],
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_update_column": {},
        "discord_roles_circles_updates": {
            "_inc": [
                398
            ],
            "_set": [
                407
            ],
            "where": [
                396
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_var_pop_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_var_samp_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "discord_roles_circles_variance_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "discord_users": {
            "created_at": [
                876
            ],
            "id": [
                61
            ],
            "profile": [
                807
            ],
            "profile_id": [
                61
            ],
            "updated_at": [
                876
            ],
            "user_snowflake": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_aggregate": {
            "aggregate": [
                421
            ],
            "nodes": [
                419
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_aggregate_fields": {
            "avg": [
                422
            ],
            "count": [
                31,
                {
                    "columns": [
                        433,
                        "[discord_users_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                427
            ],
            "min": [
                428
            ],
            "stddev": [
                435
            ],
            "stddev_pop": [
                436
            ],
            "stddev_samp": [
                437
            ],
            "sum": [
                440
            ],
            "var_pop": [
                443
            ],
            "var_samp": [
                444
            ],
            "variance": [
                445
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_avg_fields": {
            "id": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_bool_exp": {
            "_and": [
                423
            ],
            "_not": [
                423
            ],
            "_or": [
                423
            ],
            "created_at": [
                877
            ],
            "id": [
                62
            ],
            "profile": [
                811
            ],
            "profile_id": [
                62
            ],
            "updated_at": [
                877
            ],
            "user_snowflake": [
                41
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_constraint": {},
        "discord_users_inc_input": {
            "id": [
                61
            ],
            "profile_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_insert_input": {
            "created_at": [
                876
            ],
            "id": [
                61
            ],
            "profile": [
                818
            ],
            "profile_id": [
                61
            ],
            "updated_at": [
                876
            ],
            "user_snowflake": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_max_fields": {
            "created_at": [
                876
            ],
            "id": [
                61
            ],
            "profile_id": [
                61
            ],
            "updated_at": [
                876
            ],
            "user_snowflake": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_min_fields": {
            "created_at": [
                876
            ],
            "id": [
                61
            ],
            "profile_id": [
                61
            ],
            "updated_at": [
                876
            ],
            "user_snowflake": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                419
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_on_conflict": {
            "constraint": [
                424
            ],
            "update_columns": [
                441
            ],
            "where": [
                423
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_order_by": {
            "created_at": [
                661
            ],
            "id": [
                661
            ],
            "profile": [
                820
            ],
            "profile_id": [
                661
            ],
            "updated_at": [
                661
            ],
            "user_snowflake": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_select_column": {},
        "discord_users_set_input": {
            "created_at": [
                876
            ],
            "id": [
                61
            ],
            "profile_id": [
                61
            ],
            "updated_at": [
                876
            ],
            "user_snowflake": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_stddev_fields": {
            "id": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_stddev_pop_fields": {
            "id": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_stddev_samp_fields": {
            "id": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_stream_cursor_input": {
            "initial_value": [
                439
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_stream_cursor_value_input": {
            "created_at": [
                876
            ],
            "id": [
                61
            ],
            "profile_id": [
                61
            ],
            "updated_at": [
                876
            ],
            "user_snowflake": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_sum_fields": {
            "id": [
                61
            ],
            "profile_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_update_column": {},
        "discord_users_updates": {
            "_inc": [
                425
            ],
            "_set": [
                434
            ],
            "where": [
                423
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_var_pop_fields": {
            "id": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_var_samp_fields": {
            "id": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "discord_users_variance_fields": {
            "id": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "distributions": {
            "claims": [
                311,
                {
                    "distinct_on": [
                        330,
                        "[claims_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        328,
                        "[claims_order_by!]"
                    ],
                    "where": [
                        318
                    ]
                }
            ],
            "claims_aggregate": [
                312,
                {
                    "distinct_on": [
                        330,
                        "[claims_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        328,
                        "[claims_order_by!]"
                    ],
                    "where": [
                        318
                    ]
                }
            ],
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution_epoch_id": [
                61
            ],
            "distribution_json": [
                616,
                {
                    "path": [
                        40
                    ]
                }
            ],
            "distribution_type": [
                31
            ],
            "epoch": [
                491
            ],
            "epoch_id": [
                61
            ],
            "fixed_amount": [
                659
            ],
            "gift_amount": [
                659
            ],
            "id": [
                61
            ],
            "merkle_root": [
                40
            ],
            "profile": [
                807
            ],
            "total_amount": [
                40
            ],
            "tx_hash": [
                40
            ],
            "updated_at": [
                874
            ],
            "vault": [
                1039
            ],
            "vault_id": [
                61
            ],
            "vault_transactions": [
                979,
                {
                    "distinct_on": [
                        998,
                        "[vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        996,
                        "[vault_transactions_order_by!]"
                    ],
                    "where": [
                        986
                    ]
                }
            ],
            "vault_transactions_aggregate": [
                980,
                {
                    "distinct_on": [
                        998,
                        "[vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        996,
                        "[vault_transactions_order_by!]"
                    ],
                    "where": [
                        986
                    ]
                }
            ],
            "__typename": [
                40
            ]
        },
        "distributions_aggregate": {
            "aggregate": [
                448
            ],
            "nodes": [
                446
            ],
            "__typename": [
                40
            ]
        },
        "distributions_aggregate_fields": {
            "avg": [
                452
            ],
            "count": [
                31,
                {
                    "columns": [
                        471,
                        "[distributions_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                461
            ],
            "min": [
                463
            ],
            "stddev": [
                473
            ],
            "stddev_pop": [
                475
            ],
            "stddev_samp": [
                477
            ],
            "sum": [
                481
            ],
            "var_pop": [
                485
            ],
            "var_samp": [
                487
            ],
            "variance": [
                489
            ],
            "__typename": [
                40
            ]
        },
        "distributions_aggregate_order_by": {
            "avg": [
                453
            ],
            "count": [
                661
            ],
            "max": [
                462
            ],
            "min": [
                464
            ],
            "stddev": [
                474
            ],
            "stddev_pop": [
                476
            ],
            "stddev_samp": [
                478
            ],
            "sum": [
                482
            ],
            "var_pop": [
                486
            ],
            "var_samp": [
                488
            ],
            "variance": [
                490
            ],
            "__typename": [
                40
            ]
        },
        "distributions_append_input": {
            "distribution_json": [
                616
            ],
            "__typename": [
                40
            ]
        },
        "distributions_arr_rel_insert_input": {
            "data": [
                460
            ],
            "on_conflict": [
                467
            ],
            "__typename": [
                40
            ]
        },
        "distributions_avg_fields": {
            "created_by": [
                27
            ],
            "distribution_epoch_id": [
                27
            ],
            "distribution_type": [
                27
            ],
            "epoch_id": [
                27
            ],
            "fixed_amount": [
                27
            ],
            "gift_amount": [
                27
            ],
            "id": [
                27
            ],
            "vault_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "distributions_avg_order_by": {
            "created_by": [
                661
            ],
            "distribution_epoch_id": [
                661
            ],
            "distribution_type": [
                661
            ],
            "epoch_id": [
                661
            ],
            "fixed_amount": [
                661
            ],
            "gift_amount": [
                661
            ],
            "id": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "distributions_bool_exp": {
            "_and": [
                454
            ],
            "_not": [
                454
            ],
            "_or": [
                454
            ],
            "claims": [
                318
            ],
            "created_at": [
                875
            ],
            "created_by": [
                62
            ],
            "distribution_epoch_id": [
                62
            ],
            "distribution_json": [
                618
            ],
            "distribution_type": [
                32
            ],
            "epoch": [
                498
            ],
            "epoch_id": [
                62
            ],
            "fixed_amount": [
                660
            ],
            "gift_amount": [
                660
            ],
            "id": [
                62
            ],
            "merkle_root": [
                41
            ],
            "profile": [
                811
            ],
            "total_amount": [
                41
            ],
            "tx_hash": [
                41
            ],
            "updated_at": [
                875
            ],
            "vault": [
                1046
            ],
            "vault_id": [
                62
            ],
            "vault_transactions": [
                986
            ],
            "__typename": [
                40
            ]
        },
        "distributions_constraint": {},
        "distributions_delete_at_path_input": {
            "distribution_json": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "distributions_delete_elem_input": {
            "distribution_json": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "distributions_delete_key_input": {
            "distribution_json": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "distributions_inc_input": {
            "created_by": [
                61
            ],
            "distribution_epoch_id": [
                61
            ],
            "distribution_type": [
                31
            ],
            "epoch_id": [
                61
            ],
            "fixed_amount": [
                659
            ],
            "gift_amount": [
                659
            ],
            "id": [
                61
            ],
            "vault_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "distributions_insert_input": {
            "claims": [
                315
            ],
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution_epoch_id": [
                61
            ],
            "distribution_json": [
                616
            ],
            "distribution_type": [
                31
            ],
            "epoch": [
                507
            ],
            "epoch_id": [
                61
            ],
            "fixed_amount": [
                659
            ],
            "gift_amount": [
                659
            ],
            "id": [
                61
            ],
            "merkle_root": [
                40
            ],
            "profile": [
                818
            ],
            "total_amount": [
                40
            ],
            "tx_hash": [
                40
            ],
            "updated_at": [
                874
            ],
            "vault": [
                1055
            ],
            "vault_id": [
                61
            ],
            "vault_transactions": [
                983
            ],
            "__typename": [
                40
            ]
        },
        "distributions_max_fields": {
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution_epoch_id": [
                61
            ],
            "distribution_type": [
                31
            ],
            "epoch_id": [
                61
            ],
            "fixed_amount": [
                659
            ],
            "gift_amount": [
                659
            ],
            "id": [
                61
            ],
            "merkle_root": [
                40
            ],
            "total_amount": [
                40
            ],
            "tx_hash": [
                40
            ],
            "updated_at": [
                874
            ],
            "vault_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "distributions_max_order_by": {
            "created_at": [
                661
            ],
            "created_by": [
                661
            ],
            "distribution_epoch_id": [
                661
            ],
            "distribution_type": [
                661
            ],
            "epoch_id": [
                661
            ],
            "fixed_amount": [
                661
            ],
            "gift_amount": [
                661
            ],
            "id": [
                661
            ],
            "merkle_root": [
                661
            ],
            "total_amount": [
                661
            ],
            "tx_hash": [
                661
            ],
            "updated_at": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "distributions_min_fields": {
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution_epoch_id": [
                61
            ],
            "distribution_type": [
                31
            ],
            "epoch_id": [
                61
            ],
            "fixed_amount": [
                659
            ],
            "gift_amount": [
                659
            ],
            "id": [
                61
            ],
            "merkle_root": [
                40
            ],
            "total_amount": [
                40
            ],
            "tx_hash": [
                40
            ],
            "updated_at": [
                874
            ],
            "vault_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "distributions_min_order_by": {
            "created_at": [
                661
            ],
            "created_by": [
                661
            ],
            "distribution_epoch_id": [
                661
            ],
            "distribution_type": [
                661
            ],
            "epoch_id": [
                661
            ],
            "fixed_amount": [
                661
            ],
            "gift_amount": [
                661
            ],
            "id": [
                661
            ],
            "merkle_root": [
                661
            ],
            "total_amount": [
                661
            ],
            "tx_hash": [
                661
            ],
            "updated_at": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "distributions_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                446
            ],
            "__typename": [
                40
            ]
        },
        "distributions_obj_rel_insert_input": {
            "data": [
                460
            ],
            "on_conflict": [
                467
            ],
            "__typename": [
                40
            ]
        },
        "distributions_on_conflict": {
            "constraint": [
                455
            ],
            "update_columns": [
                483
            ],
            "where": [
                454
            ],
            "__typename": [
                40
            ]
        },
        "distributions_order_by": {
            "claims_aggregate": [
                314
            ],
            "created_at": [
                661
            ],
            "created_by": [
                661
            ],
            "distribution_epoch_id": [
                661
            ],
            "distribution_json": [
                661
            ],
            "distribution_type": [
                661
            ],
            "epoch": [
                509
            ],
            "epoch_id": [
                661
            ],
            "fixed_amount": [
                661
            ],
            "gift_amount": [
                661
            ],
            "id": [
                661
            ],
            "merkle_root": [
                661
            ],
            "profile": [
                820
            ],
            "total_amount": [
                661
            ],
            "tx_hash": [
                661
            ],
            "updated_at": [
                661
            ],
            "vault": [
                1057
            ],
            "vault_id": [
                661
            ],
            "vault_transactions_aggregate": [
                982
            ],
            "__typename": [
                40
            ]
        },
        "distributions_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "distributions_prepend_input": {
            "distribution_json": [
                616
            ],
            "__typename": [
                40
            ]
        },
        "distributions_select_column": {},
        "distributions_set_input": {
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution_epoch_id": [
                61
            ],
            "distribution_json": [
                616
            ],
            "distribution_type": [
                31
            ],
            "epoch_id": [
                61
            ],
            "fixed_amount": [
                659
            ],
            "gift_amount": [
                659
            ],
            "id": [
                61
            ],
            "merkle_root": [
                40
            ],
            "total_amount": [
                40
            ],
            "tx_hash": [
                40
            ],
            "updated_at": [
                874
            ],
            "vault_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "distributions_stddev_fields": {
            "created_by": [
                27
            ],
            "distribution_epoch_id": [
                27
            ],
            "distribution_type": [
                27
            ],
            "epoch_id": [
                27
            ],
            "fixed_amount": [
                27
            ],
            "gift_amount": [
                27
            ],
            "id": [
                27
            ],
            "vault_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "distributions_stddev_order_by": {
            "created_by": [
                661
            ],
            "distribution_epoch_id": [
                661
            ],
            "distribution_type": [
                661
            ],
            "epoch_id": [
                661
            ],
            "fixed_amount": [
                661
            ],
            "gift_amount": [
                661
            ],
            "id": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "distributions_stddev_pop_fields": {
            "created_by": [
                27
            ],
            "distribution_epoch_id": [
                27
            ],
            "distribution_type": [
                27
            ],
            "epoch_id": [
                27
            ],
            "fixed_amount": [
                27
            ],
            "gift_amount": [
                27
            ],
            "id": [
                27
            ],
            "vault_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "distributions_stddev_pop_order_by": {
            "created_by": [
                661
            ],
            "distribution_epoch_id": [
                661
            ],
            "distribution_type": [
                661
            ],
            "epoch_id": [
                661
            ],
            "fixed_amount": [
                661
            ],
            "gift_amount": [
                661
            ],
            "id": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "distributions_stddev_samp_fields": {
            "created_by": [
                27
            ],
            "distribution_epoch_id": [
                27
            ],
            "distribution_type": [
                27
            ],
            "epoch_id": [
                27
            ],
            "fixed_amount": [
                27
            ],
            "gift_amount": [
                27
            ],
            "id": [
                27
            ],
            "vault_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "distributions_stddev_samp_order_by": {
            "created_by": [
                661
            ],
            "distribution_epoch_id": [
                661
            ],
            "distribution_type": [
                661
            ],
            "epoch_id": [
                661
            ],
            "fixed_amount": [
                661
            ],
            "gift_amount": [
                661
            ],
            "id": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "distributions_stream_cursor_input": {
            "initial_value": [
                480
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "distributions_stream_cursor_value_input": {
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution_epoch_id": [
                61
            ],
            "distribution_json": [
                616
            ],
            "distribution_type": [
                31
            ],
            "epoch_id": [
                61
            ],
            "fixed_amount": [
                659
            ],
            "gift_amount": [
                659
            ],
            "id": [
                61
            ],
            "merkle_root": [
                40
            ],
            "total_amount": [
                40
            ],
            "tx_hash": [
                40
            ],
            "updated_at": [
                874
            ],
            "vault_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "distributions_sum_fields": {
            "created_by": [
                61
            ],
            "distribution_epoch_id": [
                61
            ],
            "distribution_type": [
                31
            ],
            "epoch_id": [
                61
            ],
            "fixed_amount": [
                659
            ],
            "gift_amount": [
                659
            ],
            "id": [
                61
            ],
            "vault_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "distributions_sum_order_by": {
            "created_by": [
                661
            ],
            "distribution_epoch_id": [
                661
            ],
            "distribution_type": [
                661
            ],
            "epoch_id": [
                661
            ],
            "fixed_amount": [
                661
            ],
            "gift_amount": [
                661
            ],
            "id": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "distributions_update_column": {},
        "distributions_updates": {
            "_append": [
                450
            ],
            "_delete_at_path": [
                456
            ],
            "_delete_elem": [
                457
            ],
            "_delete_key": [
                458
            ],
            "_inc": [
                459
            ],
            "_prepend": [
                470
            ],
            "_set": [
                472
            ],
            "where": [
                454
            ],
            "__typename": [
                40
            ]
        },
        "distributions_var_pop_fields": {
            "created_by": [
                27
            ],
            "distribution_epoch_id": [
                27
            ],
            "distribution_type": [
                27
            ],
            "epoch_id": [
                27
            ],
            "fixed_amount": [
                27
            ],
            "gift_amount": [
                27
            ],
            "id": [
                27
            ],
            "vault_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "distributions_var_pop_order_by": {
            "created_by": [
                661
            ],
            "distribution_epoch_id": [
                661
            ],
            "distribution_type": [
                661
            ],
            "epoch_id": [
                661
            ],
            "fixed_amount": [
                661
            ],
            "gift_amount": [
                661
            ],
            "id": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "distributions_var_samp_fields": {
            "created_by": [
                27
            ],
            "distribution_epoch_id": [
                27
            ],
            "distribution_type": [
                27
            ],
            "epoch_id": [
                27
            ],
            "fixed_amount": [
                27
            ],
            "gift_amount": [
                27
            ],
            "id": [
                27
            ],
            "vault_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "distributions_var_samp_order_by": {
            "created_by": [
                661
            ],
            "distribution_epoch_id": [
                661
            ],
            "distribution_type": [
                661
            ],
            "epoch_id": [
                661
            ],
            "fixed_amount": [
                661
            ],
            "gift_amount": [
                661
            ],
            "id": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "distributions_variance_fields": {
            "created_by": [
                27
            ],
            "distribution_epoch_id": [
                27
            ],
            "distribution_type": [
                27
            ],
            "epoch_id": [
                27
            ],
            "fixed_amount": [
                27
            ],
            "gift_amount": [
                27
            ],
            "id": [
                27
            ],
            "vault_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "distributions_variance_order_by": {
            "created_by": [
                661
            ],
            "distribution_epoch_id": [
                661
            ],
            "distribution_type": [
                661
            ],
            "epoch_id": [
                661
            ],
            "fixed_amount": [
                661
            ],
            "gift_amount": [
                661
            ],
            "id": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "epochs": {
            "burns": [
                63,
                {
                    "distinct_on": [
                        82,
                        "[burns_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        80,
                        "[burns_order_by!]"
                    ],
                    "where": [
                        70
                    ]
                }
            ],
            "burns_aggregate": [
                64,
                {
                    "distinct_on": [
                        82,
                        "[burns_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        80,
                        "[burns_order_by!]"
                    ],
                    "where": [
                        70
                    ]
                }
            ],
            "circle": [
                271
            ],
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "days": [
                31
            ],
            "description": [
                40
            ],
            "distributions": [
                446,
                {
                    "distinct_on": [
                        471,
                        "[distributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        468,
                        "[distributions_order_by!]"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "distributions_aggregate": [
                447,
                {
                    "distinct_on": [
                        471,
                        "[distributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        468,
                        "[distributions_order_by!]"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "end_date": [
                876
            ],
            "ended": [
                6
            ],
            "epoch_pending_token_gifts": [
                714,
                {
                    "distinct_on": [
                        733,
                        "[pending_token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        731,
                        "[pending_token_gifts_order_by!]"
                    ],
                    "where": [
                        721
                    ]
                }
            ],
            "epoch_pending_token_gifts_aggregate": [
                715,
                {
                    "distinct_on": [
                        733,
                        "[pending_token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        731,
                        "[pending_token_gifts_order_by!]"
                    ],
                    "where": [
                        721
                    ]
                }
            ],
            "grant": [
                659
            ],
            "id": [
                61
            ],
            "notified_before_end": [
                874
            ],
            "notified_end": [
                874
            ],
            "notified_start": [
                874
            ],
            "number": [
                31
            ],
            "regift_days": [
                31
            ],
            "repeat": [
                31
            ],
            "repeat_day_of_month": [
                31
            ],
            "start_date": [
                876
            ],
            "token_gifts": [
                878,
                {
                    "distinct_on": [
                        897,
                        "[token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        895,
                        "[token_gifts_order_by!]"
                    ],
                    "where": [
                        885
                    ]
                }
            ],
            "token_gifts_aggregate": [
                879,
                {
                    "distinct_on": [
                        897,
                        "[token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        895,
                        "[token_gifts_order_by!]"
                    ],
                    "where": [
                        885
                    ]
                }
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "epochs_aggregate": {
            "aggregate": [
                493
            ],
            "nodes": [
                491
            ],
            "__typename": [
                40
            ]
        },
        "epochs_aggregate_fields": {
            "avg": [
                496
            ],
            "count": [
                31,
                {
                    "columns": [
                        511,
                        "[epochs_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                502
            ],
            "min": [
                504
            ],
            "stddev": [
                513
            ],
            "stddev_pop": [
                515
            ],
            "stddev_samp": [
                517
            ],
            "sum": [
                521
            ],
            "var_pop": [
                525
            ],
            "var_samp": [
                527
            ],
            "variance": [
                529
            ],
            "__typename": [
                40
            ]
        },
        "epochs_aggregate_order_by": {
            "avg": [
                497
            ],
            "count": [
                661
            ],
            "max": [
                503
            ],
            "min": [
                505
            ],
            "stddev": [
                514
            ],
            "stddev_pop": [
                516
            ],
            "stddev_samp": [
                518
            ],
            "sum": [
                522
            ],
            "var_pop": [
                526
            ],
            "var_samp": [
                528
            ],
            "variance": [
                530
            ],
            "__typename": [
                40
            ]
        },
        "epochs_arr_rel_insert_input": {
            "data": [
                501
            ],
            "on_conflict": [
                508
            ],
            "__typename": [
                40
            ]
        },
        "epochs_avg_fields": {
            "circle_id": [
                27
            ],
            "days": [
                27
            ],
            "grant": [
                27
            ],
            "id": [
                27
            ],
            "number": [
                27
            ],
            "regift_days": [
                27
            ],
            "repeat": [
                27
            ],
            "repeat_day_of_month": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "epochs_avg_order_by": {
            "circle_id": [
                661
            ],
            "days": [
                661
            ],
            "grant": [
                661
            ],
            "id": [
                661
            ],
            "number": [
                661
            ],
            "regift_days": [
                661
            ],
            "repeat": [
                661
            ],
            "repeat_day_of_month": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "epochs_bool_exp": {
            "_and": [
                498
            ],
            "_not": [
                498
            ],
            "_or": [
                498
            ],
            "burns": [
                70
            ],
            "circle": [
                278
            ],
            "circle_id": [
                32
            ],
            "created_at": [
                875
            ],
            "days": [
                32
            ],
            "description": [
                41
            ],
            "distributions": [
                454
            ],
            "end_date": [
                877
            ],
            "ended": [
                7
            ],
            "epoch_pending_token_gifts": [
                721
            ],
            "grant": [
                660
            ],
            "id": [
                62
            ],
            "notified_before_end": [
                875
            ],
            "notified_end": [
                875
            ],
            "notified_start": [
                875
            ],
            "number": [
                32
            ],
            "regift_days": [
                32
            ],
            "repeat": [
                32
            ],
            "repeat_day_of_month": [
                32
            ],
            "start_date": [
                877
            ],
            "token_gifts": [
                885
            ],
            "updated_at": [
                875
            ],
            "__typename": [
                40
            ]
        },
        "epochs_constraint": {},
        "epochs_inc_input": {
            "circle_id": [
                31
            ],
            "days": [
                31
            ],
            "grant": [
                659
            ],
            "id": [
                61
            ],
            "number": [
                31
            ],
            "regift_days": [
                31
            ],
            "repeat": [
                31
            ],
            "repeat_day_of_month": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "epochs_insert_input": {
            "burns": [
                67
            ],
            "circle": [
                287
            ],
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "days": [
                31
            ],
            "description": [
                40
            ],
            "distributions": [
                451
            ],
            "end_date": [
                876
            ],
            "ended": [
                6
            ],
            "epoch_pending_token_gifts": [
                718
            ],
            "grant": [
                659
            ],
            "id": [
                61
            ],
            "notified_before_end": [
                874
            ],
            "notified_end": [
                874
            ],
            "notified_start": [
                874
            ],
            "number": [
                31
            ],
            "regift_days": [
                31
            ],
            "repeat": [
                31
            ],
            "repeat_day_of_month": [
                31
            ],
            "start_date": [
                876
            ],
            "token_gifts": [
                882
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "epochs_max_fields": {
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "days": [
                31
            ],
            "description": [
                40
            ],
            "end_date": [
                876
            ],
            "grant": [
                659
            ],
            "id": [
                61
            ],
            "notified_before_end": [
                874
            ],
            "notified_end": [
                874
            ],
            "notified_start": [
                874
            ],
            "number": [
                31
            ],
            "regift_days": [
                31
            ],
            "repeat": [
                31
            ],
            "repeat_day_of_month": [
                31
            ],
            "start_date": [
                876
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "epochs_max_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "days": [
                661
            ],
            "description": [
                661
            ],
            "end_date": [
                661
            ],
            "grant": [
                661
            ],
            "id": [
                661
            ],
            "notified_before_end": [
                661
            ],
            "notified_end": [
                661
            ],
            "notified_start": [
                661
            ],
            "number": [
                661
            ],
            "regift_days": [
                661
            ],
            "repeat": [
                661
            ],
            "repeat_day_of_month": [
                661
            ],
            "start_date": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "epochs_min_fields": {
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "days": [
                31
            ],
            "description": [
                40
            ],
            "end_date": [
                876
            ],
            "grant": [
                659
            ],
            "id": [
                61
            ],
            "notified_before_end": [
                874
            ],
            "notified_end": [
                874
            ],
            "notified_start": [
                874
            ],
            "number": [
                31
            ],
            "regift_days": [
                31
            ],
            "repeat": [
                31
            ],
            "repeat_day_of_month": [
                31
            ],
            "start_date": [
                876
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "epochs_min_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "days": [
                661
            ],
            "description": [
                661
            ],
            "end_date": [
                661
            ],
            "grant": [
                661
            ],
            "id": [
                661
            ],
            "notified_before_end": [
                661
            ],
            "notified_end": [
                661
            ],
            "notified_start": [
                661
            ],
            "number": [
                661
            ],
            "regift_days": [
                661
            ],
            "repeat": [
                661
            ],
            "repeat_day_of_month": [
                661
            ],
            "start_date": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "epochs_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                491
            ],
            "__typename": [
                40
            ]
        },
        "epochs_obj_rel_insert_input": {
            "data": [
                501
            ],
            "on_conflict": [
                508
            ],
            "__typename": [
                40
            ]
        },
        "epochs_on_conflict": {
            "constraint": [
                499
            ],
            "update_columns": [
                523
            ],
            "where": [
                498
            ],
            "__typename": [
                40
            ]
        },
        "epochs_order_by": {
            "burns_aggregate": [
                66
            ],
            "circle": [
                289
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "days": [
                661
            ],
            "description": [
                661
            ],
            "distributions_aggregate": [
                449
            ],
            "end_date": [
                661
            ],
            "ended": [
                661
            ],
            "epoch_pending_token_gifts_aggregate": [
                717
            ],
            "grant": [
                661
            ],
            "id": [
                661
            ],
            "notified_before_end": [
                661
            ],
            "notified_end": [
                661
            ],
            "notified_start": [
                661
            ],
            "number": [
                661
            ],
            "regift_days": [
                661
            ],
            "repeat": [
                661
            ],
            "repeat_day_of_month": [
                661
            ],
            "start_date": [
                661
            ],
            "token_gifts_aggregate": [
                881
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "epochs_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "epochs_select_column": {},
        "epochs_set_input": {
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "days": [
                31
            ],
            "description": [
                40
            ],
            "end_date": [
                876
            ],
            "ended": [
                6
            ],
            "grant": [
                659
            ],
            "id": [
                61
            ],
            "notified_before_end": [
                874
            ],
            "notified_end": [
                874
            ],
            "notified_start": [
                874
            ],
            "number": [
                31
            ],
            "regift_days": [
                31
            ],
            "repeat": [
                31
            ],
            "repeat_day_of_month": [
                31
            ],
            "start_date": [
                876
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "epochs_stddev_fields": {
            "circle_id": [
                27
            ],
            "days": [
                27
            ],
            "grant": [
                27
            ],
            "id": [
                27
            ],
            "number": [
                27
            ],
            "regift_days": [
                27
            ],
            "repeat": [
                27
            ],
            "repeat_day_of_month": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "epochs_stddev_order_by": {
            "circle_id": [
                661
            ],
            "days": [
                661
            ],
            "grant": [
                661
            ],
            "id": [
                661
            ],
            "number": [
                661
            ],
            "regift_days": [
                661
            ],
            "repeat": [
                661
            ],
            "repeat_day_of_month": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "epochs_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "days": [
                27
            ],
            "grant": [
                27
            ],
            "id": [
                27
            ],
            "number": [
                27
            ],
            "regift_days": [
                27
            ],
            "repeat": [
                27
            ],
            "repeat_day_of_month": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "epochs_stddev_pop_order_by": {
            "circle_id": [
                661
            ],
            "days": [
                661
            ],
            "grant": [
                661
            ],
            "id": [
                661
            ],
            "number": [
                661
            ],
            "regift_days": [
                661
            ],
            "repeat": [
                661
            ],
            "repeat_day_of_month": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "epochs_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "days": [
                27
            ],
            "grant": [
                27
            ],
            "id": [
                27
            ],
            "number": [
                27
            ],
            "regift_days": [
                27
            ],
            "repeat": [
                27
            ],
            "repeat_day_of_month": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "epochs_stddev_samp_order_by": {
            "circle_id": [
                661
            ],
            "days": [
                661
            ],
            "grant": [
                661
            ],
            "id": [
                661
            ],
            "number": [
                661
            ],
            "regift_days": [
                661
            ],
            "repeat": [
                661
            ],
            "repeat_day_of_month": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "epochs_stream_cursor_input": {
            "initial_value": [
                520
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "epochs_stream_cursor_value_input": {
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "days": [
                31
            ],
            "description": [
                40
            ],
            "end_date": [
                876
            ],
            "ended": [
                6
            ],
            "grant": [
                659
            ],
            "id": [
                61
            ],
            "notified_before_end": [
                874
            ],
            "notified_end": [
                874
            ],
            "notified_start": [
                874
            ],
            "number": [
                31
            ],
            "regift_days": [
                31
            ],
            "repeat": [
                31
            ],
            "repeat_day_of_month": [
                31
            ],
            "start_date": [
                876
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "epochs_sum_fields": {
            "circle_id": [
                31
            ],
            "days": [
                31
            ],
            "grant": [
                659
            ],
            "id": [
                61
            ],
            "number": [
                31
            ],
            "regift_days": [
                31
            ],
            "repeat": [
                31
            ],
            "repeat_day_of_month": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "epochs_sum_order_by": {
            "circle_id": [
                661
            ],
            "days": [
                661
            ],
            "grant": [
                661
            ],
            "id": [
                661
            ],
            "number": [
                661
            ],
            "regift_days": [
                661
            ],
            "repeat": [
                661
            ],
            "repeat_day_of_month": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "epochs_update_column": {},
        "epochs_updates": {
            "_inc": [
                500
            ],
            "_set": [
                512
            ],
            "where": [
                498
            ],
            "__typename": [
                40
            ]
        },
        "epochs_var_pop_fields": {
            "circle_id": [
                27
            ],
            "days": [
                27
            ],
            "grant": [
                27
            ],
            "id": [
                27
            ],
            "number": [
                27
            ],
            "regift_days": [
                27
            ],
            "repeat": [
                27
            ],
            "repeat_day_of_month": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "epochs_var_pop_order_by": {
            "circle_id": [
                661
            ],
            "days": [
                661
            ],
            "grant": [
                661
            ],
            "id": [
                661
            ],
            "number": [
                661
            ],
            "regift_days": [
                661
            ],
            "repeat": [
                661
            ],
            "repeat_day_of_month": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "epochs_var_samp_fields": {
            "circle_id": [
                27
            ],
            "days": [
                27
            ],
            "grant": [
                27
            ],
            "id": [
                27
            ],
            "number": [
                27
            ],
            "regift_days": [
                27
            ],
            "repeat": [
                27
            ],
            "repeat_day_of_month": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "epochs_var_samp_order_by": {
            "circle_id": [
                661
            ],
            "days": [
                661
            ],
            "grant": [
                661
            ],
            "id": [
                661
            ],
            "number": [
                661
            ],
            "regift_days": [
                661
            ],
            "repeat": [
                661
            ],
            "repeat_day_of_month": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "epochs_variance_fields": {
            "circle_id": [
                27
            ],
            "days": [
                27
            ],
            "grant": [
                27
            ],
            "id": [
                27
            ],
            "number": [
                27
            ],
            "regift_days": [
                27
            ],
            "repeat": [
                27
            ],
            "repeat_day_of_month": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "epochs_variance_order_by": {
            "circle_id": [
                661
            ],
            "days": [
                661
            ],
            "grant": [
                661
            ],
            "id": [
                661
            ],
            "number": [
                661
            ],
            "regift_days": [
                661
            ],
            "repeat": [
                661
            ],
            "repeat_day_of_month": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "gift_private": {
            "gift_id": [
                61
            ],
            "note": [
                40
            ],
            "recipient": [
                937
            ],
            "recipient_id": [
                61
            ],
            "sender": [
                937
            ],
            "sender_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_aggregate": {
            "aggregate": [
                533
            ],
            "nodes": [
                531
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_aggregate_fields": {
            "avg": [
                534
            ],
            "count": [
                31,
                {
                    "columns": [
                        543,
                        "[gift_private_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                538
            ],
            "min": [
                539
            ],
            "stddev": [
                545
            ],
            "stddev_pop": [
                546
            ],
            "stddev_samp": [
                547
            ],
            "sum": [
                550
            ],
            "var_pop": [
                552
            ],
            "var_samp": [
                553
            ],
            "variance": [
                554
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_avg_fields": {
            "gift_id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_bool_exp": {
            "_and": [
                535
            ],
            "_not": [
                535
            ],
            "_or": [
                535
            ],
            "gift_id": [
                62
            ],
            "note": [
                41
            ],
            "recipient": [
                944
            ],
            "recipient_id": [
                62
            ],
            "sender": [
                944
            ],
            "sender_id": [
                62
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_inc_input": {
            "gift_id": [
                61
            ],
            "recipient_id": [
                61
            ],
            "sender_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_insert_input": {
            "gift_id": [
                61
            ],
            "note": [
                40
            ],
            "recipient": [
                953
            ],
            "recipient_id": [
                61
            ],
            "sender": [
                953
            ],
            "sender_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_max_fields": {
            "gift_id": [
                61
            ],
            "note": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_min_fields": {
            "gift_id": [
                61
            ],
            "note": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                531
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_obj_rel_insert_input": {
            "data": [
                537
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_order_by": {
            "gift_id": [
                661
            ],
            "note": [
                661
            ],
            "recipient": [
                955
            ],
            "recipient_id": [
                661
            ],
            "sender": [
                955
            ],
            "sender_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_select_column": {},
        "gift_private_set_input": {
            "gift_id": [
                61
            ],
            "note": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_stddev_fields": {
            "gift_id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_stddev_pop_fields": {
            "gift_id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_stddev_samp_fields": {
            "gift_id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_stream_cursor_input": {
            "initial_value": [
                549
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_stream_cursor_value_input": {
            "gift_id": [
                61
            ],
            "note": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_sum_fields": {
            "gift_id": [
                61
            ],
            "recipient_id": [
                61
            ],
            "sender_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_updates": {
            "_inc": [
                536
            ],
            "_set": [
                544
            ],
            "where": [
                535
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_var_pop_fields": {
            "gift_id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_var_samp_fields": {
            "gift_id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "gift_private_variance_fields": {
            "gift_id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "histories": {
            "bio": [
                40
            ],
            "circle": [
                271
            ],
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "epoch": [
                491
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "updated_at": [
                874
            ],
            "user": [
                937
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "histories_aggregate": {
            "aggregate": [
                557
            ],
            "nodes": [
                555
            ],
            "__typename": [
                40
            ]
        },
        "histories_aggregate_fields": {
            "avg": [
                558
            ],
            "count": [
                31,
                {
                    "columns": [
                        569,
                        "[histories_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                563
            ],
            "min": [
                564
            ],
            "stddev": [
                571
            ],
            "stddev_pop": [
                572
            ],
            "stddev_samp": [
                573
            ],
            "sum": [
                576
            ],
            "var_pop": [
                579
            ],
            "var_samp": [
                580
            ],
            "variance": [
                581
            ],
            "__typename": [
                40
            ]
        },
        "histories_avg_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "histories_bool_exp": {
            "_and": [
                559
            ],
            "_not": [
                559
            ],
            "_or": [
                559
            ],
            "bio": [
                41
            ],
            "circle": [
                278
            ],
            "circle_id": [
                32
            ],
            "created_at": [
                875
            ],
            "epoch": [
                498
            ],
            "epoch_id": [
                32
            ],
            "id": [
                62
            ],
            "updated_at": [
                875
            ],
            "user": [
                944
            ],
            "user_id": [
                32
            ],
            "__typename": [
                40
            ]
        },
        "histories_constraint": {},
        "histories_inc_input": {
            "circle_id": [
                31
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "histories_insert_input": {
            "bio": [
                40
            ],
            "circle": [
                287
            ],
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "epoch": [
                507
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "updated_at": [
                874
            ],
            "user": [
                953
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "histories_max_fields": {
            "bio": [
                40
            ],
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "updated_at": [
                874
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "histories_min_fields": {
            "bio": [
                40
            ],
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "updated_at": [
                874
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "histories_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                555
            ],
            "__typename": [
                40
            ]
        },
        "histories_on_conflict": {
            "constraint": [
                560
            ],
            "update_columns": [
                577
            ],
            "where": [
                559
            ],
            "__typename": [
                40
            ]
        },
        "histories_order_by": {
            "bio": [
                661
            ],
            "circle": [
                289
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "epoch": [
                509
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "updated_at": [
                661
            ],
            "user": [
                955
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "histories_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "histories_select_column": {},
        "histories_set_input": {
            "bio": [
                40
            ],
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "updated_at": [
                874
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "histories_stddev_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "histories_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "histories_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "histories_stream_cursor_input": {
            "initial_value": [
                575
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "histories_stream_cursor_value_input": {
            "bio": [
                40
            ],
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "updated_at": [
                874
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "histories_sum_fields": {
            "circle_id": [
                31
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "histories_update_column": {},
        "histories_updates": {
            "_inc": [
                561
            ],
            "_set": [
                570
            ],
            "where": [
                559
            ],
            "__typename": [
                40
            ]
        },
        "histories_var_pop_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "histories_var_samp_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "histories_variance_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events": {
            "circle": [
                271
            ],
            "circle_id": [
                31
            ],
            "created_at": [
                876
            ],
            "data": [
                616,
                {
                    "path": [
                        40
                    ]
                }
            ],
            "event_subtype": [
                40
            ],
            "event_type": [
                40
            ],
            "id": [
                31
            ],
            "org_id": [
                31
            ],
            "organization": [
                662
            ],
            "profile": [
                807
            ],
            "profile_id": [
                31
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_aggregate": {
            "aggregate": [
                584
            ],
            "nodes": [
                582
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_aggregate_fields": {
            "avg": [
                586
            ],
            "count": [
                31,
                {
                    "columns": [
                        601,
                        "[interaction_events_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                594
            ],
            "min": [
                595
            ],
            "stddev": [
                603
            ],
            "stddev_pop": [
                604
            ],
            "stddev_samp": [
                605
            ],
            "sum": [
                608
            ],
            "var_pop": [
                611
            ],
            "var_samp": [
                612
            ],
            "variance": [
                613
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_append_input": {
            "data": [
                616
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_avg_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "org_id": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_bool_exp": {
            "_and": [
                587
            ],
            "_not": [
                587
            ],
            "_or": [
                587
            ],
            "circle": [
                278
            ],
            "circle_id": [
                32
            ],
            "created_at": [
                877
            ],
            "data": [
                618
            ],
            "event_subtype": [
                41
            ],
            "event_type": [
                41
            ],
            "id": [
                32
            ],
            "org_id": [
                32
            ],
            "organization": [
                666
            ],
            "profile": [
                811
            ],
            "profile_id": [
                32
            ],
            "updated_at": [
                877
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_constraint": {},
        "interaction_events_delete_at_path_input": {
            "data": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_delete_elem_input": {
            "data": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_delete_key_input": {
            "data": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_inc_input": {
            "circle_id": [
                31
            ],
            "id": [
                31
            ],
            "org_id": [
                31
            ],
            "profile_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_insert_input": {
            "circle": [
                287
            ],
            "circle_id": [
                31
            ],
            "created_at": [
                876
            ],
            "data": [
                616
            ],
            "event_subtype": [
                40
            ],
            "event_type": [
                40
            ],
            "id": [
                31
            ],
            "org_id": [
                31
            ],
            "organization": [
                673
            ],
            "profile": [
                818
            ],
            "profile_id": [
                31
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_max_fields": {
            "circle_id": [
                31
            ],
            "created_at": [
                876
            ],
            "event_subtype": [
                40
            ],
            "event_type": [
                40
            ],
            "id": [
                31
            ],
            "org_id": [
                31
            ],
            "profile_id": [
                31
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_min_fields": {
            "circle_id": [
                31
            ],
            "created_at": [
                876
            ],
            "event_subtype": [
                40
            ],
            "event_type": [
                40
            ],
            "id": [
                31
            ],
            "org_id": [
                31
            ],
            "profile_id": [
                31
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                582
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_on_conflict": {
            "constraint": [
                588
            ],
            "update_columns": [
                609
            ],
            "where": [
                587
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_order_by": {
            "circle": [
                289
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "data": [
                661
            ],
            "event_subtype": [
                661
            ],
            "event_type": [
                661
            ],
            "id": [
                661
            ],
            "org_id": [
                661
            ],
            "organization": [
                675
            ],
            "profile": [
                820
            ],
            "profile_id": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_pk_columns_input": {
            "id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_prepend_input": {
            "data": [
                616
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_select_column": {},
        "interaction_events_set_input": {
            "circle_id": [
                31
            ],
            "created_at": [
                876
            ],
            "data": [
                616
            ],
            "event_subtype": [
                40
            ],
            "event_type": [
                40
            ],
            "id": [
                31
            ],
            "org_id": [
                31
            ],
            "profile_id": [
                31
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_stddev_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "org_id": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "org_id": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "org_id": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_stream_cursor_input": {
            "initial_value": [
                607
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_stream_cursor_value_input": {
            "circle_id": [
                31
            ],
            "created_at": [
                876
            ],
            "data": [
                616
            ],
            "event_subtype": [
                40
            ],
            "event_type": [
                40
            ],
            "id": [
                31
            ],
            "org_id": [
                31
            ],
            "profile_id": [
                31
            ],
            "updated_at": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_sum_fields": {
            "circle_id": [
                31
            ],
            "id": [
                31
            ],
            "org_id": [
                31
            ],
            "profile_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_update_column": {},
        "interaction_events_updates": {
            "_append": [
                585
            ],
            "_delete_at_path": [
                589
            ],
            "_delete_elem": [
                590
            ],
            "_delete_key": [
                591
            ],
            "_inc": [
                592
            ],
            "_prepend": [
                600
            ],
            "_set": [
                602
            ],
            "where": [
                587
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_var_pop_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "org_id": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_var_samp_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "org_id": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "interaction_events_variance_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "org_id": [
                27
            ],
            "profile_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "json": {},
        "json_comparison_exp": {
            "_eq": [
                614
            ],
            "_gt": [
                614
            ],
            "_gte": [
                614
            ],
            "_in": [
                614
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                614
            ],
            "_lte": [
                614
            ],
            "_neq": [
                614
            ],
            "_nin": [
                614
            ],
            "__typename": [
                40
            ]
        },
        "jsonb": {},
        "jsonb_cast_exp": {
            "String": [
                41
            ],
            "__typename": [
                40
            ]
        },
        "jsonb_comparison_exp": {
            "_cast": [
                617
            ],
            "_contained_in": [
                616
            ],
            "_contains": [
                616
            ],
            "_eq": [
                616
            ],
            "_gt": [
                616
            ],
            "_gte": [
                616
            ],
            "_has_key": [
                40
            ],
            "_has_keys_all": [
                40
            ],
            "_has_keys_any": [
                40
            ],
            "_in": [
                616
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                616
            ],
            "_lte": [
                616
            ],
            "_neq": [
                616
            ],
            "_nin": [
                616
            ],
            "__typename": [
                40
            ]
        },
        "nominees": {
            "address": [
                40
            ],
            "circle": [
                271
            ],
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "description": [
                40
            ],
            "ended": [
                6
            ],
            "expiry_date": [
                874
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "nominated_by_user_id": [
                31
            ],
            "nominated_date": [
                390
            ],
            "nominations": [
                1079,
                {
                    "distinct_on": [
                        1098,
                        "[vouches_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1096,
                        "[vouches_order_by!]"
                    ],
                    "where": [
                        1086
                    ]
                }
            ],
            "nominations_aggregate": [
                1080,
                {
                    "distinct_on": [
                        1098,
                        "[vouches_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1096,
                        "[vouches_order_by!]"
                    ],
                    "where": [
                        1086
                    ]
                }
            ],
            "nominator": [
                937
            ],
            "updated_at": [
                874
            ],
            "user": [
                937
            ],
            "user_id": [
                31
            ],
            "vouches_required": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "nominees_aggregate": {
            "aggregate": [
                621
            ],
            "nodes": [
                619
            ],
            "__typename": [
                40
            ]
        },
        "nominees_aggregate_fields": {
            "avg": [
                624
            ],
            "count": [
                31,
                {
                    "columns": [
                        639,
                        "[nominees_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                630
            ],
            "min": [
                632
            ],
            "stddev": [
                641
            ],
            "stddev_pop": [
                643
            ],
            "stddev_samp": [
                645
            ],
            "sum": [
                649
            ],
            "var_pop": [
                653
            ],
            "var_samp": [
                655
            ],
            "variance": [
                657
            ],
            "__typename": [
                40
            ]
        },
        "nominees_aggregate_order_by": {
            "avg": [
                625
            ],
            "count": [
                661
            ],
            "max": [
                631
            ],
            "min": [
                633
            ],
            "stddev": [
                642
            ],
            "stddev_pop": [
                644
            ],
            "stddev_samp": [
                646
            ],
            "sum": [
                650
            ],
            "var_pop": [
                654
            ],
            "var_samp": [
                656
            ],
            "variance": [
                658
            ],
            "__typename": [
                40
            ]
        },
        "nominees_arr_rel_insert_input": {
            "data": [
                629
            ],
            "on_conflict": [
                636
            ],
            "__typename": [
                40
            ]
        },
        "nominees_avg_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "nominated_by_user_id": [
                27
            ],
            "user_id": [
                27
            ],
            "vouches_required": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "nominees_avg_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "nominated_by_user_id": [
                661
            ],
            "user_id": [
                661
            ],
            "vouches_required": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "nominees_bool_exp": {
            "_and": [
                626
            ],
            "_not": [
                626
            ],
            "_or": [
                626
            ],
            "address": [
                41
            ],
            "circle": [
                278
            ],
            "circle_id": [
                32
            ],
            "created_at": [
                875
            ],
            "description": [
                41
            ],
            "ended": [
                7
            ],
            "expiry_date": [
                875
            ],
            "id": [
                62
            ],
            "name": [
                41
            ],
            "nominated_by_user_id": [
                32
            ],
            "nominated_date": [
                391
            ],
            "nominations": [
                1086
            ],
            "nominator": [
                944
            ],
            "updated_at": [
                875
            ],
            "user": [
                944
            ],
            "user_id": [
                32
            ],
            "vouches_required": [
                32
            ],
            "__typename": [
                40
            ]
        },
        "nominees_constraint": {},
        "nominees_inc_input": {
            "circle_id": [
                31
            ],
            "id": [
                61
            ],
            "nominated_by_user_id": [
                31
            ],
            "user_id": [
                31
            ],
            "vouches_required": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "nominees_insert_input": {
            "address": [
                40
            ],
            "circle": [
                287
            ],
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "description": [
                40
            ],
            "ended": [
                6
            ],
            "expiry_date": [
                874
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "nominated_by_user_id": [
                31
            ],
            "nominated_date": [
                390
            ],
            "nominations": [
                1083
            ],
            "nominator": [
                953
            ],
            "updated_at": [
                874
            ],
            "user": [
                953
            ],
            "user_id": [
                31
            ],
            "vouches_required": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "nominees_max_fields": {
            "address": [
                40
            ],
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "description": [
                40
            ],
            "expiry_date": [
                874
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "nominated_by_user_id": [
                31
            ],
            "nominated_date": [
                390
            ],
            "updated_at": [
                874
            ],
            "user_id": [
                31
            ],
            "vouches_required": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "nominees_max_order_by": {
            "address": [
                661
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "description": [
                661
            ],
            "expiry_date": [
                661
            ],
            "id": [
                661
            ],
            "name": [
                661
            ],
            "nominated_by_user_id": [
                661
            ],
            "nominated_date": [
                661
            ],
            "updated_at": [
                661
            ],
            "user_id": [
                661
            ],
            "vouches_required": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "nominees_min_fields": {
            "address": [
                40
            ],
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "description": [
                40
            ],
            "expiry_date": [
                874
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "nominated_by_user_id": [
                31
            ],
            "nominated_date": [
                390
            ],
            "updated_at": [
                874
            ],
            "user_id": [
                31
            ],
            "vouches_required": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "nominees_min_order_by": {
            "address": [
                661
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "description": [
                661
            ],
            "expiry_date": [
                661
            ],
            "id": [
                661
            ],
            "name": [
                661
            ],
            "nominated_by_user_id": [
                661
            ],
            "nominated_date": [
                661
            ],
            "updated_at": [
                661
            ],
            "user_id": [
                661
            ],
            "vouches_required": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "nominees_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                619
            ],
            "__typename": [
                40
            ]
        },
        "nominees_obj_rel_insert_input": {
            "data": [
                629
            ],
            "on_conflict": [
                636
            ],
            "__typename": [
                40
            ]
        },
        "nominees_on_conflict": {
            "constraint": [
                627
            ],
            "update_columns": [
                651
            ],
            "where": [
                626
            ],
            "__typename": [
                40
            ]
        },
        "nominees_order_by": {
            "address": [
                661
            ],
            "circle": [
                289
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "description": [
                661
            ],
            "ended": [
                661
            ],
            "expiry_date": [
                661
            ],
            "id": [
                661
            ],
            "name": [
                661
            ],
            "nominated_by_user_id": [
                661
            ],
            "nominated_date": [
                661
            ],
            "nominations_aggregate": [
                1082
            ],
            "nominator": [
                955
            ],
            "updated_at": [
                661
            ],
            "user": [
                955
            ],
            "user_id": [
                661
            ],
            "vouches_required": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "nominees_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "nominees_select_column": {},
        "nominees_set_input": {
            "address": [
                40
            ],
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "description": [
                40
            ],
            "ended": [
                6
            ],
            "expiry_date": [
                874
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "nominated_by_user_id": [
                31
            ],
            "nominated_date": [
                390
            ],
            "updated_at": [
                874
            ],
            "user_id": [
                31
            ],
            "vouches_required": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "nominees_stddev_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "nominated_by_user_id": [
                27
            ],
            "user_id": [
                27
            ],
            "vouches_required": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "nominees_stddev_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "nominated_by_user_id": [
                661
            ],
            "user_id": [
                661
            ],
            "vouches_required": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "nominees_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "nominated_by_user_id": [
                27
            ],
            "user_id": [
                27
            ],
            "vouches_required": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "nominees_stddev_pop_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "nominated_by_user_id": [
                661
            ],
            "user_id": [
                661
            ],
            "vouches_required": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "nominees_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "nominated_by_user_id": [
                27
            ],
            "user_id": [
                27
            ],
            "vouches_required": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "nominees_stddev_samp_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "nominated_by_user_id": [
                661
            ],
            "user_id": [
                661
            ],
            "vouches_required": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "nominees_stream_cursor_input": {
            "initial_value": [
                648
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "nominees_stream_cursor_value_input": {
            "address": [
                40
            ],
            "circle_id": [
                31
            ],
            "created_at": [
                874
            ],
            "description": [
                40
            ],
            "ended": [
                6
            ],
            "expiry_date": [
                874
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "nominated_by_user_id": [
                31
            ],
            "nominated_date": [
                390
            ],
            "updated_at": [
                874
            ],
            "user_id": [
                31
            ],
            "vouches_required": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "nominees_sum_fields": {
            "circle_id": [
                31
            ],
            "id": [
                61
            ],
            "nominated_by_user_id": [
                31
            ],
            "user_id": [
                31
            ],
            "vouches_required": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "nominees_sum_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "nominated_by_user_id": [
                661
            ],
            "user_id": [
                661
            ],
            "vouches_required": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "nominees_update_column": {},
        "nominees_updates": {
            "_inc": [
                628
            ],
            "_set": [
                640
            ],
            "where": [
                626
            ],
            "__typename": [
                40
            ]
        },
        "nominees_var_pop_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "nominated_by_user_id": [
                27
            ],
            "user_id": [
                27
            ],
            "vouches_required": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "nominees_var_pop_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "nominated_by_user_id": [
                661
            ],
            "user_id": [
                661
            ],
            "vouches_required": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "nominees_var_samp_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "nominated_by_user_id": [
                27
            ],
            "user_id": [
                27
            ],
            "vouches_required": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "nominees_var_samp_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "nominated_by_user_id": [
                661
            ],
            "user_id": [
                661
            ],
            "vouches_required": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "nominees_variance_fields": {
            "circle_id": [
                27
            ],
            "id": [
                27
            ],
            "nominated_by_user_id": [
                27
            ],
            "user_id": [
                27
            ],
            "vouches_required": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "nominees_variance_order_by": {
            "circle_id": [
                661
            ],
            "id": [
                661
            ],
            "nominated_by_user_id": [
                661
            ],
            "user_id": [
                661
            ],
            "vouches_required": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "numeric": {},
        "numeric_comparison_exp": {
            "_eq": [
                659
            ],
            "_gt": [
                659
            ],
            "_gte": [
                659
            ],
            "_in": [
                659
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                659
            ],
            "_lte": [
                659
            ],
            "_neq": [
                659
            ],
            "_nin": [
                659
            ],
            "__typename": [
                40
            ]
        },
        "order_by": {},
        "organizations": {
            "circles": [
                271,
                {
                    "distinct_on": [
                        291,
                        "[circles_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        289,
                        "[circles_order_by!]"
                    ],
                    "where": [
                        278
                    ]
                }
            ],
            "circles_aggregate": [
                272,
                {
                    "distinct_on": [
                        291,
                        "[circles_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        289,
                        "[circles_order_by!]"
                    ],
                    "where": [
                        278
                    ]
                }
            ],
            "created_at": [
                874
            ],
            "created_by": [
                31
            ],
            "id": [
                61
            ],
            "is_verified": [
                6
            ],
            "logo": [
                40
            ],
            "name": [
                40
            ],
            "profile": [
                807
            ],
            "sample": [
                6
            ],
            "telegram_id": [
                40
            ],
            "updated_at": [
                874
            ],
            "vaults": [
                1039,
                {
                    "distinct_on": [
                        1059,
                        "[vaults_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1057,
                        "[vaults_order_by!]"
                    ],
                    "where": [
                        1046
                    ]
                }
            ],
            "vaults_aggregate": [
                1040,
                {
                    "distinct_on": [
                        1059,
                        "[vaults_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1057,
                        "[vaults_order_by!]"
                    ],
                    "where": [
                        1046
                    ]
                }
            ],
            "__typename": [
                40
            ]
        },
        "organizations_aggregate": {
            "aggregate": [
                664
            ],
            "nodes": [
                662
            ],
            "__typename": [
                40
            ]
        },
        "organizations_aggregate_fields": {
            "avg": [
                665
            ],
            "count": [
                31,
                {
                    "columns": [
                        677,
                        "[organizations_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                670
            ],
            "min": [
                671
            ],
            "stddev": [
                679
            ],
            "stddev_pop": [
                680
            ],
            "stddev_samp": [
                681
            ],
            "sum": [
                684
            ],
            "var_pop": [
                687
            ],
            "var_samp": [
                688
            ],
            "variance": [
                689
            ],
            "__typename": [
                40
            ]
        },
        "organizations_avg_fields": {
            "created_by": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "organizations_bool_exp": {
            "_and": [
                666
            ],
            "_not": [
                666
            ],
            "_or": [
                666
            ],
            "circles": [
                278
            ],
            "created_at": [
                875
            ],
            "created_by": [
                32
            ],
            "id": [
                62
            ],
            "is_verified": [
                7
            ],
            "logo": [
                41
            ],
            "name": [
                41
            ],
            "profile": [
                811
            ],
            "sample": [
                7
            ],
            "telegram_id": [
                41
            ],
            "updated_at": [
                875
            ],
            "vaults": [
                1046
            ],
            "__typename": [
                40
            ]
        },
        "organizations_constraint": {},
        "organizations_inc_input": {
            "created_by": [
                31
            ],
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "organizations_insert_input": {
            "circles": [
                275
            ],
            "created_at": [
                874
            ],
            "created_by": [
                31
            ],
            "id": [
                61
            ],
            "is_verified": [
                6
            ],
            "logo": [
                40
            ],
            "name": [
                40
            ],
            "profile": [
                818
            ],
            "sample": [
                6
            ],
            "telegram_id": [
                40
            ],
            "updated_at": [
                874
            ],
            "vaults": [
                1043
            ],
            "__typename": [
                40
            ]
        },
        "organizations_max_fields": {
            "created_at": [
                874
            ],
            "created_by": [
                31
            ],
            "id": [
                61
            ],
            "logo": [
                40
            ],
            "name": [
                40
            ],
            "telegram_id": [
                40
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "organizations_min_fields": {
            "created_at": [
                874
            ],
            "created_by": [
                31
            ],
            "id": [
                61
            ],
            "logo": [
                40
            ],
            "name": [
                40
            ],
            "telegram_id": [
                40
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "organizations_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                662
            ],
            "__typename": [
                40
            ]
        },
        "organizations_obj_rel_insert_input": {
            "data": [
                669
            ],
            "on_conflict": [
                674
            ],
            "__typename": [
                40
            ]
        },
        "organizations_on_conflict": {
            "constraint": [
                667
            ],
            "update_columns": [
                685
            ],
            "where": [
                666
            ],
            "__typename": [
                40
            ]
        },
        "organizations_order_by": {
            "circles_aggregate": [
                274
            ],
            "created_at": [
                661
            ],
            "created_by": [
                661
            ],
            "id": [
                661
            ],
            "is_verified": [
                661
            ],
            "logo": [
                661
            ],
            "name": [
                661
            ],
            "profile": [
                820
            ],
            "sample": [
                661
            ],
            "telegram_id": [
                661
            ],
            "updated_at": [
                661
            ],
            "vaults_aggregate": [
                1042
            ],
            "__typename": [
                40
            ]
        },
        "organizations_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "organizations_select_column": {},
        "organizations_set_input": {
            "created_at": [
                874
            ],
            "created_by": [
                31
            ],
            "id": [
                61
            ],
            "is_verified": [
                6
            ],
            "logo": [
                40
            ],
            "name": [
                40
            ],
            "sample": [
                6
            ],
            "telegram_id": [
                40
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "organizations_stddev_fields": {
            "created_by": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "organizations_stddev_pop_fields": {
            "created_by": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "organizations_stddev_samp_fields": {
            "created_by": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "organizations_stream_cursor_input": {
            "initial_value": [
                683
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "organizations_stream_cursor_value_input": {
            "created_at": [
                874
            ],
            "created_by": [
                31
            ],
            "id": [
                61
            ],
            "is_verified": [
                6
            ],
            "logo": [
                40
            ],
            "name": [
                40
            ],
            "sample": [
                6
            ],
            "telegram_id": [
                40
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "organizations_sum_fields": {
            "created_by": [
                31
            ],
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "organizations_update_column": {},
        "organizations_updates": {
            "_inc": [
                668
            ],
            "_set": [
                678
            ],
            "where": [
                666
            ],
            "__typename": [
                40
            ]
        },
        "organizations_var_pop_fields": {
            "created_by": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "organizations_var_samp_fields": {
            "created_by": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "organizations_variance_fields": {
            "created_by": [
                27
            ],
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private": {
            "gift_id": [
                61
            ],
            "note": [
                40
            ],
            "recipient": [
                937
            ],
            "recipient_id": [
                61
            ],
            "sender": [
                937
            ],
            "sender_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_aggregate": {
            "aggregate": [
                692
            ],
            "nodes": [
                690
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_aggregate_fields": {
            "avg": [
                693
            ],
            "count": [
                31,
                {
                    "columns": [
                        702,
                        "[pending_gift_private_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                697
            ],
            "min": [
                698
            ],
            "stddev": [
                704
            ],
            "stddev_pop": [
                705
            ],
            "stddev_samp": [
                706
            ],
            "sum": [
                709
            ],
            "var_pop": [
                711
            ],
            "var_samp": [
                712
            ],
            "variance": [
                713
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_avg_fields": {
            "gift_id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_bool_exp": {
            "_and": [
                694
            ],
            "_not": [
                694
            ],
            "_or": [
                694
            ],
            "gift_id": [
                62
            ],
            "note": [
                41
            ],
            "recipient": [
                944
            ],
            "recipient_id": [
                62
            ],
            "sender": [
                944
            ],
            "sender_id": [
                62
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_inc_input": {
            "gift_id": [
                61
            ],
            "recipient_id": [
                61
            ],
            "sender_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_insert_input": {
            "gift_id": [
                61
            ],
            "note": [
                40
            ],
            "recipient": [
                953
            ],
            "recipient_id": [
                61
            ],
            "sender": [
                953
            ],
            "sender_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_max_fields": {
            "gift_id": [
                61
            ],
            "note": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_min_fields": {
            "gift_id": [
                61
            ],
            "note": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                690
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_obj_rel_insert_input": {
            "data": [
                696
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_order_by": {
            "gift_id": [
                661
            ],
            "note": [
                661
            ],
            "recipient": [
                955
            ],
            "recipient_id": [
                661
            ],
            "sender": [
                955
            ],
            "sender_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_select_column": {},
        "pending_gift_private_set_input": {
            "gift_id": [
                61
            ],
            "note": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_stddev_fields": {
            "gift_id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_stddev_pop_fields": {
            "gift_id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_stddev_samp_fields": {
            "gift_id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_stream_cursor_input": {
            "initial_value": [
                708
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_stream_cursor_value_input": {
            "gift_id": [
                61
            ],
            "note": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_sum_fields": {
            "gift_id": [
                61
            ],
            "recipient_id": [
                61
            ],
            "sender_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_updates": {
            "_inc": [
                695
            ],
            "_set": [
                703
            ],
            "where": [
                694
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_var_pop_fields": {
            "gift_id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_var_samp_fields": {
            "gift_id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_gift_private_variance_fields": {
            "gift_id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts": {
            "circle": [
                271
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "dts_created": [
                874
            ],
            "epoch": [
                491
            ],
            "epoch_id": [
                31
            ],
            "gift_private": [
                690
            ],
            "id": [
                61
            ],
            "note": [
                40
            ],
            "recipient": [
                937
            ],
            "recipient_address": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender": [
                937
            ],
            "sender_address": [
                40
            ],
            "sender_id": [
                61
            ],
            "tokens": [
                31
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_aggregate": {
            "aggregate": [
                716
            ],
            "nodes": [
                714
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_aggregate_fields": {
            "avg": [
                719
            ],
            "count": [
                31,
                {
                    "columns": [
                        733,
                        "[pending_token_gifts_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                725
            ],
            "min": [
                727
            ],
            "stddev": [
                735
            ],
            "stddev_pop": [
                737
            ],
            "stddev_samp": [
                739
            ],
            "sum": [
                743
            ],
            "var_pop": [
                747
            ],
            "var_samp": [
                749
            ],
            "variance": [
                751
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_aggregate_order_by": {
            "avg": [
                720
            ],
            "count": [
                661
            ],
            "max": [
                726
            ],
            "min": [
                728
            ],
            "stddev": [
                736
            ],
            "stddev_pop": [
                738
            ],
            "stddev_samp": [
                740
            ],
            "sum": [
                744
            ],
            "var_pop": [
                748
            ],
            "var_samp": [
                750
            ],
            "variance": [
                752
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_arr_rel_insert_input": {
            "data": [
                724
            ],
            "on_conflict": [
                730
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_avg_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_avg_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_bool_exp": {
            "_and": [
                721
            ],
            "_not": [
                721
            ],
            "_or": [
                721
            ],
            "circle": [
                278
            ],
            "circle_id": [
                62
            ],
            "created_at": [
                875
            ],
            "dts_created": [
                875
            ],
            "epoch": [
                498
            ],
            "epoch_id": [
                32
            ],
            "gift_private": [
                694
            ],
            "id": [
                62
            ],
            "note": [
                41
            ],
            "recipient": [
                944
            ],
            "recipient_address": [
                41
            ],
            "recipient_id": [
                62
            ],
            "sender": [
                944
            ],
            "sender_address": [
                41
            ],
            "sender_id": [
                62
            ],
            "tokens": [
                32
            ],
            "updated_at": [
                875
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_constraint": {},
        "pending_token_gifts_inc_input": {
            "circle_id": [
                61
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "recipient_id": [
                61
            ],
            "sender_id": [
                61
            ],
            "tokens": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_insert_input": {
            "circle": [
                287
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "dts_created": [
                874
            ],
            "epoch": [
                507
            ],
            "epoch_id": [
                31
            ],
            "gift_private": [
                700
            ],
            "id": [
                61
            ],
            "note": [
                40
            ],
            "recipient": [
                953
            ],
            "recipient_address": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender": [
                953
            ],
            "sender_address": [
                40
            ],
            "sender_id": [
                61
            ],
            "tokens": [
                31
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_max_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "dts_created": [
                874
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "note": [
                40
            ],
            "recipient_address": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender_address": [
                40
            ],
            "sender_id": [
                61
            ],
            "tokens": [
                31
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_max_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "dts_created": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "note": [
                661
            ],
            "recipient_address": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_address": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_min_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "dts_created": [
                874
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "note": [
                40
            ],
            "recipient_address": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender_address": [
                40
            ],
            "sender_id": [
                61
            ],
            "tokens": [
                31
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_min_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "dts_created": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "note": [
                661
            ],
            "recipient_address": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_address": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                714
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_on_conflict": {
            "constraint": [
                722
            ],
            "update_columns": [
                745
            ],
            "where": [
                721
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_order_by": {
            "circle": [
                289
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "dts_created": [
                661
            ],
            "epoch": [
                509
            ],
            "epoch_id": [
                661
            ],
            "gift_private": [
                701
            ],
            "id": [
                661
            ],
            "note": [
                661
            ],
            "recipient": [
                955
            ],
            "recipient_address": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender": [
                955
            ],
            "sender_address": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_select_column": {},
        "pending_token_gifts_set_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "dts_created": [
                874
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "note": [
                40
            ],
            "recipient_address": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender_address": [
                40
            ],
            "sender_id": [
                61
            ],
            "tokens": [
                31
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_stddev_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_stddev_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_stddev_pop_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_stddev_samp_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_stream_cursor_input": {
            "initial_value": [
                742
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_stream_cursor_value_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "dts_created": [
                874
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "note": [
                40
            ],
            "recipient_address": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender_address": [
                40
            ],
            "sender_id": [
                61
            ],
            "tokens": [
                31
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_sum_fields": {
            "circle_id": [
                61
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "recipient_id": [
                61
            ],
            "sender_id": [
                61
            ],
            "tokens": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_sum_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_update_column": {},
        "pending_token_gifts_updates": {
            "_inc": [
                723
            ],
            "_set": [
                734
            ],
            "where": [
                721
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_var_pop_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_var_pop_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_var_samp_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_var_samp_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_variance_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_token_gifts_variance_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions": {
            "chain_id": [
                31
            ],
            "claim_id": [
                61
            ],
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution": [
                446
            ],
            "distribution_id": [
                61
            ],
            "org_id": [
                61
            ],
            "organization": [
                662
            ],
            "profile": [
                807
            ],
            "tx_hash": [
                40
            ],
            "tx_type": [
                1023
            ],
            "vault_tx_type": [
                1018
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_aggregate": {
            "aggregate": [
                755
            ],
            "nodes": [
                753
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_aggregate_fields": {
            "avg": [
                756
            ],
            "count": [
                31,
                {
                    "columns": [
                        767,
                        "[pending_vault_transactions_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                761
            ],
            "min": [
                762
            ],
            "stddev": [
                769
            ],
            "stddev_pop": [
                770
            ],
            "stddev_samp": [
                771
            ],
            "sum": [
                774
            ],
            "var_pop": [
                777
            ],
            "var_samp": [
                778
            ],
            "variance": [
                779
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_avg_fields": {
            "chain_id": [
                27
            ],
            "claim_id": [
                27
            ],
            "created_by": [
                27
            ],
            "distribution_id": [
                27
            ],
            "org_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_bool_exp": {
            "_and": [
                757
            ],
            "_not": [
                757
            ],
            "_or": [
                757
            ],
            "chain_id": [
                32
            ],
            "claim_id": [
                62
            ],
            "created_at": [
                875
            ],
            "created_by": [
                62
            ],
            "distribution": [
                454
            ],
            "distribution_id": [
                62
            ],
            "org_id": [
                62
            ],
            "organization": [
                666
            ],
            "profile": [
                811
            ],
            "tx_hash": [
                41
            ],
            "tx_type": [
                1024
            ],
            "vault_tx_type": [
                1021
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_constraint": {},
        "pending_vault_transactions_inc_input": {
            "chain_id": [
                31
            ],
            "claim_id": [
                61
            ],
            "created_by": [
                61
            ],
            "distribution_id": [
                61
            ],
            "org_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_insert_input": {
            "chain_id": [
                31
            ],
            "claim_id": [
                61
            ],
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution": [
                466
            ],
            "distribution_id": [
                61
            ],
            "org_id": [
                61
            ],
            "organization": [
                673
            ],
            "profile": [
                818
            ],
            "tx_hash": [
                40
            ],
            "tx_type": [
                1023
            ],
            "vault_tx_type": [
                1029
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_max_fields": {
            "chain_id": [
                31
            ],
            "claim_id": [
                61
            ],
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution_id": [
                61
            ],
            "org_id": [
                61
            ],
            "tx_hash": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_min_fields": {
            "chain_id": [
                31
            ],
            "claim_id": [
                61
            ],
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution_id": [
                61
            ],
            "org_id": [
                61
            ],
            "tx_hash": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                753
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_on_conflict": {
            "constraint": [
                758
            ],
            "update_columns": [
                775
            ],
            "where": [
                757
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_order_by": {
            "chain_id": [
                661
            ],
            "claim_id": [
                661
            ],
            "created_at": [
                661
            ],
            "created_by": [
                661
            ],
            "distribution": [
                468
            ],
            "distribution_id": [
                661
            ],
            "org_id": [
                661
            ],
            "organization": [
                675
            ],
            "profile": [
                820
            ],
            "tx_hash": [
                661
            ],
            "tx_type": [
                661
            ],
            "vault_tx_type": [
                1031
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_pk_columns_input": {
            "tx_hash": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_select_column": {},
        "pending_vault_transactions_set_input": {
            "chain_id": [
                31
            ],
            "claim_id": [
                61
            ],
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution_id": [
                61
            ],
            "org_id": [
                61
            ],
            "tx_hash": [
                40
            ],
            "tx_type": [
                1023
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_stddev_fields": {
            "chain_id": [
                27
            ],
            "claim_id": [
                27
            ],
            "created_by": [
                27
            ],
            "distribution_id": [
                27
            ],
            "org_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_stddev_pop_fields": {
            "chain_id": [
                27
            ],
            "claim_id": [
                27
            ],
            "created_by": [
                27
            ],
            "distribution_id": [
                27
            ],
            "org_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_stddev_samp_fields": {
            "chain_id": [
                27
            ],
            "claim_id": [
                27
            ],
            "created_by": [
                27
            ],
            "distribution_id": [
                27
            ],
            "org_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_stream_cursor_input": {
            "initial_value": [
                773
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_stream_cursor_value_input": {
            "chain_id": [
                31
            ],
            "claim_id": [
                61
            ],
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution_id": [
                61
            ],
            "org_id": [
                61
            ],
            "tx_hash": [
                40
            ],
            "tx_type": [
                1023
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_sum_fields": {
            "chain_id": [
                31
            ],
            "claim_id": [
                61
            ],
            "created_by": [
                61
            ],
            "distribution_id": [
                61
            ],
            "org_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_update_column": {},
        "pending_vault_transactions_updates": {
            "_inc": [
                759
            ],
            "_set": [
                768
            ],
            "where": [
                757
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_var_pop_fields": {
            "chain_id": [
                27
            ],
            "claim_id": [
                27
            ],
            "created_by": [
                27
            ],
            "distribution_id": [
                27
            ],
            "org_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_var_samp_fields": {
            "chain_id": [
                27
            ],
            "claim_id": [
                27
            ],
            "created_by": [
                27
            ],
            "distribution_id": [
                27
            ],
            "org_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "pending_vault_transactions_variance_fields": {
            "chain_id": [
                27
            ],
            "claim_id": [
                27
            ],
            "created_by": [
                27
            ],
            "distribution_id": [
                27
            ],
            "org_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens": {
            "abilities": [
                40
            ],
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "last_used_at": [
                874
            ],
            "name": [
                40
            ],
            "profile": [
                807
            ],
            "token": [
                40
            ],
            "tokenable_id": [
                61
            ],
            "tokenable_type": [
                40
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_aggregate": {
            "aggregate": [
                782
            ],
            "nodes": [
                780
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_aggregate_fields": {
            "avg": [
                783
            ],
            "count": [
                31,
                {
                    "columns": [
                        794,
                        "[personal_access_tokens_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                788
            ],
            "min": [
                789
            ],
            "stddev": [
                796
            ],
            "stddev_pop": [
                797
            ],
            "stddev_samp": [
                798
            ],
            "sum": [
                801
            ],
            "var_pop": [
                804
            ],
            "var_samp": [
                805
            ],
            "variance": [
                806
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_avg_fields": {
            "id": [
                27
            ],
            "tokenable_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_bool_exp": {
            "_and": [
                784
            ],
            "_not": [
                784
            ],
            "_or": [
                784
            ],
            "abilities": [
                41
            ],
            "created_at": [
                875
            ],
            "id": [
                62
            ],
            "last_used_at": [
                875
            ],
            "name": [
                41
            ],
            "profile": [
                811
            ],
            "token": [
                41
            ],
            "tokenable_id": [
                62
            ],
            "tokenable_type": [
                41
            ],
            "updated_at": [
                875
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_constraint": {},
        "personal_access_tokens_inc_input": {
            "id": [
                61
            ],
            "tokenable_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_insert_input": {
            "abilities": [
                40
            ],
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "last_used_at": [
                874
            ],
            "name": [
                40
            ],
            "profile": [
                818
            ],
            "token": [
                40
            ],
            "tokenable_id": [
                61
            ],
            "tokenable_type": [
                40
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_max_fields": {
            "abilities": [
                40
            ],
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "last_used_at": [
                874
            ],
            "name": [
                40
            ],
            "token": [
                40
            ],
            "tokenable_id": [
                61
            ],
            "tokenable_type": [
                40
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_min_fields": {
            "abilities": [
                40
            ],
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "last_used_at": [
                874
            ],
            "name": [
                40
            ],
            "token": [
                40
            ],
            "tokenable_id": [
                61
            ],
            "tokenable_type": [
                40
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                780
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_on_conflict": {
            "constraint": [
                785
            ],
            "update_columns": [
                802
            ],
            "where": [
                784
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_order_by": {
            "abilities": [
                661
            ],
            "created_at": [
                661
            ],
            "id": [
                661
            ],
            "last_used_at": [
                661
            ],
            "name": [
                661
            ],
            "profile": [
                820
            ],
            "token": [
                661
            ],
            "tokenable_id": [
                661
            ],
            "tokenable_type": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_select_column": {},
        "personal_access_tokens_set_input": {
            "abilities": [
                40
            ],
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "last_used_at": [
                874
            ],
            "name": [
                40
            ],
            "token": [
                40
            ],
            "tokenable_id": [
                61
            ],
            "tokenable_type": [
                40
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_stddev_fields": {
            "id": [
                27
            ],
            "tokenable_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_stddev_pop_fields": {
            "id": [
                27
            ],
            "tokenable_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_stddev_samp_fields": {
            "id": [
                27
            ],
            "tokenable_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_stream_cursor_input": {
            "initial_value": [
                800
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_stream_cursor_value_input": {
            "abilities": [
                40
            ],
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "last_used_at": [
                874
            ],
            "name": [
                40
            ],
            "token": [
                40
            ],
            "tokenable_id": [
                61
            ],
            "tokenable_type": [
                40
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_sum_fields": {
            "id": [
                61
            ],
            "tokenable_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_update_column": {},
        "personal_access_tokens_updates": {
            "_inc": [
                786
            ],
            "_set": [
                795
            ],
            "where": [
                784
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_var_pop_fields": {
            "id": [
                27
            ],
            "tokenable_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_var_samp_fields": {
            "id": [
                27
            ],
            "tokenable_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "personal_access_tokens_variance_fields": {
            "id": [
                27
            ],
            "tokenable_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "profiles": {
            "address": [
                40
            ],
            "ann_power": [
                6
            ],
            "avatar": [
                40
            ],
            "background": [
                40
            ],
            "bio": [
                40
            ],
            "chat_id": [
                40
            ],
            "claims": [
                311,
                {
                    "distinct_on": [
                        330,
                        "[claims_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        328,
                        "[claims_order_by!]"
                    ],
                    "where": [
                        318
                    ]
                }
            ],
            "claims_aggregate": [
                312,
                {
                    "distinct_on": [
                        330,
                        "[claims_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        328,
                        "[claims_order_by!]"
                    ],
                    "where": [
                        318
                    ]
                }
            ],
            "created_at": [
                874
            ],
            "discord_username": [
                40
            ],
            "distributions": [
                446,
                {
                    "distinct_on": [
                        471,
                        "[distributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        468,
                        "[distributions_order_by!]"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "distributions_aggregate": [
                447,
                {
                    "distinct_on": [
                        471,
                        "[distributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        468,
                        "[distributions_order_by!]"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "github_username": [
                40
            ],
            "id": [
                61
            ],
            "medium_username": [
                40
            ],
            "name": [
                40
            ],
            "skills": [
                40
            ],
            "telegram_username": [
                40
            ],
            "twitter_username": [
                40
            ],
            "updated_at": [
                874
            ],
            "users": [
                937,
                {
                    "distinct_on": [
                        957,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        955,
                        "[users_order_by!]"
                    ],
                    "where": [
                        944
                    ]
                }
            ],
            "users_aggregate": [
                938,
                {
                    "distinct_on": [
                        957,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        955,
                        "[users_order_by!]"
                    ],
                    "where": [
                        944
                    ]
                }
            ],
            "vault_transactions": [
                979,
                {
                    "distinct_on": [
                        998,
                        "[vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        996,
                        "[vault_transactions_order_by!]"
                    ],
                    "where": [
                        986
                    ]
                }
            ],
            "vault_transactions_aggregate": [
                980,
                {
                    "distinct_on": [
                        998,
                        "[vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        996,
                        "[vault_transactions_order_by!]"
                    ],
                    "where": [
                        986
                    ]
                }
            ],
            "vaults": [
                1039,
                {
                    "distinct_on": [
                        1059,
                        "[vaults_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1057,
                        "[vaults_order_by!]"
                    ],
                    "where": [
                        1046
                    ]
                }
            ],
            "vaults_aggregate": [
                1040,
                {
                    "distinct_on": [
                        1059,
                        "[vaults_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1057,
                        "[vaults_order_by!]"
                    ],
                    "where": [
                        1046
                    ]
                }
            ],
            "website": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "profiles_aggregate": {
            "aggregate": [
                809
            ],
            "nodes": [
                807
            ],
            "__typename": [
                40
            ]
        },
        "profiles_aggregate_fields": {
            "avg": [
                810
            ],
            "count": [
                31,
                {
                    "columns": [
                        822,
                        "[profiles_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                815
            ],
            "min": [
                816
            ],
            "stddev": [
                824
            ],
            "stddev_pop": [
                825
            ],
            "stddev_samp": [
                826
            ],
            "sum": [
                829
            ],
            "var_pop": [
                832
            ],
            "var_samp": [
                833
            ],
            "variance": [
                834
            ],
            "__typename": [
                40
            ]
        },
        "profiles_avg_fields": {
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "profiles_bool_exp": {
            "_and": [
                811
            ],
            "_not": [
                811
            ],
            "_or": [
                811
            ],
            "address": [
                41
            ],
            "ann_power": [
                7
            ],
            "avatar": [
                41
            ],
            "background": [
                41
            ],
            "bio": [
                41
            ],
            "chat_id": [
                41
            ],
            "claims": [
                318
            ],
            "created_at": [
                875
            ],
            "discord_username": [
                41
            ],
            "distributions": [
                454
            ],
            "github_username": [
                41
            ],
            "id": [
                62
            ],
            "medium_username": [
                41
            ],
            "name": [
                41
            ],
            "skills": [
                41
            ],
            "telegram_username": [
                41
            ],
            "twitter_username": [
                41
            ],
            "updated_at": [
                875
            ],
            "users": [
                944
            ],
            "vault_transactions": [
                986
            ],
            "vaults": [
                1046
            ],
            "website": [
                41
            ],
            "__typename": [
                40
            ]
        },
        "profiles_constraint": {},
        "profiles_inc_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "profiles_insert_input": {
            "address": [
                40
            ],
            "ann_power": [
                6
            ],
            "avatar": [
                40
            ],
            "background": [
                40
            ],
            "bio": [
                40
            ],
            "chat_id": [
                40
            ],
            "claims": [
                315
            ],
            "created_at": [
                874
            ],
            "discord_username": [
                40
            ],
            "distributions": [
                451
            ],
            "github_username": [
                40
            ],
            "id": [
                61
            ],
            "medium_username": [
                40
            ],
            "name": [
                40
            ],
            "skills": [
                40
            ],
            "telegram_username": [
                40
            ],
            "twitter_username": [
                40
            ],
            "updated_at": [
                874
            ],
            "users": [
                941
            ],
            "vault_transactions": [
                983
            ],
            "vaults": [
                1043
            ],
            "website": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "profiles_max_fields": {
            "address": [
                40
            ],
            "avatar": [
                40
            ],
            "background": [
                40
            ],
            "bio": [
                40
            ],
            "chat_id": [
                40
            ],
            "created_at": [
                874
            ],
            "discord_username": [
                40
            ],
            "github_username": [
                40
            ],
            "id": [
                61
            ],
            "medium_username": [
                40
            ],
            "name": [
                40
            ],
            "skills": [
                40
            ],
            "telegram_username": [
                40
            ],
            "twitter_username": [
                40
            ],
            "updated_at": [
                874
            ],
            "website": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "profiles_min_fields": {
            "address": [
                40
            ],
            "avatar": [
                40
            ],
            "background": [
                40
            ],
            "bio": [
                40
            ],
            "chat_id": [
                40
            ],
            "created_at": [
                874
            ],
            "discord_username": [
                40
            ],
            "github_username": [
                40
            ],
            "id": [
                61
            ],
            "medium_username": [
                40
            ],
            "name": [
                40
            ],
            "skills": [
                40
            ],
            "telegram_username": [
                40
            ],
            "twitter_username": [
                40
            ],
            "updated_at": [
                874
            ],
            "website": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "profiles_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                807
            ],
            "__typename": [
                40
            ]
        },
        "profiles_obj_rel_insert_input": {
            "data": [
                814
            ],
            "on_conflict": [
                819
            ],
            "__typename": [
                40
            ]
        },
        "profiles_on_conflict": {
            "constraint": [
                812
            ],
            "update_columns": [
                830
            ],
            "where": [
                811
            ],
            "__typename": [
                40
            ]
        },
        "profiles_order_by": {
            "address": [
                661
            ],
            "ann_power": [
                661
            ],
            "avatar": [
                661
            ],
            "background": [
                661
            ],
            "bio": [
                661
            ],
            "chat_id": [
                661
            ],
            "claims_aggregate": [
                314
            ],
            "created_at": [
                661
            ],
            "discord_username": [
                661
            ],
            "distributions_aggregate": [
                449
            ],
            "github_username": [
                661
            ],
            "id": [
                661
            ],
            "medium_username": [
                661
            ],
            "name": [
                661
            ],
            "skills": [
                661
            ],
            "telegram_username": [
                661
            ],
            "twitter_username": [
                661
            ],
            "updated_at": [
                661
            ],
            "users_aggregate": [
                940
            ],
            "vault_transactions_aggregate": [
                982
            ],
            "vaults_aggregate": [
                1042
            ],
            "website": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "profiles_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "profiles_select_column": {},
        "profiles_set_input": {
            "address": [
                40
            ],
            "ann_power": [
                6
            ],
            "avatar": [
                40
            ],
            "background": [
                40
            ],
            "bio": [
                40
            ],
            "chat_id": [
                40
            ],
            "created_at": [
                874
            ],
            "discord_username": [
                40
            ],
            "github_username": [
                40
            ],
            "id": [
                61
            ],
            "medium_username": [
                40
            ],
            "name": [
                40
            ],
            "skills": [
                40
            ],
            "telegram_username": [
                40
            ],
            "twitter_username": [
                40
            ],
            "updated_at": [
                874
            ],
            "website": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "profiles_stddev_fields": {
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "profiles_stddev_pop_fields": {
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "profiles_stddev_samp_fields": {
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "profiles_stream_cursor_input": {
            "initial_value": [
                828
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "profiles_stream_cursor_value_input": {
            "address": [
                40
            ],
            "ann_power": [
                6
            ],
            "avatar": [
                40
            ],
            "background": [
                40
            ],
            "bio": [
                40
            ],
            "chat_id": [
                40
            ],
            "created_at": [
                874
            ],
            "discord_username": [
                40
            ],
            "github_username": [
                40
            ],
            "id": [
                61
            ],
            "medium_username": [
                40
            ],
            "name": [
                40
            ],
            "skills": [
                40
            ],
            "telegram_username": [
                40
            ],
            "twitter_username": [
                40
            ],
            "updated_at": [
                874
            ],
            "website": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "profiles_sum_fields": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "profiles_update_column": {},
        "profiles_updates": {
            "_inc": [
                813
            ],
            "_set": [
                823
            ],
            "where": [
                811
            ],
            "__typename": [
                40
            ]
        },
        "profiles_var_pop_fields": {
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "profiles_var_samp_fields": {
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "profiles_variance_fields": {
            "id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "teammates": {
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "team_mate_id": [
                31
            ],
            "teammate": [
                937
            ],
            "updated_at": [
                874
            ],
            "user": [
                937
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "teammates_aggregate": {
            "aggregate": [
                837
            ],
            "nodes": [
                835
            ],
            "__typename": [
                40
            ]
        },
        "teammates_aggregate_fields": {
            "avg": [
                840
            ],
            "count": [
                31,
                {
                    "columns": [
                        854,
                        "[teammates_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                846
            ],
            "min": [
                848
            ],
            "stddev": [
                856
            ],
            "stddev_pop": [
                858
            ],
            "stddev_samp": [
                860
            ],
            "sum": [
                864
            ],
            "var_pop": [
                868
            ],
            "var_samp": [
                870
            ],
            "variance": [
                872
            ],
            "__typename": [
                40
            ]
        },
        "teammates_aggregate_order_by": {
            "avg": [
                841
            ],
            "count": [
                661
            ],
            "max": [
                847
            ],
            "min": [
                849
            ],
            "stddev": [
                857
            ],
            "stddev_pop": [
                859
            ],
            "stddev_samp": [
                861
            ],
            "sum": [
                865
            ],
            "var_pop": [
                869
            ],
            "var_samp": [
                871
            ],
            "variance": [
                873
            ],
            "__typename": [
                40
            ]
        },
        "teammates_arr_rel_insert_input": {
            "data": [
                845
            ],
            "on_conflict": [
                851
            ],
            "__typename": [
                40
            ]
        },
        "teammates_avg_fields": {
            "id": [
                27
            ],
            "team_mate_id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "teammates_avg_order_by": {
            "id": [
                661
            ],
            "team_mate_id": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "teammates_bool_exp": {
            "_and": [
                842
            ],
            "_not": [
                842
            ],
            "_or": [
                842
            ],
            "created_at": [
                875
            ],
            "id": [
                62
            ],
            "team_mate_id": [
                32
            ],
            "teammate": [
                944
            ],
            "updated_at": [
                875
            ],
            "user": [
                944
            ],
            "user_id": [
                32
            ],
            "__typename": [
                40
            ]
        },
        "teammates_constraint": {},
        "teammates_inc_input": {
            "id": [
                61
            ],
            "team_mate_id": [
                31
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "teammates_insert_input": {
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "team_mate_id": [
                31
            ],
            "teammate": [
                953
            ],
            "updated_at": [
                874
            ],
            "user": [
                953
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "teammates_max_fields": {
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "team_mate_id": [
                31
            ],
            "updated_at": [
                874
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "teammates_max_order_by": {
            "created_at": [
                661
            ],
            "id": [
                661
            ],
            "team_mate_id": [
                661
            ],
            "updated_at": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "teammates_min_fields": {
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "team_mate_id": [
                31
            ],
            "updated_at": [
                874
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "teammates_min_order_by": {
            "created_at": [
                661
            ],
            "id": [
                661
            ],
            "team_mate_id": [
                661
            ],
            "updated_at": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "teammates_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                835
            ],
            "__typename": [
                40
            ]
        },
        "teammates_on_conflict": {
            "constraint": [
                843
            ],
            "update_columns": [
                866
            ],
            "where": [
                842
            ],
            "__typename": [
                40
            ]
        },
        "teammates_order_by": {
            "created_at": [
                661
            ],
            "id": [
                661
            ],
            "team_mate_id": [
                661
            ],
            "teammate": [
                955
            ],
            "updated_at": [
                661
            ],
            "user": [
                955
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "teammates_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "teammates_select_column": {},
        "teammates_set_input": {
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "team_mate_id": [
                31
            ],
            "updated_at": [
                874
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "teammates_stddev_fields": {
            "id": [
                27
            ],
            "team_mate_id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "teammates_stddev_order_by": {
            "id": [
                661
            ],
            "team_mate_id": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "teammates_stddev_pop_fields": {
            "id": [
                27
            ],
            "team_mate_id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "teammates_stddev_pop_order_by": {
            "id": [
                661
            ],
            "team_mate_id": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "teammates_stddev_samp_fields": {
            "id": [
                27
            ],
            "team_mate_id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "teammates_stddev_samp_order_by": {
            "id": [
                661
            ],
            "team_mate_id": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "teammates_stream_cursor_input": {
            "initial_value": [
                863
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "teammates_stream_cursor_value_input": {
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "team_mate_id": [
                31
            ],
            "updated_at": [
                874
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "teammates_sum_fields": {
            "id": [
                61
            ],
            "team_mate_id": [
                31
            ],
            "user_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "teammates_sum_order_by": {
            "id": [
                661
            ],
            "team_mate_id": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "teammates_update_column": {},
        "teammates_updates": {
            "_inc": [
                844
            ],
            "_set": [
                855
            ],
            "where": [
                842
            ],
            "__typename": [
                40
            ]
        },
        "teammates_var_pop_fields": {
            "id": [
                27
            ],
            "team_mate_id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "teammates_var_pop_order_by": {
            "id": [
                661
            ],
            "team_mate_id": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "teammates_var_samp_fields": {
            "id": [
                27
            ],
            "team_mate_id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "teammates_var_samp_order_by": {
            "id": [
                661
            ],
            "team_mate_id": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "teammates_variance_fields": {
            "id": [
                27
            ],
            "team_mate_id": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "teammates_variance_order_by": {
            "id": [
                661
            ],
            "team_mate_id": [
                661
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "timestamp": {},
        "timestamp_comparison_exp": {
            "_eq": [
                874
            ],
            "_gt": [
                874
            ],
            "_gte": [
                874
            ],
            "_in": [
                874
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                874
            ],
            "_lte": [
                874
            ],
            "_neq": [
                874
            ],
            "_nin": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                876
            ],
            "_gt": [
                876
            ],
            "_gte": [
                876
            ],
            "_in": [
                876
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                876
            ],
            "_lte": [
                876
            ],
            "_neq": [
                876
            ],
            "_nin": [
                876
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts": {
            "circle": [
                271
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "dts_created": [
                874
            ],
            "epoch": [
                491
            ],
            "epoch_id": [
                31
            ],
            "gift_private": [
                531
            ],
            "id": [
                61
            ],
            "note": [
                40
            ],
            "recipient": [
                937
            ],
            "recipient_address": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender": [
                937
            ],
            "sender_address": [
                40
            ],
            "sender_id": [
                61
            ],
            "tokens": [
                31
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_aggregate": {
            "aggregate": [
                880
            ],
            "nodes": [
                878
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_aggregate_fields": {
            "avg": [
                883
            ],
            "count": [
                31,
                {
                    "columns": [
                        897,
                        "[token_gifts_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                889
            ],
            "min": [
                891
            ],
            "stddev": [
                899
            ],
            "stddev_pop": [
                901
            ],
            "stddev_samp": [
                903
            ],
            "sum": [
                907
            ],
            "var_pop": [
                911
            ],
            "var_samp": [
                913
            ],
            "variance": [
                915
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_aggregate_order_by": {
            "avg": [
                884
            ],
            "count": [
                661
            ],
            "max": [
                890
            ],
            "min": [
                892
            ],
            "stddev": [
                900
            ],
            "stddev_pop": [
                902
            ],
            "stddev_samp": [
                904
            ],
            "sum": [
                908
            ],
            "var_pop": [
                912
            ],
            "var_samp": [
                914
            ],
            "variance": [
                916
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_arr_rel_insert_input": {
            "data": [
                888
            ],
            "on_conflict": [
                894
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_avg_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_avg_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_bool_exp": {
            "_and": [
                885
            ],
            "_not": [
                885
            ],
            "_or": [
                885
            ],
            "circle": [
                278
            ],
            "circle_id": [
                62
            ],
            "created_at": [
                875
            ],
            "dts_created": [
                875
            ],
            "epoch": [
                498
            ],
            "epoch_id": [
                32
            ],
            "gift_private": [
                535
            ],
            "id": [
                62
            ],
            "note": [
                41
            ],
            "recipient": [
                944
            ],
            "recipient_address": [
                41
            ],
            "recipient_id": [
                62
            ],
            "sender": [
                944
            ],
            "sender_address": [
                41
            ],
            "sender_id": [
                62
            ],
            "tokens": [
                32
            ],
            "updated_at": [
                875
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_constraint": {},
        "token_gifts_inc_input": {
            "circle_id": [
                61
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "recipient_id": [
                61
            ],
            "sender_id": [
                61
            ],
            "tokens": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_insert_input": {
            "circle": [
                287
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "dts_created": [
                874
            ],
            "epoch": [
                507
            ],
            "epoch_id": [
                31
            ],
            "gift_private": [
                541
            ],
            "id": [
                61
            ],
            "note": [
                40
            ],
            "recipient": [
                953
            ],
            "recipient_address": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender": [
                953
            ],
            "sender_address": [
                40
            ],
            "sender_id": [
                61
            ],
            "tokens": [
                31
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_max_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "dts_created": [
                874
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "note": [
                40
            ],
            "recipient_address": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender_address": [
                40
            ],
            "sender_id": [
                61
            ],
            "tokens": [
                31
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_max_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "dts_created": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "note": [
                661
            ],
            "recipient_address": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_address": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_min_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "dts_created": [
                874
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "note": [
                40
            ],
            "recipient_address": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender_address": [
                40
            ],
            "sender_id": [
                61
            ],
            "tokens": [
                31
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_min_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "dts_created": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "note": [
                661
            ],
            "recipient_address": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_address": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                878
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_on_conflict": {
            "constraint": [
                886
            ],
            "update_columns": [
                909
            ],
            "where": [
                885
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_order_by": {
            "circle": [
                289
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "dts_created": [
                661
            ],
            "epoch": [
                509
            ],
            "epoch_id": [
                661
            ],
            "gift_private": [
                542
            ],
            "id": [
                661
            ],
            "note": [
                661
            ],
            "recipient": [
                955
            ],
            "recipient_address": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender": [
                955
            ],
            "sender_address": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_select_column": {},
        "token_gifts_set_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "dts_created": [
                874
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "note": [
                40
            ],
            "recipient_address": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender_address": [
                40
            ],
            "sender_id": [
                61
            ],
            "tokens": [
                31
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_stddev_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_stddev_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_stddev_pop_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_stddev_samp_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_stream_cursor_input": {
            "initial_value": [
                906
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_stream_cursor_value_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "dts_created": [
                874
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "note": [
                40
            ],
            "recipient_address": [
                40
            ],
            "recipient_id": [
                61
            ],
            "sender_address": [
                40
            ],
            "sender_id": [
                61
            ],
            "tokens": [
                31
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_sum_fields": {
            "circle_id": [
                61
            ],
            "epoch_id": [
                31
            ],
            "id": [
                61
            ],
            "recipient_id": [
                61
            ],
            "sender_id": [
                61
            ],
            "tokens": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_sum_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_update_column": {},
        "token_gifts_updates": {
            "_inc": [
                887
            ],
            "_set": [
                898
            ],
            "where": [
                885
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_var_pop_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_var_pop_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_var_samp_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_var_samp_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_variance_fields": {
            "circle_id": [
                27
            ],
            "epoch_id": [
                27
            ],
            "id": [
                27
            ],
            "recipient_id": [
                27
            ],
            "sender_id": [
                27
            ],
            "tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "token_gifts_variance_order_by": {
            "circle_id": [
                661
            ],
            "epoch_id": [
                661
            ],
            "id": [
                661
            ],
            "recipient_id": [
                661
            ],
            "sender_id": [
                661
            ],
            "tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "user_private": {
            "circle": [
                271
            ],
            "circle_id": [
                61
            ],
            "fixed_payment_amount": [
                659
            ],
            "fixed_payment_token_type": [
                40
            ],
            "user": [
                937
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "user_private_aggregate": {
            "aggregate": [
                919
            ],
            "nodes": [
                917
            ],
            "__typename": [
                40
            ]
        },
        "user_private_aggregate_fields": {
            "avg": [
                920
            ],
            "count": [
                31,
                {
                    "columns": [
                        927,
                        "[user_private_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                923
            ],
            "min": [
                924
            ],
            "stddev": [
                928
            ],
            "stddev_pop": [
                929
            ],
            "stddev_samp": [
                930
            ],
            "sum": [
                933
            ],
            "var_pop": [
                934
            ],
            "var_samp": [
                935
            ],
            "variance": [
                936
            ],
            "__typename": [
                40
            ]
        },
        "user_private_avg_fields": {
            "circle_id": [
                27
            ],
            "fixed_payment_amount": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "user_private_bool_exp": {
            "_and": [
                921
            ],
            "_not": [
                921
            ],
            "_or": [
                921
            ],
            "circle": [
                278
            ],
            "circle_id": [
                62
            ],
            "fixed_payment_amount": [
                660
            ],
            "fixed_payment_token_type": [
                41
            ],
            "user": [
                944
            ],
            "user_id": [
                62
            ],
            "__typename": [
                40
            ]
        },
        "user_private_insert_input": {
            "circle": [
                287
            ],
            "circle_id": [
                61
            ],
            "fixed_payment_amount": [
                659
            ],
            "fixed_payment_token_type": [
                40
            ],
            "user": [
                953
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "user_private_max_fields": {
            "circle_id": [
                61
            ],
            "fixed_payment_amount": [
                659
            ],
            "fixed_payment_token_type": [
                40
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "user_private_min_fields": {
            "circle_id": [
                61
            ],
            "fixed_payment_amount": [
                659
            ],
            "fixed_payment_token_type": [
                40
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "user_private_obj_rel_insert_input": {
            "data": [
                922
            ],
            "__typename": [
                40
            ]
        },
        "user_private_order_by": {
            "circle": [
                289
            ],
            "circle_id": [
                661
            ],
            "fixed_payment_amount": [
                661
            ],
            "fixed_payment_token_type": [
                661
            ],
            "user": [
                955
            ],
            "user_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "user_private_select_column": {},
        "user_private_stddev_fields": {
            "circle_id": [
                27
            ],
            "fixed_payment_amount": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "user_private_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "fixed_payment_amount": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "user_private_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "fixed_payment_amount": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "user_private_stream_cursor_input": {
            "initial_value": [
                932
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "user_private_stream_cursor_value_input": {
            "circle_id": [
                61
            ],
            "fixed_payment_amount": [
                659
            ],
            "fixed_payment_token_type": [
                40
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "user_private_sum_fields": {
            "circle_id": [
                61
            ],
            "fixed_payment_amount": [
                659
            ],
            "user_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "user_private_var_pop_fields": {
            "circle_id": [
                27
            ],
            "fixed_payment_amount": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "user_private_var_samp_fields": {
            "circle_id": [
                27
            ],
            "fixed_payment_amount": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "user_private_variance_fields": {
            "circle_id": [
                27
            ],
            "fixed_payment_amount": [
                27
            ],
            "user_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "users": {
            "address": [
                40
            ],
            "bio": [
                40
            ],
            "burns": [
                63,
                {
                    "distinct_on": [
                        82,
                        "[burns_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        80,
                        "[burns_order_by!]"
                    ],
                    "where": [
                        70
                    ]
                }
            ],
            "burns_aggregate": [
                64,
                {
                    "distinct_on": [
                        82,
                        "[burns_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        80,
                        "[burns_order_by!]"
                    ],
                    "where": [
                        70
                    ]
                }
            ],
            "circle": [
                271
            ],
            "circle_api_keys": [
                102,
                {
                    "distinct_on": [
                        122,
                        "[circle_api_keys_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        120,
                        "[circle_api_keys_order_by!]"
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "circle_api_keys_aggregate": [
                103,
                {
                    "distinct_on": [
                        122,
                        "[circle_api_keys_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        120,
                        "[circle_api_keys_order_by!]"
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "circle_id": [
                61
            ],
            "contributions": [
                350,
                {
                    "distinct_on": [
                        369,
                        "[contributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        367,
                        "[contributions_order_by!]"
                    ],
                    "where": [
                        357
                    ]
                }
            ],
            "contributions_aggregate": [
                351,
                {
                    "distinct_on": [
                        369,
                        "[contributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        367,
                        "[contributions_order_by!]"
                    ],
                    "where": [
                        357
                    ]
                }
            ],
            "created_at": [
                874
            ],
            "deleted_at": [
                874
            ],
            "entrance": [
                40
            ],
            "epoch_first_visit": [
                6
            ],
            "fixed_non_receiver": [
                6
            ],
            "fixed_payment_amount": [
                659
            ],
            "give_token_received": [
                31
            ],
            "give_token_remaining": [
                31
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "non_giver": [
                6
            ],
            "non_receiver": [
                6
            ],
            "pending_received_gifts": [
                714,
                {
                    "distinct_on": [
                        733,
                        "[pending_token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        731,
                        "[pending_token_gifts_order_by!]"
                    ],
                    "where": [
                        721
                    ]
                }
            ],
            "pending_received_gifts_aggregate": [
                715,
                {
                    "distinct_on": [
                        733,
                        "[pending_token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        731,
                        "[pending_token_gifts_order_by!]"
                    ],
                    "where": [
                        721
                    ]
                }
            ],
            "pending_sent_gifts": [
                714,
                {
                    "distinct_on": [
                        733,
                        "[pending_token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        731,
                        "[pending_token_gifts_order_by!]"
                    ],
                    "where": [
                        721
                    ]
                }
            ],
            "pending_sent_gifts_aggregate": [
                715,
                {
                    "distinct_on": [
                        733,
                        "[pending_token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        731,
                        "[pending_token_gifts_order_by!]"
                    ],
                    "where": [
                        721
                    ]
                }
            ],
            "profile": [
                807
            ],
            "received_gifts": [
                878,
                {
                    "distinct_on": [
                        897,
                        "[token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        895,
                        "[token_gifts_order_by!]"
                    ],
                    "where": [
                        885
                    ]
                }
            ],
            "received_gifts_aggregate": [
                879,
                {
                    "distinct_on": [
                        897,
                        "[token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        895,
                        "[token_gifts_order_by!]"
                    ],
                    "where": [
                        885
                    ]
                }
            ],
            "role": [
                31
            ],
            "sent_gifts": [
                878,
                {
                    "distinct_on": [
                        897,
                        "[token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        895,
                        "[token_gifts_order_by!]"
                    ],
                    "where": [
                        885
                    ]
                }
            ],
            "sent_gifts_aggregate": [
                879,
                {
                    "distinct_on": [
                        897,
                        "[token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        895,
                        "[token_gifts_order_by!]"
                    ],
                    "where": [
                        885
                    ]
                }
            ],
            "starting_tokens": [
                31
            ],
            "teammates": [
                835,
                {
                    "distinct_on": [
                        854,
                        "[teammates_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        852,
                        "[teammates_order_by!]"
                    ],
                    "where": [
                        842
                    ]
                }
            ],
            "teammates_aggregate": [
                836,
                {
                    "distinct_on": [
                        854,
                        "[teammates_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        852,
                        "[teammates_order_by!]"
                    ],
                    "where": [
                        842
                    ]
                }
            ],
            "updated_at": [
                874
            ],
            "user_private": [
                917
            ],
            "vouches": [
                1079,
                {
                    "distinct_on": [
                        1098,
                        "[vouches_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1096,
                        "[vouches_order_by!]"
                    ],
                    "where": [
                        1086
                    ]
                }
            ],
            "vouches_aggregate": [
                1080,
                {
                    "distinct_on": [
                        1098,
                        "[vouches_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1096,
                        "[vouches_order_by!]"
                    ],
                    "where": [
                        1086
                    ]
                }
            ],
            "__typename": [
                40
            ]
        },
        "users_aggregate": {
            "aggregate": [
                939
            ],
            "nodes": [
                937
            ],
            "__typename": [
                40
            ]
        },
        "users_aggregate_fields": {
            "avg": [
                942
            ],
            "count": [
                31,
                {
                    "columns": [
                        957,
                        "[users_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                948
            ],
            "min": [
                950
            ],
            "stddev": [
                959
            ],
            "stddev_pop": [
                961
            ],
            "stddev_samp": [
                963
            ],
            "sum": [
                967
            ],
            "var_pop": [
                971
            ],
            "var_samp": [
                973
            ],
            "variance": [
                975
            ],
            "__typename": [
                40
            ]
        },
        "users_aggregate_order_by": {
            "avg": [
                943
            ],
            "count": [
                661
            ],
            "max": [
                949
            ],
            "min": [
                951
            ],
            "stddev": [
                960
            ],
            "stddev_pop": [
                962
            ],
            "stddev_samp": [
                964
            ],
            "sum": [
                968
            ],
            "var_pop": [
                972
            ],
            "var_samp": [
                974
            ],
            "variance": [
                976
            ],
            "__typename": [
                40
            ]
        },
        "users_arr_rel_insert_input": {
            "data": [
                947
            ],
            "on_conflict": [
                954
            ],
            "__typename": [
                40
            ]
        },
        "users_avg_fields": {
            "circle_id": [
                27
            ],
            "fixed_payment_amount": [
                27
            ],
            "give_token_received": [
                27
            ],
            "give_token_remaining": [
                27
            ],
            "id": [
                27
            ],
            "role": [
                27
            ],
            "starting_tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "users_avg_order_by": {
            "circle_id": [
                661
            ],
            "fixed_payment_amount": [
                661
            ],
            "give_token_received": [
                661
            ],
            "give_token_remaining": [
                661
            ],
            "id": [
                661
            ],
            "role": [
                661
            ],
            "starting_tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "users_bool_exp": {
            "_and": [
                944
            ],
            "_not": [
                944
            ],
            "_or": [
                944
            ],
            "address": [
                41
            ],
            "bio": [
                41
            ],
            "burns": [
                70
            ],
            "circle": [
                278
            ],
            "circle_api_keys": [
                109
            ],
            "circle_id": [
                62
            ],
            "contributions": [
                357
            ],
            "created_at": [
                875
            ],
            "deleted_at": [
                875
            ],
            "entrance": [
                41
            ],
            "epoch_first_visit": [
                7
            ],
            "fixed_non_receiver": [
                7
            ],
            "fixed_payment_amount": [
                660
            ],
            "give_token_received": [
                32
            ],
            "give_token_remaining": [
                32
            ],
            "id": [
                62
            ],
            "name": [
                41
            ],
            "non_giver": [
                7
            ],
            "non_receiver": [
                7
            ],
            "pending_received_gifts": [
                721
            ],
            "pending_sent_gifts": [
                721
            ],
            "profile": [
                811
            ],
            "received_gifts": [
                885
            ],
            "role": [
                32
            ],
            "sent_gifts": [
                885
            ],
            "starting_tokens": [
                32
            ],
            "teammates": [
                842
            ],
            "updated_at": [
                875
            ],
            "user_private": [
                921
            ],
            "vouches": [
                1086
            ],
            "__typename": [
                40
            ]
        },
        "users_constraint": {},
        "users_inc_input": {
            "circle_id": [
                61
            ],
            "fixed_payment_amount": [
                659
            ],
            "give_token_received": [
                31
            ],
            "give_token_remaining": [
                31
            ],
            "id": [
                61
            ],
            "role": [
                31
            ],
            "starting_tokens": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "users_insert_input": {
            "address": [
                40
            ],
            "bio": [
                40
            ],
            "burns": [
                67
            ],
            "circle": [
                287
            ],
            "circle_api_keys": [
                106
            ],
            "circle_id": [
                61
            ],
            "contributions": [
                354
            ],
            "created_at": [
                874
            ],
            "deleted_at": [
                874
            ],
            "entrance": [
                40
            ],
            "epoch_first_visit": [
                6
            ],
            "fixed_non_receiver": [
                6
            ],
            "fixed_payment_amount": [
                659
            ],
            "give_token_received": [
                31
            ],
            "give_token_remaining": [
                31
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "non_giver": [
                6
            ],
            "non_receiver": [
                6
            ],
            "pending_received_gifts": [
                718
            ],
            "pending_sent_gifts": [
                718
            ],
            "profile": [
                818
            ],
            "received_gifts": [
                882
            ],
            "role": [
                31
            ],
            "sent_gifts": [
                882
            ],
            "starting_tokens": [
                31
            ],
            "teammates": [
                839
            ],
            "updated_at": [
                874
            ],
            "user_private": [
                925
            ],
            "vouches": [
                1083
            ],
            "__typename": [
                40
            ]
        },
        "users_max_fields": {
            "address": [
                40
            ],
            "bio": [
                40
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "deleted_at": [
                874
            ],
            "entrance": [
                40
            ],
            "fixed_payment_amount": [
                659
            ],
            "give_token_received": [
                31
            ],
            "give_token_remaining": [
                31
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "role": [
                31
            ],
            "starting_tokens": [
                31
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "users_max_order_by": {
            "address": [
                661
            ],
            "bio": [
                661
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "deleted_at": [
                661
            ],
            "entrance": [
                661
            ],
            "fixed_payment_amount": [
                661
            ],
            "give_token_received": [
                661
            ],
            "give_token_remaining": [
                661
            ],
            "id": [
                661
            ],
            "name": [
                661
            ],
            "role": [
                661
            ],
            "starting_tokens": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "users_min_fields": {
            "address": [
                40
            ],
            "bio": [
                40
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "deleted_at": [
                874
            ],
            "entrance": [
                40
            ],
            "fixed_payment_amount": [
                659
            ],
            "give_token_received": [
                31
            ],
            "give_token_remaining": [
                31
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "role": [
                31
            ],
            "starting_tokens": [
                31
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "users_min_order_by": {
            "address": [
                661
            ],
            "bio": [
                661
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "deleted_at": [
                661
            ],
            "entrance": [
                661
            ],
            "fixed_payment_amount": [
                661
            ],
            "give_token_received": [
                661
            ],
            "give_token_remaining": [
                661
            ],
            "id": [
                661
            ],
            "name": [
                661
            ],
            "role": [
                661
            ],
            "starting_tokens": [
                661
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "users_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                937
            ],
            "__typename": [
                40
            ]
        },
        "users_obj_rel_insert_input": {
            "data": [
                947
            ],
            "on_conflict": [
                954
            ],
            "__typename": [
                40
            ]
        },
        "users_on_conflict": {
            "constraint": [
                945
            ],
            "update_columns": [
                969
            ],
            "where": [
                944
            ],
            "__typename": [
                40
            ]
        },
        "users_order_by": {
            "address": [
                661
            ],
            "bio": [
                661
            ],
            "burns_aggregate": [
                66
            ],
            "circle": [
                289
            ],
            "circle_api_keys_aggregate": [
                105
            ],
            "circle_id": [
                661
            ],
            "contributions_aggregate": [
                353
            ],
            "created_at": [
                661
            ],
            "deleted_at": [
                661
            ],
            "entrance": [
                661
            ],
            "epoch_first_visit": [
                661
            ],
            "fixed_non_receiver": [
                661
            ],
            "fixed_payment_amount": [
                661
            ],
            "give_token_received": [
                661
            ],
            "give_token_remaining": [
                661
            ],
            "id": [
                661
            ],
            "name": [
                661
            ],
            "non_giver": [
                661
            ],
            "non_receiver": [
                661
            ],
            "pending_received_gifts_aggregate": [
                717
            ],
            "pending_sent_gifts_aggregate": [
                717
            ],
            "profile": [
                820
            ],
            "received_gifts_aggregate": [
                881
            ],
            "role": [
                661
            ],
            "sent_gifts_aggregate": [
                881
            ],
            "starting_tokens": [
                661
            ],
            "teammates_aggregate": [
                838
            ],
            "updated_at": [
                661
            ],
            "user_private": [
                926
            ],
            "vouches_aggregate": [
                1082
            ],
            "__typename": [
                40
            ]
        },
        "users_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "users_select_column": {},
        "users_set_input": {
            "address": [
                40
            ],
            "bio": [
                40
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "deleted_at": [
                874
            ],
            "entrance": [
                40
            ],
            "epoch_first_visit": [
                6
            ],
            "fixed_non_receiver": [
                6
            ],
            "fixed_payment_amount": [
                659
            ],
            "give_token_received": [
                31
            ],
            "give_token_remaining": [
                31
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "non_giver": [
                6
            ],
            "non_receiver": [
                6
            ],
            "role": [
                31
            ],
            "starting_tokens": [
                31
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "users_stddev_fields": {
            "circle_id": [
                27
            ],
            "fixed_payment_amount": [
                27
            ],
            "give_token_received": [
                27
            ],
            "give_token_remaining": [
                27
            ],
            "id": [
                27
            ],
            "role": [
                27
            ],
            "starting_tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "users_stddev_order_by": {
            "circle_id": [
                661
            ],
            "fixed_payment_amount": [
                661
            ],
            "give_token_received": [
                661
            ],
            "give_token_remaining": [
                661
            ],
            "id": [
                661
            ],
            "role": [
                661
            ],
            "starting_tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "users_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "fixed_payment_amount": [
                27
            ],
            "give_token_received": [
                27
            ],
            "give_token_remaining": [
                27
            ],
            "id": [
                27
            ],
            "role": [
                27
            ],
            "starting_tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "users_stddev_pop_order_by": {
            "circle_id": [
                661
            ],
            "fixed_payment_amount": [
                661
            ],
            "give_token_received": [
                661
            ],
            "give_token_remaining": [
                661
            ],
            "id": [
                661
            ],
            "role": [
                661
            ],
            "starting_tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "users_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "fixed_payment_amount": [
                27
            ],
            "give_token_received": [
                27
            ],
            "give_token_remaining": [
                27
            ],
            "id": [
                27
            ],
            "role": [
                27
            ],
            "starting_tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "users_stddev_samp_order_by": {
            "circle_id": [
                661
            ],
            "fixed_payment_amount": [
                661
            ],
            "give_token_received": [
                661
            ],
            "give_token_remaining": [
                661
            ],
            "id": [
                661
            ],
            "role": [
                661
            ],
            "starting_tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "users_stream_cursor_input": {
            "initial_value": [
                966
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "users_stream_cursor_value_input": {
            "address": [
                40
            ],
            "bio": [
                40
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "deleted_at": [
                874
            ],
            "entrance": [
                40
            ],
            "epoch_first_visit": [
                6
            ],
            "fixed_non_receiver": [
                6
            ],
            "fixed_payment_amount": [
                659
            ],
            "give_token_received": [
                31
            ],
            "give_token_remaining": [
                31
            ],
            "id": [
                61
            ],
            "name": [
                40
            ],
            "non_giver": [
                6
            ],
            "non_receiver": [
                6
            ],
            "role": [
                31
            ],
            "starting_tokens": [
                31
            ],
            "updated_at": [
                874
            ],
            "__typename": [
                40
            ]
        },
        "users_sum_fields": {
            "circle_id": [
                61
            ],
            "fixed_payment_amount": [
                659
            ],
            "give_token_received": [
                31
            ],
            "give_token_remaining": [
                31
            ],
            "id": [
                61
            ],
            "role": [
                31
            ],
            "starting_tokens": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "users_sum_order_by": {
            "circle_id": [
                661
            ],
            "fixed_payment_amount": [
                661
            ],
            "give_token_received": [
                661
            ],
            "give_token_remaining": [
                661
            ],
            "id": [
                661
            ],
            "role": [
                661
            ],
            "starting_tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "users_update_column": {},
        "users_updates": {
            "_inc": [
                946
            ],
            "_set": [
                958
            ],
            "where": [
                944
            ],
            "__typename": [
                40
            ]
        },
        "users_var_pop_fields": {
            "circle_id": [
                27
            ],
            "fixed_payment_amount": [
                27
            ],
            "give_token_received": [
                27
            ],
            "give_token_remaining": [
                27
            ],
            "id": [
                27
            ],
            "role": [
                27
            ],
            "starting_tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "users_var_pop_order_by": {
            "circle_id": [
                661
            ],
            "fixed_payment_amount": [
                661
            ],
            "give_token_received": [
                661
            ],
            "give_token_remaining": [
                661
            ],
            "id": [
                661
            ],
            "role": [
                661
            ],
            "starting_tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "users_var_samp_fields": {
            "circle_id": [
                27
            ],
            "fixed_payment_amount": [
                27
            ],
            "give_token_received": [
                27
            ],
            "give_token_remaining": [
                27
            ],
            "id": [
                27
            ],
            "role": [
                27
            ],
            "starting_tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "users_var_samp_order_by": {
            "circle_id": [
                661
            ],
            "fixed_payment_amount": [
                661
            ],
            "give_token_received": [
                661
            ],
            "give_token_remaining": [
                661
            ],
            "id": [
                661
            ],
            "role": [
                661
            ],
            "starting_tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "users_variance_fields": {
            "circle_id": [
                27
            ],
            "fixed_payment_amount": [
                27
            ],
            "give_token_received": [
                27
            ],
            "give_token_remaining": [
                27
            ],
            "id": [
                27
            ],
            "role": [
                27
            ],
            "starting_tokens": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "users_variance_order_by": {
            "circle_id": [
                661
            ],
            "fixed_payment_amount": [
                661
            ],
            "give_token_received": [
                661
            ],
            "give_token_remaining": [
                661
            ],
            "id": [
                661
            ],
            "role": [
                661
            ],
            "starting_tokens": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                977
            ],
            "_gt": [
                977
            ],
            "_gte": [
                977
            ],
            "_in": [
                977
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                977
            ],
            "_lte": [
                977
            ],
            "_neq": [
                977
            ],
            "_nin": [
                977
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions": {
            "circle": [
                271
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution": [
                446
            ],
            "distribution_id": [
                61
            ],
            "id": [
                61
            ],
            "profile": [
                807
            ],
            "tx_hash": [
                40
            ],
            "tx_type": [
                1023
            ],
            "updated_at": [
                874
            ],
            "vault": [
                1039
            ],
            "vault_id": [
                61
            ],
            "vault_tx_type": [
                1018
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_aggregate": {
            "aggregate": [
                981
            ],
            "nodes": [
                979
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_aggregate_fields": {
            "avg": [
                984
            ],
            "count": [
                31,
                {
                    "columns": [
                        998,
                        "[vault_transactions_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                990
            ],
            "min": [
                992
            ],
            "stddev": [
                1000
            ],
            "stddev_pop": [
                1002
            ],
            "stddev_samp": [
                1004
            ],
            "sum": [
                1008
            ],
            "var_pop": [
                1012
            ],
            "var_samp": [
                1014
            ],
            "variance": [
                1016
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_aggregate_order_by": {
            "avg": [
                985
            ],
            "count": [
                661
            ],
            "max": [
                991
            ],
            "min": [
                993
            ],
            "stddev": [
                1001
            ],
            "stddev_pop": [
                1003
            ],
            "stddev_samp": [
                1005
            ],
            "sum": [
                1009
            ],
            "var_pop": [
                1013
            ],
            "var_samp": [
                1015
            ],
            "variance": [
                1017
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_arr_rel_insert_input": {
            "data": [
                989
            ],
            "on_conflict": [
                995
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_avg_fields": {
            "circle_id": [
                27
            ],
            "created_by": [
                27
            ],
            "distribution_id": [
                27
            ],
            "id": [
                27
            ],
            "vault_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_avg_order_by": {
            "circle_id": [
                661
            ],
            "created_by": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_bool_exp": {
            "_and": [
                986
            ],
            "_not": [
                986
            ],
            "_or": [
                986
            ],
            "circle": [
                278
            ],
            "circle_id": [
                62
            ],
            "created_at": [
                875
            ],
            "created_by": [
                62
            ],
            "distribution": [
                454
            ],
            "distribution_id": [
                62
            ],
            "id": [
                62
            ],
            "profile": [
                811
            ],
            "tx_hash": [
                41
            ],
            "tx_type": [
                1024
            ],
            "updated_at": [
                875
            ],
            "vault": [
                1046
            ],
            "vault_id": [
                62
            ],
            "vault_tx_type": [
                1021
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_constraint": {},
        "vault_transactions_inc_input": {
            "circle_id": [
                61
            ],
            "created_by": [
                61
            ],
            "distribution_id": [
                61
            ],
            "id": [
                61
            ],
            "vault_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_insert_input": {
            "circle": [
                287
            ],
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution": [
                466
            ],
            "distribution_id": [
                61
            ],
            "id": [
                61
            ],
            "profile": [
                818
            ],
            "tx_hash": [
                40
            ],
            "tx_type": [
                1023
            ],
            "updated_at": [
                874
            ],
            "vault": [
                1055
            ],
            "vault_id": [
                61
            ],
            "vault_tx_type": [
                1029
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_max_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution_id": [
                61
            ],
            "id": [
                61
            ],
            "tx_hash": [
                40
            ],
            "updated_at": [
                874
            ],
            "vault_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_max_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "created_by": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "tx_hash": [
                661
            ],
            "updated_at": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_min_fields": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution_id": [
                61
            ],
            "id": [
                61
            ],
            "tx_hash": [
                40
            ],
            "updated_at": [
                874
            ],
            "vault_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_min_order_by": {
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "created_by": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "tx_hash": [
                661
            ],
            "updated_at": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                979
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_on_conflict": {
            "constraint": [
                987
            ],
            "update_columns": [
                1010
            ],
            "where": [
                986
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_order_by": {
            "circle": [
                289
            ],
            "circle_id": [
                661
            ],
            "created_at": [
                661
            ],
            "created_by": [
                661
            ],
            "distribution": [
                468
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "profile": [
                820
            ],
            "tx_hash": [
                661
            ],
            "tx_type": [
                661
            ],
            "updated_at": [
                661
            ],
            "vault": [
                1057
            ],
            "vault_id": [
                661
            ],
            "vault_tx_type": [
                1031
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_select_column": {},
        "vault_transactions_set_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution_id": [
                61
            ],
            "id": [
                61
            ],
            "tx_hash": [
                40
            ],
            "tx_type": [
                1023
            ],
            "updated_at": [
                874
            ],
            "vault_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_stddev_fields": {
            "circle_id": [
                27
            ],
            "created_by": [
                27
            ],
            "distribution_id": [
                27
            ],
            "id": [
                27
            ],
            "vault_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_stddev_order_by": {
            "circle_id": [
                661
            ],
            "created_by": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_stddev_pop_fields": {
            "circle_id": [
                27
            ],
            "created_by": [
                27
            ],
            "distribution_id": [
                27
            ],
            "id": [
                27
            ],
            "vault_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_stddev_pop_order_by": {
            "circle_id": [
                661
            ],
            "created_by": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_stddev_samp_fields": {
            "circle_id": [
                27
            ],
            "created_by": [
                27
            ],
            "distribution_id": [
                27
            ],
            "id": [
                27
            ],
            "vault_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_stddev_samp_order_by": {
            "circle_id": [
                661
            ],
            "created_by": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_stream_cursor_input": {
            "initial_value": [
                1007
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_stream_cursor_value_input": {
            "circle_id": [
                61
            ],
            "created_at": [
                874
            ],
            "created_by": [
                61
            ],
            "distribution_id": [
                61
            ],
            "id": [
                61
            ],
            "tx_hash": [
                40
            ],
            "tx_type": [
                1023
            ],
            "updated_at": [
                874
            ],
            "vault_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_sum_fields": {
            "circle_id": [
                61
            ],
            "created_by": [
                61
            ],
            "distribution_id": [
                61
            ],
            "id": [
                61
            ],
            "vault_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_sum_order_by": {
            "circle_id": [
                661
            ],
            "created_by": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_update_column": {},
        "vault_transactions_updates": {
            "_inc": [
                988
            ],
            "_set": [
                999
            ],
            "where": [
                986
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_var_pop_fields": {
            "circle_id": [
                27
            ],
            "created_by": [
                27
            ],
            "distribution_id": [
                27
            ],
            "id": [
                27
            ],
            "vault_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_var_pop_order_by": {
            "circle_id": [
                661
            ],
            "created_by": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_var_samp_fields": {
            "circle_id": [
                27
            ],
            "created_by": [
                27
            ],
            "distribution_id": [
                27
            ],
            "id": [
                27
            ],
            "vault_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_var_samp_order_by": {
            "circle_id": [
                661
            ],
            "created_by": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_variance_fields": {
            "circle_id": [
                27
            ],
            "created_by": [
                27
            ],
            "distribution_id": [
                27
            ],
            "id": [
                27
            ],
            "vault_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vault_transactions_variance_order_by": {
            "circle_id": [
                661
            ],
            "created_by": [
                661
            ],
            "distribution_id": [
                661
            ],
            "id": [
                661
            ],
            "vault_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types": {
            "comment": [
                40
            ],
            "value": [
                40
            ],
            "vault_transactions": [
                979,
                {
                    "distinct_on": [
                        998,
                        "[vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        996,
                        "[vault_transactions_order_by!]"
                    ],
                    "where": [
                        986
                    ]
                }
            ],
            "vault_transactions_aggregate": [
                980,
                {
                    "distinct_on": [
                        998,
                        "[vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        996,
                        "[vault_transactions_order_by!]"
                    ],
                    "where": [
                        986
                    ]
                }
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types_aggregate": {
            "aggregate": [
                1020
            ],
            "nodes": [
                1018
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types_aggregate_fields": {
            "count": [
                31,
                {
                    "columns": [
                        1033,
                        "[vault_tx_types_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                1026
            ],
            "min": [
                1027
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types_bool_exp": {
            "_and": [
                1021
            ],
            "_not": [
                1021
            ],
            "_or": [
                1021
            ],
            "comment": [
                41
            ],
            "value": [
                41
            ],
            "vault_transactions": [
                986
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types_constraint": {},
        "vault_tx_types_enum": {},
        "vault_tx_types_enum_comparison_exp": {
            "_eq": [
                1023
            ],
            "_in": [
                1023
            ],
            "_is_null": [
                6
            ],
            "_neq": [
                1023
            ],
            "_nin": [
                1023
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types_insert_input": {
            "comment": [
                40
            ],
            "value": [
                40
            ],
            "vault_transactions": [
                983
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types_max_fields": {
            "comment": [
                40
            ],
            "value": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types_min_fields": {
            "comment": [
                40
            ],
            "value": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                1018
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types_obj_rel_insert_input": {
            "data": [
                1025
            ],
            "on_conflict": [
                1030
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types_on_conflict": {
            "constraint": [
                1022
            ],
            "update_columns": [
                1037
            ],
            "where": [
                1021
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types_order_by": {
            "comment": [
                661
            ],
            "value": [
                661
            ],
            "vault_transactions_aggregate": [
                982
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types_pk_columns_input": {
            "value": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types_select_column": {},
        "vault_tx_types_set_input": {
            "comment": [
                40
            ],
            "value": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types_stream_cursor_input": {
            "initial_value": [
                1036
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types_stream_cursor_value_input": {
            "comment": [
                40
            ],
            "value": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "vault_tx_types_update_column": {},
        "vault_tx_types_updates": {
            "_set": [
                1034
            ],
            "where": [
                1021
            ],
            "__typename": [
                40
            ]
        },
        "vaults": {
            "chain_id": [
                31
            ],
            "created_at": [
                876
            ],
            "created_by": [
                61
            ],
            "decimals": [
                31
            ],
            "deployment_block": [
                61
            ],
            "distributions": [
                446,
                {
                    "distinct_on": [
                        471,
                        "[distributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        468,
                        "[distributions_order_by!]"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "distributions_aggregate": [
                447,
                {
                    "distinct_on": [
                        471,
                        "[distributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        468,
                        "[distributions_order_by!]"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "id": [
                61
            ],
            "org_id": [
                61
            ],
            "organization": [
                662
            ],
            "profile": [
                807
            ],
            "simple_token_address": [
                40
            ],
            "symbol": [
                40
            ],
            "token_address": [
                40
            ],
            "updated_at": [
                876
            ],
            "vault_address": [
                40
            ],
            "vault_transactions": [
                979,
                {
                    "distinct_on": [
                        998,
                        "[vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        996,
                        "[vault_transactions_order_by!]"
                    ],
                    "where": [
                        986
                    ]
                }
            ],
            "vault_transactions_aggregate": [
                980,
                {
                    "distinct_on": [
                        998,
                        "[vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        996,
                        "[vault_transactions_order_by!]"
                    ],
                    "where": [
                        986
                    ]
                }
            ],
            "__typename": [
                40
            ]
        },
        "vaults_aggregate": {
            "aggregate": [
                1041
            ],
            "nodes": [
                1039
            ],
            "__typename": [
                40
            ]
        },
        "vaults_aggregate_fields": {
            "avg": [
                1044
            ],
            "count": [
                31,
                {
                    "columns": [
                        1059,
                        "[vaults_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                1050
            ],
            "min": [
                1052
            ],
            "stddev": [
                1061
            ],
            "stddev_pop": [
                1063
            ],
            "stddev_samp": [
                1065
            ],
            "sum": [
                1069
            ],
            "var_pop": [
                1073
            ],
            "var_samp": [
                1075
            ],
            "variance": [
                1077
            ],
            "__typename": [
                40
            ]
        },
        "vaults_aggregate_order_by": {
            "avg": [
                1045
            ],
            "count": [
                661
            ],
            "max": [
                1051
            ],
            "min": [
                1053
            ],
            "stddev": [
                1062
            ],
            "stddev_pop": [
                1064
            ],
            "stddev_samp": [
                1066
            ],
            "sum": [
                1070
            ],
            "var_pop": [
                1074
            ],
            "var_samp": [
                1076
            ],
            "variance": [
                1078
            ],
            "__typename": [
                40
            ]
        },
        "vaults_arr_rel_insert_input": {
            "data": [
                1049
            ],
            "on_conflict": [
                1056
            ],
            "__typename": [
                40
            ]
        },
        "vaults_avg_fields": {
            "chain_id": [
                27
            ],
            "created_by": [
                27
            ],
            "decimals": [
                27
            ],
            "deployment_block": [
                27
            ],
            "id": [
                27
            ],
            "org_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vaults_avg_order_by": {
            "chain_id": [
                661
            ],
            "created_by": [
                661
            ],
            "decimals": [
                661
            ],
            "deployment_block": [
                661
            ],
            "id": [
                661
            ],
            "org_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vaults_bool_exp": {
            "_and": [
                1046
            ],
            "_not": [
                1046
            ],
            "_or": [
                1046
            ],
            "chain_id": [
                32
            ],
            "created_at": [
                877
            ],
            "created_by": [
                62
            ],
            "decimals": [
                32
            ],
            "deployment_block": [
                62
            ],
            "distributions": [
                454
            ],
            "id": [
                62
            ],
            "org_id": [
                62
            ],
            "organization": [
                666
            ],
            "profile": [
                811
            ],
            "simple_token_address": [
                41
            ],
            "symbol": [
                41
            ],
            "token_address": [
                41
            ],
            "updated_at": [
                877
            ],
            "vault_address": [
                41
            ],
            "vault_transactions": [
                986
            ],
            "__typename": [
                40
            ]
        },
        "vaults_constraint": {},
        "vaults_inc_input": {
            "chain_id": [
                31
            ],
            "created_by": [
                61
            ],
            "decimals": [
                31
            ],
            "deployment_block": [
                61
            ],
            "id": [
                61
            ],
            "org_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "vaults_insert_input": {
            "chain_id": [
                31
            ],
            "created_at": [
                876
            ],
            "created_by": [
                61
            ],
            "decimals": [
                31
            ],
            "deployment_block": [
                61
            ],
            "distributions": [
                451
            ],
            "id": [
                61
            ],
            "org_id": [
                61
            ],
            "organization": [
                673
            ],
            "profile": [
                818
            ],
            "simple_token_address": [
                40
            ],
            "symbol": [
                40
            ],
            "token_address": [
                40
            ],
            "updated_at": [
                876
            ],
            "vault_address": [
                40
            ],
            "vault_transactions": [
                983
            ],
            "__typename": [
                40
            ]
        },
        "vaults_max_fields": {
            "chain_id": [
                31
            ],
            "created_at": [
                876
            ],
            "created_by": [
                61
            ],
            "decimals": [
                31
            ],
            "deployment_block": [
                61
            ],
            "id": [
                61
            ],
            "org_id": [
                61
            ],
            "simple_token_address": [
                40
            ],
            "symbol": [
                40
            ],
            "token_address": [
                40
            ],
            "updated_at": [
                876
            ],
            "vault_address": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "vaults_max_order_by": {
            "chain_id": [
                661
            ],
            "created_at": [
                661
            ],
            "created_by": [
                661
            ],
            "decimals": [
                661
            ],
            "deployment_block": [
                661
            ],
            "id": [
                661
            ],
            "org_id": [
                661
            ],
            "simple_token_address": [
                661
            ],
            "symbol": [
                661
            ],
            "token_address": [
                661
            ],
            "updated_at": [
                661
            ],
            "vault_address": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vaults_min_fields": {
            "chain_id": [
                31
            ],
            "created_at": [
                876
            ],
            "created_by": [
                61
            ],
            "decimals": [
                31
            ],
            "deployment_block": [
                61
            ],
            "id": [
                61
            ],
            "org_id": [
                61
            ],
            "simple_token_address": [
                40
            ],
            "symbol": [
                40
            ],
            "token_address": [
                40
            ],
            "updated_at": [
                876
            ],
            "vault_address": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "vaults_min_order_by": {
            "chain_id": [
                661
            ],
            "created_at": [
                661
            ],
            "created_by": [
                661
            ],
            "decimals": [
                661
            ],
            "deployment_block": [
                661
            ],
            "id": [
                661
            ],
            "org_id": [
                661
            ],
            "simple_token_address": [
                661
            ],
            "symbol": [
                661
            ],
            "token_address": [
                661
            ],
            "updated_at": [
                661
            ],
            "vault_address": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vaults_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                1039
            ],
            "__typename": [
                40
            ]
        },
        "vaults_obj_rel_insert_input": {
            "data": [
                1049
            ],
            "on_conflict": [
                1056
            ],
            "__typename": [
                40
            ]
        },
        "vaults_on_conflict": {
            "constraint": [
                1047
            ],
            "update_columns": [
                1071
            ],
            "where": [
                1046
            ],
            "__typename": [
                40
            ]
        },
        "vaults_order_by": {
            "chain_id": [
                661
            ],
            "created_at": [
                661
            ],
            "created_by": [
                661
            ],
            "decimals": [
                661
            ],
            "deployment_block": [
                661
            ],
            "distributions_aggregate": [
                449
            ],
            "id": [
                661
            ],
            "org_id": [
                661
            ],
            "organization": [
                675
            ],
            "profile": [
                820
            ],
            "simple_token_address": [
                661
            ],
            "symbol": [
                661
            ],
            "token_address": [
                661
            ],
            "updated_at": [
                661
            ],
            "vault_address": [
                661
            ],
            "vault_transactions_aggregate": [
                982
            ],
            "__typename": [
                40
            ]
        },
        "vaults_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "vaults_select_column": {},
        "vaults_set_input": {
            "chain_id": [
                31
            ],
            "created_at": [
                876
            ],
            "created_by": [
                61
            ],
            "decimals": [
                31
            ],
            "deployment_block": [
                61
            ],
            "id": [
                61
            ],
            "org_id": [
                61
            ],
            "simple_token_address": [
                40
            ],
            "symbol": [
                40
            ],
            "token_address": [
                40
            ],
            "updated_at": [
                876
            ],
            "vault_address": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "vaults_stddev_fields": {
            "chain_id": [
                27
            ],
            "created_by": [
                27
            ],
            "decimals": [
                27
            ],
            "deployment_block": [
                27
            ],
            "id": [
                27
            ],
            "org_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vaults_stddev_order_by": {
            "chain_id": [
                661
            ],
            "created_by": [
                661
            ],
            "decimals": [
                661
            ],
            "deployment_block": [
                661
            ],
            "id": [
                661
            ],
            "org_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vaults_stddev_pop_fields": {
            "chain_id": [
                27
            ],
            "created_by": [
                27
            ],
            "decimals": [
                27
            ],
            "deployment_block": [
                27
            ],
            "id": [
                27
            ],
            "org_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vaults_stddev_pop_order_by": {
            "chain_id": [
                661
            ],
            "created_by": [
                661
            ],
            "decimals": [
                661
            ],
            "deployment_block": [
                661
            ],
            "id": [
                661
            ],
            "org_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vaults_stddev_samp_fields": {
            "chain_id": [
                27
            ],
            "created_by": [
                27
            ],
            "decimals": [
                27
            ],
            "deployment_block": [
                27
            ],
            "id": [
                27
            ],
            "org_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vaults_stddev_samp_order_by": {
            "chain_id": [
                661
            ],
            "created_by": [
                661
            ],
            "decimals": [
                661
            ],
            "deployment_block": [
                661
            ],
            "id": [
                661
            ],
            "org_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vaults_stream_cursor_input": {
            "initial_value": [
                1068
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "vaults_stream_cursor_value_input": {
            "chain_id": [
                31
            ],
            "created_at": [
                876
            ],
            "created_by": [
                61
            ],
            "decimals": [
                31
            ],
            "deployment_block": [
                61
            ],
            "id": [
                61
            ],
            "org_id": [
                61
            ],
            "simple_token_address": [
                40
            ],
            "symbol": [
                40
            ],
            "token_address": [
                40
            ],
            "updated_at": [
                876
            ],
            "vault_address": [
                40
            ],
            "__typename": [
                40
            ]
        },
        "vaults_sum_fields": {
            "chain_id": [
                31
            ],
            "created_by": [
                61
            ],
            "decimals": [
                31
            ],
            "deployment_block": [
                61
            ],
            "id": [
                61
            ],
            "org_id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "vaults_sum_order_by": {
            "chain_id": [
                661
            ],
            "created_by": [
                661
            ],
            "decimals": [
                661
            ],
            "deployment_block": [
                661
            ],
            "id": [
                661
            ],
            "org_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vaults_update_column": {},
        "vaults_updates": {
            "_inc": [
                1048
            ],
            "_set": [
                1060
            ],
            "where": [
                1046
            ],
            "__typename": [
                40
            ]
        },
        "vaults_var_pop_fields": {
            "chain_id": [
                27
            ],
            "created_by": [
                27
            ],
            "decimals": [
                27
            ],
            "deployment_block": [
                27
            ],
            "id": [
                27
            ],
            "org_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vaults_var_pop_order_by": {
            "chain_id": [
                661
            ],
            "created_by": [
                661
            ],
            "decimals": [
                661
            ],
            "deployment_block": [
                661
            ],
            "id": [
                661
            ],
            "org_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vaults_var_samp_fields": {
            "chain_id": [
                27
            ],
            "created_by": [
                27
            ],
            "decimals": [
                27
            ],
            "deployment_block": [
                27
            ],
            "id": [
                27
            ],
            "org_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vaults_var_samp_order_by": {
            "chain_id": [
                661
            ],
            "created_by": [
                661
            ],
            "decimals": [
                661
            ],
            "deployment_block": [
                661
            ],
            "id": [
                661
            ],
            "org_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vaults_variance_fields": {
            "chain_id": [
                27
            ],
            "created_by": [
                27
            ],
            "decimals": [
                27
            ],
            "deployment_block": [
                27
            ],
            "id": [
                27
            ],
            "org_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vaults_variance_order_by": {
            "chain_id": [
                661
            ],
            "created_by": [
                661
            ],
            "decimals": [
                661
            ],
            "deployment_block": [
                661
            ],
            "id": [
                661
            ],
            "org_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vouches": {
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "nominee": [
                619
            ],
            "nominee_id": [
                31
            ],
            "updated_at": [
                874
            ],
            "voucher": [
                937
            ],
            "voucher_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "vouches_aggregate": {
            "aggregate": [
                1081
            ],
            "nodes": [
                1079
            ],
            "__typename": [
                40
            ]
        },
        "vouches_aggregate_fields": {
            "avg": [
                1084
            ],
            "count": [
                31,
                {
                    "columns": [
                        1098,
                        "[vouches_select_column!]"
                    ],
                    "distinct": [
                        6
                    ]
                }
            ],
            "max": [
                1090
            ],
            "min": [
                1092
            ],
            "stddev": [
                1100
            ],
            "stddev_pop": [
                1102
            ],
            "stddev_samp": [
                1104
            ],
            "sum": [
                1108
            ],
            "var_pop": [
                1112
            ],
            "var_samp": [
                1114
            ],
            "variance": [
                1116
            ],
            "__typename": [
                40
            ]
        },
        "vouches_aggregate_order_by": {
            "avg": [
                1085
            ],
            "count": [
                661
            ],
            "max": [
                1091
            ],
            "min": [
                1093
            ],
            "stddev": [
                1101
            ],
            "stddev_pop": [
                1103
            ],
            "stddev_samp": [
                1105
            ],
            "sum": [
                1109
            ],
            "var_pop": [
                1113
            ],
            "var_samp": [
                1115
            ],
            "variance": [
                1117
            ],
            "__typename": [
                40
            ]
        },
        "vouches_arr_rel_insert_input": {
            "data": [
                1089
            ],
            "on_conflict": [
                1095
            ],
            "__typename": [
                40
            ]
        },
        "vouches_avg_fields": {
            "id": [
                27
            ],
            "nominee_id": [
                27
            ],
            "voucher_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vouches_avg_order_by": {
            "id": [
                661
            ],
            "nominee_id": [
                661
            ],
            "voucher_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vouches_bool_exp": {
            "_and": [
                1086
            ],
            "_not": [
                1086
            ],
            "_or": [
                1086
            ],
            "created_at": [
                875
            ],
            "id": [
                62
            ],
            "nominee": [
                626
            ],
            "nominee_id": [
                32
            ],
            "updated_at": [
                875
            ],
            "voucher": [
                944
            ],
            "voucher_id": [
                32
            ],
            "__typename": [
                40
            ]
        },
        "vouches_constraint": {},
        "vouches_inc_input": {
            "id": [
                61
            ],
            "nominee_id": [
                31
            ],
            "voucher_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "vouches_insert_input": {
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "nominee": [
                635
            ],
            "nominee_id": [
                31
            ],
            "updated_at": [
                874
            ],
            "voucher": [
                953
            ],
            "voucher_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "vouches_max_fields": {
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "nominee_id": [
                31
            ],
            "updated_at": [
                874
            ],
            "voucher_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "vouches_max_order_by": {
            "created_at": [
                661
            ],
            "id": [
                661
            ],
            "nominee_id": [
                661
            ],
            "updated_at": [
                661
            ],
            "voucher_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vouches_min_fields": {
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "nominee_id": [
                31
            ],
            "updated_at": [
                874
            ],
            "voucher_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "vouches_min_order_by": {
            "created_at": [
                661
            ],
            "id": [
                661
            ],
            "nominee_id": [
                661
            ],
            "updated_at": [
                661
            ],
            "voucher_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vouches_mutation_response": {
            "affected_rows": [
                31
            ],
            "returning": [
                1079
            ],
            "__typename": [
                40
            ]
        },
        "vouches_on_conflict": {
            "constraint": [
                1087
            ],
            "update_columns": [
                1110
            ],
            "where": [
                1086
            ],
            "__typename": [
                40
            ]
        },
        "vouches_order_by": {
            "created_at": [
                661
            ],
            "id": [
                661
            ],
            "nominee": [
                637
            ],
            "nominee_id": [
                661
            ],
            "updated_at": [
                661
            ],
            "voucher": [
                955
            ],
            "voucher_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vouches_pk_columns_input": {
            "id": [
                61
            ],
            "__typename": [
                40
            ]
        },
        "vouches_select_column": {},
        "vouches_set_input": {
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "nominee_id": [
                31
            ],
            "updated_at": [
                874
            ],
            "voucher_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "vouches_stddev_fields": {
            "id": [
                27
            ],
            "nominee_id": [
                27
            ],
            "voucher_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vouches_stddev_order_by": {
            "id": [
                661
            ],
            "nominee_id": [
                661
            ],
            "voucher_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vouches_stddev_pop_fields": {
            "id": [
                27
            ],
            "nominee_id": [
                27
            ],
            "voucher_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vouches_stddev_pop_order_by": {
            "id": [
                661
            ],
            "nominee_id": [
                661
            ],
            "voucher_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vouches_stddev_samp_fields": {
            "id": [
                27
            ],
            "nominee_id": [
                27
            ],
            "voucher_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vouches_stddev_samp_order_by": {
            "id": [
                661
            ],
            "nominee_id": [
                661
            ],
            "voucher_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vouches_stream_cursor_input": {
            "initial_value": [
                1107
            ],
            "ordering": [
                389
            ],
            "__typename": [
                40
            ]
        },
        "vouches_stream_cursor_value_input": {
            "created_at": [
                874
            ],
            "id": [
                61
            ],
            "nominee_id": [
                31
            ],
            "updated_at": [
                874
            ],
            "voucher_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "vouches_sum_fields": {
            "id": [
                61
            ],
            "nominee_id": [
                31
            ],
            "voucher_id": [
                31
            ],
            "__typename": [
                40
            ]
        },
        "vouches_sum_order_by": {
            "id": [
                661
            ],
            "nominee_id": [
                661
            ],
            "voucher_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vouches_update_column": {},
        "vouches_updates": {
            "_inc": [
                1088
            ],
            "_set": [
                1099
            ],
            "where": [
                1086
            ],
            "__typename": [
                40
            ]
        },
        "vouches_var_pop_fields": {
            "id": [
                27
            ],
            "nominee_id": [
                27
            ],
            "voucher_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vouches_var_pop_order_by": {
            "id": [
                661
            ],
            "nominee_id": [
                661
            ],
            "voucher_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vouches_var_samp_fields": {
            "id": [
                27
            ],
            "nominee_id": [
                27
            ],
            "voucher_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vouches_var_samp_order_by": {
            "id": [
                661
            ],
            "nominee_id": [
                661
            ],
            "voucher_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "vouches_variance_fields": {
            "id": [
                27
            ],
            "nominee_id": [
                27
            ],
            "voucher_id": [
                27
            ],
            "__typename": [
                40
            ]
        },
        "vouches_variance_order_by": {
            "id": [
                661
            ],
            "nominee_id": [
                661
            ],
            "voucher_id": [
                661
            ],
            "__typename": [
                40
            ]
        },
        "Query": {
            "burns": [
                63,
                {
                    "distinct_on": [
                        82,
                        "[burns_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        80,
                        "[burns_order_by!]"
                    ],
                    "where": [
                        70
                    ]
                }
            ],
            "burns_aggregate": [
                64,
                {
                    "distinct_on": [
                        82,
                        "[burns_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        80,
                        "[burns_order_by!]"
                    ],
                    "where": [
                        70
                    ]
                }
            ],
            "burns_by_pk": [
                63,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "circle_api_keys": [
                102,
                {
                    "distinct_on": [
                        122,
                        "[circle_api_keys_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        120,
                        "[circle_api_keys_order_by!]"
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "circle_api_keys_aggregate": [
                103,
                {
                    "distinct_on": [
                        122,
                        "[circle_api_keys_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        120,
                        "[circle_api_keys_order_by!]"
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "circle_api_keys_by_pk": [
                102,
                {
                    "hash": [
                        40,
                        "String!"
                    ]
                }
            ],
            "circle_integrations": [
                142,
                {
                    "distinct_on": [
                        161,
                        "[circle_integrations_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        159,
                        "[circle_integrations_order_by!]"
                    ],
                    "where": [
                        149
                    ]
                }
            ],
            "circle_integrations_aggregate": [
                143,
                {
                    "distinct_on": [
                        161,
                        "[circle_integrations_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        159,
                        "[circle_integrations_order_by!]"
                    ],
                    "where": [
                        149
                    ]
                }
            ],
            "circle_integrations_by_pk": [
                142,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "circle_metadata": [
                181,
                {
                    "distinct_on": [
                        200,
                        "[circle_metadata_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        198,
                        "[circle_metadata_order_by!]"
                    ],
                    "where": [
                        188
                    ]
                }
            ],
            "circle_metadata_aggregate": [
                182,
                {
                    "distinct_on": [
                        200,
                        "[circle_metadata_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        198,
                        "[circle_metadata_order_by!]"
                    ],
                    "where": [
                        188
                    ]
                }
            ],
            "circle_metadata_by_pk": [
                181,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "circle_private": [
                220,
                {
                    "distinct_on": [
                        232,
                        "[circle_private_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        231,
                        "[circle_private_order_by!]"
                    ],
                    "where": [
                        224
                    ]
                }
            ],
            "circle_private_aggregate": [
                221,
                {
                    "distinct_on": [
                        232,
                        "[circle_private_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        231,
                        "[circle_private_order_by!]"
                    ],
                    "where": [
                        224
                    ]
                }
            ],
            "circle_share_tokens": [
                244,
                {
                    "distinct_on": [
                        258,
                        "[circle_share_tokens_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        256,
                        "[circle_share_tokens_order_by!]"
                    ],
                    "where": [
                        248
                    ]
                }
            ],
            "circle_share_tokens_aggregate": [
                245,
                {
                    "distinct_on": [
                        258,
                        "[circle_share_tokens_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        256,
                        "[circle_share_tokens_order_by!]"
                    ],
                    "where": [
                        248
                    ]
                }
            ],
            "circle_share_tokens_by_pk": [
                244,
                {
                    "circle_id": [
                        61,
                        "bigint!"
                    ],
                    "type": [
                        31,
                        "Int!"
                    ]
                }
            ],
            "circles": [
                271,
                {
                    "distinct_on": [
                        291,
                        "[circles_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        289,
                        "[circles_order_by!]"
                    ],
                    "where": [
                        278
                    ]
                }
            ],
            "circles_aggregate": [
                272,
                {
                    "distinct_on": [
                        291,
                        "[circles_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        289,
                        "[circles_order_by!]"
                    ],
                    "where": [
                        278
                    ]
                }
            ],
            "circles_by_pk": [
                271,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "claims": [
                311,
                {
                    "distinct_on": [
                        330,
                        "[claims_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        328,
                        "[claims_order_by!]"
                    ],
                    "where": [
                        318
                    ]
                }
            ],
            "claims_aggregate": [
                312,
                {
                    "distinct_on": [
                        330,
                        "[claims_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        328,
                        "[claims_order_by!]"
                    ],
                    "where": [
                        318
                    ]
                }
            ],
            "claims_by_pk": [
                311,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "contributions": [
                350,
                {
                    "distinct_on": [
                        369,
                        "[contributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        367,
                        "[contributions_order_by!]"
                    ],
                    "where": [
                        357
                    ]
                }
            ],
            "contributions_aggregate": [
                351,
                {
                    "distinct_on": [
                        369,
                        "[contributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        367,
                        "[contributions_order_by!]"
                    ],
                    "where": [
                        357
                    ]
                }
            ],
            "contributions_by_pk": [
                350,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "discord_roles_circles": [
                392,
                {
                    "distinct_on": [
                        406,
                        "[discord_roles_circles_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        404,
                        "[discord_roles_circles_order_by!]"
                    ],
                    "where": [
                        396
                    ]
                }
            ],
            "discord_roles_circles_aggregate": [
                393,
                {
                    "distinct_on": [
                        406,
                        "[discord_roles_circles_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        404,
                        "[discord_roles_circles_order_by!]"
                    ],
                    "where": [
                        396
                    ]
                }
            ],
            "discord_roles_circles_by_pk": [
                392,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "discord_users": [
                419,
                {
                    "distinct_on": [
                        433,
                        "[discord_users_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        431,
                        "[discord_users_order_by!]"
                    ],
                    "where": [
                        423
                    ]
                }
            ],
            "discord_users_aggregate": [
                420,
                {
                    "distinct_on": [
                        433,
                        "[discord_users_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        431,
                        "[discord_users_order_by!]"
                    ],
                    "where": [
                        423
                    ]
                }
            ],
            "discord_users_by_pk": [
                419,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "distributions": [
                446,
                {
                    "distinct_on": [
                        471,
                        "[distributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        468,
                        "[distributions_order_by!]"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "distributions_aggregate": [
                447,
                {
                    "distinct_on": [
                        471,
                        "[distributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        468,
                        "[distributions_order_by!]"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "distributions_by_pk": [
                446,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "epochs": [
                491,
                {
                    "distinct_on": [
                        511,
                        "[epochs_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        509,
                        "[epochs_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "epochs_aggregate": [
                492,
                {
                    "distinct_on": [
                        511,
                        "[epochs_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        509,
                        "[epochs_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "epochs_by_pk": [
                491,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "gift_private": [
                531,
                {
                    "distinct_on": [
                        543,
                        "[gift_private_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        542,
                        "[gift_private_order_by!]"
                    ],
                    "where": [
                        535
                    ]
                }
            ],
            "gift_private_aggregate": [
                532,
                {
                    "distinct_on": [
                        543,
                        "[gift_private_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        542,
                        "[gift_private_order_by!]"
                    ],
                    "where": [
                        535
                    ]
                }
            ],
            "histories": [
                555,
                {
                    "distinct_on": [
                        569,
                        "[histories_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        567,
                        "[histories_order_by!]"
                    ],
                    "where": [
                        559
                    ]
                }
            ],
            "histories_aggregate": [
                556,
                {
                    "distinct_on": [
                        569,
                        "[histories_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        567,
                        "[histories_order_by!]"
                    ],
                    "where": [
                        559
                    ]
                }
            ],
            "histories_by_pk": [
                555,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "interaction_events": [
                582,
                {
                    "distinct_on": [
                        601,
                        "[interaction_events_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        598,
                        "[interaction_events_order_by!]"
                    ],
                    "where": [
                        587
                    ]
                }
            ],
            "interaction_events_aggregate": [
                583,
                {
                    "distinct_on": [
                        601,
                        "[interaction_events_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        598,
                        "[interaction_events_order_by!]"
                    ],
                    "where": [
                        587
                    ]
                }
            ],
            "interaction_events_by_pk": [
                582,
                {
                    "id": [
                        31,
                        "Int!"
                    ]
                }
            ],
            "nominees": [
                619,
                {
                    "distinct_on": [
                        639,
                        "[nominees_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        637,
                        "[nominees_order_by!]"
                    ],
                    "where": [
                        626
                    ]
                }
            ],
            "nominees_aggregate": [
                620,
                {
                    "distinct_on": [
                        639,
                        "[nominees_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        637,
                        "[nominees_order_by!]"
                    ],
                    "where": [
                        626
                    ]
                }
            ],
            "nominees_by_pk": [
                619,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "organizations": [
                662,
                {
                    "distinct_on": [
                        677,
                        "[organizations_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        675,
                        "[organizations_order_by!]"
                    ],
                    "where": [
                        666
                    ]
                }
            ],
            "organizations_aggregate": [
                663,
                {
                    "distinct_on": [
                        677,
                        "[organizations_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        675,
                        "[organizations_order_by!]"
                    ],
                    "where": [
                        666
                    ]
                }
            ],
            "organizations_by_pk": [
                662,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "pending_gift_private": [
                690,
                {
                    "distinct_on": [
                        702,
                        "[pending_gift_private_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        701,
                        "[pending_gift_private_order_by!]"
                    ],
                    "where": [
                        694
                    ]
                }
            ],
            "pending_gift_private_aggregate": [
                691,
                {
                    "distinct_on": [
                        702,
                        "[pending_gift_private_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        701,
                        "[pending_gift_private_order_by!]"
                    ],
                    "where": [
                        694
                    ]
                }
            ],
            "pending_token_gifts": [
                714,
                {
                    "distinct_on": [
                        733,
                        "[pending_token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        731,
                        "[pending_token_gifts_order_by!]"
                    ],
                    "where": [
                        721
                    ]
                }
            ],
            "pending_token_gifts_aggregate": [
                715,
                {
                    "distinct_on": [
                        733,
                        "[pending_token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        731,
                        "[pending_token_gifts_order_by!]"
                    ],
                    "where": [
                        721
                    ]
                }
            ],
            "pending_token_gifts_by_pk": [
                714,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "pending_vault_transactions": [
                753,
                {
                    "distinct_on": [
                        767,
                        "[pending_vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        765,
                        "[pending_vault_transactions_order_by!]"
                    ],
                    "where": [
                        757
                    ]
                }
            ],
            "pending_vault_transactions_aggregate": [
                754,
                {
                    "distinct_on": [
                        767,
                        "[pending_vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        765,
                        "[pending_vault_transactions_order_by!]"
                    ],
                    "where": [
                        757
                    ]
                }
            ],
            "pending_vault_transactions_by_pk": [
                753,
                {
                    "tx_hash": [
                        40,
                        "String!"
                    ]
                }
            ],
            "personal_access_tokens": [
                780,
                {
                    "distinct_on": [
                        794,
                        "[personal_access_tokens_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        792,
                        "[personal_access_tokens_order_by!]"
                    ],
                    "where": [
                        784
                    ]
                }
            ],
            "personal_access_tokens_aggregate": [
                781,
                {
                    "distinct_on": [
                        794,
                        "[personal_access_tokens_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        792,
                        "[personal_access_tokens_order_by!]"
                    ],
                    "where": [
                        784
                    ]
                }
            ],
            "personal_access_tokens_by_pk": [
                780,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "profiles": [
                807,
                {
                    "distinct_on": [
                        822,
                        "[profiles_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        820,
                        "[profiles_order_by!]"
                    ],
                    "where": [
                        811
                    ]
                }
            ],
            "profiles_aggregate": [
                808,
                {
                    "distinct_on": [
                        822,
                        "[profiles_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        820,
                        "[profiles_order_by!]"
                    ],
                    "where": [
                        811
                    ]
                }
            ],
            "profiles_by_pk": [
                807,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "teammates": [
                835,
                {
                    "distinct_on": [
                        854,
                        "[teammates_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        852,
                        "[teammates_order_by!]"
                    ],
                    "where": [
                        842
                    ]
                }
            ],
            "teammates_aggregate": [
                836,
                {
                    "distinct_on": [
                        854,
                        "[teammates_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        852,
                        "[teammates_order_by!]"
                    ],
                    "where": [
                        842
                    ]
                }
            ],
            "teammates_by_pk": [
                835,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "token_gifts": [
                878,
                {
                    "distinct_on": [
                        897,
                        "[token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        895,
                        "[token_gifts_order_by!]"
                    ],
                    "where": [
                        885
                    ]
                }
            ],
            "token_gifts_aggregate": [
                879,
                {
                    "distinct_on": [
                        897,
                        "[token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        895,
                        "[token_gifts_order_by!]"
                    ],
                    "where": [
                        885
                    ]
                }
            ],
            "token_gifts_by_pk": [
                878,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "user_private": [
                917,
                {
                    "distinct_on": [
                        927,
                        "[user_private_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        926,
                        "[user_private_order_by!]"
                    ],
                    "where": [
                        921
                    ]
                }
            ],
            "user_private_aggregate": [
                918,
                {
                    "distinct_on": [
                        927,
                        "[user_private_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        926,
                        "[user_private_order_by!]"
                    ],
                    "where": [
                        921
                    ]
                }
            ],
            "users": [
                937,
                {
                    "distinct_on": [
                        957,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        955,
                        "[users_order_by!]"
                    ],
                    "where": [
                        944
                    ]
                }
            ],
            "users_aggregate": [
                938,
                {
                    "distinct_on": [
                        957,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        955,
                        "[users_order_by!]"
                    ],
                    "where": [
                        944
                    ]
                }
            ],
            "users_by_pk": [
                937,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "vault_transactions": [
                979,
                {
                    "distinct_on": [
                        998,
                        "[vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        996,
                        "[vault_transactions_order_by!]"
                    ],
                    "where": [
                        986
                    ]
                }
            ],
            "vault_transactions_aggregate": [
                980,
                {
                    "distinct_on": [
                        998,
                        "[vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        996,
                        "[vault_transactions_order_by!]"
                    ],
                    "where": [
                        986
                    ]
                }
            ],
            "vault_transactions_by_pk": [
                979,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "vault_tx_types": [
                1018,
                {
                    "distinct_on": [
                        1033,
                        "[vault_tx_types_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1031,
                        "[vault_tx_types_order_by!]"
                    ],
                    "where": [
                        1021
                    ]
                }
            ],
            "vault_tx_types_aggregate": [
                1019,
                {
                    "distinct_on": [
                        1033,
                        "[vault_tx_types_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1031,
                        "[vault_tx_types_order_by!]"
                    ],
                    "where": [
                        1021
                    ]
                }
            ],
            "vault_tx_types_by_pk": [
                1018,
                {
                    "value": [
                        40,
                        "String!"
                    ]
                }
            ],
            "vaults": [
                1039,
                {
                    "distinct_on": [
                        1059,
                        "[vaults_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1057,
                        "[vaults_order_by!]"
                    ],
                    "where": [
                        1046
                    ]
                }
            ],
            "vaults_aggregate": [
                1040,
                {
                    "distinct_on": [
                        1059,
                        "[vaults_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1057,
                        "[vaults_order_by!]"
                    ],
                    "where": [
                        1046
                    ]
                }
            ],
            "vaults_by_pk": [
                1039,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "vouches": [
                1079,
                {
                    "distinct_on": [
                        1098,
                        "[vouches_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1096,
                        "[vouches_order_by!]"
                    ],
                    "where": [
                        1086
                    ]
                }
            ],
            "vouches_aggregate": [
                1080,
                {
                    "distinct_on": [
                        1098,
                        "[vouches_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1096,
                        "[vouches_order_by!]"
                    ],
                    "where": [
                        1086
                    ]
                }
            ],
            "vouches_by_pk": [
                1079,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "__typename": [
                40
            ]
        },
        "Mutation": {
            "adminUpdateUser": [
                57,
                {
                    "payload": [
                        0,
                        "AdminUpdateUserInput!"
                    ]
                }
            ],
            "allocationCsv": [
                3,
                {
                    "payload": [
                        2,
                        "AllocationCsvInput!"
                    ]
                }
            ],
            "createCircle": [
                11,
                {
                    "payload": [
                        10,
                        "CreateCircleInput!"
                    ]
                }
            ],
            "createEpoch": [
                26,
                {
                    "payload": [
                        12,
                        "CreateEpochInput!"
                    ]
                }
            ],
            "createNominee": [
                14,
                {
                    "payload": [
                        13,
                        "CreateNomineeInput!"
                    ]
                }
            ],
            "createSampleCircle": [
                15
            ],
            "createUser": [
                57,
                {
                    "payload": [
                        16,
                        "CreateUserInput!"
                    ]
                }
            ],
            "createUserWithToken": [
                57,
                {
                    "payload": [
                        17,
                        "CreateUserWithTokenInput!"
                    ]
                }
            ],
            "createUsers": [
                57,
                {
                    "payload": [
                        18,
                        "CreateUsersInput!"
                    ]
                }
            ],
            "createVault": [
                58,
                {
                    "payload": [
                        19,
                        "CreateVaultInput!"
                    ]
                }
            ],
            "createVaultTx": [
                36,
                {
                    "payload": [
                        35,
                        "LogVaultTxInput!"
                    ]
                }
            ],
            "deleteCircle": [
                8,
                {
                    "payload": [
                        20,
                        "DeleteCircleInput!"
                    ]
                }
            ],
            "deleteContribution": [
                8,
                {
                    "payload": [
                        21,
                        "DeleteContributionInput!"
                    ]
                }
            ],
            "deleteDiscordUser": [
                8,
                {
                    "payload": [
                        22,
                        "DeleteDiscordUserInput!"
                    ]
                }
            ],
            "deleteEpoch": [
                24,
                {
                    "payload": [
                        23,
                        "DeleteEpochInput!"
                    ]
                }
            ],
            "deleteUser": [
                8,
                {
                    "payload": [
                        25,
                        "DeleteUserInput!"
                    ]
                }
            ],
            "delete_burns": [
                78,
                {
                    "where": [
                        70,
                        "burns_bool_exp!"
                    ]
                }
            ],
            "delete_burns_by_pk": [
                63,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_circle_api_keys": [
                117,
                {
                    "where": [
                        109,
                        "circle_api_keys_bool_exp!"
                    ]
                }
            ],
            "delete_circle_api_keys_by_pk": [
                102,
                {
                    "hash": [
                        40,
                        "String!"
                    ]
                }
            ],
            "delete_circle_integrations": [
                157,
                {
                    "where": [
                        149,
                        "circle_integrations_bool_exp!"
                    ]
                }
            ],
            "delete_circle_integrations_by_pk": [
                142,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_circle_metadata": [
                196,
                {
                    "where": [
                        188,
                        "circle_metadata_bool_exp!"
                    ]
                }
            ],
            "delete_circle_metadata_by_pk": [
                181,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_circle_private": [
                229,
                {
                    "where": [
                        224,
                        "circle_private_bool_exp!"
                    ]
                }
            ],
            "delete_circle_share_tokens": [
                254,
                {
                    "where": [
                        248,
                        "circle_share_tokens_bool_exp!"
                    ]
                }
            ],
            "delete_circle_share_tokens_by_pk": [
                244,
                {
                    "circle_id": [
                        61,
                        "bigint!"
                    ],
                    "type": [
                        31,
                        "Int!"
                    ]
                }
            ],
            "delete_circles": [
                286,
                {
                    "where": [
                        278,
                        "circles_bool_exp!"
                    ]
                }
            ],
            "delete_circles_by_pk": [
                271,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_claims": [
                326,
                {
                    "where": [
                        318,
                        "claims_bool_exp!"
                    ]
                }
            ],
            "delete_claims_by_pk": [
                311,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_contributions": [
                365,
                {
                    "where": [
                        357,
                        "contributions_bool_exp!"
                    ]
                }
            ],
            "delete_contributions_by_pk": [
                350,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_discord_roles_circles": [
                402,
                {
                    "where": [
                        396,
                        "discord_roles_circles_bool_exp!"
                    ]
                }
            ],
            "delete_discord_roles_circles_by_pk": [
                392,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_discord_users": [
                429,
                {
                    "where": [
                        423,
                        "discord_users_bool_exp!"
                    ]
                }
            ],
            "delete_discord_users_by_pk": [
                419,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_distributions": [
                465,
                {
                    "where": [
                        454,
                        "distributions_bool_exp!"
                    ]
                }
            ],
            "delete_distributions_by_pk": [
                446,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_epochs": [
                506,
                {
                    "where": [
                        498,
                        "epochs_bool_exp!"
                    ]
                }
            ],
            "delete_epochs_by_pk": [
                491,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_gift_private": [
                540,
                {
                    "where": [
                        535,
                        "gift_private_bool_exp!"
                    ]
                }
            ],
            "delete_histories": [
                565,
                {
                    "where": [
                        559,
                        "histories_bool_exp!"
                    ]
                }
            ],
            "delete_histories_by_pk": [
                555,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_interaction_events": [
                596,
                {
                    "where": [
                        587,
                        "interaction_events_bool_exp!"
                    ]
                }
            ],
            "delete_interaction_events_by_pk": [
                582,
                {
                    "id": [
                        31,
                        "Int!"
                    ]
                }
            ],
            "delete_nominees": [
                634,
                {
                    "where": [
                        626,
                        "nominees_bool_exp!"
                    ]
                }
            ],
            "delete_nominees_by_pk": [
                619,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_organizations": [
                672,
                {
                    "where": [
                        666,
                        "organizations_bool_exp!"
                    ]
                }
            ],
            "delete_organizations_by_pk": [
                662,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_pending_gift_private": [
                699,
                {
                    "where": [
                        694,
                        "pending_gift_private_bool_exp!"
                    ]
                }
            ],
            "delete_pending_token_gifts": [
                729,
                {
                    "where": [
                        721,
                        "pending_token_gifts_bool_exp!"
                    ]
                }
            ],
            "delete_pending_token_gifts_by_pk": [
                714,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_pending_vault_transactions": [
                763,
                {
                    "where": [
                        757,
                        "pending_vault_transactions_bool_exp!"
                    ]
                }
            ],
            "delete_pending_vault_transactions_by_pk": [
                753,
                {
                    "tx_hash": [
                        40,
                        "String!"
                    ]
                }
            ],
            "delete_personal_access_tokens": [
                790,
                {
                    "where": [
                        784,
                        "personal_access_tokens_bool_exp!"
                    ]
                }
            ],
            "delete_personal_access_tokens_by_pk": [
                780,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_profiles": [
                817,
                {
                    "where": [
                        811,
                        "profiles_bool_exp!"
                    ]
                }
            ],
            "delete_profiles_by_pk": [
                807,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_teammates": [
                850,
                {
                    "where": [
                        842,
                        "teammates_bool_exp!"
                    ]
                }
            ],
            "delete_teammates_by_pk": [
                835,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_token_gifts": [
                893,
                {
                    "where": [
                        885,
                        "token_gifts_bool_exp!"
                    ]
                }
            ],
            "delete_token_gifts_by_pk": [
                878,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_users": [
                952,
                {
                    "where": [
                        944,
                        "users_bool_exp!"
                    ]
                }
            ],
            "delete_users_by_pk": [
                937,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_vault_transactions": [
                994,
                {
                    "where": [
                        986,
                        "vault_transactions_bool_exp!"
                    ]
                }
            ],
            "delete_vault_transactions_by_pk": [
                979,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_vault_tx_types": [
                1028,
                {
                    "where": [
                        1021,
                        "vault_tx_types_bool_exp!"
                    ]
                }
            ],
            "delete_vault_tx_types_by_pk": [
                1018,
                {
                    "value": [
                        40,
                        "String!"
                    ]
                }
            ],
            "delete_vaults": [
                1054,
                {
                    "where": [
                        1046,
                        "vaults_bool_exp!"
                    ]
                }
            ],
            "delete_vaults_by_pk": [
                1039,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "delete_vouches": [
                1094,
                {
                    "where": [
                        1086,
                        "vouches_bool_exp!"
                    ]
                }
            ],
            "delete_vouches_by_pk": [
                1079,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "generateApiKey": [
                29,
                {
                    "payload": [
                        28,
                        "GenerateApiKeyInput!"
                    ]
                }
            ],
            "insert_burns": [
                78,
                {
                    "objects": [
                        73,
                        "[burns_insert_input!]!"
                    ],
                    "on_conflict": [
                        79
                    ]
                }
            ],
            "insert_burns_one": [
                63,
                {
                    "object": [
                        73,
                        "burns_insert_input!"
                    ],
                    "on_conflict": [
                        79
                    ]
                }
            ],
            "insert_circle_api_keys": [
                117,
                {
                    "objects": [
                        112,
                        "[circle_api_keys_insert_input!]!"
                    ],
                    "on_conflict": [
                        119
                    ]
                }
            ],
            "insert_circle_api_keys_one": [
                102,
                {
                    "object": [
                        112,
                        "circle_api_keys_insert_input!"
                    ],
                    "on_conflict": [
                        119
                    ]
                }
            ],
            "insert_circle_integrations": [
                157,
                {
                    "objects": [
                        152,
                        "[circle_integrations_insert_input!]!"
                    ],
                    "on_conflict": [
                        158
                    ]
                }
            ],
            "insert_circle_integrations_one": [
                142,
                {
                    "object": [
                        152,
                        "circle_integrations_insert_input!"
                    ],
                    "on_conflict": [
                        158
                    ]
                }
            ],
            "insert_circle_metadata": [
                196,
                {
                    "objects": [
                        191,
                        "[circle_metadata_insert_input!]!"
                    ],
                    "on_conflict": [
                        197
                    ]
                }
            ],
            "insert_circle_metadata_one": [
                181,
                {
                    "object": [
                        191,
                        "circle_metadata_insert_input!"
                    ],
                    "on_conflict": [
                        197
                    ]
                }
            ],
            "insert_circle_private": [
                229,
                {
                    "objects": [
                        226,
                        "[circle_private_insert_input!]!"
                    ]
                }
            ],
            "insert_circle_private_one": [
                220,
                {
                    "object": [
                        226,
                        "circle_private_insert_input!"
                    ]
                }
            ],
            "insert_circle_share_tokens": [
                254,
                {
                    "objects": [
                        251,
                        "[circle_share_tokens_insert_input!]!"
                    ],
                    "on_conflict": [
                        255
                    ]
                }
            ],
            "insert_circle_share_tokens_one": [
                244,
                {
                    "object": [
                        251,
                        "circle_share_tokens_insert_input!"
                    ],
                    "on_conflict": [
                        255
                    ]
                }
            ],
            "insert_circles": [
                286,
                {
                    "objects": [
                        281,
                        "[circles_insert_input!]!"
                    ],
                    "on_conflict": [
                        288
                    ]
                }
            ],
            "insert_circles_one": [
                271,
                {
                    "object": [
                        281,
                        "circles_insert_input!"
                    ],
                    "on_conflict": [
                        288
                    ]
                }
            ],
            "insert_claims": [
                326,
                {
                    "objects": [
                        321,
                        "[claims_insert_input!]!"
                    ],
                    "on_conflict": [
                        327
                    ]
                }
            ],
            "insert_claims_one": [
                311,
                {
                    "object": [
                        321,
                        "claims_insert_input!"
                    ],
                    "on_conflict": [
                        327
                    ]
                }
            ],
            "insert_contributions": [
                365,
                {
                    "objects": [
                        360,
                        "[contributions_insert_input!]!"
                    ],
                    "on_conflict": [
                        366
                    ]
                }
            ],
            "insert_contributions_one": [
                350,
                {
                    "object": [
                        360,
                        "contributions_insert_input!"
                    ],
                    "on_conflict": [
                        366
                    ]
                }
            ],
            "insert_discord_roles_circles": [
                402,
                {
                    "objects": [
                        399,
                        "[discord_roles_circles_insert_input!]!"
                    ],
                    "on_conflict": [
                        403
                    ]
                }
            ],
            "insert_discord_roles_circles_one": [
                392,
                {
                    "object": [
                        399,
                        "discord_roles_circles_insert_input!"
                    ],
                    "on_conflict": [
                        403
                    ]
                }
            ],
            "insert_discord_users": [
                429,
                {
                    "objects": [
                        426,
                        "[discord_users_insert_input!]!"
                    ],
                    "on_conflict": [
                        430
                    ]
                }
            ],
            "insert_discord_users_one": [
                419,
                {
                    "object": [
                        426,
                        "discord_users_insert_input!"
                    ],
                    "on_conflict": [
                        430
                    ]
                }
            ],
            "insert_distributions": [
                465,
                {
                    "objects": [
                        460,
                        "[distributions_insert_input!]!"
                    ],
                    "on_conflict": [
                        467
                    ]
                }
            ],
            "insert_distributions_one": [
                446,
                {
                    "object": [
                        460,
                        "distributions_insert_input!"
                    ],
                    "on_conflict": [
                        467
                    ]
                }
            ],
            "insert_epochs": [
                506,
                {
                    "objects": [
                        501,
                        "[epochs_insert_input!]!"
                    ],
                    "on_conflict": [
                        508
                    ]
                }
            ],
            "insert_epochs_one": [
                491,
                {
                    "object": [
                        501,
                        "epochs_insert_input!"
                    ],
                    "on_conflict": [
                        508
                    ]
                }
            ],
            "insert_gift_private": [
                540,
                {
                    "objects": [
                        537,
                        "[gift_private_insert_input!]!"
                    ]
                }
            ],
            "insert_gift_private_one": [
                531,
                {
                    "object": [
                        537,
                        "gift_private_insert_input!"
                    ]
                }
            ],
            "insert_histories": [
                565,
                {
                    "objects": [
                        562,
                        "[histories_insert_input!]!"
                    ],
                    "on_conflict": [
                        566
                    ]
                }
            ],
            "insert_histories_one": [
                555,
                {
                    "object": [
                        562,
                        "histories_insert_input!"
                    ],
                    "on_conflict": [
                        566
                    ]
                }
            ],
            "insert_interaction_events": [
                596,
                {
                    "objects": [
                        593,
                        "[interaction_events_insert_input!]!"
                    ],
                    "on_conflict": [
                        597
                    ]
                }
            ],
            "insert_interaction_events_one": [
                582,
                {
                    "object": [
                        593,
                        "interaction_events_insert_input!"
                    ],
                    "on_conflict": [
                        597
                    ]
                }
            ],
            "insert_nominees": [
                634,
                {
                    "objects": [
                        629,
                        "[nominees_insert_input!]!"
                    ],
                    "on_conflict": [
                        636
                    ]
                }
            ],
            "insert_nominees_one": [
                619,
                {
                    "object": [
                        629,
                        "nominees_insert_input!"
                    ],
                    "on_conflict": [
                        636
                    ]
                }
            ],
            "insert_organizations": [
                672,
                {
                    "objects": [
                        669,
                        "[organizations_insert_input!]!"
                    ],
                    "on_conflict": [
                        674
                    ]
                }
            ],
            "insert_organizations_one": [
                662,
                {
                    "object": [
                        669,
                        "organizations_insert_input!"
                    ],
                    "on_conflict": [
                        674
                    ]
                }
            ],
            "insert_pending_gift_private": [
                699,
                {
                    "objects": [
                        696,
                        "[pending_gift_private_insert_input!]!"
                    ]
                }
            ],
            "insert_pending_gift_private_one": [
                690,
                {
                    "object": [
                        696,
                        "pending_gift_private_insert_input!"
                    ]
                }
            ],
            "insert_pending_token_gifts": [
                729,
                {
                    "objects": [
                        724,
                        "[pending_token_gifts_insert_input!]!"
                    ],
                    "on_conflict": [
                        730
                    ]
                }
            ],
            "insert_pending_token_gifts_one": [
                714,
                {
                    "object": [
                        724,
                        "pending_token_gifts_insert_input!"
                    ],
                    "on_conflict": [
                        730
                    ]
                }
            ],
            "insert_pending_vault_transactions": [
                763,
                {
                    "objects": [
                        760,
                        "[pending_vault_transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        764
                    ]
                }
            ],
            "insert_pending_vault_transactions_one": [
                753,
                {
                    "object": [
                        760,
                        "pending_vault_transactions_insert_input!"
                    ],
                    "on_conflict": [
                        764
                    ]
                }
            ],
            "insert_personal_access_tokens": [
                790,
                {
                    "objects": [
                        787,
                        "[personal_access_tokens_insert_input!]!"
                    ],
                    "on_conflict": [
                        791
                    ]
                }
            ],
            "insert_personal_access_tokens_one": [
                780,
                {
                    "object": [
                        787,
                        "personal_access_tokens_insert_input!"
                    ],
                    "on_conflict": [
                        791
                    ]
                }
            ],
            "insert_profiles": [
                817,
                {
                    "objects": [
                        814,
                        "[profiles_insert_input!]!"
                    ],
                    "on_conflict": [
                        819
                    ]
                }
            ],
            "insert_profiles_one": [
                807,
                {
                    "object": [
                        814,
                        "profiles_insert_input!"
                    ],
                    "on_conflict": [
                        819
                    ]
                }
            ],
            "insert_teammates": [
                850,
                {
                    "objects": [
                        845,
                        "[teammates_insert_input!]!"
                    ],
                    "on_conflict": [
                        851
                    ]
                }
            ],
            "insert_teammates_one": [
                835,
                {
                    "object": [
                        845,
                        "teammates_insert_input!"
                    ],
                    "on_conflict": [
                        851
                    ]
                }
            ],
            "insert_token_gifts": [
                893,
                {
                    "objects": [
                        888,
                        "[token_gifts_insert_input!]!"
                    ],
                    "on_conflict": [
                        894
                    ]
                }
            ],
            "insert_token_gifts_one": [
                878,
                {
                    "object": [
                        888,
                        "token_gifts_insert_input!"
                    ],
                    "on_conflict": [
                        894
                    ]
                }
            ],
            "insert_users": [
                952,
                {
                    "objects": [
                        947,
                        "[users_insert_input!]!"
                    ],
                    "on_conflict": [
                        954
                    ]
                }
            ],
            "insert_users_one": [
                937,
                {
                    "object": [
                        947,
                        "users_insert_input!"
                    ],
                    "on_conflict": [
                        954
                    ]
                }
            ],
            "insert_vault_transactions": [
                994,
                {
                    "objects": [
                        989,
                        "[vault_transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        995
                    ]
                }
            ],
            "insert_vault_transactions_one": [
                979,
                {
                    "object": [
                        989,
                        "vault_transactions_insert_input!"
                    ],
                    "on_conflict": [
                        995
                    ]
                }
            ],
            "insert_vault_tx_types": [
                1028,
                {
                    "objects": [
                        1025,
                        "[vault_tx_types_insert_input!]!"
                    ],
                    "on_conflict": [
                        1030
                    ]
                }
            ],
            "insert_vault_tx_types_one": [
                1018,
                {
                    "object": [
                        1025,
                        "vault_tx_types_insert_input!"
                    ],
                    "on_conflict": [
                        1030
                    ]
                }
            ],
            "insert_vaults": [
                1054,
                {
                    "objects": [
                        1049,
                        "[vaults_insert_input!]!"
                    ],
                    "on_conflict": [
                        1056
                    ]
                }
            ],
            "insert_vaults_one": [
                1039,
                {
                    "object": [
                        1049,
                        "vaults_insert_input!"
                    ],
                    "on_conflict": [
                        1056
                    ]
                }
            ],
            "insert_vouches": [
                1094,
                {
                    "objects": [
                        1089,
                        "[vouches_insert_input!]!"
                    ],
                    "on_conflict": [
                        1095
                    ]
                }
            ],
            "insert_vouches_one": [
                1079,
                {
                    "object": [
                        1089,
                        "vouches_insert_input!"
                    ],
                    "on_conflict": [
                        1095
                    ]
                }
            ],
            "linkDiscordUser": [
                34,
                {
                    "payload": [
                        33,
                        "LinkDiscordUserInput!"
                    ]
                }
            ],
            "logoutUser": [
                37
            ],
            "markClaimed": [
                39,
                {
                    "payload": [
                        38,
                        "MarkClaimedInput!"
                    ]
                }
            ],
            "restoreCoordinape": [
                8,
                {
                    "payload": [
                        9,
                        "CoordinapeInput!"
                    ]
                }
            ],
            "updateAllocations": [
                5,
                {
                    "payload": [
                        4,
                        "Allocations!"
                    ]
                }
            ],
            "updateCircle": [
                43,
                {
                    "payload": [
                        42,
                        "UpdateCircleInput!"
                    ]
                }
            ],
            "updateContribution": [
                46,
                {
                    "payload": [
                        45,
                        "UpdateContributionInput!"
                    ]
                }
            ],
            "updateEpoch": [
                26,
                {
                    "payload": [
                        47,
                        "UpdateEpochInput!"
                    ]
                }
            ],
            "updateTeammates": [
                51,
                {
                    "payload": [
                        50,
                        "UpdateTeammatesInput!"
                    ]
                }
            ],
            "updateUser": [
                57,
                {
                    "payload": [
                        52,
                        "UpdateUserInput!"
                    ]
                }
            ],
            "update_burns": [
                78,
                {
                    "_inc": [
                        72
                    ],
                    "_set": [
                        83
                    ],
                    "where": [
                        70,
                        "burns_bool_exp!"
                    ]
                }
            ],
            "update_burns_by_pk": [
                63,
                {
                    "_inc": [
                        72
                    ],
                    "_set": [
                        83
                    ],
                    "pk_columns": [
                        81,
                        "burns_pk_columns_input!"
                    ]
                }
            ],
            "update_burns_many": [
                78,
                {
                    "updates": [
                        95,
                        "[burns_updates!]!"
                    ]
                }
            ],
            "update_circle_api_keys": [
                117,
                {
                    "_inc": [
                        111
                    ],
                    "_set": [
                        123
                    ],
                    "where": [
                        109,
                        "circle_api_keys_bool_exp!"
                    ]
                }
            ],
            "update_circle_api_keys_by_pk": [
                102,
                {
                    "_inc": [
                        111
                    ],
                    "_set": [
                        123
                    ],
                    "pk_columns": [
                        121,
                        "circle_api_keys_pk_columns_input!"
                    ]
                }
            ],
            "update_circle_api_keys_many": [
                117,
                {
                    "updates": [
                        135,
                        "[circle_api_keys_updates!]!"
                    ]
                }
            ],
            "update_circle_integrations": [
                157,
                {
                    "_inc": [
                        151
                    ],
                    "_set": [
                        162
                    ],
                    "where": [
                        149,
                        "circle_integrations_bool_exp!"
                    ]
                }
            ],
            "update_circle_integrations_by_pk": [
                142,
                {
                    "_inc": [
                        151
                    ],
                    "_set": [
                        162
                    ],
                    "pk_columns": [
                        160,
                        "circle_integrations_pk_columns_input!"
                    ]
                }
            ],
            "update_circle_integrations_many": [
                157,
                {
                    "updates": [
                        174,
                        "[circle_integrations_updates!]!"
                    ]
                }
            ],
            "update_circle_metadata": [
                196,
                {
                    "_inc": [
                        190
                    ],
                    "_set": [
                        201
                    ],
                    "where": [
                        188,
                        "circle_metadata_bool_exp!"
                    ]
                }
            ],
            "update_circle_metadata_by_pk": [
                181,
                {
                    "_inc": [
                        190
                    ],
                    "_set": [
                        201
                    ],
                    "pk_columns": [
                        199,
                        "circle_metadata_pk_columns_input!"
                    ]
                }
            ],
            "update_circle_metadata_many": [
                196,
                {
                    "updates": [
                        213,
                        "[circle_metadata_updates!]!"
                    ]
                }
            ],
            "update_circle_private": [
                229,
                {
                    "_inc": [
                        225
                    ],
                    "_set": [
                        233
                    ],
                    "where": [
                        224,
                        "circle_private_bool_exp!"
                    ]
                }
            ],
            "update_circle_private_many": [
                229,
                {
                    "updates": [
                        240,
                        "[circle_private_updates!]!"
                    ]
                }
            ],
            "update_circle_share_tokens": [
                254,
                {
                    "_inc": [
                        250
                    ],
                    "_set": [
                        259
                    ],
                    "where": [
                        248,
                        "circle_share_tokens_bool_exp!"
                    ]
                }
            ],
            "update_circle_share_tokens_by_pk": [
                244,
                {
                    "_inc": [
                        250
                    ],
                    "_set": [
                        259
                    ],
                    "pk_columns": [
                        257,
                        "circle_share_tokens_pk_columns_input!"
                    ]
                }
            ],
            "update_circle_share_tokens_many": [
                254,
                {
                    "updates": [
                        267,
                        "[circle_share_tokens_updates!]!"
                    ]
                }
            ],
            "update_circles": [
                286,
                {
                    "_inc": [
                        280
                    ],
                    "_set": [
                        292
                    ],
                    "where": [
                        278,
                        "circles_bool_exp!"
                    ]
                }
            ],
            "update_circles_by_pk": [
                271,
                {
                    "_inc": [
                        280
                    ],
                    "_set": [
                        292
                    ],
                    "pk_columns": [
                        290,
                        "circles_pk_columns_input!"
                    ]
                }
            ],
            "update_circles_many": [
                286,
                {
                    "updates": [
                        304,
                        "[circles_updates!]!"
                    ]
                }
            ],
            "update_claims": [
                326,
                {
                    "_inc": [
                        320
                    ],
                    "_set": [
                        331
                    ],
                    "where": [
                        318,
                        "claims_bool_exp!"
                    ]
                }
            ],
            "update_claims_by_pk": [
                311,
                {
                    "_inc": [
                        320
                    ],
                    "_set": [
                        331
                    ],
                    "pk_columns": [
                        329,
                        "claims_pk_columns_input!"
                    ]
                }
            ],
            "update_claims_many": [
                326,
                {
                    "updates": [
                        343,
                        "[claims_updates!]!"
                    ]
                }
            ],
            "update_contributions": [
                365,
                {
                    "_inc": [
                        359
                    ],
                    "_set": [
                        370
                    ],
                    "where": [
                        357,
                        "contributions_bool_exp!"
                    ]
                }
            ],
            "update_contributions_by_pk": [
                350,
                {
                    "_inc": [
                        359
                    ],
                    "_set": [
                        370
                    ],
                    "pk_columns": [
                        368,
                        "contributions_pk_columns_input!"
                    ]
                }
            ],
            "update_contributions_many": [
                365,
                {
                    "updates": [
                        382,
                        "[contributions_updates!]!"
                    ]
                }
            ],
            "update_discord_roles_circles": [
                402,
                {
                    "_inc": [
                        398
                    ],
                    "_set": [
                        407
                    ],
                    "where": [
                        396,
                        "discord_roles_circles_bool_exp!"
                    ]
                }
            ],
            "update_discord_roles_circles_by_pk": [
                392,
                {
                    "_inc": [
                        398
                    ],
                    "_set": [
                        407
                    ],
                    "pk_columns": [
                        405,
                        "discord_roles_circles_pk_columns_input!"
                    ]
                }
            ],
            "update_discord_roles_circles_many": [
                402,
                {
                    "updates": [
                        415,
                        "[discord_roles_circles_updates!]!"
                    ]
                }
            ],
            "update_discord_users": [
                429,
                {
                    "_inc": [
                        425
                    ],
                    "_set": [
                        434
                    ],
                    "where": [
                        423,
                        "discord_users_bool_exp!"
                    ]
                }
            ],
            "update_discord_users_by_pk": [
                419,
                {
                    "_inc": [
                        425
                    ],
                    "_set": [
                        434
                    ],
                    "pk_columns": [
                        432,
                        "discord_users_pk_columns_input!"
                    ]
                }
            ],
            "update_discord_users_many": [
                429,
                {
                    "updates": [
                        442,
                        "[discord_users_updates!]!"
                    ]
                }
            ],
            "update_distributions": [
                465,
                {
                    "_append": [
                        450
                    ],
                    "_delete_at_path": [
                        456
                    ],
                    "_delete_elem": [
                        457
                    ],
                    "_delete_key": [
                        458
                    ],
                    "_inc": [
                        459
                    ],
                    "_prepend": [
                        470
                    ],
                    "_set": [
                        472
                    ],
                    "where": [
                        454,
                        "distributions_bool_exp!"
                    ]
                }
            ],
            "update_distributions_by_pk": [
                446,
                {
                    "_append": [
                        450
                    ],
                    "_delete_at_path": [
                        456
                    ],
                    "_delete_elem": [
                        457
                    ],
                    "_delete_key": [
                        458
                    ],
                    "_inc": [
                        459
                    ],
                    "_prepend": [
                        470
                    ],
                    "_set": [
                        472
                    ],
                    "pk_columns": [
                        469,
                        "distributions_pk_columns_input!"
                    ]
                }
            ],
            "update_distributions_many": [
                465,
                {
                    "updates": [
                        484,
                        "[distributions_updates!]!"
                    ]
                }
            ],
            "update_epochs": [
                506,
                {
                    "_inc": [
                        500
                    ],
                    "_set": [
                        512
                    ],
                    "where": [
                        498,
                        "epochs_bool_exp!"
                    ]
                }
            ],
            "update_epochs_by_pk": [
                491,
                {
                    "_inc": [
                        500
                    ],
                    "_set": [
                        512
                    ],
                    "pk_columns": [
                        510,
                        "epochs_pk_columns_input!"
                    ]
                }
            ],
            "update_epochs_many": [
                506,
                {
                    "updates": [
                        524,
                        "[epochs_updates!]!"
                    ]
                }
            ],
            "update_gift_private": [
                540,
                {
                    "_inc": [
                        536
                    ],
                    "_set": [
                        544
                    ],
                    "where": [
                        535,
                        "gift_private_bool_exp!"
                    ]
                }
            ],
            "update_gift_private_many": [
                540,
                {
                    "updates": [
                        551,
                        "[gift_private_updates!]!"
                    ]
                }
            ],
            "update_histories": [
                565,
                {
                    "_inc": [
                        561
                    ],
                    "_set": [
                        570
                    ],
                    "where": [
                        559,
                        "histories_bool_exp!"
                    ]
                }
            ],
            "update_histories_by_pk": [
                555,
                {
                    "_inc": [
                        561
                    ],
                    "_set": [
                        570
                    ],
                    "pk_columns": [
                        568,
                        "histories_pk_columns_input!"
                    ]
                }
            ],
            "update_histories_many": [
                565,
                {
                    "updates": [
                        578,
                        "[histories_updates!]!"
                    ]
                }
            ],
            "update_interaction_events": [
                596,
                {
                    "_append": [
                        585
                    ],
                    "_delete_at_path": [
                        589
                    ],
                    "_delete_elem": [
                        590
                    ],
                    "_delete_key": [
                        591
                    ],
                    "_inc": [
                        592
                    ],
                    "_prepend": [
                        600
                    ],
                    "_set": [
                        602
                    ],
                    "where": [
                        587,
                        "interaction_events_bool_exp!"
                    ]
                }
            ],
            "update_interaction_events_by_pk": [
                582,
                {
                    "_append": [
                        585
                    ],
                    "_delete_at_path": [
                        589
                    ],
                    "_delete_elem": [
                        590
                    ],
                    "_delete_key": [
                        591
                    ],
                    "_inc": [
                        592
                    ],
                    "_prepend": [
                        600
                    ],
                    "_set": [
                        602
                    ],
                    "pk_columns": [
                        599,
                        "interaction_events_pk_columns_input!"
                    ]
                }
            ],
            "update_interaction_events_many": [
                596,
                {
                    "updates": [
                        610,
                        "[interaction_events_updates!]!"
                    ]
                }
            ],
            "update_nominees": [
                634,
                {
                    "_inc": [
                        628
                    ],
                    "_set": [
                        640
                    ],
                    "where": [
                        626,
                        "nominees_bool_exp!"
                    ]
                }
            ],
            "update_nominees_by_pk": [
                619,
                {
                    "_inc": [
                        628
                    ],
                    "_set": [
                        640
                    ],
                    "pk_columns": [
                        638,
                        "nominees_pk_columns_input!"
                    ]
                }
            ],
            "update_nominees_many": [
                634,
                {
                    "updates": [
                        652,
                        "[nominees_updates!]!"
                    ]
                }
            ],
            "update_organizations": [
                672,
                {
                    "_inc": [
                        668
                    ],
                    "_set": [
                        678
                    ],
                    "where": [
                        666,
                        "organizations_bool_exp!"
                    ]
                }
            ],
            "update_organizations_by_pk": [
                662,
                {
                    "_inc": [
                        668
                    ],
                    "_set": [
                        678
                    ],
                    "pk_columns": [
                        676,
                        "organizations_pk_columns_input!"
                    ]
                }
            ],
            "update_organizations_many": [
                672,
                {
                    "updates": [
                        686,
                        "[organizations_updates!]!"
                    ]
                }
            ],
            "update_pending_gift_private": [
                699,
                {
                    "_inc": [
                        695
                    ],
                    "_set": [
                        703
                    ],
                    "where": [
                        694,
                        "pending_gift_private_bool_exp!"
                    ]
                }
            ],
            "update_pending_gift_private_many": [
                699,
                {
                    "updates": [
                        710,
                        "[pending_gift_private_updates!]!"
                    ]
                }
            ],
            "update_pending_token_gifts": [
                729,
                {
                    "_inc": [
                        723
                    ],
                    "_set": [
                        734
                    ],
                    "where": [
                        721,
                        "pending_token_gifts_bool_exp!"
                    ]
                }
            ],
            "update_pending_token_gifts_by_pk": [
                714,
                {
                    "_inc": [
                        723
                    ],
                    "_set": [
                        734
                    ],
                    "pk_columns": [
                        732,
                        "pending_token_gifts_pk_columns_input!"
                    ]
                }
            ],
            "update_pending_token_gifts_many": [
                729,
                {
                    "updates": [
                        746,
                        "[pending_token_gifts_updates!]!"
                    ]
                }
            ],
            "update_pending_vault_transactions": [
                763,
                {
                    "_inc": [
                        759
                    ],
                    "_set": [
                        768
                    ],
                    "where": [
                        757,
                        "pending_vault_transactions_bool_exp!"
                    ]
                }
            ],
            "update_pending_vault_transactions_by_pk": [
                753,
                {
                    "_inc": [
                        759
                    ],
                    "_set": [
                        768
                    ],
                    "pk_columns": [
                        766,
                        "pending_vault_transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_pending_vault_transactions_many": [
                763,
                {
                    "updates": [
                        776,
                        "[pending_vault_transactions_updates!]!"
                    ]
                }
            ],
            "update_personal_access_tokens": [
                790,
                {
                    "_inc": [
                        786
                    ],
                    "_set": [
                        795
                    ],
                    "where": [
                        784,
                        "personal_access_tokens_bool_exp!"
                    ]
                }
            ],
            "update_personal_access_tokens_by_pk": [
                780,
                {
                    "_inc": [
                        786
                    ],
                    "_set": [
                        795
                    ],
                    "pk_columns": [
                        793,
                        "personal_access_tokens_pk_columns_input!"
                    ]
                }
            ],
            "update_personal_access_tokens_many": [
                790,
                {
                    "updates": [
                        803,
                        "[personal_access_tokens_updates!]!"
                    ]
                }
            ],
            "update_profiles": [
                817,
                {
                    "_inc": [
                        813
                    ],
                    "_set": [
                        823
                    ],
                    "where": [
                        811,
                        "profiles_bool_exp!"
                    ]
                }
            ],
            "update_profiles_by_pk": [
                807,
                {
                    "_inc": [
                        813
                    ],
                    "_set": [
                        823
                    ],
                    "pk_columns": [
                        821,
                        "profiles_pk_columns_input!"
                    ]
                }
            ],
            "update_profiles_many": [
                817,
                {
                    "updates": [
                        831,
                        "[profiles_updates!]!"
                    ]
                }
            ],
            "update_teammates": [
                850,
                {
                    "_inc": [
                        844
                    ],
                    "_set": [
                        855
                    ],
                    "where": [
                        842,
                        "teammates_bool_exp!"
                    ]
                }
            ],
            "update_teammates_by_pk": [
                835,
                {
                    "_inc": [
                        844
                    ],
                    "_set": [
                        855
                    ],
                    "pk_columns": [
                        853,
                        "teammates_pk_columns_input!"
                    ]
                }
            ],
            "update_teammates_many": [
                850,
                {
                    "updates": [
                        867,
                        "[teammates_updates!]!"
                    ]
                }
            ],
            "update_token_gifts": [
                893,
                {
                    "_inc": [
                        887
                    ],
                    "_set": [
                        898
                    ],
                    "where": [
                        885,
                        "token_gifts_bool_exp!"
                    ]
                }
            ],
            "update_token_gifts_by_pk": [
                878,
                {
                    "_inc": [
                        887
                    ],
                    "_set": [
                        898
                    ],
                    "pk_columns": [
                        896,
                        "token_gifts_pk_columns_input!"
                    ]
                }
            ],
            "update_token_gifts_many": [
                893,
                {
                    "updates": [
                        910,
                        "[token_gifts_updates!]!"
                    ]
                }
            ],
            "update_users": [
                952,
                {
                    "_inc": [
                        946
                    ],
                    "_set": [
                        958
                    ],
                    "where": [
                        944,
                        "users_bool_exp!"
                    ]
                }
            ],
            "update_users_by_pk": [
                937,
                {
                    "_inc": [
                        946
                    ],
                    "_set": [
                        958
                    ],
                    "pk_columns": [
                        956,
                        "users_pk_columns_input!"
                    ]
                }
            ],
            "update_users_many": [
                952,
                {
                    "updates": [
                        970,
                        "[users_updates!]!"
                    ]
                }
            ],
            "update_vault_transactions": [
                994,
                {
                    "_inc": [
                        988
                    ],
                    "_set": [
                        999
                    ],
                    "where": [
                        986,
                        "vault_transactions_bool_exp!"
                    ]
                }
            ],
            "update_vault_transactions_by_pk": [
                979,
                {
                    "_inc": [
                        988
                    ],
                    "_set": [
                        999
                    ],
                    "pk_columns": [
                        997,
                        "vault_transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_vault_transactions_many": [
                994,
                {
                    "updates": [
                        1011,
                        "[vault_transactions_updates!]!"
                    ]
                }
            ],
            "update_vault_tx_types": [
                1028,
                {
                    "_set": [
                        1034
                    ],
                    "where": [
                        1021,
                        "vault_tx_types_bool_exp!"
                    ]
                }
            ],
            "update_vault_tx_types_by_pk": [
                1018,
                {
                    "_set": [
                        1034
                    ],
                    "pk_columns": [
                        1032,
                        "vault_tx_types_pk_columns_input!"
                    ]
                }
            ],
            "update_vault_tx_types_many": [
                1028,
                {
                    "updates": [
                        1038,
                        "[vault_tx_types_updates!]!"
                    ]
                }
            ],
            "update_vaults": [
                1054,
                {
                    "_inc": [
                        1048
                    ],
                    "_set": [
                        1060
                    ],
                    "where": [
                        1046,
                        "vaults_bool_exp!"
                    ]
                }
            ],
            "update_vaults_by_pk": [
                1039,
                {
                    "_inc": [
                        1048
                    ],
                    "_set": [
                        1060
                    ],
                    "pk_columns": [
                        1058,
                        "vaults_pk_columns_input!"
                    ]
                }
            ],
            "update_vaults_many": [
                1054,
                {
                    "updates": [
                        1072,
                        "[vaults_updates!]!"
                    ]
                }
            ],
            "update_vouches": [
                1094,
                {
                    "_inc": [
                        1088
                    ],
                    "_set": [
                        1099
                    ],
                    "where": [
                        1086,
                        "vouches_bool_exp!"
                    ]
                }
            ],
            "update_vouches_by_pk": [
                1079,
                {
                    "_inc": [
                        1088
                    ],
                    "_set": [
                        1099
                    ],
                    "pk_columns": [
                        1097,
                        "vouches_pk_columns_input!"
                    ]
                }
            ],
            "update_vouches_many": [
                1094,
                {
                    "updates": [
                        1111,
                        "[vouches_updates!]!"
                    ]
                }
            ],
            "uploadCircleLogo": [
                44,
                {
                    "payload": [
                        53,
                        "UploadCircleImageInput!"
                    ]
                }
            ],
            "uploadOrgLogo": [
                48,
                {
                    "payload": [
                        55,
                        "UploadOrgImageInput!"
                    ]
                }
            ],
            "uploadProfileAvatar": [
                49,
                {
                    "payload": [
                        54,
                        "UploadImageInput!"
                    ]
                }
            ],
            "uploadProfileBackground": [
                49,
                {
                    "payload": [
                        54,
                        "UploadImageInput!"
                    ]
                }
            ],
            "vouch": [
                60,
                {
                    "payload": [
                        59,
                        "VouchInput!"
                    ]
                }
            ],
            "__typename": [
                40
            ]
        },
        "Subscription": {
            "burns": [
                63,
                {
                    "distinct_on": [
                        82,
                        "[burns_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        80,
                        "[burns_order_by!]"
                    ],
                    "where": [
                        70
                    ]
                }
            ],
            "burns_aggregate": [
                64,
                {
                    "distinct_on": [
                        82,
                        "[burns_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        80,
                        "[burns_order_by!]"
                    ],
                    "where": [
                        70
                    ]
                }
            ],
            "burns_by_pk": [
                63,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "burns_stream": [
                63,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        90,
                        "[burns_stream_cursor_input]!"
                    ],
                    "where": [
                        70
                    ]
                }
            ],
            "circle_api_keys": [
                102,
                {
                    "distinct_on": [
                        122,
                        "[circle_api_keys_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        120,
                        "[circle_api_keys_order_by!]"
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "circle_api_keys_aggregate": [
                103,
                {
                    "distinct_on": [
                        122,
                        "[circle_api_keys_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        120,
                        "[circle_api_keys_order_by!]"
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "circle_api_keys_by_pk": [
                102,
                {
                    "hash": [
                        40,
                        "String!"
                    ]
                }
            ],
            "circle_api_keys_stream": [
                102,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        130,
                        "[circle_api_keys_stream_cursor_input]!"
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "circle_integrations": [
                142,
                {
                    "distinct_on": [
                        161,
                        "[circle_integrations_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        159,
                        "[circle_integrations_order_by!]"
                    ],
                    "where": [
                        149
                    ]
                }
            ],
            "circle_integrations_aggregate": [
                143,
                {
                    "distinct_on": [
                        161,
                        "[circle_integrations_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        159,
                        "[circle_integrations_order_by!]"
                    ],
                    "where": [
                        149
                    ]
                }
            ],
            "circle_integrations_by_pk": [
                142,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "circle_integrations_stream": [
                142,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        169,
                        "[circle_integrations_stream_cursor_input]!"
                    ],
                    "where": [
                        149
                    ]
                }
            ],
            "circle_metadata": [
                181,
                {
                    "distinct_on": [
                        200,
                        "[circle_metadata_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        198,
                        "[circle_metadata_order_by!]"
                    ],
                    "where": [
                        188
                    ]
                }
            ],
            "circle_metadata_aggregate": [
                182,
                {
                    "distinct_on": [
                        200,
                        "[circle_metadata_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        198,
                        "[circle_metadata_order_by!]"
                    ],
                    "where": [
                        188
                    ]
                }
            ],
            "circle_metadata_by_pk": [
                181,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "circle_metadata_stream": [
                181,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        208,
                        "[circle_metadata_stream_cursor_input]!"
                    ],
                    "where": [
                        188
                    ]
                }
            ],
            "circle_private": [
                220,
                {
                    "distinct_on": [
                        232,
                        "[circle_private_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        231,
                        "[circle_private_order_by!]"
                    ],
                    "where": [
                        224
                    ]
                }
            ],
            "circle_private_aggregate": [
                221,
                {
                    "distinct_on": [
                        232,
                        "[circle_private_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        231,
                        "[circle_private_order_by!]"
                    ],
                    "where": [
                        224
                    ]
                }
            ],
            "circle_private_stream": [
                220,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        237,
                        "[circle_private_stream_cursor_input]!"
                    ],
                    "where": [
                        224
                    ]
                }
            ],
            "circle_share_tokens": [
                244,
                {
                    "distinct_on": [
                        258,
                        "[circle_share_tokens_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        256,
                        "[circle_share_tokens_order_by!]"
                    ],
                    "where": [
                        248
                    ]
                }
            ],
            "circle_share_tokens_aggregate": [
                245,
                {
                    "distinct_on": [
                        258,
                        "[circle_share_tokens_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        256,
                        "[circle_share_tokens_order_by!]"
                    ],
                    "where": [
                        248
                    ]
                }
            ],
            "circle_share_tokens_by_pk": [
                244,
                {
                    "circle_id": [
                        61,
                        "bigint!"
                    ],
                    "type": [
                        31,
                        "Int!"
                    ]
                }
            ],
            "circle_share_tokens_stream": [
                244,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        263,
                        "[circle_share_tokens_stream_cursor_input]!"
                    ],
                    "where": [
                        248
                    ]
                }
            ],
            "circles": [
                271,
                {
                    "distinct_on": [
                        291,
                        "[circles_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        289,
                        "[circles_order_by!]"
                    ],
                    "where": [
                        278
                    ]
                }
            ],
            "circles_aggregate": [
                272,
                {
                    "distinct_on": [
                        291,
                        "[circles_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        289,
                        "[circles_order_by!]"
                    ],
                    "where": [
                        278
                    ]
                }
            ],
            "circles_by_pk": [
                271,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "circles_stream": [
                271,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        299,
                        "[circles_stream_cursor_input]!"
                    ],
                    "where": [
                        278
                    ]
                }
            ],
            "claims": [
                311,
                {
                    "distinct_on": [
                        330,
                        "[claims_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        328,
                        "[claims_order_by!]"
                    ],
                    "where": [
                        318
                    ]
                }
            ],
            "claims_aggregate": [
                312,
                {
                    "distinct_on": [
                        330,
                        "[claims_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        328,
                        "[claims_order_by!]"
                    ],
                    "where": [
                        318
                    ]
                }
            ],
            "claims_by_pk": [
                311,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "claims_stream": [
                311,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        338,
                        "[claims_stream_cursor_input]!"
                    ],
                    "where": [
                        318
                    ]
                }
            ],
            "contributions": [
                350,
                {
                    "distinct_on": [
                        369,
                        "[contributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        367,
                        "[contributions_order_by!]"
                    ],
                    "where": [
                        357
                    ]
                }
            ],
            "contributions_aggregate": [
                351,
                {
                    "distinct_on": [
                        369,
                        "[contributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        367,
                        "[contributions_order_by!]"
                    ],
                    "where": [
                        357
                    ]
                }
            ],
            "contributions_by_pk": [
                350,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "contributions_stream": [
                350,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        377,
                        "[contributions_stream_cursor_input]!"
                    ],
                    "where": [
                        357
                    ]
                }
            ],
            "discord_roles_circles": [
                392,
                {
                    "distinct_on": [
                        406,
                        "[discord_roles_circles_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        404,
                        "[discord_roles_circles_order_by!]"
                    ],
                    "where": [
                        396
                    ]
                }
            ],
            "discord_roles_circles_aggregate": [
                393,
                {
                    "distinct_on": [
                        406,
                        "[discord_roles_circles_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        404,
                        "[discord_roles_circles_order_by!]"
                    ],
                    "where": [
                        396
                    ]
                }
            ],
            "discord_roles_circles_by_pk": [
                392,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "discord_roles_circles_stream": [
                392,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        411,
                        "[discord_roles_circles_stream_cursor_input]!"
                    ],
                    "where": [
                        396
                    ]
                }
            ],
            "discord_users": [
                419,
                {
                    "distinct_on": [
                        433,
                        "[discord_users_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        431,
                        "[discord_users_order_by!]"
                    ],
                    "where": [
                        423
                    ]
                }
            ],
            "discord_users_aggregate": [
                420,
                {
                    "distinct_on": [
                        433,
                        "[discord_users_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        431,
                        "[discord_users_order_by!]"
                    ],
                    "where": [
                        423
                    ]
                }
            ],
            "discord_users_by_pk": [
                419,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "discord_users_stream": [
                419,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        438,
                        "[discord_users_stream_cursor_input]!"
                    ],
                    "where": [
                        423
                    ]
                }
            ],
            "distributions": [
                446,
                {
                    "distinct_on": [
                        471,
                        "[distributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        468,
                        "[distributions_order_by!]"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "distributions_aggregate": [
                447,
                {
                    "distinct_on": [
                        471,
                        "[distributions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        468,
                        "[distributions_order_by!]"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "distributions_by_pk": [
                446,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "distributions_stream": [
                446,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        479,
                        "[distributions_stream_cursor_input]!"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "epochs": [
                491,
                {
                    "distinct_on": [
                        511,
                        "[epochs_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        509,
                        "[epochs_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "epochs_aggregate": [
                492,
                {
                    "distinct_on": [
                        511,
                        "[epochs_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        509,
                        "[epochs_order_by!]"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "epochs_by_pk": [
                491,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "epochs_stream": [
                491,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        519,
                        "[epochs_stream_cursor_input]!"
                    ],
                    "where": [
                        498
                    ]
                }
            ],
            "gift_private": [
                531,
                {
                    "distinct_on": [
                        543,
                        "[gift_private_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        542,
                        "[gift_private_order_by!]"
                    ],
                    "where": [
                        535
                    ]
                }
            ],
            "gift_private_aggregate": [
                532,
                {
                    "distinct_on": [
                        543,
                        "[gift_private_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        542,
                        "[gift_private_order_by!]"
                    ],
                    "where": [
                        535
                    ]
                }
            ],
            "gift_private_stream": [
                531,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        548,
                        "[gift_private_stream_cursor_input]!"
                    ],
                    "where": [
                        535
                    ]
                }
            ],
            "histories": [
                555,
                {
                    "distinct_on": [
                        569,
                        "[histories_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        567,
                        "[histories_order_by!]"
                    ],
                    "where": [
                        559
                    ]
                }
            ],
            "histories_aggregate": [
                556,
                {
                    "distinct_on": [
                        569,
                        "[histories_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        567,
                        "[histories_order_by!]"
                    ],
                    "where": [
                        559
                    ]
                }
            ],
            "histories_by_pk": [
                555,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "histories_stream": [
                555,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        574,
                        "[histories_stream_cursor_input]!"
                    ],
                    "where": [
                        559
                    ]
                }
            ],
            "interaction_events": [
                582,
                {
                    "distinct_on": [
                        601,
                        "[interaction_events_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        598,
                        "[interaction_events_order_by!]"
                    ],
                    "where": [
                        587
                    ]
                }
            ],
            "interaction_events_aggregate": [
                583,
                {
                    "distinct_on": [
                        601,
                        "[interaction_events_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        598,
                        "[interaction_events_order_by!]"
                    ],
                    "where": [
                        587
                    ]
                }
            ],
            "interaction_events_by_pk": [
                582,
                {
                    "id": [
                        31,
                        "Int!"
                    ]
                }
            ],
            "interaction_events_stream": [
                582,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        606,
                        "[interaction_events_stream_cursor_input]!"
                    ],
                    "where": [
                        587
                    ]
                }
            ],
            "nominees": [
                619,
                {
                    "distinct_on": [
                        639,
                        "[nominees_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        637,
                        "[nominees_order_by!]"
                    ],
                    "where": [
                        626
                    ]
                }
            ],
            "nominees_aggregate": [
                620,
                {
                    "distinct_on": [
                        639,
                        "[nominees_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        637,
                        "[nominees_order_by!]"
                    ],
                    "where": [
                        626
                    ]
                }
            ],
            "nominees_by_pk": [
                619,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "nominees_stream": [
                619,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        647,
                        "[nominees_stream_cursor_input]!"
                    ],
                    "where": [
                        626
                    ]
                }
            ],
            "organizations": [
                662,
                {
                    "distinct_on": [
                        677,
                        "[organizations_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        675,
                        "[organizations_order_by!]"
                    ],
                    "where": [
                        666
                    ]
                }
            ],
            "organizations_aggregate": [
                663,
                {
                    "distinct_on": [
                        677,
                        "[organizations_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        675,
                        "[organizations_order_by!]"
                    ],
                    "where": [
                        666
                    ]
                }
            ],
            "organizations_by_pk": [
                662,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "organizations_stream": [
                662,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        682,
                        "[organizations_stream_cursor_input]!"
                    ],
                    "where": [
                        666
                    ]
                }
            ],
            "pending_gift_private": [
                690,
                {
                    "distinct_on": [
                        702,
                        "[pending_gift_private_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        701,
                        "[pending_gift_private_order_by!]"
                    ],
                    "where": [
                        694
                    ]
                }
            ],
            "pending_gift_private_aggregate": [
                691,
                {
                    "distinct_on": [
                        702,
                        "[pending_gift_private_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        701,
                        "[pending_gift_private_order_by!]"
                    ],
                    "where": [
                        694
                    ]
                }
            ],
            "pending_gift_private_stream": [
                690,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        707,
                        "[pending_gift_private_stream_cursor_input]!"
                    ],
                    "where": [
                        694
                    ]
                }
            ],
            "pending_token_gifts": [
                714,
                {
                    "distinct_on": [
                        733,
                        "[pending_token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        731,
                        "[pending_token_gifts_order_by!]"
                    ],
                    "where": [
                        721
                    ]
                }
            ],
            "pending_token_gifts_aggregate": [
                715,
                {
                    "distinct_on": [
                        733,
                        "[pending_token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        731,
                        "[pending_token_gifts_order_by!]"
                    ],
                    "where": [
                        721
                    ]
                }
            ],
            "pending_token_gifts_by_pk": [
                714,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "pending_token_gifts_stream": [
                714,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        741,
                        "[pending_token_gifts_stream_cursor_input]!"
                    ],
                    "where": [
                        721
                    ]
                }
            ],
            "pending_vault_transactions": [
                753,
                {
                    "distinct_on": [
                        767,
                        "[pending_vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        765,
                        "[pending_vault_transactions_order_by!]"
                    ],
                    "where": [
                        757
                    ]
                }
            ],
            "pending_vault_transactions_aggregate": [
                754,
                {
                    "distinct_on": [
                        767,
                        "[pending_vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        765,
                        "[pending_vault_transactions_order_by!]"
                    ],
                    "where": [
                        757
                    ]
                }
            ],
            "pending_vault_transactions_by_pk": [
                753,
                {
                    "tx_hash": [
                        40,
                        "String!"
                    ]
                }
            ],
            "pending_vault_transactions_stream": [
                753,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        772,
                        "[pending_vault_transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        757
                    ]
                }
            ],
            "personal_access_tokens": [
                780,
                {
                    "distinct_on": [
                        794,
                        "[personal_access_tokens_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        792,
                        "[personal_access_tokens_order_by!]"
                    ],
                    "where": [
                        784
                    ]
                }
            ],
            "personal_access_tokens_aggregate": [
                781,
                {
                    "distinct_on": [
                        794,
                        "[personal_access_tokens_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        792,
                        "[personal_access_tokens_order_by!]"
                    ],
                    "where": [
                        784
                    ]
                }
            ],
            "personal_access_tokens_by_pk": [
                780,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "personal_access_tokens_stream": [
                780,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        799,
                        "[personal_access_tokens_stream_cursor_input]!"
                    ],
                    "where": [
                        784
                    ]
                }
            ],
            "profiles": [
                807,
                {
                    "distinct_on": [
                        822,
                        "[profiles_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        820,
                        "[profiles_order_by!]"
                    ],
                    "where": [
                        811
                    ]
                }
            ],
            "profiles_aggregate": [
                808,
                {
                    "distinct_on": [
                        822,
                        "[profiles_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        820,
                        "[profiles_order_by!]"
                    ],
                    "where": [
                        811
                    ]
                }
            ],
            "profiles_by_pk": [
                807,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "profiles_stream": [
                807,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        827,
                        "[profiles_stream_cursor_input]!"
                    ],
                    "where": [
                        811
                    ]
                }
            ],
            "teammates": [
                835,
                {
                    "distinct_on": [
                        854,
                        "[teammates_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        852,
                        "[teammates_order_by!]"
                    ],
                    "where": [
                        842
                    ]
                }
            ],
            "teammates_aggregate": [
                836,
                {
                    "distinct_on": [
                        854,
                        "[teammates_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        852,
                        "[teammates_order_by!]"
                    ],
                    "where": [
                        842
                    ]
                }
            ],
            "teammates_by_pk": [
                835,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "teammates_stream": [
                835,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        862,
                        "[teammates_stream_cursor_input]!"
                    ],
                    "where": [
                        842
                    ]
                }
            ],
            "token_gifts": [
                878,
                {
                    "distinct_on": [
                        897,
                        "[token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        895,
                        "[token_gifts_order_by!]"
                    ],
                    "where": [
                        885
                    ]
                }
            ],
            "token_gifts_aggregate": [
                879,
                {
                    "distinct_on": [
                        897,
                        "[token_gifts_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        895,
                        "[token_gifts_order_by!]"
                    ],
                    "where": [
                        885
                    ]
                }
            ],
            "token_gifts_by_pk": [
                878,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "token_gifts_stream": [
                878,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        905,
                        "[token_gifts_stream_cursor_input]!"
                    ],
                    "where": [
                        885
                    ]
                }
            ],
            "user_private": [
                917,
                {
                    "distinct_on": [
                        927,
                        "[user_private_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        926,
                        "[user_private_order_by!]"
                    ],
                    "where": [
                        921
                    ]
                }
            ],
            "user_private_aggregate": [
                918,
                {
                    "distinct_on": [
                        927,
                        "[user_private_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        926,
                        "[user_private_order_by!]"
                    ],
                    "where": [
                        921
                    ]
                }
            ],
            "user_private_stream": [
                917,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        931,
                        "[user_private_stream_cursor_input]!"
                    ],
                    "where": [
                        921
                    ]
                }
            ],
            "users": [
                937,
                {
                    "distinct_on": [
                        957,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        955,
                        "[users_order_by!]"
                    ],
                    "where": [
                        944
                    ]
                }
            ],
            "users_aggregate": [
                938,
                {
                    "distinct_on": [
                        957,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        955,
                        "[users_order_by!]"
                    ],
                    "where": [
                        944
                    ]
                }
            ],
            "users_by_pk": [
                937,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "users_stream": [
                937,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        965,
                        "[users_stream_cursor_input]!"
                    ],
                    "where": [
                        944
                    ]
                }
            ],
            "vault_transactions": [
                979,
                {
                    "distinct_on": [
                        998,
                        "[vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        996,
                        "[vault_transactions_order_by!]"
                    ],
                    "where": [
                        986
                    ]
                }
            ],
            "vault_transactions_aggregate": [
                980,
                {
                    "distinct_on": [
                        998,
                        "[vault_transactions_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        996,
                        "[vault_transactions_order_by!]"
                    ],
                    "where": [
                        986
                    ]
                }
            ],
            "vault_transactions_by_pk": [
                979,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "vault_transactions_stream": [
                979,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        1006,
                        "[vault_transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        986
                    ]
                }
            ],
            "vault_tx_types": [
                1018,
                {
                    "distinct_on": [
                        1033,
                        "[vault_tx_types_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1031,
                        "[vault_tx_types_order_by!]"
                    ],
                    "where": [
                        1021
                    ]
                }
            ],
            "vault_tx_types_aggregate": [
                1019,
                {
                    "distinct_on": [
                        1033,
                        "[vault_tx_types_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1031,
                        "[vault_tx_types_order_by!]"
                    ],
                    "where": [
                        1021
                    ]
                }
            ],
            "vault_tx_types_by_pk": [
                1018,
                {
                    "value": [
                        40,
                        "String!"
                    ]
                }
            ],
            "vault_tx_types_stream": [
                1018,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        1035,
                        "[vault_tx_types_stream_cursor_input]!"
                    ],
                    "where": [
                        1021
                    ]
                }
            ],
            "vaults": [
                1039,
                {
                    "distinct_on": [
                        1059,
                        "[vaults_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1057,
                        "[vaults_order_by!]"
                    ],
                    "where": [
                        1046
                    ]
                }
            ],
            "vaults_aggregate": [
                1040,
                {
                    "distinct_on": [
                        1059,
                        "[vaults_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1057,
                        "[vaults_order_by!]"
                    ],
                    "where": [
                        1046
                    ]
                }
            ],
            "vaults_by_pk": [
                1039,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "vaults_stream": [
                1039,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        1067,
                        "[vaults_stream_cursor_input]!"
                    ],
                    "where": [
                        1046
                    ]
                }
            ],
            "vouches": [
                1079,
                {
                    "distinct_on": [
                        1098,
                        "[vouches_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1096,
                        "[vouches_order_by!]"
                    ],
                    "where": [
                        1086
                    ]
                }
            ],
            "vouches_aggregate": [
                1080,
                {
                    "distinct_on": [
                        1098,
                        "[vouches_select_column!]"
                    ],
                    "limit": [
                        31
                    ],
                    "offset": [
                        31
                    ],
                    "order_by": [
                        1096,
                        "[vouches_order_by!]"
                    ],
                    "where": [
                        1086
                    ]
                }
            ],
            "vouches_by_pk": [
                1079,
                {
                    "id": [
                        61,
                        "bigint!"
                    ]
                }
            ],
            "vouches_stream": [
                1079,
                {
                    "batch_size": [
                        31,
                        "Int!"
                    ],
                    "cursor": [
                        1106,
                        "[vouches_stream_cursor_input]!"
                    ],
                    "where": [
                        1086
                    ]
                }
            ],
            "__typename": [
                40
            ]
        }
    }
}