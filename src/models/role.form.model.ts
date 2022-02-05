import { FormArray, FormGroup, FormControl } from '@angular/forms';

import { Role } from './role.model';
import { BaseFormGroup, BaseFormArray } from './base-object.form.model';

export class RoleFormGroup extends BaseFormGroup<Role> {
	user: FormControl;
	role: FormControl;		
  
	constructor( role = new Role( undefined, undefined ) ) {
		super( role );
	}
} 


export class RolesFormArray extends BaseFormArray<RoleFormGroup> {
	constructor( roles = [] as Array<RoleFormGroup> ) {
		super( roles );
	}
} 