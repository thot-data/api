import { PartialOmit } from './common';


// enums

export enum ResourceType {
	Container,
	Asset,
	ScriptAssociation,
	Note
}


export enum CreatorType {
	User = 'User',
	Script = 'Script'
}


// type defs

export interface BaseResource {
	_id: string,
	__v?: number
}


export interface CreatedResource {
	creator: string;
	creatorType?: CreatorType;
	created: Date;
	modified: Date;
}

export type CreatedResourceInit = PartialOmit<CreatedResource, "creator">;


export type Tags = string[];
export type Metadata = { [key: string]: any };


export interface StandardResource
	extends BaseResource, CreatedResource {
	
	name?: string;
	type?: string;
	description?: string;
	tags: Tags;
	metadata: Metadata,
	parent?: Container | string;
}

export type StandardResourceInit = PartialOmit<StandardResource, "creator">;


export interface Container extends StandardResource {
	// @todo [1]: Allow children to be of type Container[] | string[];
	children: Container[];
	assets: Asset[];
	scripts: ScriptAssociation[];
}

export type ContainerInit = PartialOmit<Container, "creator">;


export interface Asset extends StandardResource {
	creator: CreatorType;
	file: string;
}


export interface ScriptAssociation {
	file: string;
	order?: number;
	autorun?: boolean;
	pipeline?: boolean;
}


export interface Note extends CreatedResource {
	_id: string;
	parent: string;
	title?: string;
	file: string;
}