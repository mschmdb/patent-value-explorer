/**
 * EPO dimension color groups and radar chart axis configuration.
 *
 * These 3 dimensions and their colors are the ONLY non-chrome colors in the app.
 * All pass 3:1 contrast against both light (#fafafa) and dark (#0a0a0a) backgrounds.
 */

import type { IndicatorName } from '$lib/scoring/types';

export interface EpoDimension {
	name: string;
	color: string;
	darkColor: string;
	indicators: IndicatorName[];
}

export const EPO_DIMENSIONS: EpoDimension[] = [
	{
		name: 'Technological Importance',
		color: '#1E40AF',
		darkColor: '#3B82F6',
		indicators: [
			'forward_citations',
			'backward_citations',
			'generality_index',
			'originality_index',
			'patent_scope'
		]
	},
	{
		name: 'Market Relevance',
		color: '#0D7377',
		darkColor: '#14B8A6',
		indicators: ['family_size', 'claims_count', 'renewal_duration', 'grant_lag_days']
	}
];

/** Clockwise axis order for radar chart, grouped by EPO dimension */
export const AXIS_ORDER: IndicatorName[] = [
	'forward_citations', // 12 o'clock (top)
	'generality_index', // ~1:20
	'family_size', // ~2:40
	'claims_count', // ~4:00
	'renewal_duration', // ~5:20
	'grant_lag_days', // ~6:40 (just past bottom)
	'patent_scope', // ~8:00
	'originality_index', // ~9:20
	'backward_citations' // ~10:40
];

/** Get the EPO dimension for a given indicator */
export function getDimensionForIndicator(indicator: IndicatorName): EpoDimension {
	const dimension = EPO_DIMENSIONS.find((d) => d.indicators.includes(indicator));
	if (!dimension) throw new Error(`No dimension found for indicator: ${indicator}`);
	return dimension;
}

/** Color for unavailable/grayed-out indicators */
export const UNAVAILABLE_COLOR = '#D4D4D4';
