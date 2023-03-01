// Code generated by wunderctl. DO NOT EDIT.

import type function_UsersGet from "../../.wundergraph/operations/users/get";
import type function_UsersNewsfeed from "../../.wundergraph/operations/users/newsfeed";
import type function_UsersSubscribe from "../../.wundergraph/operations/users/subscribe";
import type function_UsersUpdate from "../../.wundergraph/operations/users/update";
import type { ExtractInput, ExtractResponse } from "@wundergraph/sdk/operations";

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}

export type UsersGetInput = ExtractInput<typeof function_UsersGet>;

export type UsersNewsfeedInput = ExtractInput<typeof function_UsersNewsfeed>;

export type UsersSubscribeInput = ExtractInput<typeof function_UsersSubscribe>;

export type UsersUpdateInput = ExtractInput<typeof function_UsersUpdate>;

export interface InternalUsersGetInput {
	id: string;
}

export interface InternalUsersNewsfeedInput {
	id: string;
}

export interface InternalUsersSubscribeInput {
	id: string;
}

export interface InternalUsersUpdateInput {
	id: string;
	name: string;
	bio: string;
}

export interface DeedsResponse {
	data?: DeedsResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface DigitransResponse {
	data?: DigitransResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface DragonsResponse {
	data?: DragonsResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface UsersGetResponse {
	data?: UsersGetResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface UsersNewsfeedResponse {
	data?: UsersNewsfeedResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface UsersSubscribeResponse {
	data?: UsersSubscribeResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface UsersUpdateResponse {
	data?: UsersUpdateResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface DeedsResponseData {
	db_findManydistricts: {
		dist_aname?: string;
		area?: number;
	}[];
}

export interface DigitransResponseData {
	stop?: {
		name: string;
		lat?: number;
		lon?: number;
	};
}

export interface DragonsResponseData {
	spacex_launchLatest?: {
		id?: string;
		details?: string;
		mission_name?: string;
		launch_year?: string;
	};
}

export type UsersGetResponseData = ExtractResponse<typeof function_UsersGet>;

export type UsersNewsfeedResponseData = ExtractResponse<typeof function_UsersNewsfeed>;

export type UsersSubscribeResponseData = ExtractResponse<typeof function_UsersSubscribe>;

export type UsersUpdateResponseData = ExtractResponse<typeof function_UsersUpdate>;
