import { Resource } from './resource.model';
import { Role } from './role.model';

export class Note extends Resource {
	created: 		any;
	title: 			string;
	content: 		string;
	roles:			Role[];

	constructor( note?: any ) {
		const props = {
			created:	Date.now(),
			title: 		undefined,
			content: 	undefined,
			roles: 		[]
		};

		super();
		this.add_properties( Object.keys( props ) );  
		this.set_properties( { ...props, ...note } );
	
	} // end #constructor
	
}