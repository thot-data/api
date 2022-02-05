// import { FormGroup } 	from '@angular/forms';

import { Container } 				from './container.model';
import { cast_array } 			from './base-object.form.model';
import { ResourceFormArray } 						from './resource.form.model';
import { StandardResourceFormGroup } 		from './standard-resource.form.model';
import { ScriptAssociationsFormArray } 	from './script-association.form.model';
import { AssetFormGroup, AssetsFormArray } 	from './asset.form.model';
import {
	ContainerFormControls as Controls,
	ContainerFormGroup as ContainerFGI
} from '@interfaces/models/container.form.interface';


export class ContainerFormGroup 
	extends StandardResourceFormGroup
	implements ContainerFGI {	
	
	controls: Controls;

	constructor( container: Partial<Container> = new Container() ) { 
		if ( !( container instanceof Container ) ) {
			container = new Container( container );
		}

		super( container );

		const assets = this.get( 'assets' ) as AssetsFormArray,
			children = this.get( 'children' ) as ContainersFormArray;

		// cast assets
		this.setControl( 
			'assets', 
			new AssetsFormArray( assets.controls as AssetFormGroup[] )
		);

		// cast children
		this.setControl( 
			'children',
			new ContainersFormArray( children.controls as ContainerFormGroup[] )
		);

	} // end #constructor

}


export class ContainersFormArray extends ResourceFormArray<ContainerFormGroup> {

	constructor( containers = [] as Array<ContainerFormGroup> ) {
		super( cast_array( containers, ContainerFormGroup ) );
	}
}