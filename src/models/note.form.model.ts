import { FormControl } from '@angular/forms';

import { Note } from './note.model';
import { BaseFormArray } 			from './base-object.form.model';
import { ResourceFormGroup } 	from './resource.form.model';
import { RolesFormArray } 		from './role.form.model';

export class NoteFormGroup extends ResourceFormGroup {
	created: 	FormControl;
	title: 	 	FormControl;
	content: 	FormControl;
	roles: 		RolesFormArray;		
  
	constructor( note = new Note() ) {
		super( note );
	}
} 


export class NotesFormArray extends BaseFormArray<NoteFormGroup> {
	constructor( notes = [] as Array<NoteFormGroup> ) {
		super( notes );
	}
} 