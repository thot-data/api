import { StandardResource } from './standard-resource.model';

export class FileResource extends StandardResource {
	file: string | File;

	constructor( obj?: any ) {
		const props = {
			file: 		undefined, 
		};

		super();
		this.add_properties( Object.keys( props ) );
		this.set_properties( { ...props, ...obj } );
	} // end #constructor

}