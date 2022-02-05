import { Resource } from './resource.model';

export class User extends Resource {
	first_name: 	string;
	last_name: 		string;
	email: 				string;
	password: 		string;

	constructor( user?: any ) {
		const props = {
			first_name: undefined,
			last_name: 	undefined,
			email: 			undefined,
			password: 	undefined
		};

		super();
		this.add_properties( Object.keys( props ) );  
		this.set_properties( { ...props, ...user } );

	} // end # constructor


	get display_name(): string {
		let name = `${this.first_name} ${this.last_name}`;
		return name.trim();
	}

};