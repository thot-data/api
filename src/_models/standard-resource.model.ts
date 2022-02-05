import { v4 as uuid } from 'uuid';

import {
	Tags,
	Metadata,
	Container,
	StandardResource as StandardResourceInterface,
	StandardResourceInit,
	CreatorType
} from '@typedefs/resources';


export class StandardResource
	implements StandardResourceInterface {

	_id: string = uuid();
	__v?: number;

	creator: string;
	creatorType?: CreatorType;
	created: Date = new Date();
	modified: Date = new Date();

	name?: string;
	type?: string;
	description?: string;
	tags: Tags = [];
	metadata: Metadata = {};
	parent?: Container | string;


	/**
	 * @param {Partial<StandardResource>} properties - Properties object.
	 * 	Must include `creator`.
	 */
	constructor( properties: StandardResourceInit ) {
		if ( ! properties.creator ) {
			throw new Error( '`creator` must be assigned.' );
		}

		this.creator = properties.creator;  // required to supress assignment error
		// for ( let [ key, val ] of Object.entries( properties ) ) {
		// 	this[ key as keyof StandardResourceInt ] = val;
		// }

		// for ( let key of Object.keys( properties ) ) {
		// 	const val = properties[ key as keyof StandardResourceInt ];
		// 	if ( ! val ) {
		// 		continue;
		// 	}
			
		// 	this[ key as keyof StandardResource ] = val;
		// }
	}

}