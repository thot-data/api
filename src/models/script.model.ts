import { FileResource } from './file-resource.model';

export class Script extends FileResource {
	version?: string;

	constructor( script?: any ) {
		const props = {
			version: '0'
		};

		super();
		this.add_properties( Object.keys( props ) );  
		this.set_properties( { ...props, ...script } );
	} // end #constructor
}