import { FormArray, FormControl } from '@angular/forms';

import { Asset } from './asset.model';
import { StandardResourceFormGroup } 			from '@models/standard-resource.form.model';
import { ResourceFormArray} 							from '@models/resource.form.model';
import { cast_array } 										from '@models/base-object.form.model';

export class AssetFormGroup extends StandardResourceFormGroup {
	file: 				FormControl;
	creator_type: FormControl;
	creator: 			FormControl;
  
	constructor( asset: ( Asset | any ) = new Asset() ) {
		if ( !( asset instanceof Asset ) ) {
			asset = new Asset( asset );
		}

		super( asset );
	}
	
}


export class AssetsFormArray extends ResourceFormArray<AssetFormGroup> {

	constructor ( assets = [] as Array<AssetFormGroup> ) {
		super( cast_array( assets, AssetFormGroup ) );
	}

}