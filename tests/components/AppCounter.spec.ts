import { createTestingPinia } from '@pinia/testing';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import AppCounter from '~/components/AppCounter.vue';

describe('AppCounter', () => {
  it('increments value on click', async () => {
    render(AppCounter, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const buttonIncrement = screen.getByRole('button', { name: /increment/i });
    const buttonDecrement = screen.getByRole('button', { name: /decrement/i });

    expect(buttonDecrement).toBeDisabled();

    for (let i = 0; i <= 5; i++) {
      await userEvent.click(buttonIncrement);
    }

    expect(buttonIncrement).toBeDisabled();
    expect(buttonDecrement).toBeEnabled();
  });
});
