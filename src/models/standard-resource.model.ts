import { StandardResource as StdResInt } from '@interfaces/models/standard-resource.interface';
import { Resource } 	from './resource.model';
import { Metadatum } 	from './metadata.model';
import { Role } from './role.model';
import { Note } from './note.model';

export class StandardResource 
	extends Resource 
	implements StdResInt {

	created:				any;
	type: 					string;
	name: 					string;
	description: 		string;
	tags: 					string[];
	metadata: 			Metadatum[];
	roles:					Role[];
	notes: 					Note[];

	constructor( obj?: any ) {
		const props = {
			created: 			Date.now(), 
			type: 				undefined, 
			name: 				undefined, 
			description: 	undefined,
			tags: 				[], 
			metadata: 		[], 
			roles: 				[], 
			notes: 				[]
		};

		super();
		this.add_properties( Object.keys( props ) );
		this.set_properties( { ...props, ...obj } ); 
		this.cast_properties();
	}


	add_role( user: string, role: string ) {
		const new_role = new Role( user, role );
		this.add_item( new_role, this.roles, Role ); 
	}


	add_note( note: Note ) {
		this.add_item( note, this.notes, Note );
	}


	add_metadata( datum: Metadatum ) {
		this.add_item( datum, this.metadata, Metadatum );
	}


	add_item( item: any, array: any[], type: any ) {
		if ( !( item instanceof type ) ) {
			item = new type( item );
		}

		array.push( item ); 
	}

	cast_properties() {
		this.roles = this.roles.map( ( role: Role ) => new Role( role.user, role.role ) );
		this.notes = this.notes.map( ( note: Note ) => new Note( note ) );
		this.metadata = this.metadata.map( ( datum: Metadatum ) => new Metadatum( datum ) );
	}

}
