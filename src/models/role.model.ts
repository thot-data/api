import { BaseObject } from './base-object.model';

export class Role extends BaseObject{
	user: 	string;
	role: 	string;

	constructor( user: string, role: string ) {
		const props = {
			user: user,
			role: role
		};

		super();
		this.add_properties( Object.keys( props ) );  
		this.set_properties( props );
	
	} // end #constructor

}