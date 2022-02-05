import { FileResource } from './file-resource.model';

export class Asset extends FileResource {
	creator_type: 	string;
	creator: 				string;

	constructor( asset?: any ) {
		const props = {
			creator: 	undefined, 
			creator_type: undefined
		};

		super();
		this.add_properties( Object.keys( props ) );
		this.set_properties( { ...props, ...asset } );
	} // end #constructor

}