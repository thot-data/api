import { v4 as create_uuid } 	from 'uuid';
import { BaseObject } 				from './base-object.model';
import { Resource as ResourceInt } from '@interfaces/models/resource.interface'; 


export class Resource 
	extends BaseObject
	implements ResourceInt {

	_id:	string;
	__v?: number;

	constructor( resource = {} ) {
		const props = [ '_id' ];

		if ( ! resource[ '_id' ] ) {
			resource[ '_id' ] = '__new__' + create_uuid();
		}

		super( props );
		this.set_properties( resource );
	}

}