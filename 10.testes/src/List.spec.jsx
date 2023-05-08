import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from "./List"

let user
const renderList = () => {
  user = userEvent.setup()
  render(<List />);
}

describe('List', () => {
  it('should render the list with the initial items', () => {
    render(<List />);

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('should add a new item to the list', async () => {
    renderList()

    await user.type(screen.getByRole('textbox'), 'Item 3');
    await userEvent.click(screen.getByRole('button', { name: 'Add Item' }));

    expect(screen.getByText('Item 3')).toBeInTheDocument();

    // se usar, pode remover o await do userEvent.click
    // await waitFor(() => expect(screen.getByText('Item 3')).toBeInTheDocument());
  });

  it('should remove an item from the list', async () => {
    renderList()

    const removeButtons = screen.getAllByRole('button', { name: 'Delete' });
    await user.click(removeButtons[0]);

    // como quero testar q não existe, uso o queryByText (o getByText daria erro)
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();

    // se usar, pode remover o await do userEvent.click
    // await waitForElementToBeRemoved(() => screen.getByText('Item 1'));
  });
});
