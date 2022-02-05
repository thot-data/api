import { FormControl } from '@angular/forms';

import { BaseFormGroup } from './base-object.form.model';
import { User } from './user.model';

export class UserFormGroup extends BaseFormGroup<User> {
	first_name: 	FormControl;
	last_name: 		FormControl;
	email: 				FormControl;
	password: 		FormControl;

	constructor( user = new User() ) {
		super( user );
	}
}