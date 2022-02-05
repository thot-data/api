import { StandardResource } from './standard-resource.model';

export class Library extends StandardResource {
	path: 						any;
	language: 				string;

	constructor( library?: any ) {
		const props = {
			path: 			undefined,
			language: 	undefined
		};

		super();
		this.add_properties( Object.keys( props ) );  
		this.set_properties( { ...props, ...library } );
	} // end #constructor
}


export class RemoteLibrary {
	name: 			string;
	language:		string;
	version?:		string;


	constructor( library?: any ) {
		if ( !library ) {
			library = {
				name: 		undefined,
				version: 	undefined,
				language: undefined
			};
		}

		this.name 		= library.name;
		this.version 	= library.version;
		this.language = library.language;
	}
}