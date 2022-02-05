import { FormControl } from '@angular/forms';

import { FileResource } from './file-resource.model';
import { StandardResourceFormGroup } from './standard-resource.form.model';

export class FileResourceFormGroup extends StandardResourceFormGroup {
	file: FormControl;
  
	constructor( resource = new FileResource() ) {
		super( resource );
	}

}
