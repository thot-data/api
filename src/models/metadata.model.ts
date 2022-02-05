import { BaseObject } from './base-object.model';

export class Metadatum extends BaseObject {
	name: 		string;
	value: 		any;
	type: 		string;

	constructor( datum?: any ) {
		
		const props = { // whitelisted properties
			name: 	undefined, 
			value: 	undefined, 
			type: 	undefined
		};

		super( Object.keys( props ) );
		this.set_properties( { ...props, ...datum } );
	} // end #constructor
}