import { FormControl, FormArray } from '@angular/forms';

import { StandardResource } 	from './standard-resource.model';
import { ResourceFormGroup } 	from './resource.form.model';
import { NoteFormGroup, NotesFormArray }		from '@models/note.form.model';
import { RoleFormGroup, RolesFormArray } 		from '@models/role.form.model';
import { MetadatumFormGroup, MetadataFormArray } 	from '@models/metadata.form.model';
import { StandardResource as StdResInt } 					from '@interfaces/models/standard-resource.interface'; 
import { 
	StandardResourceFormControls as Controls,
	StandardResourceFormGroup as StdResFGI 
} from '@interfaces/models/standard-resource.form.interface';


export class StandardResourceFormGroup 
	extends ResourceFormGroup
	implements StdResFGI {

	controls: Controls

	constructor( object: Partial<StandardResource> = new StandardResource() ) {
		if ( !( object instanceof StandardResource ) ) {
			object = new StandardResource( object );
		}

		super( object );

		// TODO [2]: Cast standard properties.
		const metadata 	= this.get( 'metadata' ) 	as MetadataFormArray,
					notes 		= this.get( 'notes' ) 		as NotesFormArray,
					roles 		= this.get( 'roles' ) 		as RolesFormArray;

		// cast metadata
		this.setControl(
			'metadata',
			new MetadataFormArray( metadata.controls as MetadatumFormGroup[] )
		);

		// cast notes
		this.setControl(
			'notes',
			new NotesFormArray( notes.controls as NoteFormGroup[] )
		);

		// cast roles
		this.setControl( 
			'roles',
			 new RolesFormArray( roles.controls as RoleFormGroup[] ) 
		);

	} // end #constructor

}