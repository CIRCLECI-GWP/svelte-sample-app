import { cleanup, render, fireEvent, screen } from '@testing-library/svelte';
import { describe, it, expect, afterEach, beforeEach } from 'vitest';

import ButtonComp from '../components/ButtonComp.svelte';

/**
 * @vitest-environment jsdom
 */
describe('Hello Svelte', () => {
	beforeEach(() => {
		render(ButtonComp, { text: 'Click on button below' });
	});

	afterEach(() => cleanup());

	it("'Click on button below' is rendered on the header", () => {
		const button = screen.getByRole('heading');

		expect(button.innerHTML).toBe('Click on button below');
	});

	it('Button text changes when button is clicked', async () => {
		const button = screen.getByText('Button');

		await fireEvent.click(button);

		expect(button.innerHTML).toBe('Button Clicked');
	});
});
