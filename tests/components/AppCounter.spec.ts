import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import AppCounter from '~/components/AppCounter.vue';

describe('AppCounter', () => {
  it('increments value on click', async () => {
    render(AppCounter);

    expect(screen.getByText('Times clicked: 0')).toBeInTheDocument();

    const button = screen.getByText('increment');
    await userEvent.click(button);
    await userEvent.click(button);

    expect(screen.getByText('Times clicked: 2')).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
