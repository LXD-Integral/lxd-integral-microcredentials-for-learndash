/**
 * Earned Badges block — editor script.
 *
 * The block is dynamic: its markup comes from PHP (OBLD\Display\BadgeList) on
 * both the front end and in the editor preview, so what an author sets here is
 * necessarily what a visitor sees. This file therefore only registers the
 * block's controls; there is no save() markup to drift out of sync.
 */

import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import metadata from './block.json';

registerBlockType( metadata.name, {
	edit( { attributes, setAttributes } ) {
		const blockProps = useBlockProps();

		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Layout', 'lxd-integral-microcredentials-for-learndash' ) }>
						<RangeControl
							label={ __( 'Columns', 'lxd-integral-microcredentials-for-learndash' ) }
							value={ attributes.columns }
							onChange={ ( columns ) => setAttributes( { columns } ) }
							min={ 1 }
							max={ 6 }
						/>
						<RangeControl
							label={ __( 'Badge size (px)', 'lxd-integral-microcredentials-for-learndash' ) }
							value={ attributes.size }
							onChange={ ( size ) => setAttributes( { size } ) }
							min={ 32 }
							max={ 256 }
							step={ 8 }
						/>
						<ToggleControl
							label={ __( 'Show badge names', 'lxd-integral-microcredentials-for-learndash' ) }
							checked={ attributes.showName }
							onChange={ ( showName ) => setAttributes( { showName } ) }
						/>
						<ToggleControl
							label={ __( 'Link badge images', 'lxd-integral-microcredentials-for-learndash' ) }
							checked={ attributes.link }
							onChange={ ( link ) => setAttributes( { link } ) }
						/>
						<ToggleControl
							label={ __( '“Save & share” link (badge owner only)', 'lxd-integral-microcredentials-for-learndash' ) }
							help={ __( 'Links to the provider page where the owner can save the badge to their Passport or download it.', 'lxd-integral-microcredentials-for-learndash' ) }
							checked={ attributes.showExport }
							onChange={ ( showExport ) => setAttributes( { showExport } ) }
						/>
						<ToggleControl
							label={ __( '“Verify” link', 'lxd-integral-microcredentials-for-learndash' ) }
							help={ __( 'Links to the hosted Open Badges assertion, visible to all visitors.', 'lxd-integral-microcredentials-for-learndash' ) }
							checked={ attributes.showVerify }
							onChange={ ( showVerify ) => setAttributes( { showVerify } ) }
						/>
					</PanelBody>
				</InspectorControls>

				<div { ...blockProps }>
					<ServerSideRender
						block={ metadata.name }
						attributes={ attributes }
					/>
				</div>
			</>
		);
	},

	// Dynamic block: nothing is saved to post content.
	save() {
		return null;
	},
} );
