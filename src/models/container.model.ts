import { StandardResource } from './standard-resource.model';
import { Role } 					from './role.model';				
import { Asset } 					from './asset.model';
import { Metadatum } 			from './metadata.model';
import { ScriptAssociation } 		from './script-association.model';

export class Container extends StandardResource {	
	parent: 			string | Container;
	children: 		Array<string | Container>;
	assets:				Array<string | Asset >;
	scripts: 			ScriptAssociation[];

	constructor( container?: any ) {
		const props = {
			parent: 		undefined, 
			children:		[],
			assets: 		[], 
			scripts: 		[]
		};

		super();
		this.add_properties( Object.keys( props ) );
		this.set_properties( { ...props, ...container } );
		this.cast_properties();

	} // end #constructor


	cast_properties() {
		super.cast_properties();


		// TODO [3]: Not sure why mappings must be wrapped in if statements.
		// 	add_properties call should have already set them, but seem to be undefined otherwise.
		
		// TODO [3]: Use BaseClass#cast_if_object for casting
		if( this.children ) {
			this.children = this.children.map( ( child: Container ) => {

				return ( 
					( child instanceof Object ) ?
					new Container( child ) :
					child
				);

			} ); 
		}

		if ( this.assets ) {
			this.assets = this.assets.map( ( asset: Asset ) => {

				return (
					( asset instanceof Object ) ?
					new Asset( asset ) :
					asset
				);

			} );
		}

		if ( this.parent ) {
			this.parent = (
				( this.parent instanceof Object ) ?
				new Container( this.parent ) :
				this.parent
			);
		}

		if ( this.scripts ) {
			this.scripts = this.scripts.map( ( association: ScriptAssociation ) => {

				return (
					( association instanceof Object ) ?
					new ScriptAssociation( association ) :
					association
				);

			} );
		}

	} // end #cast_properties


} // end class Container
